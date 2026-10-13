import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "ads",
  name: "Ads",
  tagline: "Компьютерная диагностика автомобилей. Онлайн-запись без звонков.",
  description: "Ads — компьютерная диагностика автомобилей (Воронеж). Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 926 792-65-87",
  address: "улица Димитрова, 91, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79267926587",
  twoGis: "https://2gis.com/firm/70000001095151427",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
