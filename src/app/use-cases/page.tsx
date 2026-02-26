import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Use Cases — AvaxLens',
  description: 'How developers, protocol teams, auditors, and traders use AvaxLens to understand Avalanche smart contracts.',
};

/* ─── AI Security Scan mockup data ─── */
const MOCK_FINDINGS = [
  { severity: 'critical', label: 'Reentrancy risk in withdraw()', color: 'text-error', bg: 'bg-error/10' },
  { severity: 'warning', label: 'Unchecked return value in transfer()', color: 'text-warning', bg: 'bg-warning/10' },
  { severity: 'info', label: 'Consider using SafeMath for older compiler', color: 'text-accent-purple-light', bg: 'bg-accent-purple/10' },
];

function SecurityMockup() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full">
      {/* Score header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-text-muted text-xs mb-1">Security Score</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-warning">B+</span>
            <span className="text-text-muted text-sm">72 / 100</span>
          </div>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-warning flex items-center justify-center">
          <span className="text-warning text-lg font-bold">72</span>
        </div>
      </div>

      {/* Score bar */}
      <div className="w-full bg-bg-input rounded-full h-2 mb-5">
        <div className="h-2 rounded-full bg-gradient-to-r from-error via-warning to-success" style={{ width: '72%' }} />
      </div>

      {/* Findings */}
      <p className="text-text-secondary text-xs font-medium mb-3">AI Findings</p>
      <div className="space-y-2">
        {MOCK_FINDINGS.map((f) => (
          <div key={f.label} className={`${f.bg} rounded-lg px-3 py-2 flex items-center gap-2`}>
            <span className={`w-2 h-2 rounded-full ${f.color.replace('text-', 'bg-')} shrink-0`} />
            <span className={`text-xs ${f.color}`}>{f.label}</span>
          </div>
        ))}
      </div>

      {/* Badge */}
      <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
        <span className="w-2 h-2 bg-warning rounded-full" />
        AI-Powered &middot; Beta
      </div>
    </div>
  );
}

function ErrorsMockup() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full">
      {/* Summary row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-error/10 rounded-lg p-3">
          <p className="text-text-muted text-xs">Total Errors</p>
          <p className="text-xl font-bold text-error">1,247</p>
        </div>
        <div className="bg-error/10 rounded-lg p-3">
          <p className="text-text-muted text-xs">Error Rate</p>
          <p className="text-xl font-bold text-error">5.8%</p>
        </div>
      </div>

      {/* Error rows */}
      <div className="space-y-2">
        {[
          { error: 'InsufficientBalance', count: '512', pct: 41 },
          { error: 'SlippageTooHigh', count: '389', pct: 31 },
          { error: 'Expired', count: '201', pct: 16 },
        ].map((e) => (
          <div key={e.error} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-mono text-error">{e.error}</span>
                <span className="text-text-muted">{e.count}</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-error/60" style={{ width: `${e.pct}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitoringMockup() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full">
      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-bg-input rounded-lg p-3">
          <p className="text-text-muted text-xs">Total Txs</p>
          <p className="text-xl font-bold text-white">2.8M</p>
          <p className="text-xs text-success">+12.5%</p>
        </div>
        <div className="bg-bg-input rounded-lg p-3">
          <p className="text-text-muted text-xs">Success Rate</p>
          <p className="text-xl font-bold text-success">94.2%</p>
          <p className="text-xs text-text-muted">-0.3%</p>
        </div>
      </div>

      {/* Mini chart */}
      <div className="flex items-end gap-1 h-16 mb-2">
        {[40, 55, 35, 60, 50, 70, 65, 75, 60, 80, 72, 85].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-accent-purple/60 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-text-muted">
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}

function GasMockup() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full">
      <p className="text-text-secondary text-xs font-medium mb-3">Functions by Gas Usage</p>
      <div className="space-y-3">
        {[
          { name: 'addLiquidity()', gas: '250,000', pct: 100, color: 'bg-error/60' },
          { name: 'removeLiquidity()', gas: '210,000', pct: 84, color: 'bg-warning/60' },
          { name: 'swap()', gas: '185,000', pct: 74, color: 'bg-warning/60' },
          { name: 'claim()', gas: '95,000', pct: 38, color: 'bg-success/60' },
          { name: 'getReserves()', gas: '15,000', pct: 6, color: 'bg-success/60' },
        ].map((f) => (
          <div key={f.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-mono text-text-secondary">{f.name}</span>
              <span className="text-white font-medium">{f.gas}</span>
            </div>
            <div className="w-full bg-bg-input rounded-full h-2">
              <div className={`h-2 rounded-full ${f.color}`} style={{ width: `${f.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Use case data ─── */
interface UseCase {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  problem: string;
  solution: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
}

const USE_CASES: UseCase[] = [
  {
    id: 'security',
    badge: 'Beta',
    badgeColor: 'bg-warning/15 text-warning border-warning/30',
    title: 'AI Security Scan',
    problem: 'Auditing a smart contract costs $5,000–$50,000 and takes weeks. Most developers deploy without any security review.',
    solution: 'AvaxLens analyzes smart contract source code to detect common vulnerabilities. Currently available for select popular contracts.',
    bullets: [
      'Instant security score (A–F rating)',
      'Reentrancy, overflow, and access control detection',
      'Anomaly alerts via Telegram and Discord',
      'Risk scoring based on transaction patterns',
    ],
    mockup: <SecurityMockup />,
  },
  {
    id: 'errors',
    badge: 'Live',
    badgeColor: 'bg-success/15 text-success border-success/30',
    title: 'Error Investigation',
    problem: 'Transactions are failing but you don\'t know why. Explorer shows raw hex revert data — impossible to debug quickly.',
    solution: 'AvaxLens decodes every revert reason, groups errors by type, and shows which functions are affected.',
    bullets: [
      'Decoded revert reasons in plain English',
      'Error count and rate breakdown',
      'Most common errors highlighted',
      'Drill down by function and time period',
    ],
    mockup: <ErrorsMockup />,
    reverse: true,
  },
  {
    id: 'monitoring',
    badge: 'Live',
    badgeColor: 'bg-success/15 text-success border-success/30',
    title: 'Protocol Monitoring',
    problem: 'You deployed a contract last week. Is it being used? Are transactions increasing? Is the success rate dropping?',
    solution: 'Get a complete health dashboard in 10 seconds. Track volume trends, success rates, and user growth over time.',
    bullets: [
      'Transaction volume charts (7d / 30d / 90d)',
      'Success vs fail trend analysis',
      'Unique callers tracking',
      'Period comparison for growth metrics',
    ],
    mockup: <MonitoringMockup />,
  },
  {
    id: 'gas',
    badge: 'Live',
    badgeColor: 'bg-success/15 text-success border-success/30',
    title: 'Gas Optimization',
    problem: 'Users complain about high gas costs. You need to know which functions are expensive before you can optimize.',
    solution: 'See average gas per function, sorted by cost. Identify the most expensive operations at a glance.',
    bullets: [
      'Per-function gas breakdown',
      'Sort by gas, calls, or success rate',
      'Sortable table on the Overview dashboard',
      'Track gas changes across periods',
    ],
    mockup: <GasMockup />,
    reverse: true,
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-avax-red to-accent-purple bg-clip-text text-transparent">
              Built for Real Problems
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how developers, protocol teams, and auditors use AvaxLens
            to understand their Avalanche smart contracts.
          </p>
        </div>

        {/* Use case sections */}
        <div className="space-y-24">
          {USE_CASES.map((uc) => (
            <section key={uc.id} className={`flex flex-col ${uc.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
              {/* Text */}
              <div className="flex-1 w-full">
                <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border mb-3 ${uc.badgeColor}`}>
                  {uc.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{uc.title}</h2>
                <p className="text-text-secondary mb-3">{uc.problem}</p>
                <p className="text-text-secondary mb-5">{uc.solution}</p>
                <ul className="space-y-2">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-success mt-0.5 shrink-0">{'\u2713'}</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                {uc.mockup}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to understand your contract?</h2>
          <p className="text-text-secondary mb-6">
            Paste any Avalanche C-Chain address and get instant analytics. Free, no signup.
          </p>
          <a
            href="/"
            className="inline-block bg-avax-red hover:bg-avax-red-hover text-white font-semibold px-8 py-3 rounded-lg transition text-lg"
          >
            Try AvaxLens Now
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
