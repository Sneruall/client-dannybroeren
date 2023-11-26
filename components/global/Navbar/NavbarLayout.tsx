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
    <div className="navbar max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
              })}
          </ul>
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
            })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary btn-sm md:btn-md text-white">Contact</a>
      </div>
    </div>
  )
}
