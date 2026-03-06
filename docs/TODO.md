# AvaxLens — Developer Tasks

> UI/UX bug fixes, improvements, and feature tracker.

---

## Completed (v0.3.5)

- [x] Compare table horizontal scroll on mobile (`overflow-x-auto`)
- [x] Top Functions table horizontal scroll on mobile (`overflow-x-auto`)
- [x] Sort select color — changed to `text-white` for readability
- [x] Chart hover highlight removed — `cursor={false}`, `activeDot={false}`, tooltip only
- [x] Error names truncated with `truncate` + `title` attribute for full text on hover
- [x] GitHub link moved from Header to Footer (SVG icon)
- [x] Active page highlight in Header navigation (`usePathname`)

## Completed (v0.4.0)

- [x] **Functions Tab** — FunctionCallsChart, FunctionGasChart, summary cards, extended FunctionsTable
- [x] **Callers Tab** — CallerDistributionChart, CallersTable (sortable, paginated), summary cards
- [x] **Transactions Tab** — lazy fetch, status/period filters, paginated table, retry on error
- [x] Processing layer: CallerStats, ProcessedTransaction types, buildCallerBreakdown, processRawTransactions
- [x] Enhanced FunctionStats: totalGas, minGas, maxGas tracking
- [x] New utilities: formatAvaxValue (wei → AVAX), formatTimeAgo (relative time)

## Completed (v0.4.1)

- [x] Cache hardening: MAX_CACHE_SIZE=500, expired cleanup, LRU eviction
- [x] Rate limiting: sliding window 30 req/min per IP, added to all 3 API routes
- [x] Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- [x] Query param validation: page/offset bounds, sort whitelist
- [x] Client-side fetch timeouts: AbortController 15s on TabNavigation + TransactionsTab
- [x] Race condition fix: cancel stale requests on rapid period changes
- [x] Response validation: Array.isArray guards in TransactionsTab
- [x] Error logging: console.error in snowtrace.ts + routescan.ts catch blocks
- [x] npm audit fix: 0 vulnerabilities

## Completed (v0.4.2)

- [x] Search by tx hash in Transactions tab (client-side filter)
- [x] Health check endpoint (`/api/health`) — Snowtrace + Routescan ping
- [x] Live status indicator in Footer — polls every 30s, 3 states (online/degraded/offline)

## Completed (v0.5.0)

- [x] **AI Audit tab** — 6th dashboard tab with pre-generated security audits
- [x] 4 contracts audited: Trader Joe (B+, 72), Trader Joe V2 (A, 85), Aave V3 (A+, 92), WAVAX (B, 68)
- [x] Score header with circular indicator + gradient bar + findings count
- [x] Severity-colored findings list (critical/warning/info)
- [x] Numbered recommendations section
- [x] "Coming Soon" placeholder for non-audited contracts with links
- [x] Pulsing red dot + subtle bg on AI Audit tab button
- [x] Use Cases page: AI Security Scan "Coming Soon" → "Beta"

## Completed (v0.5.1)

- [x] **CSV Export** — export button on Overview, Functions, Errors, Callers tabs (generates .csv file)
- [x] **Shareable Links** — period and tab params in URL, synced via replaceState
- [x] Manual testing checklist document (`docs/TESTING_CHECKLIST.md`)

## Completed (v0.5.2)

- [x] **Security Audit v2** — full-stack audit, 14 findings analyzed, 7 false positives rejected, 9 fixed (score: 9.5/10)
- [x] Content-Security-Policy header (CSP)
- [x] Strict-Transport-Security header (HSTS)
- [x] Cache LRU fix (delete+re-set on read)
- [x] Period parameter validation before cache key
- [x] ABI JSON.parse array validation
- [x] Infinity → MAX_SAFE_INTEGER in function stats
- [x] parseInt radix 10 on all calls
- [x] Cache-Control headers on all API responses
- [x] Rate limiting on `/api/health` endpoint
- [x] Updated MOSCOW, ROADMAP, video script with security achievements

---

## Backlog

- [ ] Error names: add expandable row on tap for mobile (currently truncated)
- [ ] Export charts as PNG
- [ ] New vs returning callers in Callers tab (requires DB)
- [ ] Unit tests for processing functions (post-MVP)
- [ ] Demo video recording (5-min walkthrough)
- [ ] **Add more AI Audit contracts** — target 10+ contracts (Pangolin, GMX, Benqi, Bullet, Yeti, Platypus, Gorilla, etc.)
- [ ] **OG Tags / SEO** — meta tags for social sharing, dynamic OG images
- [ ] **Quick Stats Banner** — "Avalanche: 500K+ daily txs" banner on home
- [ ] **Gas Price Widget** — current gas price display on home
- [ ] **Feature Bento Grid** — 3-4 icons: Free, No Setup, AI Security, CSV Export
- [ ] **Recent Searches** — show recently viewed contracts on home
