# Screen Recording Plan — 5-Min Product Walkthrough

> Updated for Phase 2 Build Games 2026 (v0.5.0)
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

### Block 1: INTRO — Landing Page (0:00 — 0:25)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 0:00 | avaxlens.vercel.app home page | Slow scroll to show hero | "Hello. I'm [name], co-founder of AvaxLens. We're building the missing analytics tool for Avalanche developers." |
| 0:10 | Stay on home page, search bar visible | Hover over search input | "Every developer deploying a smart contract on Avalanche asks the same questions: Is my contract working? Why are transactions failing? Who's using it?" |
| 0:20 | Hero section | Point to tagline | "Today, the answer is buried in raw transaction lists on Snowtrace. There has to be a better way." |

---

### Block 2: THE PROBLEM — Competitors (0:25 — 1:00)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 0:25 | Navigate to /compare | Click "Compare" in nav | "Let me show you the current options." |
| 0:30 | Comparison table | Hover Snowtrace column — all X marks | "Snowtrace — free, but just a raw list of transactions. No charts, no analytics." |
| 0:38 | Comparison table | Hover Tenderly, show $49/mo | "Tenderly — powerful, but forty-nine dollars a month. Requires project setup." |
| 0:45 | Comparison table | Hover Dune, show $39/mo | "Dune — requires SQL knowledge, thirty-nine dollars a month. You need to write queries just to see basic metrics." |
| 0:55 | Pricing cards | Pause on AvaxLens $0 card | "There's a gap. No free, instant, visual analytics for Avalanche contracts." |

---

### Block 3: THE SOLUTION — Live Demo (1:00 — 2:00)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 1:00 | Back to home page | Click logo | "That's why we built AvaxLens." |
| 1:03 | Search input | Click into input, paste Trader Joe address | "Paste any C-Chain contract address — get instant analytics." |
| 1:10 | Dashboard loads | Pause on loading, then show metrics cards | "No signup. No API key. No setup. Let me show you." |
| 1:20 | Total Transactions | Hover over the card | "Total transaction count — here's Trader Joe with over 2 million transactions." |
| 1:28 | Success Rate card | Hover | "Success rate — ninety-seven percent." |
| 1:32 | Unique Callers card | Hover | "Unique callers — over 180,000 unique addresses interacting with this contract." |
| 1:38 | Avg Gas card | Hover | "Average gas usage — helpful for understanding cost patterns." |
| 1:45 | Volume Chart | Scroll to chart, hover over trend | "Transaction volume over time. Seven, thirty, or ninety days." |
| 1:50 | Period switch | Click "7d", then "90d" | "Switch periods — updates instantly." |
| 1:55 | Success/Fail Chart | Scroll down | "Success versus fail breakdown. Visual and clear." |

---

### Block 4: TABS — Functions, Callers, Transactions (2:00 — 3:15)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 2:00 | Click Functions tab | Click "Functions" | "Let's dive deeper. Functions tab — every function decoded from the ABI." |
| 2:05 | Function calls chart | Hover chart bars | "Top functions by call count — see exactly what's being used most." |
| 2:12 | Gas chart | Scroll to gas chart | "Gas usage per function — find the expensive operations at a glance." |
| 2:18 | Functions table | Scroll to table | "Full breakdown with success rate, min and max gas for each function." |
| 2:25 | Click Callers tab | Click "Callers" | "Callers tab — who's using this contract?" |
| 2:30 | Caller distribution chart | Hover chart | "Top callers ranked by transaction count. See the power users." |
| 2:38 | Callers table | Scroll to table | "Sortable table with success rates and last active time." |
| 2:45 | Click Transactions tab | Click "Transactions" | "Transactions tab — the full transaction history." |
| 2:50 | Transaction list | Scroll through | "Paginated list with decoded function names, values, gas used." |
| 2:55 | Status filter | Click "Failed" | "Filter by status — show only failed transactions." |
| 3:00 | Search input | Type part of a tx hash | "Search by transaction hash — find any specific transaction instantly." |
| 3:08 | Click Errors tab | Click "Errors" | "Errors tab — every revert reason decoded." |
| 3:12 | Error table | Scroll | "Grouped by error type. See exactly why transactions are failing." |

---

### Block 5: AI AUDIT — Key Feature (3:15 — 4:00)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 3:15 | Click AI Audit tab | Click "AI Audit" (notice the pulsing dot) | "And now our standout feature — AI Security Audit." |
| 3:20 | Score header | Pause on score circle | "Instant security score. Trader Joe gets a B-plus — seventy-two out of a hundred." |
| 3:28 | Score bar | Point to gradient bar | "Visual score distribution from critical to safe." |
| 3:32 | Findings | Scroll through findings | "Every finding categorized by severity — critical, warning, info." |
| 3:40 | Finding detail | Hover a warning finding | "Detailed descriptions with affected function locations." |
| 3:45 | Recommendations | Scroll to recommendations | "Actionable recommendations — not just problems, but solutions." |
| 3:52 | Footer metadata | Point to date | "Static analysis powered by AI. Typically costs five to fifty thousand dollars from professional auditors. We provide it free." |

---

### Block 6: ROADMAP & CLOSE (4:00 — 5:00)

| Time | Screen | Mouse | Audio |
|------|--------|-------|-------|
| 4:00 | Navigate to Roadmap | Click "Roadmap" | "What's next? Our roadmap." |
| 4:05 | Phase 1 — Shipped | Hover over Phase 1 badge | "Phase 1 — shipped. Everything you've seen is live today. Six tabs, fifteen features." |
| 4:12 | Phase 2 — AI Security | Scroll to Phase 2 | "Phase 2 — AI security scanning for any verified contract. PostgreSQL for persistence." |
| 4:20 | Phase 3 — Multi-chain | Scroll | "Phase 3 — multi-chain. Support for Avalanche L1s and Subnets." |
| 4:28 | Phase 4 — Pro Tier | Scroll | "Phase 4 — Pro tier. Ten to twenty dollars a month for AI alerts, extended history, API access." |
| 4:40 | Footer status | Point to green dot | "Live health monitoring — we check our API dependencies every thirty seconds." |
| 4:45 | Back to home | Click logo | "Free analytics today. AI-powered security tomorrow." |
| 4:50 | Home page | Pause on search bar | "Try it now — avaxlens.vercel.app" |
| 4:55 | End screen | Hold for 5 sec silence | [End] |

---

## Voice Script (5 min total)

**Block 1 — Intro (25 sec)**
"Hello. I'm [name], co-founder of AvaxLens. We're building the missing analytics tool for Avalanche developers. Every developer deploying a smart contract on Avalanche asks the same questions: Is my contract working? Why are transactions failing? Who's using it? Today, the answer is buried in raw transaction lists on Snowtrace. There has to be a better way."

**Block 2 — Problem (35 sec)**
"Let me show you the current options. Snowtrace — free, but just a raw list of transactions. No charts, no analytics. Tenderly — powerful, but forty-nine dollars a month, requires project setup. Dune — requires SQL knowledge, thirty-nine dollars a month. You need to write queries just to see basic metrics. There's a gap. No free, instant, visual analytics for Avalanche contracts."

**Block 3 — Solution: Overview (60 sec)**
"That's why we built AvaxLens. Paste any C-Chain contract address — get instant analytics. No signup. No API key. No setup. Here's Trader Joe — the biggest DEX on Avalanche. Total transactions — over 2 million. Success rate — ninety-seven percent. Unique callers — over 180,000 addresses. Transaction volume over time — switch periods instantly. Success versus fail breakdown — visual and clear."

**Block 4 — Deep Dive: Tabs (75 sec)**
"Let's dive deeper. Functions tab — every function decoded from the ABI. Top functions by call count, gas usage per function. Full breakdown with success rates. Callers tab — who's using this contract? Top callers ranked by activity, sortable table with last active time. Transactions tab — full paginated history. Filter by status, search by transaction hash. Errors tab — every revert reason decoded, grouped by error type."

**Block 5 — AI Audit (45 sec)**
"And now our standout feature — AI Security Audit. Instant security score — Trader Joe gets a B-plus, seventy-two out of a hundred. Every finding categorized by severity — critical, warning, info. Detailed descriptions with affected functions. Actionable recommendations. This typically costs five to fifty thousand dollars from professional auditors. We provide it free."

**Block 6 — Roadmap (40 sec)**
"What's next? Phase 1 — shipped. Everything you've seen is live today. Six tabs, fifteen features. Phase 2 — AI security for any verified contract, PostgreSQL for persistence. Phase 3 — multi-chain, Avalanche L1s and Subnets. Phase 4 — Pro tier, ten to twenty dollars a month. Live health monitoring — we check our APIs every thirty seconds. Free analytics today. AI-powered security tomorrow. Try it now — avaxlens.vercel.app."

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
- [ ] All nav links work (Compare, Use Cases, Roadmap)
- [ ] All 6 tabs work (Overview, Transactions, Functions, Errors, Callers, AI Audit)
- [ ] Period switching works (7d / 30d / 90d)
- [ ] Tx hash search works in Transactions tab
- [ ] AI Audit shows real data for Trader Joe
- [ ] Health indicator shows green dot in footer
- [ ] Clean browser (no extensions, no bookmarks)
- [ ] Microphone tested
- [ ] Screen recording software ready
