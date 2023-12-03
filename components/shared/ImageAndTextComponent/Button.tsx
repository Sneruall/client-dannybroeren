import Link from 'next/link'
import React from 'react'

type Props = {
  text: string | undefined
}

function Button({ text }: Props) {
  return (
    <>
      <Link href="/puur">
        <div className="btn btn-primary btn-sm md:btn-md text-white">
          {text}
        </div>
      </Link>
    </>
  )
}

export default Button
