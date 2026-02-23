import type { RawTransaction, ErrorStats } from '@/lib/types';
import { formatShortDate } from '@/lib/utils';

export function buildErrorBreakdown(transactions: RawTransaction[]): ErrorStats[] {
  const failedTxs = transactions.filter(tx => tx.isError === '1');

  const groups = new Map<string, {
    count: number;
    lastTimestamp: number;
    functionName: string;
  }>();

  for (const tx of failedTxs) {
    const errorKey = extractErrorReason(tx);
    const ts = parseInt(tx.timeStamp);
    const funcName = tx.functionName?.split('(')[0] || tx.input?.slice(0, 10) || 'unknown';

    const existing = groups.get(errorKey) || {
      count: 0,
      lastTimestamp: 0,
      functionName: funcName,
    };
    existing.count++;
    if (ts > existing.lastTimestamp) {
      existing.lastTimestamp = ts;
      existing.functionName = funcName;
    }
    groups.set(errorKey, existing);
  }

  return Array.from(groups.entries())
    .map(([error, stats]) => ({
      error,
      count: stats.count,
      lastSeen: formatShortDate(stats.lastTimestamp),
      functionName: stats.functionName,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
}

function extractErrorReason(tx: RawTransaction): string {
  // Most failed transactions don't have decoded error reason in Etherscan-like APIs
  // We group by function selector as a proxy
  const funcName = tx.functionName?.split('(')[0];
  if (funcName) {
    return `Failed: ${funcName}`;
  }
  const selector = tx.input?.slice(0, 10);
  if (selector && selector !== '0x') {
    return `Failed: ${selector}`;
  }
  return 'Transaction Failed';
}
