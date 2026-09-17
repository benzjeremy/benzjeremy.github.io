'use strict';
const root = document.documentElement;
const translations = (de, en) => root.lang === 'de' ? de : en;
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
function updateLabels() {
  document.title = document.body.dataset[root.lang === 'de' ? 'titleDe' : 'titleEn'];
  const language = document.getElementById('language');
  language.textContent = root.lang === 'de' ? 'EN' : 'DE';
  language.setAttribute('aria-label', translations('Switch to English', 'Auf Deutsch wechseln'));
  const dark = root.dataset.theme === 'dark';
  document.getElementById('theme').setAttribute('aria-label', dark ? translations('Helles Farbschema', 'Use light theme') : translations('Dunkles Farbschema', 'Use dark theme'));
  document.getElementById('theme').textContent = dark ? '☼' : '◐';
  filterProjects();
}
document.getElementById('language').addEventListener('click', () => {
  root.lang = root.lang === 'de' ? 'en' : 'de';
  savePreference('site_lang', root.lang);
  updateLabels();
});
document.getElementById('theme').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  savePreference('site_theme', root.dataset.theme);
  updateLabels();
});
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.getElementById('reset-preferences').addEventListener('click', () => {
  try { localStorage.removeItem('site_lang'); localStorage.removeItem('site_theme'); } catch (_) {}
  root.lang = navigator.language.startsWith('de') ? 'de' : 'en';
  root.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  updateLabels();
});
let category = 'all';
function filterProjects() {
  const input = document.getElementById('search');
  if (!input) return;
  const query = input.value.trim().toLocaleLowerCase();
  let count = 0;
  document.querySelectorAll('.project-row').forEach(row => {
    row.hidden = !(category === 'all' || row.dataset.category === category) || !row.dataset.search.toLocaleLowerCase().includes(query);
    if (!row.hidden) count++;
  });
  document.getElementById('empty').hidden = count !== 0;
  document.getElementById('results-count').textContent = translations(`${count} Projekte`, `${count} projects`);
}
document.getElementById('search')?.addEventListener('input', filterProjects);
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  filterProjects();
}));
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    status.textContent = translations('E-Mail-Adresse kopiert.', 'Email address copied.');
  } catch (_) {
    status.textContent = translations('Kopieren nicht verfügbar. Du kannst die E-Mail-Adresse markieren und manuell kopieren.', 'Copy is unavailable. Select the email address and copy it manually.');
  }
}));
updateLabels();
const motion = matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.principles > div, .store-layout, .section-heading, .project-row, .closing, .contact-card').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
  motion.addEventListener('change', () => {
    if (motion.matches) { document.querySelectorAll('.reveal').forEach(element => element.classList.add('revealed')); observer.disconnect(); }
  });
}
