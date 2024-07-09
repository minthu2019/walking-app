'use client'
import React from 'react'
import NavbarItem from './NavbarItem'
import DarkMode from './DarkModeSwitch';
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import OverlayMeny from './OverlayMeny';
import Link from 'next/link';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () =>{
    setNavbarOpen(!navbarOpen);
  }

  const navLinks = [
    {
      title : "Home" ,
      href  : "/home"
    },
    {
      title : "About" ,
      href  : "/about"
    },
    {
      title : "Learn" ,
      href  : "/learn"
    },
    {
      title : "Going" ,
      href  : "/going"
    },

  ];

  return (
    <div className='relative'>
      <nav className=' flex justify-between items-center p-4 border-b  '>
      <div className="">
         <Link className=' text-amber-400 font-bold cursor-pointer' href={'/'}>LOgo</Link>
      </div>
      <div className='sm:block hidden'>
        <ul className='flex items-center justify-center gap-8 '>
          {
            navLinks.map((navlink, index) => (
              <li key={index} >
                <NavbarItem title={navlink.title} params={navlink.href}/>
              </li>
            ))
          }
        </ul>
      </div>
      <div className=' flex items-center justify-center'>
        <DarkMode/>
        <div onClick={handleClick} className='sm:hidden block'>
          {navbarOpen ? 
          (<AiOutlineClose/>) 
          :<AiOutlineMenu/> }
        </div>
        
      </div>
      
    </nav>
    <div className='absolute top-20 right-4'>
      {navbarOpen?(
          <OverlayMeny links={navLinks} onclick={handleClick}/>
        ):(null)}
    </div>
    </div>
  )
}

export default NavBar
