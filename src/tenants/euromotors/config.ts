import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "euromotors",
  name: "Euromotors",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Euromotors — легковой автосервис (Воронеж). Работаем с: ремонт дизельных двигателей, ремонт акпп, ремонт ходовой части автомобиля, обслуживание автомобильных климатических систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 229-59-08",
  address: "улица Хлеборобов, 8, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79202295908",
  twoGis: "https://2gis.com/firm/70000001084321191",
  rating: "4.9",
  reviews: "34",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
