import type { RawTransaction, CallerStats } from '@/lib/types';
import { formatShortDate } from '@/lib/utils';

export function buildCallerBreakdown(transactions: RawTransaction[]): CallerStats[] {
  const groups = new Map<string, {
    txCount: number;
    successCount: number;
    totalGasUsed: number;
    lastTimestamp: number;
  }>();

  for (const tx of transactions) {
    const caller = (tx.from || '').toLowerCase();
    if (!caller) continue;

    const existing = groups.get(caller) || {
      txCount: 0,
      successCount: 0,
      totalGasUsed: 0,
      lastTimestamp: 0,
    };
    existing.txCount++;
    if (tx.isError === '0') existing.successCount++;
    existing.totalGasUsed += parseInt(tx.gasUsed || '0', 10);
    const ts = parseInt(tx.timeStamp, 10);
    if (ts > existing.lastTimestamp) existing.lastTimestamp = ts;
    groups.set(caller, existing);
  }

  const total = transactions.length;

  return Array.from(groups.entries())
    .map(([address, stats]) => ({
      address,
      txCount: stats.txCount,
      percentage: total > 0 ? (stats.txCount / total) * 100 : 0,
      successRate: stats.txCount > 0 ? (stats.successCount / stats.txCount) * 100 : 0,
      totalGasUsed: stats.totalGasUsed,
      lastActive: formatShortDate(stats.lastTimestamp),
    }))
    .sort((a, b) => b.txCount - a.txCount);
}
