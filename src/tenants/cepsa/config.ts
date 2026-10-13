import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "cepsa",
  name: "Cepsa",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Cepsa — легковой автосервис (Воронеж). Работаем с: шиномонтаж, ремонт ходовой части автомобиля, замена масла, ремонт бензиновых двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 928-97-94",
  address: "улица Щёголевых, 12в, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79601175531",
  twoGis: "https://2gis.com/firm/70000001033444432",
  rating: "5",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
