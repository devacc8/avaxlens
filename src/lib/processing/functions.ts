import { decodeFunctionData } from 'viem';
import type { RawTransaction, FunctionStats } from '@/lib/types';
import type { Abi } from 'viem';

export function buildFunctionBreakdown(
  transactions: RawTransaction[],
  abi: unknown[] | null
): FunctionStats[] {
  const groups = new Map<string, {
    name: string;
    count: number;
    successCount: number;
    totalGas: number;
  }>();

  for (const tx of transactions) {
    const selector = tx.input?.slice(0, 10) || '0x';
    let funcName = tx.functionName?.split('(')[0] || selector;

    if (abi && tx.input && tx.input.length >= 10) {
      try {
        const decoded = decodeFunctionData({
          abi: abi as Abi,
          data: tx.input as `0x${string}`,
        });
        funcName = decoded.functionName;
      } catch {
        // Keep raw functionName or selector
      }
    }

    const existing = groups.get(selector) || {
      name: funcName,
      count: 0,
      successCount: 0,
      totalGas: 0,
    };
    existing.count++;
    if (tx.isError === '0') existing.successCount++;
    existing.totalGas += parseInt(tx.gasUsed || '0');
    groups.set(selector, existing);
  }

  const total = transactions.length;

  return Array.from(groups.entries())
    .map(([selector, stats]) => ({
      name: stats.name,
      selector,
      calls: stats.count,
      percentage: total > 0 ? (stats.count / total) * 100 : 0,
      successRate: stats.count > 0 ? (stats.successCount / stats.count) * 100 : 0,
      avgGas: stats.count > 0 ? Math.round(stats.totalGas / stats.count) : 0,
    }))
    .sort((a, b) => b.calls - a.calls)
    .slice(0, 20);
}
