import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "car-service",
  name: "Car-service",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Car-service — легковой автосервис (Воронеж). Работаем с: шиномонтаж, ремонт мкпп, ремонт дизельных двигателей, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 952 559-17-67",
  address: "Учебный переулок, 13а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  whatsapp: "https://wa.me/79525591767",
  twoGis: "https://2gis.com/firm/70000001053810763",
  rating: "4.6",
  reviews: "10",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
