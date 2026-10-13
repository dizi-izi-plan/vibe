import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "energy-service",
  name: "Energy service",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Energy service — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, ремонт дизельных двигателей, ремонт бензиновых двигателей, запчасти для иномарок. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 903 855-11-25",
  address: "улица Героев Стратосферы, 22д, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79038551125",
  twoGis: "https://2gis.com/firm/70000001059676336",
  rating: "5",
  reviews: "6",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
