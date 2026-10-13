import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "black-fish-36",
  name: "Black fish 36",
  tagline: "Тюнинг. Онлайн-запись без звонков.",
  description: "Black fish 36 — тюнинг (Воронеж). Работаем с: антикоррозийная обработка авто, автозвук, ремонт ходовой части автомобиля. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 300-53-43",
  address: "улица Конструкторов, 60а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79003005343",
  telegram: "https://t.me/+79003005343",
  twoGis: "https://2gis.com/firm/70000001082913886",
  rating: "5",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
