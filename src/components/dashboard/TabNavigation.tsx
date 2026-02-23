'use client';

import { useState, useCallback } from 'react';
import type { ContractAnalytics, ContractInfo, Period, TabId } from '@/lib/types';
import PeriodSelector from '@/components/charts/PeriodSelector';
import OverviewTab from '@/components/dashboard/OverviewTab';
import ErrorsTable from '@/components/tables/ErrorsTable';
import ComingSoon from '@/components/ui/ComingSoon';

interface TabNavigationProps {
  analytics: ContractAnalytics;
  contractInfo: ContractInfo;
  address: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'functions', label: 'Functions' },
  { id: 'errors', label: 'Errors' },
  { id: 'callers', label: 'Callers' },
];

export default function TabNavigation({ analytics: initialAnalytics, contractInfo, address }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [period, setPeriod] = useState<Period>('30d');
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePeriodChange = useCallback(async (newPeriod: Period) => {
    setPeriod(newPeriod);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/contract/${address}/analytics?period=${newPeriod}`);
      if (!res.ok) {
        setError('Failed to load data. Please try again.');
        return;
      }
      const json = await res.json();
      if (json.success) {
        setAnalytics(json.data.analytics);
      } else {
        setError('Failed to load data. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, [address]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 bg-bg-input p-1 rounded-lg">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === tab.id
                  ? 'bg-avax-red text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {(activeTab === 'overview' || activeTab === 'functions' || activeTab === 'errors') && (
          <PeriodSelector period={period} onChange={handlePeriodChange} />
        )}
      </div>

      {error && (
        <div className="bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <div className={loading ? 'opacity-50 pointer-events-none transition-opacity' : 'transition-opacity'}>
        {activeTab === 'overview' && (
          <OverviewTab analytics={analytics} />
        )}

        {activeTab === 'functions' && (
          <ComingSoon
            icon="⚡"
            title="Functions"
            description="Detailed breakdown by function with call trends"
          />
        )}

        {activeTab === 'errors' && (
          <ErrorsTable data={analytics.errorBreakdown} />
        )}

        {activeTab === 'callers' && (
          <ComingSoon
            icon="👥"
            title="Callers"
            description="Top callers and usage distribution"
          />
        )}
      </div>
    </div>
  );
}
