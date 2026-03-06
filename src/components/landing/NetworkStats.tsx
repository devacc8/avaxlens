'use client';

import { useNetworkStats } from '@/lib/hooks/useNetworkStats';

function formatTvl(tvl: number): string {
  if (tvl >= 1e9) return `$${(tvl / 1e9).toFixed(2)}B`;
  if (tvl >= 1e6) return `$${(tvl / 1e6).toFixed(0)}M`;
  return `$${tvl.toLocaleString()}`;
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function formatGas(gwei: number): string {
  return `${gwei.toFixed(1)} nAVAX`;
}

export default function NetworkStats() {
  const { data, isLoading } = useNetworkStats();

  if (isLoading || !data) return null;

  const { gasPrice, avaxPrice, tvl } = data;

  // Don't render if all data failed
  if (gasPrice === null && avaxPrice === null && tvl === null) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 pb-6">
      <div className="flex items-center justify-center gap-6 text-xs text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          C-Chain
        </span>
        {avaxPrice !== null && (
          <span>
            AVAX <span className="text-text-secondary font-medium">{formatPrice(avaxPrice)}</span>
          </span>
        )}
        {gasPrice !== null && (
          <span>
            Gas <span className="text-text-secondary font-medium">{formatGas(gasPrice)}</span>
          </span>
        )}
        {tvl !== null && (
          <span className="hidden sm:inline">
            TVL <span className="text-text-secondary font-medium">{formatTvl(tvl)}</span>
          </span>
        )}
      </div>
    </div>
  );
}
