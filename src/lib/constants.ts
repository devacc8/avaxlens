export const SNOWTRACE_API = 'https://api.snowtrace.io/api';
export const ROUTESCAN_API = 'https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api';

export const POPULAR_CONTRACTS = [
  { name: 'Trader Joe', address: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', category: 'DEX' },
  { name: 'Pangolin', address: '0xE54Ca86531e17Ef3616d22Ca28b0D86bC2b4f3dF', category: 'DEX' },
  { name: 'GMX', address: '0x9ab2De34A33f710D1a921aBb06f9093fEFeC4d6b', category: 'Perpetuals' },
  { name: 'Benqi', address: '0x486Af40119B0cf6c91F560d4B0B8f4A3A7C2E5B1', category: 'Lending' },
];

export const CACHE_TTL = {
  ABI: 24 * 60 * 60 * 1000,       // 24 hours
  CONTRACT_INFO: 5 * 60 * 1000,   // 5 minutes
  TRANSACTIONS: 60 * 1000,         // 1 minute
  ANALYTICS: 5 * 60 * 1000,       // 5 minutes
};
