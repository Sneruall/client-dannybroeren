import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { MenuItem, SettingsPayload } from 'types'

import DropdownMenu from './DropdownMenu' // Import the client component
import Logo from './Logo'

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const imageUrl = urlForImage(data.logo!)?.url() || ''

  return (
    <div className="navbar max-w-screen-xl mx-auto lg:my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <DropdownMenu menuItems={menuItems} />
        </div>

        <Logo src={imageUrl} alt={'Logo'} />
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems &&
            menuItems.map((menuItem, key) => {
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              if (!href || menuItem?._type === 'home') {
                return null
              }
              return (
                <li key={key}>
                  <Link
                    className="text-lg hover:text-black border-b-4 border-opacity-0 hover:border-opacity-100 border-b-[#FD4EAC] sm:text-xl md:text-2xl xl:text-3xl text-gray-800 font-league"
                    href={href}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              )
            })}{' '}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary btn-sm md:btn-md text-white">Contact</a>
      </div>{' '}
    </div>
  )
}
