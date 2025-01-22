"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gradient-to-tl from-main to-secondmain z-20 mx-auto flex justify-between items-center px-6 sm:px-8 py-4 fixed w-full shadow-lg transition-all duration-300'>
      <Link href='/'>
        <h1 className='text-2xl font-bold text-white hover:text-yellow-500 transition-colors duration-300'>
          Portfolio
        </h1>
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="text-2xl text-white hover:text-yellow-500 transition duration-300">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className={`flex space-x-6 sm:space-x-10 text-white text-xl items-center transition-all duration-300 ${
        isOpen ? 'flex-col space-y-4 absolute bg-main top-16 left-0 w-full py-4 md:hidden' : 'hidden md:flex'
      }`}>
        <Link href="/" className="hover:text-yellow-500 hover:underline hover:decoration-yellow-500 transition-colors duration-300">
          <li>Home</li>
        </Link>
        <Link href="#about" className="hover:text-yellow-500 hover:underline hover:decoration-yellow-500 transition-colors duration-300">
          <li>About</li>
        </Link>
        <Link href="#service" className="hover:text-yellow-500 hover:underline hover:decoration-yellow-500 transition-colors duration-300">
          <li>Services</li>
        </Link>
        <Link href="#contactus" className="hover:text-yellow-500 hover:underline hover:decoration-yellow-500 transition-colors duration-300">
          <li>Contact us</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header;
