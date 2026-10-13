import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "a1",
  name: "A1",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "A1 — легковой автосервис (Воронеж). Работаем с: автомойки, шиномонтаж, замена масла, обслуживание автомобильных климатических систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 333-50-58",
  address: "улица Антонова-Овсеенко, 37/7, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79515419280",
  twoGis: "https://2gis.com/firm/70000001028266261",
  rating: "4.3",
  reviews: "44",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
