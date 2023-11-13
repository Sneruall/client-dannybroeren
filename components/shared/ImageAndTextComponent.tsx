import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'

const ImageAndTextComponent = ({ image, text }) => {
  const imageUrl = urlForImage(image).url() // Todo, fix typescript error

  return (
    <>
      <div className="flex justify-center w-full h-[500px] px-52">
        <div className="relative flex-1">
          {imageUrl && (
            <Image
              className=""
              alt="alt"
              sizes="500px"
              fill
              style={{
                objectFit: 'contain',
              }}
              src={imageUrl}
            />
          )}
        </div>
        <div className="flex-1 m-auto">
          <h2 className="text-2xl">{text}</h2>
        </div>
      </div>
    </>
  )
}

export default ImageAndTextComponent
