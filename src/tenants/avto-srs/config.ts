import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avto-srs",
  name: "Aвто srs",
  tagline: "Тюнинг. Онлайн-запись без звонков.",
  description: "Aвто srs — тюнинг (Воронеж). Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 447-12-12",
  address: "Холмистая улица, 56в, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79204471212",
  twoGis: "https://2gis.com/firm/70000001032643213",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
