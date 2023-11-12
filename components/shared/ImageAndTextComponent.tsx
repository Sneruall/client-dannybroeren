import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'

const ImageAndTextComponent = ({ image, text }) => {
  const imageUrl = urlForImage(image).url() // Gebruik een helper functie om de URL van de afbeelding te krijgen

  return (
    <div className="w-full">
      {imageUrl && (
        <Image className="" alt="alt" width={100} height={200} src={imageUrl} />
      )}
      <p>{text}</p>
    </div>
  )
}

export default ImageAndTextComponent
