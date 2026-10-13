export type VehicleClass = 'sedan' | 'crossover' | 'minivan'
export interface TenantConfig {
  id: string
  name: string
  tagline: string
  description: string
  phone: string
  address: string
  hours: string
  timezone: string
  currency: string
  accent: string
  heroImage?: string
  whatsapp?: string
  telegram?: string
  twoGis?: string
  rating?: string
  reviews?: string
  vehicleClasses: { id: VehicleClass; label: string }[]
  faq: { q: string; a: string }[]
}
