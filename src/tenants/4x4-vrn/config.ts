import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "4x4-vrn",
  name: "4x4 vrn",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "4x4 vrn — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, ремонт дизельных двигателей, ремонт бензиновых двигателей, запчасти для иномарок. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 906 590-49-00",
  address: "Ольховый переулок, 1а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79529537665",
  twoGis: "https://2gis.com/firm/70000001025766805",
  rating: "4.2",
  reviews: "14",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
