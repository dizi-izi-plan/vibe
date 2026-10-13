import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "alv",
  name: "Alv",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Alv — легковой автосервис (Воронеж). Работаем с: кузовной ремонт, ремонт ходовой части автомобиля, ремонт электронных систем авто, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 930 409-00-85",
  address: "улица Матросова, 207/2, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79304090085",
  twoGis: "https://2gis.com/firm/70000001057432688",
  rating: "4.2",
  reviews: "14",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
