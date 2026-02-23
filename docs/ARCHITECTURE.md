# AvaxLens — Architecture & Infrastructure Roadmap

This document captures the long-term architectural vision for AvaxLens, including database strategy, AI features, and infrastructure evolution.

---

## Current State (MVP)

```
User → Vercel (Next.js) → API Routes → Snowtrace / Routescan
                            ↓
                      In-memory cache (TTL)
                            ↓
                      Server-side processing (viem)
                            ↓
                      Pre-computed analytics JSON → Client
```

**Stack:** Next.js 16 (App Router) on Vercel, no database.
**Data flow:** API routes proxy Snowtrace/Routescan, process raw transactions server-side, return aggregated analytics (~2KB) to the client.
**Caching:** In-memory TTL cache (ABI: 24h, analytics: 5min, transactions: 60s).

---

## Phase 1 — Backend + PostgreSQL (Post-MVP)

**Goal:** Persistent storage, query history, faster repeated lookups.

### Infrastructure

```
Vercel (frontend + API)
  ↓
Railway
  ├── PostgreSQL (primary database)
  └── (optional) Backend service (Node.js/Express or Next.js standalone)
```

### Why Railway

- Docker-based deploys — zero vendor lock-in
- PostgreSQL provisioned in one click
- Hobby: $5/month, Pro: $20/month
- Easy migration path to any VPS (just move Docker containers + pg_dump)

### Why PostgreSQL

- Full SQL power: aggregations, window functions, CTEs
- JSONB for flexible on-chain data (ABI, raw transaction fields)
- pgvector extension available for future AI/vector search
- Industry standard, massive ecosystem, Prisma/Drizzle ORM support
- 35+ years of battle-tested reliability

### Database Schema (Initial)

```sql
-- Contracts we've analyzed
contracts (
  address         TEXT PRIMARY KEY,
  name            TEXT,
  abi             JSONB,
  is_verified     BOOLEAN,
  first_seen_at   TIMESTAMP,
  updated_at      TIMESTAMP
)

-- Cached transaction data
transactions (
  hash            TEXT PRIMARY KEY,
  contract_addr   TEXT REFERENCES contracts(address),
  block_number    BIGINT,
  timestamp       TIMESTAMP,
  from_addr       TEXT,
  to_addr         TEXT,
  value           NUMERIC,
  gas_used        BIGINT,
  gas_price       NUMERIC,
  method_id       TEXT,
  method_name     TEXT,
  is_error        BOOLEAN,
  error_message   TEXT
)

-- Pre-computed analytics snapshots
analytics_cache (
  contract_addr   TEXT REFERENCES contracts(address),
  period          TEXT,  -- '24h', '7d', '30d', 'all'
  data            JSONB, -- full analytics payload
  computed_at     TIMESTAMP
)

-- Search/query history
query_log (
  id              SERIAL PRIMARY KEY,
  contract_addr   TEXT,
  queried_at      TIMESTAMP DEFAULT NOW(),
  response_time   INTEGER  -- ms
)
```

### Migration Plan

1. Deploy PostgreSQL on Railway
2. Add Drizzle ORM to the project (lightweight, edge-compatible)
3. Migrate in-memory cache → `analytics_cache` table
4. Store contract ABIs in `contracts` table (replace 24h memory cache)
5. Log queries for analytics on usage patterns
6. Keep Vercel for frontend, API routes call Railway PostgreSQL

---

## Phase 2 — AI Features

**Goal:** Smart contract security audit, anomaly detection, pattern recognition.

### Planned Features

1. **Smart Contract Security Audit**
   - Analyze contract source code / bytecode for known vulnerability patterns
   - Compare against database of known exploits and vulnerabilities
   - Generate risk score and detailed report

2. **Anomaly Detection**
   - Detect unusual transaction patterns (volume spikes, gas anomalies)
   - Flag suspicious function calls or value transfers
   - Real-time alerts for monitored contracts

3. **Similar Contract Search**
   - Find contracts with similar behavior patterns
   - "This contract behaves like Trader Joe Router" based on function signatures and call patterns

### Infrastructure Addition: zvec

```
Railway
  ├── PostgreSQL        — structured data (transactions, analytics)
  ├── zvec (in-process) — vector embeddings (SC code, tx patterns)
  └── AI service        — audit engine, anomaly detection
```

**Why zvec (alibaba/zvec):**
- In-process vector database — no separate server needed
- Node.js SDK: `npm install @zvec/zvec`
- 8,000+ QPS on billion-scale vectors
- Hybrid search: vector similarity + scalar filters
- Apache 2.0, backed by Alibaba's Proxima engine
- "SQLite of vector databases" — lightweight, embedded

**Use cases for zvec in AvaxLens:**
- Store embeddings of contract bytecode/source → find similar vulnerable contracts
- Embed transaction patterns → detect anomalies via nearest-neighbor search
- Hybrid queries: "find contracts similar to X with gas_usage > Y"

### AI Stack (Planned)

| Component | Purpose |
|-----------|---------|
| PostgreSQL | Structured data, analytics, history |
| zvec | Vector search, embeddings, similarity |
| Claude API | SC audit analysis, natural language reports |
| viem | ABI decoding, bytecode analysis (already in stack) |

---

## Phase 3 — Scale

**When Railway becomes limiting:**

### Migration to VPS

1. Export Docker containers (already Docker-based on Railway)
2. `pg_dump` PostgreSQL database
3. Deploy on VPS (Hetzner, OVH, DigitalOcean)
4. Set up reverse proxy (nginx/Caddy)
5. zvec migrates with the app (in-process, no separate service)

**Zero vendor lock-in** — everything is Docker + standard PostgreSQL + embedded zvec.

### Potential VPS Architecture

```
VPS (e.g., Hetzner CPX31 — ~$15/month)
  ├── Docker Compose
  │   ├── app (Next.js standalone or Express)
  │   ├── postgresql
  │   └── nginx (reverse proxy + SSL)
  ├── zvec (embedded in app process)
  └── Vercel (frontend, optional — or self-host)
```

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-23 | No DB for MVP | Unnecessary complexity before hackathon deadline |
| 2026-02-23 | PostgreSQL as primary DB | Full SQL, JSONB, pgvector path, industry standard |
| 2026-02-23 | Railway for backend hosting | Docker-based, cheap, no lock-in, easy VPS migration |
| 2026-02-23 | zvec for future AI features | In-process, fast, Node.js SDK, hybrid search |
| 2026-02-23 | Drizzle as ORM | Lightweight, edge-compatible, great Turso/Neon support |

---

## Timeline

| Phase | Target | Deliverables |
|-------|--------|-------------|
| MVP | Mar 9, 2026 | Working analytics tool, no DB |
| Phase 1 | Mar-Apr 2026 | PostgreSQL on Railway, persistent storage |
| Phase 2 | Apr-May 2026 | AI audit, anomaly detection, zvec integration |
| Phase 3 | When needed | VPS migration if Railway limits reached |
