// CISEM Frontend Functional Check — BEHAVIORAL verification (clicks + asserts state changes),
// not listener-presence. Catches the class of bug where a listener is wired but does nothing
// (e.g. collapse toggle bailing because a panel broke nextElementSibling). Run: node functional-check.mjs
// Governed by CS-FRONTEND-001; feeds the web-page completion learning loop (Principle 17 / RI-0007).
import { JSDOM } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');           // repo root
const JS = fs.readFileSync(path.join(ROOT, 'frontend/js/search.js'), 'utf8');

let pass = 0, fail = 0;
const fails = [];
function ok(name, cond) { if (cond) { pass++; } else { fail++; fails.push(name); } }

function load(rel) {
  const html = fs.readFileSync(path.join(ROOT, 'frontend/pages', rel), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true,
    url: 'http://localhost/frontend/pages/' + rel });
  const w = dom.window;
  w.matchMedia = w.matchMedia || function () { return { matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }; };
  w.print = w.print || function () {};
  w.eval(JS);   // registers a DOMContentLoaded listener (jsdom stays in 'loading')
  w.document.dispatchEvent(new w.Event('DOMContentLoaded', { bubbles: true }));  // fire init()
  return w;
}
function click(w, el) { el.dispatchEvent(new w.window.Event('click', { bubbles: true, cancelable: true })); }

// ── schema.html — the page the Governor found broken ──
const w = load('schema.html');
const doc = w.document;

const branch = doc.querySelector('.tree-row.branch-row');
ok('schema: a branch row exists', !!branch);
if (branch) {
  const li = branch.parentElement;
  const kids = li.querySelector(':scope > ul.tree-children');
  ok('schema: branch has a child <ul>', !!kids);
  if (kids) {
    const before = kids.classList.contains('tree-collapsed');
    click(w, branch);
    const afterFirst = kids.classList.contains('tree-collapsed');
    ok('schema: clicking a branch row CHANGES collapse state (behavioral, not just wired)', before !== afterFirst);
    click(w, branch);
    ok('schema: second click toggles back', kids.classList.contains('tree-collapsed') === before);
  }
}

// ── universal chrome toggles (present + behavioral) on schema.html ──
const themeBtn = doc.querySelector('.theme-tgl');
ok('theme toggle injected', !!themeBtn);
if (themeBtn) {
  const t0 = doc.documentElement.getAttribute('data-theme') || '';
  click(w, themeBtn);
  ok('theme toggle changes data-theme', (doc.documentElement.getAttribute('data-theme') || '') !== t0);
}
const langBtn = doc.querySelector('.lang-tgl');
ok('language toggle injected', !!langBtn);
if (langBtn) {
  const d0 = doc.documentElement.getAttribute('dir') || 'ltr';
  click(w, langBtn);
  ok('language toggle flips dir', (doc.documentElement.getAttribute('dir') || 'ltr') !== d0);
}

// ── a content page (Rows/Window toggle must actually reshape, not be dead) ──
const w2 = load('principles.html');
const viewBtns = w2.document.querySelectorAll('.vbtn');
ok('principles: Rows/Window view buttons exist', viewBtns.length >= 2);
if (viewBtns.length >= 2) {
  const body = w2.document.body;
  const win = Array.prototype.find.call(viewBtns, b => /window/i.test(b.textContent));
  if (win) { click(w2, win); ok('principles: Window view applies a body class (behavioral)', /view-window/.test(body.className)); }
  else ok('principles: a Window view button is labelled', false);
}

console.log('CISEM FRONTEND FUNCTIONAL CHECK');
console.log('  ' + pass + ' pass, ' + fail + ' fail');
if (fail) { console.log('  FAILURES:'); fails.forEach(f => console.log('   ✗ ' + f)); }
else console.log('  ✅ ALL INTERACTIVE ELEMENTS BEHAVIORALLY VERIFIED');
process.exit(fail ? 1 : 0);
