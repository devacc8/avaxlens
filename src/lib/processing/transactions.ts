import type { RawTransaction, ProcessedTransaction } from '@/lib/types';
import { formatAvaxValue } from '@/lib/utils';

export function processRawTransactions(txs: RawTransaction[]): ProcessedTransaction[] {
  return txs.map(tx => ({
    hash: tx.hash,
    functionName: tx.functionName?.split('(')[0] || tx.input?.slice(0, 10) || 'transfer',
    from: tx.from,
    value: formatAvaxValue(tx.value),
    gasUsed: parseInt(tx.gasUsed || '0', 10),
    isError: tx.isError === '1',
    timestamp: parseInt(tx.timeStamp, 10),
  }));
}
