import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "dmauto36",
  name: "Dmauto36",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Dmauto36 — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, ремонт бензиновых двигателей, замена масла, компьютерная диагностика автомобилей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 404-83-01",
  address: "улица 40 лет Октября, 1Б, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79204048301",
  telegram: "https://t.me/+79204048301",
  twoGis: "https://2gis.com/firm/4363390420131395",
  rating: "4.2",
  reviews: "10",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
