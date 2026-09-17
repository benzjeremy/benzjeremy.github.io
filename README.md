# Jeremy Benz – Root Web Ecosystem

[![Status: Pre-Release](https://img.shields.io/badge/Status-Pre--Release%20%2F%20WIP-orange.svg?style=flat-square)](https://github.com/benzjeremy)
[![Awesome Go](https://awesome.re/mentioned-badge.svg)](https://github.com/avelino/awesome-go)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square)](LICENSE)
[![Security: Zero-Dummy](https://img.shields.io/badge/Security-Zero--Dummy--Standard-10b981.svg?style=flat-square)](https://github.com/benzjeremy)
[![Architecture: Zero-Electron](https://img.shields.io/badge/Architecture-Zero--Electron-orange.svg?style=flat-square)](https://github.com/benzjeremy)
[![Go: 1.22+](https://img.shields.io/badge/Go-1.22%2B-00ADD8.svg?style=flat-square&logo=go)](https://go.dev/)

> [!IMPORTANT]
> ### 🚧 Pre-Release / Active Development Notice
> The software projects within this ecosystem are **not yet finished** and are under continuous active development. All published versions, packages, and binaries are **Pre-Releases** (Work in Progress), even if not originally announced with a pre-release suffix.

The official root domain landing page, infrastructure hub, and static assets for [benzjeremy.github.io](https://benzjeremy.github.io).

## Architecture & Features
- **Zero Framework Bloat:** 100% pure vanilla HTML5, CSS3, and JavaScript with strict CSP (Content Security Policy).
- **Full Bilingual Support:** Instant toggle between German (`de`) and English (`en`) across all UI elements and legal views.
- **Search Console & Crawlers:** Includes Google Site Verification, `sitemap.xml`, and `robots.txt`.
- **Theme Persistence:** Fast dark/light mode toggle with local storage persistence and system preference fallback.
- **Direct Legal Compliance:** Implements direct access to Impressum (§ 5 DDG), Privacy Policy (GDPR / DSGVO & § 25 TDDDG), and contact options.

## Deployment
Deployed via GitHub Pages on the `main` branch:
- **URL:** [https://benzjeremy.github.io](https://benzjeremy.github.io)
- **Status Hub:** [https://benzjeremy.github.io/status/](https://benzjeremy.github.io/status/)
- **Sitemap:** [https://benzjeremy.github.io/sitemap.xml](https://benzjeremy.github.io/sitemap.xml)
- **Robots:** [https://benzjeremy.github.io/robots.txt](https://benzjeremy.github.io/robots.txt)

## 🛡️ Zero-Dummy-Security Standards
- **AES-256-GCM** encryption for all stored credentials and configurations.
- **PBKDF2** key derivation with ≥100,000 iterations and 32-byte cryptographic random salt.
- **Strict Localhost Binding** (`127.0.0.1`) — no exposure to LAN or public interfaces without a reverse proxy.
- **Anti-DNS-Rebinding** and **Anti-CSRF** protection on all HTTP endpoints.
- **Cryptographic Token Authentication** for all API requests.

## 📄 License
GNU General Public License v3.0 (GPL-3.0). See repository license for details.