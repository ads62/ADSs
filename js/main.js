document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Tema claro/escuro ---------- */
const root = document.documentElement;
const logoImgs = ['brandImg','footBrandImg'];
const markImgs = ['heroMark'];

function applyTheme(t){
  root.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = t === 'dark' ? '🌙' : '☀️';
  logoImgs.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.src = t === 'dark' ? 'assets/img/lockup-dark.png' : 'assets/img/lockup-light.png';
  });
  markImgs.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.src = t === 'dark' ? 'assets/img/icon-dark.png' : 'assets/img/icon-light.png';
  });
  document.querySelectorAll('.about-mark img').forEach(el=>{
    el.src = t === 'dark' ? 'assets/img/icon-dark.png' : 'assets/img/icon-light.png';
  });
  localStorage.setItem('ads_theme', t);
}
(function(){
  const saved = localStorage.getItem('ads_theme');
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
})();
document.getElementById('themeBtn').addEventListener('click', ()=>{
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ---------- Header on scroll ---------- */
const header = document.getElementById('siteHeader');
function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 12); }
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ---------- Menu mobile ---------- */
const burger = document.getElementById('burgerBtn'), mnav = document.getElementById('mobileNav');
burger.addEventListener('click', ()=> mnav.classList.toggle('open'));
mnav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mnav.classList.remove('open')));

/* ---------- Idioma ---------- */
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(ADS_I18N[l] && ADS_I18N[l][k]) el.textContent = ADS_I18N[l][k];
  });
  document.getElementById('langSel').value = l;
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : l;
  localStorage.setItem('ads_lang', l);
  renderPortfolio(l);
}
document.getElementById('langSel').addEventListener('change', e => setLang(e.target.value));

/* ---------- Portfólio: três composições distintas (a/b/c) ---------- */
function renderPortfolio(l){
  const t = ADS_I18N[l];
  const classes = ['a','b','c'];
  document.getElementById('pfList').innerHTML = ADS_PROJECTS.map((p, i)=>`
    <div class="pf-item ${classes[i] || 'a'}" data-reveal>
      <div class="pf-txt">
        <span class="pf-num">${p.index}</span>
        <div class="eyebrow" style="margin-bottom:8px">${t[p.categoryKey]}</div>
        <h3>${p.name}</h3>
        <p>${t[p.descKey]}</p>
        <a class="pf-link" href="${p.link}" target="_blank" rel="noopener">${t['pf.link']} →</a>
      </div>
      <div class="pf-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
    </div>
  `).join('');
  document.querySelectorAll('#pfList [data-reveal]').forEach(el=>obs.observe(el));
}

/* ---------- Revelação suave ao rolar ---------- */
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold:.15 });

/* ---------- Inicialização ---------- */
(function(){
  let l = localStorage.getItem('ads_lang');
  if(!l){
    const nav = (navigator.language || 'pt').toLowerCase();
    l = nav.startsWith('es') ? 'es' : nav.startsWith('en') ? 'en' : 'pt';
  }
  setLang(l);
})();
