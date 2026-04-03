/* ============================================================
   BHANU VADLAMUDI PORTFOLIO — effects.js
   Light proximity glow · Scroll bar · Typewriter · Page fade
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Scroll Progress Bar ──────────────────────────────── */
  const bar = document.createElement('div');
  bar.id = 'scroll-bar';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
  }, { passive: true });


  /* ── 2. Typewriter on Hero Role ──────────────────────────── */
  const roleEl = document.querySelector('.hero-role');
  if (roleEl) {
    const phrases = [
      'AI & Machine Learning Engineer',
      'Data Scientist · 3+ Years',
      'NLP & Big Data Specialist',
    ];
    let pi = 0, ci = 0, deleting = false;
    function tick() {
      const cur = phrases[pi];
      roleEl.textContent = deleting ? cur.slice(0, --ci) : cur.slice(0, ++ci);
      if (!deleting && ci === cur.length) { setTimeout(() => { deleting = true; tick(); }, 2000); return; }
      if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      setTimeout(tick, deleting ? 30 : 60);
    }
    roleEl.textContent = '';
    setTimeout(tick, 700);
    roleEl.classList.add('typewriter');
  }


  /* ── 3. Mouse Proximity Glow on Cards ────────────────────── */
  // Cards light up softly as the cursor approaches them
  const glowTargets = document.querySelectorAll(
    '.exp-card, .edu-card, .cert-card, .kpi-box, .about-card, .skill-pill, .nav-links a, .f-btn, .btn'
  );

  window.addEventListener('mousemove', e => {
    glowTargets.forEach(el => {
      const r    = el.getBoundingClientRect();
      const cx   = r.left + r.width  / 2;
      const cy   = r.top  + r.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const NEAR = 160; // proximity radius in px

      if (dist < NEAR) {
        const strength = 1 - dist / NEAR;          // 0 → 1 as cursor approaches
        const alpha    = (strength * 0.35).toFixed(3);
        const blur     = Math.round(strength * 18);
        el.style.boxShadow    = `0 0 ${blur}px rgba(91,155,213,${alpha})`;
        el.style.borderColor  = `rgba(91,155,213,${(strength * 0.55).toFixed(3)})`;
        el.style.transition   = 'box-shadow .15s ease, border-color .15s ease';
      } else {
        el.style.boxShadow   = '';
        el.style.borderColor = '';
        el.style.transition  = 'box-shadow .4s ease, border-color .4s ease';
      }
    });
  }, { passive: true });


  /* ── 4. Page Fade Transition ─────────────────────────────── */
  const veil = document.createElement('div');
  veil.id = 'page-veil';
  document.body.prepend(veil);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    veil.style.opacity = '0';
  }));

  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('mailto') || href.startsWith('tel') ||
        a.hasAttribute('download')) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      veil.style.opacity = '1';
      setTimeout(() => window.location.href = href, 280);
    });
  });

});
