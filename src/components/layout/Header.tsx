'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useNetworkStats } from '@/lib/hooks/useNetworkStats';

const NAV_LINKS = [
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/compare', label: 'Compare' },
];

function formatTvl(tvl: number): string {
  if (tvl >= 1e9) return `$${(tvl / 1e9).toFixed(2)}B`;
  if (tvl >= 1e6) return `$${(tvl / 1e6).toFixed(0)}M`;
  return `$${tvl.toLocaleString()}`;
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function formatGas(gwei: number): string {
  if (gwei < 0.01) return `${(gwei * 1000).toFixed(1)} pAVAX`;
  if (gwei < 1) return `${gwei.toFixed(3)} nAVAX`;
  return `${gwei.toFixed(1)} nAVAX`;
}

function NetworkBadges() {
  const { data } = useNetworkStats();

  if (!data) return null;
  const { gasPrice, avaxPrice, tvl } = data;
  if (gasPrice === null && avaxPrice === null && tvl === null) return null;

  return (
    <div className="hidden lg:flex items-center gap-3 text-xs">
      <span className="flex items-center gap-1.5 text-text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        C-Chain
      </span>
      {avaxPrice !== null && (
        <span className="bg-bg-input px-2.5 py-1 rounded-md text-text-muted">
          AVAX <span className="text-text-secondary font-medium">{formatPrice(avaxPrice)}</span>
        </span>
      )}
      {gasPrice !== null && (
        <span className="bg-bg-input px-2.5 py-1 rounded-md text-text-muted">
          Gas <span className="text-text-secondary font-medium">{formatGas(gasPrice)}</span>
        </span>
      )}
      {tvl !== null && (
        <span className="bg-bg-input px-2.5 py-1 rounded-md text-text-muted">
          TVL <span className="text-text-secondary font-medium">{formatTvl(tvl)}</span>
        </span>
      )}
    </div>
  );
}

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
        <div className="flex items-center gap-4">
          <NetworkBadges />
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
      </div>
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
