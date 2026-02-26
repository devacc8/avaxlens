'use client';

import type { AuditSeverity, AiAuditData } from '@/lib/types';
import { getAuditData, AUDITED_CONTRACTS } from '@/data/audits';

interface AiAuditTabProps {
  address: string;
}

function getScoreColor(score: number): { border: string; text: string } {
  if (score >= 80) return { border: 'border-success', text: 'text-success' };
  if (score >= 60) return { border: 'border-warning', text: 'text-warning' };
  return { border: 'border-error', text: 'text-error' };
}

function getSeverityStyle(severity: AuditSeverity) {
  switch (severity) {
    case 'critical': return { dot: 'bg-error', bg: 'bg-error/10', text: 'text-error' };
    case 'warning':  return { dot: 'bg-warning', bg: 'bg-warning/10', text: 'text-warning' };
    case 'info':     return { dot: 'bg-accent-purple-light', bg: 'bg-accent-purple/10', text: 'text-accent-purple-light' };
  }
}

function AuditContent({ data }: { data: AiAuditData }) {
  const { border, text } = getScoreColor(data.score);
  const criticalCount = data.findings.filter(f => f.severity === 'critical').length;
  const warningCount = data.findings.filter(f => f.severity === 'warning').length;

  return (
    <div className="space-y-6">
      {/* Score Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-2">Security Score</p>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full border-4 ${border} flex items-center justify-center`}>
              <span className={`${text} text-sm font-bold`}>{data.score}</span>
            </div>
            <div>
              <p className={`text-2xl font-bold ${text}`}>{data.grade}</p>
              <p className="text-text-muted text-xs">{data.score} / 100</p>
            </div>
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-2">Score Distribution</p>
          <div className="w-full bg-bg-input rounded-full h-2.5 mt-4">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-error via-warning to-success"
              style={{ width: `${data.score}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-text-muted mt-2">
            <span>0</span>
            <span>100</span>
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Total Findings</p>
          <p className="text-3xl font-bold">{data.findings.length}</p>
          <p className="text-text-muted text-xs mt-1">
            {criticalCount} critical · {warningCount} warning
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5">
          <p className="text-text-secondary text-sm mb-1">Compiler</p>
          <p className="text-lg font-bold font-mono">v{data.compilerVersion}</p>
          <p className="text-text-muted text-xs mt-1">{data.contractName}</p>
        </div>
      </div>

      {/* Findings */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-3">Findings</h3>
        <p className="text-text-secondary text-sm mb-5">{data.summary}</p>
        <div className="space-y-3">
          {data.findings.map((finding) => {
            const style = getSeverityStyle(finding.severity);
            return (
              <div key={finding.id} className={`${style.bg} rounded-lg px-4 py-3`}>
                <div className="flex items-start gap-2">
                  <span className={`w-2 h-2 rounded-full ${style.dot} shrink-0 mt-1.5`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${style.text}`}>{finding.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${style.bg} ${style.text} uppercase font-semibold`}>
                        {finding.severity}
                      </span>
                    </div>
                    <p className="text-text-secondary text-xs">{finding.description}</p>
                    {finding.location && (
                      <p className="text-text-muted text-xs font-mono mt-1">{finding.location}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Recommendations</h3>
        <ol className="space-y-3">
          {data.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-avax-red font-bold text-sm shrink-0">{i + 1}.</span>
              <span className="text-text-secondary text-sm">{rec}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Metadata */}
      <p className="text-text-muted text-xs text-center">
        AI audit generated on {new Date(data.auditedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        {' '}&middot; Solidity {data.compilerVersion} &middot; Static analysis only — not a substitute for a professional audit
      </p>
    </div>
  );
}

function AuditComingSoon() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-border flex items-center justify-center">
        <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">AI Audit Not Available</h3>
      <p className="text-text-secondary mb-6 max-w-md mx-auto">
        AI security audits are currently available for select contracts.
        Try one of the audited contracts below:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
        {AUDITED_CONTRACTS.map((c) => (
          <a
            key={c.address}
            href={`/contract/${c.address}`}
            className="bg-bg-input border border-border rounded-lg p-3 hover:border-avax-red transition text-center"
          >
            <p className="font-semibold text-sm">{c.name}</p>
            <p className="text-text-muted text-xs mt-1 font-mono">
              {c.address.slice(0, 6)}...{c.address.slice(-4)}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-bg-input rounded-lg text-sm text-text-secondary">
        <span className="w-2 h-2 bg-avax-red rounded-full animate-pulse" />
        More contracts coming soon
      </div>
    </div>
  );
}

export default function AiAuditTab({ address }: AiAuditTabProps) {
  const data = getAuditData(address);

  if (!data) {
    return <AuditComingSoon />;
  }

  return <AuditContent data={data} />;
}
