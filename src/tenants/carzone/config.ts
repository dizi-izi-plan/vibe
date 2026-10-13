import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "carzone",
  name: "Carzone",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Carzone — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, ремонт дизельных двигателей, ремонт бензиновых двигателей, ремонт акпп. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 202-17-81",
  address: "Ленинградская улица, 29д, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FFC400",
  whatsapp: "https://wa.me/79009587201",
  twoGis: "https://2gis.com/firm/70000001046145596",
  rating: "4",
  reviews: "32",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
