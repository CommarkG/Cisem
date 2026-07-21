# IBD-0015 — External Review Round 2 (PURIFIED via PAE) 2026-07-19
**Type:** IBD (analysis layer) | **Status:** PURIFIED · UN-RATIFIED — essence extracted, NOT folded/reacted-to (absorption only, per Governor). Claims to verify.
**tags:** [ibd, purified, external-review, deterministic-layer2]
**Source (raw):** [[IBD-0015-external-review-round2-RAW]] (reviewer R2, EXTERNAL-UNTRUSTED). Engine: [[CISEM-ARCH-00399-purification-alignment-engine]].
**De-brand note (Security lens):** stripped R2's house vocabulary (LMDX/Gemini framing, "matrix rule", their error-string format) BUT PRESERVED the safety-bearing semantics beneath it (renamed, not dropped) — guarding the semantic-drift risk R2 itself raised.

## REVIEWER R2 — UNDERLYING AXIOMS (map, do not adopt)
- Determinism > inference in the governance core (AI must not judge risk at runtime).
- Availability is sacred: prefer graceful DEGRADATION (last-stable-state + flag) over total halt.
- Immutability + versioning over in-place mutation (avoid the "refactoring storm").
- Impact-criticality is orthogonal to reach (a small domain can be existential).
- Parallel triangulation > serial refinement (intersection of two ≠ polish of one).
- Single-Governor optimization breeds an echo-chamber (consistency crowds out optimization).

## ESSENCE UNDER THE MUTUAL-TITLES SCHEMA
- **T1 Conflict model.** Core critique: Layer-2 triage that *infers* risk is itself unratified runtime logic → non-determinism in the governance core (the "paradox"). Vault-and-halt = single point of failure; cross-domain deps cause CASCADE vaults freezing unrelated downstream apps. Distinctive proposal: **deterministic Layer 2** — default everything to *Provisional-Proceed+Park* UNLESS a hardcoded **Safety-Invariant** (state-integrity / execution-safety / data-isolation) is violated → then *Vault-and-Halt*, **scoped to the narrowest module**, read-only, standardized error code. Plus a **Vault Drainage Pipeline**: auto delta-extraction → 2-option PCR within a bound → **time-boxed Governor countdown** → **hard-expiry default** (harden last-stable-state, clear vault, log mandatory review).
- **T2 Sealed-boundary + re-grounding.** Breaks at the **Inheritance-Invalidation Point**: changing a top-level WHAT invalidates all descendants (they may adapt HOW, not WHAT) → "refactoring storm." Distinctive proposal: **Versioned Immutable Root** — re-grounding is a branch (V1→V2) + an explicit descendant MIGRATION pipeline, not an in-place ground-shift.
- **T3 Significance criterion.** Reach alone misses **low-reach / high-impact** domains (key mgmt, legal, physical-safety). Distinctive proposal: significance = **Reach (horizontal) OR Impact-Criticality (vertical severity)** — earns a top slot if removal breaks the system OR its failure causes catastrophic state corruption.
- **T4 Development method.** "Refine-until-flawless" overfits Instance-1's idiosyncrasies → brittle abstraction, regression. Distinctive proposal: **Parallel Triangulation** — build two DISTINCT instances concurrently (e.g. SaaS + physical-product); abstract only what satisfies BOTH vectors.
- **T5 Self-governance & blind spots.** (a) **Semantic drift on de-branding** — purification may strip a safety-bearing constraint disguised as vernacular. (b) **Compliant-Alignment loop** — AI optimizes proposals toward the Governor's historical preferences → echo-chamber, consistency over optimization.
- **T6 Governance mechanics.** Wants an explicit **operational state-degradation contract** for downstream apps when a halt fires (freeze / degrade / error) — the design-vs-operational line. Favors `[DIVERGENT]` runtime tagging + preserved memory stack + standardized halt codes.

## CONVERGENCE / DIVERGENCE vs R1 (Claude)
- **Strong convergence:** triage-regress (R1 C1 ≈ R2 "paradox"); vault needs drain discipline + hard expiry (R1 C2/C3 ≈ R2 drainage pipeline + 48h hard-expiry); significance necessary-not-sufficient (R1 C5 ≈ R2 impact-criticality); build-to-flawless overfits (R1 C6 ≈ R2 triangulation); echo-chamber/independence (R1 C8 ≈ R2 compliant-alignment loop); semantic-drift on purify (R2 raises; sharpens R1). → Two independent axiom-sets converging hard = strong signal.
- **R2-distinctive (new beyond R1):** deterministic Safety-Invariant triage (removes AI runtime inference); Versioned Immutable Root + migration pipeline; scoped-halt + graceful-degrade operational contract; time-boxed hard-expiry default; explicit low-reach/high-impact counter-criterion.

## STATUS: ABSORBED — not folded. Consolidation of all reviews under T1–T6 happens later, all-at-once.
