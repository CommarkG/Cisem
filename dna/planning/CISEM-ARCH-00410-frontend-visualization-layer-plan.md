# Frontend Visualization Layer — Vanilla-JS SVG Mindmap (Registry-Generated), Phase 1 = schema.html
**Node ID:** CISEM-ARCH-00410 | **Type:** ARCH | **Status:** RATIFIED — Governor INFORMED decree 2026-07-21 (reviewed the rendered schema.html mindmap in-browser, then ratified — Principle 20 informed-ratification satisfied; Opus Stage-1 SOUND) | **GI-68 exempt (ratified pre-decree):** true (Opus backfill 2026-07-25, ARCH-00420-PART01 — ratified pre the 2026-07-23 GI-68 decree)
**Planning Status:** COMPLETE (Opus Stage-1 SOUND + Governor INFORMED Stage-2 ratification 2026-07-21 after rendered-page review — Phase-1 accepted; Phase-2 now proposable) | **depth_level:** L2 | **Position in schema:** T-SYS, frontend layer
**tags:** [planning-domain, frontend, visualization, mindmap, schema-html, registry-generated]
**Goal:** Add a companion SVG mindmap view to `frontend/pages/schema.html` — zero-dependency, vanilla JS, node-graph
data GENERATED from the registries, theme-aware, native-link-click-navigates — WITHOUT losing the existing 512-line
collapsible tree. Measurable as: (1) `functional-check.mjs` behaviorally proves the mindmap renders + a node click
navigates, in both themes; (2) the existing tree's element-inventory count does not decrease; (3) the page opens
under `file://` with zero console errors and zero network requests.
**Governing corespine:** CS-FRONTEND-001 (`dna/corespines/CS-FRONTEND-001/CISEM-ARCH-00393-frontend-corespine-manifest.md`)
**CAL reference (CISEM-ARCH-00390):** pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[POCKET]`
run on this plan at commit time; build's done-gate adds `node frontend/tests/functional-check.mjs` (FE-I11).
**Independent Verifier:** `cisem-opus-pe` — cold default-refute soundness pass (author = Sonnet, dispatched by
Opus; satisfies P5 author≠verifier). **Rendered-page acceptance:** the Governor (visual/UX sign-off on the built
page — separate from Opus's soundness verdict on this plan document).
**Size-gate exception (§3.6, documented):** 201 lines after the v0.2 Opus fold (8 Core Seeds + 7-source Existing-First
+ full ARCH-00190 section set). Kept whole per the ARCH-00408/00409 precedent — one coherent single-feature build
contract; a mini-tree split would fragment the Core-Seed set for no structural gain.

## Existing-First (§3.2b, done) — searched, in order
1. `frontend/js/search.js` (788 lines) — `initTreeToggle()` (VS-Code-explorer collapse pattern, keyboard-friendly,
   robust `:scope > ul.tree-children` lookup) and `initPageViewToggle()`/`initTheme()`/`initLang()` (auto-inject-on-
   `init()` idiom, no manual HTML) are the REUSE targets — the mindmap toggle + theme/link behavior follow these
   same patterns, not new ones.
2. `frontend/css/style.css` (301 lines) — `:root` design tokens (`--bg/--nav/--border/--text/--muted/--accent/
   --hover`) + `:root[data-theme="light"]` override block are the REUSE target for mindmap SVG colors (FE-I5).
3. `frontend/pages/schema.html` (512 lines) — the existing collapsible tree (`.tree/.tree-row.branch-row/
   .tree-children`) rendering T-SYS/T-DOM from the registries. Confirmed **currently HAND-AUTHORED** (no generator
   script found in `frontend/` besides `search.js`/`functional-check.mjs`) — this is the exact gap Core Seed 3 closes.
4. `frontend/rebuild.sh` — currently ONLY a dead-link checker (`href="../.."` resolution), not a content generator.
   Confirmed no existing generator to reuse/extend as-is; this plan's data-generator either extends it or sits
   beside it as a sibling script (build decision, not fixed here — Core Seed 3 fixes the REQUIREMENT, not the file).
5. `dna/corespines/CS-FRONTEND-001/CISEM-ARCH-00393-frontend-corespine-manifest.md` — governing corespine, FE-I1–
   FE-I11 confirmed (single stylesheet/JS, tokens-only, responsive, dead-link-free, behavioral-completion). This
   plan ADDS no new FE-invariant; it satisfies all 11 existing ones.
6. `dna/queue/BP-0011-schema-ssot-and-html-pages.md` — QUEUED, "pages generated from registries, never hand-
   authored" (item 4, AUTO-UPDATE). **This plan ALIGNS with BP-0011's data-generation principle and does NOT fork
   it** — BP-0011's scope is broader (skills/agents pages, alignment gate, schema-as-SSOT for naming); this plan is
   narrowly the schema.html mindmap. BP-0011 stays open for its remaining scope; this plan may retire BP-0011 item 2
   (schema page population) for the mindmap facet only — recorded as a Dependency below, not silently absorbed.
7. `dna/archive/archive-ledger.yaml` DEC-0008 — `ARCH-00382` (unified-graph-architecture, the underlying KNOWLEDGE-
   GRAPH DATA MODEL) is RULED-OUT-TEMPORARY, unrelated scope: this plan is a PRESENTATION-layer rendering of
   EXISTING registry data (corespine-registry/ssot-registry/naming-registry/schema), not a new graph data model —
   does not reopen DEC-0008, disclosed to avoid confusion.
**VERDICT: no existing mindmap/graph-rendering artifact found. Building is justified — REUSE search.js/style.css
idioms + registry data, per Core Seeds 1–4 below.**

## Pocket Declaration
- **reasoning_scope:** draft this ratifiable plan for a schema.html companion SVG mindmap view; produce the plan
  artifact only — no HTML/JS/CSS written by this drafting task
- **inherited_constraints:** A1–A10; D1–D6 (D2 guard-boundaries — hardcode the WHAT: zero-dep, generated-data,
  native-links, behavioral-done; free the HOW: renderer internals); CS-FRONTEND-001 FE-I1–FE-I11; I10/I19
  (reuse search.js/style.css, never fork); I25 (plan authorizes, does not itself implement)
- **output_contract:** this plan document only
- **ai_cannot:** self-ratify; stamp CS-FRONTEND-001 or schema.html Status fields; write any truth-bearing field
- **recorded_at:** 2026-07-21

## Executive Summary
The Governor chose Option B (2026-07-21): a dependency-free vanilla-JS SVG mindmap renderer in `frontend/js/`, node-
graph data GENERATED from the registries — never hand-authored — over inline-Mermaid (rejected: violates BP-0004
Core Seed 1 zero-dependency/no-CDN) and a hybrid (rejected: same CDN/dependency exposure on the Mermaid half). This
plan is the ratifiable spec for Phase 1 only: add the mindmap as a companion/toggled view on `schema.html`, reusing
existing tree/theme/link idioms, with the node data generated by a small script (extends `rebuild.sh` or a sibling
generator) reading the registries — never hand-typed. Phase 2 (index.html + other dashboard pages) is named and
scoped but explicitly NOT built until the Governor approves the Phase-1 result (Core Seed 6, Anti-Scatter).

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this dispatch) — executing Opus's already-made architecture
  decision (Option B) verbatim; no design judgment exercised on the architecture, only structuring per ARCH-00190.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass on this document.
- **Governor Stage 2 → ratification authority** for the plan; **Governor also holds rendered-page acceptance**
  (visual/UX sign-off) as a SEPARATE checkpoint after Phase-1 build, per the Independent Verifier line above.
- **Implementation (post-ratification) → Sonnet** — the generator script + `frontend/js/mindmap.js` (or equivalent)
  + `schema.html` toggle wiring + `functional-check.mjs` extension; mechanical/structural build under the 6 Core
  Seeds below, no further architecture judgment; Opus reviews the diff + runs `[ZF]`+FE-I11 at Gate close.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
- **Phase 1 (CENTRAL, this plan's build scope):** `schema.html` companion mindmap, registry-generated data, theme-
  aware, native links, behaviorally verified. Nothing downstream matters until this MVP is Governor-approved.
- **PARKED (peripheral, named not built — Core Seed 6):** Phase 2 = `index.html` landing mindmap + any other
  dashboard-page mindmap surfaces. Requires its OWN Governor go-ahead after Phase-1 acceptance; not authorized by
  this ratification.

## The Build Spec — 6 immutable Core Seeds (Opus-authored; Sonnet executes verbatim, may not edit/remove)
[[CORE-SEED 1 | MUST: ZERO external dependencies / ZERO CDN — the renderer is vanilla JS in frontend/js/, all
CSS/JS local, opens under file:// with a strict CSP; no runtime fetch() of YAML | WHY: BP-0004 founding decree +
CSP/CORS on file:// | VERIFY: no <script src=cdn>, no fetch(); page opens offline | APPLIES_TO: the frontend-
visualization build spec]]
[[CORE-SEED 2 | MUST: the existing schema.html collapsible tree is PRESERVED — the mindmap is ADDED as a toggled/
companion view, never a replacement that loses the tree content (no content regression; the element-inventory
regression in functional-check.mjs must not drop) | WHY: CS-FRONTEND-001 no-regression + Principle 18A no collateral
deletion | VERIFY: both tree AND mindmap reachable in final schema.html; functional-check element inventory does
not decrease | APPLIES_TO: schema.html output contract]]
[[CORE-SEED 3 | MUST: the mindmap node-graph DATA is GENERATED from the registries (corespine-registry / ssot-
registry / naming-registry / schema), not hand-authored — via an extension of rebuild.sh or a small local generator
script; a hand-typed node list is a finding | WHY: DERIVED-VIEW (parked coherence audit ROOT 1) + BP-0011 — hand-
authored derived views go stale | VERIFY: the node data has a generator; regenerating reflects registry changes |
APPLIES_TO: the data layer of the visualization]]
[[CORE-SEED 4 | MUST: theme-aware (reuse existing style.css light/dark vars) + live-links are NATIVE (clicking a
node with a corresponding page navigates via a real <a>/href, not a DOM-patched overlay) | WHY: Governor "pro
interface + live links"; native links are behavior-verifiable, overlays are the presence≠behavior trap | VERIFY:
nodes with pages navigate on click in both themes | APPLIES_TO: the renderer + link contract]]
[[CORE-SEED 5 | MUST: the build's done-gate is [ZF] ACHIEVED on plan-audit AND a behavioral pass in
frontend/tests/functional-check.mjs (not "looks wired") — presence≠behavior | WHY: Principle 17 behavioral
verification | VERIFY: functional-check asserts the mindmap renders + a node-click navigates | APPLIES_TO: the
build definition-of-done]]
[[CORE-SEED 6 | MUST: Phase 1 = schema.html ONLY (MVP). Phase 2 (index.html landing mindmap + any other dashboard
pages) is SCOPED as a named follow-on but NOT built until Phase 1 is Governor-approved. Anti-Scatter (Principle
16). | WHY: MVP-first, Governor approves schema.html before expansion | VERIFY: plan phases are explicit; Phase 2
is disclosed-not-built | APPLIES_TO: plan scope]]
[[CORE-SEED 7 | MUST: the RUNTIME-vs-BUILD-TIME dependency boundary — Core Seed 1's zero-dependency/no-CDN
constraint governs the SHIPPED PAGE (what the browser loads over file://): the renderer + generated data file must
be static, inline/local, dependency-free. The BUILD-TIME generator is NOT shipped to the browser, so it MAY use
available local tooling (node — already used by functional-check.mjs — or python if present, or a build-only parse)
to read the YAML registries; there is NO jq in this env and NO npm runtime deps, so do NOT assume jq/yq. Its OUTPUT
(committed .js/.json data + renderer) must be zero-dep. | WHY: registries are YAML with no runtime parser
available; conflating build-time with runtime is what would wall the build | VERIFY: shipped page loads offline
zero-dep; generator runs from available tooling + commits a static data file | APPLIES_TO: the data-generator +
shipped-page boundary]]
[[CORE-SEED 8 | MUST: write the registry→graph generator as a REUSABLE module (one generator), not a
schema.html-only one-off — so BP-0011's broader registry-generated-pages scope can reuse it rather than forking a
second generator | WHY: A8/I19 one-source; two generators for the same registries is the fork this plan avoids |
VERIFY: the generator is parameterizable/reusable beyond schema.html | APPLIES_TO: the data-generator design]]

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ **Option A — inline Mermaid.js:** rejected — requires a CDN or vendored dependency; violates BP-0004 Core
  Seed 1 (zero-dependency/no-framework founding decree) and complicates `file://` CSP.
- ❌ **Option C — hybrid (Mermaid + native):** rejected — the Mermaid half still carries the same CDN/dependency
  exposure as Option A; a hybrid does not remove the violated constraint, it isolates it.
- ❌ Rejected: hand-authoring the node-graph JSON/data — reopens the exact stale-derived-view failure BP-0011/
  DERIVED-VIEW names; Core Seed 3 forbids it.
- ❌ Rejected: replacing the tree with the mindmap — Core Seed 2 / Principle 18A forbid content regression.
- ❌ Rejected: building Phase 2 (index.html) in this same pass — Core Seed 6 / Anti-Scatter; needs its own
  Governor go after Phase-1 acceptance.

## Per-File Alignment Table
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00410-frontend-visualization-layer-plan.md` (this file) | CISEM-ARCH-00410 (Sonnet-allocated, naming-registry.yaml next_seq 410→411) | T-SYS, planning-governance layer | planning-domain, frontend, visualization | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `frontend/pages/schema.html` (target of Phase-1 build — NOT modified by this drafting task) | existing, unchanged path | T-SYS, frontend layer | frontend, page | unchanged by this drafting task (Phase-1 target) |
| `frontend/js/mindmap.js` or equivalent (NEW, Phase 1, NOT built by this drafting task) | no CISEM-{TYPE}-{SEQ} ID — governed frontend script, per CS-FRONTEND-001 §III pattern | T-SYS, frontend layer | frontend, behavior, mindmap | to be created: PROVISIONAL-ACTIVE at build |
| data-generator (extends `frontend/rebuild.sh` OR a new sibling script — build decision, NOT fixed here) | no ID yet — build-time decision within Core Seed 3's requirement | T-SYS, frontend/CAL layer | frontend, generator, registry-derived | to be created: PROVISIONAL-ACTIVE at build |
| `frontend/tests/functional-check.mjs` (extended, Phase 1) | existing, unchanged path | T-SYS, frontend/test layer | frontend, test, behavioral | unchanged status; new assertions added at build |
| `dna/naming-registry.yaml` (already modified — ARCH next_seq 410→411, comment registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER step; nothing here executes now)
- `frontend/pages/schema.html` — gains a mindmap/tree view toggle (companion, per Core Seed 2).
- New `frontend/js/` file (mindmap renderer, vanilla JS, Core Seed 1) wired into the existing `init()` auto-inject
  pattern (matches `initTreeToggle()`/`initPageViewToggle()` idiom).
- A registry-reading generator (extends `rebuild.sh` or a sibling script) producing the node-graph data (Core Seed 3).
- `frontend/tests/functional-check.mjs` — new assertions: mindmap renders, node-click navigates, tree inventory
  unchanged, both themes pass (Core Seed 5).

## What does NOT change
- No existing tree markup/behavior removed (Core Seed 2).
- No new corespine or protocol node created — this plan operates entirely under the EXISTING CS-FRONTEND-001
  (FE-I1–FE-I11 already cover it; no new FE-invariant added).
- `dna/queue/BP-0011` is NOT closed or forked by this plan — only its schema-page-mindmap facet is addressed here;
  its remaining scope (skills/agents pages, alignment gate) stays open (see Dependencies).
- No CDN, no framework, no runtime YAML fetch (Core Seed 1).
- Phase 2 (index.html, other dashboards) is NOT built (Core Seed 6).

## Definition-of-Done reference
Verified at implementation against `dna/checks/definition-of-done.md` (cited, not re-derived): PRODUCED (renderer +
generator + toggle exist) → WIRED (`node frontend/tests/functional-check.mjs` passes the new assertions, or an
honest `NOT-YET-WIRED` tag) → PROPAGATED (CS-FRONTEND-001 §III Governed Artifacts table gains the new files, A8) →
HOOKED (pre-commit already runs `plan-audit.sh`; functional-check is a documented manual/CAL-triggerable gate per
existing FE-I11 posture) → COMMITTED+PUSHED → VERIFIED (functional-check + a rendered-page Governor sign-off).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — CS-FRONTEND-001 is RATIFIED and open to enhancement via a ratified plan (A4/I25
  satisfied by this plan once ratified).
- **Related, not merged:** `dna/queue/BP-0011` — this plan implements BP-0011's data-generation PRINCIPLE for the
  schema-page mindmap facet only; BP-0011's remaining scope (skills/agents HTML pages, alignment gate, schema-as-
  naming-SSOT) is unaffected and stays QUEUED.
- **Unblocks-for:** Phase 2 (index.html mindmap, other dashboards) — named, not authorized, pending Phase-1
  Governor acceptance (Core Seed 6).
- **Soft dependency:** CS-FRONTEND-001 §V Content File Index and §III Governed Artifacts table should gain the new
  files on implementation (A8 propagation), disclosed here rather than assumed silently.

## Ratification Path
Stage 0 (this draft) → Stage 1 (Opus soundness, cold default-refute, `cisem-opus-pe`) → Stage 2 (Governor decree,
plan ratification) → **build** → Stage 3 (Governor rendered-page acceptance, separate checkpoint per the
Independent Verifier line) → only then may Phase 2 be proposed as its own plan.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Executive Summary (self-contained) ✓ 6 Core Seeds (immutable build contract)
✓ Per-File Alignment Table ✓ What-DOES / What-does-NOT change ✓ DoD reference ✓ Dependencies ✓ Ratification Path
✓ Path Rejection Declaration ✓ CAL reference ✓ Change log ✓ Independent Verifier named (`cisem-opus-pe` + Governor
rendered-page acceptance) ✓ Existing-First stated (7 sources).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[POCKET]` run on this plan file at commit time. At
implementation, `frontend/tests/functional-check.mjs` (FE-I11's mechanism) becomes the new behavioral-done gate for
the mindmap's presence≠behavior verification — disclosed CAL surface, same posture as prior FE-invariant additions.

## Change log
- v0.1 — 2026-07-21 (Sonnet, STRUCTURING tier, dispatched by Opus, executing Governor-chosen Option B verbatim):
  initial draft. Existing-First search (7 sources), 6 Core Seeds embedded verbatim from the dispatch, Per-File
  Alignment Table, Path Rejection, Dependencies, DoD reference populated.
- v0.2 — 2026-07-21 (Opus, Stage-1 soundness): verdict SOUND. Folded 2 build-time refinements as Core Seeds 7
  (runtime-vs-build-time dependency boundary — preempts the YAML/no-jq wall) + 8 (reusable generator, no BP-0011
  fork). Status → RATIFIED (Governor go-ahead 2026-07-21), Planning Status → COMPLETE. Phase-1 build authorized.
