/* K-series kit: glowing birds, flocks, horizon bands, scroll engine, shared informative sections, project page. */
(() => {
  const { P, $, $$, pad, esc, src, ratio, row, map, wireCopy, cursor, reveal, start, reduce, fine } = window.RN;
  const F = window.PROFILE, C = F.contact, CATS = window.CATEGORIES;
  const hx = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => '#' + hx(a).map((v, i) => Math.round(v + (hx(b)[i] - v) * t).toString(16).padStart(2, '0')).join('');
  const rgba = (h, a) => { const [r, g, b] = hx(h); return `rgba(${r},${g},${b},${a})`; };
  const cache = new Map(); const img = s => { if (!cache.has(s)) cache.set(s, new Promise(r => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = s; })); return cache.get(s); };

  /* a soft glowing gull: s = wingspan/2, f = flap (-1 down … 1 up) */
  function bird(c, x, y, s, f, col = '#FFE6B8', a = 1, rot = 0) {
    c.save(); c.translate(x, y); c.rotate(rot); c.globalAlpha = a;
    const up = (.18 + .42 * f) * s, tip = (.05 + .5 * f) * s;
    c.shadowColor = col; c.shadowBlur = s * .9;
    const g = c.createRadialGradient(0, 0, 0, 0, 0, s); g.addColorStop(0, '#ffffff'); g.addColorStop(.5, col); g.addColorStop(1, rgba(col, .15)); c.fillStyle = g;
    for (const m of [-1, 1]) { c.beginPath(); c.moveTo(m * .06 * s, 0); c.bezierCurveTo(m * .3 * s, -up, m * .62 * s, -up * .9, m * s, -tip); c.bezierCurveTo(m * .62 * s, -tip * .2 + .05 * s, m * .32 * s, .1 * s, 0, .09 * s); c.closePath(); c.fill(); }
    c.beginPath(); c.ellipse(0, .03 * s, .07 * s, .2 * s, 0, 0, 7); c.fill(); c.restore();
  }
  /* boids */
  function flock(n, W, H) {
    const b = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * 2, vy: (Math.random() - .5) * 2, ph: Math.random() * 6, s: .6 + Math.random() * .7 }));
    return { b, step(tx, ty, k = 1) { for (const p of b) { let ax = 0, ay = 0, cx = 0, cy = 0, sx = 0, sy = 0, n2 = 0;
        for (const q of b) { if (q === p) continue; const dx = q.x - p.x, dy = q.y - p.y, d = dx * dx + dy * dy; if (d < 4900) { ax += q.vx; ay += q.vy; cx += q.x; cy += q.y; n2++; if (d < 500) { sx -= dx; sy -= dy; } } }
        if (n2) { p.vx += (ax / n2 - p.vx) * .05 + (cx / n2 - p.x) * .0015; p.vy += (ay / n2 - p.vy) * .05 + (cy / n2 - p.y) * .0015; } p.vx += sx * .02; p.vy += sy * .02;
        p.vx += (tx - p.x) * .0009 * k; p.vy += (ty - p.y) * .0009 * k; const sp = Math.hypot(p.vx, p.vy), mx = 4.2; if (sp > mx) { p.vx *= mx / sp; p.vy *= mx / sp; }
        p.x += p.vx; p.y += p.vy; p.ph += .25 + sp * .05; } } };
  }
  /* horizon bands */
  function horizon(c, W, H, t, pal, { y0 = 0, y1 = 1, wobble = 1 } = {}) { const n = pal.length, h = (y1 - y0) * H / n;
    pal.forEach((col, i) => { const g = c.createLinearGradient(0, 0, W, 0); const sh = Math.sin(t * .6 + i * 1.3) * .2 * wobble; g.addColorStop(0, mix(col, '#000000', .25)); g.addColorStop(Math.max(.05, Math.min(.95, .5 + sh)), mix(col, '#ffffff', .25)); g.addColorStop(1, col); c.fillStyle = g; c.fillRect(0, y0 * H + i * h + Math.sin(t + i) * 2 * wobble, W, h + 2); }); }
  /* canvas helper: auto-sized, hi-dpi */
  function canvas(el, onSize) { const c = el.getContext('2d'); const fit = () => { const r = el.getBoundingClientRect(), k = Math.min(1.6, devicePixelRatio || 1); el.width = Math.max(10, Math.round(r.width * k)); el.height = Math.max(10, Math.round(r.height * k)); c.setTransform(k, 0, 0, k, 0, 0); onSize && onSize(r.width, r.height); }; fit(); addEventListener('resize', fit); return c; }

  /* scroll engine: --p per [data-p] element, --sp on root, split-text reveals, counters */
  function scrollEngine(rootEl = document) {
    $$('[data-split]', rootEl).forEach(el => { if (el.dataset.done) return; el.dataset.done = 1; let k = 0; el.innerHTML = el.textContent.split(/(\s+)/).map(w => /\s+/.test(w) ? w : `<span class="w"><span style="--i:${k++}">${esc(w)}</span></span>`).join(''); });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); if (e.target.dataset.count && !e.target.dataset.run) { e.target.dataset.run = 1; const to = +e.target.dataset.count, t0 = performance.now(); const st = now => { const k = Math.min(1, (now - t0) / 1400); e.target.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(st); }; requestAnimationFrame(st); } } }), { threshold: .2 });
    $$('[data-split], [data-count]', rootEl).forEach(el => io.observe(el));
  }
  /* geometry cache: layout is read only after a resize / content change, never every frame */
  const geo = new WeakMap(); let gv = 1; const bump = () => { gv++; }; addEventListener("resize", bump); document.fonts && document.fonts.ready.then(bump); try { new ResizeObserver(bump).observe(document.body); } catch (e) {}
  const g = el => { let c = geo.get(el); if (!c || c.v !== gv) { const r = el.getBoundingClientRect(); c = { v: gv, top: r.top + scrollY, h: r.height }; geo.set(el, c); } return c; };
  let pList = [], pv = 0, lastY = -1, lastV = 0;
  function scrollTick() { const H = innerHeight, y = scrollY;
    if (y !== lastY || gv !== lastV) { if (pv !== gv) { pList = $$("[data-p]").filter(el => !el.closest("#project")); pv = gv; } lastY = y; lastV = gv;
      const pb = document.querySelector(".k-prog"); if (pb) pb.style.transform = `scaleX(${(y / Math.max(1, document.documentElement.scrollHeight - H)).toFixed(4)})`;
      for (const el of pList) { const c = g(el), top = c.top - y; if (top + c.h < -200 || top > H + 200) continue; const p = Math.min(1, Math.max(0, (H - top) / (H * .8))); if (Math.abs((el._p ?? -1) - p) > .002) { el._p = p; el.style.setProperty("--p", p.toFixed(3)); } } }
    const v = $("#project"); if (v && !v.hidden) for (const el of $$("[data-p]", v)) { const r = el.getBoundingClientRect(); el.style.setProperty("--p", Math.min(1, Math.max(0, (H - r.top) / (H * .7))).toFixed(3)); }
    requestAnimationFrame(scrollTick); }

  /* shared informative sections */
  const ctype = () => `<div class="k-ctype"><p class="c1">[ Portofolio ]</p><p class="c2">Selected Works 2026</p><p class="c3"><span class="by">by</span><span class="name">Rifqi Najmu Syaqib</span></p></div>`;
  const head = (no, title, note) => `<div class="k-h"><span class="mono">${no}</span><h2 data-split>${title}</h2><p>${note}</p><div class="k-band" data-p></div></div>`;
  const list = () => `<ol class="k-list">${P.map((p, i) => `<li><a href="#${p.slug}" data-p data-cursor="Open"><span class="mono">${pad(i + 1)}</span><b>${esc(p.title)}</b><span class="d">${esc(p.name)}</span><span class="mono">${esc(p.category)}</span><span class="mono">${p.year}</span></a></li>`).join('')}</ol>`;
  const about = () => `<div class="k-about"><figure class="k-face" data-p><img src="${F.portrait}" alt="Portrait of ${esc(F.name)}" loading="lazy"></figure><div class="k-atxt"><p class="lead" data-split>${esc(F.lead)}</p><p>${esc(F.bio)}</p>
    <div class="k-cv">${F.cv.flatMap(b => b.rows.map(r => [b.h, ...r])).map(([h, y, r, o]) => `<div><span class="mono">${esc(y || h)}</span><span><b>${esc(r)}</b>${esc(o || h)}</span></div>`).join('')}</div></div>
    <div class="k-stats"><div><b data-count="${P.length}">0</b><span class="mono">Selected projects</span></div><div><b data-count="4">0</b><span class="mono">Disciplines</span></div><div><b data-count="5">0</b><span class="mono">Roles held</span></div><div><b>3.85</b><span class="mono">GPA, Summa Cum Laude</span></div></div></div>`;
  const contact = line => `<div class="k-contact"><a class="k-mail" href="mailto:${C.email}" id="email" data-cursor="Write">${C.email}</a><div class="k-map"><div class="ct-map" data-cursor="Drag"><div class="map-canvas"></div><div class="map-zoom"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">&minus;</button></div></div></div>
    <dl class="k-cinfo"><dt>${esc(line || 'Say hello')}</dt><dd><button type="button" id="copy-email" class="mono">Copy email</button></dd><dt>Phone</dt><dd>${esc(C.phone)}</dd><dt>Based in</dt><dd>${C.address.join(', ')}</dd><dt>Elsewhere</dt><dd><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${C.behance}" target="_blank" rel="noopener">Behance</a></dd><dt>Status</dt><dd>Open for work</dd></dl></div>`;
  const top = (name, links) => `<div class="k-prog" aria-hidden="true"></div><header class="k-top"><a href="#top">Rifqi Najmu Syaqib</a><nav id="knav">${links.map(([h, l]) => `<a href="#${h}">${l}</a>`).join('')}</nav><span class="mono" id="kclock">${name}</span></header>`;
  const foot = line => `<footer class="k-foot mono"><span>&copy; 2026 Rifqi Najmu Syaqib</span><span>${line}</span><a href="#top">Back to top &uarr;</a></footer>`;
  const switcher = () => { const here = location.pathname.split('/').pop(); return `<nav class="kswitch" aria-label="Concepts">${(document.body.dataset.sw ? document.body.dataset.sw.split(',') : Array.from({ length: 15 }, (_, i) => `k${String(i + 1).padStart(2, '0')}`)).map(k => `<a href="${k}.html" class="${here === k + '.html' ? 'is-on' : ''}">${document.body.dataset.sw ? k.toUpperCase() : k.slice(1)}</a>`).join('')}<a href="all.html">All</a></nav>`; };

  function project(extra) {
    window.RN.renderProject = (p, v, { i, n, close }) => {
      v.className = 'project kp'; v.style.setProperty('--pc', mix(p.color, '#000000', .3));
      v.innerHTML = `<div class="kp-bar"><button type="button" class="kp-close" data-cursor="Close">← Close</button><span class="mono">${pad(i + 1)} / ${pad(P.length)} · ${esc(p.category)}</span><a href="#${n.slug}">Next →</a></div>
        <header class="kp-hero" id="kph"><img src="${src(p.slug, p.cover)}" alt=""><div class="kp-title"><span class="mono">${esc(p.tags.join(' · '))} · ${p.year}</span><h1 data-split>${esc(p.title)}</h1><p>${esc(p.name)}</p></div></header>
        ${extra ? extra(p, i) : ''}
        <section class="kp-body"><p class="kp-lead" data-split>${esc(p.summary)}</p><div class="kp-spec"><div><b>Market</b>${esc(p.market)}</div><div><b>Location</b>${esc(p.location)}</div><div><b>Role</b>${esc(p.role)}</div><div><b>Client</b>${esc(p.client)}</div>${p.facts.map(([a, b]) => `<div><b>${esc(a)}</b>${esc(b)}</div>`).join('')}${p.credits.map(([a, b]) => `<div><b>${esc(a)}</b>${esc(b)}</div>`).join('')}</div><div class="kp-txt">${p.overview.map(t => `<p>${esc(t)}</p>`).join('')}</div></section>
        <section class="gal">${p.gallery.map(r => row(p, r)).join('').replace(/<figure /g, '<figure data-p ')}</section>
        <a class="kp-next" href="#${n.slug}" data-cursor="Open"><span class="mono">Next · ${pad(P.indexOf(n) + 1)} · ${esc(n.category)}</span><b>${esc(n.title)}</b><div class="k-band"></div></a>`;
      $('.kp-close', v).addEventListener('click', close);
      v.onscroll = () => { const h = $('#kph', v); if (h) h.style.setProperty('--q', Math.min(1, v.scrollTop / innerHeight).toFixed(3)); };
      scrollEngine(v);
    };
  }
  function boot({ extraProject } = {}) {
    document.body.insertAdjacentHTML('beforeend', switcher());
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false });
    const ck = $('#kclock'); if (ck) { const base = ck.textContent; const t = () => { ck.textContent = `${base} · Bandung ${f.format(new Date())}`; }; t(); setInterval(t, 30000); }
    document.addEventListener('click', e => { const a = e.target.closest('#knav a, .k-top > a, .k-foot a[href^="#"]'); if (!a) return; const t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return; e.preventDefault(); t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); });
    project(extraProject); scrollEngine(); requestAnimationFrame(scrollTick);
    map($('.ct-map')); wireCopy(); cursor(); reveal(); start();
  }
  function loader(html, ms, onFrame) { const L = $('#loader'); L.innerHTML = html; const t0 = performance.now(), dur = reduce ? 10 : ms; const st = now => { const k = Math.max(0, Math.min(1, (now - t0) / dur)); onFrame && onFrame(k, now); if (k < 1) requestAnimationFrame(st); else { L.classList.add('is-done'); setTimeout(() => L.remove(), 1200); } }; requestAnimationFrame(st); }

  const shot = (p, n = p.cover, cls = "", attrs = "") => `<figure class="k-shot ${cls}" style="--pc:${p.color}" ${attrs}><img src="${src(p.slug, n)}" alt="${esc(p.title)}" loading="lazy" width="${Math.round(ratio(p.slug, n) * 1000)}" height="1000"></figure>`;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const prog = el => { const c = g(el); return clamp((scrollY - c.top) / Math.max(1, c.h - innerHeight)); };
  const live = el => { const c = g(el), t = c.top - scrollY; return t < innerHeight && t + c.h > 0; };
  const busy = () => document.hidden || (document.getElementById('project') && !document.getElementById('project').hidden);
  const loop = fn => { const f = now => { if (!busy()) fn(now); requestAnimationFrame(f); }; requestAnimationFrame(f); };
  window.K = { shot, clamp, prog, live, loop, mix, rgba, img, bird, flock, horizon, canvas, scrollEngine, ctype, head, list, about, contact, top, foot, boot, loader, P, F, CATS, pad, esc, src, ratio, reduce, fine };
})();
