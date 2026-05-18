/* ════════════════════════════════════════════════
   LISA — STUNT PERFORMER · 90s GAME UI
   main.js
════════════════════════════════════════════════ */

/* ── SKILL DATA ──────────────────────────────── */
const SKILLS = [
  { name: 'STUNT PERFORMANCE',   lvl: 95, col: 'fill-c', tags: ['HIGH FALLS', 'DOUBLING', 'FIRE'] },
  { name: 'MARTIAL ARTS',        lvl: 90, col: 'fill-g', tags: ['BJJ', 'MUAY THAI', '10+ YRS'] },
  { name: 'FIGHT CHOREOGRAPHY',  lvl: 85, col: 'fill-c', tags: ['STORY-DRIVEN', 'CAMERA-AWARE'] },
  { name: 'WIRE WORK & RIGGING', lvl: 78, col: 'fill-y', tags: ['AERIAL', 'ZERO-G'] },
  { name: 'MOTION CAPTURE',      lvl: 72, col: 'fill-y', tags: ['AAA GAMES', 'VFX'] },
  { name: 'PRECISION DRIVING',   lvl: 68, col: 'fill-m', tags: ['VEHICLE WORK', 'STUNT DRIVING'] },
  { name: 'STAGE COMBAT',        lvl: 88, col: 'fill-c', tags: ['SWORDS', 'UNARMED'] },
  { name: 'FIRST AID & SAFETY',  lvl: 80, col: 'fill-g', tags: ['CERTIFIED', 'ON-SET'] },
];

/* ── BUILD SKILL GRID ────────────────────────── */
function buildSkills() {
  const grid = document.getElementById('skill-grid');
  if (!grid) return;

  SKILLS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-card__name">${s.name}</div>
      <div class="skill-card__track">
        <div class="skill-card__fill ${s.col}" data-w="${s.lvl}"></div>
      </div>
      <div class="skill-card__meta">
        <span class="skill-card__lvl">LVL ${s.lvl}/100</span>
        <div class="skill-card__tags">
          ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── ANIMATE BARS WHEN IN VIEW ───────────────── */
function animateBars(container) {
  container.querySelectorAll('[data-w]').forEach(el => {
    el.style.width = el.dataset.w + '%';
  });
}

/* ── INTERSECTION OBSERVER FOR ALL BARS ──────── */
function initBarObserver() {
  const targets = [
    document.querySelector('.status-bars'),
    document.getElementById('skill-grid'),
  ].filter(Boolean);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateBars(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(t => obs.observe(t));
}

/* ── COUNTDOWN TIMER (Contact section) ───────── */
function initCountdown() {
  const numEl = document.getElementById('countdown');
  const barEl = document.getElementById('countdown-bar');
  if (!numEl || !barEl) return;

  let started = false;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      obs.disconnect();

      // shrink bar over 9 seconds
      setTimeout(() => { barEl.style.width = '0%'; }, 50);

      // count down from 9
      let n = 9;
      const tick = setInterval(() => {
        n--;
        numEl.textContent = n;
        if (n <= 0) {
          clearInterval(tick);
          numEl.textContent = '?';
          numEl.style.color = 'var(--cyan)';
        }
      }, 1000);
    }
  }, { threshold: 0.3 });

  const section = document.getElementById('contact');
  if (section) obs.observe(section);
}

/* ── TICKER ANIMATION FIX ────────────────────── */
function initTicker() {
  // The ticker content is doubled in HTML for seamless loop.
  // CSS animation handles the rest — nothing to do in JS.
  // This function is a no-op placeholder for future ticker control.
}

/* ── PREFERS-REDUCED-MOTION ──────────────────── */
function respectReducedMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) return;

  // Fill all bars immediately without animation
  document.querySelectorAll('[data-w]').forEach(el => {
    el.style.transition = 'none';
    el.style.width = el.dataset.w + '%';
  });

  // Stop ticker
  const ticker = document.querySelector('.footer-ticker');
  if (ticker) ticker.style.animation = 'none';
}

/* ── INIT ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildSkills();
  initBarObserver();
  initCountdown();
  initTicker();
  respectReducedMotion();
});
