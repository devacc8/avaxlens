'use client';

import { useState } from 'react';
import type { FunctionStats } from '@/lib/types';
import { formatPercentage, formatGas } from '@/lib/utils';

interface FunctionsTableProps {
  data: FunctionStats[];
  extended?: boolean;
}

type SortKey = 'calls' | 'successRate' | 'avgGas';

export default function FunctionsTable({ data, extended }: FunctionsTableProps) {
  const [sortBy, setSortBy] = useState<SortKey>('calls');

  const sorted = [...data].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6 min-w-max">
        <h3 className="font-semibold">Top Functions</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="bg-bg-input border border-border px-3 py-2 rounded-lg text-sm text-white focus:outline-none cursor-pointer"
        >
          <option value="calls">Sort by Calls</option>
          <option value="successRate">Sort by Success Rate</option>
          <option value="avgGas">Sort by Gas</option>
        </select>
      </div>
      {data.length === 0 ? (
        <p className="text-text-muted text-sm text-center py-8">No function data available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="text-text-secondary border-b border-border">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Function</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Calls</th>
                <th className="hidden sm:table-cell text-right py-3 px-4">%</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Success</th>
                <th className="hidden md:table-cell text-right py-3 px-4">Avg Gas</th>
                {extended && <th className="hidden lg:table-cell text-right py-3 px-4">Total Gas</th>}
              </tr>
            </thead>
            <tbody>
              {sorted.map((func) => (
                <tr key={func.selector} className="border-b border-border/50 hover:bg-bg-input/50 transition">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono max-w-[120px] sm:max-w-none truncate">{func.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-right font-medium">{func.calls.toLocaleString()}</td>
                  <td className="hidden sm:table-cell py-3 px-4 text-right text-text-secondary">{formatPercentage(func.percentage)}</td>
                  <td className={`py-2 sm:py-3 px-2 sm:px-4 text-right ${func.successRate >= 98 ? 'text-success' : func.successRate >= 95 ? 'text-warning' : 'text-error'}`}>
                    {formatPercentage(func.successRate)}
                  </td>
                  <td className="hidden md:table-cell py-3 px-4 text-right">{formatGas(func.avgGas)}</td>
                  {extended && <td className="hidden lg:table-cell py-3 px-4 text-right">{formatGas(func.totalGas)}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
