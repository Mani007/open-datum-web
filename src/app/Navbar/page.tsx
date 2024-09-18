'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../../public/logo/LOGO.png'

function Navbar() {
    const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Technology' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Solutions' },
    // { id: 5, text: 'Impact Stories' },
    { id: 6, text: 'Industry' },
    { id: 7, text: 'ResponsibleAI' },

  ];
  return (
    <>
     <div className='fixed bg-indigo-200 flex justify-between items-center md:h-24 max-w-full  w-full px-8  mr-4 text-slate-900 z-30 '>
      {/* Logo */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <div className="mx-2 my-4 ">
             {/* <ion-icon name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600"></ion-icon> */}
             <Link href='/'><Image
      src={Logo}
      width={150}
      height={150}
      alt="Picture of the author"
    /></Link>
         </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-2xl'
          >
            <Link href={`/${item.text}`}>{item.text}</Link>
            
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-16 w-[50%] h-full  bg-indigo-200 ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        <div className="mx-2 my-4 ">
             {/* <ion-icon name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600"></ion-icon> */}
             {/* <Image
      src="/logo/ops.png"
      width={150}
      height={150}
      alt="Picture of the author"
    /> */}
         </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link href={`/${item.text}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>



    {/* <div className="  text-neutral-900 dark:text-neutral-200 bg-white dark:bg-neutral-700">
       <nav className="  bg-indigo-200  ">
        
            <a href="/" className="focus:outline-none 
            focus-visible:ring-4 ring-neutral-900 lg:absolute
            lg:left-10 lg:-translate-x-1/4 lg:top-0 z-50"
             aria-label="Go to Home Page">
                <Image src={Logo}
                width="100" className="pt-2 px-2 w-28 h-10 md:w-28 lg:w-40" alt="Logo"/>
            </a>
            <button id="menu" aria-expanded="false" aria-label="Open Menu" className="absolute top-0 right-0 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  
            </button>
            <div role="menubar" className="  flex flex-col   right-0 
            left-0 top-8 text-center text-lg p-2 
            lg:flex lg:flex-row lg:static lg:justify-center lg:w-full">
                <a href="/" role="menuitem" className=" px-6 dark:text-neutral-900 hover:font-bold"> Home </a>
                <a href="#tech" role="menuitem" className=" px-6 dark:text-neutral-900 hover:font-bold"> Technology </a>
                <a href="#event" role="menuitem" className=" px-6 dark:text-neutral-900 hover:font-bold"> Events </a>
                <a href="#comm" role="menuitem" className=" px-6 dark:text-neutral-900 hover:font-bold"> Community </a>
            </div>
            
        </nav>
    </div> */}
    </>
  )
}

export default Navbar 