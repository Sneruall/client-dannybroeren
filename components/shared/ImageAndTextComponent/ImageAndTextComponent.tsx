import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React from 'react'

import DesktopImage from './DesktopImage'
import DesktopText from './DesktopText'
import MobileText from './MobileText'
import Button from './Button'

interface ImageAndTextComponentProps {
  image?: { asset?: any }
  text?: string
  button?: string
}

export function ImageAndTextComponent(props: ImageAndTextComponentProps) {
  const { image, text, button } = props
  const imageUrl = urlForImage(image!)?.url() || ''

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="w-screen h-screen relative sm:hidden -mx-4">
        {imageUrl && (
          <Image
            alt="todo alt"
            fill
            style={{
              objectFit: 'cover',
            }}
            src={imageUrl}
          />
        )}
        {/* todo: text kleur laten kiezen in sanity, zodat het leesbaar is op lichte en donkere achtergronden. Zelfde voor positie? Bedenken of het verschillende components worden of een met vars in de code */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-4">
          <MobileText text={text} />
          {button && <Button text={button} />}
        </div>
      </div>
      {/* DESKTOP VIEW */}
      <div className="hidden sm:flex w-full h-[500px] justify-center space-x-10 lg:space-x-20">
        <DesktopImage imageUrl={imageUrl} />
        <div className="flex-1 m-auto max-w-md flex flex-col items-center justify-center space-y-4">
          <DesktopText text={text} />
          {button && <Button text={button} />}
        </div>
      </div>
      {/* Todo, call to actie toevoegen? Anders zo'n homepage waar je niet vanaf komt... */}
    </>
  )
}

export default ImageAndTextComponent
