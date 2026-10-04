'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, restaurantInfo } from '@/lib/data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center py-4 sm:py-5" aria-label="Main navigation">
          {/* Logo - Left Side */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.webp"
                alt="Haveli Restaurant Logo"
                className="h-10 w-auto sm:h-12"
              />
              <span className="font-serif text-xl tracking-wider text-cream-50 transition-colors hover:text-red-400 sm:text-2xl">
                {restaurantInfo.name}
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <ul className="hidden items-center gap-8 md:flex lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-red-500'
                      : 'text-cream-100/80 hover:text-cream-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Reserve Button - Right Side */}
          <div className="justify-self-end hidden md:block">
            <Link href="/contact" className="btn-primary !px-6 !py-3 !text-xs">
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-cream-50 transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-cream-50 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-cream-50 transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              } ${
                pathname === link.href ? 'text-red-500' : 'text-cream-50 hover:text-red-400'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`btn-primary mt-4 transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </header>
  )
}
