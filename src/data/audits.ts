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

  // Benqi — qiAVAX (Lending)
  '0x5c0401e81bc07ca70fad469b451682c0d747ef1c': {
    contractAddress: '0x5C0401e81Bc07Ca70fAD469b451682c0d747Ef1c',
    contractName: 'QiAvax',
    score: 74,
    grade: 'B+',
    summary: 'QiAvax is the Benqi lending market for native AVAX, forked from Compound\'s cToken (CEther). Built on Solidity 0.5.17, it handles AVAX deposits, borrowing, and interest accrual. The Compound architecture is battle-tested but the older compiler lacks native overflow protection. Interest rate calculations and oracle dependencies are the main risk areas.',
    findings: [
      {
        id: 'qi-1',
        severity: 'warning',
        title: 'Solidity 0.5.17 — no built-in overflow protection',
        description: 'The contract uses pre-0.8 Solidity without SafeMath on some internal accounting operations. While the Compound math libraries (Exponential, CarefulMath) handle most arithmetic safely, any missed usage could silently overflow.',
        location: 'QiAvax contract',
      },
      {
        id: 'qi-2',
        severity: 'warning',
        title: 'Oracle dependency for price feeds',
        description: 'QiAvax relies on an external price oracle (Comptroller → PriceOracle) for liquidation calculations. If the oracle returns stale or manipulated prices, it could lead to incorrect liquidations or allow undercollateralized borrows.',
        location: 'Comptroller.getAccountLiquidity()',
      },
      {
        id: 'qi-3',
        severity: 'warning',
        title: 'Reentrancy risk on native AVAX operations',
        description: 'Functions like mint(), repayBorrow(), and liquidateBorrow() handle native AVAX via msg.value. The doTransferOut function uses .call{value} to send AVAX, which forwards all gas and could allow reentrancy through a malicious receive() function.',
        location: 'QiAvax.doTransferOut()',
      },
      {
        id: 'qi-4',
        severity: 'info',
        title: 'Compound-forked architecture — extensively audited upstream',
        description: 'The core cToken logic is forked from Compound Finance, which has been audited by Trail of Bits, OpenZeppelin, and others. Benqi-specific modifications are minimal.',
      },
      {
        id: 'qi-5',
        severity: 'info',
        title: 'Admin-controlled interest rate model',
        description: 'The interest rate model can be changed by the admin (Benqi governance). While this allows flexibility, users should monitor governance proposals that modify rate parameters.',
        location: 'QiToken._setInterestRateModelFresh()',
      },
      {
        id: 'qi-6',
        severity: 'info',
        title: 'Reserve factor limits protocol risk',
        description: 'A portion of interest is held as reserves, providing a buffer against bad debt. The reserve factor is set by governance and cannot exceed the hardcoded maximum.',
      },
    ],
    recommendations: [
      'Monitor oracle price feeds for staleness — implement circuit breakers for extreme price deviations',
      'Consider migrating to Solidity 0.8+ for native overflow protection in future versions',
      'Add reentrancy guards on all native AVAX handling functions as defense-in-depth',
      'Verify that Benqi governance timelock is sufficient to protect against malicious parameter changes',
    ],
    auditedAt: '2026-03-16',
    compilerVersion: '0.5.17',
  },

  // Stargate Finance — Router (Bridge)
  '0x45a01e4e04f14f7a4a6702c74187c5f6222033cd': {
    contractAddress: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    contractName: 'Stargate Router',
    score: 80,
    grade: 'A-',
    summary: 'Stargate Router is the cross-chain bridge router built on LayerZero messaging protocol. It handles token swaps across chains via unified liquidity pools. Built on Solidity 0.7.6 with OpenZeppelin libraries. The architecture is well-structured but the cross-chain messaging dependency and pool trust assumptions introduce complexity.',
    findings: [
      {
        id: 'sg-1',
        severity: 'warning',
        title: 'Cross-chain message trust assumption via LayerZero',
        description: 'All cross-chain operations rely on LayerZero endpoint delivering messages correctly. If the LayerZero oracle or relayer is compromised, it could forge cross-chain messages and drain pools. This is the fundamental trust assumption of the bridge.',
        location: 'Router.swap() → IStargateRouter.lzReceive()',
      },
      {
        id: 'sg-2',
        severity: 'warning',
        title: 'Solidity 0.7.6 — no native overflow protection',
        description: 'The contract uses Solidity 0.7.6 which requires SafeMath for arithmetic safety. While OpenZeppelin SafeMath is used in most places, the older compiler increases the risk of missed checks.',
        location: 'Router contract',
      },
      {
        id: 'sg-3',
        severity: 'warning',
        title: 'Owner can modify pool and bridge configurations',
        description: 'The router owner can add/remove pools, change fee parameters, and update bridge addresses. While necessary for protocol operation, a compromised owner key could redirect funds to malicious pools.',
        location: 'Router.addLiquidity(), Router.setBridgeAndFactory()',
      },
      {
        id: 'sg-4',
        severity: 'info',
        title: 'Delta credit system for liquidity balancing',
        description: 'Stargate uses a delta credit algorithm to keep liquidity balanced across chains. This prevents one chain from being drained while others accumulate excess liquidity.',
      },
      {
        id: 'sg-5',
        severity: 'info',
        title: 'OpenZeppelin Ownable and SafeMath used correctly',
        description: 'Standard OpenZeppelin libraries are used for access control and arithmetic operations, following well-audited patterns.',
      },
      {
        id: 'sg-6',
        severity: 'info',
        title: 'Audited by Quantstamp and Zellic',
        description: 'Stargate V1 has been audited by multiple firms. The protocol has processed billions in cross-chain volume since launch.',
      },
    ],
    recommendations: [
      'Monitor LayerZero oracle and relayer health — implement pause mechanisms for anomalous cross-chain messages',
      'Migrate to Solidity 0.8+ for native overflow protection in future router versions',
      'Implement timelock on owner functions to give users time to react to parameter changes',
      'Verify pool addresses independently before interacting with the router',
    ],
    auditedAt: '2026-03-16',
    compilerVersion: '0.7.6',
  },

  // Platypus Finance — Pool (Stableswap DEX)
  '0x66357dcace80431aee0a7507e2e361b7e2402370': {
    contractAddress: '0x66357dCaCe80431aee0A7507e2E361B7e2402370',
    contractName: 'Platypus Pool (Proxy)',
    score: 70,
    grade: 'B+',
    summary: 'Platypus Finance is a stableswap DEX using a single-sided liquidity model with a novel slippage curve. The main contract is behind a TransparentUpgradeableProxy. Built on Solidity 0.7.6, it features unique AMM math for stable assets. The protocol suffered a $8.5M exploit in Feb 2023 via a flash loan attack on its staking mechanism, though the core pool contract was not directly vulnerable.',
    findings: [
      {
        id: 'plat-1',
        severity: 'critical',
        title: 'Historical exploit — $8.5M flash loan attack (Feb 2023)',
        description: 'Platypus was exploited via a flash loan attack targeting the MasterPlatypus staking contract. The attacker manipulated the borrow function to mint excess PTP tokens. While the core Pool contract was not the vulnerability source, the incident highlights systemic risk across connected contracts.',
        location: 'MasterPlatypusV4 (related contract)',
      },
      {
        id: 'plat-2',
        severity: 'warning',
        title: 'Upgradeable proxy — admin controls implementation',
        description: 'The pool uses TransparentUpgradeableProxy, meaning the admin can change the entire implementation logic. Users must trust the governance process for upgrades. A compromised admin could deploy a malicious implementation.',
        location: 'OptimizedTransparentUpgradeableProxy',
      },
      {
        id: 'plat-3',
        severity: 'warning',
        title: 'Complex AMM math for coverage ratio',
        description: 'Platypus uses a novel slippage function based on coverage ratio (liability vs cash) rather than the traditional x*y=k curve. While innovative, custom AMM math has a larger attack surface than battle-tested formulas.',
        location: 'Pool.swap()',
      },
      {
        id: 'plat-4',
        severity: 'info',
        title: 'Single-sided liquidity reduces impermanent loss',
        description: 'Users deposit single assets and receive LP tokens 1:1. This design eliminates impermanent loss for LPs in the traditional sense, though coverage ratio fluctuations can affect withdrawal amounts.',
      },
      {
        id: 'plat-5',
        severity: 'info',
        title: 'Solidity 0.7.6 with OpenZeppelin libraries',
        description: 'Uses OpenZeppelin SafeMath, IERC20, and proxy patterns. Standard library usage reduces custom code risk.',
      },
    ],
    recommendations: [
      'Verify the current implementation contract through governance — ensure post-exploit patches are deployed',
      'Monitor for flash loan attack patterns targeting connected staking/farming contracts',
      'Consider additional oracle checks for stable asset depegging scenarios',
      'Review coverage ratio limits to prevent extreme withdrawal slippage',
      'Note: Exercise caution due to the Feb 2023 exploit — verify that all vulnerabilities have been patched',
    ],
    auditedAt: '2026-03-16',
    compilerVersion: '0.7.6',
  },

  // WooFi — WooRouterV2 (DEX Aggregator)
  '0xc22fbb3133df781e6c25ea6acebe2d2bb8cea2f9': {
    contractAddress: '0xC22FBb3133dF781E6C25ea6acebe2D2Bb8CeA2f9',
    contractName: 'WooRouterV2',
    score: 82,
    grade: 'A-',
    summary: 'WooRouterV2 is a DEX aggregator that routes trades through WOOFi\'s proprietary market-making pools (sPMM model) and can fallback to external DEXs. Built on Solidity 0.8.14 with modern security patterns including ReentrancyGuard and Ownable. The sPMM (Synthetic Proactive Market Making) model uses off-chain price feeds for tighter spreads.',
    findings: [
      {
        id: 'woo-1',
        severity: 'warning',
        title: 'Off-chain oracle dependency for sPMM pricing',
        description: 'WOOFi uses an off-chain oracle (Wooracle) to feed prices into the sPMM model. If the oracle is compromised or returns stale prices, trades could execute at unfavorable rates. Unlike Chainlink, this is a proprietary oracle controlled by the WOO Network team.',
        location: 'WooPPV2.query() → IWooracle',
      },
      {
        id: 'woo-2',
        severity: 'warning',
        title: 'External DEX fallback introduces composability risk',
        description: 'When the WOOFi pool cannot fill a trade, the router can fallback to external DEXs (e.g., Trader Joe, Pangolin). The swap data for external calls is passed by the caller, which could be manipulated to route through malicious contracts if not properly validated.',
        location: 'WooRouterV2.externalSwap()',
      },
      {
        id: 'woo-3',
        severity: 'info',
        title: 'ReentrancyGuard on all state-changing functions',
        description: 'The contract uses OpenZeppelin ReentrancyGuard (nonReentrant modifier) on swap functions, providing strong protection against reentrancy attacks.',
        location: 'WooRouterV2.swap()',
      },
      {
        id: 'woo-4',
        severity: 'info',
        title: 'Solidity 0.8.14 with native overflow protection',
        description: 'Modern compiler version provides built-in checked arithmetic. No SafeMath library needed.',
      },
      {
        id: 'woo-5',
        severity: 'info',
        title: 'Audited by Zellic and ShieldSec',
        description: 'WOOFi V2 has been audited by multiple security firms. The protocol has a bug bounty program on Immunefi.',
      },
      {
        id: 'woo-6',
        severity: 'warning',
        title: 'Owner can pause and update critical addresses',
        description: 'The contract owner can pause all swaps, change the WooPP (pool) address, and update the fee recipient. While necessary for emergency response, centralized control is a trust assumption.',
        location: 'WooRouterV2.setPool(), Pausable',
      },
    ],
    recommendations: [
      'Verify Wooracle price feeds against Chainlink or other decentralized oracles as a sanity check',
      'Validate external swap calldata on-chain to prevent routing through malicious contracts',
      'Monitor owner key security — consider migrating to a multisig or timelock for admin functions',
      'Check that pause functionality has a reasonable governance process behind it',
    ],
    auditedAt: '2026-03-16',
    compilerVersion: '0.8.14',
  },

  // Pangolin — PangolinRouter
  '0xe54ca86531e17ef3616d22ca28b0d458b6c89106': {
    contractAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    contractName: 'PangolinRouter',
    score: 71,
    grade: 'B+',
    summary: 'PangolinRouter is the original Avalanche-native DEX router, a direct fork of UniswapV2Router02. Built on Solidity 0.6.6, it handles token swaps and liquidity operations through Pangolin pair contracts. As a faithful UniswapV2 fork, it inherits both the well-tested architecture and the limitations of the older codebase.',
    findings: [
      {
        id: 'png-1',
        severity: 'warning',
        title: 'Solidity 0.6.6 — oldest compiler among major AVAX DEXs',
        description: 'The contract uses Solidity 0.6.6, the oldest compiler version among popular Avalanche DEX routers. No native overflow protection — relies entirely on SafeMath library. Multiple known compiler bugs have been fixed in newer versions.',
        location: 'PangolinRouter contract',
      },
      {
        id: 'png-2',
        severity: 'warning',
        title: 'No reentrancy guard on swap and liquidity functions',
        description: 'Like UniswapV2, the router does not use ReentrancyGuard. It relies on the pair contract\'s lock mechanism and the k-invariant check for protection. Interaction with non-standard tokens lacking these safeguards could be risky.',
        location: 'PangolinRouter.swapExactTokensForTokens()',
      },
      {
        id: 'png-3',
        severity: 'warning',
        title: 'Deadline parameter without recommended bounds',
        description: 'All swap and liquidity functions accept a user-supplied deadline. If set to type(uint256).max, transactions remain valid indefinitely and could be executed at unfavorable prices long after submission.',
        location: 'PangolinRouter.ensure() modifier',
      },
      {
        id: 'png-4',
        severity: 'info',
        title: 'Faithful UniswapV2 fork — minimal custom code',
        description: 'PangolinRouter is a near-exact fork of UniswapV2Router02 with WAVAX substituted for WETH. The minimal modifications reduce the risk of new bugs being introduced.',
      },
      {
        id: 'png-5',
        severity: 'info',
        title: 'Immutable factory and WAVAX addresses',
        description: 'Factory and WAVAX addresses are set in the constructor and cannot be changed, preventing upgrade-related attacks.',
        location: 'PangolinRouter.constructor()',
      },
      {
        id: 'png-6',
        severity: 'info',
        title: 'SafeMath used consistently throughout',
        description: 'All arithmetic operations use SafeMath (add, sub, mul) from the PangolinLibrary. No unchecked arithmetic was found.',
        location: 'PangolinLibrary',
      },
    ],
    recommendations: [
      'Migrate to Solidity 0.8+ in the next router version for native overflow protection',
      'Add ReentrancyGuard on all external-facing swap and liquidity functions',
      'Consider enforcing a maximum deadline (e.g., block.timestamp + 1800) at the router level',
      'Document which token standards are safe to trade through the router (standard ERC20 only)',
      'Pangolin V2 or V3 should address these legacy patterns from the UniswapV2 fork',
    ],
    auditedAt: '2026-03-16',
    compilerVersion: '0.6.6',
  },
};

export function getAuditData(address: string): AiAuditData | undefined {
  return AUDITS[address.toLowerCase()];
}

const AUDIT_CATEGORIES: Record<string, string> = {
  'JoeRouter02': 'DEX',
  'LBRouter': 'DEX',
  'Aave V3 Pool (Proxy)': 'Lending',
  'WAVAX': 'Token',
  'QiAvax': 'Lending',
  'Stargate Router': 'Bridge',
  'Platypus Pool (Proxy)': 'DEX',
  'WooRouterV2': 'DEX',
  'PangolinRouter': 'DEX',
};

export const AUDITED_CONTRACTS = Object.values(AUDITS).map((a) => ({
  address: a.contractAddress,
  name: a.contractName,
  category: AUDIT_CATEGORIES[a.contractName] || 'Other',
  grade: a.grade,
}));
