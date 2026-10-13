import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "12-vol-t",
  name: "12 вольт",
  tagline: "Обслуживание автомобильных климатических систем. Онлайн-запись без звонков.",
  description: "12 вольт — обслуживание автомобильных климатических систем (Воронеж). Работаем с: ремонт электронных систем авто, компьютерная диагностика автомобилей, автосигнализации, автозвук. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 910 243-64-60",
  address: "улица Академика Королёва, 22, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  whatsapp: "https://wa.me/79102436460",
  twoGis: "https://2gis.com/firm/70000001059091519",
  rating: "5",
  reviews: "3",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
