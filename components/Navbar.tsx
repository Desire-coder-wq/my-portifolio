'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Technical Skills' },
  { href: '#contact', label: "Let's Connect" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="gradient-text">RD</span>
            <span className="text-white/70 font-light ml-1 text-base">Asingura</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Desirecv.pdf"
              download="Desirecv.pdf"
              className="ml-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-1 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Desirecv.pdf"
              download="Desirecv.pdf"
              className="mt-2 px-4 py-3 text-center font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
