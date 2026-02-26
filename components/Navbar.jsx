'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (path) => pathname === path ? 'text-purple-600 font-semibold' : 'text-gray-700'

  return (
    <nav className="fixed w-full top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold gradient-text">UK</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive('/')} hover:text-purple-600 transition`}>Home</Link>
            <Link href="/about" className={`${isActive('/about')} hover:text-purple-600 transition`}>About</Link>
            <Link href="/projects" className={`${isActive('/projects')} hover:text-purple-600 transition`}>Projects</Link>
            <Link href="/skills" className={`${isActive('/skills')} hover:text-purple-600 transition`}>Skills</Link>
            <Link href="/contact" className={`${isActive('/contact')} hover:text-purple-600 transition`}>Contact</Link>
          </div>

          {/* Hire Me Button */}
          <Link
            href="/contact"
            className="hidden md:block gradient-button text-white px-6 py-2 rounded-lg font-semibold"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={toggleMenu}>
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/skills" className="block px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="w-full gradient-button text-white px-4 py-2 rounded-lg font-semibold m-2 block text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
