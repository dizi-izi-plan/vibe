import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avtoservis-36",
  name: "avtoservis_36",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "avtoservis_36 — легковой автосервис (Воронеж). Работаем с: обслуживание автомобильных климатических систем, ремонт ходовой части автомобиля, ремонт дизельных двигателей, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 950 773-97-68",
  address: "Волгоградская улица, 43а/3, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79507739768",
  twoGis: "https://2gis.com/firm/70000001029822023",
  rating: "4.8",
  reviews: "17",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
