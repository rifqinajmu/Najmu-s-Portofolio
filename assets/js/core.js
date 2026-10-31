/* Shared engine for both alternatives: media helpers, project page, router,
   stop-motion reels, heat-map text effect, interactive map, cursor, clock. */
(() => {
  const P = window.PROJECTS || [];
  const SZ = window.SIZES || {};
  const VD = window.VIDEOS || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const src = (slug, n) => `assets/img/${slug}/${n}.webp`;
  const size = (slug, n) => (SZ[slug] || {})[n] || [1600, 1000];
  const ratio = (slug, n) => { if (n.startsWith('v:')) { const v = VD[n.slice(2)]; return v ? v[0] / v[1] : 16 / 9; } const s = size(slug, n); return s[0] / s[1]; };

  const img = (slug, n, { eager = false, cls = '' } = {}) => {
    const [w, h] = size(slug, n);
    return `<img class="${cls}" src="${src(slug, n)}" width="${w}" height="${h}" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  };
  const video = (name, { poster = '' } = {}) => {
    const v = VD[name]; if (!v) return ''; poster = poster || (window.VPOSTER || {})[name] || '';
    return `<video src="assets/video/${name}.mp4" ${poster ? `poster="${poster}"` : ''} muted loop playsinline ${poster ? 'preload="none" data-io' : 'autoplay preload="metadata"'} width="${v[0]}" height="${v[1]}"></video>`;
  };
  const media = (slug, n, opt) => n.startsWith('v:') ? video(n.slice(2), opt) : img(slug, n, opt);

  // Justified row: every item gets flex-grow equal to its aspect ratio, so heights match and nothing is cropped.
  const row = (p, r) => {
    if (r.posts) return `<div class="g-posts" data-reveal>${r.posts.map(([no, sl]) => { const items = sl.filter(n => !n.startsWith('v:') || VD[n.slice(2)]); const car = items.length > 1; return `<div class="g-post${car ? ' is-car' : ''}" style="--n:${items.length}"><div class="g-plab"><span class="mono">Post</span><b>${no}</b><span class="mono">${car ? `Carousel · ${items.length} slides` : 'Single post'}</span></div><div class="g-pslides">${items.map((n, i) => `<figure>${media(p.slug, n)}${car ? `<span class="mono g-pi">${i + 1} / ${items.length}</span>` : ''}</figure>`).join('')}</div></div>`; }).join('')}</div>`;
    if (r.t === 'text') return `<div class="g-text" data-reveal><h3>${esc(r.h)}</h3><p>${esc(r.p)}</p></div>`;
    const items = (r.r || []).filter(n => !n.startsWith('v:') || VD[n.slice(2)]);
    if (!items.length) return '';
    return `<div class="g-row${r.panel ? ' is-panel' : ''}"${typeof r.panel === 'string' ? ` style="--pc:${r.panel}"` : ''}${r.crop ? ` data-crop style="--crop:${r.crop};--cpos:${r.pos || 'center'}"` : ''} data-reveal>${items.map(n => `<figure style="flex:${ratio(p.slug, n).toFixed(4)} 1 0%">${media(p.slug, n)}</figure>`).join('')}</div>`;
  };

  /* ---------- stop-motion reel ---------- */
  const preloaded = new Set();
  const preload = p => { if (preloaded.has(p.slug)) return; preloaded.add(p.slug); p.reel.forEach(n => { const i = new Image(); i.src = src(p.slug, n); }); };
  function reel(imgEl, p, fps = 2) {
    let i = 0, t = null;
    return {
      play() { if (t || reduce) return; preload(p); t = setInterval(() => { i = (i + 1) % p.reel.length; imgEl.src = src(p.slug, p.reel[i]); }, 1000 / fps); },
      stop(reset = true) { clearInterval(t); t = null; if (reset) { i = 0; imgEl.src = src(p.slug, p.reel[0]); } },
    };
  }

  /* ---------- heat-map text effect ---------- */
  // A low-res intensity field follows the pointer, decays over time and is coloured through a thermal ramp.
  function heat(host) {
    if (!host || reduce) return;
    const c = document.createElement('canvas'); c.className = 'heat'; host.append(c);
    const ctx = c.getContext('2d'); const S = 6; let W = 0, H = 0, field, img2, pts = [], raf = null, alive = 0;
    const ramp = [[0, [255, 255, 255, 0]], [.18, [92, 140, 255, 220]], [.38, [200, 40, 90, 245]], [.62, [255, 120, 190, 255]], [.85, [255, 245, 90, 255]], [1, [255, 255, 140, 255]]];
    const lut = new Uint8ClampedArray(256 * 4);
    for (let v = 0; v < 256; v++) { const x = v / 255; let k = 0; while (k < ramp.length - 2 && x > ramp[k + 1][0]) k++; const [a, ca] = ramp[k], [b, cb] = ramp[k + 1]; const f = Math.min(1, Math.max(0, (x - a) / (b - a))); for (let j = 0; j < 4; j++) lut[v * 4 + j] = ca[j] + (cb[j] - ca[j]) * f; }
    const resize = () => { const r = host.getBoundingClientRect(); W = Math.max(1, Math.ceil(r.width / S)); H = Math.max(1, Math.ceil(r.height / S)); c.width = W; c.height = H; field = new Float32Array(W * H); img2 = ctx.createImageData(W, H); };
    resize(); new ResizeObserver(resize).observe(host);
    host.addEventListener('pointermove', e => { const r = host.getBoundingClientRect(); pts.push([(e.clientX - r.left) / S, (e.clientY - r.top) / S]); alive = 90; if (!raf) raf = requestAnimationFrame(tick); });
    function tick() {
      for (let i = 0; i < field.length; i++) field[i] *= 0.955;
      for (const [x, y] of pts.splice(0)) { const R = 9; for (let yy = Math.max(0, y - R | 0); yy < Math.min(H, y + R); yy++) for (let xx = Math.max(0, x - R | 0); xx < Math.min(W, x + R); xx++) { const d = Math.hypot(xx - x, yy - y) / R; if (d < 1) { const k = yy * W + xx; field[k] = Math.min(1.25, field[k] + (1 - d * d) * .28); } } }
      const D = img2.data; let any = false;
      for (let i = 0; i < field.length; i++) { const v = Math.min(255, field[i] * 230) | 0; if (v > 2) any = true; D[i * 4] = lut[v * 4]; D[i * 4 + 1] = lut[v * 4 + 1]; D[i * 4 + 2] = lut[v * 4 + 2]; D[i * 4 + 3] = lut[v * 4 + 3]; }
      ctx.putImageData(img2, 0, 0);
      raf = (any || --alive > 0) ? requestAnimationFrame(tick) : null;
    }
  }

  /* ---------- interactive map ---------- */
  async function map(host) {
    if (!host) return;
    try { host.querySelector('.map-canvas').innerHTML = await (await fetch('assets/map/bandung.svg')).text(); } catch (e) { return; }
    const svg = host.querySelector('svg'); let z = 1.6, x = 0, y = 0, drag = null;
    const apply = () => { svg.style.transform = `translate(${x}px, ${y}px) scale(${z})`; };
    apply();
    host.querySelector('[data-zoom="in"]').addEventListener('click', () => { z = Math.min(4, z * 1.35); apply(); });
    host.querySelector('[data-zoom="out"]').addEventListener('click', () => { z = Math.max(1, z / 1.35); apply(); });
    const canvas = host.querySelector('.map-canvas');
    canvas.addEventListener('pointerdown', e => { drag = [e.clientX - x, e.clientY - y]; canvas.setPointerCapture(e.pointerId); canvas.classList.add('is-drag'); });
    canvas.addEventListener('pointermove', e => { if (!drag) return; x = e.clientX - drag[0]; y = e.clientY - drag[1]; apply(); });
    canvas.addEventListener('pointerup', () => { drag = null; canvas.classList.remove('is-drag'); });
  }

  /* ---------- cursor ---------- */
  function cursor() {
    if (!fine) return;
    const c = document.createElement('div'); c.className = 'cur'; c.innerHTML = '<span></span>'; document.body.append(c);
    const label = c.firstChild; let mx = -100, my = -100, cx = mx, cy = my;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener('pointerover', e => { const t = e.target.closest('[data-cursor]'); c.classList.toggle('is-on', !!t); if (t) label.textContent = t.dataset.cursor; });
    const loop = () => { cx += (mx - cx) * .25; cy += (my - cy) * .25; c.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); }; loop();
  }

  /* ---------- reveal ---------- */
  function reveal(rootEl = document, scroller = null) {
    const els = $$('[data-reveal]:not(.is-in)', rootEl);
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { root: scroller, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    setTimeout(() => els.forEach(e => e.classList.add('is-in')), 4000);
  }

  /* ---------- clock ---------- */
  function clock(el) {
    if (!el) return;
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const t = () => { el.textContent = `Bandung ${f.format(new Date())}`; }; t(); setInterval(t, 1000);
  }

  /* ---------- project page ---------- */
  const view = () => $('#project');
  let current = null, savedY = 0, booting = true;
  const hooks = { open: [], close: [] };

  function render(p) {
    const i = P.indexOf(p), n = P[(i + 1) % P.length];
    const v = view();
    if (window.RN && window.RN.renderProject) { window.RN.renderProject(p, v, { i, n, close }); v.scrollTop = 0; v.scrollLeft = 0; reveal(v, v); return; }
    v.style.setProperty('--pc', p.color); v.style.setProperty('--pi', p.ink); { const h = p.color.replace('#', ''), [r, g, b] = [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16) / 255), L = .2126 * r + .7152 * g + .0722 * b; v.style.setProperty('--pdk', L > .6 ? '60%' : L > .4 ? '35%' : '12%'); }
    const heroMedia = img(p.slug, p.cover, { eager: true });
    v.innerHTML = `
      <div class="pj-bar"><button type="button" class="pj-close" data-cursor="Close">&larr; Index</button><span class="mono">${pad(i + 1)} / ${pad(P.length)}</span><a href="#${n.slug}" data-cursor="Next">Next &rarr;</a></div>
      <header class="pj-head">
        <div class="pj-titles">
          <p class="mono pj-cat">${esc(p.category)} &middot; ${p.year}</p>
          <h1 class="pj-title">${esc(p.title)}</h1>
          <p class="pj-name">${esc(p.name)}</p>
        </div>
        <dl class="pj-spec">
          <div><dt>Type</dt><dd>${esc([p.category, ...p.tags].filter((t, k, a) => a.indexOf(t) === k).join(', '))}</dd></div>
          <div><dt>Market</dt><dd>${esc(p.market)}</dd></div>
          <div><dt>Location</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
          <div><dt>Year</dt><dd>${p.year}</dd></div>
        </dl>
      </header>
      <figure class="pj-hero"><div class="pj-hero-in" style="--ar:${ratio(p.slug, p.cover).toFixed(4)}">${heroMedia}</div></figure>
      <section class="pj-about">
        <span class="mono">About</span>
        <div class="pj-text" data-reveal><p class="lead">${esc(p.summary)}</p>${p.overview.map(t => `<p>${esc(t)}</p>`).join('')}</div>
        <dl class="pj-facts" data-reveal>${p.facts.map(([k, val]) => `<div><dt>${esc(k)}</dt><dd>${esc(val)}</dd></div>`).join('')}</dl>
      </section>
      <section class="gal">${p.gallery.map(r => row(p, r)).join('')}</section>
      <section class="pj-credits"><span class="mono">Credits</span><dl>${p.credits.map(([k, val]) => `<div><dt>${esc(k)}</dt><dd>${esc(val)}</dd></div>`).join('')}</dl></section>
      <a class="pj-next" href="#${n.slug}" data-cursor="Open" style="--nc:${n.color};--ni:${n.ink}">
        <span class="mono">Next project &middot; ${pad(P.indexOf(n) + 1)}</span>
        <span class="pj-next-title">${esc(n.title)} <span class="arrow">&rarr;</span></span>
        <span class="pj-next-peek">${img(n.slug, n.cover)}</span>
      </a>`;
    v.scrollTop = 0;
    $('.pj-close', v).addEventListener('click', close);
    reveal(v, v);
  }

  const curtain = () => $('.curtain');
  function swap(color, mid) {
    const c = curtain();
    if (reduce || booting || !c) { mid(); return; }
    c.style.background = color; c.classList.remove('is-out'); void c.offsetWidth; c.classList.add('is-in');
    setTimeout(() => { mid(); c.classList.remove('is-in'); void c.offsetWidth; c.classList.add('is-out'); }, 620);
  }
  function open(p) {
    if (current === p) return; if (!current) savedY = scrollY; current = p;
    swap(p.color, () => { render(p); view().hidden = false; document.documentElement.classList.add('is-locked'); document.title = `${p.title} — Rifqi Najmu`; hooks.open.forEach(f => f(p)); });
  }
  function hide(target) {
    const was = current; current = null;
    swap(was ? was.color : '#111', () => {
      const v = view(); v.hidden = true; v.innerHTML = ''; document.documentElement.classList.remove('is-locked'); document.title = document.body.dataset.title || 'Rifqi Najmu Syaqib';
      document.documentElement.style.scrollBehavior = 'auto'; if (target) target.scrollIntoView(); else scrollTo(0, savedY); document.documentElement.style.scrollBehavior = '';
      hooks.close.forEach(f => f());
    });
  }
  function close() { if (!current) return; try { history.replaceState(null, '', '#work'); } catch (e) { /* ignore */ } hide(); }
  function route() {
    const h = decodeURIComponent(location.hash.slice(1)); const p = P.find(x => x.slug === h);
    if (p) { open(p); return; }
    if (current) hide(h && document.getElementById(h));
  }
  function start() {
    addEventListener('hashchange', route);
    addEventListener('keydown', e => { if (e.key === 'Escape' && current) close(); });
    route(); booting = false;
  }

  /* ---------- profile + contact blocks (shared markup) ---------- */
  function profileHTML() {
    const F = window.PROFILE;
    return `
      <div class="pf">
        <figure class="pf-photo" data-reveal><img src="${F.portrait}" width="2000" height="2000" alt="Portrait of ${esc(F.name)}" loading="lazy"></figure>
        <div class="pf-text">
          <p class="pf-lead" data-reveal>${esc(F.lead)}</p>
          <p class="pf-bio" data-reveal>${esc(F.bio)}</p>
          <ul class="pf-focus" data-reveal>${F.focus.map(([k, v], i) => `<li><span class="mono">${pad(i + 1)}</span><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('')}</ul>
        </div>
      </div>
      <div class="cv">${F.cv.map(b => `<div class="cv-block" data-reveal><h3 class="mono">${esc(b.h)}</h3><ul>${b.rows.map(([y, r, o, d]) => `<li class="${!o && !d ? 'wide' : ''}"><span class="cv-y">${esc(y)}</span><span class="cv-r">${esc(r)}</span>${o ? `<span class="cv-o">${esc(o)}</span>` : ''}${d ? `<span class="cv-d">${esc(d)}</span>` : ''}</li>`).join('')}</ul></div>`).join('')}</div>`;
  }
  function contactHTML() {
    const C = window.PROFILE.contact;
    return `
      <div class="ct">
        <figure class="ct-photo"><img src="${window.PROFILE.portrait}" width="2000" height="2000" alt="" loading="lazy"></figure>
        <div class="ct-map" data-cursor="Drag"><div class="map-canvas"></div><div class="map-zoom"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">&minus;</button></div><span class="map-credit">&copy; OpenStreetMap</span></div>
        <div class="ct-info">
          <p class="ct-addr">${C.address.map(esc).join('<br>')}</p>
          <div class="ct-group"><span class="mono">Projects, jobs &amp; collaborations</span><a class="ct-big" href="mailto:${C.email}" id="email">${C.email}</a><button type="button" class="ct-copy mono" id="copy-email">Copy email</button></div>
          <div class="ct-group"><span class="mono">Phone</span><span class="ct-mid">${esc(C.phone)}</span></div>
          <div class="ct-group"><span class="mono">Social</span><a class="ct-big" href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a class="ct-big" href="${C.behance}" target="_blank" rel="noopener">Behance</a></div>
        </div>
      </div>`;
  }
  function wireCopy() {
    const b = $('#copy-email'); if (!b) return;
    b.addEventListener('click', () => {
      const t = window.PROFILE.contact.email;
      const ok = () => { b.textContent = 'Copied'; setTimeout(() => { b.textContent = 'Copy email'; }, 1600); };
      const fb = () => { const r = document.createRange(); r.selectNodeContents($('#email')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Press Cmd+C'; };
      try { navigator.clipboard.writeText(t).then(ok, fb); } catch (e) { fb(); }
    });
  }

  window.RN = { P, $, $$, pad, esc, src, img, video, media, ratio, row, reel, preload, heat, map, cursor, reveal, clock, start, hooks, profileHTML, contactHTML, wireCopy, reduce, fine, close: () => close() };
})();
/* videos with data-io play only while on screen */
(() => { if (!('IntersectionObserver' in window)) return; const io = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.play().catch(() => {}); } else if (!v.paused) v.pause(); }), { threshold: .25 });
  const scan = () => document.querySelectorAll('video[data-io]:not([data-iod])').forEach(v => { v.dataset.iod = 1; io.observe(v); });
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true }); scan(); })();
