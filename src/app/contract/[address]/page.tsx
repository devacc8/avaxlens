import { notFound } from 'next/navigation';
import { isValidAddress } from '@/lib/validation';
import { getContractInfo } from '@/lib/apis/snowtrace';
import { getTransactions, getFirstTransaction } from '@/lib/apis/routescan';
import { processTransactions } from '@/lib/processing/analytics';
import { formatDate } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContractHeader from '@/components/dashboard/ContractHeader';
import MetricCards from '@/components/dashboard/MetricCards';
import TabNavigation from '@/components/dashboard/TabNavigation';

interface Props {
  params: Promise<{ address: string }>;
  searchParams: Promise<{ period?: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { address } = await params;
  return {
    title: `${address.slice(0, 10)}... — AvaxLens`,
  };
}

export default async function ContractDashboard({ params, searchParams }: Props) {
  const { address } = await params;
  const { period = '30d' } = await searchParams;

  if (!isValidAddress(address)) {
    notFound();
  }

  const periodDays = period === '7d' ? 7 : period === '90d' ? 90 : 30;

  try {
    // Sequential calls to respect API rate limits
    const contractInfo = await getContractInfo(address);
    const transactions = await getTransactions(address);
    const firstTx = await getFirstTransaction(address);

    if (firstTx) {
      contractInfo.creationDate = formatDate(parseInt(firstTx.timeStamp));
    }

    const analytics = processTransactions(transactions, contractInfo.abi, periodDays);

    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ContractHeader info={contractInfo} />
          <MetricCards analytics={analytics} />
          <TabNavigation
            analytics={analytics}
            contractInfo={contractInfo}
            address={address}
          />
        </main>
        <Footer />
      </>
    );
  } catch {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
            <h2 className="text-xl font-semibold mb-2">Failed to load contract data</h2>
            <p className="text-text-secondary mb-4">
              Could not fetch data for address {address}. Please check the address and try again.
            </p>
            <a href="/" className="text-avax-red hover:underline">
              Back to home
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
