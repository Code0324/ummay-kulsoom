'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/projects',  label: 'Projects' },
  { href: '/skills',    label: 'Skills' },
  { href: '/services',  label: 'Services' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) =>
    pathname === href
      ? 'text-orange-500 font-bold'
      : ''

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo-link navbar-logo">
              Ummay Kulsoom
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href)} transition`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Ummay_Kulsoom_Resume.pdf"
            download="Ummay_Kulsoom_Resume.pdf"
            className="hidden md:block gradient-button px-6 py-2 font-semibold"
          >
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t" style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(255,180,0,0.2)',
          }}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-3 font-semibold transition hover:text-orange-500 ${isActive(href)}`}
                style={{ color: pathname === href ? undefined : '#7a4500' }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <a
                href="/Ummay_Kulsoom_Resume.pdf"
                download="Ummay_Kulsoom_Resume.pdf"
                className="block gradient-button font-semibold text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
