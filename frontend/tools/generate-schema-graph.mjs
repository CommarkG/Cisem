#!/usr/bin/env node
// CISEM Schema Graph Generator — BUILD-TIME ONLY tooling (Core Seed 7, ARCH-00410).
// tags: [frontend, generator, registry-derived, build-tool]
// Status: PROVISIONAL-ACTIVE (built under ratified ARCH-00410; Sonnet, 2026-07-21)
// Governing corespine: CS-FRONTEND-001 (governed frontend build-tool, §III pattern)
//
// Reads the CISEM registries and emits the node-graph DATA for the schema.html mindmap
// (Core Seed 3 — GENERATED, never hand-authored). There is no YAML parser available in
// this env (no jq/yq, no npm runtime dep — Core Seed 7), so this does TARGETED FIELD
// EXTRACTION: regex/line-parse only the fields the graph needs (id, status, goal,
// next_seq) out of the registries — not a general YAML parser.
//
// REUSABLE MODULE (Core Seed 8): `generateGraph(repoRoot)` is exported so BP-0011's
// broader registry-generated-pages scope can call it directly rather than forking a
// second generator. The CLI entry point below is schema.html-specific (it splices the
// result into frontend/js/search.js's auto-generated marker block, in ONE file, to keep
// CS-FRONTEND-001 FE-I2 "single JS file" literally honored — no new <script> tag, no
// runtime fetch()). A future consumer of generateGraph() can choose its own output shape.
//
// Usage: node frontend/tools/generate-schema-graph.mjs
//   Regenerates the CISEM:SCHEMA-GRAPH block inside frontend/js/search.js in place.
//   Idempotent: running it twice with no registry changes produces a byte-identical file.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

// ── targeted field extraction (no YAML lib available; Core Seed 7) ──────────────────────
// Splits a YAML file into TOP-LEVEL blocks (a column-0 "KEY:" line + everything indented/
// blank beneath it, until the next column-0 non-comment line). We never parse the full
// YAML grammar — only the specific fields (status:/goal:/next_seq:) this graph needs.
function extractTopLevelBlocks(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const blocks = [];
  let current = null;
  const topKeyRe = /^([A-Za-z][A-Za-z0-9_-]*):\s*(#.*)?$/;
  for (const line of lines) {
    const m = line.match(topKeyRe);
    if (m) {
      current = { key: m[1], bodyLines: [] };
      blocks.push(current);
    } else if (current && /^\s+\S/.test(line)) {
      current.bodyLines.push(line);
    } else if (current && line.trim() === '') {
      current.bodyLines.push(line);
    } else if (!/^\s/.test(line) && line.trim() !== '' && !line.trim().startsWith('#')) {
      current = null; // non-indented, non-key, non-comment line ends the current block run
    }
  }
  return blocks;
}

function firstFieldValue(bodyLines, field) {
  const re = new RegExp('^\\s*' + field + ':\\s*(.+)$');
  for (const line of bodyLines) {
    const m = line.match(re);
    if (m) return m[1].replace(/#.*$/, '').trim().replace(/^"(.*)"$/, '$1');
  }
  return null;
}

function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

// ── source: corespine-registry.yaml — top-level corespine entries ───────────────────────
function readCorespines(repoRoot) {
  const p = path.join(repoRoot, 'dna/corespines/corespine-registry.yaml');
  const text = fs.readFileSync(p, 'utf8');
  const blocks = extractTopLevelBlocks(text);
  const out = [];
  for (const b of blocks) {
    if (b.key === 'CANDIDATES') continue; // different (inline-flow-mapping) shape, handled below
    const status = firstFieldValue(b.bodyLines, 'status');
    if (!status) continue; // not a corespine record
    const goal = firstFieldValue(b.bodyLines, 'goal');
    out.push({ id: 'cs-' + slug(b.key), label: b.key, status, goal: goal || null });
  }
  return out;
}

// candidates block shape: "  Name:        { status: X, tag: [...], note: "..." }"
function readCorespineCandidates(repoRoot) {
  const p = path.join(repoRoot, 'dna/corespines/corespine-registry.yaml');
  const text = fs.readFileSync(p, 'utf8');
  const out = [];
  const re = /^\s{2}(\w[\w]*):\s*\{\s*status:\s*([A-Za-z0-9_-]+)/gm;
  let m;
  while ((m = re.exec(text))) out.push({ id: 'cs-cand-' + slug(m[1]), label: m[1], status: m[2], goal: null });
  return out;
}

// ── source: naming-registry.yaml — TYPE next_seq entries ────────────────────────────────
function readNamingTypes(repoRoot) {
  const p = path.join(repoRoot, 'dna/naming-registry.yaml');
  const text = fs.readFileSync(p, 'utf8');
  const out = [];
  const re = /^([A-Z]+):\s*\{\s*next_seq:\s*(\d+)/gm;
  let m;
  while ((m = re.exec(text))) out.push({ id: 'type-' + slug(m[1]), label: 'CISEM-' + m[1], status: 'next_seq ' + m[2], goal: null });
  return out;
}

// ── source: filesystem enumeration (protocols / checks+hooks / agents / skills / schema) ──
function readDirAsNodes(repoRoot, relDir, idPrefix, extRe, tryStatus) {
  const dir = path.join(repoRoot, relDir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => extRe.test(f)).map(f => {
    let status = null;
    if (tryStatus) {
      try {
        const content = fs.readFileSync(path.join(dir, f), 'utf8');
        const sm = content.match(/\*\*Status:\*\*\s*([^\n|]+)/) || content.match(/^Status:\s*(.+)$/m);
        if (sm) status = sm[1].trim().split('|')[0].trim().split(/[—-]/)[0].trim();
      } catch (e) { /* honest fallback below — non-blocking */ }
    }
    return { id: idPrefix + '-' + slug(f), label: f, status: status || 'file', goal: null };
  });
}

// ── build the graph: root -> tiers (T-SYS/T-DOM) -> categories -> registry-derived nodes ──
export function generateGraph(repoRoot) {
  const corespines = readCorespines(repoRoot);
  const candidates = readCorespineCandidates(repoRoot);
  const namingTypes = readNamingTypes(repoRoot);
  const protocols = readDirAsNodes(repoRoot, 'dna/protocols/', 'proto', /\.md$/, true);
  const checksAndHooks = [
    ...readDirAsNodes(repoRoot, 'dna/checks/', 'chk', /\.(sh|yaml|md)$/, false),
    ...readDirAsNodes(repoRoot, '.claude/hooks/', 'hook', /\.sh$/, false)
  ];
  const agents = readDirAsNodes(repoRoot, '.claude/agents/', 'agent', /\.md$/, false);
  const skillsDir = path.join(repoRoot, '.claude/skills');
  const skills = fs.existsSync(skillsDir)
    ? fs.readdirSync(skillsDir).filter(d => fs.statSync(path.join(skillsDir, d)).isDirectory())
        .map(d => ({ id: 'skill-' + slug(d), label: d, status: 'skill', goal: null }))
    : [];
  const schemaFiles = readDirAsNodes(repoRoot, 'dna/schema/', 'schema', /\.md$/, true);

  const isSimOrDom = (n) => /SIMULATION/i.test(n.status);
  const tSysCorespines = corespines.filter(n => !isSimOrDom(n));
  const tDomCorespines = corespines.filter(n => isSimOrDom(n));

  const mkLeaf = (n, href) => ({ id: n.id, label: n.label, status: n.status, goal: n.goal || undefined, href, children: [] });
  const mkCat = (id, label, href, children) => ({ id, label, type: 'category', href, children });

  return {
    meta: {
      generated: new Date().toISOString(),
      generator: 'frontend/tools/generate-schema-graph.mjs',
      sources: ['dna/corespines/corespine-registry.yaml', 'dna/naming-registry.yaml',
        'dna/protocols/', 'dna/checks/', '.claude/hooks/', '.claude/agents/', '.claude/skills/', 'dna/schema/']
    },
    root: {
      id: 'root', label: 'CISEM', type: 'root', href: '../index.html',
      children: [
        {
          id: 't-sys', label: 'T-SYS', type: 'tier', href: null,
          children: [
            mkCat('cat-corespines', 'Corespines', 'corespines.html', tSysCorespines.map(n => mkLeaf(n, 'corespines.html'))),
            mkCat('cat-corespine-candidates', 'Corespine Candidates', 'corespines-set.html', candidates.map(n => mkLeaf(n, 'corespines-set.html'))),
            mkCat('cat-protocols', 'Protocols', 'protocols.html', protocols.map(n => mkLeaf(n, 'protocols.html'))),
            mkCat('cat-schema', 'Schema', 'schema.html', schemaFiles.map(n => mkLeaf(n, 'schema.html'))),
            mkCat('cat-enforcement', 'Enforcement / CAL', 'engines.html', checksAndHooks.map(n => mkLeaf(n, 'engines.html'))),
            mkCat('cat-agents', 'Agents', 'agents.html', agents.map(n => mkLeaf(n, 'agents.html'))),
            mkCat('cat-skills', 'Skills', 'skills.html', skills.map(n => mkLeaf(n, 'skills.html'))),
            mkCat('cat-node-types', 'Node Types', 'nodes.html', namingTypes.map(n => mkLeaf(n, 'nodes.html')))
          ]
        },
        {
          id: 't-dom', label: 'T-DOM', type: 'tier', href: null,
          children: [
            mkCat('cat-solutions', 'Solutions', 'corespines.html', tDomCorespines.map(n => mkLeaf(n, 'corespines.html')))
          ]
        }
      ]
    }
  };
}

function countNodes(n) {
  let c = 1;
  (n.children || []).forEach(ch => { c += countNodes(ch); });
  return c;
}

// ── CLI: splice the generated graph into frontend/js/search.js's marker block ───────────
const START_MARK = '/* CISEM:SCHEMA-GRAPH:START */';
const END_MARK = '/* CISEM:SCHEMA-GRAPH:END */';

function spliceIntoSearchJs(repoRoot, graph) {
  const searchJsPath = path.join(repoRoot, 'frontend/js/search.js');
  const original = fs.readFileSync(searchJsPath, 'utf8');
  const startIdx = original.indexOf(START_MARK);
  const endIdx = original.indexOf(END_MARK);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('CISEM:SCHEMA-GRAPH markers not found in frontend/js/search.js — cannot splice (Core Seed 3 requires generation, not hand-authoring; the markers must exist once, hand-placed, before this generator can regenerate the block).');
  }
  const before = original.slice(0, startIdx + START_MARK.length);
  const after = original.slice(endIdx);
  const body = '\n  var CISEM_SCHEMA_GRAPH = ' + JSON.stringify(graph, null, 2) + ';\n  ';
  const next = before + body + after;
  fs.writeFileSync(searchJsPath, next, 'utf8');
  return searchJsPath;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const repoRoot = path.resolve(HERE, '..', '..');
  const graph = generateGraph(repoRoot);
  const out = spliceIntoSearchJs(repoRoot, graph);
  console.log('CISEM schema graph regenerated into ' + out + ' (' + countNodes(graph.root) + ' nodes, ' +
    graph.root.children.length + ' tiers)');
}
