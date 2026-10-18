const people = {};
const marriages = [];
const keyPaths = {};   // key → [personId, ...]
const personKey = {};  // personId → key
let _uid = 0;

const _newId = p => p + (++_uid);

function _normalize(o){
  const female = o.gender === "f" || o.gender === "female";
  const deceased = !!o.deceased || !!o.deathYear;
  const aliveFromHiatZ = o.hiatZ === true;
  return {
    name: o.name || "نامعلوم",
    family: o.family || "درک زهی",
    gender: female ? "female" : "male",
    note: o.note || "بدون شرح",
    hiat: (deceased && !aliveFromHiatZ) ? "f" : "z",
    birthYear: o.birthYear || "",
    deathYear: o.deathYear || "",
    photo: o.photo || "",
    place: o.place || "نامعلوم",
    
    gallery: Array.isArray(o.gallery) ? o.gallery : [],
  };
}

function _addNode(node){
  const mainId = _newId("p");
  people[mainId] = { ..._normalize(node), familyRole:"lineage" };
  if (node.key){
    personKey[mainId] = node.key;
    people[mainId]._key=node.key;
    (keyPaths[node.key] = keyPaths[node.key] || []).push(mainId);
  }
  let spouseId = null;
  if (node.spouse){
    spouseId = _newId("s");
    people[spouseId] = { ..._normalize(node.spouse), familyRole:"spouse" };
    if (node.spouse.key){
      personKey[spouseId] = node.spouse.key;
      people[spouseId]._key=node.spouse.key;
      (keyPaths[node.spouse.key] = keyPaths[node.spouse.key] || []).push(spouseId);
    }
  }
  const childIds = (node.children || []).map(_addNode);
  if (spouseId || childIds.length){
    marriages.push({
      id: _newId("m"),
      spouses: spouseId ? [mainId, spouseId] : [mainId],
      children: childIds,
    });
  }
  return mainId;
}

let rootPersonIds;

if (typeof familyData !== "undefined" && familyData && familyData.people){
  // حالت پنل مدیریت: داده‌های مسطح
  Object.assign(people, familyData.people);
  familyData.marriages.forEach(m => marriages.push(m));
  rootPersonIds = familyData.rootPersonIds || [];
  // بازسازی keyPaths از روی داده‌ها
  Object.keys(people).forEach(id => {
    const p = people[id];
    if (p._key){
      personKey[id] = p._key;
      (keyPaths[p._key] = keyPaths[p._key] || []).push(id);
    }
  });
} else {
  // حالت اولیه: درخت تودرتو
  rootPersonIds = [_addNode(familyTree)];
}



/* =========================================================
   اسکریپت اصلی
   ========================================================= */
/* ---------- Lightbox عکس پروفایل ---------- */








(function(){
  "use strict";
  let scale = 1, personCardEls = {}, expanded = new Set();
  const $ = id => document.getElementById(id);

  const getPerson = id => people[id] || {
    name:"نامشخص",family:"براهویی",hiat:"z",gender:"male",
    birthYear:"",deathYear:"",photo:"",place:"",note:"",
    familyRole:"spouse",gallery:[]
  };
  const unionsOf  = id => marriages.filter(m => m.spouses?.includes(id));
  const parentsOf = id => {
    const out = [];
    marriages.forEach(m => {
      if (m.children?.includes(id)) m.spouses.forEach(p => { if(!out.includes(p)) out.push(p); });
    });
    return out;
  };
  const childrenOf = id => {
    const out = [];
    marriages.forEach(m => {
      if (m.spouses?.includes(id)) m.children?.forEach(c => { if(!out.includes(c)) out.push(c); });
    });
    return out;
  };
  const otherSpouse = (m,id) => (m.spouses||[]).find(x => x !== id) || null;
  const years = p => (p.birthYear || p.deathYear) ? `${p.birthYear||"?"}  —  ${p.deathYear||""}` : "";

  // پیدا کردن شاخه‌ی دیگر برای پرش
  /* ---------- پیدا کردن همه‌ی مکان‌های یک شخص ---------- */
function allLocationsOf(id){
  const key = personKey[id];
  if (!key) return [];
  return keyPaths[key] || [];
}

/* ---------- ساخت برچسب توصیفی برای یک شاخه ---------- */
function describeBranch(locId){
  const lines = [];

  // ─── ۱) والدین (نسل قبل) ───
  const parents = parentsOf(locId);
  const father  = parents.find(pid => getPerson(pid).gender === "male");
  const mother  = parents.find(pid => getPerson(pid).gender === "female");

  const parentParts = [];
  if (father) parentParts.push("پدر: " + getPerson(father).name);
  if (mother) parentParts.push("مادر: " + getPerson(mother).name);

  if (parentParts.length){
    lines.push("👤 " + parentParts.join("  •  "));
  } else {
    lines.push("👤 شاخه‌ی همسر (بدون والد ثبت‌شده)");
    return lines.join("\n");
  }

  // ─── ۲) تشخیص این‌که کدوم والد عضو خطِ اصلی (lineage) است ───
  const fatherRole = father ? getPerson(father).familyRole : null;
  const motherRole = mother ? getPerson(mother).familyRole : null;

  let lineageParent = null;  // والدی که lineage است
  let sideLabel     = "";    // برچسب سمت (پدری / مادری)

  if (fatherRole === "lineage"){
    lineageParent = father;
    sideLabel     = "پدری";
  } else if (motherRole === "lineage"){
    lineageParent = mother;
    sideLabel     = "مادری";
  } else if (father){
    // اگر هیچ‌کدوم lineage نبود، پیش‌فرض پدر رو در نظر بگیر
    lineageParent = father;
    sideLabel     = "پدری";
  }

  // ─── ۳) پدربزرگ و مادربزرگ از سمت والدِ lineage ───
  if (lineageParent){
    const gpParents = parentsOf(lineageParent);
    const gpList = [];
    gpParents.forEach(gid => {
      const g = getPerson(gid);
      const label = (g.gender === "male" ? "پدربزرگ " : "مادربزرگ ") + sideLabel;
      gpList.push(label + ": " + g.name);
    });
    if (gpList.length){
      const icon = sideLabel === "پدری" ? "👴" : "👵";
      lines.push(icon + " " + gpList.join("  •  "));
    }
  }

  return lines.join("\n");
}

  function placeholderIcon(){
    const d = document.createElement("div");
    d.innerHTML = '<svg viewBox="0 0 80 80"><circle cx="40" cy="29" r="15" fill="currentColor"/><path d="M14 70c2-18 13-27 26-27s24 9 26 27" fill="currentColor"/></svg>';
    return d.firstChild;
  }
  function avatar(p, profile=false){
  const d = document.createElement("div");
  d.className = profile ? "profile-avatar" : "avatar";
  if (p.photo){
    const img = document.createElement("img");
    img.src = p.photo; img.alt = p.name;
    img.onerror = () => { d.innerHTML = ""; d.appendChild(placeholderIcon()); };
    d.appendChild(img);
    // فقط روی آواتار پروفایل داخل drawer کلیک‌پذیر شود
    if (profile){
      d.addEventListener("click", e => {
        e.stopPropagation();
        openPhotoLightbox(p.photo);
      });
    }
  } else d.appendChild(placeholderIcon());
    return d;
  }

  /* ---------- ساخت کارت ---------- */
  function buildCard(id, opts = {}){
    const p = getPerson(id);
    const card = document.createElement("div");
    card.className = `person-card ${p.gender === "female" ? "female" : "male"}${opts.selected ? " selected" : ""}`;
    card.dataset.personId = id;

    if (p.hiat === "z"){
      const live = document.createElement("span");
      live.className = "alive";
      card.appendChild(live);
    }

    if (unionsOf(id).length > 1){
      const cm = document.createElement("span");
      cm.className = "couple-mark";
      cm.innerHTML = "<i></i><i></i>";
      card.appendChild(cm);
    }
// دکمه‌ی انتخاب شاخه (اگر شخص در بیش از یک شاخه باشد)
const locs = allLocationsOf(id);
if (locs.length > 1){
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "goto-branch-btn";
  btn.title = "این شخص در " + locs.length + " شاخه وجود دارد";
  btn.setAttribute("aria-label","انتخاب شاخه");
  btn.textContent = "⇆";
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    openBranchMenu(id, btn);
  });
  card.appendChild(btn);
}

    const role = document.createElement("div");
    role.className = "family-role-label";
    role.textContent = p.familyRole === "spouse" ? "همسر" : "عضو شجره نامه";
    card.appendChild(role);

    if (p.hiat === "f"){
      const hiat = document.createElement("div");
      hiat.className = "family-hiat-label";
      card.appendChild(hiat);
    }

    card.appendChild(avatar(p));

    const n = document.createElement("div");
    n.className = "person-name";
    n.textContent = p.name;
    card.appendChild(n);

    const fam = document.createElement("div");
    fam.className = "person-family-label";
    fam.textContent = p.family;
    card.appendChild(fam);

    if (years(p)){
      const y = document.createElement("div");
      y.className = "person-years";
      y.textContent = years(p);
      card.appendChild(y);
    }

    card.addEventListener("click", () => openPerson(id));
    card.tabIndex = 0;
    personCardEls[id] = card;
    return card;
  }

  /* ---------- رسم زیردرخت ---------- */
  function renderSubtree(id, isRoot=false){
    const sub = document.createElement("div");
    sub.className = "subtree";
    const unions = unionsOf(id);

    if (!unions.length){
      const row = document.createElement("div");
      row.className = "person-row";
      row.appendChild(buildCard(id,{isRoot}));
      sub.appendChild(row);
      return sub;
    }

    const container = document.createElement("div");
    container.className = "unions-container";

    unions.forEach(m => {
      const block = document.createElement("div");
      block.className = "union-block";
      if (isRoot) block.classList.add("root-union");
      block.dataset.marriageId = m.id;

      const inner = document.createElement("div");
      inner.className = "union-block-inner";
      const couple = document.createElement("div");
      couple.className = "couple";

      couple.appendChild(buildCard(id,{isRoot}));

      const line = document.createElement("button");
      line.type = "button";
      line.className = "marriage-link";
      line.setAttribute("aria-label", m.children?.length ? "نمایش یا مخفی کردن فرزندان" : "بدون فرزند ثبت‌شده");

      if (m.children?.length){
          line.classList.add("has-children");
          const isExpanded = expanded.has(m.id);
          line.innerHTML = `<span>${isExpanded ? "−" : "+"}</span>`;
          line.setAttribute("aria-expanded", isExpanded ? "true" : "false");

          line.addEventListener("click", e => {
            e.preventDefault(); e.stopPropagation();
            const panel = block.querySelector(".children-panel");
            const isOpen = block.classList.contains("children-open");
            if (isOpen){
              block.classList.remove("children-open");
              expanded.delete(m.id);
              if (panel) panel.hidden = true;
              line.querySelector("span").textContent = "+";
              line.setAttribute("aria-expanded","false");
            } else {
              block.classList.add("children-open");
              expanded.add(m.id);
              if (panel) panel.hidden = false;
              line.querySelector("span").textContent = "−";
              line.setAttribute("aria-expanded","true");
            }
            requestAnimationFrame(drawConnectors);
          });
      } else {
        line.innerHTML = "<span>♥</span>";
        line.disabled = true;
      }

      couple.appendChild(line);

      const sid = otherSpouse(m,id);
      const slot = document.createElement("div");
      slot.className = "spouse-slot";
      if (sid) slot.appendChild(buildCard(sid));
      couple.appendChild(slot);
      inner.appendChild(couple);

      if (m.children?.length){
        const panel = document.createElement("div");
        panel.className = "children-panel";
        panel.hidden = !expanded.has(m.id);
        const cr = document.createElement("div");
        cr.className = "children-row" + (m.children.length === 1 ? " single" : "");
        m.children.forEach(cid => {
          const stub = document.createElement("div");
          stub.className = "child-stub";
          stub.appendChild(renderSubtree(cid,false));
          cr.appendChild(stub);
        });
        panel.appendChild(cr);
        inner.appendChild(panel);
        if (expanded.has(m.id)) block.classList.add("children-open");
      }

      block.appendChild(inner);
      container.appendChild(block);
    });

    sub.appendChild(container);
    return sub;
  }
  /* ---------- Lightbox عکس پروفایل ---------- */
function openPhotoLightbox(url){
  if (!url) return;
  const lb  = document.getElementById("photoLightbox");
  const img = document.getElementById("photoLightboxImg");
  if (!lb || !img) return;
  img.src = url;
  lb.hidden = false;
  void lb.offsetWidth;
  requestAnimationFrame(() => lb.classList.add("open"));
}

function closePhotoLightbox(){
  const lb  = document.getElementById("photoLightbox");
  const img = document.getElementById("photoLightboxImg");
  if (!lb || lb.hidden) return;
  lb.classList.remove("open");
  setTimeout(() => {
    lb.hidden = true;
    if (img) img.src = "";
  }, 420);
}

// اتصال رویدادها بدون const اضافه — مستقیم داخل if
(function bindLightboxEvents(){
  const lbClose = document.getElementById("photoLightboxClose");
  const lb      = document.getElementById("photoLightbox");
  if (lbClose) lbClose.addEventListener("click", closePhotoLightbox);
  if (lb) lb.addEventListener("click", function(e){
    if (e.target.id === "photoLightbox") closePhotoLightbox();
  });
})();

  function renderTree(){
    const root = $("treeRoot");
    root.innerHTML = "";
    personCardEls = {};
    (rootPersonIds||[]).forEach(id => root.appendChild(renderSubtree(id,true)));
    if (!root.children.length){
      root.innerHTML = '<div style="padding:50px;color:#777">هنوز فردی ثبت نشده است.</div>';
    }
    requestAnimationFrame(drawConnectors);
  }

  const toFa = n => String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
  const escapeHTML = s => String(s??"").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

  /* ==================================================
     رسم خطوط اتصال با SVG
     ================================================== */
  function drawConnectors(){
    const canvas = document.getElementById("treeCanvas");
    const svg    = document.getElementById("connectorLayer");
    if (!canvas || !svg) return;

    const cRect = canvas.getBoundingClientRect();
    const sc    = scale || 1;

    const toLocal = el => {
      const r = el.getBoundingClientRect();
      return {
        cx:     (r.left - cRect.left + r.width / 2) / sc,
        top:    (r.top  - cRect.top) / sc,
        bottom: (r.top  - cRect.top + r.height) / sc
      };
    };

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    svg.setAttribute("width",   w);
    svg.setAttribute("height",  h);
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    let d = "";

    document.querySelectorAll(".union-block.children-open").forEach(block => {
      if (!block.offsetParent) return;
      const inner = block.querySelector(":scope > .union-block-inner");
      if (!inner) return;

      const link  = inner.querySelector(":scope > .couple > .marriage-link");
      const panel = inner.querySelector(":scope > .children-panel");
      if (!link || !panel || !link.offsetParent) return;

      const pr = toLocal(link);
      const px = pr.cx;
      const py = pr.bottom;

      const anchors = [];
      panel.querySelectorAll(":scope > .children-row > .child-stub").forEach(stub => {
        if (!stub.offsetParent) return;
        const card = stub.querySelector(".person-card");
        if (!card) return;
        const cr = toLocal(card);
        anchors.push({x: cr.cx, y: cr.top});
      });

      if (!anchors.length) return;

      const minChildTop = Math.min(...anchors.map(a => a.y));

      let busY = minChildTop - Math.max(16, (minChildTop - py) * 0.35);
      if (busY < py + 10)         busY = py + 10;
      if (busY > minChildTop - 6) busY = minChildTop - 6;

      d += `M ${px} ${py} L ${px} ${busY} `;

      const xs   = anchors.map(a => a.x);
      const minX = Math.min(...xs, px);
      const maxX = Math.max(...xs, px);
      d += `M ${minX} ${busY} L ${maxX} ${busY} `;

      anchors.forEach(a => { d += `M ${a.x} ${busY} L ${a.x} ${a.y} `; });
    });

    svg.innerHTML = d ? `<path d="${d}"/>` : "";
  }

/* ---------- نوار سلسله‌مراتب ---------- */
function showAncestry(personId){
  const ancestry = [];
  let current = personId;
  const visited = new Set();
  while (current){
    if (visited.has(current)) break;
    visited.add(current);
    const p = getPerson(current);
    ancestry.push({ id: current, name: p.name, gender: p.gender });
    const parents = parentsOf(current);
    if (parents.length) current = parents[0];
    else break;
  }
  ancestry.reverse();

  const bar = $("ancestry-bar");
  const key = personKey[personId];
  const isCross = key && keyPaths[key] && keyPaths[key].length > 1;

  // ====== تعیین نشان «از طرف پدر / از طرف مادر» ======
  let badge = "";

  if (isCross){
    // عضوی که در دو شاخه مشترک است (مثل طاهره/ظاهر)
    badge = '<span class="anc-side both">عضو در هر دو شاخه</span>';
  } else {
    const directParents = parentsOf(personId);
    let sideGender = null;

    if (directParents.length > 0){
      // در _addNode: spouses = [mainId, spouseId]
      // پس parents[0] همان عضو خطِ اصلی (lineage) است
      sideGender = getPerson(directParents[0]).gender;
    } else {
      // فردی که والدی در درخت ندارد (همسرِ واردشده)
      // از جنسیت همسرش استفاده می‌کنیم تا نشان بی‌معنا نشود
      const u = unionsOf(personId)[0];
      if (u){
        const sp = otherSpouse(u, personId);
        if (sp) sideGender = getPerson(sp).gender;
      }
    }

    if (sideGender === "female"){
      badge = '<span class="anc-side">از طرف مادر</span>';
    } else if (sideGender === "male"){
      badge = '<span class="anc-side">از طرف پدر</span>';
    }
  }

  const parts = ancestry.map(it =>
    it.id === personId
      ? `<strong>${escapeHTML(it.name)}</strong>`
      : escapeHTML(it.name)
  );

  bar.style.display = "block";
  bar.style.minHeight = "50px";
  bar.innerHTML = badge + " سلسله‌مراتب: " + parts.join(' <span class="sep">›</span> ');
}

  /* ---------- هایلایت ---------- */
  function highlightAncestors(personId){
    document.querySelectorAll(".person-card.highlight").forEach(el => el.classList.remove("highlight"));
    

    
    
    
    const chain = [];
    let current = personId;
    const visited = new Set();
    while (current){
      if (visited.has(current)) break;
      visited.add(current);
      chain.push(current);
      const parents = parentsOf(current);
      if (parents.length) current = parents[0];
      else break;
    }
    chain.forEach(id => {
      const c = personCardEls[id];
      if (c) c.classList.add("highlight");
    });
    return chain;

  }

  /* ---------- پنل شخص ---------- */
  function openPerson(id){
    const p = getPerson(id);
    const body = $("drawerBody");
    body.innerHTML = "";

    highlightAncestors(id);
    showAncestry(id);

    const head = document.createElement("div");
    head.className = "profile-head";
    head.appendChild(avatar(p,true));

    const info = document.createElement("div");
    const parentNames = parentsOf(id).map(x => getPerson(x).name).join(" و ");
    info.innerHTML = `
      <div class="profile-name">${escapeHTML(p.name)}</div>
      <div class="profile-relation">${parentsOf(id).length ? "فرزندِ " + escapeHTML(parentNames) : "پرونده خانوادگی"}</div> 
      
      <div class="profile-status ${(p.deathYear || p.hiat === "f") ? "deceased" : "alive"}">
        ${(p.deathYear || p.hiat === "f") ? "† متوفی" : "✦ زنده"}
      </div>


      <div class="research">› درباره این شخص ?</div><div>${escapeHTML(p.note || "--")}</div>`;
    head.appendChild(info);
    body.appendChild(head);
    /*
    <div class="profile-status ${(p.deathYear" || p.hiat === "f")? "† متوفی" : "✦ زنده"}>
    ${(p.deathYear" || p.hiat === "f")? "† متوفی" : "✦ زنده"}
    </div>
*/

    /* خانواده */
        
    const fam = document.createElement("section");
    
    fam.className = "profile-section";
    fam.innerHTML = '<div class="section-title"><span>اعضای خانواده　⌃</span></div>';
    
    
    const related = [
      ...unionsOf(id).map(m => otherSpouse(m,id)).filter(Boolean).map(x => [x,"عضو خانواده"]),
      ...childrenOf(id).map(x => [x, getPerson(x).gender === "female" ? "دختر" : "پسر"]),
      ...parentsOf(id).map(x => [x, getPerson(x).gender === "female" ? "عضو خانواده" : "عضو خانواده"]),
    ];
    const seen = new Set();
    related.forEach(([rid,role]) => {
      if (!rid || seen.has(rid)) return;
      seen.add(rid);
      const rp = getPerson(rid);
      const item = document.createElement("div");
      item.className = "family-item";

      const av = document.createElement("div");
      av.className = "mini-avatar";
      if (rp.photo) av.innerHTML = `<img src="${escapeHTML(rp.photo)}" alt="">`;
      else av.appendChild(placeholderIcon());
      item.appendChild(av);




      const t = document.createElement("div");
      t.className = "family-text";
      t.innerHTML = `
        <div class="family-name">${escapeHTML(rp.name)}</div>
        <div class="family-role">${role}</div>
        <div class="family-hiat">${rp.gender}</div>`;
      item.appendChild(t);

      const ar = document.createElement("span");
      ar.className = "family-arrow";
      ar.textContent = "›";
      item.appendChild(ar);

      item.onclick = () => handleNavigate(rid);
      fam.appendChild(item);
    });
    body.appendChild(fam);

    /* حقایق */
    const facts = document.createElement("section");
    facts.className = "profile-section";
    facts.innerHTML = '<div class="section-title"><span>حقایق　⌃</span></div>';
    const grid = document.createElement("div");
    grid.className = "facts";
    grid.innerHTML = `
      <div class="label">تولد</div><div>${escapeHTML(p.birthYear || "--")}</div>
      <div class="label">وفات</div><div>${escapeHTML(p.deathYear || "--")}</div>
      <div class="label">محل زندگی</div><div>${escapeHTML(p.place || "--")}</div>`;
    facts.appendChild(grid);
    if (p.note){
      const n = document.createElement("div");
      n.className = "note";
      n.textContent = p.note;
      facts.appendChild(n);
    }
    body.appendChild(facts);

    /* گالری */
    if (p.gallery && p.gallery.length){
      const gal = document.createElement("section");
      gal.className = "profile-section";
      gal.innerHTML = '<div class="section-title"><span>گالری تصاویر　⌃</span></div>';
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-open-btn";
      btn.textContent = `مشاهده ${toFa(p.gallery.length)} تصویر`;
      btn.onclick = () => openGallery(p.gallery, p.name);
      gal.appendChild(btn);
      body.appendChild(gal);
    }

    $("personDrawer").classList.add("open");
    $("drawerBackdrop").hidden = false;
    setTimeout(() => $("drawerClose").focus(), 50);
  }





  function closePerson(){
    $("personDrawer").classList.remove("open");
    $("drawerBackdrop").hidden = true;
  }

  /* ---------- منوی انتخاب شاخه ---------- */
function openBranchMenu(personId, btnEl){
  // حذف منوی قبلی اگر باز است
  const existing = document.getElementById("branchMenu");
  if (existing) existing.remove();

  const locs = allLocationsOf(personId);
  const me = getPerson(personId);

  const menu = document.createElement("div");
  menu.id = "branchMenu";
  menu.className = "branch-menu";

  // هدر
  const header = document.createElement("div");
  header.className = "branch-menu-header";
  header.textContent = "«" + me.name + "» در " + locs.length + " شاخه وجود دارد";
  menu.appendChild(header);

  // لیست شاخه‌ها
  const list = document.createElement("div");
  list.className = "branch-menu-list";

  locs.forEach((locId, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "branch-menu-item";
    if (locId === personId) item.classList.add("current");

    const title = document.createElement("div");
    title.className = "branch-item-title";
    title.textContent = (locId === personId)
      ? "📍 مکان فعلی (همین شاخه)"
      : "شاخه " + idx + 1;

    const label = document.createElement("div");
    label.className = "branch-item-label";
    label.textContent = describeBranch(locId);

    item.appendChild(title);
    item.appendChild(label);

    item.addEventListener("click", () => {
      menu.remove();
      if (locId !== personId){
        handleNavigate(locId);
      }
    });

    list.appendChild(item);
  });

  menu.appendChild(list);
  document.body.appendChild(menu);

  // ─── موقعیت‌دهی ───
  const rect = btnEl.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - menu.offsetWidth / 2;
  let top  = rect.bottom + 8;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (left < 8) left = 8;
  if (left + menu.offsetWidth > vw - 8){
    left = vw - menu.offsetWidth - 8;
  }
  if (top + menu.offsetHeight > vh - 8){
    top = rect.top - menu.offsetHeight - 8;
    if (top < 8) top = 8;
  }

  menu.style.left = left + "px";
  menu.style.top  = top  + "px";

  // ─── بستن با کلیک بیرون یا اسکرول ───
  setTimeout(() => {
    const closeHandler = (ev) => {
      if (!menu.contains(ev.target) && ev.target !== btnEl){
        menu.remove();
        document.removeEventListener("click", closeHandler);
        document.removeEventListener("scroll", closeHandler, true);
        window.removeEventListener("resize", closeHandler);
      }
    };
    document.addEventListener("click", closeHandler);
    document.addEventListener("scroll", closeHandler, true);
    window.addEventListener("resize", closeHandler);
  }, 10);
}





  /* ---------- گالری ---------- */
  function openGallery(urls, name){
    const modal = $("galleryModal");
    const grid = $("galleryGrid");
    $("galleryTitle").textContent = `گالری ${name}`;
    grid.innerHTML = "";
    urls.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = name;
      img.loading = "lazy";
      img.onclick = () => openGalleryViewer(url);
      grid.appendChild(img);
    });
    modal.hidden = false;
  }
  function closeGallery(){ $("galleryModal").hidden = true; }
  function openGalleryViewer(url){
    $("galleryViewerImg").src = url;
    $("galleryViewer").hidden = false;
  }
  function closeGalleryViewer(){
    $("galleryViewer").hidden = true;
    $("galleryViewerImg").src = "";
  }
  $("galleryClose").onclick = closeGallery;
  $("galleryModal").addEventListener("click", e => { if (e.target.id === "galleryModal") closeGallery(); });
  $("galleryViewerClose").onclick = closeGalleryViewer;
  $("galleryViewer").addEventListener("click", e => { if (e.target.id === "galleryViewer") closeGalleryViewer(); });

  /* ---------- ناوبری ---------- */
  function revealPath(id){
    const queue = [id];
    const visited = new Set();
    while (queue.length){
      const cur = queue.shift();
      if (visited.has(cur)) continue;
      visited.add(cur);
      marriages.forEach(m => {
        const isChild  = m.children?.includes(cur);
        const isSpouse = m.spouses?.includes(cur);
        if (isChild || isSpouse){
          expanded.add(m.id);
          m.spouses.forEach(s => { if (!visited.has(s)) queue.push(s); });
        }
      });
    }
    renderTree();
  }

  function scrollToPerson(id, tries = 0){
  const card = document.querySelector(`.person-card[data-person-id="${id}"]`);
  const vp = $("treeViewport");
  if (!card || !vp){
    if (tries < 15) setTimeout(() => scrollToPerson(id, tries + 1), 80);
    return;
  }

  const vpRect   = vp.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  // اگر کارت در شاخه‌ی بسته است، هنوز ابعاد ندارد → صبر کن
  if (cardRect.width === 0 || cardRect.height === 0){
    if (tries < 15) setTimeout(() => scrollToPerson(id, tries + 1), 80);
    return;
  }

  // عرض قابل‌مشاهده (کم کردن عرض drawer اگر باز است)
  const drawer = $("personDrawer");
  const drawerOpen = drawer && drawer.classList.contains("open");
  const drawerW = (drawerOpen && window.innerWidth > 700)
    ? Math.min(430, window.innerWidth) : 0;
  const visibleW = vp.clientWidth - drawerW;

  // موقعیت مرکز کارت روی صفحه (بعد از همه transformها)
  const cardCenterX = cardRect.left + cardRect.width  / 2;
  const cardCenterY = cardRect.top  + cardRect.height / 2;

  // موقعیت هدف: مرکز ناحیه قابل‌مشاهده
  const targetX = vpRect.left + visibleW / 2;
  const targetY = vpRect.top  + vp.clientHeight / 2;

  // میزان جابه‌جایی مورد نیاز
  const deltaX = targetX - cardCenterX;
  const deltaY = targetY - cardCenterY;

  // scrollBy خودش clamp می‌کنه (نه منفی، نه بیشتر از max)
  vp.scrollBy({ left: -deltaX, top: -deltaY, behavior: "smooth" });

  card.classList.add("selected");
  setTimeout(() => card.classList.remove("selected"), 2200);
}

  function handleNavigate(id){
    revealPath(id);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scrollToPerson(id);
      openPerson(id);
    }));
  }

  /* ---------- سرچ ---------- */
  function runSearch(q){
  q = q.trim().toLowerCase();
  const box = $("searchResults");
  box.innerHTML = "";
  if (!q){ box.hidden = true; return; }

  const matches = Object.keys(people).filter(id => {
    const p = getPerson(id);
    const par = parentsOf(id).map(x => getPerson(x).name).join(" ");
    return [p.name, p.family, par].join(" ").toLowerCase().includes(q);
  }).slice(0, 15);

  if (!matches.length){
    box.innerHTML = '<div class="empty">فردی با این مشخصات پیدا نشد.</div>';
    box.hidden = false;
    return;
  }

  matches.forEach(id => {
    const p = getPerson(id);
    const b = document.createElement("button");
    const locs = allLocationsOf(id);

    if (locs.length > 1){
      // ⭐ شخص چندشاخه‌ای → نام + شماره‌ی شاخه + جزئیات والدین و اجداد
      const idx = locs.indexOf(id) + 1;
      const branchInfo = describeBranch(id).replace(/\n/g, "  •  ");
      b.classList.add("multi-branch");

      b.innerHTML = `
        <span class="result-name">
          ${escapeHTML(p.name)}
          <span class="branch-badge">شاخه ${toFa(idx)} از ${toFa(locs.length)}</span>
        </span>
        <span class="relation">${escapeHTML(branchInfo)}</span>`;
    } else {
      // حالت عادی → والدین
      const parText = parentsOf(id).length
        ? "والدین: " + parentsOf(id).map(x => getPerson(x).name).join(" و ")
        : "بدون والدین ثبت‌شده";
      b.innerHTML = `<span>${escapeHTML(p.name)}</span>
                     <span class="relation">${escapeHTML(parText)}</span>`;
    }

    b.onclick = () => {
      box.hidden = true;
      $("searchInput").value = p.name;
      handleNavigate(id);
      scrollToPerson(id);
    };
    box.appendChild(b);
  });
  box.hidden = false;
}

  /* ---------- Zoom ---------- */
  function applyZoom(){
    $("treeCanvas").style.transform = `scale(${scale})`;
    $("zoomLabel").textContent = `${Math.round(scale * 100)}%`;
  }
  $("zoomInBtn").onclick = () => {
    scale = Math.min(1.7, +(scale + .1).toFixed(2));
    applyZoom(); drawConnectors();
  };
  $("zoomOutBtn").onclick = () => {
    scale = Math.max(.55, +(scale - .1).toFixed(2));
    applyZoom(); drawConnectors();
  };
  $("resetViewBtn").onclick = () => {
    scale = 1; applyZoom();
    $("treeViewport").scrollTo({
      left: ($("treeViewport").scrollWidth - $("treeViewport").clientWidth) / 2,
      top: 0, behavior: "smooth"
    });
    drawConnectors();
  };

  /* ---------- رویدادها ---------- */
  $("searchInput").oninput = e => runSearch(e.target.value);
  $("drawerClose").onclick = closePerson;
  $("drawerBackdrop").onclick = closePerson;
  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){
      const lb = $("photoLightbox");
      if (lb && !lb.hidden){ closePhotoLightbox(); return; }
      const gv = $("galleryViewer");
      if (gv && !gv.hidden){ closeGalleryViewer(); return; }
      const gm = $("galleryModal");
      if (gm && !gm.hidden){ closeGallery(); return; }
      closePerson();
    }
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) $("searchResults").hidden = true;
  });

  /* Pan */
  let drag = false, sx = 0, sy = 0, sl = 0, st = 0;
  const vp = $("treeViewport");
  vp.addEventListener("pointerdown", e => {
    if (!e.isPrimary || e.target.closest("button,input,.person-card,.person-drawer,.goto-branch-btn")) return;
    drag = true; vp.classList.add("grabbing");
    vp.setPointerCapture?.(e.pointerId);
    sx = e.clientX; sy = e.clientY; sl = vp.scrollLeft; st = vp.scrollTop;
  });
  vp.addEventListener("pointermove", e => {
    if (!drag || !e.isPrimary) return;
    e.preventDefault();
    vp.scrollLeft = sl - (e.clientX - sx);
    vp.scrollTop  = st - (e.clientY - sy);
  });
  const stopDrag = e => {
    if (!drag) return;
    drag = false; vp.classList.remove("grabbing");
    if (e?.pointerId != null) vp.releasePointerCapture?.(e.pointerId);
  };
  vp.addEventListener("pointerup", stopDrag);
  vp.addEventListener("pointercancel", stopDrag);
  vp.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") stopDrag(e); });

  /* PWA */
  let deferredInstallPrompt = null;
  const installBtn = $("installBtn");
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.onclick = async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch(_){}
    deferredInstallPrompt = null; installBtn.hidden = true;
  };
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null; installBtn.hidden = true;
  });

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")){
    window.addEventListener("load", () => navigator.serviceWorker.register("./JS/sw.js", {scope:"./"}).catch(()=>{}));
  }

  /* ---------- شروع ---------- */
  renderTree();
  applyZoom();
  showAncestry(rootPersonIds[0]);

  window.addEventListener("resize", () => requestAnimationFrame(drawConnectors));
  if (document.fonts && document.fonts.ready){
    document.fonts.ready.then(() => drawConnectors());
  }

/* ⭐ در دسترس قرار دادن برای پنل مدیریت */
window.TreeApp = {
  
  people, marriages, rootPersonIds,
  personKey,keyPaths,
  getPerson, parentsOf, childrenOf, unionsOf, otherSpouse,
  renderTree, applyZoom, drawConnectors, handleNavigate, scrollToPerson,
  allLocationsOf
};



  window.addEventListener("load", () => {
    vp.scrollLeft = Math.max(0, (vp.scrollWidth - vp.clientWidth) / 2);
    requestAnimationFrame(drawConnectors);
  });
})();
/* ============ Theme Manager ============ */
(function(){
  const KEY = "shajareh-theme-v2";
  const THEMES = {
    classic:{
      label:"کلاسیک", 
      swatch:"linear-gradient(135deg,#5c3d17,#f88d00)", 
      ring:"#f88d00",
      vars:{"--back":"linear-gradient(180deg,#5c3d17,#4a3010)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#f6ecd2 0%,transparent 45%),radial-gradient(circle at 80% 80%,#fddd8a 0%,transparent 45%),repeating-linear-gradient(45deg,#ecdcb0 0 2px,#e9d7a9 2px 4px),#e9d7a9",
        "--ink":"#3c2a14",
        "--text":"#333",
        "--male":"#39a9bd",
        "--female":"#e4939a",
        "--buttonColor":"#f88d00",
        "--buttonHoverColor":"#d97000",
        "--jadSpace":"#f88d00",
        "--tree-line":"#030303",
        "--cardBack":"#fff","--topTab":"#fff","--topTabBorderC":"#5a4510",
        "--searchBack":"#b8912f","--selectBack":"#ffd699","--selectBorder":"#ffd000",
        "--familyHole":"#f0d98e",
        "--familyHoleColor":"#5a3a13",
        "--otherButtonColor":"#f1edac",
        "--otherButtonHoverColor":"#b6a288",
        "--otherColor":"#302622",
      }},
    forest:{label:"جنگل", swatch:"linear-gradient(135deg,#1e4d2b,#7cc576)", ring:"#2e8b57",
      vars:{"--back":"linear-gradient(180deg,#1e4d2b,#0d3b1e)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#eafbe4 0%,transparent 45%),radial-gradient(circle at 80% 80%,#c8efb8 0%,transparent 45%),#cde9bf",
        "--ink":"#0e2c1a","--text":"#1e3a2a","--male":"#2e8b57","--female":"#f8b6c4",
        "--buttonColor":"#2e8b57",
        "--buttonHoverColor":"#1f6b3f",
        "--jadSpace":"#2e8b57","--tree-line":"#0d3b1e",
        "--cardBack":"#f4fff2","--topTab":"#f7fff5","--topTabBorderC":"#2e8b57",
        "--searchBack":"#7cc576","--selectBack":"#c8efb8","--selectBorder":"#7cc576",
        "--familyHole":"#d6f0c9",
        "--familyHoleColor":"#1e4d2b",
        "--otherButtonColor":"#e7ffb9",
        "--otherButtonHoverColor":"#83a57d",
        "--otherColor":"#072005",
      }},
    ocean:{label:"اقیانوس", swatch:"linear-gradient(135deg,#0b2545,#4a90d9)", ring:"#1e88e5",
      vars:{"--back":"linear-gradient(180deg,#0b2545,#061a33)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#dceefc 0%,transparent 45%),radial-gradient(circle at 80% 80%,#b7d9f7 0%,transparent 45%),#bdd9f2",
        "--ink":"#0b2545","--text":"#1b3a5c","--male":"#1e88e5","--female":"#ff80ab",
        "--buttonColor":"#1e88e5",
        "--buttonHoverColor":"#1360ad",
        "--jadSpace":"#1e88e5","--tree-line":"#0b2545",
        "--cardBack":"#fff","--topTab":"#f5fbff","--topTabBorderC":"#1e88e5",
        "--searchBack":"#4a90d9","--selectBack":"#c9e2f9","--selectBorder":"#4a90d9",
        "--familyHole":"#c9e2f9",
        "--familyHoleColor":"#0b2545",
        "--otherButtonColor":"#b8edfa",
        "--otherButtonHoverColor":"#8fb3c2",
        "--otherColor":"#00232c",
      }},
    sunset:{label:"غروب", swatch:"linear-gradient(135deg,#7b1e1e,#ff8c42)", ring:"#ff6b35",
      vars:{"--back":"linear-gradient(180deg,#7b1e1e,#3d0d0d)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#ffe8cc 0%,transparent 45%),radial-gradient(circle at 80% 80%,#ffcba4 0%,transparent 45%),#ffd0a8",
        "--ink":"#4a1a0a","--text":"#4a2410","--male":"#d35400","--female":"#e84393",
        "--buttonColor":"#ff6b35",
        "--buttonHoverColor":"#d94d1c",
        "--jadSpace":"#ff6b35","--tree-line":"#4a1a0a",
        "--cardBack":"#fff8f0","--topTab":"#fff5eb","--topTabBorderC":"#d35400",
        "--searchBack":"#ff8c42","--selectBack":"#ffd9b8","--selectBorder":"#ff8c42",
        "--familyHole":"#ffd9b8",
        "--familyHoleColor":"#4a1a0a",
        "--otherButtonColor":"#fcc8b5",
        "--otherButtonHoverColor":"#bd9b8f",
        "--otherColor":"#240a01",
      }},
    night:{label:"شب", swatch:"linear-gradient(135deg,#0a0e27,#7c9cff)", ring:"#7c9cff",
      vars:{"--back":"linear-gradient(180deg,#0a0e27,#1a1a2e)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#2a2a3e 0%,transparent 45%),radial-gradient(circle at 80% 80%,#232337 0%,transparent 45%),#1a1a2e",
        "--ink":"#d8deff","--text":"#c8cee0","--male":"#4dc0dd","--female":"#e97ba8",
        "--buttonColor":"#7c9cff",
        "--buttonHoverColor":"#5674e0",
        "--jadSpace":"#7c9cff","--tree-line":"#6a7ab8",
        "--cardBack":"#232337","--topTab":"#0f1328","--topTabBorderC":"#7c9cff",
        "--searchBack":"#2a2a4a","--selectBack":"#3a3a5a","--selectBorder":"#7c9cff",
        "--familyHole":"#3a3a5a",
        "--familyHoleColor":"#d8deff",
        "--otherButtonColor":"#827eaf",
        "--otherButtonHoverColor":"#92a6b3",
        "--otherColor":"#302e41",
      }},
    rose:{label:"رز", swatch:"linear-gradient(135deg,#831843,#f472b6)", ring:"#ec4899",
      vars:{"--back":"linear-gradient(180deg,#831843,#5c0f2e)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#ffe0ec 0%,transparent 45%),radial-gradient(circle at 80% 80%,#ffc9dd 0%,transparent 45%),#ffcbdd",
        "--ink":"#5c0f2e","--text":"#5c0f2e","--male":"#8e44ad","--female":"#e91e63",
        "--buttonColor":"#ec4899",
        "--buttonHoverColor":"#c42d75",
        "--jadSpace":"#ec4899","--tree-line":"#5c0f2e",
        "--cardBack":"#fff5f9","--topTab":"#fce7f3","--topTabBorderC":"#ec4899",
        "--searchBack":"#ec4899","--selectBack":"#fbcfe8","--selectBorder":"#ec4899",
        "--familyHole":"#ffd6e5",
        "--familyHoleColor":"#5c0f2e",
        "--otherButtonColor":"#ffe2f0",
        "--otherButtonHoverColor":"#c09fb0",
        "--otherColor":"#44323b",
      }},
    purple:{label:"بنفش", swatch:"linear-gradient(135deg,#2e1065,#a855f7)", ring:"#a855f7",
      vars:{"--back":"linear-gradient(180deg,#2e1065,#1a0a3d)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#ede4ff 0%,transparent 45%),radial-gradient(circle at 80% 80%,#d8c8ff 0%,transparent 45%),#d8c8ff",
        "--ink":"#2e1065","--text":"#2e1065","--male":"#6366f1","--female":"#d946ef",
        "--buttonColor":"#a855f7",
        "--buttonHoverColor":"#7c3aed",
        "--jadSpace":"#a855f7","--tree-line":"#2e1065",
        "--cardBack":"#f9f5ff","--topTab":"#f3e8ff","--topTabBorderC":"#a855f7",
        "--searchBack":"#8b5cf6","--selectBack":"#e9d5ff","--selectBorder":"#a855f7",
        "--familyHole":"#e9d5ff",
        "--familyHoleColor":"#2e1065",
        "--otherButtonColor":"#e2caf8",
        "--otherButtonHoverColor":"#a28db6",
        "--otherColor":"#261c30",
      }},
    royal:{label:"مشکی طلایی", swatch:"linear-gradient(135deg,#000,#d4af37)", ring:"#d4af37",
      vars:{"--back":"linear-gradient(180deg,#1a1a1a,#000)",
        "--backpeople":"radial-gradient(circle at 20% 20%,#3a3320 0%,transparent 45%),radial-gradient(circle at 80% 80%,#2a2415 0%,transparent 45%),#1a1a1a",
        "--ink":"#f0e0a8",
        "--text":"#ffffff",
        "--male":"#4dc0dd",
        "--female":"#e8b4c8",
        "--buttonColor":"#d4af37",
        "--buttonHoverColor":"#b08f1f",
        "--jadSpace":"#d4af37",
        "--tree-line":"#d4af37",
        "--cardBack":"#1a1a1a",
        "--topTab":"#0a0a0a",
        "--topTabBorderC":"#d4af37",
        "--searchBack":"#2a2a2a",
        "--selectBack":"#3a3320",
        "--selectBorder":"#d4af37", 
        "--familyHole":"#3a3320",
        "--familyHoleColor":"#f0e0a8",
        "--otherButtonColor":"#cfcfcf",
        "--otherButtonHoverColor":"#b8ac85",
        "--otherColor":"#27251c",
      }}
  };
  const DEF = {accent:"#f88d00",back:"#5c3d17",treeBg:"#e9d7a9",male:"#39a9bd",
    female:"#e4939a",line:"#030303",card:"#ffffff",text:"#333333"};
  const IDS = ["accent","back","treeBg","male","female","line","card","text"];

  function apply(vars){
    Object.keys(vars).forEach(k => document.documentElement.style.setProperty(k, vars[k]));
  }
  function shade(hex, amt){
    const n = parseInt(hex.slice(1), 16);
    let r=(n>>16)&255, g=(n>>8)&255, b=n&255;
    r = Math.max(0,Math.min(255,Math.round(r+amt*255)));
    g = Math.max(0,Math.min(255,Math.round(g+amt*255)));
    b = Math.max(0,Math.min(255,Math.round(b+amt*255)));
    return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
  }
  function customVars(c){
    return {
      "--back":"linear-gradient(180deg,"+shade(c.back,.08)+","+shade(c.back,-.10)+")",
      "--backpeople":"radial-gradient(circle at 20% 20%,"+shade(c.treeBg,.14)+" 0%,transparent 45%),radial-gradient(circle at 80% 80%,"+shade(c.treeBg,-.05)+" 0%,transparent 45%),"+c.treeBg,
      "--ink":c.text,"--text":c.text,"--male":c.male,"--female":c.female,
      "--buttonColor":c.accent,"--jadSpace":c.accent,"--tree-line":c.line,
      "--cardBack":c.card,"--topTab":shade(c.back,.72),"--topTabBorderC":c.accent,
      "--searchBack":c.accent,"--selectBack":shade(c.accent,.48),"--selectBorder":c.accent,
      "--familyHole":shade(c.accent,.55),"--familyHoleColor":shade(c.accent,-.35)
    };
  }
  function markActive(k){
    document.querySelectorAll(".theme-circle").forEach(c => {
      c.classList.toggle("active", c.dataset.theme === k);
    });
  }
  function build(){
    const wrap = document.getElementById("themeSwatches");
    wrap.innerHTML = "";
    Object.keys(THEMES).forEach(k => {
      const t = THEMES[k];
      const b = document.createElement("button");
      b.type = "button"; b.className = "theme-circle";
      b.dataset.theme = k; b.title = t.label;
      b.style.background = t.swatch;
      b.style.setProperty("--ring", t.ring);
      b.addEventListener("click", () => {
        apply(t.vars); markActive(k);
        try { localStorage.setItem(KEY, JSON.stringify({type:"preset",name:k})); } catch(_){}
      });
      wrap.appendChild(b);
    });
  }
  function custom(save){
    const colors = {};
    IDS.forEach(id => {
      const el = document.getElementById("tc-"+id);
      if (el) colors[id] = el.value;
    });
    apply(customVars(colors));
    markActive("custom");
    if (save) try { localStorage.setItem(KEY, JSON.stringify({type:"custom",colors})); } catch(_){}
  }
  function load(){
    let raw;
    try { raw = localStorage.getItem(KEY); } catch(_){}
    if (!raw){ markActive("classic"); return; }
    try {
      const d = JSON.parse(raw);
      if (d.type === "preset" && THEMES[d.name]){ apply(THEMES[d.name].vars); markActive(d.name); }
      else if (d.type === "custom" && d.colors){
        apply(customVars(d.colors)); markActive("custom");
        IDS.forEach(id => {
          const el = document.getElementById("tc-"+id);
          if (el) el.value = d.colors[id];
        });
      } else markActive("classic");
    } catch(_){ markActive("classic"); }
  }

  build(); load();

  const btn = document.getElementById("customThemeBtn");
  const panel = document.getElementById("customThemePanel");
  btn.addEventListener("click", () => { panel.hidden = !panel.hidden; });
  document.getElementById("customThemeClose").onclick = () => { panel.hidden = true; };
  IDS.forEach(id => {
    const el = document.getElementById("tc-"+id);
    if (el) el.addEventListener("input", () => custom(true));
  });
  document.getElementById("customThemeSave").onclick = () => {
    custom(true);
    const b = document.getElementById("customThemeSave");
    b.textContent = "✓ ذخیره شد";
    setTimeout(() => { b.textContent = "ذخیره"; }, 1200);
  };
  document.getElementById("customThemeReset").onclick = () => {
    IDS.forEach(id => {
      const el = document.getElementById("tc-"+id);
      if (el) el.value = DEF[id];
    });
    custom(true);
  };
})();