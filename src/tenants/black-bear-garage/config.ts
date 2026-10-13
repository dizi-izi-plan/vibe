import type { TenantConfig } from '../types'
import { DEFAULT_CLASSES, DEFAULT_FAQ } from '../defaults'

export const config: TenantConfig = {
  id: "black-bear-garage",
  name: "Black Bear Garage",
  tagline: "Легковой автосервис. Онлайн-запись без звонков.",
  description: "Black Bear Garage — легковой автосервис (Воронеж). Работаем с: замена масла, ремонт акпп, ремонт мкпп, ремонт ходовой части автомобиля. Выберите услугу и удобное время — запись займёт минуту.",
  phone: "+7 900 946-64-65",
  address: "Новосибирская улица, 82, Воронеж",
  hours: "Уточняйте по телефону",
  timezone: "Europe/Moscow",
  currency: "₽",
  accent: "#39FF88",
  twoGis: "https://2gis.com/firm/70000001109867165",
  vehicleClasses: DEFAULT_CLASSES,
  faq: DEFAULT_FAQ
}
