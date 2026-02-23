# AvaxLens — Pitch Script

> Scripts for 2-min video (Feb 25) and 5-min final pitch (Mar 26).
> Live demo: https://avaxlens.vercel.app/
> GitHub: https://github.com/devacc8/avaxlens

---

## 2-Minute Video Pitch (Feb 25)

Word-for-word script. Target: ~280 words at natural pace.

---

### HOOK (0:00 — 0:15)

> Every Avalanche developer asks the same questions:
> "Is my contract working? Who's calling it? Why are transactions failing?"
>
> Today, the answer is buried in raw transaction lists on the Explorer.
> There has to be a better way. And now there is.

### PROBLEM (0:15 — 0:40)

> Right now, if you deploy a smart contract on Avalanche,
> you have three options to understand what's happening:
>
> One — Snowtrace. Free, but it's just a raw list of transactions.
> No charts, no analytics, no patterns.
>
> Two — Tenderly. Powerful, but starts at forty-nine dollars a month,
> requires project setup, and limits you to a hundred thousand requests.
>
> Three — Dune. Requires SQL knowledge, costs thirty-nine dollars a month,
> and you need to write queries just to see basic metrics.
>
> There's a gap. No free, instant, visual analytics for Avalanche contracts.

### SOLUTION (0:40 — 1:10)

> That's AvaxLens.
>
> Paste any C-Chain contract address — get instant analytics.
> Transaction volume. Success rate. Gas usage.
> Function breakdown with ABI decoding. Error logs.
> All in a clean dashboard. No signup. No API key. Completely free.
>
> Let me show you.
>
> *(Screen: go to avaxlens.vercel.app, paste Trader Joe address)*
>
> Here's Trader Joe — the biggest DEX on Avalanche.
> In ten seconds we see: transaction volume over thirty days,
> success versus fail trends, top functions being called,
> and average gas usage. All decoded, all visual.
>
> Switch to seven days, ninety days — updates instantly.

### WHY AVALANCHE (1:10 — 1:30)

> Why build this on Avalanche?
> After Avalanche9000, there are over eighty L1s in the ecosystem.
> Developer tooling hasn't caught up.
> Every team deploying contracts needs analytics —
> and right now there's nothing free and instant.
> AvaxLens fills that gap.

### CLOSE (1:30 — 2:00)

> Free analytics today. AI-powered monitoring tomorrow.
>
> Our roadmap: AI-driven security scanning, anomaly detection
> when something unusual happens on your contract,
> and real-time alerts to Telegram and Discord.
>
> AvaxLens — understand your contract in ten seconds.
> Try it now at avaxlens.vercel.app.
>
> Built for Avalanche developers, by Avalanche developers.

---

## 5-Minute Final Pitch (Mar 26)

---

### Section 1: Problem (1 min)

> Avalanche processes over half a million transactions daily.
> But developers have no way to quickly understand their contracts.

**The Gap:**

| What exists | What's missing |
|-------------|---------------|
| Snowtrace — raw tx list | No charts, no patterns, no aggregation |
| Tenderly — $49/mo, 100k limit | Requires setup, not Avalanche-native |
| Dune — $39/mo, SQL required | Technical barrier, 500 queries/mo |

> Developers need answers to four simple questions:
> Is my contract active? Why are transactions failing?
> Who's using it? How much gas does it cost?
>
> Today, answering these takes hours of manual work or expensive subscriptions.

### Section 2: Solution + Live Demo (1.5 min)

> AvaxLens — paste an address, get instant analytics.

*(Live demo: avaxlens.vercel.app → Trader Joe)*

> Here's what we show in ten seconds:
> - Transaction volume trends — seven, thirty, or ninety days
> - Success and fail rate with visual breakdown
> - Top functions — ABI-decoded, sorted by call count
> - Gas usage patterns
> - Error logs with decoded revert reasons
> - Unique callers count
>
> Zero setup. Zero cost. Works with any verified C-Chain contract.

### Section 3: Competitive Advantage (1 min)

| Feature | AvaxLens | Snowtrace | Tenderly | Dune |
|---------|:--------:|:---------:|:--------:|:----:|
| Free | Yes | Yes | 100k/mo limit | 100 queries/mo |
| Instant | Yes | Yes | Setup required | SQL required |
| Visual analytics | Yes | No | Yes | Manual |
| Avalanche-native | Yes | Yes | Multi-chain | Multi-chain |
| No signup | Yes | Yes | No | No |
| ABI decoding | Yes | No | Yes | Manual |

> Our positioning: the only tool where you paste an Avalanche contract address
> and get instant visual analytics. Free.

**Why it wins for enterprise:**

| Concern | How we address it |
|---------|------------------|
| Financial risk | Read-only tool, no transactions, no keys |
| Easy to try | No signup, no API key, no project setup |
| Compliance | Public blockchain data, fully auditable |
| Data accuracy | Same APIs as Snowtrace Explorer |

### Section 4: AI Roadmap (30 sec)

> Free analytics today. AI-powered monitoring tomorrow.
>
> Phase 1 — where we are now — free instant analytics.
>
> Phase 2 — AI security scanning. We analyze ABI patterns
> and transaction behavior to flag potential vulnerabilities.
> Reentrancy patterns, abnormal gas spikes, suspicious call sequences.
>
> Phase 3 — anomaly detection and real-time alerts.
> Your contract gets a sudden spike in failed transactions?
> Gas usage doubles overnight? A new address starts making unusual calls?
> You get a Telegram or Discord alert immediately.
>
> Phase 4 — trader and protocol insights.
> For DEX contracts: token flow analysis, liquidity trends, top trading pairs.
> For lending protocols: utilization rates, liquidation risk patterns.

### Section 5: Business Model (30 sec)

> Free tier — always free. Unlimited contracts, basic analytics.
>
> Pro tier — ten to twenty dollars a month:
> - AI security scanning
> - Anomaly alerts (Telegram, Discord, email)
> - Extended history (90+ days)
> - API access
> - CSV/PNG export
>
> For context: Tenderly charges forty-nine dollars for similar features.
> Dune charges thirty-nine. We undercut both significantly.
>
> Target market: every developer and team on Avalanche.
> Revenue path: Avalanche Foundation grants + Pro subscriptions.

### Section 6: Roadmap (30 sec)

> What's done:
> - Full MVP deployed and live on Vercel
> - Contract analytics with ABI decoding
> - Charts, tables, period switching
> - Mobile responsive
>
> Next two weeks:
> - Functions tab, Callers tab, Transactions tab
> - Share and export features
> - OG images for social sharing
>
> Next month:
> - Backend with PostgreSQL
> - AI security scanning prototype
> - Anomaly detection MVP
>
> Three months:
> - Multi-chain (Avalanche L1s / Subnets)
> - Pro tier launch
> - Public API

### Section 7: Team (30 sec)

> **Alex** — Full-stack developer and product lead.
> Web3 dApp experience, production analytics dashboards,
> Next.js, React, TypeScript, Solidity.
>
> **Mark** — Research, product design, and go-to-market strategy.
> Market analysis, pitch development, UX design.
>
> We're a lean team that ships fast. The MVP was built and deployed
> in the first week of the hackathon.

### Section 8: Close (30 sec)

> AvaxLens — the missing analytics tool in the Avalanche ecosystem.
>
> Every developer deploying a contract needs this.
> Every competitor charges for this.
> We're building it free — with AI-powered features on the horizon.
>
> Try it now: avaxlens.vercel.app
> GitHub: github.com/devacc8/avaxlens
>
> Free analytics today. AI-powered monitoring tomorrow.
>
> Thank you.

---

## Key Soundbites

**For judges:**
- "We're filling the gap between raw explorer data and expensive tooling"
- "Zero setup, zero cost — just paste an address"
- "Free analytics today, AI-powered monitoring tomorrow"
- "Avalanche-native from day one"

**For Twitter/social:**
- "Understand your Avalanche contract in 10 seconds"
- "No signup. No SQL. No subscription. Just paste and go."
- "The free alternative to Tenderly and Dune — for Avalanche"

**For investors/grants:**
- "Every Avalanche developer is a potential user"
- "We undercut Tenderly ($49) and Dune ($39) at zero cost"
- "AI security scanning is the natural monetization path"

---

## Q&A Prep

### "Why not just use Tenderly?"
> Tenderly costs forty-nine dollars a month for Team plan with a hundred thousand request limit.
> It requires project setup and is multi-chain — not optimized for Avalanche.
> We're free, instant, and Avalanche-native. Different use case:
> Tenderly is for debugging specific transactions. We're for understanding your contract at a glance.

### "Why not Dune?"
> Dune costs thirty-nine dollars a month, requires SQL knowledge,
> and limits you to five hundred queries per month on Team plan.
> We're visual, instant, and require zero technical setup.
> Dune is for analysts writing custom queries. We're for developers who need answers now.

### "How do you make money?"
> Free tier always available — that's our growth engine.
> Pro tier at ten to twenty dollars a month for AI scanning, alerts, extended history, and API access.
> Also targeting Avalanche Foundation grants and Retro9000 program.

### "What about AI features — when and how?"
> Phase 2 after the hackathon. We'll use pattern matching on ABI and transaction data
> to detect common vulnerability patterns and anomalies.
> This is the natural evolution: you understand your contract with analytics,
> then you protect it with AI monitoring.

### "What if APIs shut down?"
> Routescan and Snowtrace are core Avalanche ecosystem tools.
> Fallback plan: direct RPC parsing from Avalanche nodes.
> We can also self-host our own indexer with PostgreSQL.

### "Why Avalanche specifically?"
> Growing ecosystem — eighty-plus L1s after Avalanche9000.
> Developer tooling gap is real and underserved.
> Sub-second finality makes real-time analytics meaningful.
> And the community is developer-focused and supportive.

### "What if the data is wrong?"
> We pull directly from Routescan and Snowtrace — the same data Snowtrace Explorer uses.
> Users can cross-reference any number on the Explorer. Full transparency.

### "Is this safe for enterprise use?"
> AvaxLens is read-only. No wallet connections, no transactions, no private keys.
> Zero financial risk. We make public blockchain data easier to understand.

### "What about privacy/compliance?"
> All data comes from the public Avalanche blockchain via official APIs.
> No private data, no KYC, no user tracking. Fully transparent and auditable.

### "How is this different from building a Dune dashboard?"
> Three things: zero SQL knowledge needed, instant results (no query writing),
> and it's free without limits. Dune is powerful for custom analysis.
> We're for the eighty percent of developers who just want to see what's happening.

---

## Demo Script (for video recording)

Steps to show on screen:

1. Open avaxlens.vercel.app — show landing page (2 sec)
2. Click "Trader Joe" from popular contracts OR paste address (3 sec)
3. Dashboard loads — pause on metric cards (3 sec)
4. Scroll to volume chart — point out the trend (3 sec)
5. Show success/fail chart (2 sec)
6. Scroll to functions table (3 sec)
7. Click "7d" period — show data updates (2 sec)
8. Click "90d" — show extended range (2 sec)
9. Click Errors tab — show error data (2 sec)

Total screen time: ~22 seconds. Leaves room for voiceover overlap.

**Tip:** Record screen first, then record voiceover separately. Easier to sync and re-record.
