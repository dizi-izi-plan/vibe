import { useQuery } from '@tanstack/react-query'
import { supabase } from './supabase'
import type { VehicleClass } from '@/tenants/types'

export interface Service {
  id: string
  name: string
  description: string | null
  base_price: number
  base_duration: number
  service_prices_by_class: { vehicle_class: VehicleClass; price: number; duration_min: number }[]
}

export const useServices = (shopId: string) =>
  useQuery({
    queryKey: ['services', shopId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('id,name,description,base_price,base_duration,service_prices_by_class(vehicle_class,price,duration_min)')
        .eq('shop_id', shopId)
        .eq('active', true)
        .order('sort')
      if (error) throw error
      return data as unknown as Service[]
    }
  })

// Цена и длительность по классу авто (если для класса не задано — базовые значения)
export const priceFor = (s: Service, c: VehicleClass) => {
  const p = s.service_prices_by_class.find((x) => x.vehicle_class === c)
  return { price: p?.price ?? s.base_price, duration: p?.duration_min ?? s.base_duration }
}
