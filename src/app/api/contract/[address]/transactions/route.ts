import { NextRequest, NextResponse } from 'next/server';
import { isValidAddress } from '@/lib/validation';
import { getTransactions } from '@/lib/apis/routescan';

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
  const page = parseInt(searchParams.get('page') || '1');
  const offset = parseInt(searchParams.get('offset') || '10000');
  const sort = searchParams.get('sort') || 'desc';

  try {
    const transactions = await getTransactions(address, page, offset, sort);
    return NextResponse.json({
      success: true,
      data: { transactions, total: transactions.length },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}
