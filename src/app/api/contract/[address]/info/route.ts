import { NextRequest, NextResponse } from 'next/server';
import { isValidAddress } from '@/lib/validation';
import { getContractInfo } from '@/lib/apis/snowtrace';
import { getFirstTransaction } from '@/lib/apis/routescan';
import { formatDate } from '@/lib/utils';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params;

  if (!isValidAddress(address)) {
    return NextResponse.json(
      { success: false, error: 'Invalid Avalanche address' },
      { status: 400 }
    );
  }

  try {
    const contractInfo = await getContractInfo(address);
    const firstTx = await getFirstTransaction(address);

    if (firstTx) {
      contractInfo.creationDate = formatDate(parseInt(firstTx.timeStamp));
    }

    return NextResponse.json({ success: true, data: contractInfo });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contract info' },
      { status: 500 }
    );
  }
}
