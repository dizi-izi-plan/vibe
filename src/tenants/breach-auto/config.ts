import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "breach-auto",
  name: "Breach Auto",
  tagline: "Грузовой автосервис. Онлайн-запись без звонков.",
  description: "Breach Auto — грузовой автосервис (Воронеж). Работаем с: кузовной ремонт, сварочные работы, ремонт и тюнинг мототехники, ремонт ходовой части автомобиля. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 951 855-83-25",
  address: "улица 9 Января, 211/6, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79518558325",
  telegram: "https://t.me/+79518558325",
  twoGis: "https://2gis.com/firm/70000001101450607",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
