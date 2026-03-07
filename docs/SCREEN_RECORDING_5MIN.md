# Screen Recording Plan — 5-Min Product Walkthrough

> Updated for Phase 2 Build Games 2026 (v0.5.4)
> Record screen and voice SEPARATELY, then sync in editor.
> Total: ~5:00. Record extra seconds at each step for editing flexibility.

---

## Recording Setup

- **Browser:** Chrome, clean profile (no bookmarks bar, no extensions visible)
- **Window:** 1920x1080 or 1280x720, maximized
- **Tab:** only avaxlens.vercel.app, no other tabs
- **Dark mode OS** (matches the app)
- **Mouse cursor:** large, visible
- **Demo contract:** Trader Joe address `0x60aE616a2155Ee3d9A68541Ba4544862310933d4`

---

## 5-Minute Breakdown

### Block 1: INTRO — Landing Page (0:00 — 0:30)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 0:00 | avaxlens.vercel.app home page | Slow scroll to show hero | "Hello. I'm [name], co-founder of AvaxLens. We're building the missing analytics tool for Avalanche developers." |
| 0:08 | Header with network stats | Point to AVAX price, Gas, TVL badges | "Right here you can see live network data — AVAX price, gas price, and total value locked — all updating in real time." |
| 0:15 | Feature Bento Grid | Scroll to 4 feature cards | "Free. Instant. AI-powered security. Export ready. That's the promise." |
| 0:22 | Popular Contracts + Recent Searches | Hover over contract cards | "Pick a popular contract or jump back to one you've recently viewed." |
| 0:27 | Hero section | Point to search bar | "Today, most developers dig through raw transaction lists on Snowtrace. There has to be a better way." |

---

### Block 2: THE PROBLEM — Competitors (0:30 — 1:05)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 0:30 | Navigate to /compare | Click "Compare" in nav | "Let me show you the current options." |
| 0:35 | Comparison table | Hover Snowtrace column — all X marks | "Snowtrace — free, but just a raw list of transactions. No charts, no analytics." |
| 0:43 | Comparison table | Hover Tenderly, show $49/mo | "Tenderly — powerful, but forty-nine dollars a month. Requires project setup." |
| 0:50 | Comparison table | Hover Dune, show $39/mo | "Dune — requires SQL knowledge, thirty-nine dollars a month. You need to write queries just to see basic metrics." |
| 1:00 | Pricing cards | Pause on AvaxLens $0 card | "There's a gap. No free, instant, visual analytics for Avalanche contracts." |

---

### Block 3: THE SOLUTION — Live Demo (1:05 — 2:05)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 1:05 | Back to home page | Click logo | "That's why we built AvaxLens." |
| 1:08 | Search input | Click into input, paste Trader Joe address | "Paste any C-Chain contract address — get instant analytics." |
| 1:15 | Dashboard loads | Pause on loading, then show metrics cards | "No signup. No API key. No setup. Let me show you." |
| 1:20 | Header network stats | Point to AVAX price + gas badges | "Live network stats right in the header — AVAX price, current gas, total value locked." |
| 1:25 | Total Transactions | Hover over the card | "Total transaction count — here's Trader Joe with over 2 million transactions." |
| 1:30 | Success Rate card | Hover | "Success rate — ninety-seven percent." |
| 1:34 | Unique Callers card | Hover | "Unique callers — over 180,000 unique addresses interacting with this contract." |
| 1:38 | Avg Gas card | Hover | "Average gas usage — helpful for understanding cost patterns." |
| 1:43 | Volume Chart | Scroll to chart, hover over trend | "Transaction volume over time. Seven or thirty days." |
| 1:48 | Period switch | Click "7d", then "30d" | "Switch periods — updates instantly with smart caching. Notice the URL updates too." |
| 1:53 | URL bar | Point to URL with ?period=30d | "Every view is shareable — copy the URL and send it to your team." |
| 1:58 | Success/Fail Chart | Scroll down | "Success versus fail breakdown. Visual and clear." |

---

### Block 4: TABS — Functions, Callers, Transactions (2:05 — 3:20)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 2:05 | Click Functions tab | Click "Functions" | "Let's dive deeper. Functions tab — every function decoded from the ABI." |
| 2:10 | Function calls chart | Hover chart bars | "Top functions by call count — see exactly what's being used most." |
| 2:17 | Gas chart | Scroll to gas chart | "Gas usage per function — find the expensive operations at a glance." |
| 2:23 | Functions table | Scroll to table | "Full breakdown with success rate, min and max gas for each function." |
| 2:27 | Export CSV button | Click "Export CSV" | "One click — export any tab as CSV for your own analysis." |
| 2:32 | Click Callers tab | Click "Callers" | "Callers tab — who's using this contract?" |
| 2:35 | Caller distribution chart | Hover chart | "Top callers ranked by transaction count. See the power users." |
| 2:43 | Callers table | Scroll to table | "Sortable table with success rates and last active time." |
| 2:50 | Click Transactions tab | Click "Transactions" | "Transactions tab — the full transaction history." |
| 2:55 | Transaction list | Scroll through | "Paginated list with decoded function names, values, gas used." |
| 3:00 | Status filter | Click "Failed" | "Filter by status — show only failed transactions." |
| 3:05 | Search input | Type part of a tx hash | "Search by transaction hash — find any specific transaction instantly." |
| 3:12 | Click Errors tab | Click "Errors" | "Errors tab — every revert reason decoded." |
| 3:17 | Error table | Scroll | "Grouped by error type. See exactly why transactions are failing." |

---

### Block 5: AI AUDIT — Key Feature (3:20 — 4:05)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 3:20 | Click AI Audit tab | Click "AI Audit" (notice the pulsing dot) | "And now our standout feature — AI Security Audit." |
| 3:25 | Score header | Pause on score circle | "Instant security score. Trader Joe gets a B-plus — seventy-two out of a hundred." |
| 3:33 | Score bar | Point to gradient bar | "Visual score distribution from critical to safe." |
| 3:37 | Findings | Scroll through findings | "Every finding categorized by severity — critical, warning, info." |
| 3:45 | Finding detail | Hover a warning finding | "Detailed descriptions with affected function locations." |
| 3:50 | Recommendations | Scroll to recommendations | "Actionable recommendations — not just problems, but solutions." |
| 3:57 | Footer metadata | Point to date | "Static analysis powered by AI. Typically costs five to fifty thousand dollars from professional auditors. We provide it free." |

---

### Block 6: ROADMAP & CLOSE (4:05 — 5:00)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 4:05 | Navigate to Roadmap | Click "Roadmap" | "What's next? Our roadmap." |
| 4:10 | Phase 1 — Shipped | Hover over Phase 1 badge | "Phase 1 — shipped. Everything you've seen is live today. Six dashboard tabs, twenty-one features, live network stats, React Query caching." |
| 4:18 | Stay on Phase 1 | Pause | "We've completed three independent security audits — perfect score, ten out of ten. CSP headers, rate limiting, input validation, cache hardening — all built in from day one." |
| 4:25 | Phase 2 — AI Security | Scroll to Phase 2 | "Phase 2 — AI security scanning for any verified contract. PostgreSQL for persistence." |
| 4:30 | Phase 3 — Multi-chain | Scroll | "Phase 3 — multi-chain. Support for Avalanche L1s and Subnets." |
| 4:35 | Phase 4 — Pro Tier | Scroll | "Phase 4 — Pro tier. Ten to twenty dollars a month for AI alerts, extended history, API access." |
| 4:42 | Footer status | Point to green dot | "Live health monitoring — we check our API dependencies every thirty seconds." |
| 4:47 | Back to home | Click logo | "Free analytics today. AI-powered security tomorrow." |
| 4:52 | Home page | Pause on search bar | "Try it now — avaxlens.vercel.app" |
| 4:57 | End screen | Hold for 3 sec silence | [End] |

---

## Voice Script (5 min total)

**Block 1 — Intro (30 sec)**
"Hello. I'm [name], co-founder of AvaxLens. We're building the missing analytics tool for Avalanche developers. Right here in the header you can see live network data — AVAX price, current gas price, and total value locked on Avalanche — all updating in real time. Free. Instant. AI-powered security. Export ready. But today, most developers still dig through raw transaction lists on Snowtrace. There has to be a better way."

**Block 2 — Problem (35 sec)**
"Let me show you the current options. Snowtrace — free, but just a raw list of transactions. No charts, no analytics. Tenderly — powerful, but forty-nine dollars a month, requires project setup. Dune — requires SQL knowledge, thirty-nine dollars a month. You need to write queries just to see basic metrics. There's a gap. No free, instant, visual analytics for Avalanche contracts."

**Block 3 — Solution: Overview (60 sec)**
"That's why we built AvaxLens. Paste any C-Chain contract address — get instant analytics. No signup. No API key. No setup. Live network stats right in the header — AVAX price, gas, TVL. Here's Trader Joe — the biggest DEX on Avalanche. Total transactions — over 2 million. Success rate — ninety-seven percent. Unique callers — over 180,000 addresses. Transaction volume over time — switch periods instantly with smart caching powered by React Query. Notice the URL updates — every view is shareable. Copy the link and send it to your team. Success versus fail breakdown — visual and clear."

**Block 4 — Deep Dive: Tabs (75 sec)**
"Let's dive deeper. Functions tab — every function decoded from the ABI. Top functions by call count, gas usage per function. Full breakdown with success rates. And one click to export as CSV — take the data with you. Callers tab — who's using this contract? Top callers ranked by activity, sortable table with last active time. Transactions tab — full paginated history. Filter by status, search by transaction hash. Errors tab — every revert reason decoded, grouped by error type."

**Block 5 — AI Audit (45 sec)**
"And now our standout feature — AI Security Audit. Instant security score — Trader Joe gets a B-plus, seventy-two out of a hundred. Every finding categorized by severity — critical, warning, info. Detailed descriptions with affected functions. Actionable recommendations. This typically costs five to fifty thousand dollars from professional auditors. We provide it free."

**Block 6 — Roadmap (55 sec)**
"What's next? Phase 1 — shipped. Everything you've seen is live today. Six dashboard tabs, twenty-one features, live network stats, React Query caching. We've completed three independent security audits — perfect score, ten out of ten. CSP headers, rate limiting, input validation, cache hardening — all built in from day one. Phase 2 — AI security for any verified contract, PostgreSQL for persistence. Phase 3 — multi-chain, Avalanche L1s and Subnets. Phase 4 — Pro tier, ten to twenty dollars a month. Live health monitoring — we check our APIs every thirty seconds. Free analytics today. AI-powered security tomorrow. Try it now — avaxlens.vercel.app."

---

## Recording Tips

- **Screen:** 1080p, 30fps, 1.0x speed (no speed-up)
- **Voice:** Record each block separately, then sync in editor
- **Do overs:** Record each block 2-3 times, pick best take
- **Editor:** DaVinci Resolve, CapCut, or QuickTime
- **Export:** MP4 H.264, 1080p

---

## Pre-Recording Checklist

- [ ] avaxlens.vercel.app loads correctly
- [ ] Trader Joe address in clipboard
- [ ] Network stats visible in header (AVAX price, Gas, TVL) — wait 2-3 sec for load
- [ ] Feature Bento Grid visible on landing page (4 cards)
- [ ] Recent Searches section visible (if you've viewed contracts before)
- [ ] All nav links work (Compare, Use Cases, Roadmap)
- [ ] All 6 tabs work (Overview, Transactions, Functions, Errors, Callers, AI Audit)
- [ ] Period switching works (7d / 30d) — note instant cache on second switch
- [ ] Tx hash search works in Transactions tab
- [ ] AI Audit shows real data for Trader Joe
- [ ] Export CSV button works on Functions tab
- [ ] URL updates on period/tab switch (?period=7d&tab=functions)
- [ ] Health indicator shows green dot in footer
- [ ] Clean browser (no extensions, no bookmarks)
- [ ] Microphone tested
- [ ] Screen recording software ready

---

## Optional: Mobile Version (15-30 sec)

If showing mobile version, add after Block 4 (before Block 5):

**Time:** After 3:40 mark

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 3:40 | Open DevTools | Press F12, toggle device toolbar | "Works on mobile too — responsive design throughout." |
| 3:45 | iPhone 14 Pro viewport | Scroll dashboard | "All six tabs, charts, tables — adapted for smaller screens." |
| 4:00 | Back to desktop | Close device toolbar | "But desktop gives you the full picture." |

**Note:** This segment is optional — judges may primarily evaluate on desktop. Record only if time allows.
