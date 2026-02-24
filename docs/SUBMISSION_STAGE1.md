# Build Games 2026 — Stage 1: Idea Submission

> Ready-to-paste answers for the submission form at build.avax.network

---

## PROJECT OVERVIEW

**Project Name:**
AvaxLens

**One-sentence description (max 280 chars):**
Paste any Avalanche C-Chain contract address — get instant visual analytics: transaction volume, success rates, ABI-decoded function breakdown, gas costs, and error logs. Free, no signup.

**Project Category:**
Infrastructure

**Is this an existing project?**
No — new idea

---

## PROBLEM IDENTIFICATION

**What problem are you addressing?**

Avalanche developers have no free, instant way to understand what's happening with their smart contracts after deployment. They deploy and fly blind.

The only free option — Snowtrace — shows raw transaction lists. No charts, no aggregation, no patterns. To get visual analytics, developers must pay $39–$49/month (Dune or Tenderly), learn SQL, or configure complex project setups.

With 80+ L1s launching after Avalanche9000, every team deploying contracts needs analytics. Right now there's nothing free, instant, and visual for Avalanche.

**Who experiences this problem?**

Primary: Avalanche smart contract developers and protocol teams (B2Dev). They deploy contracts on C-Chain and need to monitor activity, debug failures, and understand usage patterns — but don't have budget for paid tools or time to write SQL.

Secondary: DeFi researchers and community analysts who want to quickly check protocol health or investigate on-chain anomalies without technical setup.

Both share the same frustration: getting answers about a contract should take seconds, not hours.

**How is the problem currently solved (if at all)?**

Three alternatives exist, all insufficient:

1. **Snowtrace** — Free, but raw transaction lists only. No charts, no aggregation, no function breakdown. Developers manually scroll through thousands of transactions.

2. **Tenderly** — $49/month (Team). Requires project setup, account creation. Not Avalanche-native. Designed for transaction debugging, not contract monitoring.

3. **Dune Analytics** — $39/month (Team). Requires SQL knowledge. 500 queries/month limit. Most developers don't want to write SQL for basic metrics.

Gap: no tool offers free, instant, visual analytics for Avalanche contracts.

**What is your proposed solution?**

AvaxLens — paste any C-Chain contract address, get instant visual analytics.

- **Zero barrier** — no signup, no API key, no SQL. Just paste an address.
- **Instant insights** — transaction volume charts, success/fail trends, ABI-decoded function breakdown with gas costs, error logs with decoded revert reasons. Server-side computed, delivered in under 10 seconds.
- **Free forever** — core analytics without paywalls.
- **Avalanche-native** — built for C-Chain, expanding to L1s and Subnets.

**Next phase: AI-powered security and monitoring.** We will analyze ABI patterns and transaction behavior to detect common vulnerability patterns — reentrancy risks, abnormal gas spikes, suspicious call sequences. Each contract gets an instant security score (A–F rating) with specific findings. Combined with anomaly alerts to Telegram and Discord, this turns AvaxLens from an analytics dashboard into an always-on monitoring tool that protects contracts proactively.

**The product is already live and working at avaxlens.vercel.app** — with real data from Routescan and Snowtrace APIs. Most teams at Stage 1 have an idea. We have a deployed product.

**What triggers an on-chain transaction in your project?**

AvaxLens is a read-only analytics layer over the Avalanche C-Chain. It reads on-chain data through Routescan and Snowtrace APIs — every analytics result is derived from real blockchain transactions (contract calls, token transfers, reverts).

Currently the product does not write to the blockchain. Future phases will introduce on-chain interactions: publishing AI-generated security scores as attestations, and enabling users to register contracts for automated monitoring via a registry smart contract.

---

## VIDEO & PARTNERSHIPS

**2-Minute Pitch Video:**
*(link TBD — see SCREEN_RECORDING_PLAN.md for recording script)*

**Integration Partners:**
- Routescan (transaction data API for C-Chain)
- Snowtrace (contract ABI, verification status, source code)
- Avalanche C-Chain RPC (direct node queries for future features)

---

## TEAM

| Name | Email | Role | Status |
|------|-------|------|--------|
| Alex Vega | devacc8@pm.me | Tech Lead | — |
| Marck | mark.truvalie@gmail.com | Lead | Confirmed |
