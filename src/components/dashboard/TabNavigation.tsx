'use client';

import { useState, useCallback, useEffect } from 'react';
import type { ContractAnalytics, ContractInfo, Period, TabId } from '@/lib/types';
import { generateCsv, downloadCsv } from '@/lib/export-csv';
import { saveRecentSearch } from '@/lib/recent-searches';
import { useAnalytics } from '@/lib/hooks/useAnalytics';
import PeriodSelector from '@/components/charts/PeriodSelector';
import OverviewTab from '@/components/dashboard/OverviewTab';
import FunctionsTab from '@/components/dashboard/FunctionsTab';
import CallersTab from '@/components/dashboard/CallersTab';
import TransactionsTab from '@/components/dashboard/TransactionsTab';
import AiAuditTab from '@/components/dashboard/AiAuditTab';
import ErrorsTable from '@/components/tables/ErrorsTable';

const VALID_TABS: TabId[] = ['overview', 'transactions', 'functions', 'errors', 'callers', 'audit'];

function isValidTab(tab: string | undefined): tab is TabId {
  return !!tab && VALID_TABS.includes(tab as TabId);
}

interface TabNavigationProps {
  analytics: ContractAnalytics;
  contractInfo: ContractInfo;
  address: string;
  initialPeriod?: string;
  initialTab?: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'functions', label: 'Functions' },
  { id: 'errors', label: 'Errors' },
  { id: 'callers', label: 'Callers' },
  { id: 'audit', label: 'AI Audit' },
];

function updateUrl(address: string, period: string, tab: string) {
  const params = new URLSearchParams();
  if (period !== '30d') params.set('period', period);
  if (tab !== 'overview') params.set('tab', tab);
  const qs = params.toString();
  const url = `/contract/${address}${qs ? '?' + qs : ''}`;
  window.history.replaceState(null, '', url);
}

export default function TabNavigation({ analytics: initialAnalytics, contractInfo, address, initialPeriod, initialTab }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<TabId>(isValidTab(initialTab) ? initialTab : 'overview');
  const [period, setPeriod] = useState<Period>(initialPeriod === '7d' ? initialPeriod : '30d');

  const { data: analytics, isFetching: loading, error } = useAnalytics(address, period, initialAnalytics);

  useEffect(() => {
    saveRecentSearch(address, contractInfo.name);
  }, [address, contractInfo.name]);

  const canExport = activeTab !== 'transactions' && activeTab !== 'audit';

  const handleExport = useCallback(() => {
    if (!analytics) return;
    const csv = generateCsv(analytics, activeTab);
    if (!csv) return;
    const name = contractInfo.name || address.slice(0, 10);
    downloadCsv(csv, `${name}_${activeTab}_${period}.csv`);
  }, [analytics, activeTab, contractInfo.name, address, period]);

  const handlePeriodChange = useCallback((newPeriod: Period) => {
    setPeriod(newPeriod);
    updateUrl(address, newPeriod, activeTab);
  }, [address, activeTab]);

  const currentAnalytics = analytics || initialAnalytics;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-1 bg-bg-input p-1 rounded-lg">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); updateUrl(address, period, tab.id); }}
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
        <div className="flex items-center gap-2">
          {canExport && (
            <button
              onClick={handleExport}
              disabled={loading}
              className="px-3 py-1.5 text-xs sm:text-sm bg-bg-input border border-border rounded-lg text-text-secondary hover:text-white hover:border-border-hover transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title="Export as CSV"
            >
              <span className="hidden sm:inline">Export CSV</span>
              <span className="sm:hidden">CSV</span>
            </button>
          )}
          {activeTab !== 'audit' && (
            <PeriodSelector period={period} onChange={handlePeriodChange} disabled={loading} />
          )}
        </div>
      </div>

      {error && (
        <div className="bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3 mb-4 text-sm">
          {error instanceof Error ? error.message : 'Failed to load data. Please try again.'}
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
            <OverviewTab analytics={currentAnalytics} />
          )}

          {activeTab === 'transactions' && (
            <TransactionsTab address={address} period={period} />
          )}

          {activeTab === 'functions' && (
            <FunctionsTab data={currentAnalytics.functionBreakdown} />
          )}

          {activeTab === 'errors' && (
            <ErrorsTable
              data={currentAnalytics.errorBreakdown}
              totalErrors={currentAnalytics.failCount}
              errorRate={currentAnalytics.totalTransactions > 0 ? (currentAnalytics.failCount / currentAnalytics.totalTransactions) * 100 : 0}
            />
          )}

          {activeTab === 'callers' && (
            <CallersTab data={currentAnalytics.callerBreakdown} />
          )}

          {activeTab === 'audit' && (
            <AiAuditTab address={address} />
          )}
        </div>
      </div>
    </div>
  );
}
