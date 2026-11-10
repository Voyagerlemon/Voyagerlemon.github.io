(() => {
  const root = document.documentElement;
  const storageKey = 'haiyang-xu-theme';
  let theme = 'dark';
  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
  } catch {
    // Theme switching also works when browser storage is unavailable.
  }

  function applyTheme(nextTheme) {
    root.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]').content =
      nextTheme === 'light' ? '#faf9f6' : '#0b0d13';
  }

  applyTheme(theme);

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const label = button.querySelector('.theme-label');

    function updateButton() {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const description = `Switch to ${nextTheme} theme`;
      button.setAttribute('aria-label', description);
      button.title = description;
      label.textContent = nextTheme === 'light' ? 'Light' : 'Dark';
    }

    updateButton();
    button.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      updateButton();
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Keep the selected theme for this page even if it cannot be saved.
      }
    });
  });
})();
