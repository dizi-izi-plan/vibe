import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "autohunter",
  name: "Autohunter",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Autohunter — легковой автосервис (Воронеж). Работаем с: шиномонтаж, замена масла, развал-схождение, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 906 582-48-99",
  address: "Планетная улица, 6, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79507633220",
  telegram: "https://t.me/+79507633220",
  twoGis: "https://2gis.com/firm/70000001032772257",
  rating: "4.7",
  reviews: "23",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
