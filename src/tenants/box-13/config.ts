import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "box-13",
  name: "Box 13",
  tagline: "Запчасти для иномарок. Онлайн-запись без звонков.",
  description: "Box 13 — запчасти для иномарок (Воронеж). Работаем с: ремонт ходовой части автомобиля. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 950 750-76-69",
  address: "улица Строителей, 8Б, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79507507669",
  twoGis: "https://2gis.com/firm/70000001053776675",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
