const FETCH_TIMEOUT_MS = 10_000;

export async function fetchWithTimeout(url: string, timeoutMs = FETCH_TIMEOUT_MS): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export function formatNumber(num: number): string {
  if (isNaN(num)) return '0';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toLocaleString('en-US');
}

export function formatCompactNumber(num: number): string {
  if (isNaN(num)) return '0';
  return num.toLocaleString('en-US');
}

export function formatGas(gas: number): string {
  if (isNaN(gas)) return '0';
  return gas.toLocaleString('en-US');
}

export function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatDate(timestamp: number): string {
  if (isNaN(timestamp)) return 'Unknown';
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatShortDate(timestamp: number): string {
  if (isNaN(timestamp)) return 'N/A';
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export function formatPercentage(value: number): string {
  if (isNaN(value)) return '0.0%';
  return value.toFixed(1) + '%';
}

export function formatAvaxValue(weiStr: string): string {
  const wei = Number(weiStr || '0');
  if (wei === 0) return '0';
  const avax = wei / 1e18;
  if (avax < 0.001) return '<0.001';
  if (avax < 1) return avax.toFixed(3);
  if (avax < 1000) return avax.toFixed(2);
  return avax.toLocaleString('en-US', { maximumFractionDigits: 1 });
}

export function formatTimeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  return formatShortDate(timestamp);
}
