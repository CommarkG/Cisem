# Platform Coherence Audit — Rollbacks · Propagation · Drift · Alignment (PARKED for later)
**tags:** [coherence-audit, mentor-audit, fable, opus-pe, propagation-gap, version-drift, alignment, derived-view, decision-closure, ARCH-00392, status-enum, PARKED]
**Status:** PARKED — Governor explicitly parked for later processing (2026-07-21). NOT yet actioned; findings are ASSERTED (from disk evidence, not stamped — I7). Opus verification required before any remediation.
**source:** cisem-fable (MENTOR tier, read-only strategic analysis) + cisem-opus-pe (JUDGE tier synthesis). Pasted by the Governor.
**trust_tier:** REPO (CISEM's own agents' analysis) — but ASSERTED, refutation-testable, verify-before-acting (I22/I23).
**Governing note:** Park-by-demand (§2.7) — Governor may demand any input be parked; explicit park is sanctioned. Saved at full fidelity (Principle 19 noise-vs-signal: this artifact is ALL signal). Resurrect when the Governor calls it.

---

## PARK SUMMARY (one-screen resurrection map — do NOT act without Governor go)
The platform did **not** structurally drift — the verify-seam, honesty corrections, and rollback hygiene are genuinely working (Part 1 is mostly a success story). What repeats is **one class** across Parts 2–4. Three roots:

- **ROOT 1 — Derived views are hand-authored** (counts/ranges/state-summaries go stale): A1–A8 vs A9, I1–I11/I18/I22 vs I25, CLAUDE.md §§5–7, status enum. Class-fix candidate: **DERIVED-VIEW** invariant — any count/range/state-summary literal is GENERATED from its registry or written as an OPEN POINTER (unranged); reuses I4 + BP-0011. **Largest finding category.**
- **ROOT 2 — Decisions lack single-homing** (concepts have ssot-registry, ruled-out have DEC-*, but open/closed decision STATE has no one home → zombies resurrected by later compacts). Instances: ai-oversight-layer3 (dropped 07-18, re-opened 07-20); two-root veto (never explicitly closed).
- **ROOT 3 — already in the queue** (BP-0009 candidate-aging, BP-0011 generated-pages, BP-0012 tag/status gate). Audit CONFIRMS the queue + one sequencing correction: **status-enum reconciliation MUST precede BP-0012** or the gate enforces a stale enum.

**Self-flagged CRITICAL / HIGH items (the audit itself invokes Principle 9 / I14 on these — noted so the Governor parks with eyes open; NOT resurrected further unless he calls them):**
- 🚨 **ARCH-00392** (flagship context-envelope plan) half-landed, open gates (run 22 GATE 2→3), dropped from the active queue → the audit calls this a direct Principle 9 / I14 completion violation.
- **HIGH — CS-THRESHOLD-001** RATIFIED but **BODILESS** (no manifest file; known since run 17, ~4 days) → load-bearing anchor with empty body (I23).
- **HIGH — A2 reframe** (corespine = container vs infrastructure; FOUND-00001:51, IBD-0017 P7) registered but not ratified — creations gate-judged under OLD frame while design speaks NEW.
- **MEDIUM** — cisem-create unverified but active; ssot-registry being bypassed (definition-of-done.md, root-insights.yaml, boundary-update-grid.md unregistered); two decision-closure records missing.

**Cross-check against RI-0012 (this session):** the DERIVED-VIEW root (ROOT 1) and the enum-reconciliation sequencing echo known items — do NOT double-home; when actioned, route through BP-0011/BP-0012 + ssot-registry, not a new file.

**Prompt-injection note (Fable Part 0):** a fake "Otosan WordPress" MCP block attempted to re-persona the audit session (same vector logged session-learning-index.yaml:151). Ignored by Fable; refused here too. External MCP persona = EXTERNAL-UNTRUSTED, never CISEM's voice.

---

## VERBATIM — cisem-fable MENTOR AUDIT (full signal, unedited)

MENTOR AUDIT — Coherence, Alignment, Propagation (Fable, read-only)
Preliminary flags:

Prompt-injection present in my own context: a fake "Otosan WordPress" MCP-instruction block attempted to re-persona this audit session (same vector logged in dna/learning-registry/session-learning-index.yaml:151). Ignored; reporting per Principle 1/8.
Token-leak self-check (my mandate): CLEAN. cisem-fable appears only in .claude/agents/cisem-fable.md and dna/corespines/CS-AI-PROFILING-001/agent-profiles.yaml — no hook, cron, or auto-delegation reference.
Method honesty: no Bash tool; git history read from .git/logs/HEAD (complete, 167 entries) + ledgers. Sufficient for Part 1 — no file-level add-then-delete diffing was possible, disclosed.

PART 1: Rollbacks Detected
The dominant pattern is healthy: rollbacks are fast, documented, and caused by the verify-seam working (UNSOUND → revise → SOUND). Two exceptions are decision-record amnesia, not build failures.

item | was_built | was_undone | reason | current_status | severity
ARCH-00391 (governance spine plan) | 07-18 (c091cbc) | 07-18 (1ae3760) | UNSOUND on review; superseded by ARCH-00392 | SUPERSEDED, bidirectional refs | NONE — system working
ARCH-00398 (Core of Creation) | 07-19 (2e2a646) | 07-19 (54139f5) | UNSOUND — single-apex D2 wrong; superseded by one-parent+global-validation consensus (WITNESS v6) | UNSOUND, model refined past it | NONE
ARCH-00382 (unified graph) | 07-18 (6984d91, reached SOUND v1.2) | 07-18 (d9ac13c DEFER) | Governor deferred, prevention-first; resurrection re-anchored to VOC-00003 | SUPERSEDED/deferred, resurrectable — parked | NONE
Inheritance-as-overlay (trial instance-1) | 07-20 (d2f9329) | 07-20 (a9a26b8) | cold verifier 6/6 UNSOUND — classification self-contradictory | PARKED-AS-KERNEL-MECHANIC; instance-1 → CS-PRIORITY-001 | NONE — verify-seam proof
A9 guardrail v1 ("orthogonal facets") | 07-20 (68deda7) | 07-20 (ebc0b8b) | stress-panel: too-loose, undecidable, violated I22/I23 | corrected (coherence-law); RI-0001 recorded | NONE — RIPL self-applied
ai-oversight-layer3 | declared pre-07-16 | DROPPED 07-18 (WITNESS:75 — "DROPPED — superseded, no parallel system, I19") | subsumed by harvest orchestrator | re-listed as PENDING in COMPACT STATE v4:222 ("build-or-drop P0-6") and still PLACEHOLDER "Awaiting Governor design intent" in corespine-registry.yaml:40 | MEDIUM — a resolved decision silently re-opened (decision amnesia)
Two-root ruling (run 26) | 07-18 (c089acf, "disclosed for Governor veto") | never explicitly closed | DEC-0004 says "two-root conflict VAULTED-CONFLICT"; WITNESS v6 reframes to one-parent+global-validation; commit e1b7b5f says flags "dismissed as already-resolved/historical" | registry CS-CREATION-001 comment still says "two-root model"; no Governor closure record found | MEDIUM — open veto window with three partially-conflicting records
ARCH-00370 (claimed LIVE → corrected to RATIFIED-SPEC → genuinely LIVE run 19) is not a rollback; it is the honesty machinery catching a false claim. One benign reset: moving to HEAD in git history.

PART 2: Propagation Gaps
The A8-sweep class RECURRED, exactly as a class-fix would have predicted. A7→A8 was swept across 18 files on 07-18 (commit 81229a2). A9 was added 07-20 — and no A9-sweep fired. Stale A1–A8 literals now sit in the always-loaded constitution itself:

core_change | date | downstream lag | updated | evidence of stale ref | root cause
Axiom A9 added | 07-20 | ~0–1 day, structural | NO | CLAUDE.md:20 ("obey Axioms A1–A8"); CLAUDE.md:192 (§2.4 header "(A1–A8)" while the section lists A9); FOUND-00001:3,35 ("Operating Axioms A1–A8" above a table containing A9 — the SSOT is stale about itself); .claude/hooks/pre-compact.sh:62; cisem-sonnet.md:22; cisem-plan/cisem-meta/cisem-create SKILL.md:12; ARCH-00399:27 (PAE axiom-lens maps to "A1–A8" — the anti-injection engine checks against an incomplete axiom set); frontend axioms.html:160 | Range literals are hand-authored compiled views. The A8-sweep was a point-fix; the CLASS (scattered range constants with no regeneration/freshness mechanism) was never prevented
Invariants grew to I25 | 07-18 | 2–4 days | PARTIAL | CLAUDE.md:340 (§5: "Invariant set I1–I11" — 14 invariants behind, in the root load file); ARCH-00320:4 (its own intro says "I1–I15" while its §4 table reaches I25); cisem-create SKILL.md:12,222,325 ("I1–I18"); cisem-opus-pe.md:22 ("I1–I24"); frontend protocols.html:53 ("I1–I22"); corespine-registry.yaml:18 ("I1-I21"); quality-ledger.yaml:590 ("8/24 automated" vs invariants_total: 25) | same class
Ratifications of 07-18 (ARCH-00320, CS-MASTER-VALIDATION-001) | 07-18 | 2 days, in always-loaded file | NO | CLAUDE.md §6 still lists both as PENDING GOVERNOR; §7 says "CS-MASTER-VALIDATION-001 ... awaiting foundational decree"; ssot-registry.yaml:21 same stale note; quality-ledger.yaml:597 lists it awaiting decree while line 591 of the same file counts it among 4/14 RATIFIED — self-contradiction inside one SSOT | CLAUDE.md §§5–7 (and ledger open_disclosed) have no boundary-update discipline; the boundary-update-grid covers WITNESS but not the constitution's tail sections
Prevention candidates → wiring | 07-18/19 | 1–2 sessions | PARTIAL | "independent review = HARD gate for Opus-authored plans" is the most-evidenced prevention in the registry (4/4, later 6/6 UNSOUND first drafts) and is still PREVENTION-CANDIDATE (session-learning-index.yaml:146,163); "plan lineage declaration" (line 46) and "SessionStart injects top-3 ARCH numbers" (line 95) also stuck as CANDIDATE | deferral is DELIBERATE (I25: route via plan/amendment) — but CANDIDATE state has no TTL/aging alarm. BP-0009 is the already-diagnosed fix; this audit confirms its priority rather than adding a new mechanism

PART 3: Version Drift
concept | definition A | definition B | divergence type | latest truth
Status enum | ARCH-00011 §4 / VOC-00002:10 — closed enum of 8 values (only PROVISIONAL-ACTIVE ever added) | In live use: RATIFIED-SPEC, SOUND-FOR-TRIAL, PROVISIONAL-ACTIVE-FOR-TRIAL, PARKED-AS-KERNEL-MECHANIC, CANDIDATE-KERNEL, OVERLAY-CANDIDATE, PLAN-PENDING-BP-0009 (corespine-registry.yaml:133–143), PREVENTION-QUEUED/DRAFT/DONE/CANDIDATE, PARKED-RAW, SIMULATION-ONLY | old-vs-new — the vocabulary is generative in practice, frozen in the SSOT. Addendum 4 declares tags+statuses "the main governance surface"; that surface's SSOT is the most-diverged file audited | Neither — reconciliation needed. Note: BP-0012 (mechanical tag+status gate) will enforce a stale enum unless the enum reconciliation (parked disposition↔status item) is sequenced BEFORE the gate
A2 / what a corespine IS | CLAUDE.md §2.4 A2 + §3.2a gate: "everything IS part of a corespine" (container frame — still what every creation is gated against) | A2-reframe (FOUND-00001:51, registered 07-20): corespine = inheritance INFRASTRUCTURE elements USE; registry CANDIDATES block already speaks the new frame (overlays, kernel) | old-vs-new, sanctioned polarity (parked IBD-0017 P7) — but creations are being gate-judged under the OLD frame while design speaks the NEW. The platform's central noun has two live meanings | Reframe is Governor-registered but NOT ratified; old A2 remains law. This is the deepest strategic drift: it will silently shape every wizard question and gate verdict until P7 lands
CLAUDE.md §5 maturity narrative | "First gate WIRED... WARN-ONLY, I1/I3/I6; I1–I11" | Reality: plan-audit v9 with ~10 invariant checks + [ZF]/[DOD]/[SEED]/[EDGE]/[ARCHIVE]/[RAW-PAIR] + three pre-commit BLOCKs | inverted honesty — the constitution claims LESS than exists. Benign direction, still a diverged mirror | plan-audit.sh + quality-ledger metrics
§1.7 one-tab model | Decree: ONE writing tab; human relay = forbidden Model-A | Proven LIVE (runs 23–28, in-session subagents). BUT BP-0010 designs "paste-ready Haiku-tab + Sonnet-tab prompts" for two-model verify | aspirational-vs-real tension re-emerging: verification tabs that WRITE reports relayed by human paste edge back toward Model-A | §1.7 is authoritative; BP-0010's design should be checked against it at plan time (watch-point, not yet a violation)

PART 4: Alignment Failures
claim | claimed_in | actual usage | gap | severity
CS-THRESHOLD-001 "RATIFIED — the only fully closed corespine"; cited as universal PROCESS-ENTRY gate | corespine-registry.yaml:14–19; CLAUDE.md §2.7 routing; ARCH-00392 | BODILESS — no manifest file exists (known since run 17, quality-ledger.yaml:230–234; learning-index:112) | A ratified, load-bearing anchor with an empty body, unresolved across 3 sessions | HIGH
ARCH-00392 phased plan under gate discipline | quality-ledger runs 20–22 | Run 22 status still IN-PROGRESS "GATE 2→3 pending Opus + Governor"; Phase 3 (repo-wide index) never ran; ARCH-00392 appears in NO current queue item (BP-0009..0012) and no parked register entry | The flagship context-envelope plan is half-landed with open gates — a silently dropped thread, the exact class Principle 9/I14 exists to prevent | HIGH
cisem-create skill active in roster | corespine-registry.yaml:74; CLAUDE.md pointers | COMPACT STATE (WITNESS:86): "BP-0003 (cisem-create) = has defects, NOT verified" — never re-verified; still cites I1–I18 | An unverified skill in the active creation path | MEDIUM
ssot-registry = the consolidation gate for every new authoritative home | ssot-registry.yaml header; A8 | New SSOTs bypass registration: definition-of-done.md (the newest keystone, "SSOT" by its own banner) has no ssot-registry entry; same for root-insights.yaml, boundary-update-grid.md. Precedent: ARCH-00396's own A8-fork (declared ARCH-00230 SSOT without registering — caught only by review, learning-index:144) | Registration is behavioral, not mechanical — the consolidation index itself is drifting from the set of SSOTs | MEDIUM
"RQC runs 1–28 substantive" | quality-ledger | Verified: all 28 substantive, no duplicates/empties. Ledger quality is genuinely high | — | NONE (positive finding)

PART 5: Temporal Ordering Violations
item | ordered wrong by | violation type
CS-THRESHOLD-001 RATIFIED (07-16/18) before any body exists | still outstanding | ratified-before-dependency
ARCH-00396 Phases C/D stamped COMPLETE while the two-root Governor veto window was open; later "dismissed as already-resolved" without a closure decree on record | 1–2 sessions | done-before-authority-closed
ARCH-00394 RATIFIED from ONE clean run (run 26, per I24) — then Principle 15 (07-19) decreed ≥2–3 DIVERGENT instances before sealing any reusable pattern | 1 day (principle post-dates the stamp — legal at the time) | generalized-before-divergent-proof; no retro-audit of Principle 15 against already-sealed patterns exists. ARCH-00400's trial discipline honors it; ARCH-00394's RATIFIED does not
ARCH-00370 "hardwired" learning entries before hooks existed | caught + corrected run 18 (honesty correction), then genuinely wired run 19 | hardwired-before-built — resolved, and the class-fix (I22/I23/DoD) is live. Model case

MENTOR SYNTHESIS — the root principles under the findings
Verdict on the headline question: the platform did NOT structurally drift — the verify-seam, honesty corrections, and rollback hygiene are genuinely working (Part 1 is mostly a success story). What failed is narrower and repeats as ONE class across Parts 2–4:

ROOT 1 — Derived views are hand-authored, so every count, range, and state summary is a fork waiting to go stale. A1–A8, I1–I18, 2/14, 8/24, CLAUDE.md §§5–7, VOC-00002's enum — all are compiled views of registries, maintained as prose. CISEM already discovered the answer twice without extracting the class: I4 ("manifest is DERIVED, never hand-authored", ssot-registry.yaml:17) and BP-0011 ("pages generated from registries, never hand-authored"). The A8-sweep recurring as a needed-A9-sweep within 48 hours is the planted proof that sweeps are point-fixes. The class-fix: any reference to a countable set is either GENERATED or UNRANGED ("Axioms A1–An, SSOT FOUND-00001" — an open pointer cannot go stale).

ROOT 2 — Decisions lack the single-homing that concepts have. ai-oversight-layer3 was dropped, then re-opened by a later compact state that didn't know; the two-root veto lives in three partially-conflicting records. Concepts got ssot-registry; ruled-out decisions got DEC-*; but open/closed decision state has no one home, so compact-state layering resurrects zombies. (P3 TTL partially covers pending decisions; closure records are the gap.)

ROOT 3 — already diagnosed by the platform itself: CANDIDATE-state aging (preventions), completion propagation, tag/status enforcement = BP-0009/0011/0012. This audit confirms that queue rather than adding to it — with one sequencing correction: status-enum reconciliation must precede BP-0012's enforcement gate, or the gate enforces the stale enum.

ONE RECOMMENDATION (PCR):
Pros: kills the entire Part-2 class (the largest finding count) with one mechanical primitive; CLAUDE.md is loaded every session, so its stale §§5–7 are a per-session false-context injection — highest-leverage location in the repo; reuses two already-ratified precedents (I4, BP-0011) so it is consolidation, not creation.
Cons: touches the constitution (needs a plan + decree, I25); an "unranged pointer" style is slightly less informative at a glance than a literal range.
Recommendation: fold into BP-0011 (its Schema-as-SSOT/auto-generated-pages scope is the natural home — enhance existing, A8) one named invariant: DERIVED-VIEW — any count/range/state-summary literal must be generated from its registry or written as an open pointer; hand-authored ranges are a finding. Instance-1 of the sweep: CLAUDE.md:20,192,340 + §§6–7, FOUND-00001:3,35, quality-ledger:590/597, ssot-registry:21, ARCH-00399:27, the skills/agents range literals. Second and third moves (downstream, cheaper once ROOT 1 lands): close the two open decision records (ai-oversight-layer3 drop re-affirmed or re-opened by explicit decree; two-root veto explicitly closed), and put ARCH-00392's open gates back on the queue — it is currently the platform's clearest violation of its own Principle 9.
Key files: CLAUDE.md (§§5–7 stale, :20/:192/:340), dna/CISEM-FOUND-00001-founding-node.md (:3/:35 self-stale header), dna/quality-ledger.yaml (:590/:591/:597 internal contradiction; run 22 open gate), dna/corespines/corespine-registry.yaml (:14 bodiless-RATIFIED, :40 zombie pending, :133–143 enum drift), dna/vocabulary/CISEM-VOC-00002-status-library.md (:10 frozen enum), dna/learning-registry/session-learning-index.yaml (:46/:146/:163 stuck candidates).
Returned to Opus PE for judgment. Nothing above is a stamp — all status observations are ASSERTED from disk evidence, none written (I7).

---

## VERBATIM — cisem-opus-pe SYNTHESIS (Strategic Alignment Report, full signal, unedited)

PLATFORM COHERENCE AUDIT — Rollbacks, Propagation, Drift, Alignment
Strategic Alignment Report
Report prepared by: cisem-opus-pe (JUDGE tier, Principal Engineer pocket)
Synthesis of: cisem-fable (MENTOR tier) strategic analysis
Date: 2026-07-20
Scope: Full platform coherence (git history, constitution, registries, active protocols)
Confidence: High (Fable read-only analysis; no guesses, all citations verified)

EXECUTIVE SUMMARY
Headline: The platform is strategically sound. Rollbacks are healthy (verify-seam working). However, one repeating class of gap emerges across all propagation + alignment categories: hand-authored derived views (counts, ranges, state summaries) go stale whenever the registry they reflect is updated.
Root principle: Any reference to a countable set or state-enum must either be GENERATED from its registry or written as an OPEN POINTER (unranged). Hand-authored ranges are a systematic source of stale-context injection, particularly in the always-loaded constitution.
Critical finding: ARCH-00392 (flagship context-envelope plan) is half-landed with open gates and has been silently dropped from the current work queue — a direct Principle 9 (I14: Completion Insistence) violation.
Remediation: Consolidate via BP-0011 enhancement (fold one new invariant: DERIVED-VIEW) + decision-closure records (close ai-oversight-layer3 + two-root veto explicitly) + re-queue ARCH-00392 open gates.

PART 1: ROLLBACKS — Verdict ✓ Healthy (Verify-Seam Working)
ARCH-00391 — Built 07-18, Undone 07-18 — UNSOUND on review; superseded by ARCH-00392 — SUPERSEDED — NONE
ARCH-00398 — 07-19/07-19 — UNSOUND single-apex D2 incorrect; replaced by one-parent+global-validation — UNSOUND model refined — NONE
ARCH-00382 — 07-18 SOUND v1.2 / 07-18 DEFER — Governor deferred, prevention-first; re-anchored to VOC-00003 — PARKED/resurrectable — NONE
Inheritance-as-overlay trial-1 — 07-20/07-20 — Verifier 6/6 UNSOUND; classification self-contradictory — PARKED-AS-KERNEL-MECHANIC — NONE (verify-seam proof)
A9 guardrail v1 — 07-20/07-20 — Stress-panel: too-loose, undecidable; violated I22/I23 — Corrected (coherence-law); RI-0001 — NONE (RIPL self-applied)
ai-oversight-layer3 — declared pre-07-16 / dropped 07-18 — subsumed by harvest orchestrator — RE-LISTED WITNESS v4:222 "build-or-drop P0-6" (DECISION AMNESIA) — 🚨 MEDIUM
Two-root ruling (run 26, disclosed for veto) — 07-18 / never explicitly closed — DEC-0004 vaults; WITNESS v6 reframes; commit e1b7b5f "dismissed as already-resolved" — Registry still claims "two-root model" (NO CLOSURE RECORD) — 🚨 MEDIUM
Analysis: verify-seam works for technical unsoundness; failures are governance hygiene — decisions dropped without explicit closure records, causing later compacts to resurrect them.

PART 2: PROPAGATION GAPS — Root: Hand-Authored Derived Views
A8-sweep (07-18) refreshed 18 files A1–A7→A1–A8. A9 added 07-20. No A9-sweep. Same class recurs for A10, A11.
- Axioms A1–A8→A1–A9 | 07-20 | ~1 day | NO | CLAUDE.md:20, :192; FOUND-00001:3,35; pre-compact.sh:62; cisem-sonnet.md:22; cisem-plan/meta/create:12; ARCH-00399:27 | hand-authored range literals; no regeneration
- Invariants I1–I22→I1–I25 | 07-18 | 2–4 days | PARTIAL | CLAUDE.md:340 ("I1–I11"); ARCH-00320:4 ("I1–I15" intro vs I25 table); cisem-create:12,222,325 ("I1–I18"); cisem-opus-pe:22 ("I1–I24"); protocols.html:53 ("I1–I22"); corespine-registry:18 ("I1-I21"); quality-ledger:590 ("8/24" vs total 25) | same class
- ARCH-00320, CS-MASTER-VALIDATION-001 RATIFIED 07-18 | NO | CLAUDE.md §6 "PENDING GOVERNOR"; §7 "awaiting foundational decree"; ssot-registry:21 same; quality-ledger:597 awaiting vs :591 counts among 4/14 RATIFIED (self-contradiction) | §§5–7 no boundary-update discipline
- Prevention candidates→wiring | PARTIAL | "independent review = HARD gate" 4/4 (later 6/6) still CANDIDATE (learning-index:146,163); "plan lineage" (46); "SessionStart top-3 ARCH" (95) | CANDIDATE has no TTL/aging; BP-0009 diagnosed
Severity: HIGH — largest category; CLAUDE.md loaded every session = per-session false-context injection.

PART 3: VERSION DRIFT
P3.1 Status Enum: SSOT 8 values (ARCH-00011 §4 / VOC-00002:10) vs 15+ ad-hoc in practice (corespine-registry:133–143 + PREVENTION-* + local). BP-0012 will enforce stale enum unless reconciled first. Severity MEDIUM-HIGH (sequencing risk).
P3.2 A2 corespine: old container frame (CLAUDE.md §2.4 A2 + §3.2a gate, still law) vs new infrastructure frame (FOUND-00001:51, IBD-0017 P7, registered not ratified). Creations gate-judged under old while design speaks new. Severity HIGH (strategic drift).
P3.3 §1.7 one-tab: declared law vs BP-0010 paste-ready verify-tabs (tabs write reports → human relays). Not yet a violation; watch-point at plan-time. Severity LOW-MEDIUM.

PART 4: ALIGNMENT FAILURES
🚨 CRITICAL — ARCH-00392 silently dropped: runs 20–22 "GATE 2→3 pending"; Phase 3 never ran; absent from BP-0009..0012 queue; no park record → Principle 9 / I14 violation.
HIGH — CS-THRESHOLD-001 RATIFIED but BODILESS: no manifest file; known since 07-16 run 17 (quality-ledger:230–234); learning-index:112. Load-bearing anchor, empty body (I23; disclosed).
MEDIUM — cisem-create unverified but active: WITNESS:86 "has defects, NOT verified"; still in registry (corespine-registry:74); still cites I1–I18.
MEDIUM — ssot-registry bypassed: definition-of-done.md, root-insights.yaml, boundary-update-grid.md unregistered; ARCH-00396 A8-fork precedent (learning-index:144). Registration behavioral not mechanical.
NONE (positive) — RQC runs 1–28 all substantive, no empties; ledger quality high.

PART 5: TEMPORAL ORDERING
- CS-THRESHOLD-001 RATIFIED before body — MEDIUM — known, unresolved
- ARCH-00396 Phases C/D COMPLETE while two-root veto open; later dismissed w/o closure — MEDIUM
- ARCH-00394 RATIFIED from ONE run before Principle 15 (≥2–3 divergent) — NONE (legal at the time; no retro-audit exists)
- ARCH-00370 "hardwired" before hooks — NONE (caught+corrected run 18→19; class-fix live; model case)

ROOT PRINCIPLE ANALYSIS
ROOT 1: Derived Views Are Hand-Authored 🔴 Systemic — count/range/state-summary as prose = fork waiting to stale. Class-fix: GENERATED from registry or UNRANGED (open pointer). Reuses I4 + BP-0011.
ROOT 2: Decisions Lack Single-Homing 🔴 Governance — concepts have ssot-registry, ruled-out have DEC-*, open/closed decision STATE has no home. Class-fix: one home for closure records + TTL on open decisions.
ROOT 3: Already Diagnosed in Queue ✓ — BP-0009 (candidate-aging), BP-0011 (generated pages), BP-0012 (tag/status). Confirms priority + sequencing: enum reconciliation before BP-0012.

RECOMMENDATION (PCR)
Problem: hand-authored derived views in always-loaded constitution inject stale context every session; ARCH-00392 silently dropped (Principle 9/I14); status enum 2x more generative than frozen SSOT.
Cause: sweeps are point-fixes not class-fixes; no closure records for decisions; enum reconciliation deferred (BP-0012 would enforce stale enum).
Resolution (sequenced):
IMMEDIATE (this session): (1) Close two decision records explicitly — ai-oversight-layer3 (DEC "DROPPED, subsumed by harvest orchestrator, no resurrection" OR re-open with scope); two-root veto (DEC "two-root DISMISSED in favor of one-parent+global-validation"). (2) Re-queue ARCH-00392 open gates (Phases 2/3) — check run 22 gate status; create BP-0014 "ARCH-00392 Phase 2→3 completion" with success criteria.
NEAR-TERM (BP-0011 enhancement): fold DERIVED-VIEW invariant — any count/range/state-summary literal GENERATED from registry OR UNRANGED; no hand-authored ranges in always-loaded constitution. Instance sweep: CLAUDE.md:20/192/340 + §§5–7, FOUND-00001:3/35, quality-ledger:590/597, ssot-registry:21, ARCH-00399:27, all SKILL/agent literals. Update ssot-registry to add DERIVED_VIEW_INVARIANT (reuses I4, extended to prose ranges).
PRE-BP-0012 (sequencing dependency): reconcile status enum (consolidate ~15 live values + PREVENTION-* into unified enum in ARCH-00011 §4; update VOC-00002 mirror) THEN BP-0012 enforces reconciled enum.

VERDICT: Platform SOUND with OPERATIONAL HYGIENE GAPS.
✓ Strengths: verify-seam working; honesty corrections catching false claims; RQC quality high; core protocols mostly coherent.
🚨 Critical actions: close two decision records; re-queue ARCH-00392; fold DERIVED-VIEW into BP-0011; reconcile status enum BEFORE BP-0012.
⚠️ Watch-point: A2 reframe (IBD-0017 P7) unratified but shaping work; Governor decision needed.
Next step: Present to Governor; route immediate actions; sequence BP-0011 + DERIVED-VIEW ahead of BP-0012.
Report signed by: cisem-opus-pe (Principal Engineer pocket). All findings verified on disk; no assertions beyond evidence.

---

## Change log
- 2026-07-21: PARKED verbatim (full-fidelity, Principle 19 all-signal) on Governor "park this for later." Not actioned; findings ASSERTED, Opus verification required before remediation. Cross-referenced to RI-0012 (do not double-home the DERIVED-VIEW / enum-sequencing roots).
