import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'
import type { SettingsPayload } from 'types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footerText = data?.footerText || ([] as PortableTextBlock[])
  const heading = data?.footerHeading || ''
  const subheading = data?.footerSubheading || ''

  const footerImages = data?.footerImages || ([] as SanityImage[])
  const images = ['/image1.png', '/image2.png', '/image3.png', '/image4.png']

  return (
    <footer className="bottom-0 w-full pb-12 text-center md:pb-20 bg-primary">
      <div className="flex justify-center items-center gap-3 mx-auto max-w-screen-xl mt-3">
        {images.map((image, index) => (
          <div key={index} className="w-full h-80 relative">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              sizes="500px"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
      <div className="text-right max-w-screen-xl mx-auto my-4 px-4">
        <p className="text-white uppercase text-3xl sm:text-4xl font-league tracking-widest">
          {heading}
        </p>
        <p className="text-white italic font-playfair mr-1">{subheading}</p>
      </div>

      <CustomPortableText
        paragraphClasses="text-xs text-white text-center"
        value={footerText}
      />
    </footer>
  )
}
