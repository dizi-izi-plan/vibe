import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "beautiful-car",
  name: "Beautiful car",
  tagline: "Кузовной ремонт. Онлайн-запись без звонков.",
  description: "Beautiful car — кузовной ремонт (Воронеж). Работаем с: шиномонтаж, ремонт ходовой части автомобиля, замена масла, тюнинг. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 251-75-74",
  address: "Ростовская улица, 78/3а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  twoGis: "https://2gis.com/firm/70000001018000038",
  rating: "5",
  reviews: "6",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
