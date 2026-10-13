import { createContext, useContext, useEffect, type CSSProperties } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Home, Wrench, CalendarCheck } from 'lucide-react'
import { tenants } from '@/tenants'
import type { TenantConfig } from '@/tenants/types'

const Ctx = createContext<TenantConfig | null>(null)
export const useShop = () => {
  const c = useContext(Ctx)
  if (!c) throw new Error('useShop outside ShopLayout')
  return c
}

export function ShopLayout() {
  const { shopId = '' } = useParams()
  const cfg = tenants[shopId]
  useEffect(() => { if (cfg) document.title = `${cfg.name} — онлайн-запись` }, [cfg])
  if (!cfg) return <div className="p-8 text-white/70">Точка не найдена</div>
  const base = `/s/${cfg.id}`
  const items = [
    { to: base, label: 'Главная', icon: Home, end: true },
    { to: `${base}/book`, label: 'Услуги', icon: Wrench, end: false },
    { to: `${base}/my`, label: 'Моя запись', icon: CalendarCheck, end: false }
  ]
  return (
    <Ctx.Provider value={cfg}>
      <div style={{ '--accent': cfg.accent } as CSSProperties} className="min-h-screen pb-28">
        <Outlet />
        <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-black/50 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => `flex flex-1 flex-col items-center gap-1 py-3 text-xs ${isActive ? 'text-accent' : 'text-white/70'}`}>
              <Icon size={22} />{label}
            </NavLink>
          ))}
        </nav>
      </div>
    </Ctx.Provider>
  )
}
