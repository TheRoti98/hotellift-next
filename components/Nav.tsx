'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#problemy', label: 'Problemy' },
  { href: '#wyniki', label: 'Wyniki' },
  { href: '#zespol', label: 'Zespół' },
  { href: '#pakiety', label: 'Pakiety' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/98 shadow-lg shadow-midnight/30' : 'bg-midnight/80'
      } backdrop-blur-md border-b border-white/[0.07]`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-brand-gradient flex items-center justify-center flex-shrink-0">
            <span className="text-midnight font-black text-xs">4W</span>
          </div>
          <span className="font-bold text-white text-[15px] tracking-tight">
            4WebZones{' '}
            <span className="gradient-text font-black">HORECA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/50 hover:text-white text-[13px] font-medium transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#konsultacja"
          className="hidden md:inline-flex items-center gap-2 gradient-btn px-5 py-2.5 rounded-md text-[13px]"
        >
          Bezpłatna analiza
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-midnight border-t border-white/[0.07]">
          <ul className="flex flex-col px-5">
            {links.map(link => (
              <li key={link.href} className="border-b border-white/[0.07]">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-white/80 text-[15px] font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#konsultacja"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 gradient-btn px-5 py-3 rounded-md text-[14px] w-full justify-center"
              >
                Bezpłatna analiza →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
