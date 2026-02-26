'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { FunctionStats } from '@/lib/types';

interface FunctionCallsChartProps {
  data: FunctionStats[];
}

export default function FunctionCallsChart({ data }: FunctionCallsChartProps) {
  const chartData = data.slice(0, 10).map(f => ({
    name: f.name.length > 18 ? f.name.slice(0, 18) + '...' : f.name,
    calls: f.calls,
  }));

  if (chartData.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-text-muted text-sm">
        No function data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis
          type="number"
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={140}
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
          }}
          formatter={(value: number | undefined) => [value?.toLocaleString() ?? '0', 'Calls']}
        />
        <Bar dataKey="calls" fill="#6366f1" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
