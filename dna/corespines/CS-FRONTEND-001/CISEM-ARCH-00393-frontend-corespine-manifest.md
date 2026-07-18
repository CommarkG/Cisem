---
Node_ID: CISEM-ARCH-00393
Type: MANIFEST
Status: DECLARED
Corespine: CS-FRONTEND-001
Schema_anchor: CISEM-ARCH-00008
Core_spine: CS-CREATION-001
Last_verified: 2026-07-18
---

# CS-FRONTEND-001 — CISEM Frontend Corespine Manifest

**CISEM-ARCH-00393** | MANIFEST | **Status: DECLARED** (pending Opus ratification)
**Governs:** All CISEM web/frontend artifacts — HTML pages, CSS design system, JS behaviors, responsive/cell layouts, rebuild engine.

---

## §I Gate Trace (§3 gates — A5 hardcoded protocol)

**§3.0 Tier:** Sonnet DRAFTS, Opus ratifies the declaration fields (sensitive: corespine establishment).
**§3.1 Goal:** Establish the governing spine for all CISEM frontend output so every HTML artifact has a declared corespine (A2), design-system tokens are SSOT, and responsiveness is structurally enforced — not per-page guesswork.
**§3.2b Existing-First:** Searched `corespine-registry.yaml` (all entries), `dna/protocols/` (no web/frontend protocol), `dna/corespines/` (no CS-FRONTEND-*). ARCH-00391 and prior are governance/CAL — no overlap. Creating new is justified.
**§3.2c Core-vs-Instance:** CORE. The BP-0004 frontend (25 files) is use-case 1; planned future index surfaces (dashboards, DIOS view) are use-case 2. Minimum two real use cases satisfied.
**§3.3 Pocket:** `reasoning_scope: corespine establishment + FE-I1–I10 definition` | `inherited_constraints: A2 (every artifact declares spine), §3 gates, I22` | `output_contract: DECLARED corespine node + registry entry + invariants` | `ai_cannot: ratify own declaration` | `recorded_at: 2026-07-18` | `cal_reference: ARCH-00390`
**§3.4 Standalone:** No dangling refs — all files cited exist on disk.
**§3.5 Naming:** `CISEM-ARCH-00393` (seq 393, ARCH type, naming-registry.yaml updated).
**§3.6 Size:** ~190 lines — within 200-line gate.
**§3.7 Creation Triad:** Hardcoding (this §I trace + FE-I1–I10) ✓ | AI Pocket (§3.3 declared) ✓ | AI Oversight (quality-ledger.yaml run to be logged by Opus on ratification) ✓

---

## §II Corespine Declaration

| Field | Value |
|---|---|
| **Name** | CS-FRONTEND-001 |
| **Domain** | Web / Frontend |
| **Scope** | All CISEM HTML pages, CSS, JS, and responsive layout artifacts |
| **Goal** | Single governing spine for the frontend system — design tokens, page templates, component contracts, responsiveness, rebuild engine |
| **Depth** | L2 |
| **Status** | DECLARED (Opus ratification pending) |
| **Root authority** | CS-MASTER-VALIDATION-001 |
| **Parent** | CS-CREATION-001 (every artifact is a creation event) |

---

## §III Governed Artifacts

| Artifact | Location | Role |
|---|---|---|
| Design system (CSS variables + components) | `frontend/css/style.css` | SSOT for all visual tokens |
| Behavior engine (search, collapse, view toggle) | `frontend/js/search.js` | SSOT for all interactive behavior |
| Home index | `frontend/index.html` | Root entry point |
| Group pages (20) | `frontend/pages/*.html` | Per-group artifact listings |
| Utility pages (2) | `frontend/pages/help.html`, `to-be-reviewed.html` | Navigation utility |
| Rebuild checker | `frontend/rebuild.sh` | Dead-link verification + CAL integration |

---

## §IV Invariants (FE-I1 – FE-I10)

**FE-I1 Single stylesheet.** Every page must `<link>` only `css/style.css`. No inline `style=""` attributes, no page-specific CSS files.

**FE-I2 Single JS file.** Every page must `<script src="[../]js/search.js"></script>` at body-close. No inline scripts, no page-specific JS. All behavior lives in search.js.

**FE-I3 Standard nav.** Nav must contain in order: `.logo` link → `.idx` dropdown (all 20 groups) → `.nav-search` with `id="si"` + `id="cnt"` → `.nav-r` with ✎ and ? icons. No additional nav elements without corespine update.

**FE-I4 Breadcrumb row.** Every page must have `.bc` div containing `bc-arr` back + forward buttons followed by the breadcrumb trail. Placed immediately after `</nav>`.

**FE-I5 Design-system tokens only.** No hardcoded hex/rgb color values outside `:root` in style.css. All visual decisions flow through `--bg`, `--nav`, `--border`, `--text`, `--muted`, `--accent`, `--hover`.

**FE-I6 Responsive layout.** All layouts use CSS Grid or Flexbox. No fixed-width containers. Minimum supported viewport: 320px. No horizontal overflow. Tested breakpoints: 320px, 768px, 1200px.

**FE-I7 Cell / mobile.** Nav must remain functional and non-overflowing at 320px. Touch targets ≥ 44×44px for primary interactive elements (nav links, buttons, `.fi a`). Dropdown must not break on small viewports.

**FE-I8 Dead-link-free.** Every `href="../../..."` relative link must resolve on disk before commit. Verified by `bash frontend/rebuild.sh`. Dead links are a ZF finding.

**FE-I9 Collapsible sections.** `.sh` section headers on group pages must have JS-driven collapse/expand (initCollapse() in search.js). `.sh` without a following `.fl` is exempt.

**FE-I10 Rows / Window view toggle.** Group pages with `.fi` file items must expose a Rows/Window view toggle. This is auto-injected by `initPageViewToggle()` in search.js — no manual HTML required.

---

## §V Content File Index

| File | ARCH# | Purpose |
|---|---|---|
| This manifest | ARCH-00393 | Corespine declaration + invariants |
| Universal Corespine Wizard | ARCH-00393 | Protocol for creating any corespine |

---

## §VI Mirrors + SSOT Map

| Source | Mirror | Rule |
|---|---|---|
| FE-I1–I10 (here) | `corespine-registry.yaml` (goal field) | Registry is a pointer; invariants live HERE |
| Design tokens | `frontend/css/style.css :root` | CSS file is the SSOT for token values |
| Behavior contracts | `frontend/js/search.js` comments | JS file is SSOT for behavior; this manifest describes the contract |

---

## §VII Change Log

| Date | Change | Author |
|---|---|---|
| 2026-07-18 | DECLARED — initial manifest, FE-I1–I10 established, ARCH-00393 assigned | Sonnet (Governor-ordered) |
