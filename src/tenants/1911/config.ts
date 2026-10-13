import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "1911",
  name: "1911",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "1911 — легковой автосервис (Воронеж). Работаем с: замена масла, компьютерная диагностика автомобилей, ремонт стартеров и генераторов, ремонт мкпп. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 996 451-00-08",
  address: "улица Грамши, 73, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  twoGis: "https://2gis.com/firm/70000001117512263",
  rating: "5",
  reviews: "4",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
