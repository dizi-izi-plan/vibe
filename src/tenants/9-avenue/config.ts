import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "9-avenue",
  name: "9 Avenue",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "9 Avenue — легковой автосервис (Воронеж). Работаем с: ремонт дизельных двигателей, шиномонтаж, ремонт ходовой части автомобиля, ремонт стартеров и генераторов. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 952 953-65-56",
  address: "улица 9 Января, 221е/1, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  telegram: "https://t.me/avenuevoronezh",
  twoGis: "https://2gis.com/firm/70000001040896973",
  rating: "4.5",
  reviews: "63",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
