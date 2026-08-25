import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'zhy_portfolio_theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check saved local storage preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // 2. Fallback to dark mode as default visual identity
    return 'dark';
  });

  useEffect(() => {
    // Synchronize HTML element attribute for global CSS token application
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}