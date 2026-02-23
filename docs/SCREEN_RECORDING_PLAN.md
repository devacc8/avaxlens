# Screen Recording Plan — 2-Min Video (Feb 25)

> Record screen and voice SEPARATELY, then sync in editor.
> Total screen time: ~2:00. Record a few extra seconds at each step for editing flexibility.

---

## Setup Before Recording

- Browser: Chrome, clean profile (no bookmarks bar, no extensions visible)
- Window: 1920x1080 or 1280x720, maximized
- Tab: only avaxlens.vercel.app, no other tabs
- Dark mode OS (matches the app)
- Mouse cursor: large, visible
- Have Trader Joe address ready in clipboard: `0x60aE616a2155Ee3d9A68541Ba4544862310933d4`

---

## Block-by-Block Scenario

### Block 1: HOOK — Landing Page (0:00 — 0:15)

| | Details |
|---|---|
| **Screen** | avaxlens.vercel.app — landing page visible, search bar in center |
| **Duration** | ~15 sec |
| **Mouse** | Idle on the page. Slow scroll down slightly to show the full hero section, then back up |
| **Audio** | *"Every Avalanche developer asks the same questions: Is my contract working? Who's calling it? Why are transactions failing? Today, the answer is buried in raw transaction lists on the Explorer. There has to be a better way. And now there is."* |

---

### Block 2: PROBLEM — Show Competitors (0:15 — 0:40)

| | Details |
|---|---|
| **Screen** | Navigate to `/compare` page (click "Compare" in header nav) |
| **Duration** | ~25 sec |
| **Mouse** | (0:15) Click "Compare" in header. Page loads. (0:18) Slowly move cursor down the comparison table — hover over Snowtrace column (all X marks), then Tenderly ($49), then Dune ($39). (0:30) Scroll to pricing cards. Hover over Tenderly $49 card, then Dune $39 card, then pause on AvaxLens $0 card |
| **Audio** | *"Right now, if you deploy a smart contract on Avalanche, you have three options. One — Snowtrace. Free, but just a raw list of transactions. No charts, no analytics. Two — Tenderly. Powerful, but forty-nine dollars a month. Three — Dune. Requires SQL, thirty-nine dollars a month. There's a gap. No free, instant, visual analytics for Avalanche contracts."* |

---

### Block 3: SOLUTION — Paste Address + Dashboard (0:40 — 1:10)

| | Details |
|---|---|
| **Screen** | Navigate back to home (`/`), paste Trader Joe address, show dashboard |
| **Duration** | ~30 sec |
| **Step-by-step** | See below |

**Detailed mouse actions:**

| Time | Action |
|------|--------|
| 0:40 | Click AVAXLENS logo in header → lands on home page |
| 0:42 | Click into search input field |
| 0:43 | Paste Trader Joe address (Ctrl+V) — address appears in input |
| 0:45 | Press Enter or click Search → loading skeleton appears briefly → dashboard loads |
| 0:48 | Dashboard is visible. Pause. Mouse moves slowly over metric cards: Total Txs, Success Rate, Unique Callers, Avg Gas |
| 0:52 | Scroll down to Volume Chart. Pause 2 sec. Mouse traces the chart trend line |
| 0:55 | Scroll to Success/Fail Chart. Pause 2 sec. Mouse highlights the avg summary below it |
| 0:58 | Scroll to Top Functions table. Mouse moves down the rows — highlight function names, call counts, Avg Gas column |
| 1:02 | Scroll back up to period selector. Click "7d" — data reloads with loading overlay |
| 1:05 | Data updates. Click "90d" — data reloads again |
| 1:08 | Click "Errors" tab. Error summary cards appear (Total Errors, Error Rate), then error table below |
| 1:10 | Pause on errors view |

| **Audio** | *"That's AvaxLens. Paste any C-Chain contract address — get instant analytics. Transaction volume. Success rate. Gas usage. Function breakdown with ABI decoding. Error logs with decoded revert reasons. All in a clean dashboard. No signup. No API key. Completely free. Let me show you. Here's Trader Joe — the biggest DEX on Avalanche. In ten seconds we see: transaction volume over thirty days, success versus fail trends, top functions sorted by calls, average gas per function, and decoded error logs. Switch to seven days, ninety days — updates instantly."* |

---

### Block 4: WHY AVALANCHE (1:10 — 1:30)

| | Details |
|---|---|
| **Screen** | Stay on dashboard, then navigate to `/use-cases` |
| **Duration** | ~20 sec |
| **Mouse** | (1:10) Still on Errors tab — pause 2 sec. (1:12) Click "Use Cases" in header nav. (1:14) Page loads. Slow scroll down through the 4 use case sections. Mouse highlights "Live" badges on Error Investigation, Protocol Monitoring, Gas Optimization. (1:25) Pause on AI Security Scan section — mouse circles the "Coming Soon" badge and the security score mockup |
| **Audio** | *"Why build this on Avalanche? After Avalanche9000, there are over eighty L1s in the ecosystem. Developer tooling hasn't caught up. Every team deploying contracts needs analytics — and right now there's nothing free and instant. AvaxLens fills that gap."* |

---

### Block 5: CLOSE — Roadmap + CTA (1:30 — 2:00)

| | Details |
|---|---|
| **Screen** | Navigate to `/roadmap`, then back to home |
| **Duration** | ~30 sec |
| **Step-by-step** | See below |

**Detailed mouse actions:**

| Time | Action |
|------|--------|
| 1:30 | Click "Roadmap" in header nav |
| 1:32 | Page loads. Scroll down the timeline slowly. Mouse highlights Phase 1 "Shipped" badge (green) |
| 1:36 | Scroll to Phase 2 "AI Security" — mouse circles "Planned" badge. Pause 3 sec |
| 1:40 | Scroll to Phase 3 "Multi-Chain" and Phase 4 "Pro Tier" — brief pause on each |
| 1:45 | Click AVAXLENS logo → back to home page |
| 1:47 | Home page visible with search bar. Mouse moves to search input, cursor blinks |
| 1:50 | Pause — let the landing page breathe for the final words |
| 2:00 | End |

| **Audio** | *"Free analytics today. AI-powered monitoring tomorrow. Our roadmap: AI-driven security scanning with risk scoring, anomaly detection when something unusual happens on your contract, and real-time alerts to Telegram and Discord. We've already built real use cases — error investigation, gas optimization, protocol monitoring — all live and working. AvaxLens — understand your contract in ten seconds. Try it now at avaxlens.vercel.app. Built for Avalanche developers, by Avalanche developers."* |

---

## Recording Tips

### Screen Recording
- Use OBS Studio (free) or built-in Windows Game Bar (Win+G)
- Resolution: 1920x1080 at 30fps minimum
- Record at 1.0x speed — do NOT speed up
- Do each block 2-3 times and pick the best take
- Leave 2-3 sec pause between blocks for editing cuts
- Smooth, deliberate mouse movements — no jittery fast clicks
- If a page takes long to load, re-record that block

### Voice Recording
- Quiet room, no background noise
- Use a headset mic or phone voice recorder — close to mouth
- Speak at natural pace, slightly slower than conversation
- Record each block separately as its own audio file
- Label files: `01_hook.mp3`, `02_problem.mp3`, etc.
- Re-record any section that feels rushed

### Editing
- Import all screen blocks and audio blocks into editor
- Sync audio to screen — the screen actions should match what you're saying
- Add subtle transitions between blocks (0.5 sec crossfade)
- No intro/outro animation needed — jump straight into content
- Add subtle background music (optional, very low volume) — lo-fi or ambient
- Export: 1080p MP4, H.264

### Software Options
- **Free editors:** DaVinci Resolve, CapCut Desktop, Shotcut
- **Quick option:** CapCut (easiest for beginners, drag-and-drop timeline)

---

## Checklist Before Recording

- [ ] Open avaxlens.vercel.app — verify site is up and fast
- [ ] Test Trader Joe address loads correctly
- [ ] Test all nav links work: Use Cases, Roadmap, Compare
- [ ] Test period switching (30d → 7d → 90d) works
- [ ] Test Errors tab loads data
- [ ] Clean browser: no bookmarks bar, no extensions, no notifications
- [ ] Close all other apps (no popups during recording)
- [ ] Trader Joe address in clipboard
- [ ] Microphone tested and volume adjusted
- [ ] Screen recording software tested (OBS / Game Bar)

---

## File Naming Convention

```
screen/
  01_landing.mp4
  02_compare.mp4
  03_dashboard.mp4
  04_usecases.mp4
  05_roadmap_close.mp4

audio/
  01_hook.mp3
  02_problem.mp3
  03_solution.mp3
  04_why_avalanche.mp3
  05_close.mp3

final/
  avaxlens_pitch_2min_v1.mp4
```
