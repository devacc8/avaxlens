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
  callerBreakdown: CallerStats[];
  periodDays: number;
  dataRange: { from: string; to: string } | null;
  rawTxCount: number;
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
  totalGas: number;
  minGas: number;
  maxGas: number;
}

export interface ErrorStats {
  error: string;
  count: number;
  lastSeen: string;
  functionName: string;
}

export interface CallerStats {
  address: string;
  txCount: number;
  percentage: number;
  successRate: number;
  totalGasUsed: number;
  lastActive: string;
}

export interface ProcessedTransaction {
  hash: string;
  functionName: string;
  from: string;
  value: string;
  gasUsed: number;
  isError: boolean;
  timestamp: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export type Period = '7d' | '30d';
export type TabId = 'overview' | 'transactions' | 'functions' | 'errors' | 'callers' | 'audit';

// AI Audit types
export type AuditSeverity = 'critical' | 'warning' | 'info';

export interface AiAuditFinding {
  id: string;
  severity: AuditSeverity;
  title: string;
  description: string;
  location?: string;
}

export interface AiAuditData {
  contractAddress: string;
  contractName: string;
  score: number;
  grade: string;
  summary: string;
  findings: AiAuditFinding[];
  recommendations: string[];
  auditedAt: string;
  compilerVersion: string;
}
