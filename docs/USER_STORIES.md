# User Stories & Use Cases

---

## User Stories

### As a DeFi developer, I want to...
- **...quickly check if my smart contract is being used** so I know if it's deployed and working
- **...see transaction volume trends** so I can understand usage patterns over time
- **...identify why transactions are failing** so I can fix bugs in my contract
- **...know which functions are most called** so I can optimize gas usage
- **...see who's interacting with my contract** so I can understand my user base

### As a protocol team, I want to...
- **...monitor our main contracts daily** so we can track health metrics
- **...share analytics with stakeholders** so they can see protocol usage
- **...compare different time periods** so we can measure growth
- **...quickly check competitor contracts** so we can benchmark

### As an auditor, I want to...
- **...see all error types and their frequency** so I can identify vulnerable functions
- **...understand call patterns** so I can map contract interactions
- **...get quick overview before deep dive** so I can prioritize review areas

### As a trader/investor, I want to...
- **...check if a contract is active** before interacting with it
- **...see success rate** so I can assess risk
- **...understand usage trends** so I can make informed decisions

---

## Use Cases

### UC-001: Quick Contract Check
**Actor:** DeFi Developer
**Trigger:** Developer deployed new contract, wants to verify it's working
**Flow:**
1. Paste contract address on home page
2. See transaction count, success rate immediately
3. Verify contract is receiving calls

**Success:** Shows live/inactive status within 5 seconds

---

### UC-002: Usage Analysis
**Actor:** Protocol Team
**Trigger:** Weekly review of protocol health
**Flow:**
1. Open dashboard for main contract
2. Select 30d or 90d period
3. Review transaction volume chart
4. Check top functions table
5. Export metrics if needed

**Success:** Can view complete usage picture in under 1 minute

---

### UC-003: Error Investigation
**Actor:** DeFi Developer
**Trigger:** Noticed spike in failed transactions
**Flow:**
1. Navigate to Errors tab
2. See error distribution pie/bar chart
3. Click on specific error type
4. View affected functions
5. Check transaction examples

**Success:** Can identify root cause within 5 minutes

---

### UC-004: Competitor Research
**Actor:** Protocol Team
**Trigger:** Researching competing protocol
**Flow:**
1. Paste competitor's contract address
2. View all metrics without signup
3. Compare volumes, functions, errors
4. Share link with team

**Success:** Can analyze competitor with zero friction

---

### UC-005: Gas Optimization
**Actor:** DeFi Developer
**Trigger:** Optimizing contract for lower gas costs
**Flow:**
1. Open Functions tab
2. Sort by avg gas usage
3. Identify expensive functions
4. Compare with similar protocols

**Success:** Can see gas breakdown per function

---

### UC-006: Share Dashboard
**Actor:** Any user
**Trigger:** Want to share contract analytics
**Flow:**
1. Copy address using copy button next to address
2. Share URL with address param

**Success:** Recipient sees same contract data

---

## Technical Notes

- No authentication required for basic usage
- Data sourced from public Avalanche APIs (Snowtrace/Routescan)
- Real-time: < 5 second load time
- Mobile-responsive for on-the-go checks
