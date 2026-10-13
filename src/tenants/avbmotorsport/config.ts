import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avbmotorsport",
  name: "Avbmotorsport",
  tagline: "Ремонт карбюраторов. Онлайн-запись без звонков.",
  description: "Avbmotorsport — ремонт карбюраторов (Воронеж). Работаем с: компьютерная диагностика автомобилей, ремонт инжекторов. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 455-54-63",
  address: "переулок Здоровья, 8, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79204555463",
  twoGis: "https://2gis.com/firm/70000001033489545",
  rating: "1.4",
  reviews: "1",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
