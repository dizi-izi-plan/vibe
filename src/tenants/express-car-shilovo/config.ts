import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "express-car-shilovo",
  name: "Express Car Shilovo",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Express Car Shilovo — легковой автосервис (Воронеж). Работаем с: шиномонтаж, ремонт ходовой части автомобиля, замена масла, компьютерная диагностика автомобилей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 933-65-75",
  address: "улица Курчатова, 29а, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79009336575",
  twoGis: "https://2gis.com/firm/70000001109601317",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
