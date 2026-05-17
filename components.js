// Shared components injected by each page
window.VL = {
  nav: (active) => `
<a class="skip-link" href="#main-content">Zum Hauptinhalt springen</a>
<nav class="site-nav" role="navigation" aria-label="Hauptnavigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="VitaLog – Startseite">
      <span class="logo-icon" aria-hidden="true">🌿</span>
      VitaLog
    </a>
    <button class="nav-toggle" id="nav-toggle" aria-controls="nav-links" aria-expanded="false" aria-label="Menü öffnen">☰</button>
    <ul class="nav-links" id="nav-links" role="list">
      <li><a href="index.html" ${active==='home'?'aria-current="page"':''}>Home</a></li>
      <li><a href="about.html" ${active==='about'?'aria-current="page"':''}>Über uns</a></li>
      <li><a href="lizenz.html" ${active==='lizenz'?'aria-current="page"':''}>Lizenz</a></li>
      <li><a href="datenschutz.html" ${active==='datenschutz'?'aria-current="page"':''}>Datenschutz</a></li>
      <li><a href="barrierefreiheit.html" ${active==='a11y'?'aria-current="page"':''}>Barrierefreiheit</a></li>
      <li><a href="kontakt.html" ${active==='kontakt'?'aria-current="page"':''}>Kontakt</a></li>
      <li><a href="index.html#pricing" class="nav-cta btn btn-sm">Jetzt kaufen</a></li>
    </ul>
  </div>
</nav>`,

  footer: () => `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" aria-label="VitaLog – Startseite">
          <span class="logo-icon" aria-hidden="true">🌿</span>VitaLog
        </a>
        <p>Gesunde Ernährung leicht gemacht. Made in Vienna 🇦🇹</p>
        <p style="font-size:.8rem;opacity:.55;">© 2024 VitaForge OG. Alle Rechte vorbehalten.</p>
      </div>
      <div class="footer-col">
        <h4>Produkt</h4>
        <ul>
          <li><a href="index.html#features">Funktionen</a></li>
          <li><a href="index.html#pricing">Preise</a></li>
          <li><a href="lizenz.html">Lizenz</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Unternehmen</h4>
        <ul>
          <li><a href="about.html">Über uns</a></li>
          <li><a href="barrierefreiheit.html">Barrierefreiheit</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Rechtliches</h4>
        <ul>
          <li><a href="datenschutz.html">Datenschutz</a></li>
          <li><a href="kontakt.html#impressum">Impressum</a></li>
          <li><a href="barrierefreiheit.html">Barrierefreiheitserklärung</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>VitaForge OG · Mariahilfer Straße 88/12 · 1060 Wien · Österreich</span>
      <span>UID: ATU12345678 · FN: 123456 a</span>
    </div>
  </div>
</footer>`,

  cookie: () => `
<div id="cookie-banner" role="region" aria-label="Cookie-Einstellungen" hidden>
  <div class="container cookie-inner">
    <p class="cookie-text">
      Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
      Mehr dazu in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.
    </p>
    <div class="cookie-actions">
      <button class="btn-cookie-accept" id="cookie-accept">Alle akzeptieren</button>
      <button class="btn-cookie-decline" id="cookie-decline">Ablehnen</button>
    </div>
  </div>
</div>`
};
