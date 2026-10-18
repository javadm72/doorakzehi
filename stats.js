/* =========================================================
   STATS — آمار و گزارش‌گیری شجره‌نامه
   ========================================================= */
(function(){
  "use strict";

  const $ = id => document.getElementById(id);
  function getApp(){ return window.TreeApp || null; }
  function getPeople(){ const a = getApp(); return a ? a.people : {}; }
  function getMarriages(){ const a = getApp(); return a ? a.marriages : []; }

  function toFa(n){
    return String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  function computeStats(){
    const people = getPeople();
    const ids = Object.keys(people);

    const stats = {
      total: ids.length,
      alive: 0,
      deceased: 0,
      male: 0,
      female: 0,
      places: {},
      decades: {},
      oldest: null,
      youngest: null,
      marriages: getMarriages().length
    };

    ids.forEach(id => {
      const p = people[id];
      if (p.hiat === "z") stats.alive++;
      else stats.deceased++;

      if (p.gender === "male") stats.male++;
      else stats.female++;

      if (p.place){
        stats.places[p.place] = (stats.places[p.place] || 0) + 1;
      }

      const y = parseInt(p.birthYear, 10);
      if (y){
        const decade = Math.floor(y / 10) * 10;
        stats.decades[decade] = (stats.decades[decade] || 0) + 1;

        if (!stats.oldest || y < stats.oldest.year) stats.oldest = { name: p.name, year: y };
        if (!stats.youngest || y > stats.youngest.year) stats.youngest = { name: p.name, year: y };
      }
    });

    return stats;
  }

  /* ---------- ساخت پنل آمار ---------- */
  function buildModal(){
    if ($("statsModal")) return;
    const modal = document.createElement("div");
    modal.id = "statsModal";
    modal.className = "stats-modal";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="stats-box">
        <div class="stats-header">
          <h3>📊 آمار شجره‌نامه طایفه درک زهی</h3>
          <button class="stats-close" id="statsClose">×</button>
        </div>
        <div class="stats-body" id="statsBody"></div>
      </div>
    `;
    document.body.appendChild(modal);

    $("statsClose").onclick = () => { modal.hidden = true; };
    modal.addEventListener("click", e => {
      if (e.target.id === "statsModal") modal.hidden = true;
    });
  }

  /* ---------- نمایش آمار ---------- */
  function render(){
    const s = computeStats();
    const body = $("statsBody");
    if (!body) return;

    const placeTop = Object.entries(s.places)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const decadeTop = Object.entries(s.decades)
      .sort((a, b) => a[0] - b[0]);

    const maxDecade = Math.max(...decadeTop.map(d => d[1]), 1);

    body.innerHTML = `
      <!-- کارت‌های خلاصه -->
      <div class="stats-cards">
        <div class="stat-card primary">
          <div class="stat-card-icon">👥</div>
          <div class="stat-card-value">${toFa(s.total)}</div>
          <div class="stat-card-label">کل افراد</div>
        </div>
        <div class="stat-card male">
          <div class="stat-card-icon">👨</div>
          <div class="stat-card-value">${toFa(s.male)}</div>
          <div class="stat-card-label">مرد</div>
        </div>
        <div class="stat-card female">
          <div class="stat-card-icon">👩</div>
          <div class="stat-card-value">${toFa(s.female)}</div>
          <div class="stat-card-label">زن</div>
        </div>
        <div class="stat-card alive">
          <div class="stat-card-icon">✦</div>
          <div class="stat-card-value">${toFa(s.alive)}</div>
          <div class="stat-card-label">زنده</div>
        </div>
        <div class="stat-card deceased">
          <div class="stat-card-icon">†</div>
          <div class="stat-card-value">${toFa(s.deceased)}</div>
          <div class="stat-card-label">متوفی</div>
        </div>
        <div class="stat-card marriages">
          <div class="stat-card-icon">💑</div>
          <div class="stat-card-value">${toFa(s.marriages)}</div>
          <div class="stat-card-label">ازدواج</div>
        </div>
      </div>

      <!-- بخش‌های تفصیلی -->
      <div class="stats-section">
        <h4 class="stats-section-title">📍 پراکندگی محل زندگی</h4>
        <div class="stats-places">
          ${placeTop.length ? placeTop.map(([place, count]) => `
            <div class="stats-place-item">
              <span class="stats-place-name">${place}</span>
              <div class="stats-place-bar-wrap">
                <div class="stats-place-bar" style="width:${(count/placeTop[0][1])*100}%"></div>
              </div>
              <span class="stats-place-count">${toFa(count)}</span>
            </div>
          `).join("") : '<div class="stats-empty">داده‌ای ثبت نشده</div>'}
        </div>
      </div>

      <div class="stats-section">
        <h4 class="stats-section-title">📅 توزیع تولد در دهه‌ها</h4>
        <div class="stats-decades">
          ${decadeTop.length ? decadeTop.map(([d, c]) => `
            <div class="stats-decade-item">
              <div class="stats-decade-bar"
                   style="height:${(c/maxDecade)*120}px"
                   title="${toFa(c)} نفر">
                <span class="stats-decade-count">${toFa(c)}</span>
              </div>
              <div class="stats-decade-label">${toFa(d)}</div>
            </div>
          `).join("") : '<div class="stats-empty">داده‌ای ثبت نشده</div>'}
        </div>
      </div>

      <div class="stats-section">
        <h4 class="stats-section-title">🏆 رکوردها</h4>
        <div class="stats-records">
          ${s.oldest ? `
            <div class="stats-record">
              <span class="stats-record-icon">🕰</span>
              <div>
                <div class="stats-record-label">قدیمی‌ترین تولد</div>
                <div class="stats-record-value">${s.oldest.name} (${toFa(s.oldest.year)})</div>
              </div>
            </div>
          ` : ""}
          ${s.youngest ? `
            <div class="stats-record">
              <span class="stats-record-icon">⭐</span>
              <div>
                <div class="stats-record-label">جدیدترین تولد</div>
                <div class="stats-record-value">${s.youngest.name} (${toFa(s.youngest.year)})</div>
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function open(){
    buildModal();
    render();
    $("statsModal").hidden = false;
  }

  function init(){
    const btn = $("statsBtn");
    if (btn) btn.onclick = open;
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.Stats = { open };

})();