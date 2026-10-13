import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "autogear",
  name: "AutoGear",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "AutoGear — легковой автосервис (Воронеж). Работаем с: шиномонтаж, ремонт стартеров и генераторов, компьютерная диагностика автомобилей, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 291-40-93",
  address: "проспект Патриотов, 29, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  twoGis: "https://2gis.com/firm/70000001028047080",
  rating: "4.2",
  reviews: "13",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
