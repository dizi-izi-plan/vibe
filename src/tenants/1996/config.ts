import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "1996",
  name: "1996",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "1996 — легковой автосервис (Семилуки). Работаем с: развал-схождение, замена масла, ремонт ходовой части автомобиля, шиномонтаж. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 413-60-88",
  address: "улица Ленина, 15, Семилуки",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF4D00",
  whatsapp: "https://wa.me/79204136088",
  twoGis: "https://2gis.com/firm/70000001040746342",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
