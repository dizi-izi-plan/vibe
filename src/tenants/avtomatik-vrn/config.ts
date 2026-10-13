import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avtomatik-vrn",
  name: "Avtomatik vrn",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Avtomatik vrn — легковой автосервис (Семилуки). Работаем с: ремонт ходовой части автомобиля, компьютерная диагностика автомобилей, ремонт акпп, шиномонтаж. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 952 954-04-35",
  address: "2-я Заречная улица, 38а, Семилуки",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79009241783",
  twoGis: "https://2gis.com/firm/70000001059929003",
  rating: "3",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
