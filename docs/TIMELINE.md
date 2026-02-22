# AvaxLens — Build Games 2026 Timeline

> 6-недельный план разработки с учётом дедлайнов хакатона Avalanche Build Games 2026

---

## Дедлайны

| Дата | Deliverable |
|------|--------------|
| Feb 25 | Video pitch (2 min) + Idea |
| Mar 9 | MVP + Demo video |
| Mar 19 | Pitch deck + GTM Plan |
| Mar 26/27 | Final pitch (5 min) + demo |

---

## Week 1: Foundation (Feb 20-25)

> **Дедлайн: Feb 25 — 1st Deliverable**

### Goals
- Project setup
- Core UI skeleton
- Basic contract fetching
- **Video pitch (2 min)**

### Feb 20-21 (Thu-Fri): Setup
- [ ] Next.js 15 + Tailwind + TypeScript
- [ ] Tremor/Recharts для графиков
- [ ] Vercel deployment
- [ ] Домен (avaxlens.xyz или бесплатный)

### Feb 22-23 (Sat-Sun): Core Features
- [ ] Contract address input + validation
- [ ] Snowtrace API → ABI fetching
- [ ] Routescan API → transactions
- [ ] Basic overview: name, creation date, tx count

### Feb 24-25 (Mon-Tue): Polish + Video
- [ ] Loading states, error handling
- [ ] **Снять видео pitch (2 min):**
  - Problem: "Нет бесплатного инструмента для анализа контрактов Avalanche"
  - Solution: AvaxLens — paste address, get instant analytics
  - Why Avalanche: растущая экосистема, нет инструментов
  - Demo: показать работающий прототип

### Deliverable Feb 25
- [x] 2-minute video pitch
- [x] Idea definition (Problem + Solution)

---

## Week 2-3: MVP Build (Feb 26 - Mar 9)

> **Дедлайн: Mar 9 — 2nd Deliverable**

### Feb 26 - Mar 2 (Week 2)
**Transaction Analytics:**
- [ ] Volume chart (7d/30d) — Recharts area chart
- [ ] Success vs Failure trend
- [ ] Gas usage chart

**Function Breakdown:**
- [ ] Top functions by call count
- [ ] ABI decoding
- [ ] Function success rate

### Mar 3-5 (Week 2 cont.)
**Error Analysis:**
- [ ] Error log с decoded revert reasons
- [ ] Error frequency
- [ ] Error by function

**Caller Analytics:**
- [ ] Top callers
- [ ] Unique callers metric

### Mar 6-9 (Week 3)
**Polish:**
- [ ] Mobile responsive
- [ ] Loading skeletons
- [ ] Error states

**Production:**
- [ ] Deploy to Vercel
- [ ] Test with 10+ real contracts (Trader Joe, PNG, GMX)

**Demo Video:**
- [ ] Снять demo video (3-5 min)
- [ ] Показать работающий продукт

### Deliverable Mar 9
- [x] MVP (GitHub link)
- [x] Functional prototype
- [x] Demo video

---

## Week 4: Polish + GTM (Mar 10-19)

> **Дедлайн: Mar 19 — 3rd Deliverable**

### Mar 10-12
**Polish:**
- [ ] Dark mode
- [ ] Share links
- [ ] Export CSV

**Popular Contracts:**
- [ ] Pre-loaded top Avalanche contracts
- [ ] Quick access page

### Mar 13-16
**GTM Preparation:**
- [ ] Pitch deck creation
- [ ] Twitter/X presence (3-5 постов)
- [ ] Avalanche Discord outreach
- [ ] Developer documentation

### Mar 17-19
**Final Polish:**
- [ ] SEO setup
- [ ] FAQ page
- [ ] Feedback collection
- [ ] Iterate based on feedback

### Deliverable Mar 19
- [x] Pitch deck
- [x] GTM Plan
- [x] Final roadmap + docs

---

## Week 5-6: Finals (Mar 20-27)

> **Дедлайн: Mar 26/27 — Final Pitch**

### Mar 20-23
**Demo Preparation:**
- [ ] Demo script (5 min)
- [ ] Выбрать demo contract (Trader Joe / GMX)
- [ ] Backup video recording

**Practice:**
- [ ] Rehearsal 3-5 раз
- [ ] Timing check

### Mar 24-26
**Final Prep:**
- [ ] Bug fixes
- [ ] Performance check
- [ ] Backup plans

### Mar 26-27
**DEMO DAY**
- [ ] 5-minute pitch
- [ ] Live demo
- [ ] Q&A preparation

---

## Milestone Summary

| Дата | Milestone | Deliverable |
|------|-----------|-------------|
| Feb 25 | Foundation | 2-min video + idea |
| Mar 9 | MVP | Working prototype + demo |
| Mar 19 | GTM | Pitch deck + roadmap |
| Mar 26/27 | Finals | 5-min pitch + live demo |

---

## MVP (Minimum Viable Product)

### Core (обязательно)
- Contract address input
- Contract overview (name, date, tx count)
- Transaction volume chart (7d/30d)
- Top functions breakdown
- Production deployment

### Should Have
- Success/fail rate
- Gas analytics
- Error log
- Mobile responsive

### Nice to Have
- Dark mode
- Share links
- CSV export
- Popular contracts page

---

## If Running Behind

### Cut First
- Dark mode
- Share links
- Export
- Popular contracts
- Caller analytics

### Always Keep
- Contract input
- Overview page
- Volume chart
- Top functions
- Production deployment
- Working demo
