import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "bavarec-auto",
  name: "Bavarec Auto",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Bavarec Auto — легковой автосервис (Воронеж). Работаем с: компьютерная диагностика автомобилей, ремонт дизельных двигателей, ремонт бензиновых двигателей, ремонт электронных систем авто. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 960 104-50-50",
  address: "Краснознамённая улица, 145Б, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  whatsapp: "https://wa.me/79601045050",
  twoGis: "https://2gis.com/firm/70000001044711871",
  rating: "5",
  reviews: "2",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
