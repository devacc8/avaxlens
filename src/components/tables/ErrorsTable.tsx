'use client';

import type { ErrorStats } from '@/lib/types';

interface ErrorsTableProps {
  data: ErrorStats[];
}

export default function ErrorsTable({ data }: ErrorsTableProps) {
  if (data.length === 0) {
    return (
      <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
        <p className="text-text-muted text-sm">No errors found — all transactions succeeded</p>
      </div>
    );
  }

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6">
      <h3 className="font-semibold mb-6">Error Log</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-text-secondary text-sm border-b border-border">
              <th className="text-left py-3 px-4">Error</th>
              <th className="text-right py-3 px-4">Count</th>
              <th className="text-right py-3 px-4">Last Seen</th>
              <th className="text-right py-3 px-4">Function</th>
            </tr>
          </thead>
          <tbody>
            {data.map((err, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-bg-input/50 transition">
                <td className="py-3 px-4 font-mono text-sm text-error">{err.error}</td>
                <td className="py-3 px-4 text-right font-medium">{err.count.toLocaleString()}</td>
                <td className="py-3 px-4 text-right text-text-secondary">{err.lastSeen}</td>
                <td className="py-3 px-4 text-right font-mono text-sm">{err.functionName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
