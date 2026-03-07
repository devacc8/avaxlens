'use client';

import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SortDropdownProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, options, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-bg-input border border-border px-3 py-2 rounded-lg text-sm text-white hover:border-border-hover focus:outline-none cursor-pointer transition"
      >
        <span>{selected?.label ?? value}</span>
        <svg
          className={`w-3.5 h-3.5 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-20 min-w-full bg-bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm transition cursor-pointer ${
                opt.value === value
                  ? 'bg-avax-red/15 text-avax-red'
                  : 'text-text-secondary hover:bg-bg-input hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
