'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavbarItem = ({title , params}) => {
  const pathname = usePathname();
  const isActive = pathname === params

  return (
      <Link className={`text-sm sm:text-lg  font-medium hover:border-amber-400 hover:text-orange-600 
      hover:bg-transparent px-24 bg-gray-400 sm:bg-transparent sm:px-4 py-2 sm:border  sm:border-red-200 ${isActive ? ' border-black shadow-lg shadow-amber-200 text-orange-600 bg-transparent' : '' } `} 
       href={params}>{title}</Link>
  )
}

export default NavbarItem
