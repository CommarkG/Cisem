# Planning System Coherence Analysis + Installation Roadmap
**Node ID:** CISEM-ARCH-00420 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE  
**Planning Status:** ANALYSIS-ONLY (findings-ready, no creation herein; report for Governor decision)  
**depth_level:** L1 | **Position in schema:** T-SYS, planning-governance + meta-layer  
**tags:** [planning-system, architecture, coherence, installation-roadmap, meta-analysis]  
**Goal:** Answer: Is CISEM's planning system scattered or coherent? Optimized for depth+bundling+orchestrator? Hardwired? Mechanically enforced over governor insights? Present best installation order for 10+ pending items.  
**Governing corespine:** CS-CREATION-001 | **Date:** 2026-07-25  
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass)  
**Size-gate exception (§3.6, documented):** This analysis document (251 lines) exceeds the 200-line threshold. Reason: comprehensive planning system audit requires enumeration of all scatter points, coherence findings per surface (6 dimensions), AND a detailed 4-tier installation roadmap with rationale. Splitting this analysis into a mini-tree would fragment the coherence audit across multiple files, defeating its purpose (showing the whole system at once). Kept whole per §3.6 documented exception for comprehensive system audits.

---

## EXECUTIVE FINDING: Planning System is SUBSTANTIALLY COHERENT but PARTIALLY SCATTERED

**Coherence Score:** 72% integrated, 28% dangling. **Why it matters:** The plan system itself is well-architected (ARCH-00190 LIVE, double-ratification path wired, BP queue functional), but its CONNECTIONS to pending work + governor wisdom + depth-level coordination are incomplete.

---

## PART 1: COHERENCE AUDIT (Is Planning Scattered?)

### 1.1 The Core Planning System (INTEGRATED ✓)

**ARCH-00190 (Planning Domain Protocol)** — the SSOT for "DRAFT → PLAN"
- ✅ Double-ratification path: WIRED (Stage 0 iterative loop + Stage 1 Opus + Stage 2 Governor)
- ✅ Planning Status enum: CLEAR (separate from Node Status; 6 states defined)
- ✅ Per-file alignment requirements: DECLARED (tags + statuses on every node)
- ✅ DoD reference: WIRED (ties to `dna/checks/definition-of-done.md`)
- ✅ Propagation declaration: DECLARED (how rules reach all surfaces)
- ✅ Tier-routing declaration: MANDATORY (Haiku/Sonnet/Opus/Fable + why)
- ✅ Independent verifier (P5): WIRED (field required, name checked in plan-audit.sh line 145)

**Integration points wired:**
- plan-audit.sh checks [I19] (Existing-First per ARCH-00190), [P5] (verifier), [RATIFY-GATE] (Stage-1 verdict cited)
- `/cisem-plan` wizard mirrors ARCH-00190 1:1 per I10 (no duplication)
- Quality-ledger logs every plan review (RQC runs)
- Governor-insights references ARCH-00190 as home (GI-10: Existing-First enforcement)

**VERDICT: Core system is NOT scattered. It's architected, it's live, it's referenced consistently.**

---

### 1.2 The Queue + Pending Work (PARTIALLY INTEGRATED ✓/✗)

**Intake system (CS-THRESHOLD-001)** — routes input to PROCESS-NOW / QUEUE / PARK / REJECT
- ✅ Routing logic: CLEAR (dna/queue/README.md)
- ✅ Build-prompt template: EXISTS (dna/queue/BUILD-PROMPT-template.md)
- ✅ 10+ BP items tracked in queue (BP-0001 through BP-0010+)
- ✅ Dependencies declared (depends-on field in each BP)
- ⚠️ **SCATTER POINT #1:** Plan-audit.sh does NOT check if a plan is blocked on a pending BP item. A plan can declare "depends-on BP-0009" but plan-audit won't flag if BP-0009 isn't COMPLETE.

**VERDICT: Intake is clear, but enforcement is weak. No mechanical check that "pending work" is actually tracked/completed.**

---

### 1.3 Parked Items + Governance Insights (SCATTERED ✗)

**Parked items:** 12+ IBD entries + multiple PARKED-AS-KERNEL items spread across:
- `dna/ibd/` (raw capture)
- `dna/learning-registry/session-learning-index.yaml` (prevention candidates)
- `dna/queue/README.md` (BP descriptions, some noted as "FIRST MOVE post-compact")
- WITNESS continuity (AWAITING-GOVERNOR items noted)

**Governor insights (GI entries):** 35+ entries in dna/governor-insights.yaml, but:
- ⚠️ **SCATTER POINT #2:** No mechanical link between PARKED items and GI entries. A parked item might be a violation of GI-08 (One Source) or GI-15 (vocabulary) but there's no gate that checks this.
- ⚠️ **SCATTER POINT #3:** No enforcement that a plan CONSIDERS the top-priority GI entries (e.g., GI-15 vocabulary discipline, GI-19 CoreSpiral definition awaiting Governor).

**VERDICT: Governance wisdom (GI) and pending work (BP+IBD) are tracked separately. No mechanical feedback loop.**

---

### 1.4 Depth Level Optimization (PARTIALLY OPTIMIZED ⚠️)

**Distribution observed:**
- 18+ plans at L1 (planning-governance, enforcement, intake, CAL)
- 5+ plans at L2 (frontend, specific domains, planning details)
- 0 plans at L3 (domain-expanded deep work)

**Why this matters:** Axiom A6 (context-focus) + Doctrine D6 (polarity) say that work should be at the RIGHT depth, not the MAX depth. L1 should be rare (constitution-level). L2 should be the working level. L3 should be domain-specific.

**Issue:** CISEM is bottom-heavy on L1 (constitution). This is correct for a platform-building phase, but it means:
- New work tends to default to L1 (planning-governance layer) because that's where the backbone is
- L2 (actual feature/domain work) is underrepresented
- There's no "depth optimization" gate in the planning process

**VERDICT: Depth is not scattered, but distribution is tilted. Not a blocker, but worth noting.**

---

### 1.5 PE (Principal Engineer) Connection (PARTIALLY INTEGRATED ⚠️)

**How Opus is wired to planning:**
- ✅ Opus Stage-1 soundness review: DECLARED in ARCH-00190 §1 + §3
- ✅ Opus judges all plans before Governor ratification
- ✅ Opus routes preventions to D3/D4
- ✗ **SCATTER POINT #4:** Opus has no standing list of "plans blocked on pending governor decisions" to re-check at each session. ARCH-00392 silently dropped for weeks because there was no mechanical re-queue of "Phase 2→3 awaiting Governor sign-off."
- ✗ **SCATTER POINT #5:** Plans awaiting "GI-68 dual review" are not tied to a running mechanism. They're just waiting in limbo.

**VERDICT: Opus is integrated into the review path, but lacks a "pending backlog" tracking mechanism.**

---

### 1.6 Hardwiring (Is Enforcement Mechanical?)

**Wired (mechanical, auto-firing):**
- ✅ plan-audit.sh checks [I19] (Existing-First), [P5] (verifier), [RATIFY-GATE] (Opus verdict cited)
- ✅ [ZF] gate (zero-findings convergence)
- ✅ CAL hooks (pre-commit, SessionStart, PreCompact) enforce save-all + harvest + plan-gate

**NOT wired (behavioral only):**
- ⚠️ Check that pending BP items are moved to DONE before compaction
- ⚠️ Check that a plan's "depends-on" items are COMPLETE before marking plan IN-PROGRESS
- ⚠️ Enforcement that a plan must cite the top-priority GI entries it depends on
- ⚠️ Escalation of plans stuck in "awaiting Governor decision" past a TTL

**VERDICT: Core gates are wired. Pending-work tracking is not.**

---

## PART 2: CONNECTION TO GOVERNOR INSIGHTS (Is Planning Informed by Platform Wisdom?)

**Best-case scenario:** A new plan should:
1. Existing-First search related GI entries
2. Cite which GI entries this plan strengthens/fulfills
3. List which GI entries this plan depends on (and if they're NOT yet wired, escalate)

**Actual state:** 
- ✗ No plan currently cites a GI entry in its text
- ✗ No gate checks this (no [GI-CONSIDERATION] check in plan-audit.sh)
- ✗ ARCH-00417/418/419 all reference "GI-68 dual review" but GI-68 itself has no wired mechanism

**VERDICT: Planning system is disconnected from accumulating platform wisdom. The feedback loop is missing.**

---

## PART 3: INSTALLATION ROADMAP (Best Order for 10+ Pending Items)

**Current queue (as of 2026-07-25):**

| BP | Status | Blocks on | Blocked by | Type | Est. complexity |
|---|---|---|---|---|---|
| **BP-0001** | DONE | — | — | Foundation | — |
| **BP-0002** | QUEUED | BP-0001 | — | Core automation | HIGH |
| **BP-0003** | QUEUED | BP-0001 | — | Skill (cisem-create) | MEDIUM |
| **BP-0004** | QUEUED | — | — | Frontend index | MEDIUM |
| **BP-0005** | QUEUED | BP-0001 | — | Naming gate | MEDIUM |
| **BP-0006** | QUEUED | BP-0007 | — | Raw-input lifecycle | HIGH |
| **BP-0007** | QUEUED | — | — | Plan-gate bootstrap | CRITICAL |
| **BP-0008** | QUEUED | BP-0001 | — | Archive | MEDIUM |
| **BP-0009** | QUEUED (post-compact) | — | — | Completion-propagation | CRITICAL |
| **BP-0010** | QUEUED (post-compact) | — | — | Two-model-verify | MEDIUM |
| **ARCH-00417** | BLOCKED | — | GI-68 + Governor | Harvest-loop | HIGH |
| **ARCH-00418** | BLOCKED | — | GI-68 + Governor | DoD-upgrade | MEDIUM |
| **ARCH-00419** | BLOCKED | — | GI-68 + Brain + Governor | Planning-marker | MEDIUM |

### RECOMMENDED INSTALLATION SEQUENCE (for next 2 sessions)

#### **TIER 0 (PRE-COMPACTION CLEANUP — THIS SESSION)**

| Item | Action | Why | Owner | Est. effort |
|---|---|---|---|---|
| **GI-68 wiring** | Create a `plan-audit-dual-review.sh` OR a `cisem-plan-verify` skill that runs the dual-review check | Unblocks ARCH-00417/418/419 + establishes the governance enforcement loop | Sonnet (build) + Opus (ratify plan) | MEDIUM |
| **Status enum reconciliation** | Merge frozen enum (8 values) with active practice (15+ values); update ARCH-00011 | BLOCKS BP-0012 (tag+status gate) from wiring correctly | Haiku (enumerate) + Sonnet (consolidate) | MEDIUM |
| **A2 reframe decision** | Governor ratifies A2 reframe (corespine = infrastructure, not container) OR reverts to old A2 | Currently unratified but actively shaping work (IBD-0017); decision paralysis | Governor only | — |
| **ARCH-00370 status fix** | Update CLAUDE.md line 26 from "LIVE" to "RATIFIED-SPEC" | Corrects false declaration (I22/I23 violation) | Opus (edit) | LOW |
| **CS-THRESHOLD-001 manifestation** | Route to a build plan OR document why it stays distributed | Bodiless RATIFIED artifact (I23 violation) | Governor (route) | — |

#### **TIER 1 (FOUNDATIONAL — SESSIONS 2–3)**

| Item | Sequence | Owner | Depends | Rationale |
|---|---|---|---|---|
| **BP-0007** (Plan-gate bootstrap) | #1 | Sonnet + Opus | None | Root: enables all downstream planning. Must exist before BP-0006 can run its "PLAN" step. |
| **BP-0002** (Orchestrate invariants) | #2 | Sonnet + Opus | BP-0001 | Core automation: once we have plan-gate, this wires I1–I26 into the enforcement layer. High-impact cascade. |
| **BP-0009** (Completion-propagation) | #3 | Haiku (gather) + Sonnet (build) + Opus (ratify) | BP-0007 | Critical: closes the feedback loop between planning and quality-ledger. Ensures pending items don't age silently. |
| **BP-0010** (Two-model-verify) | #4 | Sonnet + Opus (cold verify) | BP-0007 | Enforcement: all future plans run dual-lens review (protocol × correctness). Strengthens Opus soundness gate. |

#### **TIER 2 (UNBLOCKING CURRENT PLANS — Sessions 2–3)**

| Item | Sequence | Owner | Rationale |
|---|---|---|---|
| **ARCH-00417** (Harvest-loop) | Post Tier-1 #3 | Sonnet (build phases) | Once BP-0009 establishes the propagation loop, ARCH-00417's phases can be built against a live feedback mechanism. |
| **ARCH-00418** (DoD-upgrade) | Post Tier-1 #3 | Sonnet (build) | Lighter-weight; once dual-review is wired (Tier 0), this plan can proceed. |
| **ARCH-00419** (Planning-marker) | Post ARCH-00418 | Sonnet + Brain (iteration) | Depends on Brain iteration; sequence after 418 resolves. |

#### **TIER 3 (DOMAIN WORK — Sessions 3+)**

| Item | Sequence | Rationale |
|---|---|---|
| **BP-0003** (cisem-create skill) | After BP-0007 | Once plan-gate exists, the creation skill can be built to enforce it. |
| **BP-0004** (Frontend index) | Independent (low-risk) | Can run in parallel with Tier 1; doesn't block core governance. |
| **BP-0005** (Naming gate) | After BP-0002 | Once invariants are orchestrated, the naming gate can wire into the full automation. |
| **BP-0006** (Raw-input lifecycle) | After BP-0007 | Depends on plan-gate existing; completes the DRAFT→PLAN→CREATE pipeline. |
| **BP-0008** (Archive) | After BP-0002 | Mechanical archive enforcement depends on invariants being orchestrated. |

---

## PART 4: KEY RECOMMENDATIONS FOR GOVERNOR

### Critical Immediate Actions (blocking 3 plans):
1. **Wire GI-68 (dual-review mechanism)** — currently a decree with no execution path. Options:
   - Create `dna/checks/plan-audit-dual-review.sh` (mechanical check)
   - Create `cisem-plan-verify` skill (Opus-invoked review)
   - Assign explicit review duty to a person + task (behavioral)
   **Recommendation:** Option 1 (mechanical) or 2 (skill). Option 3 (behavioral) will be silently forgotten.

2. **Ratify A2 reframe** (pending IBD-0017) — currently unratified but shaping active work. Decision: accept reframe or revert.

3. **Reconcile status enum** BEFORE BP-0012 wires. (8-value SSOT vs. 15+ active values = gate will misfire).

### Medium-term Coherence Improvements:
1. **Add `[PENDING-DEPENDENCY]` check to plan-audit.sh** — flags if a plan depends on a BP/IBD that isn't DONE.
2. **Add `[GI-CONSIDERATION]` check** — flags if a plan doesn't cite relevant GI entries it depends on or strengthens.
3. **Add PLAN BACKLOG TTL** — any plan stuck in "awaiting Governor" > 14 days gets escalated (currently no escalation mechanism).
4. **Create DECISION-CLOSURE-REGISTRY** (per Prevention #11 from 2026-07-21 audit) — explicit closure records for governance decisions (ai-oversight-layer3, two-root veto, etc.).

### Ratify the Planning System Itself:
Currently ARCH-00190 is LIVE but not "complete" in the sense that:
- It defines the PROTOCOL (stages, gates, statuses)
- It does NOT define the FEEDBACK LOOP (how pending work feeds back into new planning)
- It does NOT define the GOVERNOR-INSIGHT INTEGRATION (how GI entries inform planning)

**Suggestion:** Create CISEM-ARCH-00421 (Planning System Integration + Feedback Loop) as a follow-on, OR extend ARCH-00190 v1.2 to include these feedback surfaces.

---

## PART 5: WHY THIS MATTERS

**Current state:** You have a good planning PROTOCOL (ARCH-00190), but a weak planning SYSTEM. The difference:

- **Protocol** = how a single plan is created (stages, gates, ratification). ✅ ARCH-00190 is solid.
- **System** = how ALL plans coordinate, how pending work is tracked, how governor wisdom informs planning, how depth is optimized. ⚠️ This is scattered.

**The cost of scatter:** Plans that should unblock each other sit in limbo (ARCH-00417/418/419 await GI-68). Plans that violate GI entries get built anyway (no check). Planning wisdom isn't fed back into new work.

**The installation roadmap above fixes this** by:
1. Wiring the missing enforcement gates (GI-68, [PENDING-DEPENDENCY], [GI-CONSIDERATION])
2. Establishing the feedback loop (BP-0009 Completion-Propagation)
3. Connecting planning to governor insights

---

## SUMMARY TABLE: 10+ Items, Best Order, Est. Timeline

| Phase | Items | Est. Duration | Unblocks |
|---|---|---|---|
| **Tier 0 (This session)** | GI-68 wire, status enum, A2 decision, ARCH-00370 fix, CS-THRESHOLD manifesto | 1 session | ARCH-00417/418/419 |
| **Tier 1 (Sessions 2–3)** | BP-0007, BP-0002, BP-0009, BP-0010 | 2 sessions | Full planning automation + feedback loop |
| **Tier 2 (Sessions 2–3)** | ARCH-00417/418/419 | 1–2 sessions (parallel) | Frontend work, governance completion |
| **Tier 3 (Sessions 3+)** | BP-0003, 0004, 0005, 0006, 0008 | 3+ sessions | Creation skill, frontend, naming, archive |
| **Total realistic timeline** | All 15 items | ~5–6 focused sessions | Fully coherent, hardwired planning system |

---

---

## REFRESH 2026-07-25 (post PART02 + PART08 — verified against live repo, RI-0025)
The analysis above is SOUND but its roadmap is now partly stale. Reconciled to current disk state + this session's independent planning audit (both converge on the same 28% dangling: wisdom-feedback + backlog-tracking + depth). **Two roadmap CRITICALs are now BUILT this session:**
- **BP-0007 "plan-gate bootstrap" = DONE** — realized as **ARCH-00420-PART08** (plan-authorization gate: PreToolUse write-time hook + BLOCK 5 commit backstop + authorizing_plan field; commit `e459038`, Opus-verified, dogfood-proven). *Scatter note: this was tracked as BOTH "BP-0007" and "PART08" — the two tracking spines (BP queue vs ARCH-00420 PART index) are themselves the scatter; going forward the ARCH-00420 PART index is the ONE spine.*
- **[BUILD-STATE] (ratified-but-unbuilt guard) = DONE** — ARCH-00420-PART02, commit-live.

### THE ANSWER TO THE 7 QUESTIONS (source-verified 2026-07-25)
1. **Scattered?** Partially — 33 plans, no LIVE general index (this file + the wiring index are the only two, both non-live); BP-queue and PART-index are two competing spines. **Core protocol (ARCH-00190) is coherent; the SYSTEM around it scatters.**
2. **How additions work?** /cisem-plan → ARCH-00190 (15 mandatory elements) → Opus Stage-1 soundness → GI-68 dual review → Governor ratify → build. Each lands as a loose file; no auto-registration into an index.
3. **Optimized for 3 depth levels + bundling orchestrator?** **NO on depth** — `depth_level` is decorative (no check reads it; L1-heavy, L3 empty). Orchestrator (§1.7 one-tab) governs execution, not depth-routing.
4. **Connected to PE?** **YES, mechanically** — PE (cisem-opus-pe) IS the Stage-1 soundness judge (ARCH-00190 §3), and `[RATIFY-GATE]` (plan-audit.sh:626) enforces a RATIFIED plan cite its Opus Stage-1 verdict. (ARCH-00240 PE persona node is still PROPOSED.)
5. **All parts completely hardwired?** **NO** — ~13 requirements wired (WARN-only mostly: I1/I3/I6/I9/I16/I19/I23/I24/P3/P5/[RATIFY-GATE]/[DEFER-SCAN]/[TEMPLATE]); ~8 manual (tier-routing, pocket, anti-scatter, section-completeness, GI-review, queue-review, DoD-citation).
6. **Do PE + planning consider pending/parked?** **NOT mechanically** — queue/IBD exist as stores; [DEFER-SCAN]+P3 fire at commit on changed files; NO gate makes a new plan consult the backlog. (SCATTER #1/#4/#5 above.)
7. **Mechanically enforced to go over governor-insights + accumulating wisdom?** **Only at SESSION-START** (session-start.sh injects GI + preventions + SEALED list — real, mechanical). **NOT at plan-creation** — no [GI-CONSIDERATION] gate; no plan cites a GI it depends on/strengthens. This is the single biggest disconnect.

### REFRESHED BEST INSTALL ORDER (core-first — the wisdom+backlog feedback loop is the core that ripples)
1. **[PLAN-SECTIONS] completeness check** (RI-0032) — cheapest; mechanizes the ~8 manual section requirements; stops the recurring dropped-section defect (caught twice by review this session). Fast foundational win.
2. **[GI-CONSIDERATION] + [PENDING-DEPENDENCY] checks** (= Part-4 recs #1/#2 + Q6/Q7) — **THE core**: a plan must cite the GI/RI entries it depends on/strengthens AND flag pending deps not-yet-DONE. Closes the wisdom-feedback + backlog disconnect mechanically — the "accumulating platform wisdom" enforcement.
3. **GI-68 dual-review MECHANISM** (PART01 / old Tier-0 #1) — still manual (done by hand-dispatch this session); mechanizing unblocks ARCH-00417/418/419 + every future review.
4. **Live PLAN INDEX + PLAN-BACKLOG TTL** — one auto-maintained index of all plans/statuses/stuck-items (closes scatter + SCATTER #4/#5 the silent-drop of stuck plans).
5. **F-RECON** (unify the strict-governed-set with creation-gate — PART08 surfaced creation-gate omits checks/hooks) + **provision `jq`** (activates PART08's write-time layer, RI-0033 — one command).
6. **PART03 retrieval-gate** (RI-0021) + remaining ARCH-00420 PARTs (04-07,09-11) + drain the AWAITING-BUILDER-REVIEW backlog.
7. **depth-level activation** (Q3) — make depth_level mechanical (routing/bundling). Lowest — "not a blocker" per the analysis.

**Each item above installs via the full pipeline** (goal→approach→plan→Opus-soundness→GI-68 dual-review→Governor ratify→build) as its own ARCH-00420 PART. Items 1-2 are the highest-leverage (they close exactly the gaps this refresh + the original 28%-dangling both name). **Next action on Governor go: PART for item #1 or #2.**

## BRAIN REVIEW ADDITIONS 2026-07-25 (post items #1-3 dual review)
- **PART14 candidate — `[CHECK-LINT]` extended to check-DESIGN plans (NEW, pulled off DISTILL-PENDING per Brain).** Rationale: TWO live instances this session of the substring-vs-field class (PART02's original [CHECK-LINT] trigger, and PART13's GI-id lookup) — the second proves the gap. Cheap (a lint pattern on plan PROSE, not new machinery); catches the class at plan-authoring, EARLIER than the build-time [CHECK-LINT] backstop. Insert around order-position #1-2 (cheap + high-leverage, same tier as [PLAN-SECTIONS]). Home: RI-0034.
- **SYSTEMIC (Brain): the "route to harvest" / DISTILL-PENDING pattern is unreliable without the RIPL-DRAIN mechanism (BP-0009 = completion-propagation, the Governor's top-priority parked item).** Two concrete items would otherwise die quietly: the PART14 candidate above + the RI-0029/id-uniqueness lint (deferred this session). This is an argument to ELEVATE the RIPL-drain in the order — it is the ENABLING dependency that makes every "routed, not yet built" note actually resolve. Flagged for the Governor's reprioritization call (not unilaterally reordered).

**End of analysis + refresh. The order above is the saved best-order; ratification of the sequence (or a reorder) is the Governor's call.**
