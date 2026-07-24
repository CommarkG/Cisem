# Synthetic fixture plan — NEVER a real plan (CISEM-ARCH-00420-PART08 planted-test fixture)
Node ID: CISEM-ARCH-99001 | Type: ARCH
Status: DRAFT
tags: [fixture, plan-gate, synthetic]
Goal: exists only so authorization_gaps' "cited plan found but NOT ratified" branch has a real,
deterministic target (find_plan_file's whole-tree fallback locates this via its ID prefix).
This file is under dna/checks/fixtures/plan-gate/ — itself EXEMPT from is_strict_governed (BLOCKER-1)
and never counted as a real plan by any other check.
