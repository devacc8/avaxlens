'use client';

import packageJson from '../../../package.json';
import { useHealth } from '@/lib/hooks/useHealth';

type StatusLevel = 'online' | 'degraded' | 'offline';

const STATUS_CONFIG: Record<StatusLevel, { color: string; label: string }> = {
  online: { color: 'bg-success', label: 'All systems operational' },
  degraded: { color: 'bg-yellow-400', label: 'Degraded performance' },
  offline: { color: 'bg-error', label: 'Service disrupted' },
};

const APP_VERSION = `v${packageJson.version}`;

export default function Footer() {
  const { data: status = 'online' } = useHealth();

  const { color, label } = STATUS_CONFIG[status];

  return (
    <footer className="border-t border-border mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-secondary">
        <p className="text-text-muted">
          AvaxLens — Understand your contract in 10 seconds
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/devacc8/avaxlens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-white transition"
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
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
