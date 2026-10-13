import fs from 'node:fs'
const id = process.argv[2]
if (!id || !/^[a-z0-9-]+$/.test(id)) { console.error('Использование: pnpm new-tenant <shop-id> (a-z, 0-9, -)'); process.exit(1) }
const dst = `src/tenants/${id}`
if (fs.existsSync(dst)) { console.error(`${dst} уже существует`); process.exit(1) }
fs.cpSync('src/tenants/demo', dst, { recursive: true })
const cfg = `${dst}/config.ts`
fs.writeFileSync(cfg, fs.readFileSync(cfg, 'utf8').replace("id: 'demo'", `id: '${id}'`))
const sql = `supabase/tenant_${id}.sql`
fs.writeFileSync(sql, fs.readFileSync('supabase/seed.sql', 'utf8').replaceAll("'demo'", `'${id}'`))
console.log(`Готово:\n 1) отредактируйте ${cfg}\n 2) выполните ${sql} в Supabase SQL Editor\n 3) привяжите владельца: update shops set owner_id='<uuid>' where id='${id}';\n 4) сайт: /s/${id}`)
