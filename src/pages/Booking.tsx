import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addDays, format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import { formatInTimeZone } from 'date-fns-tz'
import { useShop } from '@/components/ShopLayout'
import { priceFor, useServices } from '@/lib/api'
import { supabase } from '@/lib/supabase'
import type { VehicleClass } from '@/tenants/types'

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().regex(/^[+\d][\d\s()-]{9,}$/, 'Введите телефон полностью'),
  car: z.string().min(2, 'Укажите марку и модель'),
  plate: z.string().min(4, 'Введите госномер')
})
type Form = z.infer<typeof schema>

const field = 'w-full rounded-lg bg-white/10 px-4 py-3 text-base placeholder:text-white/40'
const chip = (on: boolean) => `shrink-0 rounded-full px-4 py-2 text-sm ${on ? 'bg-accent font-semibold text-black' : 'bg-white/10'}`

export default function Booking() {
  const cfg = useShop()
  const nav = useNavigate()
  const { data: services = [] } = useServices(cfg.id)
  const [sid, setSid] = useState<string>()
  const [cls, setCls] = useState<VehicleClass>('sedan')
  const days = useMemo(
    () => Array.from({ length: 14 }, (_, i) => formatInTimeZone(addDays(new Date(), i), cfg.timezone, 'yyyy-MM-dd')),
    [cfg.timezone]
  )
  const [day, setDay] = useState(days[0])
  const [slot, setSlot] = useState<string>()
  const svc = services.find((s) => s.id === sid)

  const slots = useQuery({
    queryKey: ['slots', cfg.id, sid, cls, day],
    enabled: !!sid,
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_free_slots', { p_shop_id: cfg.id, p_service_id: sid, p_class: cls, p_date: day })
      if (error) throw error
      return (data as { slot: string }[]).map((r) => r.slot)
    }
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema) })

  const book = useMutation({
    mutationFn: async (f: Form) => {
      const { data, error } = await supabase.rpc('create_appointment', {
        p_shop_id: cfg.id, p_service_id: sid, p_class: cls, p_starts_at: slot,
        p_name: f.name, p_phone: f.phone, p_car: f.car, p_plate: f.plate
      })
      if (error) throw error
      return (data as { token: string }[])[0]
    },
    onSuccess: (r) => {
      localStorage.setItem(`booking:${cfg.id}`, r.token)
      nav(`/s/${cfg.id}/my`)
    },
    onError: () => { setSlot(undefined); slots.refetch() }
  })

  const err = book.error?.message ?? ''
  return (
    <form onSubmit={handleSubmit((f) => book.mutate(f))} className="mx-auto max-w-2xl space-y-8 px-5 py-8">
      <h1 className="font-display text-4xl font-bold">Запись</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Услуга и класс авто</h2>
        <div className="flex gap-2 overflow-x-auto">
          {cfg.vehicleClasses.map((c) => (
            <button type="button" key={c.id} onClick={() => { setCls(c.id); setSlot(undefined) }} className={chip(cls === c.id)}>{c.label}</button>
          ))}
        </div>
        {services.map((s) => {
          const p = priceFor(s, cls)
          return (
            <button type="button" key={s.id} onClick={() => { setSid(s.id); setSlot(undefined) }}
              className={`flex w-full justify-between rounded-lg px-4 py-3 text-left ${sid === s.id ? 'bg-accent text-black' : 'bg-white/10'}`}>
              <span>{s.name}<span className="block text-sm opacity-70">{p.duration} мин</span></span>
              <span className="font-display text-xl font-bold">{p.price.toLocaleString('ru-RU')} {cfg.currency}</span>
            </button>
          )
        })}
      </section>

      {svc && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Дата и время</h2>
          <div className="flex gap-2 overflow-x-auto">
            {days.map((d) => (
              <button type="button" key={d} onClick={() => { setDay(d); setSlot(undefined) }} className={chip(day === d)}>
                {format(parseISO(d), 'EEE d', { locale: ru })}
              </button>
            ))}
          </div>
          {slots.isLoading && <p className="text-white/60">Ищем свободное время…</p>}
          {slots.data?.length === 0 && <p className="text-white/60">На этот день мест нет — выберите другую дату.</p>}
          <div className="grid grid-cols-4 gap-2">
            {slots.data?.map((t) => (
              <button type="button" key={t} onClick={() => setSlot(t)} className={`rounded-lg py-3 ${slot === t ? 'bg-accent font-semibold text-black' : 'bg-white/10'}`}>
                {formatInTimeZone(new Date(t), cfg.timezone, 'HH:mm')}
              </button>
            ))}
          </div>
        </section>
      )}

      {slot && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Ваши данные</h2>
          <input {...register('name')} placeholder="Имя" autoComplete="name" className={field} />
          {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
          <input {...register('phone')} placeholder="Телефон" type="tel" autoComplete="tel" className={field} />
          {errors.phone && <p className="text-sm text-red-400">{errors.phone.message}</p>}
          <input {...register('car')} placeholder="Марка и модель авто" className={field} />
          {errors.car && <p className="text-sm text-red-400">{errors.car.message}</p>}
          <input {...register('plate')} placeholder="Госномер" className={field} />
          {errors.plate && <p className="text-sm text-red-400">{errors.plate.message}</p>}
          {err.includes('slot_taken') && <p className="text-red-400">Это время только что заняли. Выберите другое.</p>}
          {err && !err.includes('slot_taken') && <p className="text-red-400">Не удалось записаться. Проверьте данные и попробуйте ещё раз.</p>}
          <button disabled={book.isPending} className="w-full rounded-lg bg-accent py-4 text-lg font-semibold text-black disabled:opacity-50">
            {book.isPending ? 'Записываем…' : 'Записаться'}
          </button>
        </section>
      )}
    </form>
  )
}
