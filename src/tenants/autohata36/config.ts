import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "autohata36",
  name: "Autohata36",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Autohata36 — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, замена масла, компьютерная диагностика автомобилей, ремонт выхлопных систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 951 543-55-75",
  address: "улица Ломоносова, 114/10г к4, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79515435575",
  telegram: "https://t.me/+79515435575",
  twoGis: "https://2gis.com/firm/70000001074791608",
  rating: "4.3",
  reviews: "27",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
