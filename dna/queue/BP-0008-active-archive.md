# BUILD-PROMPT BP-0008 — Active Archive of ruled-out / superseded ideas (mechanically enforced avoid-list)
**FOR:** cisem-sonnet drafts; cisem-opus-pe verifies. **status:** MVP-EXECUTED (2026-07-19, SWIFT-safe zero-blast) | **priority:** HIGH (remainder) | **essential:** y | **depends-on:** BP-0001
**tags:** [build-prompt, active-archive, ruled-out-ideas, mechanical-avoid-list]
**MVP DONE (Governor decree 2026-07-19, Opus SWIFT — stated tier exception: additive+in-context+routing-overhead>work):**
`dna/archive/archive-ledger.yaml` created (append-only, EXTENDED with a `disposition` vocabulary — RULED-OUT-PERMANENT /
-TEMPORARY / SUPERSEDED / VAULTED-CONFLICT / REOPENED — so it is a reopenable knowledge base, not just an avoid-list);
seeded with 4 real session decisions (DEC-0001..0004); ARCHIVE/DEC namespace registered; ssot-registry pointer added;
`[ARCHIVE]` plan-audit integrity check WIRED + planted-violation-proven. **HIGH-PRIORITY REMAINDER (needs a plan, blast-bearing):**
(1) migrate ARCH-00150/CS-LOOPS-001 [rejected-idea] set; (2) the SIGNATURE-MATCH check (CORE-SEED 2/3 — flag a NEW
creation matching a ruled-out entry at creation-time + RQC); (3) wire into §3.7 Triad + RQC; (4) reconcile the
disposition vocabulary with the global ARCH-00011 §4 status enum (Governor ruling).
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
[[CORE-SEED 1 | MUST: the archive is APPEND-ONLY + immutable (like raw) — ruled-out items are never deleted, only added; a superseded item links to what replaced it | WHY: the point is a permanent memory of what to avoid | VERIFY: no archive file is ever mutated/deleted | APPLIES_TO: the Sonnet tier executing BP-0008 (active archive) — governs all writes under dna/archive/]]
[[CORE-SEED 2 | MUST: a plan-audit WARN check flags when a new creation matches a ruled-out entry's signature (tag/keyword) → "this was ruled out on {date} because {reason} — see archive/{id}" | WHY: mechanical avoidance, not reliance on memory | VERIFY: re-proposing a ruled-out idea IS flagged | APPLIES_TO: the Sonnet tier executing BP-0008 (active archive) — governs the plan-audit signature-match check]]
[[CORE-SEED 3 | MUST: triggered at CREATION (Triad §3.7) AND on each RQC run | WHY: catch it before it is built | VERIFY: fires on creation, not only after | APPLIES_TO: the Sonnet tier executing BP-0008 (active archive) — the archive check fires at creation time AND on RQC runs]]

## PLAN
1. `dna/archive/` + register an ARCHIVE namespace (one gate). 2. Migrate ARCH-00150's rejected-ideas in.
3. Add the WARN check (signature match). 4. Wire into §3.7 Triad + RQC. 5. diff + SEED-HONOR REPORT.
