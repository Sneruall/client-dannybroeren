import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import ImageBox from 'components/shared/ImageBox'
import { Image } from 'sanity'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h1: ({ children }) => (
        <h1 className="font-playfair text-gray-900 text-6xl pb-4">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="font-playfair text-gray-900 text-5xl pb-4">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="font-playfair text-gray-900 text-4xl pb-4">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="font-playfair text-gray-900 text-3xl pb-4">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="font-playfair text-gray-900 text-2xl pb-4">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="font-playfair text-gray-900 text-xl pb-4">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="font-playfair text-gray-900 text-xl pb-4 list-outside list-disc">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="font-playfair text-gray-900 text-xl pb-4 list-inside list-decimal">
          {children}
        </ol>
      ),

      checkmarks: ({ children }) => (
        <ol className="font-playfair text-gray-900 text-xl pb-4">{children}</ol>
      ),
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
