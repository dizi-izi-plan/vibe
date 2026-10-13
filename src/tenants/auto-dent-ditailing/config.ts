import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "auto-dent-ditailing",
  name: "Auto Dent Ditailing",
  tagline: "Установка и ремонт автостёкол. Онлайн-запись без звонков.",
  description: "Auto Dent Ditailing — установка и ремонт автостёкол (Воронеж). Работаем с: кузовной ремонт, детейлинг. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 909 217-05-13",
  address: "Лечебный переулок, 1а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79092170513",
  twoGis: "https://2gis.com/firm/70000001028560960",
  rating: "4.3",
  reviews: "11",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
