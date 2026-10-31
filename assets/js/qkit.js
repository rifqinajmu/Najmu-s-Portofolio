/* Q-series kit (F1 cover × birds × loose typography): glass bird, cover, statement, field notes, flight-path process,
   three index layouts (dial / spines / stagger), three contact layouts (guides / arc / stagger), hover peek. */
(() => {
  const { P, F, pad, esc, src, loop, clamp } = window.K; const C = F.contact;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const LATIN = ['Passer temara', 'Corvus buyungensis', 'Lucens nyalainus', 'Dubius sureaboutthat', 'Pamoria nusantara', 'Academica socialis', 'Curatrix caregiver', 'Impalia minor', 'Nuptialis digitalis'];
  const STAGES = [['I', 'Frame', 'Research Context', 'Before any answer, the question. Who is it for, what is at stake, what already exists. The context sets the brief.'], ['II', 'Observe', 'Insight', 'Out in the field: talking to people, noting habits, gathering references. The small truths here decide the direction.'], ['III', 'Sketch', 'Exploration', 'Many quick drawings. Moodboards, wrong turns, more drawings. Quantity first, so the right shape can appear.'], ['IV', 'Identify', 'Refinement', 'One direction is named and tested. Type, colour, grid and system are tuned until every part holds.'], ['V', 'Deliver', 'Communication', 'The work exists to say something. Printed, posted, worn or watched, it carries the message to the people it was made for, and moves them.']];
  const ctype = () => `<div class="k-ctype"><p class="c1">[ Portofolio ]</p><p class="c2">Selected Works 2026</p><p class="c3"><span class="by">by</span><span class="name">Rifqi Najmu Syaqib</span></p></div>`;
  const label = (no, t) => `<div class="q-lab"><span class="mono">${no}</span><h2>${t}</h2></div>`;
  /* ---------- glass bird ---------- */
  const WING = 'M-4,-6 C-22,-34 -62,-46 -98,-34 C-80,-28 -62,-20 -50,-10 C-60,-8 -70,-2 -76,4 C-52,6 -26,6 -6,2 Z';
  const birdSVG = `<svg viewBox="-110 -80 220 160" aria-hidden="true"><defs><linearGradient id="qwg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:#fff;stop-opacity:.95"/><stop offset=".55" style="stop-color:var(--wc);stop-opacity:.85"/><stop offset="1" style="stop-color:#fff;stop-opacity:.35"/></linearGradient>
    <radialGradient id="qbg" cx=".4" cy=".3" r=".8"><stop offset="0" style="stop-color:#fff"/><stop offset="1" style="stop-color:var(--wc);stop-opacity:.7"/></radialGradient></defs>
    <g class="qw l"><path d="${WING}"/><path class="v" d="M-10,-4 C-34,-20 -60,-30 -90,-33 M-10,0 C-34,-10 -56,-12 -72,-6"/></g><g transform="scale(-1,1)"><g class="qw r"><path d="${WING}"/><path class="v" d="M-10,-4 C-34,-20 -60,-30 -90,-33 M-10,0 C-34,-10 -56,-12 -72,-6"/></g></g>
    <path class="qtail" d="M-6,22 L0,40 L6,22 Z"/><ellipse class="qbody" cx="0" cy="4" rx="9" ry="21"/><circle class="qbody" cx="0" cy="-20" r="8.5"/><path class="qbeak" d="M-2.6,-17 L0,-10 L2.6,-17 Z"/><circle cx="-3.2" cy="-22" r="1.2" class="qeye"/><circle cx="3.2" cy="-22" r="1.2" class="qeye"/></svg>`;
  function bird({ base = '#9CCFC6', scale = 1, home } = {}) {
    document.body.insertAdjacentHTML('beforeend', `<div class="q-bird" id="qb" style="--wc:${base}">${birdSVG}</div>`);
    const b = $('#qb'), wl = $('.qw.l', b), wr = $('.qw.r', b); let x = innerWidth / 2, y = -100, lx = x, ly = y, mx = null, my = null, idle = 0, land = null, ph = 0, boost = 0;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; idle = 0; }, { passive: true });
    document.addEventListener('pointerover', e => { const t = e.target.closest('[data-land]'); if (t === land) return; land = t; b.style.setProperty('--wc', t ? (t.dataset.c || base) : base); });
    const api = { at(px, py) { x = lx = px; y = ly = py; }, flutter() { boost = 1; } };
    loop(now => { const t = now / 1000; idle += 1 / 60; let tx, ty, k = .045;
      if (land && document.contains(land)) { const r = land.getBoundingClientRect(); tx = r.left + r.width * (+(land.dataset.lx || .5)); ty = r.top + r.height * (+(land.dataset.ly || 0)) - 30 * scale; k = .08; }
      else if (home && (mx == null || idle > 2.5)) { const h = home(); tx = h.x + Math.sin(t * .8) * 30; ty = h.y + Math.cos(t * 1.1) * 18; }
      else { tx = (mx ?? innerWidth / 2) + 80 + Math.sin(t) * 26; ty = (my ?? innerHeight / 2) - 70 + Math.cos(t * 1.4) * 20; }
      x += (tx - x) * k; y += (ty - y) * k; const sp = Math.hypot(x - lx, y - ly); lx = x; ly = y; boost *= .96; const rest = land && sp < .8;
      ph += rest ? 0 : .22 + sp * .03 + boost * .6; const a = rest ? 62 : Math.sin(ph) * (34 + boost * 20) - 6;
      wl.setAttribute('transform', `rotate(${a.toFixed(1)} -4 -2)`); wr.setAttribute('transform', `rotate(${a.toFixed(1)} -4 -2)`);
      b.style.transform = `translate3d(${(x - 55 * scale).toFixed(1)}px, ${(y - 40 * scale).toFixed(1)}px, 0) rotate(${clamp((tx - x) * .06, -16, 16).toFixed(1)}deg) scale(${scale})`; });
    return api;
  }
  function feathers(x, y, col) { for (let i = 0; i < 9; i++) { const f = document.createElement('i'); f.className = 'q-fe'; f.style.cssText = `left:${x}px;top:${y}px;--dx:${(Math.random() - .5) * 260}px;--dy:${120 + Math.random() * 220}px;--r:${(Math.random() - .5) * 540}deg;--c:${col};animation-delay:${i * 30}ms`; document.body.appendChild(f); setTimeout(() => f.remove(), 2600); } }
  /* ---------- cover (F1 layout) ---------- */
  const cover = ({ word, sub, narr, hint }) => `<section class="q-cover" id="top"><p class="q-narr">${narr}</p><p class="q-vert">${word}<small>${sub}</small></p>${ctype()}
    <dl class="q-spec" data-land data-ly="0" data-lx=".8"><dt>Specimen</dt><dd class="mono">RN-2026</dd><dt>Species</dt><dd><em>Avis najmuensis</em></dd><dt>Habitat</dt><dd class="mono">Bandung, ID</dd><dt>Field</dt><dd class="mono">Branding · Campaign · Social · Multimedia</dd></dl><span class="q-hint mono">${hint}</span></section>`;
  /* ---------- statement (mono, staggered) ---------- */
  const statement = (lines, ind) => `<section class="q-state"><i class="q-orb"></i><p>${lines.map((l, i) => `<span data-p style="--o:${ind[i]}%">${l}</span>`).join('')}</p></section>`;
  function wireOrb() { $$('.q-state').forEach(s => { const o = $('.q-orb', s); let ox = .7, oy = .4, tx = .7, ty = .4; s.addEventListener('pointermove', e => { const r = s.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; });
      loop(now => { if (!window.K.live(s)) return; const t = now / 1000; ox += (tx - ox) * .04; oy += (ty - oy) * .04; o.style.left = `${((ox + Math.sin(t * .5) * .03) * 100).toFixed(2)}%`; o.style.top = `${((oy + Math.cos(t * .6) * .04) * 100).toFixed(2)}%`; }); }); }
  /* ---------- field notes (about) ---------- */
  const notes = (title = 'Field notes') => `<section class="q-sec" id="about">${label('(03)', title)}<div class="q-notes"><div class="q-vlab"><i></i><span>Field notes — Rifqi Najmu Syaqib</span><i></i></div>
    <div class="q-ntx"><p class="lead">${esc(F.lead)}</p><p>${esc(F.bio)}</p><dl class="q-facts"><dt>Based</dt><dd>Bandung, Indonesia</dd><dt>Studied</dt><dd>Visual Communication Design, ITENAS — GPA 3.85</dd><dt>Open to</dt><dd>Full-time, internship & freelance</dd></dl></div>
    <figure class="q-face" data-land data-ly="0"><img src="${F.portrait}" alt="Portrait of ${esc(F.name)}" loading="lazy"><figcaption class="mono">Observer, 2026</figcaption></figure></div>
    <div class="q-log">${F.cv.map(b => `<div class="q-lg"><h3 class="mono">${esc(b.h)}</h3>${b.rows.map(([y, r, o, , x]) => `<div><span class="mono">${esc(y || '')}</span><span><b>${esc(r)}</b>${o ? `<em>${esc(o)}</em>` : ''}${x ? `<i class="q-x">${esc(x)}</i>` : ''}</span></div>`).join('')}</div>`).join('')}</div></section>`;
  /* ---------- process (flight path) ---------- */
  const flight = (title = 'How a project flies') => `<section class="q-sec q-flight" id="process">${label('(02)', title)}<div class="q-fp"><svg viewBox="0 0 1000 300" preserveAspectRatio="none"><path id="qfp" d="M0,250 C90,250 120,70 230,80 S400,250 470,220 S620,40 720,60 S880,200 1000,170"/></svg>
    ${STAGES.map(([n, a, b, t], i) => `<div class="q-st" style="--x:${[1, 20.5, 40, 59.5, 79][i]}%;--y:${[46, 0, 52, 2, 50][i]}%"><span class="mono">${n} · ${a}</span><h3>${b}</h3><p>${esc(t)}</p></div>`).join('')}<i class="q-mini" id="qmini"></i></div></section>`;
  function wireFlight() { const p = $('#qfp'), m = $('#qmini'), s = $('.q-flight'); if (!p) return; const L = p.getTotalLength(); let ly = -1; loop(() => { if (scrollY === ly || !window.K.live(s)) return; ly = scrollY; const r = s.getBoundingClientRect(); const k = clamp((innerHeight * .8 - r.top) / (r.height * .9)); const pt = p.getPointAtLength(L * k), box = p.ownerSVGElement.getBoundingClientRect(); m.style.left = `${(pt.x / 1000 * box.width).toFixed(1)}px`; m.style.top = `${(pt.y / 300 * box.height + (box.top - s.querySelector('.q-fp').getBoundingClientRect().top)).toFixed(1)}px`; p.style.strokeDashoffset = (1 - k).toFixed(3); }); }
  /* ---------- hover peek ---------- */
  function peek() { document.body.insertAdjacentHTML('beforeend', '<div class="q-peek" id="qpk"><img alt=""></div>'); const pk = $('#qpk'), im = $('img', pk); let on = false;
    document.addEventListener('pointerover', e => { const a = e.target.closest('[data-peek]'); if (a) { const p = P[+a.dataset.peek]; im.src = src(p.slug, p.cover); pk.classList.add('on'); on = true; } else if (on) { pk.classList.remove('on'); on = false; } });
    addEventListener('pointermove', e => { pk.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 80}px)`; }, { passive: true }); }
  /* ---------- index layouts ---------- */
  const indexDial = () => `<section class="q-sec" id="index">${label('(04)', 'Index')}<div class="q-dial" id="qdial">${P.map((p, i) => { const a = -90 + i * 40, flip = a > 90 && a < 270; return `<a href="#${p.slug}" data-di="${i}" style="--a:${a}deg" class="${flip ? 'fl' : ''}"><span><i class="mono">${pad(i + 1)}</i> ${esc(p.title)}</span></a>`; }).join('')}
    <div class="q-dc" id="qdc" data-land data-ly="0"><span class="mono">Nine projects</span><b>Hover a name</b><span class="mono">2022—2026</span></div></div></section>`;
  function wireDial() { const dc = $('#qdc'); if (!dc) return; const def = dc.innerHTML; $$('#qdial a').forEach(a => { a.addEventListener('pointerenter', () => { const p = P[+a.dataset.di]; dc.innerHTML = `<img src="${src(p.slug, p.cover)}" alt=""><b>${esc(p.title)}</b><span class="mono">${esc(p.category)} · ${p.year}</span>`; dc.dataset.c = p.color; }); a.addEventListener('pointerleave', () => { dc.innerHTML = def; }); }); }
  const indexSpines = () => `<section class="q-sec" id="index">${label('(04)', 'Index')}<div class="q-spines">${P.map((p, i) => `<a href="#${p.slug}" data-peek="${i}" style="--pc:${p.color}"><span class="mono">${pad(i + 1)}</span><b>${esc(p.title)}</b><span class="m">${esc(p.category)} · ${p.year}</span><em>${LATIN[i]}</em></a>`).join('')}</div></section>`;
  const indexStagger = () => `<section class="q-sec" id="index">${label('(04)', 'Index')}<ol class="q-stag">${P.map((p, i) => `<li style="--o:${[0, 18, 6, 30, 12, 40, 4, 22, 34][i]}%"><a href="#${p.slug}" data-peek="${i}"><sup class="mono">${pad(i + 1)}</sup>${esc(p.title.toUpperCase())}<small class="mono">${esc(p.category)} · ${p.year}</small></a></li>`).join('')}</ol></section>`;
  /* ---------- contact layouts ---------- */
  const mapHTML = () => `<div class="q-map"><div class="ct-map" data-cursor="Drag"><div class="map-canvas"></div><div class="map-zoom"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">&minus;</button></div></div></div>`;
  const contactGuides = () => `<section class="q-sec" id="contact">${label('(05)', 'Contact')}<div class="q-cg"><div class="q-col big"><span>Say hello.</span></div>
    <div class="q-col" data-land data-ly="0"><span class="mono">Email</span><a href="mailto:${C.email}" id="email">${C.email}</a></div><div class="q-col dot"></div><div class="q-col"><span class="mono">Phone</span><span>${esc(C.phone)}</span></div>
    <div class="q-col"><span class="mono">Based in</span><span>${C.address.join(', ')}</span></div><div class="q-col"><span class="mono">Elsewhere</span><span><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${C.behance}" target="_blank" rel="noopener">Behance</a></span></div>
    <div class="q-cside">${mapHTML()}<button type="button" id="copy-email" class="mono">Copy email</button><p class="mono">Open for work · replies within two days</p></div></div></section>`;
  const contactArc = () => `<section class="q-sec" id="contact">${label('(05)', 'Contact')}<div class="q-ca"><svg viewBox="-300 -300 600 600"><defs><path id="qa1" d="M-250,0 A250,250 0 1 1 250,0"/><path id="qa2" d="M-205,0 A205,205 0 1 1 205,0"/><path id="qa3" d="M-165,0 A165,165 0 1 1 165,0"/></defs>
      <text class="a1"><textPath href="#qa1" startOffset="50%" text-anchor="middle">${C.email}</textPath></text><text class="a2"><textPath href="#qa2" startOffset="50%" text-anchor="middle">${esc(C.phone)} · ${C.address.join(', ')}</textPath></text><text class="a3"><textPath href="#qa3" startOffset="50%" text-anchor="middle">Open for work and collaborations</textPath></text></svg>
    <div class="q-cac" data-land data-ly="0"><b>Say hello.</b><a href="mailto:${C.email}" id="email" class="mono">${C.email}</a><button type="button" id="copy-email" class="mono">Copy email</button><span class="mono"><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${C.behance}" target="_blank" rel="noopener">Behance</a></span></div></div>${mapHTML()}</section>`;
  const contactStagger = () => `<section class="q-sec" id="contact">${label('(05)', 'Contact')}<p class="q-cs"><span style="--o:0%">WRITE TO</span><span style="--o:14%" data-land data-ly="0"><a href="mailto:${C.email}" id="email">${C.email.toUpperCase()}</a></span><span style="--o:4%">OR CALL</span><span style="--o:30%">${esc(C.phone)}</span><span style="--o:10%">FROM ${esc(C.address[0].toUpperCase())}</span></p>
    <div class="q-csb">${mapHTML()}<dl><dt class="mono">Elsewhere</dt><dd><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${C.behance}" target="_blank" rel="noopener">Behance</a></dd><dt class="mono">Address</dt><dd>${C.address.join(', ')}</dd><dt class="mono">Status</dt><dd>Open for work</dd></dl><button type="button" id="copy-email" class="mono">Copy email</button></div></section>`;
  const foot = line => `<footer class="k-foot mono"><span>&copy; 2026 Rifqi Najmu Syaqib</span><span>${line}</span><a href="#top">Back to the sky &uarr;</a></footer>`;
  /* ---------- page composer ---------- */
  function build({ code, word, sub, narr, base, book, state, ind, index, contact, nav, makeBird, ldSVG }) {
    const { loader, top, boot } = window.K; const IDX = { dial: indexDial, spines: indexSpines, stagger: indexStagger }, CON = { guides: contactGuides, arc: contactArc, stagger: contactStagger };
    loader(`<div class="q-ld"><div class="q-ldb">${ldSVG || birdSVG}</div><b>${word}</b><span class="mono">a portfolio in nine sightings</span></div>`, 2300);
    document.getElementById("app").innerHTML = `${top(code, [["work", nav], ["process", "Process"], ["about", "About"], ["index", "Index"], ["contact", "Contact"]])}
    ${cover({ word, sub, narr, hint: "Move · click to make it fly · scroll" })}${book.html()}${statement(state, ind)}${flight()}${notes()}${IDX[index]()}${CON[contact]()}${foot(word + " · Bandung")}`;
    const b = (makeBird || bird)({ base, scale: 1.9, home: () => scrollY < innerHeight * .8 ? { x: innerWidth * .5, y: innerHeight * .42 } : { x: innerWidth - 140, y: innerHeight - 150 } }); b.at(innerWidth * .5, innerHeight * .42);
    $("#top").addEventListener("click", e => { if (e.target.closest("a,button")) return; feathers(e.clientX, e.clientY, base); b.flutter(); });
    peek(); wireOrb(); wireFlight(); wireDial(); book.init(); boot();
  }
  window.Q = { build, birdSVG, mapHTML, LATIN, STAGES, label, bird, feathers, cover, statement, wireOrb, notes, flight, wireFlight, peek, indexDial, wireDial, indexSpines, indexStagger, contactGuides, contactArc, contactStagger, foot, $, $$ };
})();
