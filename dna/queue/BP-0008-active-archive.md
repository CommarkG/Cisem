# BUILD-PROMPT BP-0008 — Active Archive of ruled-out / superseded ideas (mechanically enforced avoid-list)
**FOR:** cisem-sonnet drafts; cisem-opus-pe verifies. **status:** QUEUED (PROVISIONAL design) | **priority:** HIGH | **essential:** y | **depends-on:** BP-0001
**SWIFT-improve, do NOT recreate:** ARCH-00150 already tags `[rejected-idea]` in the learning-loop
(CS-LOOPS-001), but it is `PENDING-SORT` / passive. This makes it ACTIVE + enforced.

## GOAL (measurable)
CISEM has ACCESS to past ruled-out things and MECHANICALLY avoids re-proposing them. DONE = a
`dna/archive/` append-only store of ruled-out/superseded/dropped items, AND a plan-audit check that
flags when a new creation matches a ruled-out entry — so the platform stops repeating identified mistakes.

## WHY
Everything I ruled out this session (parallel CS-INTAKE-BATCHING, the "flat big file" split, over-
atomizing, etc.) is currently only in commit messages + my memory. When this session ends, that
knowledge is LOST and the next AI re-proposes it. The archive makes "what we already ruled out" a
permanent, consulted memory — Gemini's Five-Surface Engraving applied to decisions.

## STRUCTURE (each archive entry)
`{id, what-it-was, why-ruled-out, what-replaced-it (if improved), the LESSON, date, ruled-by}`.
Tagged `[rejected-idea | superseded | dropped]`. Home: CS-LOOPS-001 learning-loop (its real content).

## CORE SEEDS (immutable)
[[CORE-SEED 1 | MUST: the archive is APPEND-ONLY + immutable (like raw) — ruled-out items are never deleted, only added; a superseded item links to what replaced it | WHY: the point is a permanent memory of what to avoid | VERIFY: no archive file is ever mutated/deleted]]
[[CORE-SEED 2 | MUST: a plan-audit WARN check flags when a new creation matches a ruled-out entry's signature (tag/keyword) → "this was ruled out on {date} because {reason} — see archive/{id}" | WHY: mechanical avoidance, not reliance on memory | VERIFY: re-proposing a ruled-out idea IS flagged]]
[[CORE-SEED 3 | MUST: triggered at CREATION (Triad §3.7) AND on each RQC run | WHY: catch it before it is built | VERIFY: fires on creation, not only after]]

## PLAN
1. `dna/archive/` + register an ARCHIVE namespace (one gate). 2. Migrate ARCH-00150's rejected-ideas in.
3. Add the WARN check (signature match). 4. Wire into §3.7 Triad + RQC. 5. diff + SEED-HONOR REPORT.
