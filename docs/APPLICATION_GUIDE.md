# AvaxLens — Build Games Application Guide

> Ready-to-use answers for the Build Games 2026 application form.
> Full project details: [02_Dev_Dashboard.md](02_Dev_Dashboard.md)

---

## Page 1: Vibe Check

**"Are you ready to win?"**
> Yes

**"Prior support from the Avalanche Foundation"**
> No / None

---

## Page 2: Your Info

**Select your role:**
> Fullstack Developer (or Software Engineer)

**Select your status:**
> Building (if options are Idea/Building/Launched)
> Solo builder (if asking about team status)

---

## Page 3: Project Details

**Project name:**
> AvaxLens

(Alternative names if taken: ChainPulse, ContractView, AvalancheScope)

**A brief description of what you're building:**
> Free, instant smart contract analytics for Avalanche developers. Paste any C-Chain contract address — get transaction volume, success/fail rates, gas usage, function breakdown, and decoded error logs. No signup, no API key, no cost. Built with Next.js, powered by public Avalanche APIs. Think "Tenderly for Avalanche" — but free and zero-setup.

**Select area of focus:**
> Developer Tool

("anything that would be purchased and used by a developer/tech organization")

---

## Page 4: Tell Us About Yourself

**About you / Why you're a good fit:**

> I'm a fullstack developer with production Web3 experience. I've built and shipped dApps with smart contract integration, on-chain data parsing, and real-time analytics dashboards.
>
> What I'm building solves a real gap: Avalanche developers today have no free, instant way to analyze their deployed contracts. The Avalanche Explorer shows raw transaction lists. Tenderly costs $50+/month and requires project setup. Dune requires writing SQL. There's nothing where you just paste an address and get visual analytics in 10 seconds.
>
> AvaxLens fills that gap. Zero cost for developers, zero setup, Avalanche-native from day one.
>
> Why Avalanche specifically: the ecosystem is growing fast (80+ active L1s, post-Avalanche9000), but developer tooling hasn't kept up. As more teams deploy contracts on C-Chain and Subnets, the need for accessible analytics only grows. I want to build the tool I wish existed when working with Avalanche contracts.
>
> My stack: Next.js, TypeScript, React, Solidity, ethers.js/viem — the exact tools needed for this project. No learning curve, pure execution.

---

## Page 5: Additional Info

**Twitter/X:**
> (your handle)

**Referrer's name:**
> (leave blank or specify if someone referred you)

**Student/faculty?**
> No (unless applicable)

---

## Key Talking Points (for any free-text fields)

### The Problem (use when asked "what problem are you solving")
- Avalanche Explorer: shows raw tx list, no per-contract analytics
- Tenderly: $50+/mo, multi-chain, requires project setup — overkill for quick checks
- Dune Analytics: requires SQL knowledge, not real-time
- No tool exists where you paste a contract address and get instant visual analytics for free

### The Solution (use when asked "what are you building")
- Browser-based dashboard, paste any C-Chain contract address
- Instant analytics: tx volume, success rate, gas trends, function breakdown, decoded errors
- No backend needed — all data from public Avalanche APIs (Routescan, Snowtrace, C-Chain RPC)
- Free forever for basic use, Pro tier later for alerts and history

### Why Avalanche (use when asked "why build on Avalanche")
- 80+ active L1s after Avalanche9000 upgrade — developer ecosystem growing fast
- Developer tooling hasn't kept pace with network growth
- Avalanche C-Chain is EVM-compatible — standard ABI decoding works
- Natural expansion path: start with C-Chain contracts, grow into Subnet/L1 analytics
- Low barrier to entry for developers = more contracts deployed = more need for analytics

### Tech Stack (use when asked about technology)
- Next.js 15 (React framework)
- Tailwind CSS + Tremor/Recharts (UI + charts)
- wagmi + viem (wallet + RPC interaction)
- Data: Avalanche C-Chain RPC, Routescan API, Snowtrace API, CoinGecko API
- Hosting: Vercel (free tier)
- No backend, no database for MVP — pure client-side with caching

### Long-Term Vision (use when asked about post-competition plans)
- Phase 1: Add alerts (Telegram/Discord notifications on contract anomalies)
- Phase 2: Expand to Subnet/L1 contract analytics (cover the full Avalanche ecosystem)
- Phase 3: Pro tier — unlimited contracts, 90d+ history, API access ($10-20/mo)
- Phase 4: Become the default analytics layer for Avalanche developers
- Revenue: freemium SaaS model. Free tier always available.

### Competitive Advantage (use if asked what makes you different)
- Only free, Avalanche-native contract analytics tool
- Zero setup — no project creation, no API keys, no signup
- Instant — paste address, see results in seconds
- Focused — built for Avalanche, not retrofitted from a multi-chain tool

---

## Timeline Milestones (if asked about roadmap)

| Week | Deliverable |
|------|-------------|
| 1 | Video pitch + contract overview page (basic stats, tx count) |
| 3 | Working prototype: tx charts, function breakdown, error logs, gas analytics |
| 5 | GTM plan: target Avalanche Discord/Twitter dev communities, pre-loaded popular contracts |
| 6 | Live demo at finals: analyze real Avalanche DeFi contracts in real-time |

---

## Infrastructure & Cost (if asked)

| Component | Cost |
|-----------|:----:|
| Hosting (Vercel) | $0 |
| Database | Not needed for MVP |
| APIs | All free tier |
| Domain | ~$10/year |
| **Total MVP** | **$0** |

---

## One-Liner Versions (for character-limited fields)

**Ultra-short (< 100 chars):**
> Free instant smart contract analytics for Avalanche. Paste address, get insights.

**Short (< 200 chars):**
> Free developer dashboard for Avalanche. Paste any contract address — see tx volume, gas usage, error logs, function breakdown. No signup, no cost. Built with Next.js + public APIs.

**Medium (< 500 chars):**
> AvaxLens is a free browser-based analytics tool for Avalanche developers. Enter any C-Chain contract address and instantly see transaction volume, success/fail rates, gas consumption, top functions, and decoded error logs — all without signup or API keys. Built with Next.js and powered by public Avalanche APIs (Routescan, Snowtrace, C-Chain RPC). No backend needed. Fills the gap between basic Avalanche Explorer and expensive tools like Tenderly. Designed to grow into the default analytics layer for the Avalanche ecosystem.
