import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { MenuItem, SettingsPayload } from 'types'
import Logo from './Logo'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const imageUrl = urlForImage(data.logo!)?.url() || ''
  return (
    <div className="sticky top-0 z-10 flex items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      <Logo src={imageUrl} alt={'Logo'} />
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href || menuItem?._type === 'home') {
            return null
          }
          return (
            <Link
              key={key}
              className="text-lg hover:text-black border-b-4 border-opacity-0 hover:border-opacity-100 border-b-[#FD4EAC] sm:text-xl md:text-2xl xl:text-3xl text-gray-800 font-league"
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
