# AvaxLens — MoSCoW Feature Prioritization

## Overview

This document outlines feature priorities using the MoSCoW framework for AvaxLens development.

---

## Must Have (MVP — Already Shipped)

Core functionality required for initial release:

| Feature | Description | Status |
|---------|-------------|--------|
| Contract Search | Paste any C-Chain address and get instant analytics | ✅ Live |
| Transaction Volume | Total tx count, volume over time chart | ✅ Live |
| Success/Fail Rate | Visual breakdown of successful vs failed transactions | ✅ Live |
| Gas Metrics | Average gas usage, gas trends | ✅ Live |
| Function Breakdown | ABI-decoded function calls with counts | ✅ Live |
| Error Logs | Decoded revert reasons with error distribution | ✅ Live |
| Period Selection | 7d, 30d, 90d time ranges | ✅ Live |
| Mobile Responsive | Works on mobile devices | ✅ Live |

---

## Should Have (Post-MVP — Q2 2026)

Important features to add after MVP:

| Feature | Description | Priority |
|---------|-------------|----------|
| PostgreSQL Storage | Persistent cache, query history, faster lookups | High |
| Search History | Remember recently viewed contracts | High |
| Contract Verification | Auto-detect if contract is verified on Snowtrace | Medium |
| Shareable Links | Share dashboard via URL with embedded address | Medium |
| Multiple Addresses | Compare 2+ contracts side by side | Medium |
| CSV Export | Export analytics data for external analysis | Medium |

---

## Could Have (Nice to Have — Q3-Q4 2026)

Desirable but not critical:

| Feature | Description | Priority |
|---------|-------------|----------|
| AI Security Scan | Pattern-based vulnerability detection | Low |
| Risk Scoring | A-F security score for contracts | Low |
| Anomaly Detection | Alert on unusual transaction patterns | Low |
| Telegram Alerts | Real-time notifications for monitored contracts | Low |
| Multi-chain Support | Avalanche L1s and Subnets (Beam, DFK, Dexalot) | Low |
| API Access | Programmatic access for teams | Low |

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

---

## Summary

- **Must Have:** 8 features — all shipped and live
- **Should Have:** 6 features — PostgreSQL, history, sharing, comparison, export
- **Could Have:** 6 features — AI security, alerts, multi-chain, API
- **Won't Have:** 6 features — wallet connection, NFT, real-time WS, mobile app

**MVP is complete.** Focus for Phase 2 is on Should Have items to improve persistence and user experience.
