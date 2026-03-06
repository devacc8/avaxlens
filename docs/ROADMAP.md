# AvaxLens — Roadmap

> Features, hackathon timeline, and long-term vision.

---

## Status Legend

| Status | Meaning |
|--------|---------|
| Done | Shipped and live |
| In Progress | Currently being built |
| Planned | Committed for next milestone |
| Future | Post-hackathon / if time allows |

---

## Done (v0.1.0)

- [x] Contract address input with validation
- [x] Contract info display (name, compiler, creation date, Snowtrace link)
- [x] Transaction volume chart (7d / 30d / 90d)
- [x] Success/fail stacked bar chart
- [x] Metric cards (total txs, success rate, unique callers, avg gas)
- [x] Function breakdown table (ABI-decoded)
- [x] Error log table
- [x] Period switching (7d / 30d / 90d) via client-side fetch
- [x] Popular contracts on landing page
- [x] Skeleton loading states
- [x] Error boundary
- [x] Toast notification on address copy
- [x] Footer with version display and status indicator
- [x] Tabs: Overview, Transactions, Functions, Errors, Callers
- [x] Search on dashboard (switch contracts without going back)
- [x] Vercel deployment
- [x] Audit completed (6.5/10, all findings fixed)

## Done (v0.4.0)

- [x] **Functions Tab** — summary cards, function calls chart, gas chart, extended table
- [x] **Callers Tab** — summary cards, caller distribution chart, sortable callers table with pagination
- [x] **Transactions Tab** — lazy fetch, status filters, period filtering, paginated table, retry button
- [x] All 5 dashboard tabs fully functional (no more "Coming Soon")
- [x] Enhanced processing layer: caller breakdown, min/max gas tracking
- [x] New utilities: formatAvaxValue, formatTimeAgo

## Done (v0.4.1)

- [x] Security audit (9/10 score) — 12 of 13 findings fixed
- [x] Cache hardening: MAX_CACHE_SIZE=500, expired cleanup, LRU eviction
- [x] Rate limiting: sliding window 30 req/min per IP on all API routes
- [x] Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- [x] Query parameter validation with bounds checking
- [x] Client-side fetch timeouts (AbortController, 15s)
- [x] Race condition fix on rapid period changes
- [x] Response schema validation (Array.isArray guards)
- [x] Error logging in API clients (console.error)
- [x] npm audit — 0 vulnerabilities

## Done (v0.4.2)

- [x] Search by tx hash in Transactions tab (client-side filter)
- [x] Health check endpoint (`/api/health`) — checks Snowtrace + Routescan
- [x] Live status indicator in Footer — polls every 30s, green/yellow/red dot

## Done (v0.5.0)

- [x] **AI Audit tab** — 6th dashboard tab with pre-generated security analysis
- [x] Audited 4 contracts: Trader Joe (B+), Trader Joe V2 (A), Aave V3 (A+), WAVAX (B)
- [x] Score header, severity-colored findings, numbered recommendations
- [x] "Coming Soon" placeholder for non-audited contracts with links
- [x] Pulsing indicator on AI Audit tab button
- [x] Use Cases page updated: AI Security Scan badge "Coming Soon" → "Beta"

## Done (v0.5.1)

- [x] **CSV Export** — export analytics per tab as downloadable CSV file
- [x] **Shareable Links** — period and tab persisted in URL query params
- [x] Manual testing checklist document

## Done (v0.5.2)

- [x] **Security Audit v2** — score 9.5/10 (up from 9/10), 9 of 11 findings fixed
- [x] CSP + HSTS security headers
- [x] Cache LRU eviction fix
- [x] Period param validation (cache pollution prevention)
- [x] ABI array validation, parseInt radix, Infinity fix
- [x] Cache-Control headers on all API responses
- [x] Rate limiting on health endpoint

## Done (v0.5.3)

- [x] **Feature Bento Grid** — 4 feature cards with icons on landing page
- [x] **Recent Searches** — localStorage-based, shown on landing alongside Popular Contracts
- [x] **OG Tags / SEO** — Open Graph + Twitter meta tags on landing + contract pages
- [x] **ContractExplorer** — merged Popular Contracts + Recent Searches into adaptive layout

## Done (v0.5.4)

- [x] **React Query migration** — replaced manual fetch/AbortController/setInterval with @tanstack/react-query
- [x] **Network Stats in Header** — live AVAX price, gas price, TVL as badges (DeFiLlama + C-Chain RPC)
- [x] **Security Audit v3** — score 10/10, all 5 findings fixed (response validation, localStorage validation, fetch timeouts, retry config)
- [x] Gas format fix — smart nAVAX/pAVAX formatting for low gas prices
- [x] Cleanup: removed old NetworkStats component, consolidated Header

---

## Hackathon Deadlines

| Date | Deliverable | Status |
|------|-------------|--------|
| Feb 25 | 2-min video pitch + idea | Done |
| Mar 9 | MVP + demo video | In Progress |
| Mar 19 | Pitch deck + GTM plan | Planned |
| Mar 26/27 | Final 5-min pitch + live demo | Planned |

---

## Planned — MVP Polish (Mar 9)

### Functions Tab
- [x] Dedicated functions view with call count trends
- [x] Per-function success rate bar
- [x] Function gas usage comparison

### Callers Tab
- [x] Top callers ranked by tx count
- [x] Caller distribution bar chart
- [ ] New vs returning callers

### Transactions Tab
- [x] Paginated transaction list with decoded function names
- [x] Filter by status (success/fail)
- [x] Search by tx hash

### Status Indicator (Footer)
- [x] Health check endpoint (`/api/health`)
- [x] Periodic polling from footer (every 30s)
- [x] Check Snowtrace API reachability
- [x] Check Routescan API reachability
- [x] Three states: green (all OK), yellow (one API slow/down), red (backend unreachable)

### AI Security Audit
- [x] AI Audit tab with pre-generated security analysis
- [x] Security score, grade, findings, recommendations
- [x] 4 contracts audited (Trader Joe, Trader Joe V2, Aave V3, WAVAX)
- [x] Coming Soon placeholder for non-audited contracts

### General Polish
- [x] Mobile responsive improvements (truncate addresses, touch-friendly UI)
- [x] Empty state for contracts with zero transactions
- [x] Better error messages with retry buttons

### Testing
- [ ] Test with Trader Joe, Pangolin, GMX, Benqi
- [ ] Edge cases: invalid address, unverified contract, no transactions
- [ ] Unit tests for processing/validation

---

## Planned — GTM Sprint (Mar 19)

### Share & Export
- [x] Shareable dashboard URLs with period param
- [x] Export analytics as CSV
- [ ] Export charts as PNG

### SEO & Meta
- [x] Open Graph tags per contract page
- [ ] Dynamic OG images with contract stats
- [ ] Sitemap for popular contracts

### Marketing
- [ ] Pitch deck creation
- [ ] Twitter/X presence (3-5 posts)
- [ ] Avalanche Discord outreach
- [ ] Developer documentation / FAQ page

---

## Planned — Finals Prep (Mar 26/27)

- [ ] Demo script (5 min) with Trader Joe or GMX
- [ ] Backup recorded demo video
- [ ] Rehearsal 3-5 times
- [ ] Final bug fixes and performance check

---

## Future — Post-Hackathon

### Phase 1: Backend + Database (Month 1-2)

Infrastructure evolution from in-memory cache to persistent storage.

- [ ] PostgreSQL on Railway for persistent contract data
- [ ] Drizzle ORM integration
- [ ] Background indexer for popular contracts
- [ ] Query history logging
- [ ] User accounts (wallet-based, no email)
- [ ] Save favorite contracts to watchlist
- [ ] Alerts: Telegram/Discord notifications on anomalies

### Phase 2: AI Features (Month 2-3)

- [ ] Smart contract security audit (analyze source/bytecode for vulnerability patterns)
- [ ] AI-powered security analysis (Pro tier) — vulnerability detection, risk scoring, exploit patterns
- [ ] Anomaly detection (volume spikes, gas anomalies, suspicious calls)
- [ ] Similar contract search (find contracts with similar behavior)
- [ ] Vector embeddings for contract bytecode (zvec)
- [ ] MCP server — AI assistants can query contracts programmatically (Claude, Cursor, Windsurf, etc.)

### Phase 3: Multi-Chain (Month 3-4)

- [ ] Avalanche Subnet/L1 support (Beam, DFK Chain, Dexalot)
- [ ] Cross-chain contract comparison
- [ ] Subnet health metrics
- [ ] Generic EVM chain support

### Phase 4: Pro Tier & Revenue (Month 4-6)

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 3 contracts, 30d history, basic analytics |
| Pro | $10-20/mo | Unlimited contracts, 90d+ history, alerts, API access, CSV export, AI security analysis, MCP access |
| Team | $50/mo | Shared dashboards, role-based access |

Additional revenue streams:
- API access for bots/dashboards
- Avalanche Foundation / Retro9000 grants

### Infrastructure Scale

When Railway becomes limiting — migrate to VPS:

```
VPS (Hetzner CPX31 ~$15/month)
  Docker Compose
    app (Next.js standalone)
    postgresql
    nginx (reverse proxy + SSL)
  zvec (embedded in app process)
```

Zero vendor lock-in: everything is Docker + standard PostgreSQL.

---

## Architecture Notes

### Status Indicator Evolution

Current (v0.5.0):
```
Footer -> useEffect polls /api/health every 30s -> updates dot color
/api/health -> checks Snowtrace + Routescan reachability -> returns status
Three states: online (green), degraded (yellow), offline (red)
```

Future:
```
Footer -> WebSocket connection to backend -> real-time status
Backend -> monitors all dependencies (DB, APIs, RPC) -> pushes status changes
```

### Backend Evolution

Current (v0.5.4): Next.js API routes with in-memory cache (500 max, LRU eviction), rate limiting (30 req/min per IP), 5 security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy), health check endpoint. Static AI audit data (no runtime AI costs). CSV export, shareable dashboard URLs. React Query for all client-side data fetching (dedup, caching, background refetch). Live network stats (AVAX price, gas, TVL via DeFiLlama + RPC). Security audit score: 10/10.

Next: Add PostgreSQL for persistent storage, background jobs for indexing.

Future: Dedicated backend service, Redis, worker queues, WebSocket server.

### Cost Projection

| Phase | Component | Cost |
|-------|-----------|------|
| MVP | Vercel + free APIs | $0 |
| Phase 1 | Railway PostgreSQL | $5-20/mo |
| Phase 2 | AI API calls (Claude) | $10-50/mo |
| Phase 3 | VPS + domain | $25-50/mo |
| Phase 4 | Revenue offsets costs | Break-even target |
