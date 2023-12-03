// DropdownMenu.jsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { resolveHref } from 'lib/sanity.links'

const DropdownMenu = ({ menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <>
      <label
        tabIndex={0}
        className="btn btn-ghost md:hidden"
        onClick={toggleDropdown}
      >
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
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
            isDropdownOpen ? 'block' : 'hidden'
          }`}
        >
          {menuItems.map((menuItem, key) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href || menuItem?._type === 'home') {
              return null
            }
            return (
              <li key={key} onClick={toggleDropdown}>
                <Link
                  className="text-2xl hover:text-black border-b-4 border-opacity-0 hover:border-opacity-100 border-b-[#FD4EAC] text-gray-800 font-league"
                  href={href}
                >
                  {menuItem.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default DropdownMenu
