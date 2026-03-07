'use client';

import { useState } from 'react';
import type { ErrorStats } from '@/lib/types';
import { formatPercentage } from '@/lib/utils';

interface ErrorsTableProps {
  data: ErrorStats[];
  totalErrors?: number;
  errorRate?: number;
}

export default function ErrorsTable({ data, totalErrors, errorRate }: ErrorsTableProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  if (data.length === 0) {
    return (
      <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
        <p className="text-text-muted text-sm">No errors found — all transactions succeeded</p>
      </div>
    );
  }

  const mostCommon = data[0]?.error || 'Unknown';

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      {totalErrors !== undefined && errorRate !== undefined && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-text-secondary text-sm mb-1">Total Errors</p>
            <p className="text-3xl font-bold text-error">{totalErrors.toLocaleString()}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-text-secondary text-sm mb-1">Error Rate</p>
            <p className="text-3xl font-bold text-error">{formatPercentage(errorRate)}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-5 col-span-2 md:col-span-1">
            <p className="text-text-secondary text-sm mb-1">Most Common</p>
            <p className="text-lg font-semibold font-mono text-error truncate" title={mostCommon}>{mostCommon}</p>
          </div>
        </div>
      )}

      {/* Error Table */}
      <div className="bg-bg-card border border-border rounded-xl p-6 overflow-hidden">
        <h3 className="font-semibold mb-6">Error Log</h3>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-xs sm:text-sm min-w-[450px]">
            <thead>
              <tr className="text-text-secondary border-b border-border">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Error</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Count</th>
                <th className="hidden sm:table-cell text-right py-3 px-4">Last Seen</th>
                <th className="hidden md:table-cell text-right py-3 px-4">Function</th>
              </tr>
            </thead>
            <tbody>
              {data.map((err, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-bg-input/50 transition cursor-pointer sm:cursor-default"
                  onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono text-error max-w-[150px] sm:max-w-[250px] lg:max-w-none">
                    <div className={`${expandedRow === i ? 'whitespace-normal break-all' : 'overflow-x-auto whitespace-nowrap scrollbar-none'}`} title={err.error}>
                      {err.error}
                    </div>
                    {expandedRow === i && (
                      <div className="sm:hidden mt-2 space-y-1 text-xs">
                        <p className="text-text-secondary">Last seen: <span className="text-text-primary">{err.lastSeen}</span></p>
                        <p className="text-text-secondary">Function: <span className="text-text-primary">{err.functionName}</span></p>
                      </div>
                    )}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-right font-medium align-top">{err.count.toLocaleString()}</td>
                  <td className="hidden sm:table-cell py-3 px-4 text-right text-text-secondary align-top">{err.lastSeen}</td>
                  <td className="hidden md:table-cell py-3 px-4 text-right font-mono max-w-[150px] align-top">
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-none ml-auto" title={err.functionName}>{err.functionName}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
