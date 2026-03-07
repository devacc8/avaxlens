'use client';

import type { Period } from '@/lib/types';

interface PeriodSelectorProps {
  period: Period;
  onChange: (period: Period) => void;
  disabled?: boolean;
}

export default function PeriodSelector({ period, onChange, disabled }: PeriodSelectorProps) {
  const periods: Period[] = ['7d', '30d'];

  return (
    <div className="flex gap-2">
      {periods.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          disabled={disabled}
          className={`px-3 py-1.5 sm:py-1 rounded text-sm font-medium transition ${
            period === p
              ? 'bg-avax-red text-white'
              : 'bg-bg-input text-text-secondary hover:text-white'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
