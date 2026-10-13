import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "bayer36",
  name: "Bayer36",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Bayer36 — легковой автосервис (Воронеж). Работаем с: замена масла, ремонт ходовой части автомобиля, ремонт выхлопных систем, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 951-09-57",
  address: "Брянский проезд, 9, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  whatsapp: "https://wa.me/79009510957",
  telegram: "https://t.me/+79009510957",
  twoGis: "https://2gis.com/firm/70000001030919835",
  rating: "4.2",
  reviews: "16",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
