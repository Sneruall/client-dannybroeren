import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FadeIn from '../Animations/FadeIn'
import FadeInAndMoveUp from '../Animations/FadeInAndMoveUp'
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
          <FadeInAndMoveUp>
            <h2 className="text-2xl font-playfair text-center text-white">
              {text}
            </h2>
          </FadeInAndMoveUp>
          {button && (
            <FadeInAndMoveUp delay={1}>
              <Button text={button} />
            </FadeInAndMoveUp>
          )}
        </div>
      </div>
      {/* DESKTOP VIEW */}
      <div className="hidden sm:flex w-full h-[500px] justify-center space-x-10 lg:space-x-20">
        <div className="relative flex-1 max-w-lg">
          <FadeIn>
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
          </FadeIn>
        </div>
        <div className="flex-1 m-auto max-w-md flex flex-col items-center justify-center space-y-4">
          <FadeInAndMoveUp delay={0.5} duration={1}>
            <h2 className="text-2xl font-playfair text-center">{text}</h2>
          </FadeInAndMoveUp>
          {button && (
            <FadeInAndMoveUp delay={1}>
              <Button text={button} />
            </FadeInAndMoveUp>
          )}
        </div>
      </div>
      {/* Todo, call to actie toevoegen? Anders zo'n homepage waar je niet vanaf komt... */}
    </>
  )
}

export default ImageAndTextComponent
