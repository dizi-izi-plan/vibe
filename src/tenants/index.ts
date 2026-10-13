import type { TenantConfig } from './types'

const mods = import.meta.glob<{ config: TenantConfig }>('./*/config.ts', { eager: true })
export const tenants: Record<string, TenantConfig> = Object.fromEntries(
  Object.values(mods).map((m) => [m.config.id, m.config])
)
