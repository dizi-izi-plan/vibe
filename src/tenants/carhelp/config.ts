import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "carhelp",
  name: "Carhelp",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Carhelp — легковой автосервис (Воронеж). Работаем с: шиномонтаж, ремонт ходовой части автомобиля, ремонт стартеров и генераторов, кузовной ремонт. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 228-68-81",
  address: "улица Шишкова, 77/2, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79202286881",
  twoGis: "https://2gis.com/firm/70000001026932258",
  rating: "4.1",
  reviews: "18",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
