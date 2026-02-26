'use client';

import dynamic from 'next/dynamic';
import type { FunctionStats } from '@/lib/types';
import FunctionsTable from '@/components/tables/FunctionsTable';
import { formatGas } from '@/lib/utils';

const FunctionCallsChart = dynamic(() => import('@/components/charts/FunctionCallsChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-bg-card animate-pulse rounded" />,
});

const FunctionGasChart = dynamic(() => import('@/components/charts/FunctionGasChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-bg-card animate-pulse rounded" />,
});

interface FunctionsTabProps {
  data: FunctionStats[];
}

export default function FunctionsTab({ data }: FunctionsTabProps) {
  const totalFunctions = data.length;
  const mostCalled = data.length > 0 ? data[0] : null;
  const highestGas = data.length > 0
    ? [...data].sort((a, b) => b.avgGas - a.avgGas)[0]
    : null;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Total Functions</p>
          <p className="text-3xl font-bold">{totalFunctions}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Most Called</p>
          <p className="text-lg font-semibold font-mono truncate" title={mostCalled?.name}>
            {mostCalled?.name || '—'}
          </p>
          <p className="text-text-muted text-sm">{mostCalled ? mostCalled.calls.toLocaleString() + ' calls' : ''}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 col-span-2 md:col-span-1">
          <p className="text-text-secondary text-sm mb-1">Highest Gas</p>
          <p className="text-lg font-semibold font-mono truncate" title={highestGas?.name}>
            {highestGas?.name || '—'}
          </p>
          <p className="text-text-muted text-sm">{highestGas ? formatGas(highestGas.avgGas) + ' avg gas' : ''}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Functions by Calls</h3>
          <FunctionCallsChart data={data} />
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Functions by Gas Usage</h3>
          <FunctionGasChart data={data} />
        </div>
      </div>

      {/* Full Table */}
      <FunctionsTable data={data} extended />
    </div>
  );
}
