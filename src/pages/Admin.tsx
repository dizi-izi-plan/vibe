import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formatInTimeZone } from 'date-fns-tz'
import { ru } from 'date-fns/locale'
import { LogOut } from 'lucide-react'
import { useShop } from '@/components/ShopLayout'
import { supabase } from '@/lib/supabase'

const STATUSES: Record<string, string> = {
  pending: 'Ожидает',
  in_progress: 'В работе',
  done: 'Готово',
  paid: 'Оплачено',
  cancelled: 'Отменено'
}

export default function Admin() {
  const cfg = useShop()
  const qc = useQueryClient()
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Проверка авторизации
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  // Получение записей (сработает только если RLS пропустит пользователя)
  const appts = useQuery({
    queryKey: ['admin_appointments', cfg.id],
    enabled: !!session,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*, services(name), bays(name)')
        .eq('shop_id', cfg.id)
        .gte('starts_at', new Date(Date.now() - 86400000).toISOString()) // За последние 24ч и будущие
        .order('starts_at', { ascending: true })
      if (error) throw error
      return data
    }
  })

  // Обновление статуса
  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: string }) => {
      const { error } = await supabase.from('appointments').update({ status }).eq('id', id)
      if (error) throw error
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin_appointments', cfg.id] })
  })

  // Форма логина
  const { register, handleSubmit, formState: { errors } } = useForm()
  const login = useMutation({
    mutationFn: async (f: any) => {
      const { error } = await supabase.auth.signInWithPassword({ email: f.email, password: f.password })
      if (error) throw new Error('Неверный логин или пароль')
    }
  })

  if (loading) return <div className="p-8 text-white/70">Загрузка...</div>

  // Если не авторизован — показываем форму входа
  if (!session) {
    return (
      <div className="mx-auto max-w-sm space-y-6 px-5 py-20">
        <h1 className="font-display text-4xl font-bold">Вход для владельца</h1>
        <form onSubmit={handleSubmit((f) => login.mutate(f))} className="space-y-4">
          <input {...register('email', { required: true })} type="email" placeholder="Email"
            className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/40" />
          <input {...register('password', { required: true })} type="password" placeholder="Пароль"
            className="w-full rounded-lg bg-white/10 px-4 py-3 placeholder:text-white/40" />
          {login.isError && <p className="text-sm text-red-400">{login.error.message}</p>}
          <button disabled={login.isPending} className="w-full rounded-lg bg-accent py-4 font-semibold text-black">
            {login.isPending ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    )
  }

  // Если авторизован, но записей нет (возможно, зашел под чужим аккаунтом)
  if (appts.data && appts.data.length === 0 && !appts.isLoading) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-8">
         <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-4xl font-bold">Управление</h1>
          <button onClick={() => supabase.auth.signOut()}><LogOut className="text-white/70 hover:text-white" /></button>
        </div>
        <p className="text-white/70">Записей пока нет (или у вас нет доступа к этой точке).</p>
      </div>
    )
  }

  // Рабочий стол владельца
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-5 py-8">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-3xl font-bold">Записи: {cfg.name}</h1>
        <button onClick={() => supabase.auth.signOut()} className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
          Выйти <LogOut size={18} />
        </button>
      </div>

      {appts.isLoading && <p>Загрузка записей...</p>}

      <div className="space-y-4">
        {appts.data?.map((a: any) => (
          <div key={a.id} className={`rounded-xl border p-5 ${a.status === 'cancelled' ? 'border-red-900/50 bg-red-950/20 opacity-60' : 'border-white/10 bg-white/5'}`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

              {/* Информация о клиенте и времени */}
              <div>
                <div className="font-display text-xl font-bold text-accent">
                  {formatInTimeZone(new Date(a.starts_at), cfg.timezone, "d MMMM, HH:mm", { locale: ru })}
                </div>
                <div className="mt-1 text-lg font-medium">{a.customer_name} · {a.phone}</div>
                <div className="text-white/70">
                  {a.car_model} ({a.plate}) · {a.services?.name ?? 'Услуга удалена'}
                </div>
                <div className="mt-2 text-sm text-white/50">
                  Бокс: {a.bays?.name} · Сумма: {a.price.toLocaleString('ru-RU')} {cfg.currency}
                </div>
              </div>

              {/* Управление статусом */}
              <div className="shrink-0">
                <select
                  value={a.status}
                  onChange={(e) => updateStatus.mutate({ id: a.id, status: e.target.value })}
                  disabled={updateStatus.isPending}
                  className="rounded-lg bg-black/50 border border-white/20 px-3 py-2 text-sm outline-none focus:border-accent"
                >
                  {Object.entries(STATUSES).map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
