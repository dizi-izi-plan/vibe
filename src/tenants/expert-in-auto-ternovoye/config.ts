import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "expert-in-auto-ternovoye",
  name: "Expert In Auto Ternovoye",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Expert In Auto Ternovoye — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, шиномонтаж, автомойки, компьютерная диагностика автомобилей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 210-66-76",
  address: "Заречный переулок, 18/1, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  twoGis: "https://2gis.com/firm/70000001026771673",
  rating: "3.5",
  reviews: "10",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
