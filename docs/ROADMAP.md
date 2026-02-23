# AvaxLens — Feature Roadmap

> Planned features and improvements, organized by priority.

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
- [x] Transaction volume chart (7d / 30d)
- [x] Success/fail stacked bar chart
- [x] Metric cards (total txs, success rate, unique callers, avg gas)
- [x] Function breakdown table (ABI-decoded)
- [x] Error log table
- [x] Period switching (7d / 30d) via client-side fetch
- [x] Popular contracts on landing page
- [x] Skeleton loading states
- [x] Error boundary
- [x] Footer with version display and status indicator
- [x] Vercel deployment

---

## Planned — MVP Polish (Mar 9)

### Functions Tab
- [ ] Dedicated functions view with call count trends
- [ ] Per-function success rate bar
- [ ] Function gas usage comparison

### Callers Tab
- [ ] Top callers ranked by tx count
- [ ] Caller distribution pie/bar chart
- [ ] New vs returning callers

### Status Indicator (Footer)
- [ ] Health check endpoint (`/api/health`)
- [ ] Periodic polling from footer (every 30s)
- [ ] Check Snowtrace API reachability
- [ ] Check Routescan API reachability
- [ ] Three states: green (all OK), yellow (one API slow/down), red (backend unreachable)

### General Polish
- [ ] Mobile responsive improvements
- [ ] Empty state for contracts with zero transactions
- [ ] Better error messages with retry buttons

---

## Planned — GTM Sprint (Mar 19)

### Share & Export
- [ ] Shareable dashboard URLs with period param
- [ ] Export analytics as CSV
- [ ] Export charts as PNG

### SEO & Meta
- [ ] Open Graph tags per contract page
- [ ] Dynamic OG images with contract stats
- [ ] Sitemap for popular contracts

### Documentation
- [ ] FAQ page
- [ ] Developer guide (how AvaxLens works)

---

## Future (Post-Hackathon)

### Backend & Database
- [ ] PostgreSQL for caching contract data
- [ ] Background indexer for popular contracts
- [ ] Redis for rate limiting and session cache
- [ ] Webhook notifications (tx spike, high error rate)

### Advanced Analytics
- [ ] Gas cost in AVAX/USD (price feed integration)
- [ ] Contract comparison (side-by-side two contracts)
- [ ] Historical trends (90d, 1y)
- [ ] Anomaly detection (unusual tx spikes, sudden error surges)

### Real-time Features
- [ ] WebSocket/SSE for live transaction feed
- [ ] Real-time metric updates on dashboard
- [ ] Live status indicator connected to backend health

### Multi-chain
- [ ] Avalanche subnets support
- [ ] DFK Chain, Dexalot Subnet
- [ ] Generic EVM chain support

### User Features
- [ ] Watchlist — save favorite contracts
- [ ] Email/Telegram alerts for contract events
- [ ] API access for developers (public REST API)
- [ ] Custom date range picker

### Infrastructure
- [ ] Rate limit management with queue system
- [ ] CDN caching for static analytics
- [ ] Monitoring dashboard (uptime, API latency)
- [ ] Error tracking (Sentry integration)

---

## Architecture Notes

### Status Indicator Evolution

Current (v0.1.0):
```
Footer → hardcoded "online" status → green dot
```

Next iteration:
```
Footer → useEffect polls /api/health every 30s → updates dot color
/api/health → checks Snowtrace + Routescan reachability → returns status
```

Future:
```
Footer → WebSocket connection to backend → real-time status
Backend → monitors all dependencies (DB, APIs, RPC) → pushes status changes
```

### Backend Evolution

Current: Next.js API routes with in-memory cache.

Next: Add PostgreSQL for persistent storage, background jobs for indexing.

Future: Dedicated backend service, Redis, worker queues, WebSocket server.
