# BUILD-PROMPT BP-0010 — Two-Model-Verify: activation list + paste-ready tab prompts
**FOR:** Governor (paste to Haiku tab + Sonnet tab) → Opus consolidates | **status:** QUEUED — post-compact | **priority:** HIGH | **essential:** y
**Goal:** run the two-orthogonal-lens verification (protocol-compliance × content-correctness) on the things that govern HOW CISEM works, and stand up new agents that pass this test. Governor-ratified rule (2026-07-20): a checklist/agent-essence change needs TWO-MODEL verify; an agent-itself change needs two-model verify + Opus ratification.

## WHERE THE CHECK APPLIES — target list (prioritized; "multiple things")
1. **DoD checklist** — `dna/checks/definition-of-done.md` (newest; governs "done" everywhere).
2. **Green-gate criteria** — `dna/planning/first-corespine-trial-2026-07-19.md` (governs corespine sealing).
3. **Agent essences** — `.claude/agents/cisem-haiku.md · cisem-sonnet.md · cisem-opus-pe.md` (what each agent works on).
4. **Creation checklist** — `dna/protocols/CISEM-ARCH-00230-file-creation-template.md`.
5. **PAE 6-lens** — `dna/protocols/CISEM-ARCH-00399-purification-alignment-engine.md`.
6. **8-Q stress-test** — the axiom gate (referenced in IBD-0009 / A9).
7. **Persona SSOT** — `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` (essence of all agents).
8. **plan-audit checks** — `dna/checks/plan-audit.sh` (each check vs its stated invariant).
9. **NEW agents to build + two-model-verify:** `/cisem-precompact-verify` (the two-pass skill, BP-0009) · a post-Sonnet "completion-brief" agent.

## PASTE-READY — HAIKU TAB (protocol / compliance lens)
```
TIER: cisem-haiku (gather, evidence only). TARGET: <paste file path>.
For EACH item/clause/check in the target, find the DISK EVIDENCE (file:line or grep) that proves it is real AND enforced. Apply EXISTS≠ACTIVE (I23) mechanically to every "live/wired/enforced/active" claim. Cross-check any reference against the file that should exist. Report per item: {item, status: COMPLETE|PARTIAL|MISSING, evidence: file:line, gap}. NO judgment — evidence only. End: list every item you could NOT find evidence for.
```

## PASTE-READY — SONNET TAB (content / correctness lens)
```
TIER: cisem-sonnet (structure + verify). TARGET: <paste file path>.
Do NOT trust any stated value or claim in the target — RE-DERIVE each factual claim from its SOURCE (registry / file / grep / count) and compare. Flag every mismatch, stale metric, unbacked assertion, logical flaw, or internal contradiction. Report per claim: {claim, verdict: CORRECT|STALE|WRONG, re_derived_value, source: file:line}. Be adversarial; assume a number is wrong until the source proves it. End: the single most consequential error, if any.
```

## OPUS CONSOLIDATION (I do this on the two returns)
1. Merge Haiku (protocol gaps) + Sonnet (content errors) — they are orthogonal; expect little overlap.
2. **Classify each flag: NEW-DRIFT vs ALREADY-RESOLVED/KNOWN** against CURRENT state (dismiss resolved — do NOT re-dig; this is the false-positive guard).
3. Act on the real NEW-DRIFT; route the rest (RIPL / park / decision). Ratify any agent/checklist change (two-model rule).

## GUARDRAILS (or it becomes a busywork machine)
- BOUNDED checklist per target (not open-ended "find problems").
- Diff against CURRENT state (resolved-vs-new classifier is mandatory).
- Terminate the regress: two passes → one Opus consolidation → done (no N-round cross-feed).
- Self-improvement = the target's CHECKLIST accretes a NEW item only when a real novel miss is found (data grows; agent code stays ratified). NO agent self-rewriting.

## ONGOING IMPROVEMENT + STABILITY (Governor 2026-07-20) — the loop that makes this an engine
After each verify cycle: (1) IMPROVE the target agent — accrete the gaps/misses it (or its cross-checker) found into its living profile/checklist; (2) PRESERVE prior gains (monotonic, on-disk — AI engines are unstable; do NOT lose what worked). Home = AI-profiling (CS-AI-PROFILING-001, IBD-0019 §5): a living per-agent profile (gaps · strengths · accreted-items) that only grows and cross-enriches the other models. Safe form: DATA grows, ratified agent CORE does not self-rewrite. Long-run pattern: Governor opens a Sonnet/Haiku tab for an extensive run; Opus reviews + consolidates.
