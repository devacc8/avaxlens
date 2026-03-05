import type { ContractAnalytics, TabId } from '@/lib/types';

function escapeCsv(value: string | number): string {
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function toCsv(headers: string[], rows: (string | number)[][]): string {
  const lines = [headers.map(escapeCsv).join(',')];
  for (const row of rows) {
    lines.push(row.map(escapeCsv).join(','));
  }
  return lines.join('\n');
}

export function generateCsv(analytics: ContractAnalytics, tab: TabId): string | null {
  switch (tab) {
    case 'overview': {
      const headers = ['Date', 'Transactions', 'Success', 'Fail'];
      const rows = analytics.volumeByDay.map((day, i) => {
        const sf = analytics.successFailByDay[i];
        return [day.fullDate, day.count, sf?.success ?? 0, sf?.fail ?? 0];
      });
      return toCsv(headers, rows);
    }

    case 'functions': {
      const headers = ['Function', 'Selector', 'Calls', 'Percentage', 'Success Rate', 'Avg Gas', 'Total Gas', 'Min Gas', 'Max Gas'];
      const rows = analytics.functionBreakdown.map(f => [
        f.name, f.selector, f.calls, f.percentage.toFixed(1) + '%',
        f.successRate.toFixed(1) + '%', f.avgGas, f.totalGas, f.minGas, f.maxGas,
      ]);
      return toCsv(headers, rows);
    }

    case 'errors': {
      const headers = ['Error', 'Count', 'Last Seen', 'Function'];
      const rows = analytics.errorBreakdown.map(e => [
        e.error, e.count, e.lastSeen, e.functionName,
      ]);
      return toCsv(headers, rows);
    }

    case 'callers': {
      const headers = ['Address', 'Transactions', 'Percentage', 'Success Rate', 'Total Gas', 'Last Active'];
      const rows = analytics.callerBreakdown.map(c => [
        c.address, c.txCount, c.percentage.toFixed(1) + '%',
        c.successRate.toFixed(1) + '%', c.totalGasUsed, c.lastActive,
      ]);
      return toCsv(headers, rows);
    }

    default:
      return null;
  }
}

export function downloadCsv(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
