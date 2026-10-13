import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "800-oborotov-oyl",
  name: "800 оборотов-ойл",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "800 оборотов-ойл — легковой автосервис (Воронеж). Работаем с: замена масла, ремонт ходовой части автомобиля, запчасти для иномарок, шины и диски. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 256-64-65",
  address: "Монтажный проезд, 1д/1, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79529566465",
  twoGis: "https://2gis.com/firm/70000001006142606",
  rating: "4.3",
  reviews: "13",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
