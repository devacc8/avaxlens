'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getRecentSearches, type RecentSearch } from '@/lib/recent-searches';

export default function RecentSearches() {
  const [recent, setRecent] = useState<RecentSearch[]>([]);

  useEffect(() => {
    setRecent(getRecentSearches());
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <h3 className="text-text-secondary text-sm font-medium mb-4 text-center">Recent Searches</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {recent.map((item) => (
          <Link
            key={item.address}
            href={`/contract/${item.address}`}
            className="bg-bg-card border border-border rounded-lg px-4 py-3 hover:border-border-hover transition flex items-center gap-3"
          >
            <span className="font-semibold text-sm">{item.name}</span>
            <span className="text-text-muted text-xs font-mono">
              {item.address.slice(0, 6)}...{item.address.slice(-4)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
