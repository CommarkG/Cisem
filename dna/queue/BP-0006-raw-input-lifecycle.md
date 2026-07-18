# BUILD-PROMPT BP-0006 — Raw-input preservation + FULL value lifecycle (completed, not partial)
**FOR:** cisem-sonnet drafts; cisem-opus-pe verifies. **status:** QUEUED | **priority:** HIGH | **essential:** y | **depends-on:** BP-0007 (plan-wizard must exist for the "→ PLAN" step)

## GOAL (measurable)
Wire raw-input preservation AND the full pipeline that extracts all value from it — so nothing is
saved-and-forgotten (the partial I was corrected on). DONE = every input/upload lands immutable in
`dna/raw/`, and there is a tracked pipeline moving it through to a ratified plan or an explicit park.

## THE FULL LIFECYCLE (this is the completion — all 8 steps, not just capture)
1. **CAPTURE** — every input/upload → immutable raw file in `dna/raw/` (timestamped id via the one
   naming gate; NEVER mutated). Provenance + audit trail.
2. **EXTRACT** — process the raw via SWIFT + the tiers; pull ALL potential value (Haiku gather → Opus judge).
3. **CONCLUSIONS** — extraction yields conclusions/findings.
4. **JOIN A DISCUSSION** — each conclusion is ROUTED into a discussion thread (never floats); an
   unresolved conclusion stays OPEN (I14 — anti-drift). This is what makes conclusions join, not vanish.
5. **CONSENSUS** — discussion → Opus+Governor consensus.
6. **DRAFT** — consensus becomes a DRAFT-of-topic (NOT yet a plan).
7. **PLAN** — the draft becomes a PLAN only via the plan-wizard (BP-0007), per the ratified plan-protocol.
8. **CREATION** — the ratified plan authorizes creation (via /cisem-create, the Triad).
**Anti-partial (principle 11):** a raw is NOT "done" until all its value is extracted AND every
conclusion has reached consensus (→ plan) or explicit park. Track raw status: OPEN → EXTRACTED → CLOSED.

## CORE SEEDS (immutable)
[[CORE-SEED 1 | MUST: raw files in dna/raw/ are IMMUTABLE — processing only ever writes NEW versioned files; the raw is never edited | WHY: provenance/audit integrity | VERIFY: raw files unchanged after processing]]
[[CORE-SEED 2 | MUST: every conclusion from extraction is routed to a discussion + tracked OPEN until consensus/park — none silently dropped | WHY: I14 / complete-the-partial (principle 11) | VERIFY: an extracted-but-unrouted conclusion is flagged]]
[[CORE-SEED 3 | MUST: raw ids allocated through naming-registry (one gate); WARN-only, no blast risk | WHY: one-gate + SWIFT | VERIFY: raw id registered]]

## PLAN
1. Create dna/raw/ + register a RAW namespace in naming-registry. 2. Define the raw-status tracker
(OPEN/EXTRACTED/CLOSED). 3. Wire the conclusion→discussion routing (a simple index). 4. diff + Seed-Honor.
