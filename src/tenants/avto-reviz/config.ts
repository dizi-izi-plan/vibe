import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avto-reviz",
  name: "Avto Reviz",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Avto Reviz — легковой автосервис (Воронеж). Работаем с: ремонт стартеров и генераторов, ремонт электронных систем авто, ремонт ходовой части автомобиля, компьютерная диагностика автомобилей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 951 567-56-85",
  address: "улица Хользунова, 91а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79515675685",
  telegram: "https://t.me/+79518700348",
  twoGis: "https://2gis.com/firm/70000001038242268",
  rating: "5",
  reviews: "16",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
