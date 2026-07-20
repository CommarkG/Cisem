# CISEM Definition of DONE — SSOT
**Governed by:** CS-CREATION-001 | **Wired by:** `dna/checks/plan-audit.sh` [DOD] check (WARN-only)

The consolidated definition of DONE — referenced, never re-derived; the `[DOD]` check flags
misses; "produced" alone is never done.

1. **PRODUCED** — the artifact exists.
2. **WIRED** — a running mechanism (plan-audit check / git hook / CAL hook / gate) enforces it
   — OR an honest `NOT-YET-WIRED:<reason>` tag.
3. **PROPAGATED** — applied to ALL its homes (axiom / protocol / wizard / persona / check) — OR
   tagged.
4. **HOOKED** — CAL / .git-hook / session hook updated if it is an enforcement mechanism — OR
   tagged N/A.
5. **ROOT-INSIGHT** — if this was a found-wrong→improved event, the insight is extracted +
   parked in root-insights.yaml (RIPL) — OR tagged N/A.
6. **COMMITTED + PUSHED** — 0 unpushed (zero-laptop-dependency).
7. **VERIFIED** — evidence cited (I22), not asserted.
