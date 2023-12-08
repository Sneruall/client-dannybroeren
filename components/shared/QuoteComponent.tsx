'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface QuoteComponentProps {
  text: string
}

export function QuoteComponent(props: QuoteComponentProps) {
  const { text } = props

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      className="mx-auto px-4 sm:py-24"
    >
      <p className="text-center text-gray-500 font-dancing text-2xl sm:text-4xl lg:text-5xl text-opacity-20">
        {text}
      </p>
    </motion.div>
  )
}

export default QuoteComponent
