import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'

interface ImageAndTextComponentProps {
  image?: { asset?: any }
  text?: string
}

export function ImageAndTextComponent(props: ImageAndTextComponentProps) {
  const { image, text } = props
  const imageUrl = urlForImage(image!)?.url() || ''

  return (
    <>
      <div className="flex w-full h-[500px] justify-center space-x-10 lg:space-x-20">
        <div className="relative flex-1 max-w-lg">
          {imageUrl && (
            <Image
              className="rounded-lg"
              alt="alt"
              sizes="512px"
              fill
              style={{
                objectFit: 'cover',
              }}
              src={imageUrl}
            />
          )}
        </div>
        <div className="flex-1 m-auto max-w-md">
          <h2 className="text-2xl font-playfair text-center">{text}</h2>
        </div>
      </div>
    </>
  )
}

export default ImageAndTextComponent
