import { ROUTESCAN_API, CACHE_TTL } from '@/lib/constants';
import { getCached, setCache } from '@/lib/cache';
import { fetchWithTimeout } from '@/lib/utils';
import type { RawTransaction } from '@/lib/types';

export async function getTransactions(
  address: string,
  page = 1,
  offset = 10000,
  sort = 'desc'
): Promise<RawTransaction[]> {
  const cacheKey = `txs:${address}:${page}:${offset}:${sort}`;
  const cached = getCached<RawTransaction[]>(cacheKey);
  if (cached) return cached;

  try {
    const url = `${ROUTESCAN_API}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${offset}&sort=${sort}`;
    const res = await fetchWithTimeout(url);
    if (!res.ok) return [];

    const json = await res.json();
    if (json.status === '1' && Array.isArray(json.result)) {
      setCache(cacheKey, json.result, CACHE_TTL.TRANSACTIONS);
      return json.result;
    }
  } catch (error) {
    console.error(`[Routescan] getTransactions failed for ${address}:`, error instanceof Error ? error.message : error);
  }
  return [];
}

export async function getFirstTransaction(address: string): Promise<RawTransaction | null> {
  const cacheKey = `first-tx:${address}`;
  const cached = getCached<RawTransaction>(cacheKey);
  if (cached) return cached;

  try {
    const url = `${ROUTESCAN_API}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=asc`;
    const res = await fetchWithTimeout(url);
    if (!res.ok) return null;

    const json = await res.json();
    if (json.status === '1' && Array.isArray(json.result) && json.result.length > 0) {
      setCache(cacheKey, json.result[0], CACHE_TTL.CONTRACT_INFO);
      return json.result[0];
    }
  } catch (error) {
    console.error(`[Routescan] getFirstTransaction failed for ${address}:`, error instanceof Error ? error.message : error);
  }
  return null;
}
