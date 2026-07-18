/* CISEM Frontend — Search + Collapse + View Toggle (CS-FRONTEND-001, FE-I2) */
(function () {

  // ── SEARCH (works on .fi file rows AND .gc grid cards) ─────────────
  function initSearch() {
    var inp = document.getElementById('si');
    var cnt = document.getElementById('cnt');
    var nr  = document.getElementById('no-result');
    if (!inp) return;
    var items = document.querySelectorAll('.fi, .gc, .cl-item, .tier-card');
    var total = items.length;
    function upd() {
      var q = inp.value.toLowerCase().trim();
      var v = 0;
      items.forEach(function (el) {
        var show = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
        el.style.display = show ? '' : 'none';
        if (show) v++;
      });
      if (cnt) cnt.textContent = q ? v + ' / ' + total : (total ? total + ' items' : '');
      if (nr)  nr.style.display = (v === 0 && q) ? 'block' : 'none';
    }
    inp.addEventListener('input', upd);
    upd();
  }

  // ── COLLAPSIBLE SECTION HEADERS (.sh toggles the next .fl list) ────
  function initCollapse() {
    document.querySelectorAll('.sh').forEach(function (sh) {
      var next = sh.nextElementSibling;
      if (!next || !next.classList.contains('fl')) return;
      sh.addEventListener('click', function () {
        sh.classList.toggle('sh-closed');
        next.classList.toggle('sh-hidden');
      });
    });
  }

  // ── ROWS / WINDOW VIEW TOGGLE (auto-injected on group pages with .fi items) ──
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
    if (firstSh) {
      mainEl.insertBefore(bar, firstSh);
    } else if (pgDesc && pgDesc.nextSibling) {
      mainEl.insertBefore(bar, pgDesc.nextSibling);
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

  function init() {
    initSearch();
    initCollapse();
    initPageViewToggle(); // group pages — auto-injects Rows/Window toggle
    initViewToggle();     // home page only — Grid/List toggle
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
