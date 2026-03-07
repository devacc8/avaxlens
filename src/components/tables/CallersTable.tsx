'use client';

import { useState } from 'react';
import type { CallerStats } from '@/lib/types';
import { shortenAddress, formatPercentage, formatGas } from '@/lib/utils';

interface CallersTableProps {
  data: CallerStats[];
}

type SortKey = 'txCount' | 'successRate' | 'totalGasUsed';
const PAGE_SIZE = 25;

export default function CallersTable({ data }: CallersTableProps) {
  const [sortBy, setSortBy] = useState<SortKey>('txCount');
  const [page, setPage] = useState(0);

  const sorted = [...data].sort((a, b) => b[sortBy] - a[sortBy]);
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paged = sorted.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6 min-w-max">
        <h3 className="font-semibold">All Callers</h3>
        <select
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value as SortKey); setPage(0); }}
          className="bg-bg-input border border-border px-3 py-2 rounded-lg text-sm text-white focus:outline-none cursor-pointer"
        >
          <option value="txCount">Sort by Transactions</option>
          <option value="successRate">Sort by Success Rate</option>
          <option value="totalGasUsed">Sort by Gas Used</option>
        </select>
      </div>

      {data.length === 0 ? (
        <p className="text-text-muted text-sm text-center py-8">No caller data available</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="text-text-secondary border-b border-border">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Address</th>
                  <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Txs</th>
                  <th className="hidden sm:table-cell text-right py-3 px-4">%</th>
                  <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Success</th>
                  <th className="hidden md:table-cell text-right py-3 px-4">Gas Used</th>
                  <th className="hidden md:table-cell text-right py-3 px-4">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((caller) => (
                  <tr key={caller.address} className="border-b border-border/50 hover:bg-bg-input/50 transition">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <a
                        href={`https://snowtrace.io/address/${caller.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-accent-purple-light hover:underline"
                      >
                        {shortenAddress(caller.address)}
                      </a>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-right font-medium">{caller.txCount.toLocaleString()}</td>
                    <td className="hidden sm:table-cell py-3 px-4 text-right text-text-secondary">{formatPercentage(caller.percentage)}</td>
                    <td className={`py-2 sm:py-3 px-2 sm:px-4 text-right ${caller.successRate >= 98 ? 'text-success' : caller.successRate >= 95 ? 'text-warning' : 'text-error'}`}>
                      {formatPercentage(caller.successRate)}
                    </td>
                    <td className="hidden md:table-cell py-3 px-4 text-right">{formatGas(caller.totalGasUsed)}</td>
                    <td className="hidden md:table-cell py-3 px-4 text-right text-text-secondary">{caller.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <p className="text-text-muted text-sm">
                {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, sorted.length)} of {sorted.length}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(p => p - 1)}
                  disabled={page === 0}
                  className="px-3 py-1.5 text-sm rounded-lg bg-bg-input border border-border hover:border-border-hover disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={page >= totalPages - 1}
                  className="px-3 py-1.5 text-sm rounded-lg bg-bg-input border border-border hover:border-border-hover disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
