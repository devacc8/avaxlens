import { NextRequest, NextResponse } from 'next/server';
import { isValidAddress } from '@/lib/validation';
import { getContractInfo } from '@/lib/apis/snowtrace';
import { getTransactions, getFirstTransaction } from '@/lib/apis/routescan';
import { processTransactions } from '@/lib/processing/analytics';
import { formatDate } from '@/lib/utils';
import { getCached, setCache } from '@/lib/cache';
import { CACHE_TTL } from '@/lib/constants';
import type { ContractInfo, ContractAnalytics } from '@/lib/types';

interface AnalyticsData {
  contractInfo: ContractInfo;
  analytics: ContractAnalytics;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params;

  if (!isValidAddress(address)) {
    return NextResponse.json(
      { success: false, error: 'Invalid Avalanche address' },
      { status: 400 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const period = searchParams.get('period') || '30d';
  const periodDays = period === '7d' ? 7 : period === '90d' ? 90 : 30;

  const cacheKey = `analytics:${address}:${period}`;
  const cached = getCached<AnalyticsData>(cacheKey);
  if (cached) {
    return NextResponse.json({ success: true, data: cached });
  }

  try {
    // Snowtrace calls (sequential internally: source → ABI)
    const contractInfo = await getContractInfo(address);

    // Routescan calls (sequential to respect 2 req/sec limit)
    const transactions = await getTransactions(address);
    const firstTx = await getFirstTransaction(address);

    if (firstTx) {
      contractInfo.creationDate = formatDate(parseInt(firstTx.timeStamp));
    }

    const analytics = processTransactions(transactions, contractInfo.abi, periodDays);

    const data: AnalyticsData = { contractInfo, analytics };
    setCache(cacheKey, data, CACHE_TTL.ANALYTICS);

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to compute analytics' },
      { status: 500 }
    );
  }
}
