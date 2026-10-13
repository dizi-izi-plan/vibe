import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "autolightsworkshop",
  name: "AutoLightsWorkshop",
  tagline: "Установка и ремонт автооптики. Онлайн-запись без звонков.",
  description: "AutoLightsWorkshop — установка и ремонт автооптики (Воронеж). Работаем с: автоаксессуары. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 920 447-26-08",
  address: "улица Антонова-Овсеенко, 28д, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#00E5FF",
  whatsapp: "https://wa.me/79204472608",
  twoGis: "https://2gis.com/firm/70000001100293182",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
