import Link from 'next/link';
import { POPULAR_CONTRACTS } from '@/lib/constants';

export default function PopularContracts() {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-16">
      <h3 className="text-text-secondary text-sm font-medium mb-4 text-center">Popular Contracts</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {POPULAR_CONTRACTS.map((contract) => (
          <Link
            key={contract.address}
            href={`/contract/${contract.address}`}
            className="bg-bg-card border border-border rounded-lg p-4 hover:border-border-hover transition text-center"
          >
            <p className="font-semibold text-sm">{contract.name}</p>
            <p className="text-text-muted text-xs mt-1">{contract.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
