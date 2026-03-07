import type { ContractAnalytics } from '@/lib/types';
import MetricCard from '@/components/ui/MetricCard';
import { formatCompactNumber, formatGas, formatPercentage } from '@/lib/utils';

const MAX_API_TRANSACTIONS = 10_000;

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

interface MetricCardsProps {
  analytics: ContractAnalytics;
}

export default function MetricCards({ analytics }: MetricCardsProps) {
  const isLimited = analytics.rawTxCount >= MAX_API_TRANSACTIONS;

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
      {analytics.dataRange && (
        <p className="text-text-muted text-xs mt-3 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4.5V8.5L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Data: {formatDate(analytics.dataRange.from)} – {formatDate(analytics.dataRange.to)}
          {isLimited && (
            <span className="text-warning"> (API limit: {MAX_API_TRANSACTIONS.toLocaleString()} txs)</span>
          )}
        </p>
      )}
    </div>
  );
}
