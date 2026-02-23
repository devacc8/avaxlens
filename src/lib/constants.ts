export const SNOWTRACE_API = 'https://api.snowtrace.io/api';
export const ROUTESCAN_API = 'https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api';

export const POPULAR_CONTRACTS = [
  { name: 'Trader Joe', address: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', category: 'DEX' },
  { name: 'Trader Joe V2', address: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30', category: 'DEX' },
  { name: 'Aave V3', address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD', category: 'Lending' },
  { name: 'WAVAX', address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', category: 'Token' },
];

export const CACHE_TTL = {
  ABI: 24 * 60 * 60 * 1000,       // 24 hours
  CONTRACT_INFO: 5 * 60 * 1000,   // 5 minutes
  TRANSACTIONS: 60 * 1000,         // 1 minute
  ANALYTICS: 5 * 60 * 1000,       // 5 minutes
};
