'use client';

import { useQuery } from '@tanstack/react-query';
import type { ProcessedTransaction } from '@/lib/types';
import { processRawTransactions } from '@/lib/processing/transactions';

async function fetchTransactions(address: string): Promise<ProcessedTransaction[]> {
  const res = await fetch(`/api/contract/${address}/transactions`, {
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error('Failed to load transactions');
  const json = await res.json();
  if (!json.success || !Array.isArray(json.data?.transactions)) {
    throw new Error('Failed to load transactions');
  }
  return processRawTransactions(json.data.transactions);
}

export function useTransactions(address: string) {
  return useQuery({
    queryKey: ['transactions', address],
    queryFn: () => fetchTransactions(address),
    staleTime: 60_000,
  });
}
