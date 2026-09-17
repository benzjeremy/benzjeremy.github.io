(() => {
  let language = navigator.language.startsWith('de') ? 'de' : 'en';
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  try {
    const savedLanguage = localStorage.getItem('site_lang');
    const savedTheme = localStorage.getItem('site_theme');
    if (['de', 'en'].includes(savedLanguage)) language = savedLanguage;
    if (['light', 'dark'].includes(savedTheme)) theme = savedTheme;
  } catch (_) { /* Storage is optional. */ }
  document.documentElement.lang = language;
  document.documentElement.dataset.theme = theme;
})();
