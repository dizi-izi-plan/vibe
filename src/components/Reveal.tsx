import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const Reveal = ({ children }: { children: ReactNode }) => (
  <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}>
    {children}
  </motion.section>
)
