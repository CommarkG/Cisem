# IBD-0010 — External Wizard Inputs (RAW QUARANTINE) 2026-07-19
**Type:** IBD (quarantine) | **Status:** RAW-EXTERNAL · UN-PURIFIED · DE-BRAND ON ANALYSIS
**Handling (post-compact task):** external input = a CLAIM to verify, not authority. Strip source vocab/branding/names, extract only the essence, align to CISEM vocab, THEN run through the creation cycle (threshold → fit → consensus → stress-test). Do NOT adopt raw. This is the import-saturation buffer (IBD-0008 / import-saturation protocol).
**Context:** Governor asked 3 other platforms how they'd build a wizard for a corespine. Parked here to analyze fresh after compacting. Purify — do not copy their expressions.

---
## INPUT 1 — (source: "CSP") — VERBATIM, un-purified

I am CSP, and here is how I would build a wizard for creating Core Spines — using what I already have, not inventing new machinery.

I do not start from nothing. I already have a Schema Lab that classifies concepts, a Schema Standard that defines what every spine must declare, and a Trigger Registry that tracks whether declarations are actually wired. A Core Spine Wizard is not a new invention — it is these three things sequenced into a guided flow with a stricter gate than a single concept classification, because a spine is a trunk-level commitment, not a leaf element.

Step 1 — Consolidation Check (before the wizard opens): does this spine already exist under a different name? 11 spines declared. A request that overlaps an existing spine is a branch, not a new spine. Refuse SPINE-12 if the concept fits an existing trunk. Same consolidation gate as every element, fired earlier + higher scrutiny (a spine is expensive to create, more expensive to deprecate).

Step 2 — Root Goal Declaration (one sentence, no escape hatch): one sentence why this spine exists, answerable without referencing another spine. If it needs "and it also handles X", the "also" signals two spines in one name, or a branch. Reject compound root goals — a spine with two root goals drifts into two disconnected halves.

Step 3 — Trunk Elements (locked before anything else): the main sequence — the 2-6 load-bearing entities that must exist for the spine to mean anything. Lock these before any branch. Trunk first, always. Most proposals fail here because people jump to the interesting edge case before the foundation is named.

Step 4 — Six-Field Ratification (reusing Schema Lab): route through existing classify→ratify, scoped to spine-level: Schema Position (which SPHERE, S0 platform-wide / S1+ use-case); Governance (which existing spine it's a sibling of); Definition (root goal in system terms); Cannot Mean (>=2 explicit boundaries — highest-leverage anti-drift field, never skip); Inheritance Chain (which directive authorized it); Enforcement Test (how to prove trunk is wired). No closing with any field pending — all 6 or it stays draft.

Step 5 — Branch Registry (opens only after trunk ratified): branches now proposable; each must declare which trunk element it extends; an orphan branch (no trunk parent) is rejected. List open-ended (branches accumulate over life) but trunk never grows after this without full re-ratification.

Step 6 — Wiring State Assignment (honesty over optimism): every new spine starts DECLARED. Not CONNECTED/ACCESSIBLE/LIVE at creation — those are earned through implementation + verified via Trigger Registry. A spine declared LIVE on day one becomes untrustworthy the first time someone checks and finds nothing wired.

Step 7 — Registration Across Three Surfaces (one write, three destinations): canonical spine registry; Trigger Registry (wiring state trackable); Draft Pages → Core Spines section (visible in inventory). Lesson: an element in one place but not its siblings becomes invisible to whoever looks elsewhere.

Step 8 — Dependency Declaration (inherited_by, both directions): what depends on this spine + what it depends on — so "if I change this spine, what breaks?" is answerable without re-deriving the graph.

Step 9 — Exit Gate (does not close on optimism): same checklist as any new schema element: SPAP scan if it touches tables, schema element declaration gate, and — critically — the person closing must STATE THE FALSIFICATION TEST OUT LOUD, not just store it. If they can't say how to prove it's enforced, it stays DECLARED.

Why this way: every step already exists (Schema Lab, Schema Standard, Trigger Registry, consolidation gate). A Core Spine Wizard is not new invention — it is COMPOSITION: same primitives, sequenced with stricter gates, because a spine is trunk-level. Do not build two systems that do almost the same thing — compose the one you have into a guided flow for spine creation.

---
## INPUT 2 — (source: "CDS") — VERBATIM-FAITHFUL, un-purified
Framing: a corespine is a CONSTITUTIONAL CONSTRAINT (not a document) — applies to all decisions, cannot be bypassed, mechanically enforced. Building one wrong is worse than not building it.
- STEP 1 CONSTITUTIONAL JUSTIFICATION — collect "what problem / what fails if it doesn't exist?"; BLOCKING gate: is "what fails?" = "everything in this domain"? if not, it's a rule/config, not a corespine; must apply to ALL decisions in scope. Gate: no one-sentence "what breaks if removed" → stop. Output: locked justification.
- STEP 2 UNIQUENESS AUDIT — cross-ref full CORESPINE-REGISTRY; does an existing spine own this domain (OSSOT violation) or conflict? 3-category check: mechanical | semantic | propagation overlap. Gate: ZF-0 across all three or halt + surface conflict. Output: uniqueness certificate + conflict scan.
- STEP 3 IDENTITY BLOCK — cs_id (CS-[GROUP]-[SEQ]), display_name, group (META/GOVERNANCE/STRUCTURE/INTELLIGENCE/AI/OPERATIONS), root_goal (outcome not method), root_principle (constraint, falsifiable). Gate: root_principle must pass falsification — "violated when [observable condition]". Output: locked identity.
- STEP 4 SPINE CONSTRAINTS — per constraint: id, statement (what CANNOT happen), enforcement_type TELL(documented/auditable)|RULE(mechanical/unbypassable), falsification. No advisory language ("should/try/ideally"). RULE must name the mechanism (hook/gate/schema-validation). Gate: >=1 constraint must be RULE (mechanical) — all-TELL = just a policy doc. Output: constraint registry.
- STEP 5 TRUNK ELEMENTS — per element: trunk_position (T-model Root→Trunk→Branch), schema_position, corespine_context (points back to this CS-ID), definition, usage_boundaries (explicit exclusions, no open scope), inheritance_chain (up+down), falsification_test. Gate: inheritance-chain check — undefined parent → halt. No orphans.
- STEP 6 ALLOWED/BLOCKED OPERATIONS — allowed: op + by-whom + trust-tier (ADMIN/TRUSTED); blocked: op + cited constraint (C1..) it violates. No "allowed by default" — every permission explicit. Gate: blocked op with no cited constraint → reject (cannot block without authority).
- STEP 7 WIRING VALIDATION — 4 wiring states per connection: DEFINED (spine names it) → WIRED (receiver has field/ref) → REACHABLE (resolves) → CURRENT (references current ratified version). Gate: no connection left DEFINED-only; ≥WIRED before ratification package.
- STEP 8 CONTRADICTION AUDIT (automated) — mechanical (constraint vs existing), semantic (term vs VOCABULARY registry), propagation (does enforcing break a ratified system?). Gate: ZF-0 across all three; one finding = full stop. Output: signed audit (timestamp + finding count=0).
- STEP 9 RATIFICATION PACKAGE (auto-compiled) — full YAML: cs_id, status PROPOSED, identity, constraints, trunk, operations, wiring_map, contradiction_audit(ZF-0 signed). Each decision tagged FLEXIBLE (config-adjustable, no re-ratify) vs NOT-FLEXIBLE (constitutional, Governor approval to ever modify). No placeholder/TBD.
- STEP 10 GOVERNOR RATIFICATION GATE (cannot automate) — present package + NOT-FLEXIBLE list + ZF-0 audit + wiring map to Governor; Governor approves each NOT-FLEXIBLE explicitly + signs "constitutional DNA", or rejects with reasoning → wizard returns to flagged step. State: PROPOSED→RATIFIED (date). Nothing proceeds without it.
- STEP 11 PROPAGATION (auto after ratify) — write CS block to registry; update wiring-map systems → CURRENT; notify dependent schemas; audit trail (who/when/what); if existing behavior violates new spine → flag for remediation. Output: propagation report.
Summary blocks-on per step: 1 no "what breaks" answer · 2 any conflict · 3 principle not falsifiable · 4 zero RULE constraints · 5 orphaned element · 6 block without cited constraint · 7 connection stuck DEFINED · 8 any finding · 9 any placeholder · 10 no human approval · 11 wiring not fully CURRENT.

## CLARIFICATION / CURIOSITY QUESTIONS (Opus — for post-compact analysis; hints worth mining)
- Both CSP + CDS lead with a CONSOLIDATION / UNIQUENESS gate BEFORE the wizard opens ("does this already exist? is it a branch not a spine?"). We have Existing-First but not fired as a hard pre-wizard ZF-0 uniqueness gate — adopt?
- "What FAILS / what BREAKS if this doesn't exist?" as the root-goal test (CDS) + "no compound root goal, no 'also'" (CSP) — a sharper Goal-First than ours. Essence to steal.
- TELL vs RULE constraint typing + "≥1 must be mechanical, else it's just a policy doc" — maps exactly to our EXISTS≠ACTIVE / hardwired-vs-documented. A cleaner vocabulary for it?
- "Cannot Mean" / "usage_boundaries with explicit exclusions" (both) = our penumbra/silent_on made a MANDATORY declared field. Strong.
- FLEXIBLE vs NOT-FLEXIBLE per decision (CDS) = our "which parts need Governor re-ratification" + the waivable/governed/absolute tiers we defined. Convergent — validate our 3-tier against their 2-tier.
- Falsification test stated OUT LOUD at exit (CSP Step 9) — a ritual, not stored text. Curious if a spoken/echoed falsification belongs in our stress-test.
- Q for us: does "corespine = constitutional constraint that applies to ALL decisions in its domain" tighten OUR definition (vs our looser "everything is part of a corespine")? Possible sharpening of A2 + the undebatable-core.

## INPUT 3 — (source: "CSPS") — VERBATIM-FAITHFUL, un-purified
Thesis: the one decision never to get wrong = WHAT GOVERNS WHAT, and in which order it WINS when two disagree (PRECEDENCE).
- Step 0 GROUND IN WHAT EXISTS: read the 5 sealed L1 core-spine files as READ-ONLY ground truth (never copy-modify as templates); precedence HARDCODED not user-editable (GVRN>VALD>ARCH>AI>OPER). Insight: "the wizard's FIRST JOB is REFUSAL — structurally incapable of creating a 6th spine or reordering precedence. That constraint IS the product."
- Step 1 DEFINE WHAT A SPINE IS: a governance DOMAIN with a primary concern (governs-HOW-built / WHAT-built-on / AI-behavior / operations / standards-met), a sealed L1 doctrine file (changes = re-grounding event), an L2 domain layer, a fixed precedence rank (1-5, not per-spine assignable). First question: "which ONE concern is primary?"
- Step 2 CLASSIFIER ENGINE (before creation): match description to the 5-spine table; check sealed L1 — does this concern already live in one of the 5? MOST "I need a new spine" = "new L2 domain under an existing spine" (single most common failure). Only if genuinely orthogonal → escalate to Governor (spine count sealed). "A wizard that makes new spines EASY will bypass sealing — the friction is a feature."
- Step 3 ARTIFACT-AUTHORING (common case, artifact under existing spine): auto-pull frontmatter template (never hand-typed); auto-populate core_spine from classifier (empty = orphan); schema_anchor (offer existing first); template_used from registry not free-text (no fit → register a template first).
- Step 4 CROSS-SPINE: ask "does this ALSO touch other spines?" → core_spines:[...] plural + primary core_spine; surface precedence consequence at save ("if ARCH conflicts with GVRN, GVRN wins — confirm"). Force declaration at creation (cheapest).
- Step 5 VALIDATORS ATOMIC (Five-Surface Engraving): corespine-layer-compliance + nothing-stands-alone (schema_anchor, no orphan) + template-citation. File without registered validators = EXISTS-but-not-ACTIVE (the failure the wizard prevents).
- Step 6 CLOSE WITH ACTIVATION PROOF: planted-violation test (does misclassifying get caught?) + positive-path confirm. DONE = wired+called+verified, not authored.
- LEDGER — chosen: classifier-first, defaults to "you probably don't need a new spine", new-spine = rare Governor-gated event. Rejected: free "flexible spine wizard" (erodes sealed precedence); "schema-only wizard" (syntactically-valid-but-semantically-wrong core_spine — real historical failure).
- Their OPTIMAL NEXT STEP: pick delivery form (CLI / Claude-skill / web) before the classifier; form decides validators-as-pre-commit-hooks vs async.

## CURIOSITY (Opus, input 3 — the big one):
- **PRECEDENCE ORDERING** (which spine WINS a conflict, fixed rank) = the EXACT conflict-resolution gap we hit (two-root validation-vs-creation; stress-test Q8 "which wins?"). CSPS hardcodes a precedence rank. Strong candidate for OUR model.
- **"The wizard's first job is REFUSAL"** — the wizard's PRODUCT is the constraint (can't make a 6th spine / can't reorder). Refusal-as-feature.
- **SEALED, bounded, precedence-ordered spine set** vs our OPEN corespine count — do WE want a sealed top-level set? Big architectural question.
- All THREE colleagues CONVERGE: consolidation/uniqueness-gate-first · "most new-spine = branch under existing" · mechanical-not-documented · DONE=wired+called+verified · Cannot-Mean/exclusions mandatory. Convergence across 3 independent sources = strong validation of our direction.
## INPUT 3 — RECEIVED + parked (all three inputs captured verbatim above)
**Purified version (separate file, mandatory PAIR):** [[IBD-0010-external-wizard-inputs-PURIFIED]] — de-branded,
CISEM-aligned essence lives THERE, never in this RAW file. RAW = verbatim quarantine, append-only. See ARCH-00011
§RAW-PURIFIED convention. Do NOT edit purified content into this file (raw stays raw).
