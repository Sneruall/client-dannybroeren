import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'
import Footer2 from './Footer2'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className="bottom-0 w-full pb-12 text-center md:pb-20 bg-primary">
      {/* {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )} */}
      <Footer2 />
    </footer>
  )
}
