import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "alliance",
  name: "Alliance",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Alliance — легковой автосервис (Воронеж). Работаем с: запчасти для иномарок, автоаксессуары, ремонт ходовой части автомобиля, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 224-51-16",
  address: "улица 9 Января, 260/1, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  twoGis: "https://2gis.com/firm/4363390420300840",
  rating: "5",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
