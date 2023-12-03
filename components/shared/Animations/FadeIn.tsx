'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  duration?: number
  delay?: number
}

const FadeIn: React.FC<Props> = ({ children, duration = 0.5, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
