import type { ContractAnalytics } from '@/lib/types';
import MetricCard from '@/components/ui/MetricCard';
import { formatCompactNumber, formatGas, formatPercentage } from '@/lib/utils';

interface MetricCardsProps {
  analytics: ContractAnalytics;
}

export default function MetricCards({ analytics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
      <MetricCard
        label="Total Transactions"
        value={formatCompactNumber(analytics.totalTransactions)}
      />
      <MetricCard
        label="Success Rate"
        value={formatPercentage(analytics.successRate)}
        color="text-success"
      />
      <MetricCard
        label="Unique Callers"
        value={formatCompactNumber(analytics.uniqueCallers)}
      />
      <MetricCard
        label="Avg Gas Used"
        value={formatGas(analytics.avgGasUsed)}
      />
    </div>
  );
}
