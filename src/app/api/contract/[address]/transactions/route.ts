import { NextRequest, NextResponse } from 'next/server';
import { isValidAddress } from '@/lib/validation';
import { isRateLimited } from '@/lib/rate-limit';
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

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1') || 1);
  const offset = Math.min(10000, Math.max(1, parseInt(searchParams.get('offset') || '10000') || 10000));
  const sort = searchParams.get('sort') === 'asc' ? 'asc' : 'desc';

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
