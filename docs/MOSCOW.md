# AvaxLens — MoSCoW Feature Prioritization

## Overview

This document outlines feature priorities using the MoSCoW framework for AvaxLens development.
Updated to reflect v0.5.2 state (March 2026).

---

## Must Have (MVP — All Shipped)

Core functionality required for initial release:

| Feature | Description | Status |
|---------|-------------|--------|
| Contract Search | Paste any C-Chain address and get instant analytics | Shipped v0.1.0 |
| Transaction Volume | Total tx count, volume over time chart | Shipped v0.1.0 |
| Success/Fail Rate | Visual breakdown of successful vs failed transactions | Shipped v0.1.0 |
| Gas Metrics | Average gas usage, gas trends | Shipped v0.1.0 |
| Function Breakdown | ABI-decoded function calls with counts, gas analysis | Shipped v0.1.0 |
| Error Logs | Decoded revert reasons with error distribution | Shipped v0.1.0 |
| Period Selection | 7d, 30d, 90d time ranges | Shipped v0.1.0 |
| Mobile Responsive | Works on mobile devices | Shipped v0.1.0 |
| Functions Tab | Dedicated view: call charts, gas charts, extended table | Shipped v0.4.0 |
| Callers Tab | Top callers, distribution chart, sortable table | Shipped v0.4.0 |
| Transactions Tab | Paginated list, status filters, period filtering | Shipped v0.4.0 |
| Security Hardening | Rate limiting, cache limits, security headers, input validation | Shipped v0.4.1 |
| Tx Hash Search | Search transactions by hash | Shipped v0.4.2 |
| Health Check | /api/health endpoint, live status indicator in footer | Shipped v0.4.2 |
| AI Security Audit | Pre-generated security audits for popular contracts | Shipped v0.5.0 |
| CSV Export | Export analytics data per tab as CSV | Shipped v0.5.1 |
| Shareable Links | Share dashboard via URL with period and tab params | Shipped v0.5.1 |
| Security Audit v2 | CSP, HSTS, LRU cache, period validation, ABI validation — 9/9 fixed | Shipped v0.5.2 |

---

## Should Have (Pre-Demo Polish — Mar 9)

Important items to complete before MVP demo:

| Feature | Description | Priority |
|---------|-------------|----------|
| Empty State | Graceful UI for contracts with zero transactions | High (done) |
| Compare Page | Side-by-side contract comparison | High (done) |
| Use Cases Page | Marketing page showing key features | High (done) |
| Roadmap Page | Public roadmap for users | High (done) |
| Demo Video | 5-min screen recording with voice-over | High |
| Manual Testing | Test all tabs with Trader Joe, Aave V3, WAVAX | High |
| Edge Case Testing | Invalid address, unverified contract, empty results | Medium |

---

## Could Have (Post-MVP — Q2-Q3 2026)

Desirable but not critical for hackathon:

| Feature | Description | Priority |
|---------|-------------|----------|
| PostgreSQL Storage | Persistent cache, query history, faster lookups | High |
| Search History | Remember recently viewed contracts | High |
| ~~Shareable Links~~ | ~~Share dashboard via URL with period param~~ | Moved to Must Have |
| ~~CSV Export~~ | ~~Export analytics data for external analysis~~ | Moved to Must Have |
| PNG Export | Export charts as images | Medium |
| Unit Tests | Tests for processing functions | Medium |
| New vs Returning Callers | Track caller retention (requires DB) | Low |
| Open Graph Tags | Dynamic OG images with contract stats | Low |
| Light Theme | Light/dark toggle respecting system preference | Low |

---

## Won't Have (Not in Current Roadmap)

Out of scope for now:

| Feature | Reason |
|---------|--------|
| Wallet Connection | Read-only analytics — no transactions needed |
| NFT Support | Focus on C-Chain smart contracts first |
| Mainnet X/P Chain | C-Chain only for MVP |
| Custom Dashboards | Single contract view for now |
| Real-time WebSocket | Polling sufficient for current use cases |
| Mobile App | Web-based responsive design sufficient |
| Real-time AI Audit | Pre-generated audits sufficient, no AI API cost |

---

## Summary

- **Must Have:** 18 features — all shipped (v0.1.0 through v0.5.2)
- **Should Have:** 7 items — 4 done, 3 remaining (demo video, testing)
- **Could Have:** 7 features — PostgreSQL, PNG export, tests, OG tags, light theme
- **Won't Have:** 7 features — wallet, NFT, mobile app, real-time AI

**MVP is complete.** Focus for Phase 2 demo is on testing and recording the demo video.
