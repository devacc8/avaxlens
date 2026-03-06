'use client';

import { useQuery } from '@tanstack/react-query';

const AVAX_RPC = 'https://api.avax.network/ext/bc/C/rpc';
const DEFILLAMA_PRICE = 'https://coins.llama.fi/prices/current/avax:0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7';
const DEFILLAMA_CHAINS = 'https://api.llama.fi/v2/chains';

export interface NetworkStats {
  gasPrice: number | null;
  avaxPrice: number | null;
  tvl: number | null;
}

async function rpcCall(method: string): Promise<string | null> {
  const res = await fetch(AVAX_RPC, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params: [] }),
    signal: AbortSignal.timeout(10_000),
  });
  const json = await res.json();
  if (typeof json.result !== 'string') return null;
  return json.result;
}

async function fetchNetworkStats(): Promise<NetworkStats> {
  const [gasResult, priceResult, chainsResult] = await Promise.allSettled([
    rpcCall('eth_gasPrice'),
    fetch(DEFILLAMA_PRICE, { signal: AbortSignal.timeout(10_000) }).then(r => r.json()),
    fetch(DEFILLAMA_CHAINS, { signal: AbortSignal.timeout(10_000) }).then(r => r.json()),
  ]);

  // Gas price: hex wei → nAVAX (Gwei)
  let gasPrice: number | null = null;
  if (gasResult.status === 'fulfilled' && gasResult.value) {
    gasPrice = parseInt(gasResult.value, 16) / 1e9;
  }

  // AVAX price from DeFiLlama
  let avaxPrice: number | null = null;
  if (priceResult.status === 'fulfilled') {
    const coin = priceResult.value?.coins?.['avax:0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'];
    if (coin?.price) avaxPrice = coin.price;
  }

  // TVL from DeFiLlama chains
  let tvl: number | null = null;
  if (chainsResult.status === 'fulfilled' && Array.isArray(chainsResult.value)) {
    const avax = chainsResult.value.find((c: { name: string }) => c.name === 'Avalanche');
    if (avax?.tvl) tvl = avax.tvl;
  }

  return { gasPrice, avaxPrice, tvl };
}

export function useNetworkStats() {
  return useQuery({
    queryKey: ['network-stats'],
    queryFn: fetchNetworkStats,
    refetchInterval: 30_000,
    staleTime: 15_000,
    retry: false,
  });
}
