# IBD-0029 — Element-Visibility Rules (when each UI element/control is visible / appears / hidden)
**tags:** [ibd, ux-ui, element-visibility, controls, responsive, tier-permission, parked-raw, dynamic-menu]
**Status:** PARKED-RAW (Governor 2026-07-21 — "park to define when elements must be visible and when appear when")
**source:** GOVERNOR | **trust_tier:** GOVERNOR

## The parked task (verbatim intent)
The Governor wants a definition of **WHEN each UI element/control is VISIBLE, when it APPEARS (on demand/hover), and when
it is NOT AVAILABLE** — across contexts. Trigger: the schema-page row control bar (`+ x ↑ ↓ →move-to comment pin attach
MD PDF` — see screenshot) should be VISIBLE, but there must be a defined rule set for element visibility, not ad-hoc.

## Scope to define later (deep-processing)
A visibility RULE MODEL for every UI element/control, keyed by:
1. **Tier / permission** (Ring 0 Governor / Ring 1 internal / Ring 2 external-dev / Ring 3 external-user) — who sees what.
2. **Responsive breakpoint** (desktop / tablet / mobile) — visible · under a "more" menu · not-available.
3. **Context / state** (row vs group vs sub-group; hover-reveal vs always-on; edit-mode vs read-mode).
Directly connects to `frontend/pages/dynamic-menu.html` (the DRAFT surface where these rules get defined) — that page is
the presentation; THIS is the underlying rule model to define. Governor to differentiate the currently-uniform DRAFT reading.

## Immediate (already done)
The row control bar IS visible on schema.html + uxui.html + gallery.html + dynamic-menu.html (all preview pages). The
RULE-MODEL definition (this IBD) is the deep-processing follow-on.

## Routes to
dynamic-menu.html (presentation) · CS-FRONTEND-001 (FE-invariants — a future FE-visibility invariant) · CS-COMMS Ring model (tier permissions).
