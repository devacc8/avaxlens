'use client';

import { useQuery } from '@tanstack/react-query';

type StatusLevel = 'online' | 'degraded' | 'offline';

async function fetchHealth(): Promise<StatusLevel> {
  const res = await fetch('/api/health');
  if (!res.ok) return 'offline';
  const json = await res.json();
  return json.status || 'offline';
}

export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    refetchInterval: 30_000,
    staleTime: 15_000,
    placeholderData: 'online' as StatusLevel,
  });
}
