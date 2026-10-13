import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "art-servis",
  name: "Art сервис",
  tagline: "Шиномонтаж. Онлайн-запись без звонков.",
  description: "Art сервис — шиномонтаж (Воронеж). Работаем с: ремонт бензиновых двигателей, компьютерная диагностика автомобилей, ремонт акпп. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 908 136-08-80",
  address: "улица 17 Танкового корпуса, 39, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79081360880",
  twoGis: "https://2gis.com/firm/70000001104588686",
  rating: "1.4",
  reviews: "1",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
