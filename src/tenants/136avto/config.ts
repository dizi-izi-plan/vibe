import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "136avto",
  name: "136Авто",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "136Авто — легковой автосервис (Воронеж). Работаем с: ремонт ходовой части автомобиля, шиномонтаж, обслуживание автомобильных климатических систем, ремонт электронных систем авто. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 952 100-13-39",
  address: "улица Антонова-Овсеенко, 35и, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#FF2D6F",
  whatsapp: "https://wa.me/79521001339",
  twoGis: "https://2gis.com/firm/4363390420054266",
  rating: "3.8",
  reviews: "4",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
