import type { RawTransaction, ContractAnalytics, DailyVolume, DailySuccessFail } from '@/lib/types';
import { buildFunctionBreakdown } from './functions';
import { buildErrorBreakdown } from './errors';
import { buildCallerBreakdown } from './callers';
import { formatShortDate } from '@/lib/utils';

export function processTransactions(
  transactions: RawTransaction[],
  abi: unknown[] | null,
  periodDays: number
): ContractAnalytics {
  const now = Math.floor(Date.now() / 1000);
  const cutoff = now - periodDays * 86400;
  const filtered = transactions.filter(tx => {
    const ts = parseInt(tx.timeStamp, 10);
    return !isNaN(ts) && ts >= cutoff;
  });

  const totalTransactions = filtered.length;
  const successCount = filtered.filter(tx => tx.isError === '0').length;
  const failCount = totalTransactions - successCount;
  const successRate = totalTransactions > 0 ? (successCount / totalTransactions) * 100 : 0;

  const callerSet = new Set(filtered.map(tx => (tx.from || '').toLowerCase()));
  const uniqueCallers = callerSet.size;

  const totalGas = filtered.reduce((sum, tx) => sum + parseInt(tx.gasUsed || '0', 10), 0);
  const avgGasUsed = totalTransactions > 0 ? Math.round(totalGas / totalTransactions) : 0;

  const volumeByDay = groupByDay(filtered);
  const successFailByDay = groupSuccessFailByDay(filtered);
  const functionBreakdown = buildFunctionBreakdown(filtered, abi);
  const errorBreakdown = buildErrorBreakdown(filtered);
  const callerBreakdown = buildCallerBreakdown(filtered);

  return {
    totalTransactions,
    successCount,
    failCount,
    successRate,
    uniqueCallers,
    avgGasUsed,
    volumeByDay,
    successFailByDay,
    functionBreakdown,
    errorBreakdown,
    callerBreakdown,
    periodDays,
  };
}

function groupByDay(transactions: RawTransaction[]): DailyVolume[] {
  const groups = new Map<string, number>();

  for (const tx of transactions) {
    const ts = parseInt(tx.timeStamp, 10) * 1000;
    if (isNaN(ts)) continue;
    const date = new Date(ts);
    const key = date.toISOString().split('T')[0];
    groups.set(key, (groups.get(key) || 0) + 1);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([fullDate, count]) => ({
      date: formatShortDate(new Date(fullDate).getTime() / 1000),
      fullDate,
      count,
    }));
}

function groupSuccessFailByDay(transactions: RawTransaction[]): DailySuccessFail[] {
  const groups = new Map<string, { success: number; fail: number }>();

  for (const tx of transactions) {
    const ts = parseInt(tx.timeStamp, 10) * 1000;
    if (isNaN(ts)) continue;
    const date = new Date(ts);
    const key = date.toISOString().split('T')[0];
    const entry = groups.get(key) || { success: 0, fail: 0 };

    if (tx.isError === '0') {
      entry.success++;
    } else {
      entry.fail++;
    }
    groups.set(key, entry);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, stats]) => ({
      date: formatShortDate(new Date(date).getTime() / 1000),
      success: stats.success,
      fail: stats.fail,
    }));
}
