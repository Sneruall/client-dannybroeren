'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  text: string | undefined
}

function DesktopText({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-playfair text-center">{text}</h2>
    </motion.div>
  )
}

export default DesktopText
