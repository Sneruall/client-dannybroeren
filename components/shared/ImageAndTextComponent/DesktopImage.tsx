'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
  imageUrl: string | undefined
}

function DesktopImage({ imageUrl }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex-1 max-w-lg"
    >
      {imageUrl && (
        <Image
          className="rounded-lg"
          alt="todo alt"
          sizes="512px"
          fill
          style={{
            objectFit: 'cover',
          }}
          src={imageUrl}
        />
      )}
    </motion.div>
  )
}

export default DesktopImage
