# IBD-0007 — Rigid-vs-Context Resolution: Context-Envelope + Three-State Edge-Flag (6-persona synthesis)
**Type:** IBD (design capture — six-persona dossier + Opus synthesis) | **Status:** PARKED — plan-gate-bound | completion-priority HIGH
**Origin:** Governor 2026-07-18 — "resolve the contrast between rigid definitions and context-focused AI governance; add (1) mandatory context, (2) edge-case flagging = practical active AI oversight; explore by six personas; must be resolved."
**Existing-First:** ENHANCES A6/D6/D2 (doctrine → mechanism); REUSES I23 pattern, exempt-tags, `found_iN` aggregation, P3 TTL, the ZF gate, PCR (§2 principle 10), §3.4 Standalone Test; EXTENDS ARCH-00320 checks + ARCH-00008 node fields + IBD-0006 dossier. NOT a parallel system.

## THE PROBLEM (verified)
A6/D6/D2 are BEHAVIORAL (open-loop). The 24 checks are TWO-STATE (PASS/FAIL) with zero out-of-distribution sensing — none asks "is this rule even in-scope for this artifact?" So "I can't tell" is silently coerced to PASS. **A false PASS ratifies drift as compliant** — the exact outcome the rigid-vs-context tension exists to prevent. This is EXISTS≠ACTIVE (I23) applied to context-focus itself.

## THE RESOLUTION — six lenses converge into ONE mechanism
**1. MANDATORY CONTEXT — every governing element declares an ENVELOPE:**
- `legal_kind`: **RULE** (bright-line, no discretion) · **STANDARD** (context-judged, `factors[]`) · **PRINCIPLE** (justification, `defeasible_by`). [P5; subsumes P3's invariant/heuristic]. *A RULE that needs judgment to apply is mis-typed — that is itself an edge-flag.*
- `purpose`/WHY — adjudicate against intent, not letter [P1/P3/P6].
- `scope`/`applies_when` + `not_scope`/`silent_on` + `core[]`/`penumbra[]` (settled cases + **enumerated doubt**; an EMPTY penumbra is a red flag, not a virtue) [P1/P4/P5].
- `preconditions`/`valid_range` — the operating envelope [P2]. `owner`/interpretation_authority [P1/P4/P5]. (worked examples + known_exceptions = enrichment.)

**2. THE KEYSTONE — a THREE-STATE VERDICT: PASS / FAIL / `UNKNOWN`(=flag)** [P2]. UNKNOWN is where the edge lives; smallest change, largest payoff. **Build this FIRST.**

**3. FORCING FUNCTION — ECHO-TO-APPLY** [P3]: to invoke a rule the AI must restate PURPOSE + assert FIT (cite matching conditions). Crossing a boundary requires an assertion it cannot honestly produce → mis-application self-exposes. *This is what makes it BIND, not behavioral.*

**4. EDGE-DETECTION TRIGGERS (objective, not self-judged uncertainty):** selector/precondition-miss [P2] · partial/ambiguous fit [P1/P3] · rule-type mismatch / invariant↔heuristic collision [P3/P5] · two rules conflict (I16 is a special case) [P1/P2/P5] · novelty — matches neither core nor penumbra [P5] · unresolved reference (§3.4 generalized) [P3] · orphan input — matched zero selectors (A1 for coverage) [P2] · stakes-asymmetry [P4/P5].

**5. TIERED ESCALATION (resolves the over-flag ↔ under-flag tension):**
- **Flag ONLY the UNKNOWN state — never PASS/FAIL** (those go to ZF). Biggest anti-fatigue lever [P2].
- **SOFT-flag** (proceed + log, sampled) vs **HARD-flag** (stop + BLOCK + escalate) by **rule-type × blast** [P3/P4]: invariant/RULE-collision or high-blast+ambiguous → HARD; heuristic/low-blast → SOFT (decide-and-log).
- **FAIL-LOUD:** `BLAST=HIGH` when unset or truth-bearing [P4] — bias toward flagging, never silence.
- Debounce/dedupe by signature; **TTL + hysteresis** (reuse P3) — re-fires only on state change; a separate **`[EDGE]` channel parallel to `[ZF]`** [P2]; one `edge_sensitivity` knob (Governor sets once).

**6. FLAG PAYLOAD (decidable at a glance)** [P6]: VERDICT line + rule + its intent + why-it-doesn't-fit + AI's **PCR** + blast radius + precedent link + one-tap actions `[Confirm Rec][Rule Wins][Exception—capture][Park]`. *Human supplies JUDGMENT, never re-does INVESTIGATION.*

**7. FEEDBACK LOOP — the learning system** [P5/P6]: every flag MUST close (never silently). Ruling → **Exception** (append a named scoped context-clause: penumbra→core) | **Rule-wins** (tighten the trigger) | **New-context** (add the missing field). **REGRESSION-on-flag: re-run the trigger against the amended rule, assert it no longer fires — "the same edge cannot flag twice"** (planted-test discipline). Log to quality-ledger; the **penumbra shrinks over time** (D5/A7 made real).

**8. THREE FAILURE MODES the design MUST guard (the crux):**
- **OVER-flag / rubber-stamp** [P1/P6] → flag only UNKNOWN + rubber-stamp detector (confirm-latency/confirm-rate) + force-expand on high blast.
- **UNDER-flag** [P4] → fail-loud (`BLAST=HIGH` default; truth-bearing→HIGH). The UNKNOWN state exists to stop silent coercion to PASS.
- **NEVER-close** [P5] → mandatory logged resolution + regression + a penumbra-closure metric (re-escalated N times = a defect).

## WHY THIS RESOLVES IT
Rigid in the **core** (bright-line rules by rote), flagged in the **penumbra** (edges escalate, never guessed), penumbra **shrinks** over time (learning). **D6 polarity becomes a mechanical learning loop, not a mood; A6 moves DOCTRINE → MECHANISM.** Context (mandatory-context) and flag (edge) are the SAME mechanism viewed twice — *echo-to-apply* [P3].

## PROPOSED NAME
"Context-Envelope & Edge-Flag Layer" — the three-state **Adjudication Layer**. (Final name via the gate.)

## PHASED BUILD (contract-first, MVP-first, stress-gated — per P2)
- **Phase 0 / MVP:** add the THIRD VERDICT STATE (`UNKNOWN`) + an `[EDGE]` channel to `plan-audit.sh`, on 1–2 checks. Reuses `found_iN`/ZF/P3-TTL. Stress test: planted out-of-envelope case → UNKNOWN flagged; in-scope → no flag.
- **Phase 1:** envelope declarations (`legal_kind`, scope, preconditions) on a few rules + echo-to-apply on invariant-tagged rules.
- **Phase 2:** the feedback loop (flag→ruling→regression→core migration) + the three metrics (penumbra-closure, rubber-stamp, flag precision/recall).
- **Later:** full rollout + the human flag-UI payload.

## ROUTING
GOVERNED creation that **rewires A6 (axiom-weight, significant)**. All six personas + A4 insist: needs a PLAN + Governor ratification — NOT self-wired. → next: draft as a plan via `/cisem-plan` (Phase 0 first). Parked here as the SSOT of the resolution.
