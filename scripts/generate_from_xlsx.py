"""Генерация сайтов-тенантов из xlsx: python3 scripts/generate_from_xlsx.py data/services.xlsx"""
import sys, re, json, csv, pathlib
import pandas as pd

src = sys.argv[1] if len(sys.argv) > 1 else 'data/services.xlsx'
df = pd.concat(pd.read_excel(src, sheet_name=None, dtype=str).values(), ignore_index=True).fillna('')
df['key'] = df['2GIS URL'].where(df['2GIS URL'] != '', df['Наименование'] + df['Адрес'])
df = df.drop_duplicates('key').reset_index(drop=True)

TR = dict(zip('абвгдеёжзийклмнопрстуфхцчшщъыьэюя', 'a b v g d e e zh z i y k l m n o p r s t u f kh ts ch sh sch - y - e yu ya'.split()))
def slugify(s):
    t = ''.join(TR.get(c, c) for c in s.lower())
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-') or 'shop'

def phone(raw):
    d = re.sub(r'\D', '', raw.split('(')[0])
    if len(d) == 11 and d[0] in '78': d = '7' + d[1:]
    if len(d) == 10: d = '7' + d
    return f'+7 {d[1:4]} {d[4:7]}-{d[7:9]}-{d[9:11]}' if len(d) == 11 else raw

# рубрика -> (услуга, ориентировочная цена, минуты). ЦЕНЫ — ЗАГЛУШКИ, заменить реальными.
MAP = {
 'Замена масла': ('Замена масла и фильтров', 1800, 45),
 'Компьютерная диагностика автомобилей': ('Компьютерная диагностика', 1500, 45),
 'Шиномонтаж': ('Шиномонтаж (4 колеса)', 2400, 60),
 'Развал-схождение': ('Развал-схождение', 2500, 60),
 'Ремонт ходовой части автомобиля': ('Диагностика ходовой части', 1500, 60),
 'Обслуживание автомобильных климатических систем': ('Обслуживание кондиционера', 3000, 90),
 'Детейлинг': ('Детейлинг кузова', 12000, 300),
 'Автомойки': ('Комплексная мойка', 1500, 60),
 'Кузовной ремонт': ('Осмотр и расчёт кузовного ремонта', 1000, 60),
 'Ремонт бензиновых двигателей': ('Диагностика двигателя', 2500, 90),
 'Ремонт дизельных двигателей': ('Диагностика дизельного двигателя', 3000, 90),
 'Ремонт АКПП': ('Диагностика АКПП', 2500, 90),
 'Ремонт МКПП': ('Диагностика МКПП', 2500, 90),
 'Ремонт стартеров и генераторов': ('Ремонт стартера и генератора', 3000, 120),
 'Ремонт электронных систем авто': ('Диагностика электрики', 2000, 90),
 'Ремонт выхлопных систем': ('Ремонт выхлопной системы', 2500, 90),
 'Установка и ремонт автооптики': ('Установка и ремонт оптики', 3000, 90),
 'Ремонт инжекторов': ('Чистка и ремонт инжекторов', 3500, 120),
 'Тюнинг': ('Тюнинг: консультация и расчёт', 1000, 60),
 'Автозвук': ('Установка автозвука', 5000, 120),
 'Автосигнализации': ('Установка сигнализации', 6000, 180),
 'Антикоррозийная обработка авто': ('Антикоррозийная обработка', 8000, 240),
 'Хранение шин': ('Сезонное хранение шин', 2500, 30),
 'Установка и ремонт автостёкол': ('Замена и ремонт автостёкол', 4000, 120),
 'Ремонт турбин': ('Диагностика турбины', 3000, 90),
 'Ремонт рулевых реек': ('Диагностика рулевой рейки', 2500, 90),
}
FALLBACK = ('Диагностика и консультация', 1500, 60)
ACCENTS = ['#FF4D00', '#00E5FF', '#FFC400', '#39FF88', '#FF2D6F', '#7C5CFF']
q = lambda s: "'" + s.replace("'", "''") + "'"

used, rows, sql_shops, sql_services, ids = set(), [], [], [], []
for i, r in df.iterrows():
    name = r['Наименование'].strip()
    slug = base = slugify(name); n = 2
    while slug in used or slug == 'demo': slug = f'{base}-{n}'; n += 1
    used.add(slug); ids.append(slug)
    rubrics = [x.strip() for x in r['Рубрики'].split(';') if x.strip()]
    svcs, seen = [], set()
    for rb in rubrics:
        if rb in MAP and MAP[rb][0] not in seen:
            seen.add(MAP[rb][0]); svcs.append(MAP[rb])
    svcs = (svcs or [FALLBACK])[:6]
    city = r['Город'].strip() or 'Воронеж'
    main = rubrics[0] if rubrics else 'Автосервис'
    desc = f"{name} — {main.lower()} ({city}). " + (f"Работаем с: {', '.join(x.lower() for x in rubrics[1:5])}. " if len(rubrics) > 1 else '') + 'Выберите услугу и удобное время — запись займёт минуту.'
    cfg = {
        'id': slug, 'name': name, 'tagline': f'{main}. Онлайн-запись без звонков.', 'description': desc,
        'phone': phone(r['Телефон']), 'address': (r['Адрес'].strip() + f', {city}').strip(', '),
        'hours': 'Уточняйте по телефону', 'timezone': 'Europe/Moscow', 'currency': '₽', 'accent': ACCENTS[i % len(ACCENTS)],
    }
    for k, col in (('whatsapp', 'WhatsApp'), ('telegram', 'Telegram'), ('twoGis', '2GIS URL'), ('rating', 'Рейтинг'), ('reviews', 'Количество отзывов')):
        if r[col].strip(): cfg[k] = r[col].strip()
    body = ',\n'.join(f'  {k}: {json.dumps(v, ensure_ascii=False)}' for k, v in cfg.items())
    d = pathlib.Path(f'src/tenants/{slug}'); d.mkdir(parents=True, exist_ok=True)
    (d / 'config.ts').write_text(
        "import type { TenantConfig } from '../types'\nimport { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'\n\n"
        f"export const config: TenantConfig = {{\n{body},\n  vehicleClasses: DEFAULT_CLASSES,\n  faq: DEFAULT_FAQ\n}}\n", encoding='utf-8')
    sql_shops.append(f'({q(slug)}, {q(name)})')
    for j, (sn, price, dur) in enumerate(svcs):
        sql_services.append(f'({q(slug)}, {q(sn)}, {price}, {dur}, {j})')
    rows.append([name, slug, f'/s/{slug}', cfg['phone'], cfg['address'], cfg.get('whatsapp', ''), cfg.get('telegram', ''), cfg.get('twoGis', '')])

idlist = ', '.join(q(x) for x in ids)
pathlib.Path('supabase/tenants_voronezh.sql').write_text(f"""-- Сгенерировано scripts/generate_from_xlsx.py. Запускать ОДИН раз после schema.sql.
-- ЦЕНЫ И ДЛИТЕЛЬНОСТИ — заглушки; график по умолчанию Пн–Сб, 2 бокса. Владельцы (shops.owner_id) не заданы.
insert into shops (id, name) values
{',\n'.join(sql_shops)}
on conflict do nothing;
insert into settings (shop_id) select id from shops where id in ({idlist}) on conflict do nothing;
insert into bays (shop_id, name) select s.id, 'Бокс ' || g from shops s, generate_series(1, 2) g
  where s.id in ({idlist}) and not exists (select 1 from bays b where b.shop_id = s.id);
insert into services (shop_id, name, base_price, base_duration, sort) values
{',\n'.join(sql_services)};
insert into service_prices_by_class (service_id, vehicle_class, price, duration_min)
select s.id, c.cls, (round(s.base_price * c.k / 10) * 10)::int, ceil(s.base_duration * c.d / 5)::int * 5
from services s, (values ('sedan', 1.0, 1.0), ('crossover', 1.25, 1.2), ('minivan', 1.5, 1.4)) as c(cls, k, d)
where s.shop_id in ({idlist}) on conflict do nothing;
""", encoding='utf-8')
with open('tenants_index.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f); w.writerow(['Название', 'shop_id', 'Путь', 'Телефон', 'Адрес', 'WhatsApp', 'Telegram', '2GIS']); w.writerows(rows)
print(len(ids), 'сайтов')
