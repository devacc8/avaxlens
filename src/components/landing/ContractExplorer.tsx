'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { POPULAR_CONTRACTS } from '@/lib/constants';
import { getRecentSearches, type RecentSearch } from '@/lib/recent-searches';

const categoryColors: Record<string, string> = {
  DEX: 'text-avax-red',
  Lending: 'text-success',
  Token: 'text-warning',
};

function ContractRow({ name, address, category }: { name: string; address: string; category?: string }) {
  return (
    <Link
      href={`/contract/${address}`}
      className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-bg-card border border-transparent hover:border-border transition group"
    >
      <div className="flex items-center gap-3">
        {category && (
          <span className={`text-xs font-medium w-14 ${categoryColors[category] || 'text-text-muted'}`}>
            {category}
          </span>
        )}
        <span className="font-medium text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-text-muted text-xs font-mono hidden sm:inline">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-text-muted group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </Link>
  );
}

export default function ContractExplorer() {
  const [recent, setRecent] = useState<RecentSearch[]>([]);

  useEffect(() => {
    setRecent(getRecentSearches());
  }, []);

  const hasRecent = recent.length > 0;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-16">
      <div className={`grid ${hasRecent ? 'lg:grid-cols-[3fr_2fr]' : 'max-w-2xl mx-auto'} gap-8`}>
        <div>
          <h3 className="text-text-secondary text-sm font-medium mb-3">Popular Contracts</h3>
          <div className="flex flex-col gap-1">
            {POPULAR_CONTRACTS.map((contract) => (
              <ContractRow
                key={contract.address}
                name={contract.name}
                address={contract.address}
                category={contract.category}
              />
            ))}
          </div>
        </div>

        {hasRecent && (
          <div>
            <h3 className="text-text-secondary text-sm font-medium mb-3">Recent Searches</h3>
            <div className="flex flex-col gap-1">
              {recent.map((item) => (
                <ContractRow
                  key={item.address}
                  name={item.name}
                  address={item.address}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
