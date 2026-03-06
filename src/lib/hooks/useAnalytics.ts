'use client';

import { useQuery } from '@tanstack/react-query';
import type { ContractAnalytics, Period } from '@/lib/types';

async function fetchAnalytics(address: string, period: Period): Promise<ContractAnalytics> {
  const res = await fetch(`/api/contract/${address}/analytics?period=${period}`, {
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error('Failed to load analytics');
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Failed to load analytics');
  return json.data;
}

export function useAnalytics(address: string, period: Period, initialData?: ContractAnalytics) {
  return useQuery({
    queryKey: ['analytics', address, period],
    queryFn: () => fetchAnalytics(address, period),
    initialData,
    staleTime: 5 * 60_000,
  });
}
