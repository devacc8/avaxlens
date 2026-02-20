# AvaxLens — Build Games 2026 Proposal

> Smart contract analytics and monitoring for Avalanche developers. Free, fast, Avalanche-native.

## Overview

AvaxLens is a free browser-based tool for developers building on Avalanche. Enter a smart contract address — get instant analytics: transaction volume, success/fail rates, gas consumption, top functions, error logs, and user activity. No signup, no API key, no backend dependency.

Think of it as "Tenderly for Avalanche" — but free, focused, and purpose-built for the Avalanche ecosystem.

**Tagline:** "Understand your contract in 10 seconds."

## Why This Fits Build Games

- **Direct ecosystem value:** Every Avalanche developer benefits from better contract visibility. Judges (who are developers) will immediately understand the value.
- **Long-term intent:** Developer tooling is infrastructure — it grows with the ecosystem, not against it.
- **Practical execution:** Clean, focused scope. No smart contracts with user funds, minimal security risk.
- **Fills a real gap:** Tenderly is expensive ($50+/mo for teams) and not Avalanche-optimized. Avalanche Explorer is basic — no per-contract analytics.

## The Problem

Avalanche developers today have limited options for contract monitoring:

| Tool | Avalanche Support | Price | Contract Analytics |
|------|:-----------------:|:-----:|:-----------------:|
| Avalanche Explorer | Native | Free | Basic (tx list only) |
| Tenderly | Multi-chain | $50+/mo | Deep but expensive |
| Forta | Multi-chain | Complex setup | Alerts only, no dashboard |
| Dune Analytics | Multi-chain | Free tier | Requires SQL, not real-time |
| **AvaxLens** | **Native** | **Free** | **Instant, visual, per-contract** |

**The gap:** No free, Avalanche-native tool gives developers instant per-contract analytics without writing SQL or paying for SaaS.

## Core Features

### 1. Contract Overview (the "10-second view")

Enter any C-Chain contract address → instant dashboard:

```
┌─────────────────────────────────────────────────────┐
│  Contract: 0xABC...DEF                              │
│  Name: MyDeFiProtocol (verified on Snowtrace)       │
│  Created: 2026-01-15  │  Total Txs: 12,847         │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Success  │ │  Failed  │ │ Avg Gas  │            │
│  │  94.2%   │ │   5.8%   │ │  142,300 │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                     │
│  Transaction Volume (30d)                           │
│  ██████████████████████████████░░░░░░  ← chart      │
│                                                     │
│  Top Functions          │  Recent Errors            │
│  ├─ swap()      4,201   │  ├─ InsufficientBalance   │
│  ├─ addLiq()    2,100   │  ├─ SlippageTooHigh       │
│  ├─ removeLiq() 1,803   │  └─ Expired               │
│  └─ claim()       890   │                           │
└─────────────────────────────────────────────────────┘
```

### 2. Transaction Analytics

- **Volume chart:** 7d / 30d / 90d transaction count over time
- **Success vs. Failure:** stacked area chart showing success rate trends
- **Gas usage:** average, median, P95 gas per transaction over time
- **Unique callers:** how many distinct addresses interact with the contract

### 3. Function Breakdown

- **Top functions by call count** — which functions are used most
- **Top functions by gas** — which functions are most expensive
- **Function success rate** — which functions fail most often
- **Per-function gas trend** — is a function getting more expensive over time

### 4. Error Analysis

- **Decoded revert reasons** — human-readable error messages, not raw hex
- **Error frequency** — which errors happen most
- **Error timeline** — when do errors spike (correlate with deployments, config changes)
- **Error by function** — which function produces which errors

### 5. Caller Analytics

- **Top callers** — which addresses interact most (bots? users? other contracts?)
- **New vs. returning callers** — user growth indicator
- **Caller distribution** — power law? broad base? single whale?

### 6. Alerts (Post-MVP)

- **Revert rate spike** — contract error rate exceeds threshold
- **Gas anomaly** — unusual gas consumption detected
- **Large transaction** — high-value interaction detected
- **Delivery:** Telegram bot, Discord webhook, email

## Tech Stack

```
┌─────────────────────────────────────────┐
│  Browser (client-side)                  │
│                                         │
│  Next.js 15       — app framework      │
│  Tailwind CSS     — styling             │
│  Tremor / Recharts — charts & graphs   │
│  wagmi + viem     — wallet + RPC calls  │
│                                         │
├─────────────────────────────────────────┤
│  Data Sources (no backend needed)       │
│                                         │
│  Avalanche C-Chain RPC  — tx data       │
│  Routescan API          — indexed txs   │
│  Snowtrace API          — contract ABI  │
│  CoinGecko API          — AVAX price    │
│                                         │
├─────────────────────────────────────────┤
│  Serverless (Vercel) — optional         │
│                                         │
│  API Routes    — caching proxy for RPCs │
│  Edge Config   — rate limit management  │
│                                         │
└─────────────────────────────────────────┘
```

### Why No Backend

The key architectural decision: **all data comes from public APIs, fetched client-side.**

- Avalanche RPC — free, public endpoint (`api.avax.network/ext/bc/C/rpc`)
- Routescan API — free tier, indexed Avalanche transactions
- Snowtrace API — free tier, verified contract ABIs

The browser fetches data directly. Vercel API routes act as a caching layer to avoid rate limits — not as a traditional backend. No database needed for MVP.

### When a Backend Becomes Necessary

- **Historical aggregation** — if we want 90d+ trend data, we need to pre-compute and store it
- **Alerts** — need a cron job to poll contracts and trigger notifications
- **Multi-contract dashboards** — users saving multiple contracts to a persistent dashboard

These are post-MVP features. For the competition, client-side + caching is sufficient.

## Data Architecture

### How We Get Contract Data

```
User enters address
  → Fetch ABI from Snowtrace (if verified)
  → Fetch recent transactions from Routescan API
  → Decode function calls and revert reasons using ABI
  → Aggregate: count by function, success/fail, gas stats
  → Render charts
```

### Rate Limits & Caching

| API | Free Tier Limit | Our Strategy |
|-----|----------------|--------------|
| Avalanche RPC | ~10 req/sec | Batch calls, cache 60s |
| Routescan | 5 req/sec | Cache 5 min per contract |
| Snowtrace | 5 req/sec | Cache ABI permanently (immutable) |
| CoinGecko | 10-30 req/min | Cache 5 min |

Vercel Edge Config or simple in-memory cache handles this. No Redis needed.

### Data Freshness

- **Recent transactions:** updated every 60 seconds
- **Aggregated stats:** computed on page load from cached tx data
- **ABI:** cached permanently (contracts don't change ABIs)

## Infrastructure Costs

| Component | MVP (competition) | Production |
|-----------|:-----------------:|:----------:|
| Hosting (Vercel) | $0 | $20/mo |
| Database | Not needed | Supabase $0-25/mo (for alerts) |
| APIs | All free tier | $0-50/mo (if heavy usage) |
| Domain | $10/year | $10/year |
| **Total** | **$0** | **$20-75/mo** |

## Build Games Timeline

### Week 1 — Video Pitch + Core UI

**Deliverable:** 1-minute video pitch + contract overview page

- [ ] Project setup: Next.js 15 + Tailwind + Tremor
- [ ] Contract address input + validation
- [ ] Fetch transactions from Routescan API
- [ ] Basic contract overview: tx count, success rate, creation date
- [ ] 1-minute video: problem, solution, why Avalanche, demo of overview

### Week 2 — Analytics Pages

- [ ] Transaction volume chart (7d/30d)
- [ ] Function breakdown table (top functions by calls + gas)
- [ ] Error log with decoded revert reasons
- [ ] Gas usage chart over time
- [ ] ABI decoding integration (Snowtrace)

### Week 3 — Working Prototype

**Deliverable:** Full working demo + code walkthrough

- [ ] Caller analytics (top callers, new vs returning)
- [ ] Contract comparison (side-by-side two contracts)
- [ ] Responsive design (mobile + desktop)
- [ ] Loading states, error handling, empty states
- [ ] Deploy to Vercel with custom domain
- [ ] Test with 10+ real Avalanche contracts

### Week 4 — Polish + Unique Features

- [ ] "Popular contracts" landing page (pre-loaded top Avalanche DeFi/NFT contracts)
- [ ] Share links (share contract dashboard via URL)
- [ ] Export data as CSV
- [ ] Dark mode
- [ ] Performance optimization (lazy loading, skeleton screens)

### Week 5 — Go-to-Market

**Deliverable:** GTM plan + progress update

- [ ] GTM plan: developer communities (Avalanche Discord, Twitter, dev forums)
- [ ] SEO: landing pages for top Avalanche contracts
- [ ] Documentation: how to use, API limitations, FAQ
- [ ] Collect feedback from 5+ Avalanche developers
- [ ] Iterate based on feedback

### Week 6 — Finals

**Deliverable:** Live demo at finals

- [ ] Final bug fixes and polish
- [ ] Prepare demo: show real contracts, explain insights discovered
- [ ] Demo script: enter Trader Joe contract → show analytics → explain value
- [ ] Backup: recorded demo video

## Post-Competition Roadmap

### Phase 1: Alerts & Persistence (Month 1-2)
- User accounts (wallet-based, no email)
- Save favorite contracts to dashboard
- Alert system: Telegram/Discord notifications on anomalies
- Historical data storage (Supabase)

### Phase 2: Multi-Chain (Month 2-3)
- Add Subnet/L1 support (contracts on Beam, DFK, etc.)
- Cross-chain contract comparison
- Subnet health metrics (bridge to Subnet Analytics product)

### Phase 3: Advanced Analytics (Month 3-6)
- Gas optimization suggestions ("this function uses 40% more gas than similar patterns")
- Contract interaction graphs (which contracts call which)
- MEV detection on Avalanche
- Custom alerts with complex conditions

### Phase 4: Pro Tier (Month 4-6)
- Freemium model launch
- Free: 3 contracts, 30d history, basic alerts
- Pro ($10-20/mo): unlimited contracts, 90d+ history, advanced alerts, API access, CSV export
- Team plan ($50/mo): shared dashboards, role-based access

## Revenue Model

| Source | Description | When |
|--------|------------|------|
| Pro subscriptions | $10-20/mo per developer | Month 4+ |
| Team plans | $50/mo per team | Month 6+ |
| API access | Programmatic data access for bots/dashboards | Month 6+ |
| Grants | Avalanche Foundation / Retro9000 | Ongoing |

**Free tier always available.** The tool should be useful for every Avalanche developer at no cost. Pro tier adds depth, not gates basic functionality.

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| API rate limits | High | Caching layer, multiple API providers, request batching |
| Free APIs shut down | High | Routescan + Snowtrace are ecosystem tools, unlikely to disappear. Fallback: direct RPC parsing |
| "Just use Tenderly" | Medium | We're free, Avalanche-native, zero setup. Different positioning |
| Low adoption | Medium | Target Avalanche Discord, dev communities. Pre-load popular contracts for SEO |
| Scope creep | Medium | Strict MVP: overview + tx chart + function breakdown + errors. Everything else is post-launch |
| Data accuracy | Medium | Cross-validate with Snowtrace. Show data source and freshness timestamp |

## Competitive Analysis

| Tool | Price | Avalanche Focus | Instant per-contract view | No setup |
|------|:-----:|:--------------:|:------------------------:|:--------:|
| Avalanche Explorer | Free | Yes | No (general explorer) | Yes |
| Tenderly | $50+/mo | No (multi-chain) | Yes | No (requires project setup) |
| Dune Analytics | Free tier | No (requires SQL) | No (build dashboards manually) | No |
| Forta | Free tier | No (alerts only) | No | No (complex setup) |
| **AvaxLens** | **Free** | **Yes** | **Yes** | **Yes** |

**Our advantage:** the only tool where an Avalanche developer can paste a contract address and get instant, visual analytics with zero setup, zero cost.

## Pathway to Subnet Analytics

This project is designed to naturally evolve into a broader Avalanche analytics platform:

1. **Build Games** → Ship AvaxLens, prove execution ability
2. **User traction** → Developers use it, Avalanche Foundation notices
3. **Retro9000 grant application** → Propose Subnet Analytics as expansion
4. **Grant funds** → Cover server/DB costs for Subnet indexing
5. **Product suite** → AvaxLens + Subnet Analytics = comprehensive Avalanche analytics platform

AvaxLens is the entry point. Subnet Analytics is the expansion funded by grants and revenue.

## Team

- **Alex Vega** — fullstack developer, Web3 experience (BasePaint NFT marketplace on Base, smart contracts), strong Next.js/React background (VegaForge portfolio), product-minded builder.

## Summary

AvaxLens is the missing developer tool in the Avalanche ecosystem. It costs $0 to build and run, fills a clear gap (no free Avalanche-native contract analytics), and has a straightforward path to revenue through Pro subscriptions. For Build Games, it demonstrates practical execution and direct ecosystem value — every Avalanche developer becomes a potential user from day one.
