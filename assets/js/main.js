/* ============================================================
   BHANU VADLAMUDI PORTFOLIO — main.js
   ============================================================ */

/* ── Portfolio Config ──────────────────────────────────────── */
const CFG = {
  phone       : '17626994561',          // E.164 without +
  email       : 'bhanuvadlamudi96@gmail.com',
  linkedin    : 'https://www.linkedin.com/in/bhanu-prakash-vadlamudi-91996a277/',
  github      : 'https://github.com/Bhanuprakash741',   // update if needed
  waMsg       : 'Hi, I came across your profile and found your background interesting. We have an opportunity that aligns with your experience. Would you be open to discussing this further?',
  location    : 'Marietta, GA, USA',
  isIndia     : false,                  // derived from resume location
  resumePath  : 'assets/resume/Bhanu_Vadlamudi_Resume.pdf',
};

/* ── Copyright (dynamic) ───────────────────────────────────── */
const copyright = CFG.isIndia
  ? 'All rights reserved &copy; <span>Triopath Careers Pvt Ltd</span>'
  : 'All rights reserved &copy; <span>Triopath Careers LLC</span>';

/* ── Shared HTML Fragments ─────────────────────────────────── */
function buildNavHTML(activePage) {
  const pages = [
    { href: 'index.html',      label: 'Home'       },
    { href: 'about.html',      label: 'About'      },
    { href: 'experience.html', label: 'Experience' },
    { href: 'techstack.html',  label: 'Tech Stack' },
    { href: 'education.html',  label: 'Education'  },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">BV<span>.</span></a>
      <div class="nav-links">${links}</div>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav" id="mobileNav">${mobileLinks}</div>`;
}

function buildFooterHTML() {
  const waLink = `https://wa.me/${CFG.phone}?text=${encodeURIComponent(CFG.waMsg)}`;

  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">

        <div class="footer-brand">
          <div class="footer-brand-name">Bhanu Prakash Vadlamudi</div>
          <div class="footer-brand-role">Data Scientist</div>
        </div>

        <div class="footer-contacts">
          <!-- Call -->
          <a href="tel:+1${CFG.phone}" class="f-btn call" title="Call">
            ${iconPhone()} Call
          </a>
          <!-- Email -->
          <a href="mailto:${CFG.email}" class="f-btn email" title="Email">
            ${iconMail()} Email
          </a>
          <!-- GitHub -->
          <a href="${CFG.github}" class="f-btn github" target="_blank" rel="noopener" title="GitHub">
            ${iconGitHub()} GitHub
          </a>
          <!-- LinkedIn -->
          <a href="${CFG.linkedin}" class="f-btn linkedin" target="_blank" rel="noopener" title="LinkedIn">
            ${iconLinkedIn()} LinkedIn
          </a>
          <!-- WhatsApp -->
          <a href="${waLink}" class="f-btn whatsapp" target="_blank" rel="noopener" title="WhatsApp">
            ${iconWhatsApp()} WhatsApp
          </a>
        </div>

        <div class="footer-dl">
          <a href="${CFG.resumePath}" download class="btn btn-primary btn-lg">
            ${iconDownload()} Download CV
          </a>
        </div>

      </div>

      <div class="footer-bottom">
        <p class="footer-copy copyright-text">${copyright}</p>
        <div class="footer-meta">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="experience.html">Experience</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll to top -->
  <button class="scroll-top" id="scrollTop" aria-label="Back to top">
    ${iconArrowUp()}
  </button>`;
}

/* ── SVG Icon Helpers ──────────────────────────────────────── */
const svg = (d, size=16) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${d}
  </svg>`;

const iconPhone    = () => svg('<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>');
const iconMail     = () => svg('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>');
const iconGitHub   = () => svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>');
const iconLinkedIn = () => svg('<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>');
const iconWhatsApp = () => svg('<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>');
const iconDownload = () => svg('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>');
const iconArrowUp  = () => svg('<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>');

/* ── DOM Injection ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Inject nav + footer into placeholder elements */
  const navSlot    = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  const activePage = document.body.dataset.page || 'index.html';

  if (navSlot)    navSlot.innerHTML    = buildNavHTML(activePage);
  if (footerSlot) footerSlot.innerHTML = buildFooterHTML();

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 50);
    scrollTopBtn?.classList.toggle('show', y > 320);
  }, { passive: true });

  /* ── Hamburger ── */
  document.getElementById('hamburger')?.addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mobileNav')?.classList.toggle('open');
  });

  /* Close mobile nav on link click */
  document.querySelectorAll('#mobileNav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('hamburger')?.classList.remove('open');
      document.getElementById('mobileNav')?.classList.remove('open');
    });
  });

  /* ── Scroll to top ── */
  document.getElementById('scrollTop')?.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-x, .tl-item, .tech-cat, .edu-card, .cert-card')
    .forEach(el => revealObserver.observe(el));

  /* Stagger cert cards */
  document.querySelectorAll('.cert-card').forEach((c, i) => {
    c.style.transitionDelay = `${i * 0.08}s`;
  });

  /* ── Counter animation ── */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

  function animateCount(el) {
    const target   = parseInt(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const duration = 1400;
    const start    = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
});
