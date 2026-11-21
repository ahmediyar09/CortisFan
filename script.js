(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IMG = './';

/* ---------- DATA (facts from public sources; add photos to assets/images/) ---------- */
const members = [
 {n:'Martin', f:'martin.jpg', bio:'Canadian-born member who joined BigHit Music as a trainee around 2019–2020.', facts:['Sang in the children’s choir at the 2018 PyeongChang Winter Olympics','Credited on the debut EP, like every member']},
 {n:'James', f:'james.jpg', bio:'The only member of the former “Trainee A” line who stayed at BigHit through to the debut lineup.', facts:['Contributes to music, choreography and visuals','Group has no fixed positions']},
 {n:'Juhoon', f:'juhoon.jpg', bio:'Appeared in commercials and music videos before joining BigHit Music as a trainee in 2023–2024.', facts:['Helped write four songs on the debut EP, incl. “What You Want” and “FaSHioN”']},
 {n:'Seonghyeon', f:'seonghyeon.jpg', bio:'Born in Daejeon, South Korea.', facts:['Listed MBTI: INTP','Part of the self-producing “young creator crew”']},
 {n:'Keonho', f:'keonho.jpg', bio:'Joined BigHit Music in 2021 after a competitive swimming background.', facts:['Swam competitively until 6th grade','Helped on four EP songs incl. “JoyRide” and took part in the choreography of “GO!”']}
];
const timeline = [
 ['APR 2025','Group formed under BIGHIT MUSIC'],
 ['AUG 18, 2025','Debut with the single “What You Want”'],
 ['SEP 8, 2025','Debut EP COLOR OUTSIDE THE LINES, No. 15 on the Billboard 200'],
 ['MAY 4, 2026','Second EP GREENGREEN, led by “REDRED”'],
 ['AUG 2026','First North American tour begins; Seoul anniversary concerts sell out'],
 ['NOV 2026','MMA2026 and MAMA AWARDS season']
];
const facts = [['5','members: Martin, James, Juhoon, Seonghyeon, Keonho'],['2025','debut year, August 18'],['6','letters of “COLOR OUTSIDE THE LINES” form the name'],['3rd','boy group from BIGHIT MUSIC after BTS and TXT']];
const discs = [
 {t:'COLOR OUTSIDE THE LINES', type:'1st EP', d:'Sep 8, 2025', f:'cover-col.jpg', g:'linear-gradient(135deg,#ff3b4e,#ffb13d,#c6ff3d,#3db8ff)', tr:['What You Want','GO!','FaSHioN','JoyRide','…and more']},
 {t:'GREENGREEN', type:'2nd EP', d:'May 4, 2026', f:'cover-green.jpg', g:'linear-gradient(135deg,#0b3d0b,#2f9d1f,#c6ff3d)', tr:['TNT','REDRED','ACAI','YOUNGCREATORCREW','Wassup','…and more']},
 {t:'REDRED', type:'Pre-release single', d:'Apr 20, 2026', f:'cover-redred.jpg', g:'linear-gradient(135deg,#3d0008,#ff3b4e)', tr:['REDRED']},
 {t:'Mention Me', type:'GOAT OST', d:'Feb 13, 2026', f:'cover-mention.jpg', g:'linear-gradient(135deg,#1c1c2e,#6a5cff)', tr:['Mention Me']},
 {t:'What You Want (feat. Teezo Touchdown)', type:'English single', d:'Aug 22, 2025', f:'cover-wyw-en.jpg', g:'linear-gradient(135deg,#111,#888,#fff)', tr:['What You Want (feat. Teezo Touchdown)']},
 {t:'What You Want', type:'Debut single', d:'Aug 18, 2025', f:'cover-wyw.jpg', g:'linear-gradient(135deg,#ff3b4e,#6a5cff)', tr:['What You Want']}
];
const gal = [['hero-group.jpg','Group','wide','linear-gradient(135deg,#c6ff3d33,#ff3b4e33)'],['martin.jpg','Martin','tall','linear-gradient(160deg,#222,#444)'],['james.jpg','James','','linear-gradient(135deg,#6a5cff55,#111)'],['juhoon.jpg','Juhoon','','linear-gradient(135deg,#ff3b4e55,#111)'],['seonghyeon.jpg','Seonghyeon','tall','linear-gradient(160deg,#2f9d1f55,#111)'],['keonho.jpg','Keonho','','linear-gradient(135deg,#3db8ff55,#111)'],['gallery-1.jpg','Stage','wide','linear-gradient(135deg,#333,#111)'],['gallery-2.jpg','Behind the scenes','','linear-gradient(135deg,#ffb13d55,#111)']];
const news = [
 ['Awards','CORTIS takes Song of the Year at MAMA AWARDS 2026','Reported by ANTARA News on Nov 21, 2026 from the Osaka ceremony (Nov 20–21).','Nov 21, 2026'],
 ['Awards','Record-breaking MMA2026 stage, three grand prizes in 2026','Korea Daily reports their Melon Music Awards stage passed 4.7 million views.','Nov 17, 2026'],
 ['Charts','GREENGREEN passes 4.46 million total sales','Circle Chart data for the first week of November; the EP also re-entered the Billboard 200.','Nov 2026'],
 ['Announcement','FNS Music Festival 2026 appearance','CORTIS is scheduled to appear at Fuji TV’s FNS Music Festival on December 2.','Dec 2, 2026'],
 ['Release','GREENGREEN_playextended announced','An extended edition with two new songs, tied to the first anniversary.','Aug 2026'],
 ['Tour','First North American tour','Launched in August 2026 after two opening shows in South Korea.','Aug 2026']
];

/* ---------- helpers ---------- */
const photo = (f, label, cls = 'ph') => `<div class="${cls}"><em>${label}</em><img src="${IMG}${f}" alt="${label}" loading="lazy" onerror="this.remove()"></div>`;

/* ---------- render ---------- */
$('#memberGrid').innerHTML = members.map((m, i) => `
 <article class="mcard reveal" style="--d:${i * .08}s" tabindex="0">
  <div class="ph"><em>${m.n[0]}</em><img src="${IMG}${m.f}" alt="${m.n}" loading="lazy" onerror="this.remove()"></div>
  <div class="ov"><span class="role">CORTIS</span><h3>${m.n}</h3>
   <div class="more"><p>${m.bio}</p><ul>${m.facts.map(x => `<li>${x}</li>`).join('')}</ul></div></div>
 </article>`).join('');
$$('.mcard').forEach(c => c.addEventListener('click', () => c.classList.toggle('open')));

$('#timeline').innerHTML = timeline.map(([d, t]) => `<div class="ti"><b>${d}</b><span>${t}</span></div>`).join('');
$('#facts').innerHTML = facts.map(([a, b], i) => `<div class="fact reveal" style="--d:${i * .08}s"><strong>${a}</strong><span>${b}</span></div>`).join('');
$('#discGrid').innerHTML = discs.map((d, i) => `
 <article class="disc-c reveal" style="--d:${(i % 3) * .1}s"><div class="cover" style="background:${d.g}">${d.t.length > 26 ? '' : d.t}<img src="${IMG}${d.f}" alt="${d.t} cover" loading="lazy" onerror="this.remove()"></div>
 <div class="disc-b"><span class="type">${d.type}</span><h3>${d.t}</h3><span class="date">${d.d}</span><ol class="trk">${d.tr.map(x => `<li>${x}</li>`).join('')}</ol></div></article>`).join('');
$('#galleryGrid').innerHTML = gal.map(([f, c, k, g], i) => `
 <figure class="g reveal ${k}" data-i="${i}" style="--d:${(i % 4) * .06}s"><div class="gf" style="background:${g}"></div>${photo(f, c)}</figure>`).join('');
$('#newsGrid').innerHTML = news.map(([c, t, p, d], i) => `<article class="nc reveal" style="--d:${(i % 3) * .1}s"><span class="cat">${c}</span><h3>${t}</h3><p>${p}</p><time>${d}</time></article>`).join('');
$('#year').textContent = new Date().getFullYear();
$$('.hero-photo').forEach(el => { const f = el.dataset.img; el.insertAdjacentHTML('beforeend', `<img src="${IMG}${f}" alt="CORTIS" onerror="this.remove()">`); });

/* ---------- loader, nav, theme ---------- */
window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 1300));
const nav = $('#nav'), toTop = $('#toTop'), menu = $('#menu'), burger = $('#burger');
addEventListener('scroll', () => { nav.classList.toggle('sc', scrollY > 40); toTop.classList.toggle('show', scrollY > 700); }, {passive: true});
toTop.onclick = () => scrollTo({top: 0, behavior: 'smooth'});
const setMenu = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); };
burger.onclick = () => setMenu(!menu.classList.contains('open'));
$$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
const root = document.documentElement;
try { const s = localStorage.getItem('cw-theme'); if (s) root.dataset.theme = s; } catch (e) {}
$('#themeBtn').onclick = () => { const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('cw-theme', t); } catch (e) {} };

/* ---------- reveal + active link ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .12});
$$('.reveal').forEach(el => io.observe(el));
const links = $$('#menu a');
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id)); }), {rootMargin: '-45% 0px -50% 0px'});
$$('main section').forEach(s => so.observe(s));

/* ---------- lightbox ---------- */
const lb = $('#lightbox'); let cur = 0;
const show = i => {
  cur = (i + gal.length) % gal.length; const [f, c, , g] = gal[cur];
  $('#lbImg').innerHTML = `<div style="background:${g};display:grid;place-items:center;color:#aaa;font-size:.9rem;border-radius:14px">${c} — add ${IMG}${f}</div><img src="${IMG}${f}" alt="${c}" onerror="this.remove()">`;
  $('#lbCap').textContent = `${c} · ${cur + 1}/${gal.length}`;
};
const open = i => { show(i); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
$$('.g').forEach(g => g.addEventListener('click', () => open(+g.dataset.i)));
$('.lb-x').onclick = close; $('.prev').onclick = () => show(cur - 1); $('.next').onclick = () => show(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
addEventListener('keydown', e => { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
let sx = 0; lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive: true});
lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); });
})();
