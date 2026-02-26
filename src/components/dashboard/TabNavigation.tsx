'use client';

import { useState, useCallback, useRef } from 'react';
import type { ContractAnalytics, ContractInfo, Period, TabId } from '@/lib/types';
import PeriodSelector from '@/components/charts/PeriodSelector';
import OverviewTab from '@/components/dashboard/OverviewTab';
import FunctionsTab from '@/components/dashboard/FunctionsTab';
import CallersTab from '@/components/dashboard/CallersTab';
import TransactionsTab from '@/components/dashboard/TransactionsTab';
import AiAuditTab from '@/components/dashboard/AiAuditTab';
import ErrorsTable from '@/components/tables/ErrorsTable';

interface TabNavigationProps {
  analytics: ContractAnalytics;
  contractInfo: ContractInfo;
  address: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'functions', label: 'Functions' },
  { id: 'errors', label: 'Errors' },
  { id: 'callers', label: 'Callers' },
  { id: 'audit', label: 'AI Audit' },
];

export default function TabNavigation({ analytics: initialAnalytics, contractInfo, address }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [period, setPeriod] = useState<Period>('30d');
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handlePeriodChange = useCallback(async (newPeriod: Period) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPeriod(newPeriod);
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => controller.abort(), 15_000);
    try {
      const res = await fetch(`/api/contract/${address}/analytics?period=${newPeriod}`, {
        signal: controller.signal,
      });
      if (controller.signal.aborted) return;
      if (!res.ok) {
        setError('Failed to load data. Please try again.');
        return;
      }
      const json = await res.json();
      if (controller.signal.aborted) return;
      if (json.success) {
        setAnalytics(json.data.analytics);
      } else {
        setError('Failed to load data. Please try again.');
      }
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof DOMException && err.name === 'AbortError'
        ? 'Request timed out. Please try again.'
        : 'Network error. Please check your connection.');
    } finally {
      clearTimeout(timeout);
      if (!controller.signal.aborted) setLoading(false);
    }
  }, [address]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-1 bg-bg-input p-1 rounded-lg">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-2.5 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-avax-red text-white'
                  : 'text-text-secondary hover:text-white'
              } ${tab.id === 'audit' && activeTab !== 'audit' ? 'bg-white/5' : ''}`}
            >
              {tab.label}
              {tab.id === 'audit' && activeTab !== 'audit' && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-avax-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-avax-red" />
                </span>
              )}
            </button>
          ))}
        </div>
        {activeTab !== 'audit' && (
          <PeriodSelector period={period} onChange={handlePeriodChange} disabled={loading} />
        )}
      </div>

      {error && (
        <div className="bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="relative">
        {loading && (
          <div className="absolute inset-0 z-10 bg-bg-secondary/60 backdrop-blur-[2px] rounded-lg">
            <div className="sticky top-1/2 flex flex-col items-center gap-3 py-8">
              <div className="loading-spinner" />
              <span className="text-sm text-text-secondary">Loading data...</span>
            </div>
          </div>
        )}

        <div className={loading ? 'pointer-events-none' : ''}>
          {activeTab === 'overview' && (
            <OverviewTab analytics={analytics} />
          )}

          {activeTab === 'transactions' && (
            <TransactionsTab address={address} period={period} />
          )}

          {activeTab === 'functions' && (
            <FunctionsTab data={analytics.functionBreakdown} />
          )}

          {activeTab === 'errors' && (
            <ErrorsTable
              data={analytics.errorBreakdown}
              totalErrors={analytics.failCount}
              errorRate={analytics.totalTransactions > 0 ? (analytics.failCount / analytics.totalTransactions) * 100 : 0}
            />
          )}

          {activeTab === 'callers' && (
            <CallersTab data={analytics.callerBreakdown} />
          )}

          {activeTab === 'audit' && (
            <AiAuditTab address={address} />
          )}
        </div>
      </div>
    </div>
  );
}
