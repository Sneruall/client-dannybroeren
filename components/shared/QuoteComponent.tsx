import React from 'react'

interface QuoteComponentProps {
  text: string
}

export function QuoteComponent(props: QuoteComponentProps) {
  const { text } = props

  return (
    <div className="mx-auto px-4 sm:py-5">
      <p className="text-center text-gray-500 font-dancing text-2xl sm:text-4xl lg:text-5xl text-opacity-20">
        {text}
      </p>
    </div>
  )
}

export default QuoteComponent
