# BUILD-PROMPT BP-0004 — Most-basic front-end "Index" (the navigable living index)
**FOR:** cisem-sonnet (build); cisem-opus-pe verifies. **status:** QUEUED | **priority:** HIGH | **essential:** y | **depends-on:** none
**Note:** this front-end IS the long-missing living index (CISEM-DNA-00001) made navigable.

## BOOTSTRAP
Read: CLAUDE.md, dna/ssot-registry.yaml, dna/corespines/corespine-registry.yaml,
dna/naming-manifest.yaml, and glob the repo so every link points to a REAL file.

## GOAL (measurable)
The MOST BASIC static front-end that indexes the whole repo. DONE = opening `frontend/index.html`
by double-click (no server, no build) shows: a top menu with the single word **"Index"**, whose
hover reveals the groups + subgroups; each group is a simple page listing + linking the actual
repo files; plus a "To Be Reviewed & Created" page. Every link resolves to a real file.

## CONTEXT / STACK
MOST BASIC = pure static HTML + minimal inline CSS + tiny vanilla JS only for the hover menu and
search. NO framework, NO build step, NO dependencies. Lives in `frontend/`.

## CORE SEEDS (immutable — honor verbatim, echo in your Seed-Honor Report)
[[CORE-SEED 1 | MUST: pure static HTML/CSS + minimal vanilla JS; NO framework, NO build step, NO npm — opens by double-clicking frontend/index.html | WHY: "most basic" is the whole requirement | VERIFY: no package.json, no external CDN, file opens offline | APPLIES_TO: the Sonnet tier executing BP-0004 (frontend index build) — governs every file created under frontend/]]
[[CORE-SEED 2 | MUST: every file link is a RELATIVE path to an ACTUAL existing repo file (verify each exists) — zero dead links | WHY: A1 nothing stands alone / no phantom refs (I1) | VERIFY: click-through or grep each href resolves | APPLIES_TO: the Sonnet tier executing BP-0004 (frontend index build) — every href in built frontend files]]
[[CORE-SEED 3 | MUST: include ALL groups listed below, in groups + subgroups; the "Index" menu shows topics on hover and subtopics on sub-hover | WHY: Governor spec | VERIFY: all 20 groups present | APPLIES_TO: the Sonnet tier executing BP-0004 (frontend index build) — the navigation structure]]
[[CORE-SEED 4 | MUST: include the "To Be Reviewed & Created" page verbatim from the list below | WHY: Governor spec | VERIFY: page exists with all items | APPLIES_TO: the Sonnet tier executing BP-0004 (frontend index build) — the "To Be Reviewed" page content]]
[[CORE-SEED 5 | MUST: every page has — search icon, help icon, a "CISEM" logo linking home, breadcrumbs, and back/forward (browser-native back/forward is acceptable; breadcrumbs are simple links) | WHY: Governor spec | VERIFY: present on each page | APPLIES_TO: the Sonnet tier executing BP-0004 (frontend index build) — every page in the built frontend]]

## GROUPS (each = a page listing + linking its real files; use subgroups where natural)
Skills (.claude/skills/, queued BPs) · Agents (.claude/agents/) · Axioms (CISEM-FOUND-00001; CLAUDE.md §2.4)
· Schema (SCHEMA-00001, ARCH-00008) · Nodes (all dna/**/CISEM-*.md) · QC [audits, sanity-checks,
alignment, validations, verifications, consolidation, currency, seed-honor] (plan-audit.sh, ARCH-00320,
CS-MASTER-VALIDATION V1-V5, ssot-registry) · Protocols (ARCH-00011, TEMPLATE-PROTOCOL-001, ARCH-00230,
ARCH-00320) · Wizards (none yet — placeholder) · Front-page types (this front-end; placeholder) ·
Internal file types (nodes/registries/build-prompts/IBD) · Document types (plans, witnesses) ·
Templates (ARCH-00290, ARCH-00230, BUILD-PROMPT-template) · Internal audits by different models
(quality-ledger runs; Haiku/Sonnet/Opus tiers) · Learning & improvement loops (RQC ARCH-00320 §6,
CS-LOOPS-001, quality-ledger) · Engines & orchestrators (plan-audit.sh, queue/) · Corespines
(corespine-registry.yaml) · Pipelines (placeholder) · Processes (Threshold intake, park-by-demand,
SWIFT) · Principles (CLAUDE.md §2 behavior principles, Doctrine §2.5) · Rules (invariants I1-I18)

## "TO BE REVIEWED & CREATED" PAGE (enhancements + how each contributes)
- BP-0002 orchestrate all invariants → executes 14/18 manual learnings (stops forgetting).
- BP-0003 /cisem-create skill → auto-fires the Creation Triad each time (discipline→engine).
- Remaining skills: /cisem-audit, /cisem-consolidate, /cisem-park, /cisem-promote → the team's verbs.
- Gemini upgrades: 4 Wiring States → precise deployment maturity; Field Wiring Triad → defines "wired";
  Five-Surface Engraving → permanent fix across 5 surfaces; 4-Layer Template → answers ARCH-00280 Q4;
  Planted-Violation Test → proves BLOCK works; Trigger Registry → end-to-end event verification.
- Founding axioms (TSA/CoreSpiral/Pocket) → completes the keystone FOUND-00001.
- Q4 ratification → unblocks CS-THRESHOLD body + templates.
- ai-oversight-layer3 → build or drop the supervision-layer placeholder.
- BLOCK-mode graduation → turns WARN checks into enforcement.
- Promotion engine (IBD→node) → moves parked items into governed nodes through the gates.
- 12-question file processing (Brain) → parked, awaiting.

## PLAN
1. Build frontend/index.html (home + "Index" hover menu) + frontend/pages/<group>.html per group.
2. Populate each group page by globbing its real files; relative links.
3. Add search (client-side filter over the link list), help page, breadcrumbs, CISEM→home.
4. Emit diff + SEED-HONOR REPORT for cisem-opus-pe verification. Do NOT commit.
