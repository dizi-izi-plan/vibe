import type { TenantConfig } from './types'

export const DEFAULT_CLASSES: TenantConfig['vehicleClasses'] = [
  { id: 'sedan', label: 'Седан' },
  { id: 'crossover', label: 'Кроссовер' },
  { id: 'minivan', label: 'Микроавтобус' }
]
export const DEFAULT_FAQ: TenantConfig['faq'] = [
  { q: 'Как записаться?', a: 'Выберите услугу, класс авто и свободное время — запись подтвердится сразу.' },
  { q: 'Можно ли отменить запись?', a: 'Да, в разделе «Моя запись». Если не получается — позвоните нам.' },
  { q: 'Как узнать точную стоимость?', a: 'Цена в записи ориентировочная. Итог зависит от состояния автомобиля — мастер согласует его до начала работ.' }
]
