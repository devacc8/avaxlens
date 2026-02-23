import { SNOWTRACE_API, CACHE_TTL } from '@/lib/constants';
import { getCached, setCache } from '@/lib/cache';
import { fetchWithTimeout } from '@/lib/utils';
import type { SnowtraceContractInfo, ContractInfo } from '@/lib/types';

export async function getContractSource(address: string): Promise<SnowtraceContractInfo | null> {
  const cacheKey = `source:${address}`;
  const cached = getCached<SnowtraceContractInfo>(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetchWithTimeout(
      `${SNOWTRACE_API}?module=contract&action=getsourcecode&address=${address}`
    );
    if (!res.ok) return null;

    const json = await res.json();
    if (json.status === '1' && json.result?.[0]) {
      const data = json.result[0] as SnowtraceContractInfo;
      setCache(cacheKey, data, CACHE_TTL.CONTRACT_INFO);
      return data;
    }
  } catch {
    // Network error or timeout — return null gracefully
  }
  return null;
}

export async function getContractABI(address: string): Promise<unknown[] | null> {
  const cacheKey = `abi:${address}`;
  const cached = getCached<unknown[]>(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetchWithTimeout(
      `${SNOWTRACE_API}?module=contract&action=getabi&address=${address}`
    );
    if (!res.ok) return null;

    const json = await res.json();
    if (json.status === '1' && json.result) {
      const abi = JSON.parse(json.result);
      setCache(cacheKey, abi, CACHE_TTL.ABI);
      return abi;
    }
  } catch {
    // Parse error, network error, or timeout
  }
  return null;
}

export async function getContractInfo(address: string): Promise<ContractInfo> {
  const cacheKey = `info:${address}`;
  const cached = getCached<ContractInfo>(cacheKey);
  if (cached) return cached;

  const source = await getContractSource(address);
  const abi = await getContractABI(address);

  const info: ContractInfo = {
    address,
    name: source?.ContractName || 'Unknown Contract',
    verified: !!source?.ContractName && source.ContractName !== '',
    creationDate: null,
    abi,
    compiler: source?.CompilerVersion || null,
  };

  setCache(cacheKey, info, CACHE_TTL.CONTRACT_INFO);
  return info;
}
