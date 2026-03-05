import { NextRequest, NextResponse } from 'next/server';
import { isValidAddress } from '@/lib/validation';
import { isRateLimited } from '@/lib/rate-limit';
import { getContractInfo } from '@/lib/apis/snowtrace';
import { getFirstTransaction } from '@/lib/apis/routescan';
import { formatDate } from '@/lib/utils';

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

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const contractInfo = await getContractInfo(address);
    const firstTx = await getFirstTransaction(address);

    if (firstTx) {
      contractInfo.creationDate = formatDate(parseInt(firstTx.timeStamp, 10));
    }

    return NextResponse.json(
      { success: true, data: contractInfo },
      { headers: { 'Cache-Control': 'private, max-age=300' } }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contract info' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
