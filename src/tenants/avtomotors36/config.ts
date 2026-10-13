import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "avtomotors36",
  name: "Avtomotors36",
  tagline: "Ремонт ходовой части автомобиля. Онлайн-запись без звонков.",
  description: "Avtomotors36 — ремонт ходовой части автомобиля (Воронеж). Работаем с: ремонт бензиновых двигателей, шиномонтаж. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 905 051-71-37",
  address: "улица Димитрова, 91а/4, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#7C5CFF",
  whatsapp: "https://wa.me/79050517137",
  telegram: "https://t.me/+79050517137",
  twoGis: "https://2gis.com/firm/70000001036940809",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
