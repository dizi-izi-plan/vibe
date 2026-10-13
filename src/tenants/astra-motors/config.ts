import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "astra-motors",
  name: "Astra Motors",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Astra Motors — легковой автосервис (Воронеж). Работаем с: развал-схождение, автосигнализации, ремонт ходовой части автомобиля, ремонт выхлопных систем. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 473 227-28-27",
  address: "Солнечная улица, 13Б, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  twoGis: "https://2gis.com/firm/70000001090643619",
  rating: "4.4",
  reviews: "5",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
