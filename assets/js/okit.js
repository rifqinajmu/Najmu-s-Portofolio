/* O-series kit (F1 × N3): glass butterfly that lands on [data-land] elements, metamorphosis process, latin names. */
(() => {
  const { P, esc, clamp, loop } = window.K;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const LATIN = ['Papilio temara', 'Papilio buyungensis', 'Volans nyalainus', 'Dubius sureaboutthat', 'Pamoria nusantara', 'Fitacademia socialis', 'Curatrix caregiver', 'Impalia minor', 'Nuptialis digitalis'];
  const STAGES = [['I', 'Egg', 'Research', 'Every project starts small and quiet: the brief, the market, the people. I collect before I draw.'], ['II', 'Larva', 'Exploration', 'Then I eat through ideas. Sketches, moodboards, wrong turns. Quantity first, so the right direction can appear.'], ['III', 'Chrysalis', 'Refinement', 'The idea closes in on itself. Type, colour, grid and system are tested until every part holds.'], ['IV', 'Wing', 'Release', 'The work flies on its own: printed, posted, worn, watched. Then I listen, and the cycle begins again.']];
  const process = () => `<div class="o-proc">${STAGES.map(([n, a, b, t]) => `<div data-p><span class="mono">${n} · ${a}</span><h3>${b}</h3><p>${esc(t)}</p></div>`).join('')}</div>`;
  const WING = 'M100,98 C80,20 30,-6 8,22 C-8,46 12,84 100,102 Z M100,104 C60,108 26,130 34,162 C42,186 86,170 100,108 Z';
  const wing = s => `<div class="o-w ${s}"><i style="clip-path:path('${WING}')"></i><svg viewBox="0 0 100 200"><path d="${WING}"/><path class="v" d="M100,100 C70,70 40,40 18,30 M100,100 C70,90 40,80 14,60 M100,106 C70,130 50,150 40,160"/></svg></div>`;
  /* glass butterfly. opts.home(): {x,y} where it rests when the cursor is idle/away. */
  function butterfly({ scale = 1.6, base = '#A9D9D3', home } = {}) {
    document.body.insertAdjacentHTML('beforeend', `<div class="o-bf" id="obf" aria-hidden="true" style="--wc:${base}"><div class="o-bi">${wing('l')}${wing('r')}<b></b></div></div>`);
    const bf = $('#obf'), ws = $$('.o-w', bf); let x = innerWidth * .5, y = -80, lx = x, ly = y, mx = null, my = null, land = null, flap = 0, idle = 0, sp = 0;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; idle = 0; }, { passive: true });
    document.addEventListener('pointerover', e => { const t = e.target.closest('[data-land]'); if (t === land) return; land = t; bf.style.setProperty('--wc', t ? (t.dataset.c || base) : base); });
    const api = { at(px, py) { x = lx = px; y = ly = py; }, land: el => { land = el; }, color: c => bf.style.setProperty('--wc', c || base) };
    loop(now => { const t = now / 1000; idle += 1 / 60; let tx, ty, k = .045;
      if (land && document.contains(land)) { const r = land.getBoundingClientRect(); tx = r.left + r.width * (+land.dataset.lx || .5); ty = r.top + r.height * (+land.dataset.ly || 0) - 8; k = .09; }
      else if (home && (mx == null || idle > 2.5)) { const h = home(); tx = h.x + Math.sin(t * .9) * 26; ty = h.y + Math.cos(t * 1.3) * 18; }
      else { tx = (mx ?? innerWidth / 2) + 70 + Math.sin(t * 1.2) * 30; ty = (my ?? innerHeight / 2) - 70 + Math.cos(t * 1.6) * 24; }
      x += (tx - x) * k; y += (ty - y) * k; sp = Math.hypot(x - lx, y - ly); lx = x; ly = y; const rest = land && sp < 1;
      flap += rest ? .05 : .2 + sp * .02; const open = rest ? 55 + Math.sin(flap) * 12 : 28 + Math.abs(Math.sin(flap)) * 54;
      ws.forEach(w => w.style.setProperty('--a', `${open.toFixed(1)}deg`)); bf.style.transform = `translate3d(${(x - 50).toFixed(1)}px, ${(y - 50).toFixed(1)}px, 0) rotate(${clamp((tx - x) * .08, -18, 18).toFixed(1)}deg) scale(${scale})`; });
    return api;
  }
  window.O = { LATIN, STAGES, process, butterfly, $, $$ };
})();
