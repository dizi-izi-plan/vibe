import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { formatInTimeZone } from 'date-fns-tz'
import { ru } from 'date-fns/locale'
import { useShop } from '@/components/ShopLayout'
import { supabase } from '@/lib/supabase'

interface Appt { starts_at: string; status: string; service_name: string | null; car_model: string; price: number }
const STATUS: Record<string, string> = { pending: 'Ожидает', in_progress: 'В работе', done: 'Готово', paid: 'Оплачено', cancelled: 'Отменено' }

export default function MyBooking() {
  const cfg = useShop()
  const [sp] = useSearchParams()
  const token = sp.get('t') ?? localStorage.getItem(`booking:${cfg.id}`)
  const q = useQuery({
    queryKey: ['my', token],
    enabled: !!token,
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_my_appointment', { p_token: token })
      if (error) throw error
      return ((data as Appt[])[0] ?? null)
    }
  })
  const cancel = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.rpc('cancel_appointment', { p_token: token })
      if (error) throw error
    },
    onSuccess: () => q.refetch()
  })
  const a = q.data
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-5 py-8">
      <h1 className="font-display text-4xl font-bold">Моя запись</h1>
      {!a ? (
        <p className="text-white/70">Активных записей нет. <Link className="text-accent underline" to={`/s/${cfg.id}/book`}>Записаться</Link></p>
      ) : (
        <div className="space-y-2 rounded-lg bg-white/10 p-5">
          <div className="text-2xl font-semibold">{a.service_name}</div>
          <div>{formatInTimeZone(new Date(a.starts_at), cfg.timezone, "d MMMM, HH:mm", { locale: ru })}</div>
          <div className="text-white/70">{a.car_model} · {a.price.toLocaleString('ru-RU')} {cfg.currency}</div>
          <div className="font-semibold text-accent">{STATUS[a.status] ?? a.status}</div>
          {a.status === 'pending' && (
            <button onClick={() => cancel.mutate()} disabled={cancel.isPending} className="mt-3 rounded-lg border border-white/30 px-4 py-3">
              Отменить запись
            </button>
          )}
          {cancel.isError && <p className="text-red-400">Отмена недоступна. Позвоните: {cfg.phone}</p>}
        </div>
      )}
    </div>
  )
}
