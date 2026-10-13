import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "dg-service",
  name: "Dg_Service",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Dg_Service — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, замена масла, компьютерная диагностика автомобилей, ремонт выхлопных систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 300-30-60",
  address: "Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  whatsapp: "https://wa.me/79529592255",
  telegram: "https://t.me/+79529592255",
  twoGis: "https://2gis.com/firm/70000001091237894",
  rating: "5",
  reviews: "77",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
