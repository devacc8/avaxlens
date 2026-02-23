'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { DailySuccessFail } from '@/lib/types';

interface SuccessFailChartProps {
  data: DailySuccessFail[];
}

export default function SuccessFailChart({ data }: SuccessFailChartProps) {
  if (data.length === 0) {
    return (
      <div className="h-40 flex items-center justify-center text-text-muted text-sm">
        No transaction data available
      </div>
    );
  }

  const totalSuccess = data.reduce((s, d) => s + d.success, 0);
  const totalFail = data.reduce((s, d) => s + d.fail, 0);
  const total = totalSuccess + totalFail;
  const avgSuccess = total > 0 ? Math.round((totalSuccess / total) * 100) : 0;
  const avgFail = total > 0 ? 100 - avgSuccess : 0;

  return (
    <>
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <XAxis
          dataKey="date"
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
          }}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
        />
        <Bar dataKey="success" stackId="a" fill="#4ade80" name="Success" radius={[0, 0, 0, 0]} />
        <Bar dataKey="fail" stackId="a" fill="#f87171" name="Failed" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div className="flex justify-center mt-2 text-sm font-medium">
      <span className="text-success">{avgSuccess}%</span>
      <span className="text-text-muted mx-2">&bull;</span>
      <span className="text-error">{avgFail}%</span>
      <span className="text-text-secondary ml-2">Avg</span>
    </div>
    </>
  );
}
