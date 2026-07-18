/* CISEM Frontend — Search + Collapse + View Toggle */
(function () {

  // ── SEARCH (works on .fi file rows AND .gc grid cards) ─────────────
  function initSearch() {
    var inp = document.getElementById('si');
    var cnt = document.getElementById('cnt');
    var nr  = document.getElementById('no-result');
    if (!inp) return;
    var items = document.querySelectorAll('.fi, .gc');
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

  // ── VIEW TOGGLE (index.html: grid ↔ grouped list) ──────────────────
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
    initViewToggle();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
