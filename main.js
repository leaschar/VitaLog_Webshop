// VitaLog Pro – shared JS
document.addEventListener('DOMContentLoaded', () => {

  // ── Nav toggle (mobile) ──────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      navLinks.setAttribute('aria-hidden', !open);
    });
  }

  // ── Cookie Banner ────────────────────────────────────
  const banner = document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem('vl_cookie_consent')) {
    banner.removeAttribute('hidden');
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('vl_cookie_consent', 'accepted');
    banner.setAttribute('hidden', '');
  });

  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('vl_cookie_consent', 'declined');
    banner.setAttribute('hidden', '');
  });

  // ── Contact form (mock) ──────────────────────────────
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');
  if (form && toast) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      toast.style.display = 'block';
      form.reset();
      toast.focus();
      setTimeout(() => { toast.style.display = 'none'; }, 5000);
    });
  }

  // ── Mark active nav link ─────────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });
});
