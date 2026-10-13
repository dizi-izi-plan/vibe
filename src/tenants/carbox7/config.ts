import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "carbox7",
  name: "CarBox7",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "CarBox7 — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, ремонт бензиновых двигателей, ремонт инжекторов, замена масла. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 929 011-44-66",
  address: "Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79290114466",
  telegram: "https://t.me/+79290114466",
  twoGis: "https://2gis.com/firm/70000001089532063",
  rating: "5",
  reviews: "1",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
