// Raw API response types
export interface SnowtraceContractInfo {
  ContractName: string;
  CompilerVersion: string;
  ABI: string;
  SourceCode: string;
  ConstructorArguments: string;
  OptimizationUsed: string;
  Runs: string;
  EVMVersion: string;
  Library: string;
  LicenseType: string;
  Proxy: string;
  Implementation: string;
  SwarmSource: string;
}

export interface RawTransaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  functionName: string;
  methodId: string;
}

// Processed types
export interface ContractInfo {
  address: string;
  name: string;
  verified: boolean;
  creationDate: string | null;
  abi: unknown[] | null;
  compiler: string | null;
}

export interface ContractAnalytics {
  totalTransactions: number;
  successCount: number;
  failCount: number;
  successRate: number;
  uniqueCallers: number;
  avgGasUsed: number;
  volumeByDay: DailyVolume[];
  successFailByDay: DailySuccessFail[];
  functionBreakdown: FunctionStats[];
  errorBreakdown: ErrorStats[];
  periodDays: number;
}

export interface DailyVolume {
  date: string;
  fullDate: string;
  count: number;
}

export interface DailySuccessFail {
  date: string;
  success: number;
  fail: number;
}

export interface FunctionStats {
  name: string;
  selector: string;
  calls: number;
  percentage: number;
  successRate: number;
  avgGas: number;
}

export interface ErrorStats {
  error: string;
  count: number;
  lastSeen: string;
  functionName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export type Period = '7d' | '30d';
export type TabId = 'overview' | 'transactions' | 'functions' | 'errors' | 'callers';
