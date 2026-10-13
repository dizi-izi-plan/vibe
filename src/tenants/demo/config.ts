import type { TenantConfig } from '../types'

// Брендинг и контакты точки. Цены, боксы и график работы лежат в БД (редактируются владельцем).
export const config: TenantConfig = {
  id: 'demo',
  name: 'AutoPro Detailing',
  tagline: 'Детейлинг и мойка. Запишитесь за минуту.',
  description: 'Возвращаем автомобилю заводской блеск. Работаем с кузовом, салоном и колёсами, даём гарантию на все виды работ.',
  phone: '+7 900 000-00-00',
  address: 'Москва, ул. Промышленная, 12',
  hours: 'Пн–Пт 9:00–20:00, Сб 10:00–18:00',
  timezone: 'Europe/Moscow',
  currency: '₽',
  accent: '#FF4D00',
  heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1400&q=70',
  vehicleClasses: [
    { id: 'sedan', label: 'Седан' },
    { id: 'crossover', label: 'Кроссовер' },
    { id: 'minivan', label: 'Микроавтобус' }
  ],
  faq: [
    { q: 'Есть ли зона ожидания?', a: 'Да: кофе, Wi-Fi и удобные кресла.' },
    { q: 'Даёте ли гарантию?', a: 'Гарантия на работы — 30 дней.' },
    { q: 'Как можно оплатить?', a: 'Наличными, картой или по QR-коду.' }
  ]
}
