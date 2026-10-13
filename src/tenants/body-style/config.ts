import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "body-style",
  name: "Body Style",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Body Style — легковой автосервис (Воронеж). Работаем с: кузовной ремонт, ремонт ходовой части автомобиля, обслуживание автомобильных климатических систем, ремонт дизельных двигателей. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 910 241-41-41",
  address: "Рижская улица, 16 к7, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79102414141",
  twoGis: "https://2gis.com/firm/70000001044548164",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
