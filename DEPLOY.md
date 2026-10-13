# Деплой за 15–20 минут

## 1. Supabase
1. supabase.com → **New project** (регион ближе к клиентам), задайте пароль БД.
2. **SQL Editor → New query** → вставьте `supabase/schema.sql` → **Run**.
3. Новый запрос → вставьте `supabase/seed.sql` → **Run** (демо-данные для точки `demo`).
4. **Authentication → Users → Add user** → email + пароль владельца (отметьте *Auto Confirm*). Скопируйте UUID пользователя.
5. SQL Editor: `update shops set owner_id = '<UUID>' where id = 'demo';`
6. **Authentication → Providers → Email**: отключите *Allow new users to sign up*, чтобы никто не регистрировался сам.
7. **Project Settings → API**: скопируйте *Project URL* и ключ *anon public*.

## 2. Локальная проверка
```bash
cp .env.example .env     # вставьте URL и anon-ключ
pnpm install
pnpm dev                 # http://localhost:5173/s/demo
```

## 3. Vercel
1. Залейте проект в GitHub. На vercel.com → **Add New → Project** → выберите репозиторий (Framework: Vite, определится сам).
2. **Environment Variables**: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
3. **Deploy**. Сайт будет по адресу `https://<проект>.vercel.app/s/demo`.
4. Для PWA: откройте сайт на телефоне → «Добавить на главный экран». Замените `public/icon-192.png` и `icon-512.png` своими иконками.

## 4. Новая автомастерская
```bash
pnpm new-tenant mojka-ivanova
```
Скрипт создаст `src/tenants/mojka-ivanova/config.ts` и `supabase/tenant_mojka-ivanova.sql`.
Отредактируйте конфиг, выполните SQL в Supabase, привяжите владельца (`update shops set owner_id=…`), сделайте push. Сайт: `/s/mojka-ivanova`.
(Для отдельного домена на точку — добавьте домен в Vercel и редирект на `/s/<shop_id>`.)

## Проверка защиты от овербукинга
В SQL Editor вызовите `select * from create_appointment(...)` дважды на одно время при одном активном боксе: вторая попытка вернёт ошибку `slot_taken`.
