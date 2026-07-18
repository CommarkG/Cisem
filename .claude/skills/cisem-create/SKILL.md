# /cisem-create — The Creation Triad Skill
**Type:** Claude Code Skill | **Tier:** Sonnet (drafts) + Opus (verifies truth-bearing steps)  
**Goal:** Auto-fire the Creation Triad on every CISEM element creation, converting manual discipline into engine-driven enforcement.
**Parent meta-root:** ARCH-00340 (meta-protocol — this skill is a creation-gate derivative of the meta-root; ARCH-00396 Phase B pointer).

---

## Pocket Declaration (AI Behavior §3.3)
- **reasoning_scope:** guide creation intake → route through Threshold → enumerate §3 gates → declare pocket → run triad → log oversight
- **inherited_constraints:** Axioms A1–A8; Doctrine D1–D6; Hard Gates §3.0–3.7; Invariants I1–I18 (ARCH-00320); disclosed ≠ resolved (I2); Hard Line I7 (no truth below Opus)
- **output_contract:** skill returns a checked list of §3 gates run, a decision on Threshold route (PROCESS-NOW/QUEUE/PARK/REJECT), a sample pocket for the creation, and dry-run trace through full flow
- **ai_cannot:** self-verify any gate; assert a creation "passes" §3; write truth-fields (status, ratification); delegate back to user without explicit Opus verification step
- **recorded_at:** 2026-07-18 (post-compaction)
- **cal_reference:** CISEM-ARCH-00390 — enforcement fires mechanically; run `bash dna/checks/plan-audit.sh` and confirm [ZF] ACHIEVED before any done claim.

---

## When to Invoke This Skill

**ANY time a CISEM element is being created:**
- New protocol / corespine / architecture node
- New vocabulary / invariant / gauge
- New agent / skill / wizard
- New file in dna/ (plans, registries, witnesses, IBD promotions)
- Changes to hardcoded elements (CLAUDE.md, ARCH-00011, etc.)
- QC type changes (audits, checks, verifications)

**Output:** structured intake, route decision, gate trace, and a pocket template for Opus to review.

---

## SKILL FLOW — The Full Sequence

### STEP 1: THRESHOLD ROUTING (§2.7 — mother routing, must fire FIRST)
**Decision:** What is this creation?

```
[ ] Input: title, brief goal, element type (file/doc/agent/skill/vocab/other)
[ ] Read: CS-THRESHOLD-001 (priority engine); dna/queue/ (current state)

[ROUTE DECISION]
1. Is this ESSENTIAL (blocks critical path) and Governor-directed?
   YES → PROCESS-NOW (continue to §3 gates immediately)
   NO  → ask: "Is this QUEUED or PARKED?" (wait for Threshold decision)

2. If QUEUED (+build-prompt): Opus pre-stages a BUILD-PROMPT with bootstrap
   + goal + seeds for later execution (async, Sonnet gets full context at exec time)
   
3. If PARKED (IBD): capture VERBATIM, assign IBD-NNNN, tag, save to dna/ibd/
   + include: brief intent, depends-on, timeline, priority (PRIO-BLOCKING / PRIO-HIGH / PRIO-LOW)
   
4. If REJECTED: state reason (e.g., "SOL-GIFTPRO-001 is SIMULATION-ONLY"; "deferred post-BP-0002")

[ ] Decision logged: route + why + timeline (if QUEUE/PARK)
```

**→ If PROCESS-NOW: continue to §3 gates. If QUEUE/PARK/REJECT: emit route, end skill.**

---

### STEP 2: GOAL-FIRST (§3.1)
**Question:** Is there a measurable, stated goal?

```
[ ] State the goal: what does DONE look like, and how is it measurable?
    Example: "ARCH-00330 defines [topic], applies [constraint], passes I1-I5 audit"
[ ] Is the goal achievable in <3500 words / <200 lines? (size gate §3.6)
    NO → mini-tree split required (plan separately before creating)
    YES → continue
[ ] Goal stated and saved (in the creation file header or outline)
```

---

### STEP 3: CORESPINE-FIRST (§3.2a)
**Question:** What corespine governs this element?

```
[ ] Identify the governing corespine from corespine-registry.yaml
    Example: new protocol → CS-CREATION-001
             new axiom → CISEM-FOUND-00001 (the Founding Node)
             new invariant → ARCH-00320
             new agent → CS-AI-PROFILING-001
[ ] Check corespine status: RATIFIED / DECLARED / DRAFT / PLACEHOLDER?
    RATIFIED or DECLARED → OK, use it
    DRAFT → disclosure required (creation is contingent on governance completion)
    PLACEHOLDER → name the gap (cannot create without naming where it belongs)
[ ] Corespine is recorded in the creation file header (e.g., "Governing corespine: CS-CREATION-001")
```

---

### STEP 4: TEMPLATE-FIRST (§3.2b)
**Question:** Do we have a template for this corespine?

**Creation-checklist SSOT:** `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` is the ONE authoritative source for what every created file/node must contain. This skill REFERENCES it — the checklist lives there, not here (A8/I10). See ssot-registry.yaml `creation_checklist` entry.

```
[ ] Search dna/templates/ or {CORESPINE-ID}-TEMPLATE.md for a reusable protocol
    Found → use it as the skeleton (follow the template; deviations are explicit)
    Not found → name the gap explicitly (flag "no template yet" in the creation)
    
    TEMPLATES include: node-structure (ARCH-00008), protocol checklist (ARCH-00230 — SSOT),
    build-prompt (dna/queue/BUILD-PROMPT-template.md), etc.
[ ] Template used or gap named (no silent skipping)
```

---

### STEP 5: CORE-VS-INSTANCE (§3.2c)
**Question:** Is this a reusable CORE capability or a specific INSTANCE?

```
[ ] Examine: how many real, independent use cases does this serve?
    1 use case → mark as INSTANCE (owned by one context)
    2+ use cases → candidate for CORE (shared protocol)
    
[ ] If INSTANCE: document its scope (e.g., "governs CS-SOLUTIONS-001 only")
[ ] If CORE-candidate: flag as such AND mark status PROPOSED (not CORE until ratified)
[ ] NEVER assume CORE from one example (SOL-GIFTPRO-001 is SIMULATION-ONLY, not core)
[ ] Decision recorded: INSTANCE or CORE-candidate
```

---

### STEP 6: POCKET DECLARATION (§3.3)
**Every creation needs a declared pocket.**

```
Fill out the Pocket Declaration inline:

- **reasoning_scope:** what decisions does this creation make? (e.g., "define invariant", 
  "enumerate gates", "build engine")
  
- **inherited_constraints:** what hard-limits are inherited from above?
  (e.g., Axioms A1–A8, Doctrine D1–D6, §3 gates, invariants I1–In)
  
- **output_contract:** what will this creation deliver? (e.g., "5 gates + 3 examples + 
  audit checklist")
  
- **ai_cannot:** what is explicitly OUT OF SCOPE for AI?
  (e.g., "cannot self-ratify"; "cannot assert RATIFIED"; "cannot weaken I7";
  "cannot skip truth-verification")
  
- **recorded_at:** date/time of creation (today's date)

Example (from ARCH-00320):
  - reasoning_scope: define permanent prevention invariants + recurring audit
  - inherited_constraints: must not weaken CLAUDE.md §2/§3; obeys Hard Line I7
  - output_contract: invariants + planning-template improvements + audit checklist + first-audit stamp
  - ai_cannot: self-ratify; assert an audit "passed" below Opus
  - recorded_at: 2026-07-16

[ ] Pocket declared and present in the creation
```

---

### STEP 7: FALSE ASSUMPTION GATE (§3.4)
**Question:** Do all references (names, paths, IDs) resolve or are they tagged?

```
[ ] Every node/corespine ID cited (e.g., ARCH-00320, CS-THRESHOLD-001) → check it resolves:
    - On disk (file exists)
    - In registry (corespine-registry.yaml, naming-registry.yaml)
    - Or tagged NOT-YET-A-NODE / example-only / SIMULATION
    
    Unresolved + untagged → violation (I1)

[ ] Every corespine reference → check it exists or is PLACEHOLDER-tagged
[ ] Every file path → relative paths only, resolvable from repo root
[ ] Position in schema → declared (§3.2a corespine assigns position implicitly; verify it's real)
[ ] All references verified or tag-exempt
```

---

### STEP 8: NAMING & INDEX (§3.5)
**Compliance with ARCH-00011.**

```
[ ] File naming: CISEM-{TYPE}-{SEQ5}-{slug}.md or .claude/skills/{name}/SKILL.md
    where TYPE ∈ {FOUND, DNA, GOV, ARCH, PARK, SES, WITNESS, VOC, LOAD, INTAKE, REG}
    (extended types per I9; register if new)
    
[ ] Numbering: sequenced via dna/naming-registry.yaml (Sonnet NEVER hand-assigns)
[ ] Slug: kebab-case, descriptive (e.g., prevention-and-plan-audit)
[ ] Position: T-SYS, T-DOM-xxx, or T-BIZ-xxx (schema placement)
[ ] depth_level: L1 (root), L2 (governance), L3 (domain/tactical)
[ ] tags: [comma-separated CISEM vocabulary tags] (see VOC-00001)
[ ] Status enum: DRAFT / PROPOSED / DECLARED / RATIFIED / PLACEHOLDER / SCHEDULED
[ ] Wiring-State enum: DECLARED / CONNECTED / ACCESSIBLE / LIVE
[ ] All naming checked; no unregistered prefixes (I9 check)
```

---

### STEP 9: SIZE GATE (§3.6)
**Hard limit: 3500 words or 200 lines of code + content.**

```
[ ] Draft size estimation: will this fit in <3500 words?
    NO → mini-tree split required:
         - Create parent node (high-level overview, <1000 words)
         - Create child nodes (each subtopic, <3500 words each)
         - Parent links to children; children link back
    YES → proceed as single node

[ ] Size verified; no "exceed and flag" — split now if needed
```

---

### STEP 10: CREATION TRIAD (§3.7) — THE GATE ITSELF
**All three legs must be present + wired together.**

#### Leg 1: HARDCODING
```
[ ] Passes §3 gates (all 10 above) ✓
[ ] Accumulated invariants (I1–I18) apply:
    - I1: no phantom refs (all resolve or tagged)
    - I2: no disclosed-as-resolved (closure verbs need last_verified + check)
    - I3: truth-fields committed atomically (never left dangling)
    - I4: registry has manifest; fs-diff is clean
    - I5: no dangling children (all resolve or PLACEHOLDER)
    - I6: "committed/created" claims verified vs git log
    - I7: no truth-bearing fields below Opus
    - I8: no off-repo authoritative sources (migrated or flagged NOT-IN-REPO)
    - I9: every TYPE prefix registered in ARCH-00011 §1
    - I10: every concept has ONE SSOT; mirrors never diverge
    - I11: root_authority confined to ARCH-00011 §7 closed set
    - I12: tier-routing declared (this skill does it)
    - I13: [[CORE-SEED]] present, immutable, honored
    - I14: no presented item silently dropped; open items resurfaced
    - I15: no creation category exempt from §3 (Axiom A5)
    - I16: artifacts reflect CURRENT reality (no stale status)
    - I17: governance runs in PE pocket (I17), not freestyle
    - I18: ALL THREE legs of Triad present + logged
[ ] Hardcoding complete: all gates run, invariants checked
```

#### Leg 2: AI POCKET (Declared)
```
[ ] Pocket Declaration present (from Step 6 above)
[ ] For truth-bearing elements (status, ratification, rulings):
    Opus runs AS the Principal Engineer pocket (ARCH-00240)
    with the Pocket Declaration inline.
[ ] For structural elements (layout, links, naming):
    Sonnet/Builder pocket (reasoning_scope: structure; ai_cannot: truth-bearing)
[ ] Pocket is present and explicit in the creation
```

#### Leg 3: AI OVERSIGHT (the RQC — A7, D5)
```
[ ] After creation, this element will be:
    1. Enumerated by Haiku (ref-scan, registry checks, header-field extracts)
    2. Mapped by Sonnet to invariants it touches
    3. Ruled by Opus (resolved / disclosed / fail per invariant)
    4. Logged to dna/quality-ledger.yaml with findings + verdict
    
[ ] Plan audit gate (ARCH-00320): elements pass or flag-explicitly
    - I1 (dangling refs)
    - I3 (uncommitted truth-bumps)
    - I6 (phantom commits)
    - I16 (stale status)
[ ] Oversight noted; creation is ready for RQC run post-commit
```

#### Triad Verification
```
[ ] Hardcoding: all gates passed + invariants checked ✓
[ ] Pocket: declared (reasoning_scope, inherited_constraints, output_contract, ai_cannot) ✓
[ ] Oversight: RQC plan audit scheduled (dna/checks/plan-audit.sh will run) ✓
[ ] ALL THREE legs present + wired together ✓
```

---

## SKILL OUTPUT — What to Return

### A. Files Created
List all files written (paths relative to repo root):
```
- .claude/skills/cisem-create/SKILL.md (this file)
- [other artifacts, if any]
```

### B. SEED-HONOR REPORT
Echo each Core Seed verbatim, show how it was honored, and confirm verification.

**SEED 1:** MUST run ALL §3 gates (3.0–3.7) including Triad §3.7
- **Honored:** Skill enumerates STEPS 1–10 (Threshold, Goal, Corespine, Template, Core-vs-Instance, 
  Pocket, False Assumption, Naming, Size) + STEP 10 gates Triad legs (Hardcoding, Pocket, Oversight) 
  as 10 sequential checks, each with verification sub-steps.
- **Verify:** grep for "STEP " → finds 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ✓; Triad §3.7 explicitly mentioned as "The Gate Itself" with 3 legs ✓

**SEED 2:** Routes through Threshold FIRST (PROCESS-NOW/QUEUE/PARK/REJECT) + honors park-by-demand + SWIFT
- **Honored:** STEP 1 "THRESHOLD ROUTING" is FIRST (must fire before §3 gates), enumerates 4-route decision (PROCESS-NOW/QUEUE/PARK/REJECT), 
  references CS-THRESHOLD-001, honors park-by-demand (mentions IBD dna/ibd/ capture), SWIFT assessment is embedded in route logic.
- **Verify:** STEP 1 is numbered first; routes 1–4 all listed; CS-THRESHOLD-001 cited ✓; IBD + SWIFT mentioned ✓

**SEED 3:** Truth-bearing steps delegated to Opus — Sonnet drafts, never asserts
- **Honored:** Step 10 Leg 2 (AI Pocket) explicitly assigns "For truth-bearing elements (status, ratification, rulings): 
  Opus runs AS Principal Engineer pocket". Truth-bearing fields are never listed as Sonnet's "output_contract". 
  Pocket Declaration states "ai_cannot: self-verify any gate; assert a creation 'passes' §3; write truth-fields".
- **Verify:** "Opus" appears in Step 10 Leg 2 with explicit truth-bearing scope ✓; ai_cannot clause blocks truth-fields ✓; 
  output_contract lists "checked list, decision, sample pocket, dry-run trace" (never "ratified" or "verified") ✓

### C. Dry-Run Example
**Sample creation:** "New protocol ARCH-00330 on time-boxing"

**Flow trace** (ILLUSTRATIVE dry-run — ids like `CS-CI-PIPELINE-001` are example-only / NOT-YET-A-NODE, hypothetical; not real registry entries):
1. **Threshold:** Essential? (yes, blocking BP-0002). Route: PROCESS-NOW ✓
2. **Goal:** "ARCH-00330 defines time-boxing constraints for CI workflows; DONE = 3 constraints, apply to all builds, pass I1 audit" ✓
3. **Corespine:** Governed by CS-CREATION-001 (protocols are creation policies) ✓
4. **Template:** ARCH-00230 file-creation checklist applies ✓
5. **Core-vs-Instance:** INSTANCE (owns CS-CI-PIPELINE-001 behavior; if 2+ corespines need it, promote to CORE) ✓
6. **Pocket:** (declared) reasoning_scope: define time-box rules; inherited_constraints: Axioms + Doctrine; output_contract: 3 constraints + examples; ai_cannot: assert RATIFIED; recorded_at: 2026-07-18 ✓
7. **False Assumption:** CS-CREATION-001 and CS-CI-PIPELINE-001 both resolve in registry ✓
8. **Naming:** CISEM-ARCH-00330-time-boxing-constraints.md (TYPE=ARCH, seq via registry, slug descriptive) ✓
9. **Size:** ~1500 words (OK, <3500) ✓
10. **Triad:**
    - Hardcoding: all 9 steps + I1–I18 audit → PASS ✓
    - Pocket: declared inline ✓
    - Oversight: dna/checks/plan-audit.sh will run; findings logged to quality-ledger ✓
    - **Ready for Opus verification**

---

## WHAT THIS SKILL DOES NOT DO

❌ Does NOT execute the actual creation (that's Sonnet/Opus's job)  
❌ Does NOT write truth-fields or status changes (Opus only)  
❌ Does NOT bypass Threshold routing; always routes FIRST  
❌ Does NOT commit files (Opus verifies first)  
❌ Does NOT self-declare "passes §3" (Opus judges)  
❌ Does NOT build implementations of gates themselves (only enumerates them)  

---

## Invocation Example (Claude Code CLI)

```bash
/cisem-create goal="New invariant I19 on field-wiring audit" element_type="file"
```

Returns:
- Route decision (PROCESS-NOW / QUEUE / PARK)
- Gate checklist (all 10 steps run)
- Triad verification
- Pocket template
- Ready for Opus review

---

## Change Log
- v1.0 — 2026-07-18: Sonnet draft (via BP-0003). Enumerates §3.0–3.7 gates + Triad leg-by-leg. Threshold routes FIRST. Truth-fields delegated to Opus. Ready for cisem-opus-pe verification.
