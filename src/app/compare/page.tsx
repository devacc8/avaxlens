import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Compare — AvaxLens vs Competitors',
  description: 'See how AvaxLens compares to Snowtrace, Tenderly, and Dune for Avalanche smart contract analytics.',
};

interface FeatureRow {
  feature: string;
  avaxlens: string | boolean;
  snowtrace: string | boolean;
  tenderly: string | boolean;
  dune: string | boolean;
}

const FEATURES: FeatureRow[] = [
  { feature: 'Free tier', avaxlens: true, snowtrace: true, tenderly: '100k/mo limit', dune: '100 queries/mo' },
  { feature: 'Instant analytics', avaxlens: true, snowtrace: false, tenderly: false, dune: false },
  { feature: 'Visual dashboards', avaxlens: true, snowtrace: false, tenderly: true, dune: 'Manual SQL' },
  { feature: 'Avalanche-native', avaxlens: true, snowtrace: true, tenderly: false, dune: false },
  { feature: 'No signup required', avaxlens: true, snowtrace: true, tenderly: false, dune: false },
  { feature: 'ABI decoding', avaxlens: true, snowtrace: false, tenderly: true, dune: 'Manual' },
  { feature: 'No SQL needed', avaxlens: true, snowtrace: true, tenderly: true, dune: false },
  { feature: 'Function breakdown', avaxlens: true, snowtrace: false, tenderly: true, dune: 'Manual' },
  { feature: 'Error analysis', avaxlens: true, snowtrace: false, tenderly: true, dune: 'Manual' },
];

interface PricingTier {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  features: string[];
}

const PRICING: PricingTier[] = [
  {
    name: 'AvaxLens',
    price: '$0',
    period: 'forever',
    highlight: true,
    features: [
      'Unlimited contracts',
      'Visual analytics dashboard',
      'ABI-decoded functions',
      'Error log analysis',
      'No signup required',
    ],
  },
  {
    name: 'Tenderly',
    price: '$49',
    period: '/month (Team)',
    features: [
      '100k API calls limit',
      'Transaction debugger',
      'Multi-chain support',
      'Requires project setup',
      'Account required',
    ],
  },
  {
    name: 'Dune',
    price: '$39',
    period: '/month (Team)',
    features: [
      '500 queries/month',
      'SQL query builder',
      'Community dashboards',
      'SQL knowledge required',
      'Account required',
    ],
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <span className="text-success font-bold text-lg">{'\u2713'}</span>;
  }
  if (value === false) {
    return <span className="text-error font-bold text-lg">{'\u2717'}</span>;
  }
  return <span className="text-warning text-xs">{value}</span>;
}

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-avax-red to-accent-purple bg-clip-text text-transparent">
              How AvaxLens Compares
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The only free, instant, visual analytics tool built specifically for Avalanche.
          </p>
        </div>

        {/* Feature comparison table */}
        <div className="bg-bg-card border border-border rounded-xl mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 sm:p-4 text-text-secondary font-medium">Feature</th>
                  <th className="p-2 sm:p-4 text-center text-avax-red font-bold">AvaxLens</th>
                  <th className="hidden sm:table-cell p-4 text-center text-text-secondary font-medium">Snowtrace</th>
                  <th className="p-2 sm:p-4 text-center text-text-secondary font-medium">Tenderly</th>
                  <th className="hidden md:table-cell p-4 text-center text-text-secondary font-medium">Dune</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50 hover:bg-bg-primary/30 transition">
                    <td className="p-2 sm:p-4 text-white font-medium">{row.feature}</td>
                    <td className="p-2 sm:p-4 text-center"><CellValue value={row.avaxlens} /></td>
                    <td className="hidden sm:table-cell p-4 text-center"><CellValue value={row.snowtrace} /></td>
                    <td className="p-2 sm:p-4 text-center"><CellValue value={row.tenderly} /></td>
                    <td className="hidden md:table-cell p-4 text-center"><CellValue value={row.dune} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing comparison */}
        <h2 className="text-2xl font-bold text-white text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PRICING.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 border ${
                tier.highlight
                  ? 'bg-avax-red/10 border-avax-red/40 ring-1 ring-avax-red/20'
                  : 'bg-bg-card border-border'
              }`}
            >
              <h3 className={`text-lg font-bold mb-1 ${tier.highlight ? 'text-avax-red' : 'text-white'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-text-muted text-sm">{tier.period}</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-success' : 'text-text-muted'}`}>
                      {tier.highlight ? '\u2713' : '\u2022'}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why AvaxLens */}
        <h2 className="text-2xl font-bold text-white text-center mb-8">Why AvaxLens?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Zero Barrier',
              description: 'No signup, no API key, no project setup. Just paste a contract address and go.',
            },
            {
              title: 'Avalanche-Native',
              description: 'Built specifically for the Avalanche ecosystem. Optimized for C-Chain and future L1s.',
            },
            {
              title: 'Instant Insights',
              description: 'Get transaction volume, success rates, function breakdown, and error analysis in seconds.',
            },
            {
              title: 'Free Forever',
              description: 'Core analytics will always be free. Pro features for power users, not paywalls for basics.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">{card.title}</h3>
              <p className="text-text-secondary text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-4">
            See the difference for yourself.
          </p>
          <a
            href="/"
            className="inline-block bg-avax-red hover:bg-avax-red-hover text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Try AvaxLens Free
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
