import type { AiAuditData } from '@/lib/types';

const AUDITS: Record<string, AiAuditData> = {
  // Trader Joe — JoeRouter02
  '0x60ae616a2155ee3d9a68541ba4544862310933d4': {
    contractAddress: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    contractName: 'JoeRouter02',
    score: 72,
    grade: 'B+',
    summary: 'JoeRouter02 is a UniswapV2-fork DEX router with generally solid security patterns. Uses SafeMath for overflow protection, but the older Solidity 0.6.12 compiler and lack of reentrancy guards on some swap paths present moderate risks. No critical vulnerabilities found in the router itself, though external pair interactions carry inherent trust assumptions.',
    findings: [
      {
        id: 'joe-1',
        severity: 'warning',
        title: 'No reentrancy guard on swap functions',
        description: 'Functions like swapExactTokensForTokens and swapExactAVAXForTokens make external calls to pair contracts without reentrancy protection. While the UniswapV2 pair design mitigates this through the k-invariant check, a malicious token could potentially exploit callback mechanisms.',
        location: 'JoeRouter02.swapExactTokensForTokens()',
      },
      {
        id: 'joe-2',
        severity: 'warning',
        title: 'Deadline parameter can be set to far future',
        description: 'All swap and liquidity functions accept a user-supplied deadline parameter. If users set deadline to type(uint256).max, their transactions become valid indefinitely and could be executed at unfavorable prices during high volatility.',
        location: 'JoeRouter02._swap()',
      },
      {
        id: 'joe-3',
        severity: 'warning',
        title: 'Uses Solidity 0.6.12 — no built-in overflow protection',
        description: 'The contract relies on SafeMathJoe library for arithmetic overflow protection. While SafeMath is correctly applied to most operations, the older compiler version means any missed usage would silently overflow. Solidity 0.8+ provides this natively.',
        location: 'SafeMathJoe library',
      },
      {
        id: 'joe-4',
        severity: 'info',
        title: 'Hardcoded init code hash for pair address calculation',
        description: 'JoeLibrary.pairFor() uses a hardcoded CREATE2 init code hash. If the pair factory is ever upgraded with a different bytecode, this hash would need to be updated. This is standard UniswapV2 practice and not a vulnerability.',
        location: 'JoeLibrary.pairFor()',
      },
      {
        id: 'joe-5',
        severity: 'info',
        title: 'AVAX transfer uses low-level call',
        description: 'The router sends AVAX using TransferHelper.safeTransferAVAX which uses a low-level .call{value}. This is the recommended pattern as it forwards sufficient gas, but callers should be aware of potential reentrancy via receive() fallback.',
        location: 'TransferHelper.safeTransferAVAX()',
      },
      {
        id: 'joe-6',
        severity: 'warning',
        title: 'No slippage protection on internal _swap helper',
        description: 'The internal _swap function does not enforce slippage limits — it relies on the outer functions (swapExactTokensForTokens, etc.) to check amountOutMin. If a new external function is added without this check, users could lose funds to MEV.',
        location: 'JoeRouter02._swap()',
      },
      {
        id: 'joe-7',
        severity: 'info',
        title: 'Well-structured SafeMath usage throughout',
        description: 'All arithmetic operations in the router and library use SafeMathJoe (add, sub, mul) consistently. No instances of unchecked arithmetic were found.',
      },
    ],
    recommendations: [
      'Consider migrating to Solidity 0.8+ for native overflow protection and modern language features',
      'Add ReentrancyGuard (OpenZeppelin) to swap and liquidity functions as defense-in-depth',
      'Document the trust assumptions around pair contract callbacks for integrators',
      'Recommend users set reasonable deadline values (e.g., block.timestamp + 300)',
      'Monitor for flash loan attack vectors through pair callback mechanisms',
    ],
    auditedAt: '2026-02-26',
    compilerVersion: '0.6.12',
  },

  // Trader Joe V2 — LBRouter
  '0xb4315e873dbcf96ffd0acd8ea43f689d8c20fb30': {
    contractAddress: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
    contractName: 'LBRouter',
    score: 85,
    grade: 'A',
    summary: 'LBRouter is the Liquidity Book V2 router implementing a novel concentrated liquidity model with discrete bins. Built on Solidity 0.8.10 with extensive use of custom math libraries (BitMath, Math512Bits). The architecture is well-designed with proper access controls and error handling. Main risks come from the complexity of the bin-based pricing model.',
    findings: [
      {
        id: 'lbr-1',
        severity: 'warning',
        title: 'Complex math libraries increase audit surface',
        description: 'The Liquidity Book uses custom 512-bit math operations (Math512Bits, Math128x128) for precision pricing across bins. While these are well-tested, any subtle rounding error could cause inconsistent pricing or stuck liquidity positions.',
        location: 'Math512Bits, Math128x128 libraries',
      },
      {
        id: 'lbr-2',
        severity: 'info',
        title: 'Solidity 0.8.10 with native overflow protection',
        description: 'Contract uses Solidity 0.8.10 which provides built-in checked arithmetic. Unchecked blocks are used intentionally in performance-critical math operations with documented safety invariants.',
        location: 'LBRouter contract',
      },
      {
        id: 'lbr-3',
        severity: 'warning',
        title: 'Token approvals in _addLiquidity not checked for return value',
        description: 'Some ERC20 tokens do not return a boolean from approve/transfer. The router uses IERC20 interface which expects a return value. Interactions with non-standard tokens (like USDT) could silently fail.',
        location: 'LBRouter._addLiquidity()',
      },
      {
        id: 'lbr-4',
        severity: 'info',
        title: 'Comprehensive error handling with custom errors',
        description: 'The contract uses Solidity custom errors (e.g., LBRouter__WrongAmounts, LBRouter__IdOverflows) which are gas-efficient and provide clear revert reasons for debugging.',
        location: 'ILBRouter interface',
      },
      {
        id: 'lbr-5',
        severity: 'warning',
        title: 'Flash loan recipient trust assumption',
        description: 'The flashLoan function sends tokens to a callback recipient that must implement ILBFlashLoanCallback. A malicious callback could attempt reentrancy, though the LBPair enforces repayment with fees in the same transaction.',
        location: 'LBRouter.flashLoan()',
      },
      {
        id: 'lbr-6',
        severity: 'info',
        title: 'Immutable factory and WAVAX references',
        description: 'The factory and WAVAX addresses are set in the constructor as immutable variables. This prevents upgrade attacks but means the router must be redeployed if the factory is upgraded.',
      },
      {
        id: 'lbr-7',
        severity: 'info',
        title: 'OpenZeppelin IERC20 interface used correctly',
        description: 'Standard OpenZeppelin interfaces are used for ERC20 interactions, following well-audited patterns.',
      },
    ],
    recommendations: [
      'Add SafeERC20 (forceApprove/safeTransfer) wrappers for all token interactions to handle non-standard ERC20 tokens',
      'Consider formal verification of the 512-bit math libraries given their critical role in pricing',
      'Add reentrancy guards on flash loan callback paths as defense-in-depth',
      'Document bin pricing edge cases for integrators building on top of the router',
    ],
    auditedAt: '2026-02-26',
    compilerVersion: '0.8.10',
  },

  // Aave V3 — Proxy
  '0x794a61358d6845594f94dc1db02a252b5b4814ad': {
    contractAddress: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    contractName: 'Aave V3 Pool (Proxy)',
    score: 92,
    grade: 'A+',
    summary: 'The Aave V3 Pool on Avalanche uses an InitializableImmutableAdminUpgradeabilityProxy pattern. This is a well-audited, battle-tested proxy contract from the Aave protocol — one of the largest DeFi protocols with over $10B TVL across chains. The proxy itself is minimal and delegates all logic to the implementation contract controlled by Aave governance.',
    findings: [
      {
        id: 'aave-1',
        severity: 'info',
        title: 'Immutable admin prevents unauthorized upgrades',
        description: 'The proxy admin address is set at construction time and stored as an immutable variable. Only this admin (Aave governance) can upgrade the implementation. This is a strong security guarantee.',
        location: 'BaseImmutableAdminUpgradeabilityProxy',
      },
      {
        id: 'aave-2',
        severity: 'info',
        title: 'Transparent proxy pattern — admin cannot call implementation',
        description: 'The proxy uses OpenZeppelin transparent proxy pattern: when the admin calls the proxy, it routes to admin functions (upgrade). When anyone else calls, it delegates to the implementation. This prevents function selector clashes.',
        location: 'BaseImmutableAdminUpgradeabilityProxy._willFallback()',
      },
      {
        id: 'aave-3',
        severity: 'warning',
        title: 'Implementation contract must be carefully validated on upgrades',
        description: 'Since the proxy delegates all calls, any vulnerability in the implementation contract directly affects all user funds. Aave uses extensive governance timelock and audit processes for upgrades, but this remains the primary attack surface.',
        location: 'Proxy.delegatecall()',
      },
      {
        id: 'aave-4',
        severity: 'info',
        title: 'Multiple independent audits completed',
        description: 'Aave V3 has been audited by Trail of Bits, ABDK, Peckshield, OpenZeppelin, SigmaPrime, and others. The protocol has a $10M+ bug bounty program on Immunefi.',
      },
      {
        id: 'aave-5',
        severity: 'info',
        title: 'Storage gap pattern prevents collisions',
        description: 'Aave V3 uses storage gaps in base contracts to reserve storage slots for future upgrades, preventing storage collision vulnerabilities.',
      },
    ],
    recommendations: [
      'Verify the current implementation address through Aave governance for transparency',
      'Monitor Aave governance proposals for implementation upgrades that may affect this proxy',
      'Consider interacting through Aave\'s official SDK rather than direct proxy calls for better upgrade compatibility',
    ],
    auditedAt: '2026-02-26',
    compilerVersion: '0.8.10',
  },

  // WAVAX
  '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7': {
    contractAddress: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    contractName: 'WAVAX',
    score: 68,
    grade: 'B',
    summary: 'WAVAX is the canonical Wrapped AVAX contract on Avalanche C-Chain, forked from WETH9. It is a simple, well-understood contract but uses Solidity 0.5.17 which lacks modern safety features. The contract has no access controls (by design) and handles native AVAX deposits/withdrawals. The pre-0.8 compiler means arithmetic is unchecked, and the withdraw function has a known reentrancy pattern.',
    findings: [
      {
        id: 'wavax-1',
        severity: 'critical',
        title: 'Reentrancy risk in withdraw() — state updated before transfer',
        description: 'The withdraw() function updates balanceOf[msg.sender] before calling msg.sender.transfer(wad). While .transfer() forwards only 2300 gas (limiting reentrancy), EIP-1884 gas repricing and future EVM changes could make this exploitable. The checks-effects-interactions pattern is not fully followed.',
        location: 'WAVAX.withdraw()',
      },
      {
        id: 'wavax-2',
        severity: 'warning',
        title: 'No overflow protection — Solidity 0.5.17',
        description: 'The contract uses raw += and -= operators without SafeMath. On Solidity 0.5.17 these operations can silently overflow/underflow. While the balanceOf mapping uses uint256 (making overflow practically impossible for AVAX supply), the pattern is risky.',
        location: 'WAVAX.deposit(), WAVAX.transferFrom()',
      },
      {
        id: 'wavax-3',
        severity: 'warning',
        title: 'Unlimited allowance check uses uint(-1) magic value',
        description: 'The transferFrom function treats allowance == uint(-1) as "unlimited approval" and skips the allowance deduction. While this is standard WETH behavior, it means any address with max approval retains it permanently, even if the owner wants to revoke to a specific amount.',
        location: 'WAVAX.transferFrom()',
      },
      {
        id: 'wavax-4',
        severity: 'info',
        title: 'Fallback function auto-deposits AVAX',
        description: 'The unnamed fallback function calls deposit(), meaning any AVAX sent directly to the contract address is automatically wrapped. This is expected behavior but could confuse users who accidentally send AVAX.',
        location: 'WAVAX.fallback()',
      },
      {
        id: 'wavax-5',
        severity: 'info',
        title: 'totalSupply() returns contract balance — fully backed',
        description: 'The totalSupply function returns address(this).balance, meaning WAVAX is always 1:1 backed by real AVAX. There is no mint function — tokens can only be created through deposit().',
      },
      {
        id: 'wavax-6',
        severity: 'info',
        title: 'No owner or admin functions — fully permissionless',
        description: 'The contract has no owner, no pause mechanism, and no upgrade capability. Once deployed, it cannot be modified. This is a strong trustlessness guarantee.',
      },
    ],
    recommendations: [
      'For new deployments, rewrite using Solidity 0.8+ with native overflow checks',
      'Implement checks-effects-interactions pattern: move msg.sender.transfer() after all state changes',
      'Consider using OpenZeppelin ReentrancyGuard for withdraw() in future versions',
      'Add SafeMath library or migrate to Solidity 0.8+ for arithmetic safety',
      'Note: This is the canonical WAVAX — migration would require ecosystem-wide coordination',
    ],
    auditedAt: '2026-02-26',
    compilerVersion: '0.5.17',
  },
};

export function getAuditData(address: string): AiAuditData | undefined {
  return AUDITS[address.toLowerCase()];
}

export const AUDITED_CONTRACTS = Object.values(AUDITS).map((a) => ({
  address: a.contractAddress,
  name: a.contractName,
}));
