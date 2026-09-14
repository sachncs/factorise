export function initThemeToggle() {
  const STORAGE_KEY = 'factorise-theme';

  const apply = (mode: 'light' | 'dark') => {
    if (mode === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      const next = isLight ? 'dark' : 'light';
      apply(next);
      localStorage.setItem(STORAGE_KEY, next);
      btn.setAttribute('aria-label', next === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
  });
}