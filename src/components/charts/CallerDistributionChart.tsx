'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { CallerStats } from '@/lib/types';
import { shortenAddress } from '@/lib/utils';

interface CallerDistributionChartProps {
  data: CallerStats[];
}

export default function CallerDistributionChart({ data }: CallerDistributionChartProps) {
  const chartData = data.slice(0, 10).map(c => ({
    name: shortenAddress(c.address),
    txCount: c.txCount,
    address: c.address,
  }));

  if (chartData.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-text-muted text-sm">
        No caller data available
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
          width={100}
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: 'rgba(232, 65, 66, 0.1)' }}
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
          }}
          formatter={(value: number | undefined) => [value?.toLocaleString() ?? '0', 'Transactions']}
        />
        <Bar dataKey="txCount" fill="#E84142" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
