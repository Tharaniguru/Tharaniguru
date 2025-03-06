import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    const [toggleMenu,setToggleMenu]= useState(false);

  return (
    <header className='flex justify-between px-5 bg-blue-900 py-5  text-white font-semibold'>
        <a className='font-extrabold font-serif' href="/#"> PORTFOLIO</a>
        <nav className='hidden md:block'>
            <ul className='flex'>
            <li><a href="/#"> Home</a> </li>
            <li> <a href="/#"> About</a></li>
            <li> <a href="/#"> Projects</a></li>
            <li> <a href="/#"> Contact</a></li>
        </ul>
        </nav>

        { toggleMenu && <nav className='block md:hidden '>
            <ul className='flex flex-col p-5 mobile-nav'>
            <li><a href="/#"> Home</a> </li>
            <li> <a href="/#"> About</a></li>
            <li> <a href="/#"> Projects</a></li>
            <li> <a href="/#"> Contact</a></li>
        </ul>
        </nav>}

        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden my-2'>
            <Bars3Icon className='text-white h-5'/>
        </button>
        
    </header>
  )
}

export default Header
