import React from 'react'
import NavbarItem from './NavbarItem'

const OverlayMeny = ({links ,onclick}) => {
  return (
    <div className='block md:hidden w-[300px] mx-auto'>
      <ul  className={` flex flex-col py-4 items-center m-2 bg-gray-500 `}>
        {links.map((link,index) => (
          <li onClick={onclick} key={index} className=' group w-60 m-2 p-2 
           hover:shadow-lg hover:shadow-amber-500 font-bold text-center rounded-md'>
            <NavbarItem  params={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OverlayMeny
