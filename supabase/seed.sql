-- Демо-данные для точки 'demo'. Запускать ОДИН раз после schema.sql.
insert into shops (id, name) values ('demo', 'AutoPro Detailing') on conflict do nothing;
insert into settings (shop_id) values ('demo') on conflict do nothing;
insert into bays (shop_id, name) select 'demo', 'Бокс ' || g from generate_series(1, 3) g
  where not exists (select 1 from bays where shop_id = 'demo');

insert into services (shop_id, name, description, base_price, base_duration, sort) values
  ('demo', 'Комплексная мойка', 'Кузов, салон, стёкла, чернение резины', 1500, 60, 1),
  ('demo', 'Химчистка салона', 'Глубокая чистка сидений, потолка и пластика', 6000, 180, 2),
  ('demo', 'Полировка кузова', 'Удаление царапин и голограмм, защитный воск', 12000, 300, 3),
  ('demo', 'Шиномонтаж (4 колеса)', 'Снятие, балансировка, установка', 2400, 60, 4);

-- Коэффициенты по классам: цена и длительность
insert into service_prices_by_class (service_id, vehicle_class, price, duration_min)
select s.id, c.cls, (round(s.base_price * c.k / 10) * 10)::int, ceil(s.base_duration * c.d / 5)::int * 5
from services s,
     (values ('sedan', 1.0, 1.0), ('crossover', 1.25, 1.2), ('minivan', 1.5, 1.4)) as c(cls, k, d)
where s.shop_id = 'demo';
