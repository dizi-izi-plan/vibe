import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "bbs",
  name: "BBS",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "BBS — легковой автосервис (Воронеж). Работаем с: детейлинг, замена масла, компьютерная диагностика автомобилей, развал-схождение. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 960 124-36-36",
  address: "2-я Коминтерновская улица, 22/3, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79601143636",
  twoGis: "https://2gis.com/firm/70000001100282981",
  rating: "5",
  reviews: "2",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
