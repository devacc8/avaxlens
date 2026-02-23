export function SkeletonBlock({ className }: { className?: string }) {
  return <div className={`bg-border rounded animate-pulse ${className || ''}`} />;
}

export function MetricCardSkeleton() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5">
      <SkeletonBlock className="h-3 w-24 mb-3" />
      <SkeletonBlock className="h-8 w-32" />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 h-64 animate-pulse" />
  );
}

export function TableSkeleton() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6">
      <SkeletonBlock className="h-4 w-32 mb-6" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4 mb-4">
          <SkeletonBlock className="h-4 w-48" />
          <SkeletonBlock className="h-4 w-16" />
          <SkeletonBlock className="h-4 w-12" />
          <SkeletonBlock className="h-4 w-16" />
        </div>
      ))}
    </div>
  );
}
