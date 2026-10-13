import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "aservise",
  name: "Aservise",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Aservise — легковой автосервис (Воронеж). Работаем с: замена масла, компьютерная диагностика автомобилей, ремонт бензиновых двигателей, обслуживание автомобильных климатических систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 910 288-43-43",
  address: "улица Хользунова, 97, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79102884343",
  twoGis: "https://2gis.com/firm/70000001060033201",
  rating: "4",
  reviews: "9",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
