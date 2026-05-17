# VitaLog Pro – Webshop

**VitaForge OG** · Wien, Österreich 🇦🇹

Ein vollständiger, statischer Webshop für die Ernährungs- und Fitness-App **VitaLog Pro**.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Hauptseite / Shop (Hero, Features, Pricing, Checkout-Modal) |
| `about.html` | Über uns, Team, Marken (Aufg. 3), Urheberrechts-Tabelle (Aufg. 2) |
| `lizenz.html` | EULA – Nutzungsrechte & Haftungsbeschränkungen (Aufg. 4) |
| `datenschutz.html` | Datenschutzerklärung DSGVO (Aufg. 5) |
| `barrierefreiheit.html` | Barrierefreiheitserklärung WCAG 2.2 AA (Aufg. 1) |
| `kontakt.html` | Kontaktformular + Impressum § 24 MedienG (Aufg. 6) |

## Erfüllte Aufgaben

- **Aufgabe 1 (Barrierefreiheit):** WCAG 2.2 AA, Skip-Link, ARIA-Labels, Farbkontrast ≥4.5:1, Tastaturnavigation, `prefers-reduced-motion`, semantisches HTML
- **Aufgabe 2 (Urheberrecht):** Medientabelle in about.html – OFL-Schriftarten, eigene SVGs, keine lizenzpflichtigen Fotos
- **Aufgabe 3 (Marke):** 3 Markenformen (Wortbildmarke, Bildmarke, Formmarke) mit Nizza-Klassifikation in about.html
- **Aufgabe 4 (Lizenz):** EULA mit Nutzungsrechten, verbleibenden Rechten & Haftungsbeschränkungen
- **Aufgabe 5 (Datenschutz):** DSGVO-konforme Datenschutzerklärung inkl. Cookies, Analyse, Zahlungen
- **Aufgabe 6 (Gewerbe/Impressum):** § 24 MedienG, § 5 ECG, Firmenbuch, UID, WKW, ODR-Link

## Deployment auf GitHub Pages

### Methode 1: GitHub Actions (automatisch)

1. Neues GitHub-Repository erstellen (z. B. `vitalog`)
2. Dateien pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial VitaLog webshop"
   git remote add origin https://github.com/DEIN-USERNAME/vitalog.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Source: GitHub Actions**
4. Der Workflow `.github/workflows/deploy.yml` deployed automatisch.
5. URL: `https://DEIN-USERNAME.github.io/vitalog/`

### Methode 2: Branch `gh-pages` (manuell)

1. Dateien in den Branch `gh-pages` pushen
2. Settings → Pages → Source: Deploy from branch → `gh-pages / root`

## Lokale Vorschau

```bash
npx serve .
# oder
python3 -m http.server 8080
```
Dann: http://localhost:8080

## Technologien

- **HTML5** (semantisch, ARIA)
- **CSS3** (Custom Properties, Grid, Flexbox, kein Framework)
- **Vanilla JS** (kein Framework)
- **Schriften:** DM Serif Display + Libre Franklin (Google Fonts, OFL 1.1)
- **Hosting:** GitHub Pages (statisch)

---
© 2024 VitaForge OG · info@vitaforge.at
