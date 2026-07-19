# Governed-Creation Pipeline + Corespine Wizard — DRAFT
**Node ID:** CISEM-ARCH-00400 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (draft-in-use, NOT ratified)
**Planning Status:** AWAITING-INDEPENDENT-REVIEW (then Governor ratification)
**Goal:** One ratified pipeline for how CISEM governs creation + resolves conflict, folding the 6-reviewer conclusions, so the first corespine can be test-driven on a sound frame. Measurable: every A1–A7 conclusion + §B addition has a named home + gate here; independent review returns zero unrouted findings.
**Governing corespine:** CS-CREATION-001 (apex) | **depth_level:** L2 | **tags:** pipeline, conflict-resolution, wizard, graph, verify-seam
**Independent Verifier:** cisem-opus-pe (cold instance, default-refute) — distinct from author (Opus main loop). REQUIRED before ratification (this IS conclusion A1, dogfooded).
**Ratified basis (Governor "I ratify all" 2026-07-19):** conclusions A1–A7 + §B (dna/external-review/consolidation-conclusions-2026-07-19.md); Fork C → typed governance GRAPH; Fork D → keep-and-harden the axiom.
**Pocket:** reasoning_scope = design the pipeline+wizard from ratified conclusions · inherited_constraints = A1–A8, D1–D6, I1–I25, ARCH-00190/00394/00399 · output_contract = a reviewable draft with a home+gate per conclusion · ai_cannot = self-ratify; declare done without the independent verifier · recorded_at 2026-07-19 · cal_reference ARCH-00390.
**EXISTING-FIRST (§3.2b):** searched ssot-registry, corespine-registry, ARCH-00394 (wizard, RATIFIED), IBD-0012 (conflict model), consolidation-conclusions, archive-ledger (DEC-0001..0006). ENHANCES ARCH-00394 + IBD-0012; does not fork. Supersedes the tree/total-order path (DEC-0003/0006).

## PART 1 — THE GRAPH ARCHITECTURE (Fork C, ratified)
Not a pure inheritance tree. Four structural kinds, typed:
- **Constitutional KERNEL** (sealed genesis block; A-anchor) — authority/ratification · evidence/traceability · versioning/epochs · safety/containment. **AI can READ but NOT MODIFY it** (conclusion §B genesis-block; R6). Amended only by human-ratified re-grounding, never AI-authored edit.
- **DOMAIN corespines** — the actual governed domains; hierarchical beneath the kernel; cumulative inheritance.
- **Cross-cutting OVERLAYS** — security, privacy, observability, accessibility: apply ACROSS domains, are NOT trunks. (Dissolves "which trunk owns security?" — it's an overlay.)
- **Conflict CONTROL-PLANE** — a SEPARATE plane (Part 2), not a corespine; detects + resolves conflicts between typed claims.
Membership of the kernel + top-level domain set = a **genesis block ratified once by fiat** (reach is un-measurable at genesis — R6); reach later VALIDATES/PRUNES, never births (A5).

## PART 2 — CONFLICT-RESOLUTION (control-plane; A3/A4 + §B)
Conflicts are between **typed CLAIMS** {jurisdiction, rule_class, epoch}, never whole-corespine rank. rule_class (constitutional_invariant → mandatory → prohibition → optimization → default → heuristic) selects the combining logic.
- **Detection FIRST:** every decision carries a `constraint_coverage` statement; "no conflict found" vs "none within the retrieved set" are distinct (R3).
- **Layer 1 — default presumption:** a typed precedence SEQUENCE (applicability → rule-class → constitutional → specificity → ratified-waiver → optimize → default → **INDETERMINATE**). NOT a total order (DEC-0006). Sample-audit high-frequency auto-resolutions (R4).
- **Layer 2 — triage by GATES, not an inferred score (A4):** mechanical gates (reversibility · blast-radius · consequence · safe-fallback · precedent-risk · data-exposure). **FAIL-UP** when unsure → treat as fundamental (R4). Sample-audit provisional-proceed verdicts (R5/R6). Outcomes: rigid-default · provisional-proceed+park · vault-and-halt.
- **Provisional (A7):** non-propagating, version-pinned, `expires_at`, rollback_plan; enables local execution, NEVER normative inheritance.
- **Vault drain-SLA (A3):** every entry = owner + typed disposition + timeout + DEFAULT-ACTION-ON-EXPIRY (auto-safe→park · needs-human→Governor-ping · blocked→HARD-BLOCK next cycle). "Open vaulted" = a release-blocking metric.
- **Meta-conflict resolver (§B):** disagreement about which layer/rule-class applies → default ESCALATE (named, not implicit).
- **Governor capacity (§B):** cap N proposals/cycle (overflow queued as a governed artifact); batch-ratification lanes for Layer-3 codifications, distinct from feature ratification.

## PART 3 — THE WIZARD (refusal-first; enhances ARCH-00394)
Starts with "is a new corespine JUSTIFIED?", not "create." Flow: 0 existing-home (demonstrated) → 1 type-classify (kernel/domain/overlay/subordinate/policy/…/not-governance — most requests are NOT top-level) → 2 invariant+jurisdiction → 3 overlap+inheritance → 4 conflict-simulation → 5 SANDBOX (no production/propagation/precedent) → 6 diverse-instance falsification → 7 disposition → 8 Governor ratify → 9 versioned activation+monitoring.
- **Significance (A5):** NOMINATE by IRREDUCIBILITY (can't be derived from a combination of the others) + ORTHOGONALITY (refusal-first on the trunk set) — testable at genesis; CONFIRM by reach at maturity via a non-destructive proxy (transitive-inheritors × criticality).
- **Inherited WHAT = a MECHANICAL INVARIANT (testable assertion), not prose (A2, Governor-approved).** Guard the WHAT semantically (mandatory cannot-mean checked vs descendant behavior — §B); blocks upward WHAT-widening.
- **"Flawless" = a GREEN GATE (A6):** fixed acceptance suite → zero findings on a clean re-run, N consecutive passes; pre-declare count N(≈3) + a DIVERGENCE rule (1–3 don't converge → the pattern doesn't exist yet). Instances adversarially DIVERSE + one moderately complex; criteria domain-agnostic, defined BEFORE instance-1. Match method to reach.

## PART 4 — THE VERIFY SEAM (A1 — the FIRST standing gate, built first)
A COLD, SEPARATE reasoning instance (cisem-opus-pe / a fresh agent) re-derives EVERY "done" claim from source artifacts, no access to the producer's reasoning, tasked to find FALSE. STANDING gate on every creation/ratification, not occasional. Self-output is treated as UNTRUSTED until independently reproduced. This closes the judge-jury-defendant seam all reviewers named. (Our plan-audit is author-written — it does NOT satisfy this.)

## PART 5 — AXIOM (Fork D, hardened) + CONSTITUTIONAL ANCHOR
- **Axiom (reframed):** "A ratified invariant is binding within its governance EPOCH; challengeable ONLY via a mechanical reopen-artifact (claim-it's-wrong + evidence + named downstream harm) + an INDEPENDENT verifier of 'better' + Governor ratification + a migration plan." Keeps the intent (nothing frozen), closes the closed-loop hole; reconciles with D3. Verifier of "better" ≠ the proposer (A1).
- **Constitutional anchor:** the kernel + this pipeline's meta-rules are a human-ratified genesis block the AI proposes-against but cannot edit ("who governs the governor").
- **Purification hardening (§B):** PAE (ARCH-00399) gains a claim-level preservation check (PURIFIED preserves ALL material claims of RAW, and only those) + a purification_trace ledger.
- **Archive hygiene (§B):** disposition in every search result; reopen-conditions EVALUATED on retrieval; periodically cluster near-duplicate rejections.

## WHAT CHANGES / WHAT DOES NOT
CHANGES: top-level model (tree→graph); precedence (total-order→typed-sequence); triage (score→gates+fail-up); "flawless" (feeling→green-gate); WHAT (prose→invariant); adds verify-seam, vault-SLA, rollback/epochs, capacity limits.
DOES NOT CHANGE (defend — conclusion E): RAW/PURIFIED + trust-tier; disposition archive; refusal-first; the axiom's INTENT; Governor as sole ratifier; git-SSOT.

## PHASING (build-one-to-flawless; MVP = highest-leverage + smallest surface)
- **MVP:** Part 4 verify-seam (standing gate) + Part 3 WHAT-as-invariant + Part 2 vault drain-SLA. These three are the cheapest, highest-leverage, and gate everything else's trustworthiness.
- Then: the graph model (Part 1) via the first corespine TRIAL (Inheritance candidate, IBD-0017 P2) under the green-gate.
- Then: control-plane precedence + capacity + axiom/anchor wiring.

## PATH REJECTION (§2 principle 8)
Pure inheritance tree (DEC-0003 class); total-order precedence (DEC-0006); "flawless as feeling"; prose WHAT (DEC-0005). Rationale: the 6-reviewer convergence (consolidation §A) + archive dispositions.

## REVIEW STATUS
Authored by Opus (main loop). Independent review by cisem-opus-pe (default-refute, Part 4 dogfooded) — **VERDICT: UNSOUND 2026-07-19** (5/5 base rate held). Findings to route (D3/D4) before re-review:
- **H1 (HALT):** "AI can read but not modify the kernel" is an unenforceable prose assertion (the AI writes the whole repo incl. hooks). Fix: honest framing — immutability rests on human ratification + git review + optional out-of-repo/human-signed seal; name the residual. Do NOT assert an unqualified "AI cannot modify."
- **H2 (HALT):** the verify-seam overclaims — "closes" the judge-jury seam via the SAME base model (only reduces it; R1/R3/R4), and names no MECHANICAL TRIGGER that fires a cold instance per creation. Fix: "closes"→"reduces"; specify the dispatch trigger (events, blocking vs advisory); pair with the external-review cadence for real model-independence; state the shared-base-model residual.
- **M1:** structural-wrongness protocol (wrong cardinality; §B/R5) dropped — and Part 1 "never births, only prunes" FORBIDS adding a needed domain. Add a genesis re-grounding-to-ADD path.
- **M2 (needs Governor):** validation root (CS-MASTER-VALIDATION-001) is unplaced in the graph, and DEC-0004 (two-root CREATION-vs-VALIDATION) is silently ignored though Part 2 is exactly its reopen-trigger. Place validation + set the default precedence.
- **M3:** overlays absent from the precedence sequence (Part 1⇄2 seam) — type overlay claims into precedence.
- **M4:** Part 3 wizard diverges from RATIFIED ARCH-00394 without a supersede/re-ratify path (A8/I10). State the relationship + route the ratified-artifact change.
- **M5:** rollback/versioned-atomic-default-swap (§B/R4) only name-dropped — give it a Part 2 home.
- **M6:** boundary-gaming half-folded — add the second-tier-reach monitor (§B/R5-R6).
- **M7:** downstream/deployed-app graceful-degrade halt contract dropped (R1 C9/R2; IBD-0012 baked it in) — add it.
- **M8:** reopen-bar commits the named≠active sin — carry R4's caveat (the artifact structures human judgment, does not mechanize it).
- **Mod1:** Existing-First missed ARCH-00382 (unified-graph plan) — search + relate. **Mod2:** kernel/control-plane vs A2/A3 — state the carve-out. **Mod3:** per our own green-gate (Principle 15), scope the ask to PROVISIONAL-ACTIVE-FOR-TRIAL, seal only after trials. **Mod4:** phasing seam (WHAT-as-invariant depends on the deferred graph). **Min1:** locate "institutionalize external constitutional review".
NOT done until re-review returns zero unrouted findings (I22/A1). Full verdict: agent ad948bd54730633f8.
