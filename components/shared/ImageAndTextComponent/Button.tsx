'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string | undefined
}

function Button({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Link href="/puur">
        <div className="btn btn-primary btn-sm md:btn-md text-white">
          {text}
        </div>
      </Link>
    </motion.div>
  )
}

export default Button
