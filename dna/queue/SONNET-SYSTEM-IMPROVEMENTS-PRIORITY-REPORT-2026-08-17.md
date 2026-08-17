---
title: System Improvements Priority Report — for Sonnet
date: 2026-08-17
type: QUEUE | PRIORITY-ANALYSIS
tags: [queue, system-improvements, priority-analysis, sonnet-tier, world-a, world-b]
status: AWAITING-OPUS-REVIEW
opus_review: dna/queue/OPUS-PE-REVIEW-SYSTEM-IMPROVEMENTS-2026-08-17.md
audience: cisem-sonnet (structuring tier)
source: CISEM-UX-UI-COMPREHENSIVE-REPORT-2026-08-17 + deep-audit findings
scope: all system-level improvements needed across UX/UI, enforcement, integration, and governance
priority_framework: Tier-0 (blocking infrastructure) → Tier-1 (foundational wiring) → Tier-2 (current-plan unblocks) → Tier-3 (domain work)
---

# SYSTEM IMPROVEMENTS PRIORITY REPORT — For Sonnet
**Compiled 2026-08-17** | **Source:** UX/UI Comprehensive Report + CIC Auditor findings | **Action:** Sonnet structures plans; Governor ratifies; implementation follows

---

## EXECUTIVE SUMMARY

The UX/UI audit + deep system review has surfaced **4 tiers of improvement work** that collectively unblock the platform's maturation. No single item is isolated; each tier enables the next:

- **Tier 0 (BLOCKING):** 2 infrastructure gaps preventing other work from completing
- **Tier 1 (FOUNDATIONAL):** 5 core wiring tasks that must land before domain work scales
- **Tier 2 (UNBLOCK CURRENT):** 3 tasks that free up 4+ plans currently queued/awaiting decisions
- **Tier 3 (DOMAIN WORK):** 9 product-gap fixes + 4 strategic convergence decisions

**Total workload:** ~25 items. **Critical path:** Tier 0 → Tier 1 → Tier 2, then Tier 3 parallelizes.

---

## TIER 0: BLOCKING INFRASTRUCTURE (Must Complete First)

These two items prevent other work from being ratifiable. Both are mechanical gates; both require infrastructure work.

### 0.1 — Pre-Commit Hook Environment (Blocking FE-I11–I13 automation)

**Problem:**
- `functional-check.mjs` (FE-I11/I12/I13 mechanical gates) exists, is tested, is sound
- **But:** It requires `node` + `jsdom` in the pre-commit hook environment
- **Current state:** Gates exist as manual-runnable scripts (`npm install` in `frontend/tests/`, then `node functional-check.mjs`)
- **Blocker:** Without hook automation, gates are advisory (honored by discipline) not mandatory (enforced mechanically)
- **Impact:** Any frontend work can declare FE-I13 contrast-WCAG "passed" without running the gate; any page can claim FE-I12 single-row compliance without verification

**What needs doing:**
1. Verify hook environment has `node` + `npm` available (may require `.git/hooks/setup` or CI-config changes)
2. Wire `.git/hooks/pre-commit` to run `node frontend/tests/functional-check.mjs` and fail commit if exit code ≠ 0
3. Document the setup in `frontend/README.md` (any dev cloning repo must `npm install` in `frontend/tests/`)
4. Test on at least one real page commit to verify gate fires + blocks on planted violation

**Acceptance Criteria:**
- [ ] `pre-commit` hook calls `functional-check.mjs` with exit-code feedback
- [ ] A planted violation (bad contrast token) causes commit to fail
- [ ] A planted violation (second `.view-bar` on a page) causes commit to fail
- [ ] A planted violation (element removed without Governor permission) causes commit to fail
- [ ] A clean page passes all 4 gates (GATE A/B/C/D)
- [ ] Documentation exists for dev setup

**Owner:** Infrastructure / DevOps (or Sonnet if this is within scope)  
**Estimated effort:** 2–4 hours (assumes node/npm available; if not, add CI setup time)  
**Blocks:** All future FE-I11–I13 claims; graduation of [ZF] gate to BLOCK-mode

---

### 0.2 — Viewport Automation (1366×768 Screenshot Gate — FE-I14 companion)

**Problem:**
- FE-I14 requires Section 8 audit: can the four user-shoes questions be answered from a single 1366×768 screenshot?
- **Current state:** Manual check (builder screenshots, visually inspects)
- **Gap:** No mechanical verification; easy to skip or subjectively pass
- **Impact:** Pages ship with below-the-fold primary actions, orientation questions unanswered below-fold, etc.

**What needs doing:**
1. Set up headless browser automation (Puppeteer or Playwright) to screenshot each page at 1366×768
2. Run against `functional-check.mjs` as a GATE E (not yet wired)
3. Mechanism: check if primary action element has `.getBoundingClientRect().top < window.innerHeight` (above fold)
4. Mechanism: surface-text scan for jargon (stage labels, internal IDs) — automated grep + human review gate

**Acceptance Criteria:**
- [ ] Headless browser captures 1366×768 screenshot of a test page
- [ ] Gate E measures primary-action visibility (y-coordinate check)
- [ ] Gate E flags if jargon (stage labels, internal IDs) appears in visible copy
- [ ] Gate can be run locally (`npm run viewport-audit`) and in CI
- [ ] Documentation exists for what passes/fails

**Owner:** Frontend infrastructure  
**Estimated effort:** 4–6 hours (Puppeteer setup + script + CI wiring)  
**Blocks:** FE-I14 automated compliance; prevents below-the-fold primary-action regressions

---

## TIER 1: FOUNDATIONAL WIRING (Execute after Tier 0)

These 5 tasks wire core mechanisms that are currently behavioral (honored by discipline) into mechanical enforcement. They unlock Tier 2 & 3 work.

### 1.1 — [ZF] Gate Graduation to BLOCK-Mode (ARCH-00270 Phase 2 finalization)

**Problem:**
- `plan-audit.sh` runs `[ZF]` (zero-findings check) and **always exits 0** (WARN-only, never blocks)
- **Current behavior:** prints ✅/✗ for I1–I26 findings, outputs scroll ~2 min long, runner decides whether to proceed
- **Gap:** A plan with OPEN findings proceeds to commit; findings drown in scroll; no enforcement
- **Context:** ARCH-00270 v2 (graduation spec) is drafted, Stage-1 SOUND (Opus reviewed), awaiting Governor final ratification

**What needs doing:**
1. Governor final-ratifies ARCH-00270 v2 (Opus has already run Stage-1 soundness check)
2. Sonnet implements Phase 2: modify `plan-audit.sh` to `exit 1` if any I1–I26 findings surface (currently exits 0)
3. Planted-fail test: commit a file missing a tag+status → plan-audit should FAIL
4. Update pre-commit hook to respect the exit code (currently has `|| true` that swallows it)
5. Document transition: WARN-mode → BLOCK-mode on [date]; notify stakeholders

**Acceptance Criteria:**
- [ ] Governor ratifies ARCH-00270 v2
- [ ] `plan-audit.sh` exits 1 on any I1–I26 finding
- [ ] Pre-commit hook fails commit if plan-audit exit ≠ 0
- [ ] Planted violation blocks commit
- [ ] WARN-mode transition documented (grandfathering, exemptions if any)

**Owner:** Sonnet (implementation) + Governor (final ratification)  
**Estimated effort:** 2–3 hours (code change + testing)  
**Blocks:** Any plan work proceeding with known findings; enables clean [ZF] status

---

### 1.2 — [PREMISE] Tagging (Principle 22 Mechanization — ARCH-00407 extension)

**Problem:**
- Principle 22 (Provenance-Before-Reliance): any claim driving a decision must be tagged MEASURED/SOURCED/ASSERTED/INHERITED-UNVERIFIED
- **Current state:** Manual discipline (builder remembers to tag)
- **Gap:** Unverified premises (like "commit gate takes ~10 min" — actually ~2 min) steer priority unquestioned
- **Blocker for Tier 2:** Multiple pending plans are stuck awaiting decisions based on unverified assumptions

**What needs doing:**
1. Extend `plan-audit.sh` to scan plan documents for `[PREMISE]` tags on quantitative/priority claims
2. Flag if a claim like "this takes X time" or "this is the top blocker" lacks a `[PREMISE: MEASURED/SOURCED/ASSERTED/ASSUMED]` tag
3. Mechanism: regex search for priority-driver keywords ("blocking", "critical", "top", numeric claims) + verify they carry a tag
4. Allow `[PREMISE: ASSUMED-PENDING-VERIFICATION]` as valid (explicit flag); WARN if untagged

**Acceptance Criteria:**
- [ ] `plan-audit.sh` checks for [PREMISE] tags on priority claims
- [ ] A quantitative claim without a tag produces a WARN
- [ ] A priority claim ("this is blocking") without a tag produces a WARN
- [ ] Tagging with [PREMISE: MEASURED] passes
- [ ] Tagging with [PREMISE: ASSUMED-PENDING-VERIFICATION] passes with visible flag

**Owner:** Sonnet  
**Estimated effort:** 1–2 hours (regex + test cases)  
**Blocks:** Plans proceeding on unverified assumptions; enables Principle 22 enforcement

---

### 1.3 — Principle 17 Class-Prevention Registry Routing (Auto-escalation from root-insights)

**Problem:**
- Principle 17 requires: on every error/gap, state the class-level prevention + route to root-insights registry
- **Current state:** Manual tracking in `dna/learning-registry/root-insights.yaml`
- **Gap:** Preventions sit in registry but are NOT auto-propagated into checks/plans/skills
- **Blocker:** A prevention is "recorded" but not "wired"; the same class recurs elsewhere
- **Evidence:** 5 incidents in KL-0002 all have preventions written; none automatically caught future instances

**What needs doing:**
1. Create `dna/checks/prevention-propagation.sh` (new script, wired into pre-commit)
2. Script reads `root-insights.yaml` (all prevention candidates) and checks:
   - Is this prevention mentioned in any existing check/test/script? (if yes: PASS)
   - Is this prevention in a plan's dependencies or gates? (if yes: PASS)
   - Is this prevention documented in CISEM-ARCH-00320 (invariants)? (if yes: PASS)
   - Else: WARN "prevention recorded but not yet wired; review for escalation to checks/plans"
3. Weekly scheduled task (or manual run): review un-wired preventions, escalate highest-value ones to checks

**Acceptance Criteria:**
- [ ] `prevention-propagation.sh` exists and runs without error
- [ ] Script identifies preventions in root-insights.yaml
- [ ] Script checks if each is mentioned in existing checks/plans
- [ ] Unmatched preventions produce a WARN report
- [ ] At least one prevention from the 5 KL-0002 incidents is verified as "wired into a check"

**Owner:** Sonnet (implement script) + weekly: Opus/Haiku (triage un-wired)  
**Estimated effort:** 2–3 hours (script) + 30 min weekly (triage)  
**Blocks:** Preventions becoming mechanical enforcement (vs. staying advisory)

---

### 1.4 — [RATIFY-GATE] Output Routing (ARCH-00420 finding #4: orphaned RATIFIED plans)

**Problem:**
- [RATIFY-GATE] check fires: flags plans that are RATIFIED but lack a `## GI-68 Dual Review` heading + exemption tag
- **Current findings:** 5 RATIFIED plans (`ARCH-00392, 00401, 00403, 00404, 00406`) flagged as PREMATURE-RATIFY in 2026-07-25
- **Status:** Findings emitted → never cleared → float in the scroll
- **Root:** "valued finding that floats" = documentation-without-drainage (no lifecycle, no resolution path)

**What needs doing:**
1. Create a **"floating findings audit"** (new manual gate, part of the weekly cycle): every WARN finding that's been outstanding > 7 days needs escalation
2. Mechanism: `dna/checks/floating-findings-audit.sh` reads plan-audit.sh output log (or a persisted findings file) and flags stale findings
3. For the 5 specific RATIFIED plans: Opus decides: (A) add the exempt tag + re-commit, or (B) schedule a retrospective dual-review, or (C) downgrade RATIFIED status with a note
4. Decision recorded in WITNESS as a closure entry

**Acceptance Criteria:**
- [ ] The 5 orphaned RATIFIED plans are explicitly resolved (exempt tag added OR decision recorded)
- [ ] A new check/script flags findings outstanding > 7 days
- [ ] Weekly cadence established to review & escalate floating findings
- [ ] Clear decision path documented (3 options above)

**Owner:** Sonnet (implement check) + Opus/Governor (decide the 5 plans)  
**Estimated effort:** 1–2 hours (check) + 30 min weekly (triage) + decisions (Governor)  
**Blocks:** Prevents future orphaned findings; closes ARCH-00420 finding #4

---

### 1.5 — External Alignment Axis Formalization (KL-0003 Proposal: predates-changes tracking)

**Problem:**
- Brain's KL-0003 proposes a 5th input-intake axis: `alignment` (predates-changes / conflicts / aligned / n/a)
- **Use case:** Flag when external material (Brain's UX/UI batch) is valuable but hasn't synced to evolved CISEM state
- **Current status:** Demonstrated in KL-0003 frontmatter only; not formalized registry-wide
- **Impact:** Prevents stale external guidance from overriding evolved internal wisdom (e.g., Brain's old token values overriding WCAG-verified current values)

**What needs doing:**
1. Formalize the 5-axis model: `source_trust` · `maturity` · `disposition` · `alignment` · `feeds` (reference the existing 4, add alignment)
2. Update all `dna/knowledge-library/` frontmatter to include `alignment:` field (scan existing 10+ KL files)
3. Create `dna/checks/external-alignment-check.sh`: warns if any external material is marked `predates-changes` + has been in that state > 30 days (stale re-sync needed)
4. Document in ARCH-00399 (purification-alignment-engine) as a new intake-tracking dimension

**Acceptance Criteria:**
- [ ] All KL-* files updated with `alignment:` field
- [ ] External-alignment-check.sh exists and runs without error
- [ ] Check warns on stale predates-changes entries
- [ ] Documentation updated in ARCH-00399

**Owner:** Sonnet  
**Estimated effort:** 2–3 hours (retroactive updates + check script)  
**Blocks:** Prevents stale external guidance from hijacking evolved wisdom

---

## TIER 2: UNBLOCK CURRENT (Execute in Parallel with Tier 1)

These 3 tasks resolve blockers for 4+ plans that are currently queued. They're medium-effort but high-impact for plan flow.

### 2.1 — Brain Consultation Response Integration (§8.2 decision unlocking ARCH-00411)

**Problem:**
- 4 questions sent to Brain (2026-07-21 packet): home (shared core vs. separate) · reality status (product vs. simulation) · design-system SSOT (shared or separate) · gap priority
- **Current status:** Awaiting Brain's written response
- **Blockage:** ARCH-00411 (convergence plan, unifying World A + World B) cannot be drafted until these are answered
- **Cascading blockers:** CS-UX-UI-001 corespine decision, design-system inheritance model, gap-fix prioritization

**What needs doing:**
1. Sonnet prepares a **consensus-integration template** (PCR format, per CLAUDE.md) that structures Brain's answers
2. Once Brain responds: Sonnet structures the answers into a **convergence decision matrix** (shared-core-YES / separate-NO, product-YES/SIM, SSOT-YES/separate, gap-priorities)
3. Sonnet drafts **ARCH-00411** (convergence plan) based on the matrix
4. Opus reviews ARCH-00411 for soundness; Governor ratifies

**Acceptance Criteria:**
- [ ] Response template prepared (for Brain)
- [ ] Brain's response received + documented
- [ ] Convergence matrix drafted (4 decision outcomes)
- [ ] ARCH-00411 draft completed
- [ ] Opus soundness + Governor ratification scheduled

**Owner:** Sonnet (coordination) + Brain (response) + Opus (review) + Governor (ratification)  
**Estimated effort:** 2–3 hours structure + decision time  
**Unblocks:** ARCH-00411, CS-UX-UI-001 status, design-system model

---

### 2.2 — Gap Priority Decision Routing (GAP-01 through GAP-09 → product/demo classification)

**Problem:**
- 9 confirmed UX/UI gaps (persistence, error states, RTL, concurrency, etc.) are flagged but unmarked as "product requirement" vs. "acceptable for demo"
- **Current state:** All 9 awaiting priority decision (from Governor or Brain)
- **Blockage:** No gap-remediation plans can be drafted until this decision lands
- **Example:** GAP-01 (persistence across refresh) is a blocker for a real product but acceptable for an internal walkthrough

**What needs doing:**
1. Sonnet structures a **gap-priority decision packet** (per CLAUDE.md PCR format) for Governor:
   - GAP ID + description
   - Impact if not fixed (for product vs. for demo)
   - Estimated effort to fix
   - Dependencies (what else must be done first)
   - Recommendation: product-req / demo-acceptable / defer
2. Governor marks each GAP with a decision
3. For each GAP rated "product-req": Sonnet sketches a plan entry (ARCH-00412, 00413, etc.)

**Acceptance Criteria:**
- [ ] Gap-priority packet prepared (9 gaps × 5 fields)
- [ ] Governor marks all 9 gaps with a decision
- [ ] Decisions logged in WITNESS
- [ ] Plan sketches drafted for all "product-req" gaps

**Owner:** Sonnet (structure + sketches) + Governor (decision)  
**Estimated effort:** 2–3 hours structure + decision time  
**Unblocks:** Gap-remediation plans (ARCH-00412+)

---

### 2.3 — Front-End Invariant Wiring Status Audit (FE-I1 through FE-I14 — which are truly mechanical vs. behavioral)

**Problem:**
- Deep audit surfaced: FE-I1–I10 are mostly manual checks (grep, inspection); FE-I11–I14 have mechanical gates but with varying completeness
- **Current status:** FE-I13 (contrast gate) is mechanical (GATE A in functional-check.mjs); FE-I12 (single-row gate) is mechanical (GATE B); FE-I11 (behavioral) requires jsdom; FE-I14 (user-shoes) is review-lens (not mechanizable)
- **Gap:** No clear registry of which FE-I are mechanical vs. which require human judgment
- **Impact:** Plans can over-claim FE compliance without running gates; builders don't know which to automate

**What needs doing:**
1. Sonnet audits all 14 FE-I invariants and creates a **FE-Invariant Wiring Matrix**:
   - FE-I# | Rule | Mechanism (mechanical check name / OR "review lens") | Gate exists? (Y/N) | Auto-hooked? (Y/N)
2. For each mechanical gate (FE-I1–I13): verify it exists, runs, and is called pre-commit OR doc states "manual"
3. For review lenses (FE-I14): document the audit checklist + review procedure
4. Update ARCH-00393 (corespine manifest) with the wiring matrix as a new section
5. Flag any gaps: "FE-I8 (dead-link-free) has a check but not pre-hooked" → add to Tier 1 or Tier 3 backlog

**Acceptance Criteria:**
- [ ] Wiring matrix created (14 rows, 5 columns)
- [ ] All mechanical gates verified to exist on disk
- [ ] Review lenses documented with procedure
- [ ] Matrix integrated into ARCH-00393
- [ ] Gaps identified + prioritized for backlog

**Owner:** Sonnet (audit) + Opus (verification)  
**Estimated effort:** 3–4 hours  
**Unblocks:** Clear wiring status; enables future automation prioritization

---

## TIER 3: DOMAIN WORK (Parallelize after Tier 1 complete)

These 13 items are the substantive product/governance improvements that flow from the above foundations.

### 3.1 — The 9 Gap-Remediation Plans (GAP-01 through GAP-09, pending Tier 2.2 decision)

**What they are:**
Each confirmed gap requires its own plan (or plan-section) defining how to fix it. Examples:

- **GAP-01 (persistence):** Spec browser-storage API (localStorage/sessionStorage); wiring paths; test strategy
- **GAP-02 (error states):** Define failure UI; error message copy; recovery flows
- **GAP-04 (RTL):** Audit all pages + layouts against Hebrew input; fix bidirectional text rendering
- **GAP-05 (concurrent edits):** Add locking/versioning on Admin category editor; conflict indicators
- Etc.

**Owner:** Sonnet (draft per plan-wizard per ARCH-00190) + Builder (implementation)  
**Estimated effort:** 30 min–2 hours per gap (depending on complexity)  
**Blocks on:** Tier 2.2 (gap priority decision)

---

### 3.2 — ARCH-00411: Convergence Plan (World A + World B unification)

**What it is:**
Once Brain answers the 4 questions (Tier 2.1), Sonnet drafts ARCH-00411 to unify the two UX/UI worlds:
- One shared universal-principles core (media/application-neutral)
- CS-FRONTEND-001 as World B's home (CISEM's own frontend)
- CS-UX-UI-001 (or enhancement) as World A's home (customer product)
- Design-system inheritance model (shared tokens or separate)

**Owner:** Sonnet (draft) + Opus (soundness) + Governor (ratification)  
**Estimated effort:** 4–6 hours (draft) + review time  
**Blocks on:** Tier 2.1 (Brain response)

---

### 3.3 — Weekly Deep-Pattern Session (Principle 22 + WEE automation — ARCH-00426)

**What it is:**
Currently: manually triggered. Should become: every Monday (or TBD cadence), a session that:
1. Reads the week's root-insights.yaml entries (newly captured preventions)
2. Reads the week's agent-findings.md (what auditors found)
3. Runs the DEEP-ROOT questions (§2.3 of CLAUDE.md) on each finding
4. Identifies cross-finding PATTERNS (the class-level lessons)
5. Hardwires preventions into checks + plans + skills

**Owner:** WEE (Weekly Evolution Engine) coordinator (Opus + Haiku + Sonnet)  
**Estimated effort:** 1–2 hours per week (standing cadence)  
**Blocks on:** Nothing (can run in parallel with Tier 2/3)

---

### 3.4 — Perspective-Diversity Enshrinement (Universal Laws, not CISEM-specific)

**What it is:**
Brain independently re-derived 3 of CISEM's core processes:
- Audit-token-not-instance (Principle 17/18)
- Presence ≠ behavior (FE-I11, I22/I23)
- Fabricated-personalization = I22/I23 class

**Recommendation:** Move these from "CISEM-specific rules" to "universal platform laws" (so other AI instances apply them by default, not by luck).

**Action:** Formalize in a new FOUND node (CISEM-FOUND-00002 or extend FOUND-00001) so these propagate to all governance + training + new projects.

**Owner:** Sonnet (documentation) + Opus (integration)  
**Estimated effort:** 2–3 hours  
**Blocks on:** Nothing (informational enhancement)

---

### 3.5 — Token-Drift Prevention Formalization (ARCH-00428 expansion)

**What it is:**
CISEM has 3 standing collateral-deletion preventions (Principle 18-A). Recommendation: expand to token-drift class.

**Mechanism:** 
- Existing: `deletion-guard.sh` flags file deletes
- New: `token-drift-guard.sh` flags any hardcoded hex/rgb in CSS outside `:root` token set

**Owner:** Sonnet (implement)  
**Estimated effort:** 1–2 hours  
**Blocks on:** Nothing

---

### 3.6 — Page-Inventory Regression Baseline (FE-I14 element-count tracking)

**What it is:**
`functional-check.mjs` GATE D enforces no-collateral-deletion by tracking element counts. First run establishes a baseline for each page; future runs compare.

**Action:** Run once against all `frontend/pages/*.html` to create a `.element-inventory.json` per page, commit to repo.

**Owner:** Sonnet  
**Estimated effort:** 30 min  
**Blocks on:** Tier 0.1 (pre-commit wiring)

---

### 3.7–3.12 — Six Smaller Improvements (catalog items)

| # | Item | Scope | Est. Effort |
|---|---|---|---|
| 3.7 | Document FE-I14 review-lens procedure in a reusable checklist (Section 7.2 discipline into a form) | 1–2 hours | Template creation |
| 3.8 | Automate [PREMISE] tag scanning (Tier 1.2 extended): report all untagged claims in a plan in one pass | 1 hour | Bash script |
| 3.9 | Create a "heading-adjacency" grammar check (catch "§3 Gate Trace" without a matching heading) | 1–2 hours | Regex + test |
| 3.10 | Formalize the "floating findings" lifecycle (WARN → escalate-at-7-days → forced decision) in a mechanical gate | 1–2 hours | Script + cadence |
| 3.11 | Build a "component-state-completeness" audit (every interactive element checked for default/hover/focus/active/disabled/loading) | 2–3 hours | Audit checklist |
| 3.12 | Document the contrast-check procedure (Section 1.6 algorithm) as an automated tool (call from pre-commit) | 2–3 hours | Python/Node tool |

---

## SUMMARY: DEPENDENCY & SEQUENCING

### Critical Path (Must sequence linearly):
```
Tier 0 (Infrastructure) 
  ↓
Tier 1 (Wiring) 
  ↓
Tier 2 (Unblock current) 
  ↓
Tier 3 (Domain work) [parallelizes]
```

### Fastest Critical Path:
1. **Week 1:** Tier 0.1 + 0.2 (4–10 hours, infrastructure)
2. **Week 1–2:** Tier 1 (5 tasks, 8–13 hours, wiring)
3. **Week 2:** Tier 2.1 + 2.2 + 2.3 (Brain response pending; 7–10 hours parallel work)
4. **Week 3+:** Tier 3 (9 gap plans, ARCH-00411, deep-pattern session, formalization)

### Resource Allocation:
- **Sonnet:** 60% of Tier 0–1 + 80% of Tier 2–3 (structuring, plan-drafting)
- **Infrastructure/DevOps:** 100% of Tier 0 (if not Sonnet's lane)
- **Opus:** 30% review/validation across all tiers
- **Governor:** Decisions (Tier 2.2, 2.3; gate graduation ratification)
- **Brain:** Responses (Tier 2.1; 4 questions)

---

## IMMEDIATE NEXT STEPS (This Week)

**For Sonnet:**
1. Review this report; flag any disagreements on priority/sequencing
2. Prepare Tier 0 tasks for infrastructure owner (hook environment check, Puppeteer setup)
3. Prepare Brain consultation response template (Tier 2.1)
4. Begin Tier 1.2 ([PREMISE] tagging check) — low-dependency, quick win

**For Governor:**
1. Approve Tier 0 infrastructure work (allocate resources if needed)
2. Set deadline for Brain's response (recommend: 5–7 days)
3. Review gap-priority packet when ready (Tier 2.2); mark all 9 gaps

**For Brain (async):**
1. Receive consultation packet (if not already sent)
2. Answer 4 questions (home/reality/SSOT/gaps)
3. Respond within deadline

---

## APPENDIX: Estimated Workload Summary

| Tier | # Tasks | Est. Total Hours | Blocker? | Timeline |
|---|---|---|---|---|
| **Tier 0** | 2 | 6–10 | YES | Week 1 |
| **Tier 1** | 5 | 8–13 | YES | Week 1–2 |
| **Tier 2** | 3 | 7–10 | PARTIAL | Week 2 (1 awaits Brain) |
| **Tier 3** | 13+ | 30–50 | NO | Week 3+ (parallel) |
| **TOTAL** | **23+** | **51–83** | — | 3–4 weeks (critical path) |

---

*Report prepared 2026-08-17 for Sonnet (structuring tier). Derive plans from this analysis per ARCH-00190 (planning-domain protocol). Sonnet has full authority to re-sequence within tiers if dependencies allow; cross-tier reordering requires Opus + Governor review.*
