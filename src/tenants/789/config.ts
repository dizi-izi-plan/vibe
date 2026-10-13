import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "789",
  name: "789",
  tagline: "Обслуживание автомобильных климатических систем. Онлайн-запись без звонков.",
  description: "789 — обслуживание автомобильных климатических систем (Воронеж). Работаем с: ремонт стартеров и генераторов, ремонт турбин, хранение шин, ремонт дизельных двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 919 180-63-62",
  address: "Ольховая улица, 7а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  twoGis: "https://2gis.com/firm/70000001103006246",
  rating: "5",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
