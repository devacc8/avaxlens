# AvaxLens — Developer Tasks

> UI/UX bug fixes and improvements tracker.

---

## Completed (v0.3.5)

- [x] Compare table horizontal scroll on mobile (`overflow-x-auto`)
- [x] Top Functions table horizontal scroll on mobile (`overflow-x-auto`)
- [x] Sort select color — changed to `text-white` for readability
- [x] Chart hover highlight removed — `cursor={false}`, `activeDot={false}`, tooltip only
- [x] Error names truncated with `truncate` + `title` attribute for full text on hover
- [x] GitHub link moved from Header to Footer (SVG icon)
- [x] Active page highlight in Header navigation (`usePathname`)

---

## Backlog

- [ ] Error names: add expandable row on tap for mobile (currently truncated)
- [ ] Status indicator: health check endpoint (`/api/health`) with real API monitoring
- [ ] Empty state for contracts with zero transactions
- [ ] Shareable dashboard URLs with period param
- [ ] Export analytics as CSV
- [ ] Export charts as PNG
