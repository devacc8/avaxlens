import Header from '@/components/layout/Header';
import { MetricCardSkeleton, ChartSkeleton, TableSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Contract header skeleton */}
        <div className="bg-bg-card border border-border rounded-xl p-6 mb-8 animate-pulse">
          <div className="h-4 bg-border rounded w-96 mb-3" />
          <div className="h-8 bg-border rounded w-64" />
        </div>

        {/* Metric cards skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
        </div>

        {/* Charts skeleton */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>

        {/* Table skeleton */}
        <TableSkeleton />
      </main>
    </>
  );
}
