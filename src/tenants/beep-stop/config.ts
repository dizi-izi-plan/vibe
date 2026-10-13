import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "beep-stop",
  name: "Beep-Stop",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Beep-Stop — легковой автосервис (Воронеж). Работаем с: шиномонтаж, компьютерная диагностика автомобилей, ремонт ходовой части автомобиля, кузовной ремонт. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 952 544-51-31",
  address: "Острогожская улица, 69в, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79525445131",
  telegram: "https://t.me/+79525445131",
  twoGis: "https://2gis.com/firm/70000001081102805",
  rating: "5",
  reviews: "1",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
