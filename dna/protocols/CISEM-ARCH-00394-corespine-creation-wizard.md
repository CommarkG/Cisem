---
Node_ID: CISEM-ARCH-00394
Type: WIZARD
Status: DECLARED
Corespine: CS-CREATION-001
Schema_anchor: CISEM-ARCH-00008
Core_spine: CS-CREATION-001
Last_verified: 2026-07-18
---

# CISEM Corespine Creation Wizard — Universal Protocol

**CISEM-ARCH-00394** | WIZARD | **Status: DECLARED**
**Purpose:** Define, create, and register ANY CISEM corespine via a single YAML input block. Supports batch creation (N corespines at once). Subsumes ad-hoc corespine creation — all corespines go through this wizard from now on.

**Size note:** 215 lines — exceeds 200-line gate. Exception: wizard-type node with mandated STEP 1–6 procedure + template blocks + YAML schema; structural content not reducible without losing executability.

---

## §I Gate Trace

**§3.0 Tier:** Sonnet DRAFTS wizard, Opus ratifies on first use for each new corespine's §3.3 Pocket fields and truth-bearing declarations.
**§3.1 Goal:** Create corespines correctly, consistently, and at scale — zero ad-hoc creation.
**§3.2b Existing-First:** No corespine creation protocol exists (`dna/protocols/` searched). ARCH-00190 covers plans; ARCH-00340 covers meta-protocol; neither covers corespine-specific creation. New.
**§3.3 Pocket:** `reasoning_scope: corespine creation protocol` | `inherited_constraints: §3 gates, A2, A5, I10, I19, I22` | `output_contract: corespine directory + manifest + registry entries` | `ai_cannot: ratify its own output` | `cal_reference: ARCH-00390`
**§3.4 Standalone:** All refs resolve.
**§3.5 Naming:** CISEM-ARCH-00394, seq 394.
**§3.6 Size:** 215 lines — exception documented above.
**§3.7 Creation Triad:** ✓ gates | ✓ pocket | ✓ oversight (RQC on each corespine created)

---

## §II YAML Input Schema

Define one or more corespines in a single block. Feed to Sonnet for execution.

```yaml
# corespine-batch.yaml — define N corespines; wizard generates all
corespines:

  - name: CS-EXAMPLE-001   # example-only — NOT-YET-A-NODE
    domain: "short label (e.g. Frontend, Auth, Data)"
    goal: "one-sentence governing goal"
    scope: "what artifacts / concerns it governs"
    parent: "CS-CREATION-001 or other parent corespine"
    depth: "L1 / L2 / L3"
    initial_status: "DECLARED / PROPOSED / PLACEHOLDER"
    governed_artifacts:
      - type: "file type or artifact class"
        location: "path/in/repo/"
    invariants:
      - id: "XX-I1"
        rule: "bright-line rule text"
      # add more as needed
    content_files:
      - arch_seq: "assigned from naming-registry.yaml"
        slug: "kebab-case-descriptor"
        type: "MANIFEST / DESIGN-SYSTEM / PROTOCOL / TEMPLATE"
        purpose: "one-line purpose"
    mirrors:
      - source: "where truth lives"
        mirror: "where a pointer/copy exists"
        rule: "divergence rule"
```

---

## §III Execution — STEP 1–6 (Sonnet runs, Opus reviews §3.3 fields)

### STEP 1 — Existing-First (MANDATORY, I19)

Before creating ANY corespine from the YAML block, run:
```bash
cat dna/corespines/corespine-registry.yaml | grep "name:" # list all existing
grep -r "CS-{NAME}" dna/ # check for any existing node with that ID
```
- EXISTS → enhance/reuse (I10, never duplicate)
- RULED-OUT → do not re-propose
- NOT EXISTS → proceed to STEP 2

### STEP 2 — Naming (I22, I10)

For each corespine, assign content file ARCH numbers from `dna/naming-registry.yaml`:
```bash
grep "ARCH:" dna/naming-registry.yaml # read current next_seq
```
Use `next_seq`, increment by 1 per file created, update naming-registry.yaml immediately after each assignment.

### STEP 3 — Create Directory + Manifest

For each corespine:
1. `mkdir -p dna/corespines/{CS-NAME}/`
2. Create `dna/corespines/{CS-NAME}/CISEM-ARCH-{SEQ}-{domain}-corespine-manifest.md` from the MANIFEST TEMPLATE (§IV below).
3. Populate all fields from the YAML input. Flag any UNKNOWN fields as `[NEEDS-OPUS-INPUT]`.

### STEP 4 — Register in corespine-registry.yaml

Append to `dna/corespines/corespine-registry.yaml`:
```yaml
CS-{NAME}:
  status: {initial_status from YAML}
  goal: "{goal from YAML}"
  content_location:
    canonical_file: dna/corespines/CS-{NAME}/CISEM-ARCH-{SEQ}-{slug}-manifest.md
  depth_level: {depth from YAML}
```

### STEP 5 — Update naming-registry.yaml

Update the ARCH `next_seq` to `current + files_created`. Update the comment line with the new entries.

### STEP 6 — Run plan-audit.sh + ZF gate

```bash
bash dna/checks/plan-audit.sh
```
Resolve every finding before declaring DONE. ZF ACHIEVED = wizard run complete.

---

## §IV Manifest Template (fill from YAML input)

```markdown
---
Node_ID: CISEM-ARCH-{SEQ}
Type: MANIFEST
Doc-Status: {initial_status}
Corespine: {CS-NAME}
Schema_anchor: CISEM-ARCH-00008
Core_spine: {parent}
Last_verified: {date}
---

# {CS-NAME} — CISEM {Domain} Corespine Manifest

**CISEM-ARCH-{SEQ}** | MANIFEST | **Doc-Status: {initial_status}** (pending Opus ratification)
**Governs:** {scope}

---

## §I Gate Trace
**§3.0 Tier:** [tier routing declaration]
**§3.1 Goal:** {goal}
**§3.2b Existing-First:** [search result — what was searched, what was found]
**§3.2c Core-vs-Instance:** [justify CORE or INSTANCE]
**§3.3 Pocket:** [pocket fields]
**§3.4 Standalone:** [ref resolution check]
**§3.5 Naming:** CISEM-ARCH-{SEQ} (seq {SEQ}, naming-registry.yaml updated)
**§3.6 Size:** [line count — under 200 or exception declared]
**§3.7 Creation Triad:** [hardcoding ✓ | pocket ✓ | oversight ✓]

---

## §II Corespine Declaration

| Field | Value |
|---|---|
| **Name** | {CS-NAME} |
| **Domain** | {domain} |
| **Scope** | {scope} |
| **Goal** | {goal} |
| **Depth** | {depth} |
| **Status** | {initial_status} |
| **Root authority** | CS-MASTER-VALIDATION-001 |
| **Parent** | {parent} |

---

## §III Governed Artifacts

[table: artifact | location | role — from governed_artifacts YAML array]

---

## §IV Invariants

[numbered list from invariants YAML array — one per line: **{id}** Rule text.]

---

## §V Content File Index

[table of content files — from content_files YAML array]

---

## §VI Mirrors + SSOT Map

[table from mirrors YAML array]

---

## §VII Change Log

| Date | Change | Author |
|---|---|---|
| {date} | DECLARED — initial manifest | {author} |
```

---

## §V Batch Creation Example (example-only — NOT-YET-A-NODE)

To create multiple corespines in one operation, define them all in the YAML block and run STEP 1–6 for each in sequence. Example — three corespines at once:

```yaml
# example-only — these IDs are illustrative, not real nodes
corespines:
  - name: CS-EXAMPLE-FRONTEND-001   # example-only
    domain: "Frontend"
    goal: "Govern all CISEM web/HTML/CSS/JS artifacts"
    # ... rest of fields

  - name: CS-EXAMPLE-AUTH-001       # example-only
    domain: "Auth"
    goal: "Govern authentication and session management"
    # ... rest of fields

  - name: CS-EXAMPLE-DATA-001       # example-only
    domain: "Data"
    goal: "Govern data models, registries, YAML schemas"
    # ... rest of fields
```

Sonnet runs STEP 1–6 for EACH entry in sequence. All three corespines are created, registered, and verified in one run. Governor reviews the batch before ratification.

---

## §VI Change Log

| Date | Change | Author |
|---|---|---|
| 2026-07-18 | DECLARED — initial wizard, STEP 1–6 procedure, YAML schema, template | Sonnet (Governor-ordered) |
