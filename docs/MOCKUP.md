# AvaxLens — UI Mockup

> Визуальный дизайн основных страниц (реализованные страницы)

---

## Страница 1: Home / Landing

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AVAXLENS     [Use Cases] [Roadmap] [Compare] [GitHub]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    Understand your contract                                  │
│                         in 10 seconds                                       │
│                                                                             │
│         ┌─────────────────────────────────────────────────────────┐          │
│         │  Paste any Avalanche C-Chain contract address         │          │
│         │                                                         │          │
│         │  0x........................................            │          │
│         │                                                         │          │
│         │              [ Analyze Contract ]                       │          │
│         └─────────────────────────────────────────────────────────┘          │
│                                                                             │
│    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐               │
│    │   Instant    │    │   No Signup  │    │    Free      │               │
│    │  Analytics   │    │ No API Key   │    │  Forever     │               │
│    └──────────────┘    └──────────────┘    └──────────────┘               │
│                                                                             │
│    Popular Contracts                                                       │
│    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                        │
│    │Trader Joe│ │ Pangolin│ │   GMX   │ │  Benqi  │                        │
│    │   DEX   │ │   DEX   │ │Perpetual │ │ Lending │                        │
│    └─────────┘ └─────────┘ └─────────┘ └─────────┘                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ● Online  v0.1.0  — Understand your contract in 10 seconds               │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Цвета:**
- Background: `#0D0D0D` (почти чёрный)
- Primary: `#E84142` (Avalanche red)
- Secondary: `#5E5CE6` (Accent purple)
- Text: `#FFFFFF`, `#A0A0A0`
- Card bg: `#1A1A1A`

**Шрифт:** Inter

---

## Страница 2: Contract Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AVAXLENS     [Use Cases] [Roadmap] [Compare] [GitHub]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  0x60aE...9334                                              [📋 Copy]      │
│  Trader Joe Router   [✓ Verified]  [🔍 Snowtrace]  Created: Jan 15, 2024 │
│                                        ┌─────────────────────────────┐       │
│                                        │ Paste contract address...  │       │
│                                        │ [Analyze]                 │       │
│                                        └─────────────────────────────┘       │
│                                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │ Total Txs   │ │Success Rate │ │Unique Callers│ │  Avg Gas   │          │
│  │  2,847,392 │ │   94.2%    │ │   124,591   │ │  142,300   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                                             │
│  [Overview] [Transactions] [Functions] [Errors] [Callers]    [7d][30d][90d]│
│                                                                             │
│  Transaction Volume                    Success / Fail Trend                 │
│  ┌───────────────────────────────┐    ┌───────────────────────────┐       │
│  │                      1.2M     │    │     ██████░░░░░░         │       │
│  │        ╭──╮                  │    │     ██████░░░░░░         │       │
│  │  ╭────╯  ╰────╮             │    │     ██████░░░░░░         │       │
│  │──╯          ╰────╮───→      │    │     ██████░░░░░░         │       │
│  │                    │        │    │     ██████░░░░░░         │       │
│  │              0              │    │              0            │       │
│  └───────────────────────────────┘    └───────────────────────────┘       │
│   Jan 1   Jan 8   Jan 15   Jan 22       Jan 1   Jan 8   Jan 15          │
│                                                                             │
│  Top Functions                                            [Sort ▼]        │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Function           │  Calls   │   %    │ Success │  Avg Gas  │      │
│  ├────────────────────┼──────────┼────────┼─────────┼──────────┤      │
│  │ swap(...)          │  4,201   │  32.1% │  97.2%  │  185,000 │      │
│  │ addLiquidity(...) │  2,100   │  16.0% │  99.1%  │  250,000 │      │
│  │ removeLiquidity()  │  1,803   │  13.8% │  98.5%  │  210,000 │      │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ● Online  v0.1.0  — Understand your contract in 10 seconds               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Страница 3: Errors Tab

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AVAXLENS     [Use Cases] [Roadmap] [Compare] [GitHub]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  0x60aE...9334                                              [📋 Copy]      │
│  Trader Joe Router   [✓ Verified]  [🔍 Snowtrace]  Created: Jan 15, 2024 │
│                                        ┌─────────────────────────────┐       │
│                                        │ Paste contract address...  │       │
│                                        │ [Analyze]                 │       │
│                                        └─────────────────────────────┘       │
│                                                                             │
│  [Overview] [Transactions] [Functions] [Errors] [Callers]    [7d][30d][90d]│
│                                                                             │
│  Error Summary                                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                          │
│  │ Total Errors│ │ Error Rate  │ │Most Common  │                          │
│  │   167,432  │ │    5.8%     │ │Insufficient │                          │
│  └─────────────┘ └─────────────┘ └─────────────┘                          │
│                                                                             │
│  Error Log                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Error                    │ Count   │ Last Seen  │ Function        │    │
│  ├──────────────────────────┼─────────┼────────────┼─────────────────┤    │
│  │ InsufficientTokenBalance │ 45,231  │ Jan 29     │ swap()          │    │
│  │ Expired                  │ 32,104  │ Jan 29     │ addLiquidity() │    │
│  │ SlippageTooHigh         │ 28,891  │ Jan 28     │ swap()          │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ● Online  v0.1.0  — Understand your contract in 10 seconds               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Страница 4: Compare

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AVAXLENS     [Use Cases] [Roadmap] [Compare] [GitHub]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    How AvaxLens Compares                                    │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Feature          │ AvaxLens │ Snowtrace │ Tenderly │ Dune         │    │
│  ├──────────────────┼──────────┼───────────┼──────────┼──────────────┤    │
│  │ Free tier        │    ✓     │     ✓     │    ✗     │     ✗        │    │
│  │ Instant analytics│    ✓     │     ✗     │    ✗     │     ✗        │    │
│  │ Visual dashboards│    ✓     │     ✗     │    ✓     │    Manual    │    │
│  │ ABI decoding     │    ✓     │     ✗     │    ✓     │    Manual    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                         (scrollable on mobile)                              │
│                                                                             │
│                              Pricing                                        │
│    ┌───────────┐    ┌───────────┐    ┌───────────┐                         │
│    │ AvaxLens  │    │ Tenderly  │    │   Dune    │                         │
│    │    $0     │    │   $49/mo  │    │  $39/mo   │                         │
│    │ forever   │    │           │    │           │                         │
│    └───────────┘    └───────────┘    └───────────┘                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ● Online  v0.1.0  — Understand your contract in 10 seconds               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Страница 5: Roadmap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AVAXLENS     [Use Cases] [Roadmap] [Compare] [GitHub]                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    Product Roadmap                                          │
│                                                                             │
│       ●                                                                   │
│       │                                                                   │
│    ┌──┴──┐  Phase 1: Analytics MVP        [✓ Shipped]                    │
│    │  1  │  • Transaction volume charts                                  │
│    └──┬──┘  • Success/fail rate breakdown                                 │
│       │    • ABI-decoded function breakdown                               │
│       ●    • Error log with revert reasons                                 │
│       │                                                                   │
│    ┌──┴──┐  Phase 2: AI Security          [Planned]                       │
│    │  2  │  • AI-powered vulnerability detection                         │
│    └──┬──┘  • Risk scoring                                            │
│       │    • Anomaly detection                                           │
│       ●    • MCP server                                                   │
│       │                                                                   │
│    ┌──┴──┐  Phase 3: Multi-Chain           [Future]                        │
│    │  3  │  • Subnet support                                         │
│    └──┬──┘  • Cross-chain comparison                                     │
│       │                                                                   │
│       ●    Phase 4: Pro Tier               [Future]                        │
│    ┌──┴──┐  • $10-20/mo                                             │
│    │  4  │  • Team plans                                              │
│    └──┘    • API access                                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ● Online  v0.1.0  — Understand your contract in 10 seconds               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Статусы табов

| Tab | Статус | Описание |
|-----|--------|----------|
| Overview | ✅ Работает | Charts + Functions table |
| Transactions | ⏳ Coming Soon | Detailed transaction list |
| Functions | ⏳ Coming Soon | Function breakdown with trends |
| Errors | ✅ Работает | Error summary + table |
| Callers | ⏳ Coming Soon | Top callers |

---

## Компоненты

### Header
- Logo: AVAXLENS (gradient red)
- Nav: Use Cases | Roadmap | Compare | GitHub
- Active page: white text, inactive: gray

### Footer
- Status indicator: green dot + "Online"
- Version: v0.1.0
- Tagline: "Understand your contract in 10 seconds"

### Metric Cards
- Total Transactions (white)
- Success Rate (green)
- Unique Callers (white)
- Avg Gas Used (white)

### Period Selector
- Buttons: 7d | 30d | 90d
- Active: red background
- Inactive: gray background

### Sort Dropdown
- Options: Sort by Calls | Sort by Success Rate | Sort by Gas

---

## Responsive

### Mobile (< 768px)
- Header: hamburger menu
- Metric cards: 1 column (2 on tablet)
- Tables: horizontal scroll
- Charts: fit to width
- Tabs: wrap to 2 lines

---

## Summary

- **Home:** Hero + Feature badges + Popular Contracts
- **Dashboard:** ContractHeader + 4 MetricCards + 5 Tabs + Period selector
- **Compare:** Feature table + Pricing cards
- **Roadmap:** Timeline with 4 phases
- **Footer:** Status indicator + version + tagline
- **Colors:** Avalanche red (#E84142) accent, dark-first design
