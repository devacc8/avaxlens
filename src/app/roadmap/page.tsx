import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Roadmap — AvaxLens',
  description: 'AvaxLens product roadmap: from free analytics MVP to AI-powered security monitoring for Avalanche smart contracts.',
};

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  status: 'done' | 'current' | 'planned' | 'future';
  icon: string;
  features: string[];
}

const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Analytics MVP',
    subtitle: 'Free instant analytics — shipped',
    status: 'done',
    icon: '1',
    features: [
      '6 dashboard tabs: Overview, Transactions, Functions, Errors, Callers, AI Audit',
      'Live network stats: AVAX price, gas price, TVL (DeFiLlama + RPC)',
      'AI security audits with risk scoring (A-F grade) for popular contracts',
      'CSV export per tab, shareable dashboard URLs',
      'Contract comparison page, recent searches',
      'React Query caching, 3 security audits (score 10/10)',
      'Rate limiting, CSP/HSTS headers, health check endpoint',
    ],
  },
  {
    id: 2,
    title: 'AI Security',
    subtitle: 'Smart contract analysis for all contracts',
    status: 'planned',
    icon: '2',
    features: [
      'AI-powered vulnerability detection for any verified contract',
      'Anomaly detection (volume spikes, gas anomalies)',
      'Real-time alerts (Telegram, Discord)',
      'MCP server for AI assistants',
      'Vector embeddings for contract bytecode',
    ],
  },
  {
    id: 3,
    title: 'Multi-Chain',
    subtitle: 'Beyond C-Chain',
    status: 'future',
    icon: '3',
    features: [
      'Avalanche L1 / Subnet support (Beam, DFK, Dexalot)',
      'Cross-chain contract comparison',
      'Subnet health metrics',
      'Generic EVM chain support',
    ],
  },
  {
    id: 4,
    title: 'Pro Tier',
    subtitle: 'Revenue & scale',
    status: 'future',
    icon: '4',
    features: [
      'Pro plan: $10-20/mo with AI scanning & alerts',
      'Team plan: shared dashboards, role-based access',
      'Public API for bots & dashboards',
      'Extended history (90+ days)',
      'CSV / PNG export',
    ],
  },
];

const STATUS_STYLES: Record<Phase['status'], { dot: string; badge: string; badgeText: string; line: string }> = {
  done: {
    dot: 'bg-success border-success/30',
    badge: 'bg-success/15 text-success border border-success/30',
    badgeText: 'Shipped',
    line: 'bg-success/40',
  },
  current: {
    dot: 'bg-avax-red border-avax-red/30 animate-pulse',
    badge: 'bg-avax-red/15 text-avax-red border border-avax-red/30',
    badgeText: 'In Progress',
    line: 'bg-avax-red/40',
  },
  planned: {
    dot: 'bg-warning border-warning/30',
    badge: 'bg-warning/15 text-warning border border-warning/30',
    badgeText: 'Planned',
    line: 'bg-border',
  },
  future: {
    dot: 'bg-text-muted border-text-muted/30',
    badge: 'bg-text-muted/15 text-text-muted border border-text-muted/30',
    badgeText: 'Future',
    line: 'bg-border',
  },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-avax-red to-accent-purple bg-clip-text text-transparent">
              Product Roadmap
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From free analytics to AI-powered security monitoring.
            Here&apos;s where AvaxLens is heading.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {PHASES.map((phase, index) => {
            const style = STATUS_STYLES[phase.status];
            const isLast = index === PHASES.length - 1;

            return (
              <div key={phase.id} className="relative flex gap-6 md:gap-10 pb-12 last:pb-0">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full border-4 ${style.dot} flex items-center justify-center text-sm font-bold text-white shrink-0 z-10`}>
                    {phase.icon}
                  </div>
                  {!isLast && (
                    <div className={`w-0.5 flex-1 mt-2 ${style.line}`} />
                  )}
                </div>

                {/* Card */}
                <div className="bg-bg-card border border-border rounded-xl p-6 flex-1 mb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold text-white">
                      Phase {phase.id}: {phase.title}
                    </h2>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${style.badge}`}>
                      {style.badgeText}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">{phase.subtitle}</p>
                  <ul className="space-y-2">
                    {phase.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className={`mt-1 shrink-0 ${phase.status === 'done' ? 'text-success' : 'text-text-muted'}`}>
                          {phase.status === 'done' ? '\u2713' : '\u25CB'}
                        </span>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            Free analytics today. AI-powered monitoring tomorrow.
          </p>
          <a
            href="/"
            className="inline-block bg-avax-red hover:bg-avax-red-hover text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Try AvaxLens Now
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
