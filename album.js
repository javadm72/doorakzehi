/* =========================================================
   ALBUM — آلبوم مشترک تصاویر
   ========================================================= */
(function(){
  "use strict";

  const $ = id => document.getElementById(id);
  function getApp(){ return window.TreeApp || null; }
  function getPeople(){ const a = getApp(); return a ? a.people : {}; }

  let allPhotos = [];
  let currentIndex = 0;
  let filteredPhotos = [];
  let filterType = "all";   // all | person
  let sortOrder = "recent";

  function toFa(n){ return String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]); }

  function escapeHtml(s){
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  /* ---------- جمع‌آوری همه عکس‌ها ---------- */
  function collectPhotos(){
    const people = getPeople();
    const photos = [];

    Object.keys(people).forEach(id => {
      const p = people[id];
      if (p.photo){
        photos.push({
          url: p.photo,
          personId: id,
          personName: p.name,
          personFamily: p.family,
          gender: p.gender,
          type: "profile"
        });
      }
      if (Array.isArray(p.gallery)){
        p.gallery.forEach(url => {
          if (url) photos.push({
            url: url,
            personId: id,
            personName: p.name,
            personFamily: p.family,
            gender: p.gender,
            type: "gallery"
          });
        });
      }
    });

    return photos;
  }

  /* ---------- ساخت مودال ---------- */
  function buildModal(){
    if ($("albumModal")) return;
    const modal = document.createElement("div");
    modal.id = "albumModal";
    modal.className = "album-modal";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="album-box">
        <div class="album-header">
          <h3>📸 آلبوم خانوادگی</h3>
          <button class="album-close" id="albumClose">×</button>
        </div>
        <div class="album-toolbar">
          <input type="text" id="albumSearch" class="album-search" placeholder="🔍 جستجوی نام...">
          <select id="albumFilter" class="album-select">
            <option value="all">همه تصاویر</option>
            <option value="profile">فقط عکس پروفایل</option>
            <option value="gallery">فقط گالری</option>
          </select>
          <div class="album-count" id="albumCount"></div>
        </div>
        <div class="album-body">
          <div class="album-grid" id="albumGrid"></div>
        </div>
      </div>

      <div class="album-viewer" id="albumViewer" hidden>
        <button class="album-viewer-close" id="albumViewerClose">×</button>
        <button class="album-viewer-nav prev" id="albumPrev">‹</button>
        <img id="albumViewerImg" src="" alt="">
        <button class="album-viewer-nav next" id="albumNext">›</button>
        <div class="album-viewer-info" id="albumViewerInfo"></div>
      </div>
    `;
    document.body.appendChild(modal);

    $("albumClose").onclick = close;
    modal.addEventListener("click", e => { if (e.target.id === "albumModal") close(); });

    $("albumSearch").oninput = applyFilter;
    $("albumFilter").onchange = applyFilter;

    $("albumViewerClose").onclick = closeViewer;
    $("albumPrev").onclick = () => navigate(-1);
    $("albumNext").onclick = () => navigate(1);

    // navigation با کلید
    document.addEventListener("keydown", e => {
      const v = $("albumViewer");
      if (!v || v.hidden) return;
      if (e.key === "ArrowLeft") navigate(1);
      if (e.key === "ArrowRight") navigate(-1);
      if (e.key === "Escape") closeViewer();
    });
  }

  function applyFilter(){
    const q = ($("albumSearch").value || "").trim().toLowerCase();
    const type = $("albumFilter").value;

    filteredPhotos = allPhotos.filter(p => {
      if (type === "profile" && p.type !== "profile") return false;
      if (type === "gallery" && p.type !== "gallery") return false;
      if (q){
        const text = (p.personName + " " + (p.personFamily || "")).toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    renderGrid();
  }

  function renderGrid(){
    const grid = $("albumGrid");
    const count = $("albumCount");

    count.textContent = toFa(filteredPhotos.length) + " تصویر";

    if (!filteredPhotos.length){
      grid.innerHTML = '<div class="album-empty">هیچ تصویری پیدا نشد</div>';
      return;
    }

    grid.innerHTML = filteredPhotos.map((p, i) => `
      <div class="album-item" data-index="${i}">
        <img src="${escapeHtml(p.url)}" alt="" loading="lazy"
             onerror="this.parentElement.style.display='none'">
        <div class="album-item-overlay">
          <div class="album-item-name">${escapeHtml(p.personName)}</div>
          <div class="album-item-type">
            ${p.type === "profile" ? "📷 پروفایل" : "🖼 گالری"}
          </div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll(".album-item").forEach(item => {
      item.onclick = () => openViewer(parseInt(item.dataset.index, 10));
    });
  }

  /* ---------- Viewer ---------- */
  function openViewer(index){
    currentIndex = index;
    updateViewer();
    $("albumViewer").hidden = false;
  }
  function closeViewer(){
    $("albumViewer").hidden = true;
    $("albumViewerImg").src = "";
  }
  function navigate(dir){
    currentIndex = (currentIndex + dir + filteredPhotos.length) % filteredPhotos.length;
    updateViewer();
  }
  function updateViewer(){
    const p = filteredPhotos[currentIndex];
    if (!p) return;
    $("albumViewerImg").src = p.url;
    $("albumViewerInfo").innerHTML =
      `<b>${escapeHtml(p.personName)}</b> — ${escapeHtml(p.personFamily || "")}` +
      `<br><span style="opacity:.7">${currentIndex + 1} از ${toFa(filteredPhotos.length)}</span>`;
  }

  function open(){
    buildModal();
    allPhotos = collectPhotos();
    $("albumSearch").value = "";
    $("albumFilter").value = "all";
    applyFilter();
    $("albumModal").hidden = false;
  }
  function close(){
    const m = $("albumModal");
    if (m) m.hidden = true;
    closeViewer();
  }

  function init(){
    const btn = $("albumBtn");
    if (btn) btn.onclick = open;
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.Album = { open, close };

})();