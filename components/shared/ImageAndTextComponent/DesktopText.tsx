'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  text: string | undefined
}

function DesktopText({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 m-auto max-w-md"
    >
      <h2 className="text-2xl font-playfair text-center">{text}</h2>
    </motion.div>
  )
}

export default DesktopText
