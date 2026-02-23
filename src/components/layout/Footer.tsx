'use client';

import { useState, useEffect } from 'react';
import packageJson from '../../../package.json';

type StatusLevel = 'online' | 'degraded' | 'offline';

const STATUS_CONFIG: Record<StatusLevel, { color: string; label: string }> = {
  online: { color: 'bg-success', label: 'All systems operational' },
  degraded: { color: 'bg-yellow-400', label: 'Degraded performance' },
  offline: { color: 'bg-error', label: 'Service disrupted' },
};

const APP_VERSION = `v${packageJson.version}`;

export default function Footer() {
  const [status, setStatus] = useState<StatusLevel>('online');

  useEffect(() => {
    // Placeholder: always online for now.
    // Later this can check backend health, RPC status, etc.
    setStatus('online');
  }, []);

  const { color, label } = STATUS_CONFIG[status];

  return (
    <footer className="border-t border-border mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-secondary">
        <p className="text-text-muted">
          AvaxLens — Understand your contract in 10 seconds
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2" title={label}>
            <span className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
            <span className="hidden sm:inline">{label}</span>
          </div>
          <span className="text-text-muted">{APP_VERSION}</span>
        </div>
      </div>
    </footer>
  );
}
