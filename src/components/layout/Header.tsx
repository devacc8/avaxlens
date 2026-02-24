'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/compare', label: 'Compare' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            <span className="bg-gradient-to-r from-avax-red to-[#FF6B6B] bg-clip-text text-transparent">
              AVAXLENS
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-text-secondary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition ${pathname === href ? 'text-white' : 'hover:text-white'}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-secondary hover:text-white transition p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-3 text-text-secondary">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${pathname === href ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
