/* =========================================================
   FILTERS — فیلترهای پیشرفته درخت
   ========================================================= */
(function(){
  "use strict";

  const FILTER_KEY = "shajareh_filters";

  let activeFilters = {
    status: "all",       // all | alive | deceased
    gender: "all",       // all | male | female
    place: "",
    yearFrom: "",
    yearTo: "",
    generation: ""
  };

  const $ = id => document.getElementById(id);

  function getApp(){ return window.TreeApp || null; }
  function getPeople(){ const a = getApp(); return a ? a.people : {}; }

  /* بارگذاری فیلترها از localStorage */
  function load(){
    try {
      const raw = localStorage.getItem(FILTER_KEY);
      if (raw) activeFilters = { ...activeFilters, ...JSON.parse(raw) };
    } catch(_){}
  }
  function save(){
    try { localStorage.setItem(FILTER_KEY, JSON.stringify(activeFilters)); } catch(_){}
  }

  /* ---------- اعمال فیلتر روی کارت‌ها ---------- */
  function apply(){
    const people = getPeople();
    let visible = 0;
    let hidden = 0;

    document.querySelectorAll(".person-card").forEach(card => {
      const id = card.dataset.personId;
      const p = people[id];
      if (!p){ card.style.display = ""; return; }

      if (matches(p)){
        card.style.display = "";
        card.classList.remove("filtered-out");
        visible++;
      } else {
        card.style.display = "none";
        card.classList.add("filtered-out");
        hidden++;
      }
    });

    // به‌روزرسانی شمارنده
    const counter = $("viewCount");
    if (counter) counter.textContent = toFa(visible) + " / " + toFa(visible + hidden);

    // نمایش نوار فیلترهای فعال
    renderActiveBar();

    // رسم مجدد خطوط
    const app = getApp();
    if (app && app.drawConnectors) requestAnimationFrame(app.drawConnectors);
  }

  function matches(p){
    // وضعیت
    if (activeFilters.status === "alive" && p.hiat !== "z") return false;
    if (activeFilters.status === "deceased" && p.hiat !== "f") return false;

    // جنسیت
    if (activeFilters.gender === "male" && p.gender !== "male") return false;
    if (activeFilters.gender === "female" && p.gender !== "female") return false;

    // محل
    if (activeFilters.place){
      const place = (p.place || "").toLowerCase();
      if (!place.includes(activeFilters.place.toLowerCase())) return false;
    }

    // سال تولد
    if (activeFilters.yearFrom || activeFilters.yearTo){
      const year = parseInt(p.birthYear, 10);
      if (!year) return false;
      if (activeFilters.yearFrom && year < parseInt(activeFilters.yearFrom, 10)) return false;
      if (activeFilters.yearTo && year > parseInt(activeFilters.yearTo, 10)) return false;
    }

    return true;
  }

  function toFa(n){
    return String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  /* ---------- نوار فیلترهای فعال ---------- */
  function renderActiveBar(){
    const bar = $("activeFiltersBar");
    if (!bar) return;

    const labels = [];
    if (activeFilters.status === "alive") labels.push({k:"status", t:"✦ زنده"});
    if (activeFilters.status === "deceased") labels.push({k:"status", t:"† متوفی"});
    if (activeFilters.gender === "male") labels.push({k:"gender", t:"👨 مرد"});
    if (activeFilters.gender === "female") labels.push({k:"gender", t:"👩 زن"});
    if (activeFilters.place) labels.push({k:"place", t:"📍 " + activeFilters.place});
    if (activeFilters.yearFrom) labels.push({k:"yearFrom", t:"از " + activeFilters.yearFrom});
    if (activeFilters.yearTo) labels.push({k:"yearTo", t:"تا " + activeFilters.yearTo});

    if (!labels.length){ bar.hidden = true; return; }

    bar.hidden = false;
    bar.innerHTML =
      '<span class="filter-bar-title">🎯 فیلتر فعال:</span>' +
      labels.map(l =>
        `<button class="filter-chip" data-key="${l.k}">
          ${l.t} <span class="chip-x">×</span>
        </button>`
      ).join("") +
      '<button class="filter-clear" id="clearAllFilters">پاک کردن همه</button>';

    bar.querySelectorAll(".filter-chip").forEach(chip => {
      chip.onclick = () => {
        const key = chip.dataset.key;
        if (key === "status" || key === "gender") activeFilters[key] = "all";
        else activeFilters[key] = "";
        save();
        apply();
        updatePanelInputs();
      };
    });

    const clearAll = $("clearAllFilters");
    if (clearAll) clearAll.onclick = resetFilters;
  }

  function resetFilters(){
    activeFilters = {
      status: "all", gender: "all", place: "",
      yearFrom: "", yearTo: "", generation: ""
    };
    save();
    apply();
    updatePanelInputs();
    toast("فیلترها پاک شدند");
  }

  function updatePanelInputs(){
    const set = (id, val) => { const el = $(id); if (el) el.value = val || ""; };
    set("filterStatus", activeFilters.status);
    set("filterGender", activeFilters.gender);
    set("filterPlace", activeFilters.place);
    set("filterYearFrom", activeFilters.yearFrom);
    set("filterYearTo", activeFilters.yearTo);
  }

  /* ---------- پنل فیلتر ---------- */
  function buildPanel(){
    if ($("filtersPanel")) return;
    const panel = document.createElement("div");
    panel.id = "filtersPanel";
    panel.className = "filters-panel";
    panel.hidden = true;
    panel.innerHTML = `
      <div class="filters-header">
        <h3>🎯 فیلترهای پیشرفته</h3>
        <button class="filters-close" id="filtersClose">×</button>
      </div>
      <div class="filters-body">
        <div class="filter-group">
          <label>وضعیت</label>
          <div class="filter-btns">
            <button data-value="all" class="filter-btn">همه</button>
            <button data-value="alive" class="filter-btn">✦ زنده</button>
            <button data-value="deceased" class="filter-btn">† متوفی</button>
          </div>
          <select id="filterStatus" hidden>
            <option value="all">همه</option>
            <option value="alive">زنده</option>
            <option value="deceased">متوفی</option>
          </select>
        </div>

        <div class="filter-group">
          <label>جنسیت</label>
          <div class="filter-btns">
            <button data-value="all" class="filter-btn">همه</button>
            <button data-value="male" class="filter-btn">👨 مرد</button>
            <button data-value="female" class="filter-btn">👩 زن</button>
          </div>
          <select id="filterGender" hidden>
            <option value="all">همه</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        <div class="filter-group">
          <label>📍 محل زندگی</label>
          <input type="text" id="filterPlace" class="filter-input" placeholder="مثلاً زاهدان">
        </div>

        <div class="filter-group">
          <label>📅 سال تولد</label>
          <div class="filter-row">
            <input type="number" id="filterYearFrom" class="filter-input" placeholder="از">
            <input type="number" id="filterYearTo" class="filter-input" placeholder="تا">
          </div>
        </div>
      </div>
      <div class="filters-footer">
        <button class="filter-btn-reset" id="filtersReset">پاک کردن</button>
        <button class="filter-btn-apply" id="filtersApply">اعمال فیلتر</button>
      </div>
    `;
    document.body.appendChild(panel);

    // رویدادها
    $("filtersClose").onclick = () => { panel.hidden = true; };

    panel.querySelectorAll(".filter-btn").forEach(btn => {
      btn.onclick = () => {
        const parent = btn.closest(".filter-group");
        parent.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const select = parent.querySelector("select");
        if (select) select.value = btn.dataset.value;
      };
    });

    $("filtersApply").onclick = () => {
      activeFilters.status = $("filterStatus").value;
      activeFilters.gender = $("filterGender").value;
      activeFilters.place = $("filterPlace").value.trim();
      activeFilters.yearFrom = $("filterYearFrom").value;
      activeFilters.yearTo = $("filterYearTo").value;
      save();
      apply();
      panel.hidden = true;
      toast("✅ فیلتر اعمال شد");
    };

    $("filtersReset").onclick = () => {
      resetFilters();
      panel.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      panel.querySelector('[data-value="all"]').classList.add("active");
    };

    // مقدار اولیه
    updatePanelInputs();
    panel.querySelectorAll(".filter-btns").forEach(group => {
      const first = group.querySelector(".filter-btn");
      if (first) first.classList.add("active");
    });
  }

  function toast(msg){
    let el = $("filterToast");
    if (!el){
      el = document.createElement("div");
      el.id = "filterToast";
      el.className = "filter-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---------- شروع ---------- */
  function init(){
    load();
    buildPanel();

    const btn = $("filtersBtn");
    if (btn) btn.onclick = () => {
      const panel = $("filtersPanel");
      panel.hidden = !panel.hidden;
    };

    // اعمال خودکار بعد از رندر درخت
    setTimeout(apply, 800);
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.Filters = { apply, reset: resetFilters };

})();