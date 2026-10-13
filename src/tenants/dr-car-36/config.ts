import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "dr-car-36",
  name: "Dr.Car.36",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Dr.Car.36 — легковой автосервис (Воронеж). Работаем с: ремонт мкпп, ремонт выхлопных систем, ремонт дизельных двигателей, ремонт дизельной топливной системы. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 905 654-59-85",
  address: "проспект Патриотов, 25д, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79056545985",
  telegram: "https://t.me/+79056545985",
  twoGis: "https://2gis.com/firm/70000001099949901",
  rating: "4.6",
  reviews: "20",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
