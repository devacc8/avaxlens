'use client';

import { useState } from 'react';
import type { Period } from '@/lib/types';
import { useTransactions } from '@/lib/hooks/useTransactions';
import { shortenAddress, formatGas, formatTimeAgo } from '@/lib/utils';

interface TransactionsTabProps {
  address: string;
  period: Period;
}

type StatusFilter = 'all' | 'success' | 'failed';
const PAGE_SIZE = 25;

export default function TransactionsTab({ address, period }: TransactionsTabProps) {
  const { data: transactions = [], isLoading, error, refetch } = useTransactions(address);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  // Filter by period
  const periodDays = period === '7d' ? 7 : period === '30d' ? 30 : 90;
  const cutoff = Math.floor(Date.now() / 1000) - periodDays * 86400;
  const periodFiltered = transactions.filter(tx => tx.timestamp >= cutoff);

  // Filter by search
  const searchLower = search.toLowerCase();
  const searchFiltered = searchLower
    ? periodFiltered.filter(tx => tx.hash.toLowerCase().includes(searchLower))
    : periodFiltered;

  // Filter by status
  const filtered = searchFiltered.filter(tx => {
    if (statusFilter === 'success') return !tx.isError;
    if (statusFilter === 'failed') return tx.isError;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  if (isLoading) {
    return (
      <div className="bg-bg-card border border-border rounded-xl p-12 flex flex-col items-center gap-3">
        <div className="loading-spinner" />
        <span className="text-sm text-text-secondary">Loading transactions...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
        <p className="text-error text-sm mb-3">
          {error instanceof Error ? error.message : 'Failed to load transactions'}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-avax-red hover:bg-avax-red-hover text-white text-sm rounded-lg transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-1 bg-bg-input p-1 rounded-lg">
            {(['all', 'success', 'failed'] as StatusFilter[]).map(f => (
              <button
                key={f}
                onClick={() => { setStatusFilter(f); setPage(0); }}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition capitalize ${
                  statusFilter === f
                    ? 'bg-avax-red text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {f === 'all' ? `All (${periodFiltered.length})` : f === 'success' ? `Success (${periodFiltered.filter(t => !t.isError).length})` : `Failed (${periodFiltered.filter(t => t.isError).length})`}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by tx hash..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(0); }}
            className="px-3 py-1.5 text-xs sm:text-sm bg-bg-input border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-hover w-48 sm:w-56 transition"
          />
        </div>
        <p className="text-text-muted text-sm">
          {filtered.length.toLocaleString()} transaction{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Table */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        {filtered.length === 0 ? (
          <p className="text-text-muted text-sm text-center py-8">No transactions found</p>
        ) : (
          <>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-xs sm:text-sm min-w-[600px]">
                <thead>
                  <tr className="text-text-secondary border-b border-border">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Hash</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">Function</th>
                    <th className="hidden md:table-cell text-left py-3 px-4">From</th>
                    <th className="hidden lg:table-cell text-right py-3 px-4">Value</th>
                    <th className="hidden lg:table-cell text-right py-3 px-4">Gas</th>
                    <th className="text-center py-2 sm:py-3 px-2 sm:px-4">Status</th>
                    <th className="text-right py-2 sm:py-3 px-2 sm:px-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {paged.map(tx => (
                    <tr key={tx.hash} className="border-b border-border/50 hover:bg-bg-input/50 transition">
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <a
                          href={`https://snowtrace.io/tx/${tx.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-accent-purple-light hover:underline"
                        >
                          {tx.hash.slice(0, 10)}...
                        </a>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono max-w-[120px] sm:max-w-[180px] truncate">{tx.functionName}</td>
                      <td className="hidden md:table-cell py-3 px-4">
                        <a
                          href={`https://snowtrace.io/address/${tx.from}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-accent-purple-light hover:underline"
                        >
                          {shortenAddress(tx.from)}
                        </a>
                      </td>
                      <td className="hidden lg:table-cell py-3 px-4 text-right">{tx.value !== '0' ? tx.value + ' AVAX' : '0'}</td>
                      <td className="hidden lg:table-cell py-3 px-4 text-right">{formatGas(tx.gasUsed)}</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          tx.isError ? 'bg-error/10 text-error' : 'bg-success/10 text-success'
                        }`}>
                          {tx.isError ? 'Failed' : 'Success'}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-right text-text-secondary whitespace-nowrap">
                        {formatTimeAgo(tx.timestamp)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <p className="text-text-muted text-sm">
                  {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, filtered.length)} of {filtered.length}
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
    </div>
  );
}
