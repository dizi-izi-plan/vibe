import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "ard",
  name: "Ard",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Ard — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, замена масла, ремонт бензиновых двигателей, ремонт дизельных двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 903 654-54-78",
  address: "Ударная улица, 56/2, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79036545478",
  telegram: "https://t.me/+79036545478",
  twoGis: "https://2gis.com/firm/70000001100880745",
  rating: "5",
  reviews: "1",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
