'use client';

import dynamic from 'next/dynamic';
import type { CallerStats } from '@/lib/types';
import CallersTable from '@/components/tables/CallersTable';
import { shortenAddress } from '@/lib/utils';

const CallerDistributionChart = dynamic(() => import('@/components/charts/CallerDistributionChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-bg-card animate-pulse rounded" />,
});

interface CallersTabProps {
  data: CallerStats[];
}

export default function CallersTab({ data }: CallersTabProps) {
  const uniqueCallers = data.length;
  const topCaller = data.length > 0 ? data[0] : null;
  const avgTxsPerCaller = uniqueCallers > 0
    ? Math.round(data.reduce((sum, c) => sum + c.txCount, 0) / uniqueCallers)
    : 0;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Unique Callers</p>
          <p className="text-3xl font-bold">{uniqueCallers.toLocaleString()}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Top Caller</p>
          <p className="text-lg font-semibold font-mono">
            {topCaller ? shortenAddress(topCaller.address) : '—'}
          </p>
          <p className="text-text-muted text-sm">{topCaller ? topCaller.txCount.toLocaleString() + ' txs' : ''}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 col-span-2 md:col-span-1">
          <p className="text-text-secondary text-sm mb-1">Avg Txs / Caller</p>
          <p className="text-3xl font-bold">{avgTxsPerCaller.toLocaleString()}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Top Callers by Transaction Count</h3>
        <CallerDistributionChart data={data} />
      </div>

      {/* Full Table */}
      <CallersTable data={data} />
    </div>
  );
}
