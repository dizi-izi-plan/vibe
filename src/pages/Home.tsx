import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarPlus, MapPin, Clock, Phone } from 'lucide-react'
import { useShop } from '@/components/ShopLayout'
import { Reveal } from '@/components/Reveal'
import { priceFor, useServices } from '@/lib/api'
import type { VehicleClass } from '@/tenants/types'

export default function Home() {
  const cfg = useShop()
  const { data: services = [], isLoading } = useServices(cfg.id)
  const [cls, setCls] = useState<VehicleClass>('sedan')

  return (
    <>
      <header className="relative h-[75vh] min-h-[460px] overflow-hidden">
        {cfg.heroImage ? (
          <img src={cfg.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        ) : (
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(135deg, var(--accent) 0 2px, transparent 2px 24px)' }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="absolute bottom-0 max-w-xl p-5">
          <h1 className="font-display text-6xl font-bold leading-[0.95]">{cfg.name}</h1>
          <p className="mt-3 text-lg text-white/85">{cfg.tagline}</p>
        </motion.div>
      </header>

      <main className="mx-auto max-w-2xl space-y-14 px-5 py-10">
        <Reveal>
          <p className="text-lg leading-relaxed text-white/80">{cfg.description}</p>
          {cfg.rating && <p className="mt-3 text-white/70">Рейтинг в 2ГИС: <b className="text-white">{cfg.rating}</b>{cfg.reviews ? ` · отзывов: ${cfg.reviews}` : ''}</p>}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a className="rounded-full bg-white/10 px-4 py-2" href={`tel:${cfg.phone.replace(/[^+\d]/g, '')}`}>Позвонить</a>
            {cfg.whatsapp && <a className="rounded-full bg-white/10 px-4 py-2" href={cfg.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
            {cfg.telegram && <a className="rounded-full bg-white/10 px-4 py-2" href={cfg.telegram} target="_blank" rel="noreferrer">Telegram</a>}
            {cfg.twoGis && <a className="rounded-full bg-white/10 px-4 py-2" href={cfg.twoGis} target="_blank" rel="noreferrer">2ГИС</a>}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl font-bold">Услуги и цены</h2>
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {cfg.vehicleClasses.map((c) => (
              <button key={c.id} onClick={() => setCls(c.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm ${cls === c.id ? 'bg-accent font-semibold text-black' : 'bg-white/10'}`}>
                {c.label}
              </button>
            ))}
          </div>
          {isLoading && <p className="mt-6 text-white/60">Загружаем услуги…</p>}
          <ul className="mt-2 divide-y divide-white/10">
            {services.map((s) => {
              const p = priceFor(s, cls)
              return (
                <li key={s.id} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <div className="text-lg font-medium">{s.name}</div>
                    <div className="text-sm text-white/60">{s.description} · {p.duration} мин</div>
                  </div>
                  <div className="shrink-0 font-display text-2xl font-bold">{p.price.toLocaleString('ru-RU')} {cfg.currency}</div>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl font-bold">Как нас найти</h2>
          <div className="mt-4 space-y-3 text-white/85">
            <p className="flex gap-3"><MapPin className="shrink-0 text-accent" />{cfg.address}</p>
            <p className="flex gap-3"><Clock className="shrink-0 text-accent" />{cfg.hours}</p>
            <a href={`tel:${cfg.phone.replace(/[^+\d]/g, '')}`} className="flex gap-3"><Phone className="shrink-0 text-accent" />{cfg.phone}</a>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl font-bold">Частые вопросы</h2>
          <div className="mt-2 divide-y divide-white/10">
            {cfg.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
                <p className="mt-2 text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

        {/* Скрытая ссылка в админку для владельцев */}
        <div className="mt-16 text-center pb-8">
          <Link
            to={`/s/${cfg.id}/admin`}
            className="text-xs text-white/20 hover:text-white/60 transition-colors"
          >
            Вход для сотрудников
          </Link>
        </div>
      </main>

      <Link to={`/s/${cfg.id}/book`}
        className="fixed bottom-24 right-4 z-30 flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-black shadow-lg">
        <CalendarPlus size={20} /> Записаться
      </Link>
    </>
  )
}
