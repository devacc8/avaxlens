# AvaxLens

**Free smart contract analytics for Avalanche C-Chain.**

Paste any contract address — get instant analytics: transaction volume, gas usage, function breakdown, error logs, caller analysis, AI security audits, and live network stats. No signup. No API key. No cost.

**Live:** [avaxlens.vercel.app](https://avaxlens.vercel.app)

---

## Features

### 6 Dashboard Tabs

| Tab | What it shows |
|-----|---------------|
| **Overview** | Transaction volume charts, success/fail visualization, gas metrics, top functions |
| **Transactions** | Paginated list with decoded function names, status filters, tx hash search |
| **Functions** | Call count charts, gas usage comparison, per-function success rates |
| **Errors** | Decoded revert reasons, error distribution, affected function mapping |
| **Callers** | Top callers ranked by activity, distribution charts, sortable tables |
| **AI Audit** | Security analysis with risk scoring (A-F grade), findings, recommendations |

### Platform Features

- **Live Network Stats** — AVAX price, gas price, TVL in header (DeFiLlama + C-Chain RPC, auto-refresh 30s)
- **Period Selection** — 7d / 30d / 90d time ranges with instant switching
- **CSV Export** — download analytics per tab as CSV file
- **Shareable Links** — share dashboard via URL with period and tab preserved
- **Contract Comparison** — side-by-side analytics for two contracts
- **Recent Searches** — recently viewed contracts on landing page
- **Health Check** — live API status indicator in footer
- **Mobile Responsive** — works on all screen sizes

### Under the Hood

- React Query for client-side caching (dedup, background refetch, stale/fresh)
- 3 security audits completed — score 10/10, 0 open findings
- Rate limiting (30 req/min), 5 security headers (CSP, HSTS), LRU cache
- Input/response validation, fetch timeouts on all external API calls

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Data Fetching:** React Query (@tanstack/react-query)
- **Charts:** Recharts
- **Blockchain:** viem (ABI decoding)
- **Deployment:** Vercel

## Data Sources

| API | Purpose |
|-----|---------|
| [Snowtrace](https://snowtrace.io) | Contract ABI, name, verification status |
| [Routescan](https://routescan.io) | Transaction history |
| [DeFiLlama](https://defillama.com) | AVAX price, Avalanche TVL |
| [Avalanche RPC](https://api.avax.network) | Gas price (eth_gasPrice) |

No API keys required.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Test Contracts

| Name | Address | Type |
|------|---------|------|
| Trader Joe | `0x60aE616a2155Ee3d9A68541Ba4544862310933d4` | DEX |
| Trader Joe V2 | `0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30` | DEX |
| Aave V3 | `0x794a61358D6845594F94dc1DB02A252b5b4814aD` | Lending |
| WAVAX | `0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7` | Token |

## Project Structure

```
src/
  app/                    # Next.js App Router pages + API routes
  lib/                    # Business logic, APIs, processing, cache
  components/             # React components (layout, dashboard, charts, tables, ui)
  data/                   # Static data (AI audit results)
docs/                     # Roadmap, audit reports, pitch materials
```

## License

MIT

---

Built for [Avalanche Build Games 2026](https://www.avax.network/buildgames2026).
