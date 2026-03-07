'use client';

import { useState } from 'react';
import type { FunctionStats } from '@/lib/types';
import { formatPercentage, formatGas } from '@/lib/utils';
import SortDropdown from '@/components/ui/SortDropdown';

interface FunctionsTableProps {
  data: FunctionStats[];
  extended?: boolean;
}

type SortKey = 'calls' | 'successRate' | 'avgGas';

export default function FunctionsTable({ data, extended }: FunctionsTableProps) {
  const [sortBy, setSortBy] = useState<SortKey>('calls');

  const sorted = [...data].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Top Functions</h3>
        <SortDropdown
          value={sortBy}
          onChange={(v) => setSortBy(v as SortKey)}
          options={[
            { value: 'calls', label: 'Sort by Calls' },
            { value: 'successRate', label: 'Sort by Success Rate' },
            { value: 'avgGas', label: 'Sort by Gas' },
          ]}
        />
      </div>
      {data.length === 0 ? (
        <p className="text-text-muted text-sm text-center py-8">No function data available</p>
      ) : (
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="text-text-secondary border-b border-border">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Function</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Calls</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">%</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Success</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Avg Gas</th>
                {extended && <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Total Gas</th>}
              </tr>
            </thead>
            <tbody>
              {sorted.map((func) => (
                <tr key={func.selector} className="border-b border-border/50 hover:bg-bg-input/50 transition">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono max-w-[120px] sm:max-w-[200px] lg:max-w-none">
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-none" title={func.name}>{func.name}</div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-right font-medium">{func.calls.toLocaleString()}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-right text-text-secondary">{formatPercentage(func.percentage)}</td>
                  <td className={`py-2 sm:py-3 px-2 sm:px-4 text-right ${func.successRate >= 98 ? 'text-success' : func.successRate >= 95 ? 'text-warning' : 'text-error'}`}>
                    {formatPercentage(func.successRate)}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-right">{formatGas(func.avgGas)}</td>
                  {extended && <td className="py-2 sm:py-3 px-2 sm:px-4 text-right">{formatGas(func.totalGas)}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
