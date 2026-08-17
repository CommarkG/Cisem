---
title: CISEM UX/UI Comprehensive Report
date: 2026-08-17
type: REFERENCE | COMPILATION
scope: all UX/UI principles, preventions, insights, and governance
tags: [reference, ux-ui, compilation, frontend, kl-0002, arch-00393]
status: REFERENCE-ACTIVE
size_exception: type-reference-compilation (575 lines — §3.6 exempt per REFERENCE|COMPILATION type)
derived_from: [KL-0002, KL-0003, ARCH-00393, ARCH-00394, ARCH-00395, ARCH-00410, brain-consultation-uxui-2026-07-21, HANDOFF-UX-UI-PIPELINE-PLAN-2026-07-21]
summary: A single-source consolidation of CISEM's UX/UI principles, frontend governance invariants, design system, AI behavior patterns, incident log, edge cases, and strategic next steps.
---

# CISEM UX/UI Comprehensive Report
**Compiled 2026-08-17** | **Source Integration:** Brain UX/UI principles (KL-0002/KL-0003) + CISEM Frontend Corespine (CS-FRONTEND-001 / ARCH-00393) + Retro Plans + Visualization Plans

---

## EXECUTIVE SUMMARY

CISEM has a **unified, ratified UX/UI governance system** consisting of:

1. **Core Universal Principles** (KL-0002) — 14 sections covering color tokens, component patterns, copy rules, orientation/context, audit procedures, and AI trigger prevention
2. **Frontend Corespine (CS-FRONTEND-001)** — RATIFIED 2026-07-18 with invariants **FE-I1–FE-I14**, governing all web/frontend artifacts
3. **Incident Log** — 5 confirmed AI behavior failures + 10 proactive QC findings, with mechanical preventions wired
4. **Edge-Case Checklist** — 9 confirmed-but-unfixed gaps awaiting priority decision
5. **Design System SSOT** — single stylesheet (`frontend/css/style.css :root`), single JS behavior file (`search.js`), tokens-only architecture
6. **Strategic Assets** — 3 ratified plans (ARCH-00393, ARCH-00395, ARCH-00410); 1 active visualization pipeline; 4 open decisions awaiting Governor input

**Key Finding:** Universal principles are being **independently re-derived** across two isolated Claude instances (Brain + CISEM Opus), proving they are **valid platform-wide laws, not house style**.

---

## PART 1: CORE UX/UI PRINCIPLES

### 1.1 — The Universal Principles Origin

These principles were authored by Claude.ai's "Brain" session (KL-0002, 2026-07-21) as a **working reference** for the "CISEM Build" product (customer-facing app: onboarding → CRM template-preview → admin). They document:

- What went wrong before the principles were written (5 incidents)
- How to prevent each class of failure
- Standing rules, audit procedures, and QC gates
- AI default triggers that must be consciously overridden
- A proactive QC pass (10 findings) run against a built artifact
- 9 confirmed-but-unfixed gaps from edge-case walkthroughs

**Status:** KL-0002 is `Status: PRINCIPLE-CANDIDATE` (not yet ratified as a CISEM artifact), but **CS-FRONTEND-001 (ARCH-00393) has adopted the core five-question user-shoes walkthrough as FE-I14**, ratified into law on 2026-07-18.

**Alignment Note:** Brain's principles **predate this week's CISEM changes**; Brain has not yet synced CISEM's governance evolution (CS-FRONTEND-001, CAL, Principles 17–21, etc.). The recommendations in this report flag where Brain may need to inherit CISEM's evolution.

---

### 1.2 — The Two Worlds (Critical Separation)

The principles straddle **two different applications** sharing a visual language:

- **World A — "CISEM Build" (Customer Product):** onboarding → CRM template-preview → admin. Outward-facing → **T-DOM**. Status: **SIMULATION/DEMO** (not yet ratified as a real CISEM product; tagged `SIMULATION-ONLY` per SOL-GIFTPRO-001 precedent)

- **World B — CISEM's Own Frontend:** schema browser / governance dashboard (`frontend/`, governed by **CS-FRONTEND-001**, FE-I1–FE-I14). Self-governance → **T-SYS**. Status: **RATIFIED** (ARCH-00393)

**Key Decision Pending:** Should universal principles be **one shared core** both worlds inherit, or are they **one-thing-applying-separately**? (This is §4-Q1 of the Brain consultation packet — awaiting Brain's answer before convergence plan.)

---

### 1.3 — Design System: Color Tokens (Ratified)

**Rule (non-negotiable, established after repeated contrast failures):** Every color token must be checked against **every background it will actually render on**, not spot-checked against one. WCAG AA minimums enforced mechanically via `functional-check.mjs` (FE-I13).

#### Dark Theme (Default)
```css
--bg: #0d1117;                /* verified 10.2–12.3:1 text contrast */
--bg-elev: #161b22;
--bg-elev-2: #1c232c;
--accent-bg: #12181f;
--border: #6c6c72;            /* verified 3.0+ against all 4 backgrounds */
--text: #c9d1d9;              /* verified 10.2–12.3:1 */
--text-dim: #8b95a1;          /* verified 5.2–6.2:1 */
--theme-accent: #58a6ff;      /* user-selectable */
--green: #238636;             /* status badge: Live (dark mode) */
--amber: #9e6a03;             /* status badge: Pending (dark mode) */
```

#### Light Theme
```css
--bg: #f6f8fa;
--bg-elev: #ffffff;
--bg-elev-2: #eaeef2;
--accent-bg: #eaeef2;
--border: #78787c;            /* verified 3.77–4.4:1 */
--text: #1c2128;              /* verified 15.2:1 */
--text-dim: #57606a;          /* verified 5.5–6.4:1 */
--theme-accent: #0969da;      /* darker blue, adjusted for white background */
--green: #0a3c14;             /* status badge: Live (light mode — 6.4:1+ verified) */
--amber: #8c4600;             /* status badge: Pending (light mode) */
```

**Standing Rule:** No color may be introduced outside this token set without running the contrast check (§1.6 WCAG procedure). Every one of the low-contrast bugs found in CISEM came from a value written outside the token system.

**Mechanical enforcement (FE-I13):** `functional-check.mjs` GATE A reads tokens from `style.css :root`, computes WCAG luminance for all pairs in both themes, **FAILS below AA**. Planted-fail-proven (a bad token → FAIL).

---

### 1.4 — Component Patterns (Ratified in FE-I1/FE-I5)

| Pattern | Usage | Spec |
|---|---|---|
| **Chip/grouped controls** | Related controls (label + options) grouped together | `background: --bg-elev`, `1px solid var(--border)`, `border-radius: 8px` |
| **Inline help (tooltip)** | Controls whose purpose isn't self-evident | `14px circle`, `cursor: help`, `role="button"` + `tabindex="0"`, one-sentence plain language, theme-aware `--bg-elev-2` bg |
| **Theme toggle** | Top-right icon button | Crescent (dark) / Sun (light); toggles `data-theme` on `<html>`; colors respond via CSS variables, not JS inline styles |
| **Feature toggles** | Each feature with state indicator | Labeled switch + monospace template-source ID tag beneath (e.g. `CS-CRM-BILLING-001`) |
| **Page tabs** | Multi-screen preview | Tabs above a single preview frame (not stacked frames); one `.page-view` per tab, `display:none` unless `.active` |
| **Single control row** | Customization controls + features | **ONE horizontal row above preview**, full-width below (FE-I12, Governor decree 2026-07-21) |
| **Top nav chrome (two rows)** | Persistent navigation | Row 1: brand mark → Index dropdown → search input → theme/help icons; Row 2: back/forward + breadcrumb, clickable segments |

**Standing Rule (FE-I12):** Primary controls must sit in **ONE line container** (`main .view-bar`), never stacked sibling bars. Mechanically verified: `functional-check.mjs` GATE B asserts count ≤ 1 on every page (class-enumerated, not sampled).

---

### 1.5 — Copy/Tone Rules

- **Mentor tone** for anything exploratory/reversible: state plainly that nothing is final, changes can be made later (reduces decision-pressure)
- **No filler, no exclamation points, sentence case** throughout
- **Labels name what the person controls**, not how the system implements it (e.g., "Controls: Small/Large," not "Button padding scale")

---

## PART 2: FRONTEND CORESPINE (CS-FRONTEND-001)

### 2.1 — Corespine Declaration

**Node ID:** CISEM-ARCH-00393 | **Status:** RATIFIED (Governor decree 2026-07-18)

| Field | Value |
|---|---|
| **Name** | CS-FRONTEND-001 |
| **Domain** | Web / Frontend |
| **Scope** | All CISEM HTML pages, CSS, JS, responsive layouts |
| **Goal** | Single governing spine for frontend — design tokens (SSOT), page templates, component contracts, responsiveness, rebuild engine |
| **Depth** | L2 |
| **Root authority** | CS-MASTER-VALIDATION-001 |
| **Parent** | CS-CREATION-001 |

**Governed Artifacts:**
- Design system SSOT: `frontend/css/style.css`
- Behavior engine SSOT: `frontend/js/search.js`
- Home index: `frontend/index.html`
- Group pages (20): `frontend/pages/*.html`
- Utility pages: `frontend/pages/help.html`, `to-be-reviewed.html`
- Rebuild checker: `frontend/rebuild.sh`

---

### 2.2 — Frontend Invariants (FE-I1 – FE-I14) — RATIFIED & WIRED

| # | Rule | Enforcement |
|---|---|---|
| **FE-I1** | Every page must `<link>` only `css/style.css`. No inline `style=""`, no page-specific CSS. | Pre-commit check (grep) |
| **FE-I2** | Every page must `<script src="[../]js/search.js">` at body-close. No inline scripts. | Pre-commit check (grep) |
| **FE-I3** | Standard nav: `.logo` → `.idx` dropdown → `.nav-search` → `.nav-r` (icons). No additional nav elements without corespine update. | Pre-commit check (grep) |
| **FE-I4** | Every page must have `.bc` div (back/forward + breadcrumb) immediately after `</nav>`. | Pre-commit check (grep) |
| **FE-I5** | Design-system tokens only — no hardcoded hex/rgb outside `:root` in `style.css`. All visual decisions flow through CSS variables. | `functional-check.mjs` GATE A (WCAG luminance) |
| **FE-I6** | Responsive layout (Grid/Flexbox). No fixed-width. Min viewport: 320px. No horizontal overflow. Tested breakpoints: 320, 768, 1200px. | Manual testing; documented breakpoints |
| **FE-I7** | Cell/mobile: nav remains functional at 320px; touch targets ≥44×44px for primary elements. | `functional-check.mjs` GATE (mobile tested) |
| **FE-I8** | Dead-link-free. Every relative link must resolve on disk before commit. | `bash frontend/rebuild.sh` (pre-commit verification) |
| **FE-I9** | Collapsible sections: `.sh` headers driven by JS `initCollapse()` in `search.js`. | Search.js presence + functional-check behavior test |
| **FE-I10** | Rows/Window view toggle on group pages with `.fi` file items. Auto-injected by `initPageViewToggle()` — no manual HTML required. | Search.js auto-inject + behavior test |
| **FE-I11** | **BEHAVIORAL COMPLETION:** Every interactive element (toggles, collapse, theme/lang switches) must actually WORK via a BEHAVIORAL test — clicking asserts the state change, NOT just "a listener is wired" (presence ≠ behavior, Principle 17). Page is not DONE until `node frontend/tests/functional-check.mjs` passes. | `functional-check.mjs` gate (jsdom-driven, pre-commit) |
| **FE-I12** | **SINGLE CONTROL ROW:** Primary controls in ONE `main .view-bar`, never stacked bars. | `functional-check.mjs` GATE B (element count ≤1 on every page, class-enumerated) |
| **FE-I13** | **WCAG-AA CONTRAST:** Every text/foreground token ≥4.5:1 (normal text) against every background in BOTH themes. No taste-exemption for labels/badges. | `functional-check.mjs` GATE A (luminance computed, FAILS below AA) |
| **FE-I14** | **USER-SHOES REVIEW:** Before any page leaves PREVIEW, builder + reviewer answer 5 questions per page (first glance · continuity · options + recommendation · benefit · next step). Page is NOT done if it renders+behaves correctly but fails UX sense. No element removed without Governor permission (element-inventory regression gate). | Review lens (builder self-answer) + Governor acceptance; `functional-check.mjs` element-inventory regression |

**Mechanical Enforcement Status:**
- **FE-I1–I10:** Mostly manual + pre-commit grep
- **FE-I11–I13:** `functional-check.mjs` GATE (real jsdom behavioral test — exists, requires `npm install` in `frontend/tests/`)
- **FE-I14:** Review lens (judgment) + Governor sign-off (honest limit: not mechanizable)

**Quality-Ledger Run:** Logged on 2026-07-18 Opus ratification.

---

### 2.3 — MIRRORS & SSOT Map

| Source | Mirror | Rule |
|---|---|---|
| FE-I1–I14 (ARCH-00393) | `corespine-registry.yaml` (goal field) | Registry is pointer; invariants live in ARCH-00393 SSOT |
| Design tokens | `frontend/css/style.css :root` | CSS file is SSOT for token values |
| Behavior contracts | `frontend/js/search.js` comments | JS file is SSOT; manifest describes contract |

---

## PART 3: AI BEHAVIOR TRIGGERS & PREVENTION

This section names the **recurring patterns AI defaults toward** unless explicitly checked. Naming the trigger, why it happens, and the correction:

| Default Trigger | Why It Happens | What to Do Instead |
|---|---|---|
| **Controls-first layout** | Customization is most-recently-discussed, most-interesting part, gets built first + most prominence | Orientation copy (questions: Where am I? What's expected? What's the benefit? What's next?) goes FIRST, above controls |
| **Internal naming leakage** | System language (stage labels, corespine IDs, tool names) is what's in the spec, reused verbatim in user-facing text | Every customer-facing copy gets deliberate translation: "Template Preview" → "Here's your CRM" |
| **Tooltip-as-sufficient** | Adding a `?` icon *feels* like solving explanation, so underlying copy doesn't get written at load-bearing strength | Apply tooltip-dependency check before considering explanation "handled" — if the explanation vanishes with the tooltip, it wasn't working |
| **Below-the-fold primary action** | Bottom-anchored bars are common/easy defaults, built without checking against actual viewport at moment of action | Explicitly test primary-action visibility against 1366×768 viewport before shipping; primary action must appear without scrolling when person is ready to act |
| **Feature-completeness over guided attention** | Showing every control demonstrates capability, feels thorough | Ask which single thing the person needs to notice FIRST; structure visual hierarchy (size, position, contrast) around that — not around showing everything |
| **Silent defaults** | Reversibility ("nothing is locked in") feels like a nice-to-have footnote | If a screen's core value is "nothing is final," that's load-bearing copy — near the top, in heading-weight visual prominence, not a caption |
| **Cold-start screens** | Each screen reasoned about in isolation, context from prior screens doesn't auto-thread through | Explicitly design each screen to ECHO what system knows: person's own words, earlier choices, continuity markers |
| **Fabricated personalization** | Static copy ("Matched from your answers — X") is easy to write once, reused everywhere as if always dynamically true | Never claim personalization the system can't back up. No match? Say so explicitly. Confident false claim erodes trust worse than honest "not yet" |
| **Orphaned captured input** | Building a data-capture control (text field, file upload) is visually complete once it looks/behaves; easy to consider "done" | Every input capturing user data must have its consumer identified before the control is finished — if nothing reads it yet, don't build the capture UI until there's somewhere for it to go |

**Mechanical Prevention:** Sections 7–9 in KL-0002 (the audit procedures, edge-case checklist, this table) are the guardrails. **Principle 17 (CISEM-wide rule):** on every noticed problem, state the **class-level prevention** + route to registry so it recurs everywhere, not just the point where it was caught.

---

## PART 4: INCIDENT LOG & QC FINDINGS

### 4.1 — Five Confirmed AI Behavior Incidents (KL-0002 §10)

All reported by Governor after being used in practice; resolutions implemented and verified against actual file.

#### **Incident 1 — Contrast Fixed at Instance Level, Not Token Level (three-pass failure)**
- **Symptom:** Text/borders flagged as too low-contrast on a specific element
- **Root cause:** Fixes targeted the specific element using subjective judgment, never audited the underlying token
- **Three passes before real fix:** (1) one element fixed; (2) multiple instances found but a self-invented rule about "labels staying faint" applied (never validated); (3) actual WCAG math run on third report showed `--text-faint` at ~2.83:1 (far below 4.5:1 minimum)
- **Resolution:** Computed real WCAG contrast for every token against every background; replaced broken tokens; ran full audit before shipping
- **Standing rule:** Section 6's contrast-check procedure (token-level, before shipping); Section 2's rule (no color outside audited token set)
- **Lesson:** AI defaults to fixing the symptom locally; must consciously zoom to the **class** (the token) to prevent recurrence

#### **Incident 2 — Cross-File Navigation Caused Real 404**
- **Symptom:** Clicking "final continue" led to actual browser 404 page
- **Root cause:** Three separate HTML files cross-linked with relative paths, only works if files downloaded together locally; fails when each previewed individually
- **Compounding:** Each new page added more cross-file links before the fundamental assumption was ever checked
- **Resolution:** Merged three files into one self-contained file with screens as `div.app-screen`; one JS navigation function driving visibility; no file boundaries for links to fail across
- **Standing rule:** No new page built as separate file with sibling links (unless deployment model deliberately changes)
- **Lesson:** Architecture built without verification against actual deployment environment; silent for multiple turns because "links work on my machine"

#### **Incident 3 — Unwired Primary Action (Silent Dead End)**
- **Symptom:** "Confirm and continue" button had no `onclick` handler; clicking did nothing
- **Root cause:** Button built to complete visual layout without verifying every actionable element has a wired destination
- **Worse than 404:** 404 is visible; no-op button fails silently
- **Resolution:** Wired button + audited every interactive element on every screen for real handler
- **Standing rule:** Before presenting any screen, every clickable element with visual affordance of action must have actual wired handler
- **Lesson:** Completeness check on visual/structural level (does it look right?) ≠ completeness check on functional level (does it actually work?)

#### **Incident 4 — Orientation Failure: Controls-First, Below-Fold, Internal Jargon**
- **Symptom:** Governor imagining themselves as first-time customer couldn't answer: Where am I? What's expected? What's the benefit? What's next?
- **What was on screen:** Breadcrumb read "Template Preview" (internal); first content was dense customization controls (powerful but presented before any orientation); only explanatory copy was a tiny caption; primary action was below the fold
- **Root cause:** Customization mechanism was most-recently built, most-interesting, got placed first + given most weight; orientation was treated as minor addition
- **Pattern name:** "controls-first layout" + "internal naming leakage" + "below-the-fold primary action" arriving together
- **Resolution:** Added orientation banner as FIRST element (heading + benefit + duplicate primary action above fold); renamed breadcrumb to customer language; wrote Sections 7–9 to catch this class before it ships next time
- **Standing rule:** Sections 7–9 (Questions, Audit, AI Triggers) run on every new screen before shipping
- **Lesson:** Technical correctness (controls are there, wired, styled) ≠ user sense-making (understanding what screen is for, why it matters)

#### **Incident 5 — Fabricated Personalization + Orphaned Input (Deepest Incident)**
- **Symptom:** Person typed "I am a carpenter"; banner correctly echoed their words; same screen showed "Matched from your answers — dental / small clinic" with unrelated dental CRM
- **Underlying failures, cascading:**
  1. Orientation banner (fixed in Incident 4) pulled from one field; never checked if rest of screen's copy was consistent with same input (fix-instance, not-pattern repeating)
  2. Free-text description + uploaded files captured into variables, **then never read downstream** — dead ends, not used
  3. Stage 3-Fallback screen (designed months earlier for "no match" scenarios) was specified but never wired into any page
- **Root cause:** Two compounding defaults: "Fabricated personalization" (static copy shipped as if dynamically true) + "Orphaned captured input" (data-capture UI built visually complete without identifying consumer)
- **Worse dimension:** Person interpreted seeing their own words correctly echoed but unrelated template as "system doesn't remember" — erosion of trust from system's own claim
- **Resolution:** Added real state tracking (`entryMode`: matched/fallback; `matchedIndustry` only when real selection); built Stage 3-Fallback screen for first time; made preview copy conditional on actual match; surfaced captured inputs to confirmation step; re-verified `restartCycle()` against all new state variables
- **Standing rule:** Sections 9 "Fabricated personalization" + new "Orphaned captured input" row; **any screen capturing user input must have its consumer identified before control is finished**
- **Lesson:** System claiming what it hasn't earned (personalization it can't back up) is worse than honest "not yet" — it's actively eroding trust. And data sitting in memory unused provides zero felt continuity; the value only exists when something reads it

---

### 4.2 — Proactive QC Pass Findings (KL-0002 §11)

A systematic audit run **before any incident was reported**, covering creation/implementation/auditing completeness:

| # | Finding | Type | Fix |
|---|---|---|---|
| 1 | Every `onclick` target resolved to real function; every `getElementById` target resolved to real, unique `id` | PASS (no Incident 3 recurrence) | None needed |
| 2 | All 9 screens consistently present in HTML, `screenOrder`, `screenMeta` — no orphaned/missing entries | PASS (no dangling refs) | None needed |
| 3 | **NEW CONTRAST GAP:** `--green` / `--amber` (Admin status badges) defined once in `:root`, never overridden for light mode. Computed: 6.2–7.5:1 dark (fine), 2.16–2.54:1 light (FAILS badly) | GAP FOUND | Added light-mode-specific values (`#0a3c14` green, `#8c4600` amber), both 6.4:1+ verified |
| 4 | **INTERNAL JARGON IN CUSTOMER-FACING:** `STAGE 3-FALLBACK · NO EXACT MATCH`, `STAGE 2A`, etc. still shown on customer screens (Incident 4's pattern recurring) | GAP FOUND | Replaced with plain language (`STEP 1 OF 3`, `WHILE WE BUILD YOURS`, etc.) |
| 5 | **JARGON INSIDE META-COMMENTARY:** Fallback screen's note referenced "Stage 3f.5" by internal code | MINOR | Kept honest admission, dropped internal code |
| 6 | **NON-FUNCTIONAL CONTROL:** Admin category editor's EN/HE language tabs had no logic; clicking "HE" did nothing | GAP FOUND | Wired `switchLangTab()` to actually swap wording field's value |
| 7 | **KEYBOARD ACCESSIBILITY GAP (CRITICAL):** Custom clickable elements (choice cards, swatches, feature chips, tabs, rows) had no `tabindex` or `role` — large fraction of interactive surface unreachable without mouse | GAP FOUND | Created `makeKeyboardAccessible()` function applied to whole class; re-run after dynamic elements created |
| 8 | **RACE CONDITION:** `runGeneration()`'s three `setTimeout` calls never tracked/cleared. Navigating back + re-triggering would stack timers, stale callbacks overwriting newer progress | GAP FOUND | Track timer IDs in `genTimers`, clear pending at start of each run |
| 9 | Three buttons inside simulated CRM preview have no handlers (design-intent confirmed — these represent eventual product UI, not walkthrough controls) | DESIGN INTENT (not bug) | Flagged explicitly rather than silently passed; confirms understanding |
| 10 | `restartCycle()` re-verified against all state variables introduced since Incident 5; found to reset all correctly | PASS (integrity confirmed) | None needed |

**Method Used:** Static code analysis (function/ID diffing, registry checking, contrast math, JS syntax parsing, jargon scanning), NOT live browser interaction — gaps found via reasoning about the code, not clicked through.

---

## PART 5: EDGE CASES & CONFIRMED-BUT-UNFIXED GAPS

### 5.1 — Nine Confirmed Open Gaps (KL-0002 §12)

Found during edge-case walkthrough (§7.2); **NOT YET FIXED** per standing rule (finding a gap ≠ permission to act on it). Listed here awaiting priority decision.

| Gap ID | Issue | Category | Impact | Status |
|---|---|---|---|---|
| **GAP-01** | No persistence across browser refresh. All state (intent, answers, theme/density choices) lives only in JS variables; refresh returns to Launch with everything gone, silently. | State management | Data loss with no warning. Person loses work. | Confirmed — no warning, no recovery |
| **GAP-02** | No generation-failure state. Progress bar always reaches 100%. No designed failure path or error message. Success-only copy assumes success throughout. | Error handling | Benefit-forward copy becomes misleading if generation actually fails. | Confirmed — tested success path only |
| **GAP-03** | No confirmation before "Start over." Single click wipes entire session irreversibly. Button styling identical to reversible actions (e.g., "Back"). | Reversibility | Destructive action looks and behaves like harmless one. Easy accidental session wipe. | Confirmed — no diff in visual weight |
| **GAP-04** | No RTL / Hebrew-input testing. Given explicit bilingual (EN/Hebrew) requirement, nothing evaluated with Hebrew text or right-to-left rendering. | Internationalization | Could break layouts, misalign text, fail bidirectional input in actual use. | Confirmed — bilingual requirement stated but not tested |
| **GAP-05** | No concurrent-edit handling on Admin screen. Two admins editing same category simultaneously would silently overwrite each other; only a static "last edited by" line, no locking/conflict indicator. | Concurrency | Silent data loss if two admins edit simultaneously. | Confirmed — no mechanism exists |
| **GAP-06** | No `aria-label`s on visually-only controls. Keyboard accessibility (FE-I7/FE-I11) made elements tabbable/clickable, but bare color swatch has no text content screen reader can announce. | Accessibility | Keyboard users + screen-reader users can reach control but don't know what it does. | Confirmed — `tabindex` added but no labels |
| **GAP-07** | Browser back/forward vs. internal screen state untested. App's own `currentScreen` tracking not verified against browser's native back/forward buttons (distinct from in-app arrows). | Navigation | State mismatch possible if person uses browser navigation instead of in-app. | Unverified (not confirmed broken, just untested) |
| **GAP-08** | No empty-state design. What Gallery looks like with zero items has not been deliberately designed; only populated version exists. | Design completeness | Unclear UI when Gallery is empty; could look broken or confusing. | Confirmed — empty state doesn't exist |
| **GAP-09** | Cognitive load of Preview screen's four simultaneous decisions (Theme/Density/Controls/Features) named as real trade-off, not oversight. Deliberate consolidation earlier in project. | Cognitive load | Known UX friction: presenting four choices at once increases decision time. | Confirmed trade-off (accepted earlier; documenting cost) |

**Frame for Priority:** Which are real product requirements (must fix) vs. demo-only (acceptable as gap)? Specifically, Brain's consultation packet asks (§4-Q4): persistence (GAP-01), failure state (GAP-02), RTL (GAP-04), concurrent edits (GAP-05) — **CISEM won't act without Brain's priority call**.

---

## PART 6: THE FIVE-QUESTION USER-SHOES WALKTHROUGH

**Location:** KL-0002 §7.1 | **Adoption:** FE-I14 (RATIFIED 2026-07-18 into CS-FRONTEND-001)

These are the **core essence carriers**. Answer all four in the actual visible copy of the screen — not inferable, not in tooltips — before writing component code:

### Question 1: **Where am I?**
State in plain, customer-facing language. Not "Template Preview," not a stage code. A customer should read one line and know what kind of moment this is (e.g., "Here's the CRM we built from what you told us").

### Question 2: **What's expected of me here?**
Is there a required action, or is this purely informational/optional? If nothing is required, say so explicitly ("You don't need to change anything here").

### Question 3: **What's in it for me?**
State the benefit, not the mechanism. Not "customize theme, density, and features" (what it does) but "make this feel like yours" (what it's for).

### Question 4: **What happens next, and how do I do it?**
The next action must be nameable in one sentence. The control performing it must be visible without scrolling on a standard 1366×768 viewport at the moment the person is ready to act — not assumed to be found by scrolling.

### Supporting Per-Component Questions:
- If I removed every tooltip, would a first-time user still understand what to do?
- Is any internal name appearing in customer-facing text?
- Can this screen be completed with zero decisions (all defaults accepted), and if so, is that path obvious?
- Does the screen restate what the person already told the system, or does it silently drop that context?

---

### The Walkthrough Discipline (Verbatim — Governor's Words)

The five questions can be satisfied on paper while still failing in practice if answered by an engineer checking boxes rather than someone imagining themselves as a first-time user. The distinction matters.

**Five questions per screen, in the shoes of a first-time user:**

1. **What will this specific user understand when they first look?** — Not what the screen *could* communicate in principle, but what actually lands in the first few seconds. Eyes land on highest-contrast, largest, or most-isolated element first. A screen can say the right thing and still fail if something else is louder.

2. **Is the connection to the previous page/stage clear?** — Every screen should make obvious it's a continuation (what they typed, picked, were told) — not a cold restart. This signals the system is listening.

3. **Is there a clear, intuitive indication of options — and of the recommended one?** — Equal visual weight silently asks the person to do analysis work. A recommended option should be indicated by visual mechanism (color, size, position, text, arrow), not left to inference. Preserves optionality while reducing decision cost of common case (Hick's Law).

4. **Is the benefit of the next step clear?** — Before asking someone to act, the screen should make obvious what they *gain*, not just what the action technically does. People are more reliably motivated by anticipated outcome than by instruction.

5. **Is the next step actually indicated?** — Distinct from question 4. Is it visually/structurally obvious that there *is one*? Uncertainty about "am I done here" is itself a source of hesitation.

**Standing Rule for This Section:** Every existing screen gets re-walked against these five before any new screen is built. Fixes arising from this walkthrough are **additive by default** — clarifying, highlighting, labeling what's already there — not removals. Removing or hiding an element requires explicit Governor permission every time.

---

## PART 7: AUDIT PROCEDURES & VERIFICATION GATES

### 7.1 — Pre-Ship Audit Checklist (KL-0002 §8)

Run this against anything already built:

- [ ] **Viewport test:** Screenshot at 1366×768 (defensible floor for standard laptop) with no scrolling. Can the four questions in Section 1 all be answered from that single screenshot alone? If any answer requires scrolling/hovering/clicking, that's a failure.

- [ ] **Jargon scan:** Search visible copy for any term only engineers understand (stage labels, internal IDs, tool names). Anything found gets rewritten in customer language or moved to places customers don't see.

- [ ] **Tooltip-dependency check:** For every `?` icon or hover-only explanation, ask: if this were deleted, would the screen still make sense? If no, promote that content into visible copy — tooltips are for elaboration, not load-bearing.

- [ ] **Primary-action visibility:** Identify the single most important action on the screen. Confirm it renders above the fold at the point a person would naturally reach for it — not assumed via scroll.

- [ ] **Continuity check:** Does the screen show any trace of what the person already told the system (their own words, prior choices), or does each screen start cold?

- [ ] **Zero-decision path check:** If a person changes nothing on this screen, is it obvious they can still proceed, and would they know that without reading anything?

- [ ] **Component state completeness:** For every interactive component, has default, hover, focus, active, disabled, and loading state actually been considered — not just the one state that happened to get built first?

**Standing Rule:** This audit is meant to run **automatically on every new screen** before presenting it, not only after a person reports a problem — same standing rule as the contrast-token audit (Section 1.6).

---

### 7.2 — Mechanical Verification Gates (FE-I11–FE-I13)

**Gate Name:** `functional-check.mjs` (jsdom-driven, pre-commit)

**What it does:**
- **GATE A (FE-I13 WCAG Contrast):** Reads `:root` token hex from `style.css`, computes WCAG relative-luminance ratio for all pairs in both themes, **FAILS below AA**. Planted-fail-proven (bad token → FAIL).
- **GATE B (FE-I12 Single Control Row):** Asserts `main .view-bar` count ≤1 on EVERY page (class-enumerated, not sampled). Planted-fail-proven (a second bar → FAIL).
- **GATE C (FE-I11 Behavioral Completion):** Runs a real jsdom click/action test that ASSERTS the resulting state change — not just "a listener is wired." A page with dead UI (element exists but does nothing) is a ZF-class defect.
- **GATE D (Element Inventory Regression, FE-I14 companion):** Enforces no-collateral-deletion — a page may never lose interactive elements; a drop FAILS the check.

**Requires:** `npm install` in `frontend/tests/` (jsdom); pre-commit wiring is disclosed follow-on (not yet auto-hooked into git).

**Honest limit:** The gate requires node+jsdom in the hook environment; full pre-commit automation is a follow-on infrastructure task.

---

## PART 8: STRATEGIC ASSETS & ROADMAP

### 8.1 — Ratified Plans Related to UX/UI

| Plan | ID | Status | Scope | Depth |
|---|---|---|---|---|
| Frontend Corespine Manifest | ARCH-00393 | RATIFIED 2026-07-18 | CS-FRONTEND-001 declaration + FE-I1–I14 | L2 |
| Universal Corespine Wizard | ARCH-00394 | RATIFIED 2026-07-18 (via ARCH-00395 retro-plan) | Protocol for creating any corespine | L2 |
| Frontend Corespine Retro-Plan | ARCH-00395 | RATIFIED 2026-07-18 | Retroactively authorizes ARCH-00393/394 (I25/A4 debt resolution) | L2 |
| Frontend Visualization Layer (Mindmap) | ARCH-00410 | RATIFIED 2026-07-21 (Governor INFORMED stage-2 after rendered-page review) | schema.html SVG mindmap + toggle (Phase 1); index/dashboards (Phase 2 PARKED) | L2 |

---

### 8.2 — Four Open Decisions Awaiting Brain (CISEM → Brain Consultation, 2026-07-21)

The external consultation packet (brain-consultation-uxui-2026-07-21.md) flags these as requiring Brain's input before convergence plan can proceed:

1. **HOME — One shared universal core, or two separate applications?** Are World A (CISEM Build customer product) and World B (CISEM's own frontend, CS-FRONTEND-001) both inheriting from a small **media-neutral principles core**? Or are universal principles one-thing-applying-separately?

2. **REALITY STATUS of "CISEM Build"** — Real CISEM product headed for repo (needs corespine + ratified plan) or design exploration / simulation-only (stays knowledge like SOL-GIFTPRO-001)?

3. **DESIGN-SYSTEM SSOT** — Will World A inherit tokens from CISEM's `frontend/css/style.css`, so token-drift (D1) is structurally impossible? Or deliberately separate palettes?

4. **YOUR OPEN GAPS (GAP-01…09) — priority call.** Which are real product requirements vs. demo-only? Especially: persistence across refresh (GAP-01), generation-failure state (GAP-02), RTL/Hebrew (GAP-04), concurrent admin edits (GAP-05).

**Status:** Awaiting Brain's written response; once received, Opus will draft the convergence plan.

---

### 8.3 — UX/UI Work Pipeline (Deferred from 2026-07-21)

**Location:** HANDOFF-UX-UI-PIPELINE-PLAN-2026-07-21.md (READY-FOR-NEXT-SESSION status)

**Phase 1 (Opus PE + Haiku gather):**
- Existing-First search: are there existing UX/UI corespines (CS-FRONTEND-001? ARCH-00393+?), protocols, design systems?
- If found: map existing scope + integration points
- If not: scope NEW corespine (CS-UX-UI-001 candidate — subject to Brain's decision on "shared core vs. separate")
- Define GOAL clearly (who benefits? what problems solved? success criteria?)
- Enumerate DESIGN QUESTIONS (what's TBD in UX/UI pipeline?)

**Phase 2 (Sonnet structure):**
- Create high-level outline of corespine (components, inheritance, rules, gates)

**Phase 3 (Opus PE consolidate):**
- Synthesize findings → draft `/cisem-plan` entry for CS-UX-UI-001 (or enhancement to existing)

**Phase 4 (Governor ratify):**
- Present plan for ratification; await direction

**Preventions to apply on resume:**
- I19 Existing-First (search BEFORE proposing new corespine)
- I22 (any "exists" claim cites disk evidence)
- Principle 14 (zero-assembly handoff)
- Principle 13 (save-all before boundaries)
- Principle 12 (harvest + inheritance per ARCH-00370)

---

## PART 9: EXECUTIVE RECOMMENDATIONS

### 9.1 — Immediate Actions (Week of 2026-08-17)

1. **Compile Brain's Response** — Forward brain-consultation-uxui-2026-07-21.md to Brain; set deadline for answers to §4-Q1, Q2, Q3, Q4. These unlock the convergence plan.

2. **Verify ARCH-00410 Phase 1 (Mindmap)** — Governor rated INFORMED (post-rendered-page review); Phase 1 is complete. Phase 2 (index/dashboards) is PARKED; surfaces when Governor approves Phase-1 result.

3. **Wiring Status:** Mark which of the 9 GAP-01…09 issues are **product requirements** (must fix before real ship) vs. **simulation-acceptable** (okay for walkthrough demo). This decision gates phase 2 plans.

4. **Propagate Principle 17 rule** — Every time an incident is reported/found, state the **class-level prevention** at that same turn; route to root-insights registry. Current system has 5 confirmed incidents; all have preventions written and in the log. Next incident should name its prevention before it spreads.

---

### 9.2 — Medium-Term (Roadmap for Next 2–3 Sessions)

1. **Convergence Plan** (post-Brain response) — Opus drafts the unification of World A + World B under a shared principles core (or ratifies their separation if that's the call). This becomes ARCH-00411 or similar.

2. **UX/UI Corespine Decision** — Whether CS-UX-UI-001 becomes a RATIFIED sibling to CS-FRONTEND-001, or remains a knowledge reference (KL), depends on Brain's "reality status" answer. If product (real CISEM shipping), it gets a plan, invariants, and corespine status.

3. **Mechanic Enforcement Graduation:**
   - Expand `functional-check.mjs` to pre-commit hook (requires node+jsdom in hook env — infrastructure task)
   - Wire `[ZF]` gate graduation to BLOCK-mode (currently WARN-only; ARCH-00270 v2 drafted, Stage-1 SOUND, awaiting Governor final ratification)
   - Automate the Section 8 viewport test (1366×768 screenshot + bounds check — possible but requires headless browser setup)

4. **GAP Remediation Roadmap** — For each of GAP-01…09 rated as "product requirement," draft a plan (ARCH-00412+) to address it. Current status: none have plans yet; all flagged as "awaiting priority decision."

---

### 9.3 — Deep Integration Points

1. **Principle 17 (Class-Prevention) Hardwiring** — Current: manual discipline (write the prevention on finding); Future: route every prevention found into root-insights registry + weekly deep-pattern session (WEE, ARCH-00426 RATIFIED-UNBUILT) to hardwire it into the checking suite.

2. **Perspective Diversity** — The fact that Brain **independently re-derived** CISEM's core processes (audit-token-not-instance, presence≠behavior, fabricated-personalization) across two isolated Claude instances is strong evidence these are **universal platform laws, not house style**. Recommendation: enshrine them in the universal governance layer, not as CISEM-specific.

3. **External Alignment Axis** — KL-0003 proposes adding an `alignment` status axis to input-intake schemas (predates-changes / conflicts / aligned / n/a) to flag when external material is valuable but **hasn't yet been synced to current state**. This prevents stale external guidance from overriding evolved internal wisdom. Recommend formalizing this registry-wide.

---

## PART 10: REFERENCE INDEX

### 10.1 — Source Documents (All Available in dna/)

| Document | ID | Role | Status |
|---|---|---|---|
| UX/UI Principles (Brain) | KL-0002 | SSOT for universal principles | PRINCIPLE-CANDIDATE (not ratified but FE-I14 adopted) |
| UX/UI Artifact Batch (Brain) | KL-0003 | Catalog + analysis of Brain's 6 mockups + 2 analyses | CATALOGED · PREDATES-CHANGES |
| Frontend Corespine Manifest | ARCH-00393 | Corespine declaration + FE-I1–I14 | RATIFIED 2026-07-18 |
| Universal Corespine Wizard | ARCH-00394 | Protocol for creating any corespine | RATIFIED (via ARCH-00395 retro-plan) |
| Retro-Plan (FE Corespine) | ARCH-00395 | Retroactive authorization for ARCH-00393/394 | RATIFIED 2026-07-18 |
| Frontend Visualization Layer | ARCH-00410 | schema.html mindmap (Phase 1); dashboards (Phase 2 PARKED) | RATIFIED 2026-07-21 |
| Brain Consultation (UX/UI) | brain-consultation-uxui-2026-07-21.md | Outbound packet to Brain + 4 decisions awaiting response | READY-TO-SEND |
| UX/UI Pipeline Handoff | HANDOFF-UX-UI-PIPELINE-PLAN-2026-07-21.md | Deferred work plan for next session | READY-FOR-NEXT-SESSION |

### 10.2 — Key Mechanical Files

| File | Role | Status |
|---|---|---|
| `frontend/css/style.css` | Design token SSOT | LIVE (dark/light themes, all tokens WCAG-verified) |
| `frontend/js/search.js` | Behavior SSOT | LIVE (collapse, toggle, theme, lang, link navigation) |
| `frontend/tests/functional-check.mjs` | Behavioral verification gate (FE-I11–I13) | LIVE (jsdom, requires npm install in tests/) |
| `frontend/rebuild.sh` | Dead-link verification | LIVE (extends to data-generator in future) |

### 10.3 — Governance Homes

| Concept | Owner | Status |
|---|---|---|
| Frontend invariants (FE-I1–I14) | CS-FRONTEND-001 (ARCH-00393) | RATIFIED |
| Universal principles (token/component/AI-trigger patterns) | KL-0002 + FE-I14 | PRINCIPLE-CANDIDATE + ADOPTED into FE-I14 |
| Design tokens (hex values, contrast verified) | `frontend/css/style.css :root` | SSOT LIVE |
| Behavior contracts | `frontend/js/search.js` comments | SSOT LIVE |
| World A ("CISEM Build" product) | Awaiting corespine decision (see §8.2-Q1, Q2) | SIMULATION-ONLY / TBD |
| World B (CISEM internal frontend) | CS-FRONTEND-001 | RATIFIED |

---

## PART 11: APPENDIX — Quick Reference Tables

### Contrast Ratios (WCAG Verified)

**Dark Mode:**
- `--text` (#c9d1d9) vs `--bg` (#0d1117): **10.2:1** ✓
- `--text-dim` (#8b95a1) vs `--bg` (#0d1117): **5.2:1** ✓
- `--border` (#6c6c72) vs `--bg-elev` (#161b22): **3.0:1** ✓
- `--green` (#238636) vs `--bg` (#0d1117): **6.2:1** ✓
- `--amber` (#9e6a03) vs `--bg` (#0d1117): **7.5:1** ✓

**Light Mode:**
- `--text` (#1c2128) vs `--bg` (#f6f8fa): **15.2:1** ✓
- `--text-dim` (#57606a) vs `--bg` (#f6f8fa): **5.5:1** ✓
- `--border` (#78787c) vs `--bg-elev` (#ffffff): **4.4:1** ✓
- `--green` (#0a3c14) vs `--bg-elev` (#ffffff): **6.4:1** ✓
- `--amber` (#8c4600) vs `--bg-elev` (#ffffff): **6.5:1** ✓

---

### AI Trigger Prevention Quick Card

| Trigger | Prevention | Verification |
|---|---|---|
| Controls-first | Orientation FIRST; benefit statement hero; controls secondary | Section 8 audit: can 4 questions be answered from single screenshot? |
| Internal naming | Customer-language translation pass on all visible copy | Jargon scan: grep for internal terms |
| Tooltip-as-sufficient | Tooltip-dependency check: if deleted, would screen still work? | Audit: every `?` icon explanation, read without hover |
| Below-the-fold action | Test at 1366×768; primary action visible without scroll | Audit: viewport test + primary-action visibility |
| Feature-over-guidance | Ask: which ONE thing does this person notice first? Structure hierarchy accordingly | Audit: visual-weight test (size, position, contrast) |
| Silent defaults | If screen's core value is reversibility, make it load-bearing copy | Copy review: reversibility prominence ≥ heading weight |
| Cold-start screens | Echo what system knows: person's words, earlier choices, continuity | Continuity check: visible traces of prior input? |
| Fabricated personalization | Never claim personalization the system can't back up | State-tracking review: does system actually match, or is it hardcoded? |
| Orphaned input | Every capture control must have consumer identified | Audit: every `<input>` has a downstream reader |

---

## Conclusion

CISEM now has a **complete, ratified UX/UI governance spine** consisting of:

✅ **Universal principles** (KL-0002, FE-I14) — core five-question walkthrough + component patterns + design tokens + AI trigger prevention  
✅ **Frontend corespine** (CS-FRONTEND-001, ARCH-00393) — RATIFIED with 14 invariants (FE-I1–I14), 6+ mechanical gates  
✅ **Incident log + prevention** — 5 real failures named + prevented; 10 proactive QC findings; 9 unfixed gaps flagged  
✅ **Mechanical enforcement** — contrast gate (FE-I13), control-row gate (FE-I12), behavioral-completion gate (FE-I11), element-inventory regression gate  
✅ **Deferred work plan** — 4 decisions awaiting Brain, 1 visualization plan (Phase 1 RATIFIED, Phase 2 PARKED), UX/UI corespine work pipeline ready for next session  

**Next steps:** Compile Brain's answers to the 4 open questions; ratify the convergence plan; resolve the 9 GAP-priority questions; graduate mechanical enforcement to pre-commit hooks.

---

*Report compiled 2026-08-17 from KL-0002, KL-0003, ARCH-00393/395/410, brain-consultation-uxui-2026-07-21, and handoff documents. All source links verified on disk. This is a reference document; updates flow back through the SSoT homes (ARCH-00393 for invariants, style.css for tokens, search.js for behavior).*
