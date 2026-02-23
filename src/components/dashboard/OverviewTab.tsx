'use client';

import dynamic from 'next/dynamic';
import type { ContractAnalytics } from '@/lib/types';
import FunctionsTable from '@/components/tables/FunctionsTable';

const VolumeChart = dynamic(() => import('@/components/charts/VolumeChart'), {
  ssr: false,
  loading: () => <div className="h-[180px] bg-bg-card animate-pulse rounded" />,
});

const SuccessFailChart = dynamic(() => import('@/components/charts/SuccessFailChart'), {
  ssr: false,
  loading: () => <div className="h-[180px] bg-bg-card animate-pulse rounded" />,
});

interface OverviewTabProps {
  analytics: ContractAnalytics;
}

export default function OverviewTab({ analytics }: OverviewTabProps) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Transaction Volume</h3>
          <VolumeChart data={analytics.volumeByDay} />
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Success / Fail Trend</h3>
          <SuccessFailChart data={analytics.successFailByDay} />
        </div>
      </div>

      <FunctionsTable data={analytics.functionBreakdown} />
    </div>
  );
}
