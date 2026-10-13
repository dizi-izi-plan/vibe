import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "black-style-auto",
  name: "Black Style Auto",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Black Style Auto — легковой автосервис (Воронеж). Работаем с: ремонт стартеров и генераторов, ремонт бензиновых двигателей, ремонт мкпп, компьютерная диагностика автомобилей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 995 036-36-03",
  address: "Солнечная улица, 17/2, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79950363603",
  telegram: "https://t.me/bs_auto_vrn",
  twoGis: "https://2gis.com/firm/70000001103964815",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
