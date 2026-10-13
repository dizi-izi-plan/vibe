-- Выполнить целиком в Supabase → SQL Editor. Безопасно запускать на пустом проекте.
create extension if not exists btree_gist;

create table shops (
  id text primary key,
  name text not null,
  owner_id uuid references auth.users(id) on delete set null
);

create table settings (
  shop_id text primary key references shops(id) on delete cascade,
  timezone text not null default 'Europe/Moscow',
  slot_step_min int not null default 30 check (slot_step_min between 5 and 240),
  -- ключ = ISO-день недели (1=пн … 7=вс), значение = [открытие, закрытие]; нет ключа = выходной
  work_hours jsonb not null default '{"1":["09:00","20:00"],"2":["09:00","20:00"],"3":["09:00","20:00"],"4":["09:00","20:00"],"5":["09:00","20:00"],"6":["10:00","18:00"]}'
);

create table bays (
  id uuid primary key default gen_random_uuid(),
  shop_id text not null references shops(id) on delete cascade,
  name text not null,
  active boolean not null default true
);

create table services (
  id uuid primary key default gen_random_uuid(),
  shop_id text not null references shops(id) on delete cascade,
  name text not null,
  description text,
  base_price int not null check (base_price >= 0),
  base_duration int not null check (base_duration > 0),
  active boolean not null default true,
  sort int not null default 0
);

create table service_prices_by_class (
  service_id uuid not null references services(id) on delete cascade,
  vehicle_class text not null check (vehicle_class in ('sedan','crossover','minivan')),
  price int not null check (price >= 0),
  duration_min int not null check (duration_min > 0),
  primary key (service_id, vehicle_class)
);

create table appointments (
  id uuid primary key default gen_random_uuid(),
  shop_id text not null references shops(id) on delete cascade,
  service_id uuid references services(id) on delete set null,
  bay_id uuid not null references bays(id),
  vehicle_class text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending','in_progress','done','paid','cancelled')),
  customer_name text not null,
  phone text not null,
  car_model text not null,
  plate text not null,
  price int not null,
  cancel_token uuid not null default gen_random_uuid(),
  created_at timestamptz not null default now(),
  check (ends_at > starts_at),
  -- жёсткая гарантия на уровне БД: в одном боксе записи не пересекаются
  constraint no_bay_overlap exclude using gist (bay_id with =, tstzrange(starts_at, ends_at) with &&) where (status <> 'cancelled')
);
create index on appointments (shop_id, starts_at);
create unique index on appointments (cancel_token);

create table gallery (
  id uuid primary key default gen_random_uuid(),
  shop_id text not null references shops(id) on delete cascade,
  image_path text not null,
  before_path text,
  caption text,
  created_at timestamptz not null default now()
);

-- ============ RLS ============
create or replace function is_owner(p_shop text) returns boolean
language sql security definer stable set search_path = public as
$$ select exists (select 1 from shops where id = p_shop and owner_id = auth.uid()) $$;

alter table shops enable row level security;
alter table settings enable row level security;
alter table bays enable row level security;
alter table services enable row level security;
alter table service_prices_by_class enable row level security;
alter table appointments enable row level security;
alter table gallery enable row level security;

create policy shops_read on shops for select using (true);
create policy shops_owner on shops for update to authenticated using (owner_id = auth.uid());
create policy settings_read on settings for select using (true);
create policy settings_owner on settings for all to authenticated using (is_owner(shop_id)) with check (is_owner(shop_id));
create policy services_read on services for select using (active or is_owner(shop_id));
create policy services_owner on services for all to authenticated using (is_owner(shop_id)) with check (is_owner(shop_id));
create policy prices_read on service_prices_by_class for select using (true);
create policy prices_owner on service_prices_by_class for all to authenticated
  using (exists (select 1 from services s where s.id = service_id and is_owner(s.shop_id)))
  with check (exists (select 1 from services s where s.id = service_id and is_owner(s.shop_id)));
create policy gallery_read on gallery for select using (true);
create policy gallery_owner on gallery for all to authenticated using (is_owner(shop_id)) with check (is_owner(shop_id));
create policy bays_owner on bays for all to authenticated using (is_owner(shop_id)) with check (is_owner(shop_id));
-- appointments: анонимам НЕТ прямого доступа (ни select, ни insert). Создание — только через RPC ниже.
create policy appointments_owner on appointments for all to authenticated using (is_owner(shop_id)) with check (is_owner(shop_id));

-- ============ RPC ============
-- Свободные слоты на дату (без раскрытия чужих данных)
create or replace function get_free_slots(p_shop_id text, p_service_id uuid, p_class text, p_date date)
returns table (slot timestamptz) language plpgsql security definer stable set search_path = public as $$
declare s settings; dur int; win jsonb; t timestamp; st timestamptz; en timestamptz; nbays int;
begin
  select * into s from settings where shop_id = p_shop_id;
  if not found then return; end if;
  select coalesce(p.duration_min, sv.base_duration) into dur
    from services sv left join service_prices_by_class p on p.service_id = sv.id and p.vehicle_class = p_class
    where sv.id = p_service_id and sv.shop_id = p_shop_id and sv.active;
  if dur is null then return; end if;
  win := s.work_hours -> (extract(isodow from p_date)::int)::text;
  if win is null then return; end if;
  select count(*) into nbays from bays where shop_id = p_shop_id and active;
  t := p_date + (win->>0)::time;
  while t + make_interval(mins => dur) <= p_date + (win->>1)::time loop
    st := t at time zone s.timezone;
    en := st + make_interval(mins => dur);
    if st > now() and (
      select count(distinct a.bay_id) from appointments a
      where a.shop_id = p_shop_id and a.status <> 'cancelled' and tstzrange(a.starts_at, a.ends_at) && tstzrange(st, en)
    ) < nbays then slot := st; return next; end if;
    t := t + make_interval(mins => s.slot_step_min);
  end loop;
end $$;

-- Создание записи: advisory-lock на магазин + поиск свободного бокса + exclusion constraint = нет овербукинга
create or replace function create_appointment(
  p_shop_id text, p_service_id uuid, p_class text, p_starts_at timestamptz,
  p_name text, p_phone text, p_car text, p_plate text)
returns table (appointment_id uuid, token uuid, start_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare s settings; dur int; prc int; fin timestamptz; win jsonb; loc timestamp; bay uuid; rec appointments;
begin
  if length(trim(p_name)) < 2 or length(trim(p_phone)) < 10 or length(trim(p_plate)) < 4 then raise exception 'invalid_input'; end if;
  perform pg_advisory_xact_lock(hashtext(p_shop_id));
  select * into s from settings where shop_id = p_shop_id;
  if not found then raise exception 'shop_not_found'; end if;
  select coalesce(p.duration_min, sv.base_duration), coalesce(p.price, sv.base_price) into dur, prc
    from services sv left join service_prices_by_class p on p.service_id = sv.id and p.vehicle_class = p_class
    where sv.id = p_service_id and sv.shop_id = p_shop_id and sv.active;
  if dur is null then raise exception 'service_not_found'; end if;
  if p_starts_at <= now() then raise exception 'in_past'; end if;
  fin := p_starts_at + make_interval(mins => dur);
  loc := p_starts_at at time zone s.timezone;
  win := s.work_hours -> (extract(isodow from loc)::int)::text;
  if win is null or loc::time < (win->>0)::time or (fin at time zone s.timezone)::time > (win->>1)::time then
    raise exception 'outside_hours';
  end if;
  select b.id into bay from bays b
    where b.shop_id = p_shop_id and b.active
      and not exists (select 1 from appointments a where a.bay_id = b.id and a.status <> 'cancelled'
                      and tstzrange(a.starts_at, a.ends_at) && tstzrange(p_starts_at, fin))
    order by b.name limit 1;
  if bay is null then raise exception 'slot_taken'; end if;
  insert into appointments (shop_id, service_id, bay_id, vehicle_class, starts_at, ends_at, customer_name, phone, car_model, plate, price)
    values (p_shop_id, p_service_id, bay, p_class, p_starts_at, fin, trim(p_name), trim(p_phone), trim(p_car), upper(trim(p_plate)), prc)
    returning * into rec;
  return query select rec.id, rec.cancel_token, rec.starts_at;
exception when exclusion_violation then raise exception 'slot_taken';
end $$;

create or replace function get_my_appointment(p_token uuid)
returns table (starts_at timestamptz, status text, service_name text, car_model text, price int)
language sql security definer stable set search_path = public as
$$ select a.starts_at, a.status, s.name, a.car_model, a.price from appointments a left join services s on s.id = a.service_id where a.cancel_token = p_token $$;

create or replace function cancel_appointment(p_token uuid) returns boolean
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  update appointments set status = 'cancelled' where cancel_token = p_token and status = 'pending' and starts_at > now();
  get diagnostics n = row_count;
  return n > 0;
end $$;

-- ============ Storage (фото «Наши работы») ============
insert into storage.buckets (id, name, public) values ('gallery', 'gallery', true) on conflict do nothing;
create policy gallery_files_read on storage.objects for select using (bucket_id = 'gallery');
create policy gallery_files_owner on storage.objects for all to authenticated
  using (bucket_id = 'gallery' and exists (select 1 from shops where owner_id = auth.uid()))
  with check (bucket_id = 'gallery' and exists (select 1 from shops where owner_id = auth.uid()));
