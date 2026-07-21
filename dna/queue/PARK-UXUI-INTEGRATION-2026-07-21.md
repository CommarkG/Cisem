---
tags: [park, queue, ux-ui, integration, deep-dive, awaiting-governor-content]
Type: QUEUE | Sub_type: PARK
Status: PARKED — awaiting MORE Governor content ("i have more content") + a Governor decision on scope
Priority: HIGH (governance-shaping) · essential: pending · timeframe: this UX/UI arc · depends-on: incoming Governor content
Registered: 2026-07-21 (Opus, per Principle 21 — a deferral is legitimate ONLY as a registered park, not a vague "later")
---

# PARK-UXUI-INTEGRATION — the UX/UI knowledge deep-dive (parked, full context)

**Why parked, not processed now:** The Governor explicitly said *"take a deep breath and you can park things and swift them.. i have more content."* SWIFT-safe-significant done NOW = KL-0002 saved + universal principles presented + branch map (this turn). The DEEP integration below waits for the rest of his content + his scope decision — processing it now would be presumptuous (consensus-before-creation) and would churn before the full input lands (anti-scatter, §2 Principle 16).

## SWIFTED THIS TURN (zero-blast, already done)
1. Saved the Brain UX/UI doc verbatim → `dna/knowledge-library/KL-0002-brain-ux-ui-principles-2026-07-21.md` (indexed KL-0002).
2. Presented (in chat) the **media-independent universal UX/UI core** extracted from it.
3. Presented (in chat) the **branch arrangement** of the rest (the implementation-specific content sorted into UX/UI branches).

## PARKED — deep work awaiting Governor content + decision

### P0 — SCOPE / HOME decision (blocks any ratification; Haiku's item 1, and doc §13)
The Brain doc + Haiku both surface the ONE blocking question: **does this become a ratified artifact, and where does it live?**
- Option A: ENHANCE `CS-FRONTEND-001` (A8 — its FE-I14 user-shoes review ALREADY mirrors the doc's §7.1; the universal core could become FE-I15..FE-In or a "UX principles" sub-doc under CS-FRONTEND-001). **Opus lean: A** — no fork, converges into the existing home (matches last session's reconciliation of CS-UX-UI-001 → CS-FRONTEND-001).
- Option B: NEW sibling corespine `CS-UX-UI-001` (only if the universal, media-independent scope is judged BROADER than "frontend/web" — e.g. it governs voice/print/embedded too, which "regardless of media type" hints at).
- The tension: CS-FRONTEND-001 is scoped "web/frontend"; the universal principles are explicitly media-INDEPENDENT. That may justify a small media-neutral principles home that CS-FRONTEND-001 (web) inherits FROM. **This is exactly the Governor's schema-organization question from last session ("help me organize it in the schema").** Decide WITH his incoming content.
- Until decided: KL-0002 stays `NOT-YET-RATIFIED`; the doc's own self-label `CS-UXUI-001` is REJECTED as premature (an external doc can't self-ratify — matches the doc's own §1.1 stance).

### P1 — Haiku's actionability enhancements (make the doc mechanical, not aspirational)
- **Walkthrough METHOD** (Haiku item 2): cold-read solo / peer walkthrough / real-user trace — turn "review in the user's shoes" into a defined, runnable method. Candidate: a lens in the `cisem-frontend` wizard + a `functional-check` companion (honest limit: legibility can't be jsdom-scored — FE-I14 already states this).
- **Prevention & Priority roadmap** (Haiku item 3): one consolidated table tying Incidents 1–5 → GAP-01..09 → prevention → priority → effort. Converts history into standing discipline.

### P2 — closes gaps
- **Responsive / mobile patterns** (Haiku item 4; doc §13): FE-I6/I7 already mandate 320px + touch targets — reconcile the doc's §4.6 single-row-above-preview against FE-I6/I7 (it does NOT hold at 375px). Either add breakpoints or explicitly descope. **Ripple: this touches the dynamic-menu page's pending tier/responsive differentiation (still open from last session).**
- **Ratification & change discipline** (Haiku item 5) + **Success metrics / definition-of-done** (Haiku item 6): fold into CS-FRONTEND-001 governance once the home is decided.

### P3 — refinement
- **Cognitive-load principle** (Haiku item 7): promote §7.2.H from an edge-case into a standing copy/tone rule (§5). Low effort.

## RIPPLES (previously deep-thought decisions this touches — respect, don't override)
- **FE-I14** (CS-FRONTEND-001) — already IS the user-shoes review; the doc's §7.1 is its source thought. Do NOT create a duplicate.
- **FE-I11/I12/I13** — already cover presence≠behavior, controls-on-one-line, measured contrast. The doc's §6/§8/§11 are evidence FOR these, not new invariants.
- **`cisem-frontend` wizard** (PROVISIONAL) — the doc's §7/§8 checklists are candidate wizard steps; wizard is awaiting Governor ratification + divergent trials (Principle 15).
- **Last session's open items** — the 3 preview pages, dynamic-menu differentiation, wizard ratification (all in WITNESS COMPACT STATE) intersect P2's responsive work.

## UPDATE 2026-07-21 (Brain final batch arrived — KL-0003 + consultation sent)
The Governor's "more content" = the full Brain batch (6 mockups + incident log + Admin 6-issue review + self-reflection +
stale Sonnet one-click). Saved as **[[KL-0003]]**; outbound consult drafted at
`dna/external-review/brain-consultation-uxui-2026-07-21.md` (reuses the feedback-packet format + ARCH-00150 §8).
**The P0 HOME decision is now SHARPER — it is a TWO-WORLDS question, blocked on Brain's answer:**
- **World A** = Brain's "CISEM Build" customer product (onboarding→CRM→admin, outward-facing/T-DOM) — reality-status UNKNOWN (real product? or SIMULATION-ONLY like SOL-GIFTPRO-001?). NOT in the repo.
- **World B** = CISEM's own governance frontend (schema browser, T-SYS, CS-FRONTEND-001).
- **Opus lean:** a small **media-neutral universal-principles core** that BOTH worlds inherit; CS-FRONTEND-001 stays World B's home; "CISEM Build" gets its own status ruling (A9 optimal-synergy, no fork). CANNOT finalize until Brain answers §4 Q1–Q4 (consensus-before-creation).
**New sub-parks:** (a) formalize the 5-axis input-tag model (incl. the NEW `alignment` axis) registry-wide — Governor PCR pending; (b) token-drift finding (Brain schema-mockup uses pre-fix broken tokens) = evidence for the shared-SSOT decision.

## RESUME
When the Governor's remaining content arrives: read it FIRST, re-rank against these parked items (anti-scatter), then take the P0 scope decision WITH him (consensus-before-creation) before any FE-invariant / corespine creation (A4 — needs a ratified plan; the /cisem-plan wizard is the path). **Next external step: send the Brain consultation packet, get §4 answers, THEN /cisem-plan the convergence.**
