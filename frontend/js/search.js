/* CISEM Frontend — Search + Collapse + View Toggle + Theme + Language + Tree Editor
   (CS-FRONTEND-001, FE-I2 — the ONE JS file; every page's behavior lives here,
   auto-injected by feature-detection, never by hand-editing per-page HTML.) */
(function () {

  // ═══════════ AUTO-GENERATED: SCHEMA GRAPH DATA (Core Seeds 3/7/8, ARCH-00410) ═══════════
  // Regenerate: node frontend/tools/generate-schema-graph.mjs — reads corespine-registry.yaml
  // + naming-registry.yaml + dna/protocols|checks|schema + .claude/agents|hooks|skills via
  // targeted field extraction (no YAML lib in this env; Core Seed 7) and rewrites ONLY the
  // block between the markers below, byte-exact outside them (idempotent on re-run with no
  // registry changes). DO NOT HAND-EDIT this block — a hand-typed node list is a Core-Seed-3
  // finding. Embedded here (not a separate file, not fetch()) to keep CS-FRONTEND-001 FE-I2
  // (single JS file) literally honored — no new <script> tag on schema.html, no runtime fetch.
  /* CISEM:SCHEMA-GRAPH:START */
  var CISEM_SCHEMA_GRAPH = {
  "meta": {
    "generated": "2026-07-21T01:06:16.263Z",
    "generator": "frontend/tools/generate-schema-graph.mjs",
    "sources": [
      "dna/corespines/corespine-registry.yaml",
      "dna/naming-registry.yaml",
      "dna/protocols/",
      "dna/checks/",
      ".claude/hooks/",
      ".claude/agents/",
      ".claude/skills/",
      "dna/schema/"
    ]
  },
  "root": {
    "id": "root",
    "label": "CISEM",
    "type": "root",
    "href": "../index.html",
    "children": [
      {
        "id": "t-sys",
        "label": "T-SYS",
        "type": "tier",
        "href": null,
        "children": [
          {
            "id": "cat-corespines",
            "label": "Corespines",
            "type": "category",
            "href": "corespines.html",
            "children": [
              {
                "id": "cs-cs-frontend-001",
                "label": "CS-FRONTEND-001",
                "status": "RATIFIED",
                "goal": "Governs all CISEM web/frontend artifacts — HTML pages, CSS design system, JS behaviors, responsive/cell layouts, rebuild engine. Invariants FE-I1–FE-I10.",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-threshold-001",
                "label": "CS-THRESHOLD-001",
                "status": "RATIFIED",
                "goal": "Layer 1 mechanical input validation — the only fully closed corespine",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-creation-001",
                "label": "CS-CREATION-001",
                "status": "RATIFIED",
                "goal": "\"Governs every creation event — Corespine-First, Goal-First, Template-First,",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-ai-behavior-001",
                "label": "CS-AI-BEHAVIOR-001",
                "status": "DECLARED",
                "goal": "Governs every AI instance — pocket mechanism, path-rejection, oversight",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-master-validation-001",
                "label": "CS-MASTER-VALIDATION-001",
                "status": "RATIFIED",
                "goal": "Governs all other corespines — defines the corespine validation protocol V1–V5 and the foundational-decree escape",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-accountability-001",
                "label": "CS-ACCOUNTABILITY-001",
                "status": "DRAFT",
                "goal": "Root ratified now; branches below scoped per Governor's 4-part structure",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-ai-profiling-001",
                "label": "CS-AI-PROFILING-001",
                "status": "DECLARED",
                "goal": "\"The AI-TEAM corespine (broadened 2026-07-18, Governor-ratified): governs AGENTS",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-controlplane-001",
                "label": "CS-CONTROLPLANE-001",
                "status": "PROPOSED",
                "goal": "Project/engine routing, mobile broker backend — distinct from Threshold",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-solutions-001",
                "label": "CS-SOLUTIONS-001",
                "status": "PROPOSED",
                "goal": "Governs every tenant-facing Solution",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-ai-integration-001",
                "label": "CS-AI-INTEGRATION-001",
                "status": "PROPOSED",
                "goal": "Artifact-sandbox vs backend policy for AI API calls within Solutions",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-universal-001",
                "label": "CS-UNIVERSAL-001",
                "status": "PROPOSED",
                "goal": "Root for cross-solution functional capability",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-loops-001",
                "label": "CS-LOOPS-001",
                "status": "PROPOSED",
                "goal": "Root for improvement/learning/QC loops",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-priority-001",
                "label": "CS-PRIORITY-001",
                "status": "PROPOSED",
                "goal": "\"Governs priority assignment across CISEM — built this session,",
                "href": "corespines.html",
                "children": []
              },
              {
                "id": "cs-cs-corecouncil-001",
                "label": "CS-CORECOUNCIL-001",
                "status": "PLACEHOLDER",
                "goal": "\"PARKED — Governor-described multi-model orchestration, weight",
                "href": "corespines.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-corespine-candidates",
            "label": "Corespine Candidates",
            "type": "category",
            "href": "corespines-set.html",
            "children": [
              {
                "id": "cs-cand-inheritance",
                "label": "Inheritance",
                "status": "PARKED-AS-KERNEL-MECHANIC",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-kernel",
                "label": "Kernel",
                "status": "CANDIDATE-KERNEL",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-epistemology",
                "label": "Epistemology",
                "status": "CANDIDATE",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-security",
                "label": "Security",
                "status": "OVERLAY-CANDIDATE",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-privacy-observability-accessibility",
                "label": "Privacy_Observability_Accessibility",
                "status": "OVERLAY-CANDIDATES",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-priority",
                "label": "Priority",
                "status": "PROPOSED-CS-PRIORITY-001-testdrive-instance1",
                "href": "corespines-set.html",
                "children": []
              },
              {
                "id": "cs-cand-completion-propagation-layer",
                "label": "Completion_Propagation_Layer",
                "status": "PLAN-PENDING-BP-0009",
                "href": "corespines-set.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-protocols",
            "label": "Protocols",
            "type": "category",
            "href": "protocols.html",
            "children": [
              {
                "id": "proto-cisem-arch-00011-naming-numbering-policy-md",
                "label": "CISEM-ARCH-00011-naming-numbering-policy.md",
                "status": "RATIFIED",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00230-file-creation-template-md",
                "label": "CISEM-ARCH-00230-file-creation-template.md",
                "status": "file",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00320-prevention-and-plan-audit-md",
                "label": "CISEM-ARCH-00320-prevention-and-plan-audit.md",
                "status": "RATIFIED",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00330-mini-tree-protocol-md",
                "label": "CISEM-ARCH-00330-mini-tree-protocol.md",
                "status": "DRAFT",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00340-meta-protocol-md",
                "label": "CISEM-ARCH-00340-meta-protocol.md",
                "status": "LIVE",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00350-sonnet-opus-handoff-protocol-md",
                "label": "CISEM-ARCH-00350-sonnet-opus-handoff-protocol.md",
                "status": "PROVISIONAL",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00360-haiku-audit-hardening-md",
                "label": "CISEM-ARCH-00360-haiku-audit-hardening.md",
                "status": "PROVISIONAL",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00370-session-learning-extraction-md",
                "label": "CISEM-ARCH-00370-session-learning-extraction.md",
                "status": "LIVE (Governor decree 2026",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00390-cisem-autonomic-layer-md",
                "label": "CISEM-ARCH-00390-cisem-autonomic-layer.md",
                "status": "PROVISIONAL",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00394-corespine-creation-wizard-md",
                "label": "CISEM-ARCH-00394-corespine-creation-wizard.md",
                "status": "RATIFIED",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-arch-00399-purification-alignment-engine-md",
                "label": "CISEM-ARCH-00399-purification-alignment-engine.md",
                "status": "PROVISIONAL",
                "href": "protocols.html",
                "children": []
              },
              {
                "id": "proto-cisem-template-protocol-001-md",
                "label": "CISEM-TEMPLATE-PROTOCOL-001.md",
                "status": "DRAFT   <!",
                "href": "protocols.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-schema",
            "label": "Schema",
            "type": "category",
            "href": "schema.html",
            "children": [
              {
                "id": "schema-cisem-schema-00001-placement-engine-md",
                "label": "CISEM-SCHEMA-00001-placement-engine.md",
                "status": "DRAFT   <!",
                "href": "schema.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-enforcement",
            "label": "Enforcement / CAL",
            "type": "category",
            "href": "engines.html",
            "children": [
              {
                "id": "chk-boundary-update-grid-md",
                "label": "boundary-update-grid.md",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-concept-envelope-registry-yaml",
                "label": "concept-envelope-registry.yaml",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-creation-gate-sh",
                "label": "creation-gate.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-definition-of-done-md",
                "label": "definition-of-done.md",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-deletion-guard-sh",
                "label": "deletion-guard.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-external-depollution-prompt-md",
                "label": "external-depollution-prompt.md",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-invariant-registry-yaml",
                "label": "invariant-registry.yaml",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-penumbra-sweep-sh",
                "label": "penumbra-sweep.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-plan-audit-sh",
                "label": "plan-audit.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-pre-commit-blocks-sh",
                "label": "pre-commit-blocks.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "chk-save-raw-activity-sh",
                "label": "save-raw-activity.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "hook-pre-compact-sh",
                "label": "pre-compact.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              },
              {
                "id": "hook-session-start-sh",
                "label": "session-start.sh",
                "status": "file",
                "href": "engines.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-agents",
            "label": "Agents",
            "type": "category",
            "href": "agents.html",
            "children": [
              {
                "id": "agent-cisem-fable-md",
                "label": "cisem-fable.md",
                "status": "file",
                "href": "agents.html",
                "children": []
              },
              {
                "id": "agent-cisem-haiku-md",
                "label": "cisem-haiku.md",
                "status": "file",
                "href": "agents.html",
                "children": []
              },
              {
                "id": "agent-cisem-opus-pe-md",
                "label": "cisem-opus-pe.md",
                "status": "file",
                "href": "agents.html",
                "children": []
              },
              {
                "id": "agent-cisem-sonnet-md",
                "label": "cisem-sonnet.md",
                "status": "file",
                "href": "agents.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-skills",
            "label": "Skills",
            "type": "category",
            "href": "skills.html",
            "children": [
              {
                "id": "skill-cisem-create",
                "label": "cisem-create",
                "status": "skill",
                "href": "skills.html",
                "children": []
              },
              {
                "id": "skill-cisem-meta",
                "label": "cisem-meta",
                "status": "skill",
                "href": "skills.html",
                "children": []
              },
              {
                "id": "skill-cisem-plan",
                "label": "cisem-plan",
                "status": "skill",
                "href": "skills.html",
                "children": []
              }
            ]
          },
          {
            "id": "cat-node-types",
            "label": "Node Types",
            "type": "category",
            "href": "nodes.html",
            "children": [
              {
                "id": "type-found",
                "label": "CISEM-FOUND",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-dna",
                "label": "CISEM-DNA",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-gov",
                "label": "CISEM-GOV",
                "status": "next_seq 27",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-arch",
                "label": "CISEM-ARCH",
                "status": "next_seq 411",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-park",
                "label": "CISEM-PARK",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-ses",
                "label": "CISEM-SES",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-witness",
                "label": "CISEM-WITNESS",
                "status": "next_seq 7",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-voc",
                "label": "CISEM-VOC",
                "status": "next_seq 4",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-load",
                "label": "CISEM-LOAD",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-schema",
                "label": "CISEM-SCHEMA",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-reg",
                "label": "CISEM-REG",
                "status": "next_seq 1",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-bp",
                "label": "CISEM-BP",
                "status": "next_seq 13",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-ibd",
                "label": "CISEM-IBD",
                "status": "next_seq 28",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-dec",
                "label": "CISEM-DEC",
                "status": "next_seq 15",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-handoff",
                "label": "CISEM-HANDOFF",
                "status": "next_seq 5",
                "href": "nodes.html",
                "children": []
              },
              {
                "id": "type-kl",
                "label": "CISEM-KL",
                "status": "next_seq 2",
                "href": "nodes.html",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "t-dom",
        "label": "T-DOM",
        "type": "tier",
        "href": null,
        "children": [
          {
            "id": "cat-solutions",
            "label": "Solutions",
            "type": "category",
            "href": "corespines.html",
            "children": [
              {
                "id": "cs-sol-giftpro-001",
                "label": "SOL-GIFTPRO-001",
                "status": "SIMULATION-ONLY",
                "goal": "\"Engraved: virtual simulation/exercise tool for the schema and gates",
                "href": "corespines.html",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
};
  /* CISEM:SCHEMA-GRAPH:END */

  // ── THEME TOGGLE (Dark/Bright — Phase 1.2) ──────────────────────────
  // Persists in localStorage; applies a [data-theme="light"] override on <html>
  // (single CSS block in style.css, FE-I5 tokens-only). Injected into .nav-r
  // on every page — same auto-inject pattern as initPageViewToggle (FE-I10).
  function initTheme() {
    var KEY = 'cisem-theme';
    var navR = document.querySelector('.nav-r');
    if (!navR) return;

    function apply(t) {
      if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
      else document.documentElement.removeAttribute('data-theme');
    }

    var saved = localStorage.getItem(KEY) === 'light' ? 'light' : 'dark';
    apply(saved);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ni theme-tgl';
    btn.id = 'theme-tgl';
    btn.title = 'Toggle dark / bright theme';
    btn.textContent = saved === 'light' ? '☀' : '☾'; // ☀ / ☾ (shows CURRENT theme)
    navR.insertBefore(btn, navR.firstChild);

    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = cur === 'light' ? 'dark' : 'light';
      apply(next);
      localStorage.setItem(KEY, next);
      btn.textContent = next === 'light' ? '☀' : '☾';
    });
  }

  // ── LANGUAGE TOGGLE (EN/HE — Phase 1.3) ─────────────────────────────
  // EN is default + fully populated (untouched page content = EN passthrough).
  // HE: real strings for the small set of universal nav/chrome elements (proof
  // the mechanism works); everything else is an honest stub/passthrough (same
  // EN text) — dir/lang state genuinely flips and persists either way.
  var I18N = {
    en: {
      'nav.index': 'Index ▾',
      'nav.search.ph': 'Filter...',
      'nav.tbr.title': 'To Be Reviewed & Created',
      'nav.help.title': 'Help',
      'bc.back.title': 'Back',
      'bc.forward.title': 'Forward',
      'nav.home': 'Home'
    },
    he: {
      'nav.index': 'אינדקס ▾',
      'nav.search.ph': 'סנן...',
      'nav.tbr.title': 'לבדיקה וליצירה',
      'nav.help.title': 'עזרה',
      'bc.back.title': 'אחורה',
      'bc.forward.title': 'קדימה',
      'nav.home': 'בית'
    }
  };

  function initLang() {
    var KEY = 'cisem-lang';
    var navR = document.querySelector('.nav-r');
    if (!navR) return;

    // tag the universal chrome elements with data-i18n hooks (JS-injected,
    // same auto-inject convention as the rest of this file — no HTML edits)
    var idxLbl = document.querySelector('.idx-lbl');
    if (idxLbl) idxLbl.setAttribute('data-i18n', 'nav.index');
    var si = document.getElementById('si');
    if (si) si.setAttribute('data-i18n-ph', 'nav.search.ph');
    var tbr = document.querySelector('.nav-r a[href*="to-be-reviewed"]');
    if (tbr) tbr.setAttribute('data-i18n-title', 'nav.tbr.title');
    var help = document.querySelector('.nav-r a[href*="help.html"]');
    if (help) help.setAttribute('data-i18n-title', 'nav.help.title');
    var back = document.querySelector('.bc-arr[title="Back"]');
    if (back) back.setAttribute('data-i18n-title', 'bc.back.title');
    var fwd = document.querySelector('.bc-arr[title="Forward"]');
    if (fwd) fwd.setAttribute('data-i18n-title', 'bc.forward.title');
    var homeCrumb = document.querySelector('.bc a[href$="index.html"]');
    if (homeCrumb) {
      homeCrumb.setAttribute('data-i18n', 'nav.home');
    } else {
      var bc = document.querySelector('.bc');
      if (bc) {
        var spans = bc.querySelectorAll('span:not(.sep)');
        if (spans.length) spans[0].setAttribute('data-i18n', 'nav.home');
      }
    }

    function apply(l) {
      document.documentElement.setAttribute('lang', l);
      document.documentElement.setAttribute('dir', l === 'he' ? 'rtl' : 'ltr');
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        el.textContent = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.textContent;
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-ph');
        el.placeholder = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.placeholder;
      });
      document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-title');
        el.title = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.title;
      });
    }

    var saved = localStorage.getItem(KEY) === 'he' ? 'he' : 'en';
    apply(saved);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ni lang-tgl';
    btn.id = 'lang-tgl';
    btn.title = 'Switch language (EN / HE)';
    btn.textContent = saved === 'he' ? 'עב' : 'EN'; // shows CURRENT language
    navR.insertBefore(btn, navR.firstChild);

    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('lang') === 'he' ? 'he' : 'en';
      var next = cur === 'he' ? 'en' : 'he';
      apply(next);
      localStorage.setItem(KEY, next);
      btn.textContent = next === 'he' ? 'עב' : 'EN';
    });
  }

  // ── SEARCH (works on .fi file rows, .gc grid cards, AND .tree-node tree
  // rows — feature-detected via `ul.tree` presence, never a curated page
  // list; runs on schema/vocabulary/templates/corespines-set + any future
  // tree page automatically. Governor fix 2026-07-21: search previously did
  // NOT filter tree content at all — typing did nothing on tree pages.) ────
  function initSearch() {
    var inp = document.getElementById('si');
    var cnt = document.getElementById('cnt');
    var nr  = document.getElementById('no-result');
    if (!inp) return;
    // .gal-row added (BUILD 6, Governor 2026-07-21 — gallery catalog rows join the SAME
    // shared search mechanism, no second search implementation, CORE-SEED 1/A8).
    var items = document.querySelectorAll('.fi, .gc, .cl-item, .tier-card, .gal-row');
    var total = items.length;
    var treeRoots = document.querySelectorAll('ul.tree'); // 0 on non-tree pages — pure feature-detect

    // Marks one tree-node (post-order): a leaf matches on its own row text;
    // a branch is kept visible if it matches OR any descendant matches, so
    // the match's position in the hierarchy stays legible (never orphaned).
    // Uses inline style (always wins over the .tree-collapsed CSS class) so
    // a match buried in a collapsed branch is still revealed while searching;
    // clearing the query below restores the untouched class-driven state.
    var treeMatchCount = 0;
    function markTreeNode(li, q) {
      var row = li.querySelector(':scope > .tree-row');
      var selfMatch = !!row && row.textContent.toLowerCase().indexOf(q) !== -1;
      if (selfMatch) treeMatchCount++;
      var childUl = li.querySelector(':scope > ul.tree-children');
      var childMatch = false;
      if (childUl) {
        Array.prototype.forEach.call(childUl.children, function (childLi) {
          if (childLi.classList && childLi.classList.contains('tree-node')) {
            if (markTreeNode(childLi, q)) childMatch = true;
          }
        });
        childUl.style.display = childMatch ? '' : 'none';
      }
      var show = selfMatch || childMatch;
      li.style.display = show ? '' : 'none';
      return show;
    }
    var treeTotal = treeRoots.length ? document.querySelectorAll('.tree-node').length : 0;

    function upd() {
      var q = inp.value.toLowerCase().trim();
      var v = 0;
      items.forEach(function (el) {
        var show = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
        el.style.display = show ? '' : 'none';
        if (show) v++;
      });
      treeMatchCount = 0;
      treeRoots.forEach(function (ul) {
        if (!q) {
          // restore: clear inline overrides from a prior search; class-driven
          // tree-collapsed state governs again, exactly as before the search.
          ul.querySelectorAll('.tree-node').forEach(function (li) { li.style.display = ''; });
          ul.querySelectorAll('.tree-children').forEach(function (childUl) { childUl.style.display = ''; });
        } else {
          Array.prototype.forEach.call(ul.children, function (li) {
            if (li.classList && li.classList.contains('tree-node')) markTreeNode(li, q);
          });
        }
      });
      var totalAll = total + treeTotal;
      if (q && treeTotal) v += treeMatchCount;
      if (cnt) cnt.textContent = q ? v + ' / ' + totalAll : (totalAll ? totalAll + ' items' : '');
      if (nr)  nr.style.display = (v === 0 && q) ? 'block' : 'none';
    }
    inp.addEventListener('input', upd);
    upd();
  }

  // ── COLLAPSIBLE SECTION HEADERS (.sh toggles the next .fl list) ────
  function initCollapse() {
    document.querySelectorAll('.sh').forEach(function (sh) {
      // Collapse ALL following siblings until the next .sh — works for any content
      // type after the header (.fl lists, .cl-item rows, .tier-card/.card grids, etc.),
      // not just a single .fl (fixed 2026-07-18: enriched pages broke the .fl-only assumption).
      sh.addEventListener('click', function () {
        var closed = sh.classList.toggle('sh-closed');
        var el = sh.nextElementSibling;
        while (el && !el.classList.contains('sh')) {
          el.classList.toggle('sh-hidden', closed); // force in sync with header state
          el = el.nextElementSibling;
        }
      });
    });
  }

  // ── PLACEHOLDER DATES (BUILD 1 support, Governor 2026-07-21) — every row/group carries
  // data-created / data-modified so the enhanced Sort control (below) has real fields to sort
  // by even where no real per-file date exists. Deterministic + derived from existing DOM
  // order (never random, so a re-run/test is reproducible): data-created runs the OPPOSITE of
  // DOM order (first-in-document = most-recently-created), so an ascending Created-date sort
  // visibly differs from an A->Z Name sort on the same fixture; data-modified is a distinct
  // deterministic hash of the row's own label, giving a THIRD distinct order. Skips any element
  // that already carries a real date (gallery.html rows set their OWN real Upload-date values
  // in markup — this never overwrites a real date with a placeholder). ──
  function assignPlaceholderDates() {
    var BASE = Date.UTC(2026, 0, 1); // 2026-01-01, arbitrary stable epoch
    var DAY = 86400000;
    var all = document.querySelectorAll('li.tree-node, .fi, .gal-row');
    var n = all.length;
    all.forEach(function (el, i) {
      if (!el.hasAttribute('data-created')) {
        el.setAttribute('data-created', new Date(BASE + (n - i) * DAY).toISOString().slice(0, 10));
      }
      if (!el.hasAttribute('data-modified')) {
        var lbl = el.querySelector(':scope > .tree-row .tree-label') || el.querySelector('.gal-filename') || el;
        var text = (lbl.textContent || '').trim();
        var hash = 0;
        for (var c = 0; c < text.length; c++) hash = (hash * 31 + text.charCodeAt(c)) >>> 0;
        el.setAttribute('data-modified', new Date(BASE + (hash % 90) * DAY).toISOString().slice(0, 10));
      }
    });
  }

  // ── ROWS / WINDOW VIEW TOGGLE (auto-injected on group pages with .fi items,
  // AND on tree pages — schema/vocabulary/templates/corespines-set all carry a
  // "Source Files" .fl/.fi block, so FE-I10 ("group pages with .fi items must
  // expose the toggle") already covers them. Governor override 2026-07-21: the
  // toggle must be PRESENT + WORKING on tree pages too — Window view reshapes
  // the TREE ITSELF (leaves -> bordered cards, branches -> card-section headers,
  // CSS `body.view-window .tree` / `.tree-children` in style.css), not just the
  // Source Files list. The prior blanket `.tree` skip was itself the FE-I10/I11
  // defect (a toggle that should exist, silently suppressed). ──
  function initPageViewToggle() {
    var items = document.querySelectorAll('.fi');
    if (!items.length) return; // placeholder / help pages — skip

    // Build toggle bar and insert before the first .sh, or after pg-desc
    var bar = document.createElement('div');
    bar.className = 'view-bar';
    bar.innerHTML =
      '<button class="vbtn active" id="vbtn-rows">&#8801; Rows</button>' +
      '<button class="vbtn" id="vbtn-window">&#9635; Window</button>';

    var mainEl  = document.querySelector('main');
    var firstSh = mainEl && mainEl.querySelector('.sh');
    var pgDesc  = mainEl && mainEl.querySelector('.pg-desc');
    // Anchor via pg-desc FIRST (2026-07-21 fix — was firstSh-first, which broke on uxui.html:
    // its first .sh sits INSIDE a tabbable .uxui-panel that gets `hidden` on tab-switch, so a
    // bar anchored there would vanish when that tab isn't active AND insertBefore(bar, firstSh)
    // against mainEl threw "child can not be found in the parent" since firstSh's real parent
    // is the panel div, not <main>). pg-desc is always a direct <main> child on every page, so
    // this keeps the EXACT same visual slot on every existing page (firstSh was always pg-desc's
    // next sibling there) while staying correct on pages with nested/togglable .sh sections.
    if (pgDesc) {
      pgDesc.parentNode.insertBefore(bar, pgDesc.nextSibling);
    } else if (firstSh) {
      firstSh.parentNode.insertBefore(bar, firstSh);
    } else if (mainEl) {
      mainEl.appendChild(bar);
    }

    var btnR = bar.querySelector('#vbtn-rows');
    var btnW = bar.querySelector('#vbtn-window');

    btnR.addEventListener('click', function () {
      document.body.classList.remove('view-window');
      btnR.classList.add('active'); btnW.classList.remove('active');
    });
    btnW.addEventListener('click', function () {
      document.body.classList.add('view-window');
      btnW.classList.add('active'); btnR.classList.remove('active');
    });
  }

  // ── COLLAPSIBLE TREE (VS-Code-explorer style — .tree-row.branch-row toggles ──
  // the immediately-following .tree-children <ul>. Keyboard-friendly: focusable,
  // Enter/Space toggles. Leaf rows (.leaf-row) are inert — no listener attached.
  function initTreeToggle() {
    document.querySelectorAll('.tree-row.branch-row').forEach(function (row) {
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'button');
      // Robust child lookup: the editor inserts a .rt-panel after the row, so
      // nextElementSibling is unreliable — always find the child <ul> via the parent <li>.
      var kids = row.parentElement && row.parentElement.querySelector(':scope > ul.tree-children');
      row.setAttribute('aria-expanded', String(kids ? !kids.classList.contains('tree-collapsed') : false));
      function toggle() {
        var children = row.parentElement && row.parentElement.querySelector(':scope > ul.tree-children');
        if (!children) return;
        var collapsed = children.classList.toggle('tree-collapsed');
        var tgl = row.querySelector('.tree-toggle');
        if (tgl) tgl.textContent = collapsed ? '+' : '−'; // − (minus)
        row.setAttribute('aria-expanded', String(!collapsed));
      }
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  }

  // ── VIEW TOGGLE (index.html home page: grid ↔ grouped list) ────────
  function initViewToggle() {
    var btnG = document.getElementById('vbtn-grid');
    var btnL = document.getElementById('vbtn-list');
    var gv   = document.getElementById('grid-view');
    var lv   = document.getElementById('list-view');
    if (!btnG || !btnL || !gv) return;

    btnG.addEventListener('click', function () {
      btnG.classList.add('active');   btnL.classList.remove('active');
      gv.style.display = '';
      if (lv) lv.style.display = 'none';
    });
    btnL.addEventListener('click', function () {
      btnL.classList.add('active');   btnG.classList.remove('active');
      gv.style.display = 'none';
      if (lv) lv.style.display = '';
    });

    // Collapsible super-groups in list view
    document.querySelectorAll('.sg-hdr').forEach(function (h) {
      var rows = h.nextElementSibling;
      if (!rows) return;
      h.addEventListener('click', function () {
        h.classList.toggle('sg-closed');
        rows.classList.toggle('sg-hidden');
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════
  // PHASE 2 — TREE ROW EDITOR (schema.html / vocabulary.html /
  // corespines-set.html only — self-detects via .tree-row presence;
  // zero HTML edits, FE-I2 single-JS honored). DOM-based operations +
  // localStorage persistence + Blob-download + window.print(). No
  // framework. Never writes to disk/git — captures a changeset for
  // Opus to review + commit (§1.7).
  // ═════════════════════════════════════════════════════════════════

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function safeName(s) { return String(s).replace(/[^a-z0-9.\-]/gi, '_'); }

  function downloadBlob(filename, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // ═════════════════════════════════════════════════════════════════
  // GENERIC MODAL ENGINE (BUILD 4 edit popup + BUILD 6 gallery "+" popup, Governor 2026-07-21)
  // ONE shared mechanism — module-level so BOTH initTreeEditor()'s edit popup AND
  // initGalleryCatalog()'s detail popup reuse it (CORE-SEED 1/A8, no duplicate modal code).
  // Escape + outside-click close (wired once, here); Save/Cancel are per-caller content.
  // ═════════════════════════════════════════════════════════════════
  var _modalEscWired = false;
  function ensureModalHost() {
    var host = document.getElementById('cisem-modal-host');
    if (host) return host;
    host = document.createElement('div');
    host.id = 'cisem-modal-host';
    host.className = 'cisem-modal-overlay';
    host.style.display = 'none';
    host.innerHTML =
      '<div class="cisem-modal" role="dialog" aria-modal="true">' +
        '<div class="cisem-modal-hdr"><span class="cisem-modal-title"></span>' +
          '<button type="button" class="cisem-modal-x" title="Close">&times;</button></div>' +
        '<div class="cisem-modal-body"></div>' +
      '</div>';
    document.body.appendChild(host);
    host.addEventListener('click', function (e) { if (e.target === host) closeModal(); });
    host.querySelector('.cisem-modal-x').addEventListener('click', closeModal);
    if (!_modalEscWired) {
      _modalEscWired = true;
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && host.style.display !== 'none') closeModal();
      });
    }
    return host;
  }
  function openModal(title, bodyEl) {
    var host = ensureModalHost();
    host.querySelector('.cisem-modal-title').textContent = title;
    var body = host.querySelector('.cisem-modal-body');
    body.innerHTML = '';
    body.appendChild(bodyEl);
    host.style.display = 'flex';
    host.setAttribute('data-open', '1');
    var firstField = body.querySelector('input, textarea, select');
    if (firstField) firstField.focus();
  }
  function closeModal() {
    var host = document.getElementById('cisem-modal-host');
    if (host) { host.style.display = 'none'; host.removeAttribute('data-open'); }
  }
  function mkField(labelText, tagName, value) {
    var wrap = document.createElement('div');
    wrap.className = 'cm-field';
    var lbl = document.createElement('label');
    lbl.textContent = labelText;
    wrap.appendChild(lbl);
    var field = document.createElement(tagName || 'input');
    if (tagName !== 'textarea') field.type = 'text';
    field.value = value || '';
    wrap.appendChild(field);
    return { wrap: wrap, field: field };
  }

  function initTreeEditor() {
    if (!document.querySelector('.tree-row')) return; // only tree pages

    var CHKEY = 'cisem-changeset:' + (location.pathname.split('/').pop() || 'page');

    function loadChangeset() {
      try {
        var raw = JSON.parse(localStorage.getItem(CHKEY));
        return raw || defaultChangeset();
      } catch (e) { return defaultChangeset(); }
    }
    function defaultChangeset() {
      return { adds: [], deletes: [], order: {}, comments: {}, uploads: {}, moved: [], edits: {} };
    }
    function saveChangeset(cs) {
      try { localStorage.setItem(CHKEY, JSON.stringify(cs)); }
      catch (e) { window.alert('CISEM editor: could not save (storage limit reached). Export your changeset, then clear an upload to free space.'); }
    }

    // ── nid assignment: deterministic path from each tree root's DOM order ──
    function assignTreeIds() {
      function walk(ul, nid) {
        ul.setAttribute('data-nid', nid);
        var idx = 0;
        Array.prototype.forEach.call(ul.children, function (li) {
          if (!li.classList || !li.classList.contains('tree-node')) return;
          var childNid = nid + '.' + idx;
          li.setAttribute('data-nid', childNid);
          idx++;
          var childUl = li.querySelector(':scope > ul.tree-children');
          if (childUl) walk(childUl, childNid);
        });
      }
      document.querySelectorAll('ul.tree').forEach(function (rootUl, ti) { walk(rootUl, 't' + ti); });
    }

    function promoteToBranch(li) {
      var row = li.querySelector(':scope > .tree-row');
      if (!row || row.classList.contains('branch-row')) return;
      row.classList.remove('leaf-row');
      row.classList.add('branch-row');
      var tgl = row.querySelector('.tree-toggle');
      if (tgl) { tgl.classList.remove('leaf'); tgl.textContent = '−'; }
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'button');
      row.setAttribute('aria-expanded', 'true');
      row.addEventListener('click', function (e) {
        if (e.target.closest('.rt-tools')) return;
        var kidsUl = li.querySelector(':scope > ul.tree-children');
        if (!kidsUl) return;
        var collapsed = kidsUl.classList.toggle('tree-collapsed');
        var t = row.querySelector('.tree-toggle');
        if (t) t.textContent = collapsed ? '+' : '−';
        row.setAttribute('aria-expanded', String(!collapsed));
      });
    }

    function renderAddedChild(parentLi, add) {
      var childUl = parentLi.querySelector(':scope > ul.tree-children');
      if (!childUl) {
        childUl = document.createElement('ul');
        childUl.className = 'tree-children';
        childUl.setAttribute('data-nid', parentLi.getAttribute('data-nid'));
        parentLi.appendChild(childUl);
        promoteToBranch(parentLi);
      }
      var li = document.createElement('li');
      li.className = 'tree-node';
      li.setAttribute('data-nid', add.id);
      li.innerHTML = '<div class="tree-row leaf-row"><span class="tree-toggle leaf">·</span>' +
        '<span class="tree-label">' + escapeHtml(add.label) + '</span>' +
        (add.note ? '<span class="tree-note">' + escapeHtml(add.note) + '</span>' : '') +
        '<span class="tree-badge added">ADDED</span></div>';
      childUl.appendChild(li);
      return li;
    }

    function persistOrder(parentUl) {
      if (!parentUl) return;
      var parentNid = parentUl.getAttribute('data-nid');
      if (!parentNid) return;
      var order = [];
      Array.prototype.forEach.call(parentUl.children, function (c) {
        if (c.classList.contains('tree-node')) order.push(c.getAttribute('data-nid'));
      });
      var cs = loadChangeset();
      cs.order[parentNid] = order;
      saveChangeset(cs);
    }

    function moveRow(li, dir) {
      var parentUl = li.parentElement;
      var sibling = dir === 'up' ? li.previousElementSibling : li.nextElementSibling;
      while (sibling && !sibling.classList.contains('tree-node')) {
        sibling = dir === 'up' ? sibling.previousElementSibling : sibling.nextElementSibling;
      }
      if (!sibling) return;
      if (dir === 'up') parentUl.insertBefore(li, sibling);
      else parentUl.insertBefore(sibling, li);
      persistOrder(parentUl);
    }

    function collectMoveDestinations(li) {
      var nid = li.getAttribute('data-nid');
      var parentUl = li.parentElement;
      var grandLi = parentUl.parentElement;
      if (!grandLi || !grandLi.classList || !grandLi.classList.contains('tree-node')) return [];
      var container = grandLi.parentElement;
      if (!container) return [];
      var out = [];
      Array.prototype.forEach.call(container.children, function (sib) {
        if (!sib.classList.contains('tree-node')) return;
        if (sib === grandLi) return; // already there
        var kidsUl = sib.querySelector(':scope > ul.tree-children');
        if (!kidsUl) return; // only groups with a children-container are valid destinations
        if (nid.indexOf(sib.getAttribute('data-nid')) === 0) return; // guard against moving into own subtree
        var lbl = sib.querySelector(':scope > .tree-row .tree-label');
        out.push({ nid: kidsUl.getAttribute('data-nid'), label: lbl ? lbl.textContent.trim() : sib.getAttribute('data-nid') });
      });
      return out;
    }

    function moveToGroup(li, targetNid) {
      var targetUl = document.querySelector('ul[data-nid="' + targetNid + '"]');
      if (!targetUl || targetUl === li.parentElement) return;
      var oldParentUl = li.parentElement;
      var nid = li.getAttribute('data-nid');
      targetUl.appendChild(li);
      persistOrder(oldParentUl);
      persistOrder(targetUl);
      var cs = loadChangeset();
      cs.moved = cs.moved || [];
      cs.moved.push({ nid: nid, toParent: targetNid, ts: new Date().toISOString() });
      saveChangeset(cs);
    }

    function deleteRow(li) {
      if (!window.confirm('Delete this row (and any children under it)? This is captured in the changeset, not applied to the repo directly.')) return;
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      if (cs.deletes.indexOf(nid) === -1) cs.deletes.push(nid);
      saveChangeset(cs);
      li.remove();
    }

    function addChild(li) {
      var label = window.prompt('New row label:');
      if (!label) return;
      var note = window.prompt('Note (optional):') || '';
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      var addEntry = { id: nid + '.custom-' + Date.now(), parentNid: nid, label: label, note: note, ts: new Date().toISOString() };
      cs.adds.push(addEntry);
      saveChangeset(cs);
      var newLi = renderAddedChild(li, addEntry);
      wireRowToolbar(li);    // parent may have just been promoted to a branch — refresh its toolbar
      wireRowToolbar(newLi);
    }

    // BUILD 1 (Governor 2026-07-21) — sort key resolver: 'name' reads the visible label,
    // 'created'/'modified' read the data-* attributes assignPlaceholderDates() guarantees on
    // every row (real dates where gallery.html supplies them, deterministic placeholders
    // elsewhere). ONE resolver used by every sortable container (tree groups, .fl lists,
    // gal-catalog lists) — no per-container-type second implementation (CORE-SEED 1/A8).
    function getSortKeyValue(el, key) {
      if (key === 'created') return el.getAttribute('data-created') || '';
      if (key === 'modified') return el.getAttribute('data-modified') || '';
      var lbl = el.querySelector(':scope > .tree-row .tree-label') || el.querySelector('.gal-filename');
      if (lbl) return lbl.textContent.trim().toLowerCase();
      return (el.getAttribute('data-name') || el.textContent || '').trim().toLowerCase();
    }

    // forceDir ('asc'|'desc') lets a page-level control (addSortButton) drive an EXPLICIT
    // direction across every group in one action; called with no arg (the original per-row
    // ⇅ button) it keeps its own toggle behavior unchanged (backward-compatible, A8 — same
    // function, not a second sort implementation per CORE-SEED 1). `key` ('name'|'created'|
    // 'modified', BUILD 1 enhancement) defaults to 'name' so the original per-row ⇅ behavior
    // is byte-for-byte unchanged when no key is passed.
    function sortChildren(li, forceDir, key) {
      key = key || 'name';
      var ul = li.querySelector(':scope > ul.tree-children');
      if (!ul) return;
      var items = Array.prototype.filter.call(ul.children, function (c) { return c.classList.contains('tree-node'); });
      var asc = forceDir ? (forceDir === 'asc') : (ul.getAttribute('data-sort') !== 'asc');
      items.sort(function (a, b) {
        var va = getSortKeyValue(a, key), vb = getSortKeyValue(b, key);
        var cmp = va < vb ? -1 : va > vb ? 1 : 0;
        return asc ? cmp : -cmp;
      });
      items.forEach(function (it) { ul.appendChild(it); });
      ul.setAttribute('data-sort', asc ? 'asc' : 'desc');
      persistOrder(ul);
    }

    // BUILD 1 — sorts a flat `.fi`/`.gal-row` list (Source Files blocks, gallery catalog) by the
    // same 3 keys. Separate from sortChildren() only because these containers are NOT
    // li.tree-node trees (no nested ul.tree-children) — same getSortKeyValue resolver, same
    // asc/desc convention, no independent sort logic (CORE-SEED 1).
    function sortSimpleList(ul, itemSelector, dir, key) {
      var items = Array.prototype.filter.call(ul.children, function (c) { return c.matches && c.matches(itemSelector); });
      if (!items.length) return;
      items.sort(function (a, b) {
        var va = getSortKeyValue(a, key), vb = getSortKeyValue(b, key);
        var cmp = va < vb ? -1 : va > vb ? 1 : 0;
        return dir === 'asc' ? cmp : -cmp;
      });
      items.forEach(function (it) { ul.appendChild(it); });
    }

    // ── PAGE-LEVEL SORT CONTROL (shared .view-bar, ARCH-00410-follow / Governor 2026-07-21) ──
    // Reuses sortChildren()/sortSimpleList() (CORE-SEED 1 — no second sort mechanism) applied to
    // EVERY group on the page (every li.tree-node with children, every .fl and .gal-catalog
    // list), in one explicit, page-wide direction so the result is deterministic regardless of
    // any prior per-row ⇅ state. Appended into the SAME `.view-bar` the Rows/Window/Export/
    // Tree-Mindmap controls already share (FE-I12 — controls stay on one line; same
    // insert-before-export idiom as initMindmap()). BUILD 1 (Governor 2026-07-21): the button
    // is now paired with a <select> offering Name (A<->Z) / Creation date / Last modified.
    function addSortButton() {
      var bar = document.querySelector('main .view-bar');
      if (!bar) return; // no view-bar on this page — nothing to attach to (no orphan control)
      var dir = 'asc';
      var sel = document.createElement('select');
      sel.className = 'sort-key-sel'; sel.id = 'sort-key-sel';
      sel.title = 'Choose which field to sort by';
      [['name', 'Name (A↔Z)'], ['created', 'Creation date'], ['modified', 'Last modified']].forEach(function (o) {
        var opt = document.createElement('option'); opt.value = o[0]; opt.textContent = o[1]; sel.appendChild(opt);
      });
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'vbtn'; btn.id = 'vbtn-sort-all';
      btn.textContent = '⇅ Sort A→Z';
      btn.title = 'Sort every group/list by the selected field (toggles ascending/descending)';
      btn.addEventListener('click', function () {
        var key = sel.value;
        document.querySelectorAll('li.tree-node').forEach(function (li) {
          if (li.querySelector(':scope > ul.tree-children')) sortChildren(li, dir, key);
        });
        document.querySelectorAll('main ul.fl').forEach(function (ul) { sortSimpleList(ul, '.fi', dir, key); });
        document.querySelectorAll('main ul.gal-catalog').forEach(function (ul) { sortSimpleList(ul, '.gal-row', dir, key); });
        var keyLbl = sel.options[sel.selectedIndex].textContent;
        btn.textContent = dir === 'asc' ? '⇅ Sorted ' + keyLbl + ' ↑' : '⇅ Sorted ' + keyLbl + ' ↓';
        dir = dir === 'asc' ? 'desc' : 'asc';
      });
      var exportBtn = bar.querySelector('.cs-export-btn');
      if (exportBtn) { bar.insertBefore(sel, exportBtn); bar.insertBefore(btn, exportBtn); }
      else { bar.appendChild(sel); bar.appendChild(btn); }
    }

    function renderRowPanel(li) {
      var nid = li.getAttribute('data-nid');
      var row = li.querySelector(':scope > .tree-row');
      if (!row) return;
      var panel = li.querySelector(':scope > .rt-panel');
      var cs = loadChangeset();
      var cmts = (cs.comments && cs.comments[nid]) || [];
      var ups = (cs.uploads && cs.uploads[nid]) || [];
      if (!panel) {
        panel = document.createElement('div');
        panel.className = 'rt-panel';
        row.insertAdjacentElement('afterend', panel);
      }
      var html = '';
      if (cmts.length) {
        html += '<div class="rt-comments">' + cmts.map(function (c) {
          return '<div class="rt-comment' + (c.status === 'PARKED' ? ' rt-parked' : '') + '">' +
            '<span class="rt-c-badge">' + c.status + '</span>' + escapeHtml(c.text) +
            '<span class="rt-c-ts">' + c.ts + '</span></div>';
        }).join('') + '</div>';
      }
      if (ups.length) {
        html += '<div class="rt-uploads">' + ups.map(function (u) {
          return '<span class="rt-upload-chip">\u{1F4CE} ' + escapeHtml(u.filename) + '</span>';
        }).join('') + '</div>';
      }
      panel.innerHTML = html;
      panel.style.display = (cmts.length || ups.length) ? '' : 'none';
    }

    function addComment(li, status) {
      var text = window.prompt(status === 'PARKED' ? 'Park a suggestion (text):' : 'Add a comment:');
      if (!text) return;
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      cs.comments[nid] = cs.comments[nid] || [];
      cs.comments[nid].push({ text: text, ts: new Date().toISOString(), status: status });
      saveChangeset(cs);
      renderRowPanel(li);
    }

    function wireUpload(li, input) {
      input.addEventListener('change', function () {
        var file = input.files && input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          var nid = li.getAttribute('data-nid');
          var cs = loadChangeset();
          cs.uploads[nid] = cs.uploads[nid] || [];
          cs.uploads[nid].push({ filename: file.name, content: reader.result, ts: new Date().toISOString() });
          saveChangeset(cs);
          renderRowPanel(li);
        };
        reader.readAsDataURL(file); // universal (text or binary), captured for the export bundle only
        input.value = '';
      });
    }

    function nodeToMD(li, depth, includeChildren, cs) {
      cs = cs || loadChangeset();
      var row = li.querySelector(':scope > .tree-row');
      var label = row && row.querySelector('.tree-label') ? row.querySelector('.tree-label').textContent.trim() : '';
      var note  = row && row.querySelector('.tree-note')  ? row.querySelector('.tree-note').textContent.trim()  : '';
      var badge = row && row.querySelector('.tree-badge') ? row.querySelector('.tree-badge').textContent.trim() : '';
      var tag   = row && row.querySelector('.tree-tag')   ? row.querySelector('.tree-tag').textContent.trim()   : '';
      var indent = '  '.repeat(depth);
      var lines = [indent + '- **' + label + '**' + (badge ? ' [' + badge + ']' : '') + (tag ? ' _(' + tag + ')_' : '') + (note ? ' — ' + note : '')];
      var nid = li.getAttribute('data-nid');
      var cmts = (cs.comments && cs.comments[nid]) || [];
      cmts.forEach(function (c) { lines.push(indent + '  > [' + c.status + '] ' + c.text + ' (' + c.ts + ')'); });
      if (includeChildren !== false) {
        var childUl = li.querySelector(':scope > ul.tree-children');
        if (childUl) {
          Array.prototype.forEach.call(childUl.children, function (childLi) {
            if (childLi.classList.contains('tree-node')) lines = lines.concat(nodeToMD(childLi, depth + 1, true, cs));
          });
        }
      }
      return lines;
    }

    function exportRowMD(li) {
      var nid = li.getAttribute('data-nid');
      downloadBlob('cisem-row-' + safeName(nid) + '.md', '# CISEM Row Export — ' + nid + '\n\n' + nodeToMD(li, 0, false).join('\n') + '\n', 'text/markdown');
    }
    function exportGroupMD(li) {
      var nid = li.getAttribute('data-nid');
      downloadBlob('cisem-group-' + safeName(nid) + '.md', '# CISEM Group Export — ' + nid + '\n\n' + nodeToMD(li, 0, true).join('\n') + '\n', 'text/markdown');
    }

    function ensurePrintStage() {
      var el = document.getElementById('print-stage');
      if (!el) { el = document.createElement('div'); el.id = 'print-stage'; document.body.appendChild(el); }
      return el;
    }
    function printNode(li, title, includeChildren) {
      var stage = ensurePrintStage();
      var lines = nodeToMD(li, 0, includeChildren);
      stage.innerHTML = '<h1>' + escapeHtml(title) + '</h1><pre>' + escapeHtml(lines.join('\n')) + '</pre>';
      document.body.classList.add('printing-scoped');
      window.print();
      document.body.classList.remove('printing-scoped');
      stage.innerHTML = '';
    }

    // BUILD 4 (Governor 2026-07-21) — Edit popup: Name / Description / Tags / Status always;
    // on gallery.html (media rows) ALSO Alt-text / Caption / Date, per the Governor's spec
    // ("the sensible relevant fields ... for media: alt-text/caption/date"). Reuses the ONE
    // shared modal engine (openModal/closeModal, module-level) — not a second popup mechanism.
    function openEditPopup(li) {
      var nid = li.getAttribute('data-nid');
      var row = li.querySelector(':scope > .tree-row');
      var labelEl = row.querySelector('.tree-label');
      var noteEl = row.querySelector('.tree-note');
      var tagEl = row.querySelector('.tree-tag');
      var cs = loadChangeset();
      cs.edits = cs.edits || {};
      var ex = cs.edits[nid] || {};

      var form = document.createElement('div');
      var fName = mkField('Name', 'input', ex.name || (labelEl ? labelEl.textContent.trim() : ''));
      var fDesc = mkField('Description', 'textarea', ex.description || (noteEl ? noteEl.textContent.replace(/^—\s*/, '').trim() : ''));
      var fTags = mkField('Tags', 'input', ex.tags || (tagEl ? tagEl.textContent.trim() : ''));
      var fStatus = mkField('Status', 'input', ex.status || '');
      form.appendChild(fName.wrap); form.appendChild(fDesc.wrap); form.appendChild(fTags.wrap); form.appendChild(fStatus.wrap);

      var isMedia = /gallery\.html/.test(location.pathname);
      var fAlt, fCaption, fDate;
      if (isMedia) {
        fAlt = mkField('Alt text', 'input', ex.alt || '');
        fCaption = mkField('Caption', 'textarea', ex.caption || '');
        fDate = mkField('Date', 'input', ex.date || li.getAttribute('data-created') || '');
        form.appendChild(fAlt.wrap); form.appendChild(fCaption.wrap); form.appendChild(fDate.wrap);
      }

      var actions = document.createElement('div');
      actions.className = 'cm-actions';
      var cancelBtn = document.createElement('button');
      cancelBtn.type = 'button'; cancelBtn.className = 'cm-btn'; cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', closeModal);
      var saveBtn = document.createElement('button');
      saveBtn.type = 'button'; saveBtn.className = 'cm-btn primary'; saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', function () {
        var cs2 = loadChangeset();
        cs2.edits = cs2.edits || {};
        var entry = { name: fName.field.value, description: fDesc.field.value, tags: fTags.field.value, status: fStatus.field.value };
        if (isMedia) { entry.alt = fAlt.field.value; entry.caption = fCaption.field.value; entry.date = fDate.field.value; }
        cs2.edits[nid] = entry;
        saveChangeset(cs2);
        // reflect in the DOM immediately (behavioral — not just stored)
        if (labelEl && entry.name) labelEl.textContent = entry.name;
        if (noteEl) noteEl.textContent = entry.description ? '— ' + entry.description : noteEl.textContent;
        if (tagEl && entry.tags) tagEl.textContent = entry.tags;
        closeModal();
      });
      actions.appendChild(cancelBtn); actions.appendChild(saveBtn);
      form.appendChild(actions);

      openModal('Edit Row', form);
    }

    function wireRowToolbar(li) {
      var row = li.querySelector(':scope > .tree-row');
      if (!row) return;
      var existing = row.querySelector('.rt-tools');
      if (existing) existing.remove(); // idempotent rebuild (needed after a leaf is promoted to a branch)

      var hasKids = !!li.querySelector(':scope > ul.tree-children');
      var tools = document.createElement('span');
      tools.className = 'rt-tools';

      function mkBtn(label, title, fn) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'rt-btn'; b.textContent = label; b.title = title;
        b.addEventListener('click', function (e) { e.stopPropagation(); fn(); });
        tools.appendChild(b);
        return b;
      }

      mkBtn('+', 'Add child row', function () { addChild(li); });
      // BUILD 4 (Governor 2026-07-21) — Edit control, MANDATORY on every row/sub-group/group.
      // wireRowToolbar() already runs on EVERY li.tree-node (rows, sub-groups, groups alike),
      // so adding it here covers the whole class in one place (DEFECT->CLASS-AUDIT satisfied
      // by construction — one function, every instance).
      mkBtn('✎', 'Edit this row', function () { openEditPopup(li); }).classList.add('rt-btn-edit');
      // BUILD 3 (Governor 2026-07-21) — delete is RED, consistently, everywhere it's created.
      mkBtn('×', 'Delete this row', function () { deleteRow(li); }).classList.add('rt-btn-danger');
      mkBtn('↑', 'Move up', function () { moveRow(li, 'up'); });
      mkBtn('↓', 'Move down', function () { moveRow(li, 'down'); });

      var destinations = collectMoveDestinations(li);
      if (destinations.length) {
        var sel = document.createElement('select');
        sel.className = 'rt-move-sel';
        sel.title = 'Move this row to a different sub-group / group';
        var optDefault = document.createElement('option');
        optDefault.textContent = '→ move to…'; optDefault.value = '';
        sel.appendChild(optDefault);
        destinations.forEach(function (d) {
          var o = document.createElement('option'); o.value = d.nid; o.textContent = d.label; sel.appendChild(o);
        });
        sel.addEventListener('click', function (e) { e.stopPropagation(); });
        sel.addEventListener('change', function (e) {
          e.stopPropagation();
          if (sel.value) moveToGroup(li, sel.value);
          sel.value = '';
        });
        tools.appendChild(sel);
      }

      mkBtn('\u{1F4AC}', 'Add a comment', function () { addComment(li, 'COMMENT'); });
      mkBtn('\u{1F4CC}', 'Park a suggestion', function () { addComment(li, 'PARKED'); });

      var fileInput = document.createElement('input');
      fileInput.type = 'file'; fileInput.className = 'rt-file-input';
      fileInput.addEventListener('click', function (e) { e.stopPropagation(); });
      wireUpload(li, fileInput);
      mkBtn('\u{1F4CE}', 'Upload a file (captured into the export bundle — never written to the repo directly)', function () { fileInput.click(); });
      tools.appendChild(fileInput);

      mkBtn('MD', 'Export this row as Markdown', function () { exportRowMD(li); });
      mkBtn('PDF', 'Export this row as PDF (browser print)', function () { printNode(li, 'CISEM Row Export', false); });

      if (hasKids) {
        mkBtn('⇅', 'Sort children A→Z / Z→A', function () { sortChildren(li); });
        mkBtn('GMD', 'Export this whole group (incl. children) as Markdown', function () { exportGroupMD(li); });
        mkBtn('GPDF', 'Export this whole group (incl. children) as PDF (browser print)', function () { printNode(li, 'CISEM Group Export', true); });
      }

      row.appendChild(tools);
      renderRowPanel(li);
    }

    function applyDeletes(cs) {
      (cs.deletes || []).forEach(function (nid) {
        var el = document.querySelector('li[data-nid="' + nid + '"]');
        if (el) el.remove();
      });
    }
    function applyMoves(cs) {
      (cs.moved || []).forEach(function (m) {
        var el = document.querySelector('li[data-nid="' + m.nid + '"]');
        var target = document.querySelector('ul[data-nid="' + m.toParent + '"]');
        if (el && target) target.appendChild(el);
      });
    }
    function applyAdds(cs) {
      (cs.adds || []).forEach(function (a) {
        if ((cs.deletes || []).indexOf(a.id) !== -1) return;
        var parent = document.querySelector('li[data-nid="' + a.parentNid + '"]');
        if (!parent) return;
        renderAddedChild(parent, a);
      });
    }
    // BUILD 4 — restore saved Edit-popup values on page load (Name/Tags reflected in the DOM
    // labels; Description prefixes with "— " to match the existing .tree-note convention).
    function applyEdits(cs) {
      Object.keys(cs.edits || {}).forEach(function (nid) {
        var li = document.querySelector('li[data-nid="' + nid + '"]');
        if (!li) return;
        var row = li.querySelector(':scope > .tree-row');
        if (!row) return;
        var entry = cs.edits[nid];
        var labelEl = row.querySelector('.tree-label');
        var noteEl = row.querySelector('.tree-note');
        var tagEl = row.querySelector('.tree-tag');
        if (labelEl && entry.name) labelEl.textContent = entry.name;
        if (noteEl && entry.description) noteEl.textContent = '— ' + entry.description;
        if (tagEl && entry.tags) tagEl.textContent = entry.tags;
      });
    }
    function applyOrder(cs) {
      Object.keys(cs.order || {}).forEach(function (parentNid) {
        var parentUl = document.querySelector('ul[data-nid="' + parentNid + '"]');
        if (!parentUl) return;
        (cs.order[parentNid] || []).forEach(function (nid) {
          var el = parentUl.querySelector(':scope > li[data-nid="' + nid + '"]');
          if (el) parentUl.appendChild(el);
        });
      });
    }

    function addChangesetButton() {
      var bar = document.querySelector('.view-bar');
      if (!bar) return; // these 3 pages always have a Source Files .fl block -> bar exists (FE-I10)
      var btn = document.createElement('button');
      btn.className = 'vbtn cs-export-btn';
      btn.id = 'export-changeset-btn';
      btn.textContent = '⬇ Export Changeset';
      btn.title = 'Download every local edit (adds/deletes/reorders/moves/comments/parked/uploads) as one file for Opus to review + commit';
      btn.addEventListener('click', exportChangeset);
      bar.appendChild(btn);
    }

    function exportChangeset() {
      var cs = loadChangeset();
      var page = location.pathname.split('/').pop() || 'page';
      var md = '# CISEM Frontend Changeset — ' + page + '\n\n' +
        '_Generated ' + new Date().toISOString() + ' — staged for Opus review + commit (CLAUDE.md §1.7: the page captures, Opus commits, never auto-written to git)._\n\n';
      md += '## Adds (' + cs.adds.length + ')\n' + (cs.adds.length ? cs.adds.map(function (a) {
        return '- `' + a.id + '` under `' + a.parentNid + '`: **' + a.label + '**' + (a.note ? ' — ' + a.note : '');
      }).join('\n') : '_none_') + '\n\n';
      md += '## Deletes (' + cs.deletes.length + ')\n' + (cs.deletes.length ? cs.deletes.map(function (d) { return '- `' + d + '`'; }).join('\n') : '_none_') + '\n\n';
      var moved = cs.moved || [];
      md += '## Moves (' + moved.length + ')\n' + (moved.length ? moved.map(function (m) { return '- `' + m.nid + '` → `' + m.toParent + '` (' + m.ts + ')'; }).join('\n') : '_none_') + '\n\n';
      var orderKeys = Object.keys(cs.order || {});
      md += '## Reorders (' + orderKeys.length + ' groups)\n' + (orderKeys.length ? orderKeys.map(function (p) { return '- `' + p + '`: ' + cs.order[p].join(' → '); }).join('\n') : '_none_') + '\n\n';
      var cCount = 0, pCount = 0;
      Object.keys(cs.comments || {}).forEach(function (k) { cs.comments[k].forEach(function (c) { c.status === 'PARKED' ? pCount++ : cCount++; }); });
      md += '## Comments (' + cCount + ') / Parked Suggestions (' + pCount + ')\n';
      Object.keys(cs.comments || {}).forEach(function (nid) {
        cs.comments[nid].forEach(function (c) { md += '- `' + nid + '` [' + c.status + '] ' + c.text + ' _(at ' + c.ts + ')_\n'; });
      });
      var upKeys = Object.keys(cs.uploads || {});
      md += '\n## Uploads (' + upKeys.length + ' rows)\n';
      upKeys.forEach(function (nid) { cs.uploads[nid].forEach(function (u) { md += '- `' + nid + '`: ' + u.filename + ' (' + u.ts + ')\n'; }); });
      md += '\n## Raw JSON (for Opus to apply/commit)\n```json\n' + JSON.stringify(cs, null, 2) + '\n```\n';
      downloadBlob('cisem-changeset-' + page.replace('.html', '') + '-' + Date.now() + '.md', md, 'text/markdown');
    }

    // ── boot sequence ──
    assignTreeIds();
    var cs0 = loadChangeset();
    applyDeletes(cs0);
    applyMoves(cs0);
    applyAdds(cs0);
    document.querySelectorAll('li.tree-node').forEach(function (li) { wireRowToolbar(li); });
    applyOrder(cs0);
    applyEdits(cs0);
    addSortButton();
    addChangesetButton();
  }

  // ═════════════════════════════════════════════════════════════════
  // MINDMAP (schema.html companion view — ARCH-00410, Core Seeds 1-8).
  // Vanilla-JS SVG renderer over CISEM_SCHEMA_GRAPH (generated above).
  // Self-detects via location.pathname containing "schema.html" — the
  // graph data is schema-specific (not a generic tree behavior like
  // initTreeToggle/initTreeEditor above, which apply to ANY tree page);
  // page-path detection here is deliberate and correct for that reason,
  // not a name-based special-case of a generic feature. No-op elsewhere.
  // Zero HTML edits to schema.html — toggle bar + <svg> are JS-injected,
  // same auto-inject idiom as initPageViewToggle() (Core Seed 2: the
  // existing collapsible tree is untouched, only hidden/shown by class).
  // ═════════════════════════════════════════════════════════════════
  function initMindmap() {
    if (!/schema\.html/.test(location.pathname)) return;
    if (!CISEM_SCHEMA_GRAPH || !CISEM_SCHEMA_GRAPH.root) return;
    var shHeaders = document.querySelectorAll('.sh');
    var treeRoots = document.querySelectorAll('ul.tree');
    if (!shHeaders.length || !treeRoots.length) return;
    var firstSh = shHeaders[0];
    var firstTree = treeRoots[0];

    // ── collapse state: categories start collapsed (compact initial view); root + tiers open ──
    var collapsed = {};
    (function seed(n) {
      if (n.type === 'category') collapsed[n.id] = true;
      (n.children || []).forEach(seed);
    })(CISEM_SCHEMA_GRAPH.root);

    // ── toggle bar (Tree <-> Mindmap) — CONTROLS-ON-ONE-LINE (UI-default #3 / Core Seed 3,
    // 2026-07-21): initPageViewToggle() + initTreeEditor() (both run earlier in init()) already
    // built ONE `.view-bar` carrying [Rows][Window][...Export]; reuse THAT SAME bar (append into
    // it, inserted before the Export button if present) instead of creating a second sibling
    // <div> — the prior version created its own bar, which stacked as a second row. Only if no
    // `.view-bar` exists yet (a schema-like page with no `.fi` items) do we fall back to a new one.
    var existingBar = document.querySelector('main .view-bar');
    var sep = null;
    var mmTreeBtn = document.createElement('button');
    mmTreeBtn.type = 'button'; mmTreeBtn.className = 'vbtn active'; mmTreeBtn.id = 'mm-btn-tree';
    mmTreeBtn.innerHTML = '&#8801; Tree';
    var mmMapBtn = document.createElement('button');
    mmMapBtn.type = 'button'; mmMapBtn.className = 'vbtn'; mmMapBtn.id = 'mm-btn-mindmap';
    mmMapBtn.innerHTML = '&#9737; Mindmap';
    if (existingBar) {
      sep = document.createElement('span');
      sep.className = 'view-bar-sep';
      var exportBtn = existingBar.querySelector('.cs-export-btn');
      if (exportBtn) {
        existingBar.insertBefore(sep, exportBtn);
        existingBar.insertBefore(mmTreeBtn, exportBtn);
        existingBar.insertBefore(mmMapBtn, exportBtn);
      } else {
        existingBar.appendChild(sep);
        existingBar.appendChild(mmTreeBtn);
        existingBar.appendChild(mmMapBtn);
      }
    } else {
      var bar = document.createElement('div');
      bar.className = 'view-bar mm-toggle-bar';
      bar.appendChild(mmTreeBtn);
      bar.appendChild(mmMapBtn);
      firstSh.parentNode.insertBefore(bar, firstSh);
    }

    var wrap = document.createElement('div');
    wrap.id = 'mm-wrap';
    wrap.style.display = 'none';
    wrap.innerHTML =
      '<div class="mm-controls">' +
        '<button type="button" class="mm-btn" id="mm-zoom-in" title="Zoom in">+</button>' +
        '<button type="button" class="mm-btn" id="mm-zoom-out" title="Zoom out">&minus;</button>' +
        '<button type="button" class="mm-btn" id="mm-zoom-reset" title="Reset view">Reset</button>' +
      '</div>' +
      '<svg id="mm-svg" xmlns="http://www.w3.org/2000/svg"><g id="mm-viewport"><g id="mm-edges"></g><g id="mm-nodes"></g></g></svg>';
    firstTree.parentNode.insertBefore(wrap, firstTree.nextSibling);

    var btnTree = document.getElementById('mm-btn-tree');
    var btnMap = document.getElementById('mm-btn-mindmap');
    var rendered = false;
    btnTree.addEventListener('click', function () {
      firstTree.style.display = '';
      wrap.style.display = 'none';
      btnTree.classList.add('active'); btnMap.classList.remove('active');
    });
    btnMap.addEventListener('click', function () {
      firstTree.style.display = 'none';
      wrap.style.display = '';
      btnMap.classList.add('active'); btnTree.classList.remove('active');
      render();
      rendered = true;
    });

    var scale = 1, panX = 40, panY = 20;
    var svg = document.getElementById('mm-svg');
    var viewport = document.getElementById('mm-viewport');
    var SVGNS = 'http://www.w3.org/2000/svg';

    function applyTransform() {
      viewport.setAttribute('transform', 'translate(' + panX + ',' + panY + ') scale(' + scale + ')');
    }

    function statusClass(s) {
      if (!s) return 'plain';
      s = String(s).toUpperCase();
      if (s.indexOf('RATIFIED') !== -1) return 'ratified';
      if (s.indexOf('SIMULATION') !== -1) return 'sim';
      if (s.indexOf('CANDIDATE') !== -1 || s.indexOf('PARKED') !== -1) return 'candidate';
      if (s.indexOf('DECLARED') !== -1 || s.indexOf('CONNECTED') !== -1) return 'declared';
      if (s.indexOf('PROPOSED') !== -1) return 'proposed';
      if (s.indexOf('DRAFT') !== -1) return 'draft';
      if (s.indexOf('PLACEHOLDER') !== -1) return 'placeholder';
      return 'plain';
    }

    function render() {
      var edgesG = document.getElementById('mm-edges');
      var nodesG = document.getElementById('mm-nodes');
      edgesG.innerHTML = '';
      nodesG.innerHTML = '';

      var COL_W = 210, ROW_H = 30, yCounter = 0;
      var positioned = [];

      function layout(node, depth, parent) {
        var isCollapsed = !!collapsed[node.id];
        var kids = (!isCollapsed && node.children) ? node.children : [];
        var x = depth * COL_W, y;
        if (!kids.length) {
          y = yCounter * ROW_H; yCounter++;
        } else {
          var startY = yCounter;
          kids.forEach(function (ch) { layout(ch, depth + 1, node); });
          var endY = yCounter - 1;
          y = ((startY + endY) / 2) * ROW_H;
        }
        positioned.push({ node: node, x: x, y: y, parent: parent, hasKids: !!(node.children && node.children.length) });
      }
      layout(CISEM_SCHEMA_GRAPH.root, 0, null);

      var byId = {};
      positioned.forEach(function (p) { byId[p.node.id] = p; });

      positioned.forEach(function (p) {
        if (!p.parent) return;
        var pp = byId[p.parent.id];
        if (!pp) return;
        var line = document.createElementNS(SVGNS, 'line');
        line.setAttribute('class', 'mm-edge');
        line.setAttribute('x1', pp.x + 6); line.setAttribute('y1', pp.y);
        line.setAttribute('x2', p.x); line.setAttribute('y2', p.y);
        edgesG.appendChild(line);
      });

      positioned.forEach(function (p) {
        var n = p.node;
        var g = document.createElementNS(SVGNS, 'g');
        g.setAttribute('class', 'mm-node mm-status-' + statusClass(n.status));
        g.setAttribute('transform', 'translate(' + p.x + ',' + p.y + ')');
        g.setAttribute('data-nid', n.id);

        var dot = document.createElementNS(SVGNS, 'circle');
        dot.setAttribute('class', 'mm-dot'); dot.setAttribute('r', '6');
        g.appendChild(dot);

        if (p.hasKids) {
          var tgl = document.createElementNS(SVGNS, 'circle');
          tgl.setAttribute('class', 'mm-toggle'); tgl.setAttribute('r', '8'); tgl.setAttribute('cx', '-16');
          tgl.setAttribute('data-nid', n.id);
          g.appendChild(tgl);
          var tglTxt = document.createElementNS(SVGNS, 'text');
          tglTxt.setAttribute('class', 'mm-toggle-txt'); tglTxt.setAttribute('x', '-16'); tglTxt.setAttribute('y', '3');
          tglTxt.setAttribute('text-anchor', 'middle');
          tglTxt.textContent = collapsed[n.id] ? '+' : '−';
          g.appendChild(tglTxt);
          var doToggle = function (e) { e.stopPropagation(); collapsed[n.id] = !collapsed[n.id]; render(); };
          tgl.addEventListener('click', doToggle);
          tglTxt.addEventListener('click', doToggle);
        }

        var labelHolder;
        if (n.href) {
          labelHolder = document.createElementNS(SVGNS, 'a');
          labelHolder.setAttribute('href', n.href);
          labelHolder.setAttribute('class', 'mm-link');
        } else {
          labelHolder = document.createElementNS(SVGNS, 'g');
        }
        var text = document.createElementNS(SVGNS, 'text');
        text.setAttribute('class', 'mm-label'); text.setAttribute('x', '12'); text.setAttribute('y', '4');
        text.textContent = n.label;
        labelHolder.appendChild(text);
        g.appendChild(labelHolder);

        var titleParts = [n.label];
        if (n.status) titleParts.push('status: ' + n.status);
        if (n.goal) titleParts.push(n.goal);
        var title = document.createElementNS(SVGNS, 'title');
        title.textContent = titleParts.join(' — ');
        g.appendChild(title);

        nodesG.appendChild(g);
      });

      var maxX = 0, maxY = 0;
      positioned.forEach(function (p) { if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y; });
      svg.setAttribute('viewBox', '0 0 ' + (maxX + 260) + ' ' + (maxY + 60));
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', String(Math.max(420, Math.min(maxY + 80, 760))));
    }

    // ── pan (drag) + zoom (wheel + buttons) ──
    var dragging = false, lastX = 0, lastY = 0;
    svg.addEventListener('mousedown', function (e) {
      if (e.target && e.target.closest && (e.target.closest('.mm-toggle') || e.target.closest('.mm-link'))) return;
      dragging = true; lastX = e.clientX; lastY = e.clientY;
    });
    window.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      panX += (e.clientX - lastX); panY += (e.clientY - lastY);
      lastX = e.clientX; lastY = e.clientY;
      applyTransform();
    });
    window.addEventListener('mouseup', function () { dragging = false; });
    svg.addEventListener('wheel', function (e) {
      e.preventDefault();
      scale = Math.max(0.3, Math.min(2.5, scale * (e.deltaY > 0 ? 0.9 : 1.1)));
      applyTransform();
    }, { passive: false });

    document.getElementById('mm-zoom-in').addEventListener('click', function () { scale = Math.min(2.5, scale * 1.2); applyTransform(); });
    document.getElementById('mm-zoom-out').addEventListener('click', function () { scale = Math.max(0.3, scale / 1.2); applyTransform(); });
    document.getElementById('mm-zoom-reset').addEventListener('click', function () { scale = 1; panX = 40; panY = 20; applyTransform(); });

    applyTransform();
  }

  // ── UX/UI TABS (uxui.html — self-detects via .uxui-tabbar presence, no-op elsewhere;
  // FE-I2 single-JS: this behavior lives here, not a new per-page <script>). Toggles the
  // `hidden` attribute on the matching .uxui-panel; every other ability on the page (theme,
  // lang, search, collapse, Rows/Window, Export) is the SAME shared init* code above — nothing
  // tab-specific was needed for those, they already operate on whatever is in the DOM. ──
  function initUxUiTabs() {
    var bar = document.querySelector('.uxui-tabbar');
    if (!bar) return; // no-op on every page except uxui.html
    var tabs = bar.querySelectorAll('.uxui-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', String(active));
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !active;
        });
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════
  // GALLERY CATALOG (BUILD 6, Governor 2026-07-21) — self-detects via `.gal-catalog`
  // presence, no-op elsewhere (same feature-detect idiom as initTreeEditor/initMindmap,
  // FE-I2 single-JS, no HTML-edit-per-page assumptions beyond gallery.html's own markup).
  // Collapsed-list rows -> "+" opens a popup with the larger view + full metadata (title,
  // alt, caption, dimensions, format, size, date, SEO) + a ♥ favorite toggle + editable
  // tags/status — this SAME popup doubles as BUILD 4's mandatory per-row Edit control for
  // these rows (they are not li.tree-node, so wireRowToolbar's ✎ doesn't reach them; giving
  // them their own edit-capable popup here satisfies Build 4 without a second popup engine —
  // reuses openModal/closeModal/mkField, CORE-SEED 1/A8).
  // ═════════════════════════════════════════════════════════════════
  function initGalleryCatalog() {
    var catalogs = document.querySelectorAll('.gal-catalog');
    if (!catalogs.length) return;

    var PAGE = location.pathname.split('/').pop() || 'page';
    function loadJSON(key) { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; } }
    function saveJSON(key, obj) { try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) { /* storage full — non-fatal */ } }
    var favs = loadJSON('cisem-gallery-fav:' + PAGE);
    var edits = loadJSON('cisem-gallery-edits:' + PAGE);
    var thumbs = loadJSON('cisem-gallery-thumbs:' + PAGE);

    function getMeta(row) {
      var m = {};
      try { m = JSON.parse(row.getAttribute('data-meta') || '{}'); } catch (e) { /* malformed data-meta — fall back to {} */ }
      var catno = row.getAttribute('data-catno');
      var ov = edits[catno];
      if (ov) for (var k in ov) m[k] = ov[k];
      return m;
    }
    function applyFav(row) {
      var catno = row.getAttribute('data-catno');
      var btn = row.querySelector('.gal-fav-btn');
      var active = !!favs[catno];
      if (btn) { btn.classList.toggle('active', active); btn.textContent = active ? '♥' : '♡'; }
      return active;
    }
    function toggleFav(row) {
      var catno = row.getAttribute('data-catno');
      favs[catno] = !favs[catno];
      saveJSON('cisem-gallery-fav:' + PAGE, favs);
      applyFav(row);
    }
    function applyThumb(row) {
      var catno = row.getAttribute('data-catno');
      var el = row.querySelector('.gal-thumb');
      if (el && thumbs[catno]) {
        el.style.backgroundImage = 'url(' + thumbs[catno] + ')';
        el.style.backgroundSize = 'cover'; el.style.backgroundPosition = 'center';
        el.textContent = '';
      }
    }

    function openDetailPopup(row) {
      var meta = getMeta(row);
      var catno = row.getAttribute('data-catno');
      var form = document.createElement('div');

      var thumbLg = document.createElement('div');
      thumbLg.className = 'gal-detail-thumb-lg';
      var srcThumb = row.querySelector('.gal-thumb');
      thumbLg.textContent = srcThumb ? srcThumb.textContent || '\u{1F5BC}' : '\u{1F5BC}';
      form.appendChild(thumbLg);

      var favBtn = document.createElement('button');
      favBtn.type = 'button'; favBtn.className = 'cm-btn' + (favs[catno] ? ' primary' : '');
      favBtn.textContent = favs[catno] ? '♥ Favorited' : '♡ Add to favorites';
      favBtn.style.marginBottom = '12px';
      favBtn.addEventListener('click', function () {
        toggleFav(row);
        favBtn.textContent = favs[catno] ? '♥ Favorited' : '♡ Add to favorites';
        favBtn.classList.toggle('primary', !!favs[catno]);
      });
      form.appendChild(favBtn);

      var grid = document.createElement('div');
      grid.className = 'cm-detail-grid';
      var fTitle = mkField('Title', 'input', meta.title || '');
      var fAlt = mkField('Alt text', 'input', meta.alt || '');
      var fCaption = mkField('Caption', 'textarea', meta.caption || '');
      var fDate = mkField('Date of creation', 'input', meta.date || row.getAttribute('data-created') || '');
      var fTags = mkField('Tags', 'input', row.getAttribute('data-tags') || '');
      var fStatus = mkField('Status', 'input', row.getAttribute('data-status') || '');
      [fTitle, fAlt, fCaption, fDate, fTags, fStatus].forEach(function (f) { grid.appendChild(f.wrap); });
      form.appendChild(grid);

      var infoLines = [
        ['Filename', meta.filename], ['Catalog #', catno], ['Dimensions', meta.dimensions],
        ['Format', meta.format], ['File size', meta.size],
        ['SEO title', meta.seo_title], ['SEO description', meta.seo_desc],
        ['schema.org type', meta.seo_type], ['Filename slug', meta.seo_slug], ['Keywords', meta.seo_keywords]
      ].filter(function (p) { return p[1]; });
      var info = document.createElement('div');
      info.className = 'gal-legacy-note';
      info.innerHTML = infoLines.map(function (p) {
        return '<div style="margin-bottom:3px;"><strong style="color:var(--text)">' + escapeHtml(p[0]) + ':</strong> ' + escapeHtml(p[1]) + '</div>';
      }).join('');
      form.appendChild(info);

      var actions = document.createElement('div');
      actions.className = 'cm-actions';
      var cancelBtn = document.createElement('button');
      cancelBtn.type = 'button'; cancelBtn.className = 'cm-btn'; cancelBtn.textContent = 'Close';
      cancelBtn.addEventListener('click', closeModal);
      var saveBtn = document.createElement('button');
      saveBtn.type = 'button'; saveBtn.className = 'cm-btn primary'; saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', function () {
        edits[catno] = edits[catno] || {};
        edits[catno].title = fTitle.field.value;
        edits[catno].alt = fAlt.field.value;
        edits[catno].caption = fCaption.field.value;
        edits[catno].date = fDate.field.value;
        saveJSON('cisem-gallery-edits:' + PAGE, edits);
        row.setAttribute('data-tags', fTags.field.value);
        row.setAttribute('data-status', fStatus.field.value);
        closeModal();
      });
      actions.appendChild(cancelBtn); actions.appendChild(saveBtn);
      form.appendChild(actions);

      openModal('Media Details — ' + catno, form);
    }

    document.querySelectorAll('.gal-row').forEach(function (row) {
      applyFav(row);
      applyThumb(row);
      var favBtn = row.querySelector('.gal-fav-btn');
      if (favBtn) favBtn.addEventListener('click', function () { toggleFav(row); });
      var plusBtn = row.querySelector('.gal-plus-btn');
      if (plusBtn) plusBtn.addEventListener('click', function () { openDetailPopup(row); });

      // BUILD 5 — "allow changing/adding a thumbnail where media rows exist"
      var thumbEl = row.querySelector('.gal-thumb');
      if (thumbEl) {
        var fileInput = document.createElement('input');
        fileInput.type = 'file'; fileInput.accept = 'image/*'; fileInput.className = 'rt-file-input';
        row.appendChild(fileInput);
        thumbEl.title = 'Click to change thumbnail';
        thumbEl.style.cursor = 'pointer';
        thumbEl.addEventListener('click', function (e) { e.stopPropagation(); fileInput.click(); });
        fileInput.addEventListener('click', function (e) { e.stopPropagation(); });
        fileInput.addEventListener('change', function () {
          var file = fileInput.files && fileInput.files[0];
          if (!file) return;
          var reader = new FileReader();
          reader.onload = function () {
            thumbs[row.getAttribute('data-catno')] = reader.result;
            saveJSON('cisem-gallery-thumbs:' + PAGE, thumbs);
            applyThumb(row);
          };
          reader.readAsDataURL(file);
        });
      }
    });

    // ── view-mode (Collapsed / Details) + thumbnail-size (S/M/L) controls, per panel ──
    document.querySelectorAll('.gal-toolbar').forEach(function (bar) {
      var catalog = bar.nextElementSibling;
      while (catalog && !catalog.classList.contains('gal-catalog')) catalog = catalog.nextElementSibling;
      if (!catalog) return;
      var modeBtns = bar.querySelectorAll('.gal-mode-btn');
      modeBtns.forEach(function (b) {
        b.addEventListener('click', function () {
          modeBtns.forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
          var mode = b.getAttribute('data-mode');
          catalog.classList.toggle('gal-mode-collapsed', mode === 'collapsed');
          catalog.classList.toggle('gal-mode-details', mode === 'details');
        });
      });
      var sizeBtns = bar.querySelectorAll('.gal-size-btn');
      sizeBtns.forEach(function (b) {
        b.addEventListener('click', function () {
          sizeBtns.forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
          catalog.setAttribute('data-size', b.getAttribute('data-size'));
        });
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════
  // INLINE TEXT EDIT (BUILD 5, Governor 2026-07-21) — clicking a registered text element
  // makes it editable in place (contenteditable), with a subtle hover affordance (CSS
  // .inline-editable). Scope is deliberately the NON-navigational, NON-toggle-controlling
  // text surfaces (page titles/descriptions, tree leaf/branch labels+notes+tags, gallery
  // filenames/catalog numbers) — `.fp`/file-list link text is EXCLUDED (it is the sole
  // navigation target inside an `<a>`; overloading it would make a real repo-file link
  // ambiguous between "navigate" and "edit", flagged in the build report rather than
  // guessed). Persists per-page via localStorage (same auto-inject idiom as the rest of
  // this file — zero HTML edits). ──
  function initInlineEdit() {
    var KEY = 'cisem-inline-edits:' + (location.pathname.split('/').pop() || 'page');
    function loadEdits() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
    function saveEdits(obj) { try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) { /* storage full — non-fatal */ } }

    var SELECTOR = 'h1, .pg-desc, .tree-label, .tree-note, .tree-tag, .gal-filename, .gal-catno-lbl';
    var matches = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
    var edits = loadEdits();

    function pathFor(el, idx) {
      var li = el.closest && el.closest('li[data-nid]');
      var cls = (el.className && String(el.className).split(' ')[0]) || el.tagName.toLowerCase();
      return li ? ('nid:' + li.getAttribute('data-nid') + ':' + cls) : ('idx:' + idx + ':' + cls);
    }

    matches.forEach(function (el, idx) {
      var key = pathFor(el, idx);
      if (edits[key] !== undefined) el.textContent = edits[key];
      el.classList.add('inline-editable');
      if (!el.hasAttribute('title')) el.title = 'Click to edit';

      el.addEventListener('click', function (e) {
        if (el.isContentEditable) return; // already editing — let normal text-caret click through
        e.preventDefault();
        e.stopPropagation(); // don't also trigger a parent branch-row's collapse/expand toggle
        el.setAttribute('contenteditable', 'true');
        el.classList.add('inline-editing');
        el.focus();
        try {
          var range = document.createRange();
          range.selectNodeContents(el);
          var sel = window.getSelection();
          if (sel) { sel.removeAllRanges(); sel.addRange(range); }
        } catch (selErr) { /* Selection API unavailable in this environment — edit still works */ }
      });
      el.addEventListener('blur', function () {
        el.setAttribute('contenteditable', 'false');
        el.classList.remove('inline-editing');
        var e2 = loadEdits();
        e2[pathFor(el, idx)] = el.textContent;
        saveEdits(e2);
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); el.blur(); }
        if (e.key === 'Escape') { e.preventDefault(); el.blur(); }
      });
    });
  }

  function init() {
    initTheme();
    initLang();
    initSearch();
    initCollapse();
    initPageViewToggle(); // group pages — auto-injects Rows/Window toggle
    initViewToggle();     // home page only — Grid/List toggle
    initTreeToggle();     // schema/vocabulary/corespines-set — collapsible tree rows
    initTreeEditor();     // Phase 2 — self-detects .tree-row (same 3 pages), no-op elsewhere
    initMindmap();        // ARCH-00410 — schema.html only, companion SVG mindmap view
    initUxUiTabs();       // uxui.html only — UX/UI tab switch, self-detected
    assignPlaceholderDates(); // BUILD 1 — data-created/data-modified on every row/group/gal-row
    initGalleryCatalog(); // BUILD 6 — gallery.html only, self-detected via .gal-catalog
    initInlineEdit();     // BUILD 5 — click-to-edit text, all pages (runs last: data-nid + gal markup must exist first)
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
