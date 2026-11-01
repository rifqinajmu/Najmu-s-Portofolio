/* Q1 Field Guide — mint dusk at the bottom, a cloth-bound field guide. */
:root { --low: #8EC3B9; --low2: #C9B9E8; }
.q1-bk { position: relative; height: calc(var(--n) * 70svh); }
.q1-in { position: sticky; top: 0; height: 100svh; display: grid; grid-template-rows: auto 1fr auto; padding: 70px var(--gr) 22px var(--gl); }
.q1-in .q-lab { margin-bottom: 0; }
.q1-book { position: relative; align-self: center; justify-self: center; width: min(1080px, 84vw, 128svh); aspect-ratio: 1.58; perspective: 2400px; transform-style: preserve-3d; }
.q1-cover { position: absolute; inset: -12px -14px -14px -14px; border-radius: 6px; background: var(--grain), linear-gradient(135deg, #2F5E58, #24463F); box-shadow: 0 40px 70px -40px rgba(20,40,40,.6); }
.q1-pg { position: absolute; top: 0; bottom: 0; width: 50%; box-sizing: border-box; padding: clamp(18px, 2.6vw, 40px); background: var(--grain), #FAF8F2; overflow: hidden; backface-visibility: hidden; display: grid; align-content: start; gap: 10px; }
.q1-l { left: 0; box-shadow: inset -30px 0 40px -30px rgba(0,0,0,.25); }
.q1-leaf { position: absolute; left: 50%; top: 0; bottom: 0; width: 50%; transform-origin: left center; transform-style: preserve-3d; }
.q1-leaf .q1-pg { left: 0; width: 100%; cursor: pointer; } .q1-leaf .fr { box-shadow: inset 30px 0 40px -30px rgba(0,0,0,.22); } .q1-leaf .bk { transform: rotateY(180deg); box-shadow: inset -30px 0 40px -30px rgba(0,0,0,.25); }
.q1-pg .sh { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(90deg, rgba(0,0,0,.18), transparent 60%); opacity: var(--sh, 0); }
.q1-pg h3 { margin: 4px 0 0; font-family: var(--display); font-weight: 500; font-size: clamp(26px, 2.6vw, 42px); line-height: 1.05; } .q1-pg .lat { font-family: var(--serif); font-size: 18px; color: var(--ink-2); } .q1-pg p { margin: 4px 0; font-size: 14px; line-height: 1.55; color: #3E4441; max-width: 44ch; }
.q1-pg dl { display: grid; grid-template-columns: 80px 1fr; gap: 5px 12px; margin: 8px 0; font-size: 13px; } .q1-pg dt { font-family: var(--mono); font-size: 9px; text-transform: uppercase; color: var(--ink-2); padding-top: 3px; } .q1-pg dd { margin: 0; } .q1-pg a { justify-self: start; border-bottom: 1px solid; font-size: 14px; }
.q1-pg figure { margin: 0; height: 100%; display: grid; grid-template-rows: minmax(0, 1fr) auto; gap: 10px; } .q1-pg .k-shot { height: 100%; padding: 0; background: transparent; } .q1-pg figcaption { font-family: var(--serif); font-style: italic; font-size: 14px; color: var(--ink-2); } .q1-leaf .fr { align-content: stretch; grid-template-rows: minmax(0, 1fr); }
.pg { position: absolute; bottom: 12px; font-family: var(--mono); font-size: 10px; color: var(--ink-2); } .q1-l .pg, .bk .pg { left: 22px; } .fr .pg { right: 22px; }
.q1-rib { position: absolute; z-index: 200; left: 70%; top: -14px; width: 12px; height: 70px; background: #C6466D; clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 86%, 0 100%); transform: translateZ(2px); }
.q1-tabs { position: absolute; right: -40px; top: 6%; bottom: 6%; display: grid; grid-auto-rows: 1fr; gap: 3px; transform: translateZ(1px); }
.q1-tabs button { width: 26px; border-radius: 0 6px 6px 0; background: #E9E5DA; font: 400 11px var(--mono); color: var(--ink-2); box-shadow: 0 2px 6px -3px rgba(0,0,0,.3); } .q1-tabs button.on, .q1-tabs button:hover { background: #C6466D; color: #fff; }
.q1-cap { display: flex; justify-content: space-between; }
@media (max-width: 900px) { .q1-book { width: 92vw; aspect-ratio: .8; } .q1-l { display: none; } .q1-leaf { left: 0; width: 100%; } .q1-tabs { display: none; } .q1-pg { width: 100%; } }
/* R1 Layang — dawn sky blue + pink at the bottom; iridescent glass swallow. */
:root { --low: #9FC9EE; --low2: #F5B9C9; }
.q1-cover { background: var(--grain), linear-gradient(135deg, #3A4C7A, #26355C); }
.sw { position: fixed; left: 0; top: 0; z-index: 140; width: 150px; height: 120px; pointer-events: none; will-change: transform; transform-origin: 75px 60px; }
.sw svg { width: 150px; height: 120px; overflow: visible; filter: drop-shadow(0 16px 14px rgba(50,60,110,.22)); }
.sw .pf { fill: url(#rIri); stroke: rgba(255,255,255,.9); stroke-width: .9; opacity: calc(1 - var(--k) * .08); }
.sw .cov { fill: rgba(70,90,160,.75); stroke: rgba(255,255,255,.8); stroke-width: .8; } .sw .cov2 { fill: rgba(40,55,110,.85); }
.sw .sw-tail { fill: url(#rIri); stroke: rgba(255,255,255,.9); stroke-width: .8; } .sw .sw-body { fill: url(#rBody); stroke: rgba(255,255,255,.85); stroke-width: .8; } .sw .sw-hi { fill: none; stroke: rgba(255,255,255,.7); stroke-width: 1.4; stroke-linecap: round; }
.sw-trail { position: fixed; inset: 0; z-index: 139; pointer-events: none; width: 100%; height: 100%; }
.q1-rib { background: #E37BA0; }
/* ===== R1 v2 ===== */
:root { --g-1: 10px; --g0: 16px; --g1: 26px; --g2: 42px; --g3: clamp(46px, 4.7vw, 68px); --g4: clamp(68px, 7.6vw, 110px); --text: "Geist", Arial, sans-serif; }
body.r1 { font-size: var(--g0); } .r1 .mono { font-size: var(--g-1); }
/* golden-ratio type on R1 */
.r1 .q-narr { font-size: var(--g0); line-height: 1.6; } .r1 .q-vert { font-family: var(--display); font-size: var(--g3); letter-spacing: .12em; } .r1 .k-ctype { font-size: var(--g1); }
.r1 .q-lab h2 { font-family: var(--display); font-size: var(--g1); } .r1 .q-st h3 { font-family: var(--display); font-size: var(--g1); } .r1 .q-st p { font-size: var(--g0); }
.r1 .q-state p { font-size: var(--g3); } .r1 .q-ntx .lead { font-family: "Newsreader", Georgia, serif; font-size: var(--g1); line-height: 1.38; } .r1 .q-ntx > p { font-size: var(--g0); }
.r1 .q-lg b { font-family: var(--text); font-weight: 500; font-size: var(--g0); } .r1 .q-lg em { font-family: var(--text); font-style: normal; font-size: 13px; color: #5E6368; } .r1 .q-lg h3 { font-size: var(--g-1); }
.r1 .q-dial a span { font-family: "Newsreader", Georgia, serif; font-size: var(--g0); } .r1 .q-dc b { font-family: var(--display); font-size: var(--g1); line-height: 1; }
.r1 .s1-pg p.toc.t1 { font-size: var(--g2) !important; }
/* remove the blurred orb, the old tabs */
.r1 .q-orb { display: none !important; } .q1-tabs { display: none !important; }
/* shelf: smaller spine text */
.r1 .s1-sp .sp b { font-size: 12px !important; letter-spacing: .04em !important; } .r1 .s1-sp.serif .sp b, .r1 .s1-sp.serif2 .sp b { font-size: 15px !important; } .r1 .s1-sp .no, .r1 .s1-sp .yr { font-size: 7px !important; }
.r1 .s1-work .q-lab { margin-bottom: 22px; }
/* dial stop-motion */
.r1-sm { display: grid; place-items: center; width: 62%; aspect-ratio: 1; overflow: hidden; border-radius: 2px; } .r1-sm img { width: 100%; height: 100%; object-fit: cover; }
.r1 .q-dc { width: 32%; gap: 8px; }
/* minimal contact */
.r1-cg { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 5vw; padding: 10px 0 70px; align-items: start; }
.r1-cg h2 { margin: 0; font-family: var(--display); font-weight: 400; font-size: var(--g4); line-height: .95; }
.r1-cr { display: grid; gap: 14px; } .r1-cr .s1-mail { font-family: "Newsreader", Georgia, serif; font-size: var(--g2); justify-self: start; }
.r1-cr #copy-email { justify-self: start; border: 1px solid var(--line); padding: 8px 12px; background: none; }
.r1-cr dl { display: grid; grid-template-columns: 110px 1fr; margin: 14px 0 0; font-size: var(--g0); } .r1-cr dt, .r1-cr dd { margin: 0; padding: 11px 0; border-top: 1px solid var(--line); } .r1-cr dt { font-family: var(--mono); font-size: var(--g-1); text-transform: uppercase; color: var(--ink-2); padding-top: 14px; } .r1-cr dd a { border-bottom: 1px solid; }
/* band on R1: transparent so the page colour shows */
.r1 .s1-band { background: transparent !important; }
/* intro: swallow draws itself, flaps, flies across leaving a trail; title card rises */
.r1 .loader { background: #F3F3EF; display: grid; place-items: center; overflow: hidden; }
.r1-ld { position: relative; width: 100vw; height: 100svh; display: grid; place-items: center; }
.r1-lb { position: absolute; left: 50%; top: 38%; width: 300px; height: 240px; margin: -120px 0 0 -150px; animation: r1Fly 1.3s 1.6s cubic-bezier(.6, 0, .4, 1) forwards; }
.r1-lb svg { width: 100%; height: 100%; overflow: visible; }
.r1-lb path { stroke: #2E3E66; stroke-width: 1; fill-opacity: 0; stroke-dasharray: 600; stroke-dashoffset: 600; animation: r1Dr 1.2s cubic-bezier(.4, 0, .2, 1) forwards, r1Fi .5s 1.1s forwards; }
.r1-lb .sw-l, .r1-lb .sw-r { animation: r1Fl .32s 1.15s ease-in-out 4 alternate; transform-origin: -6px -12px; }
@keyframes r1Dr { to { stroke-dashoffset: 0; } } @keyframes r1Fi { to { fill-opacity: 1; } } @keyframes r1Fl { to { transform: scaleX(.55) rotate(14deg); } }
@keyframes r1Fly { to { transform: translate(62vw, -46svh) rotate(28deg) scale(.4); opacity: 0; } }
.r1-tr { position: absolute; left: 50%; top: 38%; width: 70vw; height: 2px; transform-origin: 0 50%; rotate: -36deg; background: linear-gradient(90deg, rgba(159,201,238,.9), rgba(245,185,201,.6), transparent); transform: scaleX(0); animation: r1Tr 1.3s 1.6s cubic-bezier(.6, 0, .4, 1) forwards; }
@keyframes r1Tr { 60% { transform: scaleX(1); opacity: 1; } to { transform: scaleX(1); opacity: 0; } }
.r1-ld .ld-card { position: absolute; top: 58%; font-size: var(--g1); line-height: 1.14; color: var(--ink); }
.r1-ld .ld-card p > span { animation-delay: 1.9s !important; } .r1-ld .ld-card .c2 span { animation-delay: 2.05s !important; } .r1-ld .ld-card .c3 span { animation-delay: 2.2s !important; }
.r1-lt { position: absolute; bottom: 28px; left: 50%; translate: -50% 0; }
/* big still swallow on the landing */
.r1 .sw { transition: filter .6s; }
.r1-cr .q-map { margin-top: 22px; aspect-ratio: 16 / 9; } .r1-cr > .mono { margin-top: 4px; }
/* solid book colours, no statement, short bottom gradient */
.r1 .q-state { display: none !important; }
body.r1::after { background: radial-gradient(50% 12% at 78% 100%, color-mix(in srgb, var(--low2) 70%, transparent), transparent 80%), linear-gradient(to top, var(--low) 0%, color-mix(in srgb, var(--low) 40%, var(--bg)) 7%, var(--bg) 18%) !important; }

/* cover name italic */
.r1 .k-ctype .name, .r1 .k-ctype .by { font-style: italic; }
/* vertical concept word: lowercase serif, less spacing */
.r1 .q-vert { letter-spacing: .04em; font-style: italic; }
/* contact portrait */
.r1-cl { display: grid; gap: 28px; align-content: start; } .r1-me { margin: 0; width: min(320px, 70%); } .r1-me img { display: block; width: 100%; height: auto; filter: grayscale(.2); } .r1-me figcaption { margin-top: 8px; }
/* top menu: glass pill with numbered links */
.r1 .k-top { align-items: center; padding-top: 12px; background: none !important; }
.r1 .k-top nav { gap: 2px; padding: 4px; border-radius: 999px; background: rgba(255,255,255,.55); -webkit-backdrop-filter: blur(14px) saturate(1.4); backdrop-filter: blur(14px) saturate(1.4); box-shadow: inset 0 0 0 1px rgba(255,255,255,.8), 0 8px 24px -16px rgba(20,21,22,.35); counter-reset: nav; }
.r1 .k-top nav a { counter-increment: nav; padding: 7px 14px; border-radius: 999px; font-size: 13px; transition: background .3s, color .3s; } .r1 .k-top nav a::before { content: "0" counter(nav) " "; font-family: var(--mono); font-size: 9px; color: var(--ink-2); margin-right: 4px; vertical-align: 1px; }
.r1 .k-top nav a:hover { background: var(--ink); color: #fff; font-family: inherit; font-style: normal; } .r1 .k-top nav a:hover::before { color: rgba(255,255,255,.6); }
.r1 .k-top > a { font-family: var(--display); font-style: italic; font-size: 18px; }

/* gradient books in project colour + portfolio tone */
.r1 .s1-sp .sp, .r1 .s1-sp .sp::before { background: linear-gradient(180deg, var(--b), var(--a) 78%) !important; } .r1 .s1-sp .face { background: linear-gradient(160deg, var(--b), var(--a)) !important; }
.r1 .s1-sp .sp::after { background: linear-gradient(90deg, rgba(0,0,0,.14), transparent 16%, rgba(255,255,255,.16) 50%, transparent 84%, rgba(0,0,0,.16)) !important; }
/* reader left page: original layout */
.r1 .s1-pg.l { display: grid !important; grid-template-rows: none; justify-items: start; align-content: center !important; text-align: left; gap: 0 !important; padding: clamp(26px, 3.4vw, 54px) !important; }
.r1 .s1-pg.l .s1-lab { margin-bottom: 26px; max-width: 360px; } .r1 .s1-pg.l > .mono { margin-bottom: 10px; }
.r1 .s1-pg.l h3 { margin: 0 0 6px; font-family: var(--display); font-weight: 400; font-size: var(--g3) !important; line-height: .95; } .r1 .s1-pg.l .nm { margin: 0 0 16px; font-family: "Newsreader", Georgia, serif; font-style: italic; font-size: var(--g1) !important; color: var(--ink-2); }
.r1 .s1-pg.l p:not(.nm) { margin: 0 0 22px; max-width: 44ch; font-size: var(--g0) !important; line-height: 1.55; color: #4E5357 !important; text-indent: 0; text-align: left; }
.r1 .s1-pg.l dl { display: grid; grid-template-columns: 90px 1fr; gap: 6px 14px; margin: 0 0 24px; font-size: 13px; } .r1 .s1-pg.l dt { font-family: var(--mono); font-size: var(--g-1); text-transform: uppercase; color: var(--ink-2); padding-top: 2px; } .r1 .s1-pg.l dd { margin: 0; }
.r1 .s1-pg.l .s1-open { align-self: start; padding-left: 0; }
/* brand: sans, upright */
.r1 .k-top > a { font-family: var(--text) !important; font-style: normal !important; font-size: 14px !important; font-weight: 500; letter-spacing: -.01em; }
/* shelf + hardcover guide in one sticky view */
.r1-bk { height: calc(var(--n) * 70svh); }
.r1-bk .q1-in { grid-template-rows: auto auto minmax(0, 1fr) auto; gap: 12px; }
.r1-shelf { height: min(24svh, 220px) !important; justify-content: center; } .r1-shelf .s1-sp { cursor: pointer; }
.r1-shelf .s1-sp.on { flex-basis: var(--w) !important; width: var(--w) !important; height: var(--h) !important; translate: 0 -14px; }
.r1-shelf .s1-sp.on .sp { opacity: 1 !important; } .r1-shelf .s1-sp.on .face { opacity: 0 !important; }
.r1-bk .q1-book { width: min(1000px, 80vw, calc((100svh - 70px - min(24svh, 220px) - 120px) * 1.58)); }
.r1 .q1-cover { background: var(--grain), linear-gradient(135deg, #3A4C7A, #26355C); }
.r1-shelf .s1-sp .yr { display: none; } .r1-shelf .s1-sp .sp b { max-height: 88% !important; font-size: 10px !important; } .r1-shelf .s1-sp.serif .sp b, .r1-shelf .s1-sp.serif2 .sp b { font-size: 13px !important; }
/* opened book on the shelf = full-bleed cover image */
.r1 .s1-sp .win { padding: 0 !important; width: 100%; height: 100%; } .r1 .s1-sp .win .dev, .r1 .s1-sp .win img { width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; object-fit: cover; object-position: 50% 50%; box-shadow: none !important; display: block; }
.r1-shelf .s1-sp.on { flex-basis: min(13vw, 170px) !important; width: min(13vw, 170px) !important; height: 100% !important; translate: 0 0; }
.r1-shelf .s1-sp.on .sp { opacity: 0 !important; } .r1-shelf .s1-sp.on .face { opacity: 1 !important; transform: none !important; }
/* hardcover look, S1-style interaction */
.r1-work { padding-top: clamp(80px, 8vw, 120px); }
.r1-shelf2 { height: min(36svh, 340px) !important; justify-content: center; }
.r1-shelf2 .s1-sp.on { flex-basis: min(17vw, 230px) !important; width: min(17vw, 230px) !important; height: 100% !important; }
.r1-shelf2 .s1-sp.on .sp { opacity: 0 !important; } .r1-shelf2 .s1-sp.on .face { opacity: 1 !important; transform: none !important; }
.r1-hc { position: relative; display: grid; grid-template-columns: 1fr 1fr; margin-top: 26px; height: min(66svh, 640px); padding: 14px; border-radius: 6px; background: var(--grain), linear-gradient(135deg, #3A4C7A, #26355C); box-shadow: 0 40px 70px -40px rgba(20,30,60,.6); }
.r1-pg { position: relative; overflow: hidden; background: var(--grain), #FAF8F2; padding: clamp(22px, 3vw, 48px); display: grid; align-content: start; gap: 10px; }
.r1-pg.l { box-shadow: inset -30px 0 40px -30px rgba(0,0,0,.25); } .r1-pg.r { box-shadow: inset 30px 0 40px -30px rgba(0,0,0,.22); grid-template-rows: minmax(0, 1fr); }
.r1-gut { position: absolute; left: 50%; top: 14px; bottom: 14px; width: 1px; background: rgba(0,0,0,.12); }
.r1-hc .q1-rib { left: 70%; top: -10px; }
.r1-hc.turn .r1-pg > * { animation: r1Fd .45s ease both; } @keyframes r1Fd { from { opacity: 0; } }
.r1-pg h3 { margin: 4px 0 0; font-family: var(--display); font-weight: 400; font-size: var(--g3); line-height: .95; } .r1-pg .lat { font-family: "Newsreader", Georgia, serif; font-style: italic; font-size: var(--g1); color: var(--ink-2); }
.r1-pg p { margin: 4px 0; font-size: var(--g0); line-height: 1.55; color: #3E4441; max-width: 44ch; }
.r1-pg dl { display: grid; grid-template-columns: 90px 1fr; gap: 6px 14px; margin: 10px 0; font-size: 14px; } .r1-pg dt { font-family: var(--mono); font-size: var(--g-1); text-transform: uppercase; color: var(--ink-2); padding-top: 3px; } .r1-pg dd { margin: 0; } .r1-pg a { justify-self: start; border-bottom: 1px solid; }
.r1-pg .pg { position: absolute; bottom: 14px; font-family: var(--mono); font-size: 10px; color: var(--ink-2); } .r1-pg.l .pg { left: 22px; } .r1-pg.r .pg { right: 22px; }
.r1-fig { margin: 0; height: 100%; display: grid; grid-template-rows: minmax(0, 1fr) auto; gap: 12px; } .r1-fr { min-height: 0; display: grid; place-items: center; } .r1-fr img { width: 100%; height: auto; max-height: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
.r1-fig figcaption { font-family: "Newsreader", Georgia, serif; font-style: italic; font-size: var(--g0); color: var(--ink-2); }
/* left page: S1 table-of-contents typography */
.r1-pg.l { display: flex !important; flex-direction: column; align-items: center; justify-content: center; gap: 24px !important; text-align: center; }
.r1-pg.l .toc { margin: 0; font-family: "Newsreader", Georgia, serif; font-size: var(--g1); line-height: 1.12; color: var(--ink); max-width: 22em; }
.r1-pg.l .toc.t1 { font-size: var(--g2); line-height: 1.05; } .r1-pg.l .toc em { font-style: italic; }
.r1-pg.l .toc small { font-family: "Newsreader", Georgia, serif; font-size: var(--g-1); vertical-align: .55em; margin-right: .3em; color: var(--ink-2); }
.r1-pg.l .ind { margin: 0; max-width: 34em; text-align: justify; hyphens: auto; text-indent: 2.6em; font-family: "Newsreader", Georgia, serif; font-size: var(--g0); line-height: 1.5; color: #3A3D40; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; overflow: hidden; }
.r1-pg.l .tocs { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 30px; max-width: 34em; } .r1-pg.l .tocs .toc { font-size: var(--g0); line-height: 1.25; }
.r1-pg.l .s1-open { align-self: center; }
/* opened cover = dossier folder, no image */
.r1 .s1-sp .face.dos { display: block !important; padding: 0 !important; overflow: hidden; background: var(--grain), linear-gradient(165deg, var(--b), var(--a)) !important; border-radius: 2px 8px 8px 2px; color: var(--t); }
.face.dos .rib { position: absolute; left: 7%; top: 0; bottom: 0; width: 6%; background: repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 1px, transparent 1px 4px); }
.face.dos .hole { position: absolute; left: 3%; width: 9px; height: 9px; border-radius: 50%; background: #F3F3EF; box-shadow: inset 0 0 0 2px #E2668C; } .face.dos .h1 { top: 26%; } .face.dos .h2 { bottom: 26%; }
.face.dos .cat { position: absolute; right: 8%; top: 5%; font-family: "Newsreader", Georgia, serif; font-size: 14px; opacity: .8; }
.face.dos .o-label { position: absolute; left: 22%; right: 7%; top: 16%; display: grid; grid-template-columns: 1fr 1fr; padding: 6px 8px; background: #F7F6F2; color: #2A2B2C; rotate: -2deg; box-shadow: 0 2px 4px rgba(0,0,0,.14); }
.face.dos .o-label > span { display: grid; padding: 3px 2px; border-bottom: 1px solid rgba(0,0,0,.16); } .face.dos .o-label .w { grid-column: 1 / -1; border: 0; }
.face.dos .o-label b { font: 400 6px var(--mono); text-transform: uppercase; color: #77756F; } .face.dos .o-label em { font-family: "Newsreader", Georgia, serif; font-size: 10px; line-height: 1.15; }
.face.dos .o-dot { width: 7px; height: 7px; } .face.dos .ttl { position: absolute; left: 18%; bottom: 5%; font-family: var(--text); font-size: 17px; opacity: .85; }
/* project page: no cover image, title straight away, no grey block */
.r1 .kp-hero { height: auto !important; min-height: 0; margin-top: 0; padding: 90px 0 30px; background: none !important; overflow: visible; }
.r1 .kp-hero img, .r1 .kp-hero::after { display: none !important; }
.r1 .kp-title { position: relative !important; left: auto; right: auto; bottom: auto; padding: 0 var(--gr) 0 var(--gl); transform: none !important; }
.r1 .kp-bar { background: linear-gradient(var(--bg) 70%, transparent) !important; }
.r1 .project.kp { background: var(--bg) !important; }
.r1-hc .q1-rib { z-index: 3 !important; }
/* ===== one glass-rounded language: nav, spec card, dial centre, open link ===== */
.r1 { --glass: linear-gradient(150deg, rgba(255,255,255,.7), rgba(255,255,255,.32) 55%, rgba(255,255,255,.52)); --glass-sh: inset 0 1px 0 rgba(255,255,255,.95), inset 0 -1px 0 rgba(20,21,22,.05), 0 0 0 1px rgba(255,255,255,.65), 0 14px 34px -20px rgba(20,21,22,.35); }
.r1 .k-top nav, .r1 .q-spec, .r1 .q-dc, .r1 .s1-open { background: var(--glass) !important; -webkit-backdrop-filter: blur(16px) saturate(1.5); backdrop-filter: blur(16px) saturate(1.5); box-shadow: var(--glass-sh) !important; }
.r1 .k-top nav { border-radius: 999px; }
.r1 .q-spec { border-radius: 22px; padding: 18px 22px !important; }
.r1 .q-dc { border-radius: 50%; }
.r1 .s1-open { border-radius: 999px; padding: 10px 22px 12px !important; overflow: hidden; align-items: center !important; }
.r1 .s1-open .stk { left: 22px; right: 22px; bottom: 6px; height: 3px; }
.r1 .s1-open:hover { background: linear-gradient(150deg, color-mix(in srgb, var(--pc) 22%, rgba(255,255,255,.75)), rgba(255,255,255,.4)) !important; }
/* lighter glass */
.r1 { --glass: linear-gradient(150deg, rgba(255,255,255,.34), rgba(255,255,255,.1) 55%, rgba(255,255,255,.22)); --glass-sh: inset 0 1px 0 rgba(255,255,255,.75), inset 0 -1px 0 rgba(20,21,22,.04), 0 0 0 1px rgba(255,255,255,.45), 0 12px 30px -22px rgba(20,21,22,.3); }
.r1 .k-top nav, .r1 .q-spec, .r1 .q-dc, .r1 .s1-open { -webkit-backdrop-filter: blur(10px) saturate(1.3); backdrop-filter: blur(10px) saturate(1.3); }
.r1 .q-spec { border-radius: 0 !important; }
/* smaller open-book pill */
.r1 .s1-open { padding: 6px 16px 8px !important; gap: 8px !important; border-bottom: 0 !important; } .r1 .s1-open em, .r1 .s1-open b { font-size: var(--g0) !important; } .r1 .s1-open small { font-size: 9px; }
.r1 .s1-open .stk { left: 16px; right: 16px; bottom: 4px; height: 2px; }
/* minimal left page, same typography */
.r1-pg.l { gap: 18px !important; }
.r1-pg.l .toc.t1 { font-size: var(--g1) !important; line-height: 1.12; }
.r1-pg.l .ind { max-width: 30em; font-size: 15px; line-height: 1.55; -webkit-line-clamp: 4; }
.r1-pg.l .tocs { grid-template-columns: 1fr; gap: 4px; justify-items: center; } .r1-pg.l .tocs .toc { font-size: 14px; line-height: 1.3; }
/* project page: compact top so the showcase peeks above the fold */
.r1 .kp-hero { padding: 64px 0 10px !important; }
.r1 .kp-title h1 { font-size: var(--g3) !important; } .r1 .kp-title > .mono { margin-bottom: 8px !important; } .r1 .kp-title p { font-size: var(--g0) !important; margin-top: 4px !important; }
.r1 .kp-body { padding-top: 18px !important; padding-bottom: 24px !important; row-gap: 18px !important; }
.r1 .kp-lead { font-size: var(--g1) !important; line-height: 1.2 !important; margin-bottom: 0 !important; }
.r1 .kp-txt p { font-size: 14px !important; } .r1 .kp-spec > div { padding: 6px 0 !important; font-size: 13px; }
.r1 .project .gal { margin-top: 0 !important; padding-top: 8px !important; }
/* intro: text centred, a coloured sketch of the bird appears in the middle, trail line kept */
.r1-ld .ld-card { top: 50% !important; left: 50%; translate: -50% 18px; white-space: nowrap; }
.r1-lb { top: 50% !important; margin: -190px 0 0 -110px !important; width: 220px !important; height: 176px !important; animation: r1Pop .9s .15s cubic-bezier(.2, .7, .2, 1) both, r1Fly 1.3s 1.9s cubic-bezier(.6, 0, .4, 1) forwards !important; }
.r1-lb path { fill-opacity: .9 !important; stroke-width: 1.1 !important; animation: r1Dr 1.2s .15s cubic-bezier(.4, 0, .2, 1) forwards !important; }
@keyframes r1Pop { from { opacity: 0; transform: scale(.85); } }
.r1-tr { top: 50% !important; margin-top: -110px; animation-delay: 1.9s !important; }
.r1-ld .ld-card p > span { animation-delay: .5s !important; } .r1-ld .ld-card .c2 span { animation-delay: .65s !important; } .r1-ld .ld-card .c3 span { animation-delay: .8s !important; }
/* nav hover: soft dawn gradient instead of black */
.r1 .k-top nav a:hover { background: linear-gradient(110deg, #B9D3F2, #D9C6F0 50%, #F5C3D3) !important; color: var(--ink) !important; }
.r1 .k-top nav a:hover::before { color: rgba(30,35,33,.55) !important; }
/* project body: spec in 2 compact columns, lead+text stacked tight (showcase visible above the fold) */
.r1 .kp-body { align-items: start; grid-template-rows: auto 1fr; }
.r1 .kp-spec { grid-column: 8 / -1 !important; grid-template-columns: 1fr 1fr; gap: 0 18px !important; }
.r1 .kp-spec > div { padding: 5px 0 !important; font-size: 12px !important; }
.r1 .kp-txt { align-self: start; } .r1 .kp-txt p { margin: 0 0 8px; }
/* intro bird: coloured sketch (gradients like the flying swallow) */
.r1-lb .pf { fill: url(#rIri); stroke: #4A5A8E; } .r1-lb .cov { fill: rgba(70,90,160,.75); } .r1-lb .cov2 { fill: rgba(40,55,110,.85); }
.r1-lb .sw-tail { fill: url(#rIri); } .r1-lb .sw-body { fill: url(#rBody); } .r1-lb .sw-hi { fill: none; stroke: rgba(255,255,255,.7); }
.r1-lb svg { filter: drop-shadow(0 14px 16px rgba(50,60,110,.22)); }
/* page fold */
.r1-hc { perspective: 2200px; touch-action: pan-y; user-select: none; cursor: grab; } .r1-hc:active { cursor: grabbing; }
.r1-leaf { position: absolute; top: 14px; bottom: 14px; width: calc(50% - 14px); transform-style: preserve-3d; z-index: 4; transition: transform .8s cubic-bezier(.45, .05, .25, 1); pointer-events: none; }
.r1-leaf.nx { left: 50%; transform-origin: 0 50%; } .r1-leaf.pv { left: 14px; transform-origin: 100% 50%; }
.r1-leaf.nx.go { transform: rotateY(-180deg); } .r1-leaf.pv.go { transform: rotateY(180deg); }
.r1-leaf > .r1-pg { position: absolute; inset: 0; backface-visibility: hidden; } .r1-leaf > .bkf { transform: rotateY(180deg); }
.r1-leaf > .r1-pg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.18), transparent 60%); opacity: 0; transition: opacity .8s; } .r1-leaf.go > .r1-pg::after { opacity: 1; }
.r1-sw { margin-left: 8px; width: 26px; height: 26px; border-radius: 50%; border: 0; background: var(--glass); box-shadow: var(--glass-sh); font: inherit; cursor: pointer; } .r1-sw:hover { background: linear-gradient(110deg, #B9D3F2, #F5C3D3); }
/* contact heading */
.r1-cg h2 { font-size: var(--g3) !important; line-height: 1 !important; max-width: 9em; }
/* left page back to the fuller TOC layout */
.r1-pg.l { gap: 26px !important; }
.r1-pg.l .toc.t1 { font-size: var(--g2) !important; line-height: 1.05; }
.r1-pg.l .ind { max-width: 34em; font-size: var(--g0); -webkit-line-clamp: 8; }
.r1-pg.l .tocs { grid-template-columns: 1fr 1fr; gap: 10px 30px; justify-items: stretch; } .r1-pg.l .tocs .toc { font-size: var(--g0); line-height: 1.25; }
.r1-hc { perspective: 4200px !important; }
/* intro: coloured swallows flying around the centred title */
.r1-flock { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.r1-fb { position: absolute; left: 0; top: 0; width: 150px; height: 120px; margin: -60px 0 0 -75px; animation: r1Path 2.8s var(--d) cubic-bezier(.4, .1, .4, .9) both; }
.r1-fb svg { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 12px 14px rgba(50,60,110,.2)); rotate: var(--r); scale: var(--s); }
@keyframes r1Path { 0% { transform: translate(var(--x0), var(--y0)); opacity: 0; } 12% { opacity: 1; } 50% { transform: translate(var(--x1), var(--y1)); } 88% { opacity: 1; } 100% { transform: translate(var(--x2), var(--y2)); opacity: 0; } }
.r1-fb .pf { fill: url(#rIri); stroke: rgba(255,255,255,.9); stroke-width: .9; } .r1-fb .cov { fill: rgba(70,90,160,.75); stroke: rgba(255,255,255,.8); stroke-width: .8; } .r1-fb .cov2 { fill: rgba(40,55,110,.85); }
.r1-fb .sw-tail { fill: url(#rIri); stroke: #fff; stroke-width: .8; } .r1-fb .sw-body { fill: url(#rBody); stroke: rgba(255,255,255,.85); stroke-width: .8; } .r1-fb .sw-hi { fill: none; stroke: rgba(255,255,255,.7); stroke-width: 1.4; }
.r1-fb .sw-l, .r1-fb .sw-r { transform-origin: -6px -12px; animation: r1Wing .28s ease-in-out infinite alternate; } .r1-fb:nth-child(2n) .sw-l, .r1-fb:nth-child(2n) .sw-r { animation-duration: .34s; }
@keyframes r1Wing { to { transform: scaleX(.5) scaleY(.85) rotate(16deg); } }
.r1 .q-dc { width: 24% !important; gap: 4px !important; } .r1 .q-dc b { font-size: 18px !important; } .r1 .q-dc .mono { font-size: 8px; } .r1 .r1-sm { width: 58%; }
.r1-fb.one { animation-duration: 3s; animation-timing-function: cubic-bezier(.45, .05, .35, 1); }
/* intro: one swallow circling the title, then breaking away */
.r1-orb { position: absolute; left: 50%; top: 50%; width: 0; height: 0; animation: r1Orbit 2.6s .1s cubic-bezier(.35, .1, .35, 1) both, r1Away .6s 2.6s ease-in forwards; }
.r1-fb.orbit { position: absolute; left: 0; top: 0; animation: r1In .4s .1s both !important; transform: translate(min(30vw, 330px), 0) rotate(180deg) scale(.9); margin: -60px 0 0 -75px; }
.r1-fb.orbit svg { rotate: 0deg; scale: 1; }
@keyframes r1Orbit { from { transform: rotate(-90deg); } to { transform: rotate(450deg); } }
@keyframes r1In { from { opacity: 0; } }
@keyframes r1Away { to { transform: rotate(450deg) translate(60vw, -40svh) scale(.5); opacity: 0; } }
/* orbit radius breathes in so the swallow sweeps across the title */
.r1-fb.orbit { animation: r1In .4s .1s both, r1Rad 2.6s .1s ease-in-out both !important; z-index: 3; }
@keyframes r1Rad { 0% { transform: translate(300px, 0) rotate(180deg) scale(1.3); } 35% { transform: translate(90px, 0) rotate(180deg) scale(1.15); } 60% { transform: translate(40px, 0) rotate(180deg) scale(1.1); } 100% { transform: translate(260px, 0) rotate(180deg) scale(1.3); } }
/* JS-driven lively flight (overrides the CSS orbit) */
.r1-orb { left: 0 !important; top: 0 !important; animation: none !important; }
.r1-fb.orbit { animation: none !important; margin: -60px 0 0 -75px; will-change: transform; }
.r1-fb.orbit .sw-l, .r1-fb.orbit .sw-r { animation-duration: var(--fl, .3s) !important; }
/* index preview beside the hovered name */
.r1-pv { position: fixed; z-index: 120; width: 360px; padding: 8px 8px 6px; background: var(--glass); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: var(--glass-sh), 0 24px 40px -24px rgba(20,21,22,.35); pointer-events: none; opacity: 0; transform: scale(.96); transition: opacity .25s, transform .35s var(--out); }
.r1-pv.on { opacity: 1; transform: none; } .r1-pvf { display: block; aspect-ratio: 16 / 9; overflow: hidden; } .r1-pvf img { width: 100%; height: 100%; object-fit: cover; display: block; } .r1-pv .mono { display: block; margin-top: 6px; }
/* project page: no white fade on gallery images; hide the swallow while a project is open */
.r1 .project.kp .gal figure { opacity: 1 !important; transform: none !important; filter: none !important; }
html.is-locked .sw, html.is-locked .sw-trail { opacity: 0 !important; visibility: hidden; transition: opacity .3s; }
/* project text: book typography, comfortable measure, never touching the right edge */
.r1 .kp-lead { font-family: "Newsreader", Georgia, serif !important; font-weight: 400; font-size: var(--g1) !important; line-height: 1.3 !important; max-width: 30em; letter-spacing: -.005em; }
.r1 .kp-txt { max-width: 36em; } .r1 .kp-txt p { font-family: "Newsreader", Georgia, serif; font-size: 17px !important; line-height: 1.6; color: #45494C !important; text-align: justify; hyphens: auto; text-indent: 2em; margin: 0 0 6px !important; } .r1 .kp-txt p:first-child { text-indent: 0; }
.r1 .kp-body { padding-right: calc(var(--gr) + 2vw) !important; }
.r1 .kp-title p { font-family: "Newsreader", Georgia, serif !important; font-style: italic; }
@media (max-width: 1100px) { .r1 .kp-lead, .r1 .kp-txt { grid-column: 1 / -1 !important; } .r1 .kp-spec { grid-column: 1 / -1 !important; grid-row: auto !important; } }
@media (max-width: 1100px) { .r1 .kp-lead { grid-row: 1 !important; } .r1 .kp-txt { grid-row: 2 !important; } .r1 .kp-spec { grid-row: 3 !important; margin-top: 10px; } }
/* project text = field-notes style: grey serif lead, grey sans body, mono label / value list */
.r1 .kp-lead { font-family: "Newsreader", Georgia, serif !important; font-size: var(--g1) !important; line-height: 1.38 !important; color: #7B807C !important; max-width: 34em; }
.r1 .kp-txt { max-width: 40em; } .r1 .kp-txt p { font-family: var(--text) !important; font-size: var(--g0) !important; line-height: 1.65 !important; color: #7B807C !important; text-align: left !important; text-indent: 0 !important; hyphens: manual; margin: 0 0 12px !important; }
.r1 .kp-spec { grid-template-columns: 1fr !important; gap: 0 !important; align-content: start; }
.r1 .kp-spec > div { display: grid; grid-template-columns: 130px 1fr; gap: 16px; align-items: baseline; border-top: 0 !important; padding: 5px 0 !important; font-size: var(--g0) !important; color: var(--ink); }
.r1 .kp-spec b { font-family: var(--mono); font-size: var(--g-1) !important; letter-spacing: .04em; color: var(--ink-2); padding-top: 2px; }
.r1 .kswitch { display: none !important; }
.r1 .project.kp { touch-action: pan-y; } .kp-swipe { margin-left: 12px; align-self: center; }
/* lead width, ruled spec, running credit line */
.r1 .kp-lead { grid-column: 1 / span 6 !important; max-width: 24em !important; }
.r1 .kp-txt { grid-column: 1 / span 6 !important; }
.r1 .kp-spec { border-top: 1px solid var(--line); }
.r1 .kp-spec > div { border-bottom: 1px solid var(--line) !important; padding: 10px 0 !important; grid-template-columns: 120px 1fr !important; }
.r1 .kp-cred { margin: 18px 0 0; font-size: 14px; line-height: 1.75; color: var(--ink); } .r1 .kp-cred i { font-style: normal; color: var(--ink-2); } .r1 .kp-cred em { font-style: normal; color: #C3C6C2; margin: 0 2px; } .r1 .kp-cred span { white-space: normal; } .r1 .kp-cred span > i { white-space: nowrap; }
.kp-swipe { margin-left: 6px !important; }
.r1 .kp-spec > .kp-cr { align-items: start; } .r1 .kp-cr .kp-cred { margin: 0 !important; line-height: 1.6; }
.kp-swipe { display: none !important; }
.r1 .kp-bar .kp-close { justify-self: start; padding: 0; margin: 0; text-align: left; }
.r1 .k-top nav a:hover { background: #CFE0F4 !important; } .r1-sw:hover { background: #CFE0F4 !important; }
.r1 .k-top nav a:hover, .r1-sw:hover { background: #B7D0EC !important; }
/* next-project title: dawn gradient (sky blue → lilac → pink) instead of flat pink */
.r1 .kp-next b { background: linear-gradient(90deg, #7FA8DE, #A99BE0 45%, #E58DB4) !important; -webkit-background-clip: text !important; background-clip: text !important; color: transparent !important; -webkit-text-fill-color: transparent; }
.r1 .kp-next:hover b { background: linear-gradient(90deg, #E58DB4, #A99BE0 55%, #7FA8DE) !important; -webkit-background-clip: text !important; background-clip: text !important; }
.r1 .kp-next b { display: inline-block !important; justify-self: start; padding-right: .08em; }
.r1 .kp-next b { padding: .06em .22em .2em .04em !important; margin: -.06em -.22em -.2em -.04em; line-height: 1.12 !important; overflow: visible; }
.r1 .kp-next:not(:hover) b { background: none !important; color: var(--ink) !important; -webkit-text-fill-color: var(--ink); }
/* CV: GPA on its own third line */
.r1 .q-lg em { display: block; } .r1 .q-lg .q-x { display: block; margin-top: 3px; font-family: var(--mono); font-style: normal; font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink); }
/* MCP working-edge card: stands apart from the plain CV lists */
.r1-edge { position: relative; margin-top: 26px; padding: 22px 22px 20px; border-radius: 18px; overflow: hidden; isolation: isolate; color: #141516;
  background: linear-gradient(135deg, rgba(200,244,255,.55), rgba(179,190,255,.45) 40%, rgba(246,184,228,.42) 70%, rgba(255,230,174,.5)); box-shadow: inset 0 0 0 1px rgba(255,255,255,.7), 0 24px 40px -28px rgba(46,62,102,.45); }
.r1-edge::after { content: ""; position: absolute; inset: -40% -20% auto auto; width: 70%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(closest-side, rgba(255,255,255,.75), transparent); z-index: -1; }
.r1-edge .lab { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
.r1-edge .lab i { width: 7px; height: 7px; border-radius: 50%; background: #2E3E66; box-shadow: 0 0 0 4px rgba(46,62,102,.15); animation: r1pulse 2.4s ease-in-out infinite; }
@keyframes r1pulse { 50% { box-shadow: 0 0 0 7px rgba(46,62,102,0); } }
.r1-edge h4 { margin: 12px 0 8px; font-family: var(--display); font-weight: 400; font-size: var(--g1, 26px); line-height: 1.08; }
.r1-edge h4 em { font-style: italic; }
.r1-edge p { margin: 0; font-size: 14px; line-height: 1.55; color: #33373B; }
.r1-edge ul { display: flex; flex-wrap: wrap; gap: 6px; margin: 14px 0 0; padding: 0; list-style: none; }
.r1-edge li { padding: 5px 10px; border-radius: 99px; background: rgba(255,255,255,.62); font-family: var(--mono); font-size: 10px; letter-spacing: .04em; }
.r1-edge li.c { background: #2E3E66; color: #fff; }
.r1 .r1-thx { margin: 18px 0 0; max-width: 34em; font-family: "Newsreader", Georgia, serif; font-size: var(--g0, 16px); line-height: 1.55; color: #3E4441; text-indent: 3em; } .r1 .r1-thx.b { text-indent: 0; margin-top: 14px; font-weight: 600; color: var(--ink); }
.r1 .q-lg .r1-edge { display: block; grid-template-columns: none; padding: 22px 22px 20px; border-top: 0; font-size: inherit; }
.r1 .q-lg .r1-edge h4 em { display: inline; font-family: var(--display); font-style: italic; font-size: inherit; color: inherit; }
.r1 .q-lg .r1-edge ul { display: flex; } .r1 .q-lg .r1-edge li { display: inline-block; height: auto; }
/* live red dot before "Open to work" */
.r1 #kclock::before { content: ""; display: inline-block; width: 6px; height: 6px; margin-right: 8px; border-radius: 50%; background: #E5372B; vertical-align: 1px; box-shadow: 0 0 0 0 rgba(229,55,43,.45); animation: r1live 2s ease-out infinite; }
@keyframes r1live { 70% { box-shadow: 0 0 0 6px rgba(229,55,43,0); } 100% { box-shadow: 0 0 0 0 rgba(229,55,43,0); } }
.r1 .q-lg .q-x { margin-top: 0; font-family: var(--text); font-style: normal; font-size: 13px; letter-spacing: 0; text-transform: none; color: #5E6368; }
/* intro title card: dead centre, lines centred */
.r1-ld .ld-card { top: 50% !important; left: 50% !important; right: auto !important; translate: -50% -50% !important; text-align: center; }
.r1-ld .ld-card p { margin-left: 0 !important; padding-left: 0 !important; text-indent: 0 !important; text-align: center; }
.r1-ld .ld-card p > span { margin-left: 0 !important; }
/* MCP edge: plain, same language as the CV lists above */
.r1 .q-lg .r1-edge { margin-top: 18px; padding: 14px 0 0 !important; border-radius: 0; border-top: 1px solid var(--ink) !important; background: none !important; box-shadow: none !important; display: grid !important; grid-template-columns: 110px 1fr; gap: 4px 10px; }
.r1 .q-lg .r1-edge::after { display: none; }
.r1 .q-lg .r1-edge .lab { grid-row: 1 / span 2; align-self: start; padding-top: 4px; font-size: 9px; color: var(--ink); }
.r1 .q-lg .r1-edge .lab i { width: 5px; height: 5px; background: #E5372B; box-shadow: none; animation: none; }
.r1 .q-lg .r1-edge h4 { grid-column: 2; margin: 0; font-family: var(--text); font-weight: 500; font-size: var(--g0); line-height: 1.35; }
.r1 .q-lg .r1-edge p { grid-column: 2; font-family: var(--text); font-size: 13px; line-height: 1.5; color: #5E6368; }
/* contact heading: staggered flight */
.r1 .r1-thank { display: grid; gap: .02em; margin: 0; line-height: .98; }
.r1 .r1-thank > span { display: block; white-space: nowrap; }
.r1 .r1-thank .l2 { padding-left: 1.6em; position: relative; }
.r1 .r1-thank .l2 em { font-style: italic; background: linear-gradient(90deg, #E8A8C8, #A9B8F0 55%, #9FD0EE); -webkit-background-clip: text; background-clip: text; color: transparent; padding: 0 .08em .12em 0; }
.r1 .r1-thank .l2 small { position: absolute; left: 0; top: .35em; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-2, #6b6b66); writing-mode: vertical-rl; rotate: 180deg; line-height: 1; }
.r1 .r1-thank .l3 { padding-left: .6em; position: relative; }
.r1 .r1-thank .l3 svg { position: absolute; left: calc(100% - 2.6em); top: -.1em; width: 3.4em; height: auto; overflow: visible; }
.r1 .r1-thank .l3 path { fill: none; stroke: #2E3E66; stroke-width: 1.4; stroke-dasharray: 3 5; stroke-linecap: round; }
.r1 .r1-thank .l3 { width: max-content; }
.r1 .r1-thank .l3 { padding-left: .6em; }
.r1 .r1-thank .l3 svg { left: calc(100% + .15em) !important; top: auto !important; bottom: .18em; width: 2.2em !important; }
.r1 .q-lg .r1-edge { border-top: 0 !important; padding-top: 4px !important; margin-top: 10px; }
.r1 .q-lg .r1-edge .lab { display: none !important; }
.r1 .q-lg .r1-edge h4, .r1 .q-lg .r1-edge p { font-style: italic; }
.r1 .q-lg .r1-edge h4 { font-family: "Newsreader", Georgia, serif; font-weight: 500; font-size: calc(var(--g0, 16px) * 1.15); }
.r1 .q-lg .r1-edge p { font-family: "Newsreader", Georgia, serif; font-size: 14px; }
.r1 .q-lg .r1-edge h4 { font-family: var(--text) !important; font-weight: 500; font-size: var(--g0) !important; }
.r1 .q-lg .r1-edge p { font-family: var(--text) !important; font-size: 13px !important; }

/* ================= PHONE (≤760px) ================= */
@media (max-width: 760px) {
  html, body { overflow-x: clip; max-width: 100vw; }
  /* top bar: brand one line, menu as a small scroll row, status short */
  .r1 .k-top { flex-wrap: wrap; row-gap: 8px; }
  .r1 .k-top > a { white-space: nowrap; font-size: 14px; }
  .r1 .k-top nav { order: 3; width: 100%; overflow-x: auto; scrollbar-width: none; justify-content: flex-start; padding: 6px 10px !important; gap: 14px !important; }
  .r1 .k-top nav::-webkit-scrollbar { display: none; }
  .r1 .k-top nav a { white-space: nowrap; font-size: 13px; }
  .r1 #kclock { font-size: 9px; white-space: nowrap; }
  /* cover: narrative, then title; spec card + hint hidden (same info is in About) */
  .r1 .q-narr { top: 128px; font-size: 15px; }
  .r1 .q-spec, .r1 .q-hint, .r1 .q-vert { display: none !important; }
  /* shelf: swipe sideways, books never cut by the page */
  .r1-shelf2, .r1-shelf { justify-content: flex-start !important; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; padding: 0 16px 6px !important; margin: 0 -16px; scroll-snap-type: x proximity; }
  .r1-shelf2::-webkit-scrollbar { display: none; }
  .r1-shelf2 .s1-sp { flex-shrink: 0 !important; scroll-snap-align: center; }
  /* hardcover: pages stacked (text, then stop-motion) */
  .r1-hc { grid-template-columns: 1fr !important; height: auto !important; padding: 10px !important; }
  .r1-gut, .r1-hc .q1-rib { display: none !important; }
  .r1-pg { padding: 20px 18px !important; }
  .r1-pg.r { min-height: 0; } .r1-pg.r .r1-fig { height: auto; } .r1 .r1-fr img { max-height: none; }
  .r1 #hl .toc.t1 { font-size: 15px !important; } .r1 #hl .toc.t1 em { font-size: 26px !important; }
  .r1 #hl h3, .r1-pg h3 { font-size: 30px !important; line-height: 1.02 !important; overflow-wrap: anywhere; }
  .r1 #hl .tocs { grid-template-columns: 1fr !important; }
  .r1-pg p { max-width: none; }
  /* diagonal band: smaller type so lines stay on screen */
  .r1 .s1-band h2 { font-size: 30px !important; }
  .r1 .s1-band .sm { font-size: 15px !important; }
  /* index: dial becomes a clean list */
  .r1 .q-dial { width: 100% !important; aspect-ratio: auto !important; display: grid; gap: 0; }
  .r1 .q-dial a { position: static !important; transform: none !important; width: auto !important; height: auto !important; padding: 12px 0; border-top: 1px solid var(--line); display: flex; align-items: baseline; gap: 12px; }
  .r1 .q-dial a * { transform: none !important; rotate: none !important; }
  .r1 .q-dc, .r1 .r1-pv { display: none !important; }
  /* contact: one column */
  .r1-cg { grid-template-columns: 1fr !important; gap: 34px; }
  .r1 .r1-thank { font-size: 52px; }
  .r1-cr .s1-mail { font-size: 24px !important; overflow-wrap: anywhere; }
  .r1-cr dl { grid-template-columns: 90px 1fr; }
  .r1-me { width: 70% !important; }
  /* CV + process breathing room */
  .r1 .q-lg div { grid-template-columns: 92px 1fr; }
  /* project page */
  .r1 .g-posts { gap: 22px 10px; }
}
@media (max-width: 760px) {
  /* top bar: solid strip, brand left + status right; menu becomes a floating pill at the bottom */
  .r1 .k-top { grid-template-columns: auto 1fr !important; padding: 12px 16px 10px !important; background: rgba(243,242,238,.86) !important; -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); }
  .r1 #kclock { justify-self: end; }
  .r1 .k-top nav { position: fixed !important; left: 50%; bottom: 14px; top: auto; translate: -50% 0; width: max-content; max-width: calc(100vw - 24px); order: 0 !important; z-index: 80; padding: 4px !important; gap: 0 !important; box-shadow: 0 10px 30px -12px rgba(20,21,22,.35) !important; background: rgba(255,255,255,.82) !important; }
  .r1 .k-top nav a { padding: 8px 11px !important; font-size: 12px !important; }
  .r1 .k-top nav a::before { display: none !important; }
  .r1 .k-top .r1-sw { display: none; }
  /* index list: names in normal flow */
  .r1 .q-dial a span, .r1 .q-dial a.fl span { position: static !important; translate: none !important; rotate: none !important; left: auto !important; white-space: normal; font-size: 19px; }
  /* smaller swallow so it never covers the reading */
  .r1 #sw > * { scale: .55; }
  /* reader text: left-aligned, no justified gaps */
  .r1 #hl .ind, .r1 .r1-pg p { text-align: left !important; hyphens: none; }
  .r1 .q-foot, .r1 footer { padding-bottom: 80px; }
}
@media (max-width: 760px) {
  .r1 .k-top nav { top: auto !important; bottom: 14px !important; }
  .r1 .kp-body { grid-template-columns: 1fr !important; padding: 40px 16px 50px !important; gap: 18px; }
  .r1 .kp-body > * { grid-column: 1 / -1 !important; max-width: none !important; grid-row: auto !important; }
  .r1 .kp-lead { font-size: 22px !important; line-height: 1.3 !important; }
  .r1 .kp-spec > div { grid-template-columns: 90px 1fr !important; }
  .r1 .kp-cr { grid-template-columns: 1fr !important; }
}
@media (max-width: 760px) {
  .r1 .kp-body { grid-template-columns: minmax(0, 1fr) !important; }
  .r1 .kp-body > *, .r1 .kp-spec, .r1 .kp-spec > div { min-width: 0; }
  .r1 .kp-cred { overflow-wrap: anywhere; }
  /* fixed menu needs a top bar without filters/transforms (they trap position:fixed) */
  .r1 .k-top { -webkit-backdrop-filter: none !important; backdrop-filter: none !important; transform: none !important; filter: none !important; background: #F3F2EE !important; }
}
@media (max-width: 760px) {
  .r1 .kp-cred span { white-space: normal !important; display: inline !important; }
  .r1 .kp-cr { display: grid !important; grid-template-columns: 90px minmax(0, 1fr) !important; }
  .r1 .kp-cr .kp-cred { min-width: 0; max-width: 100%; }
  /* cover title sits above the floating menu */
  .r1 .k-ctype { bottom: 88px !important; }
}
