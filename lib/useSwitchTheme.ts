import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useCallback, useEffect } from 'react';
import { LS, LSKeys } from './ls';

const themeAtom = atom<'light' | 'dark'>('light');

export const useSwitchTheme = () => {
  const theme = useStore(themeAtom);

  useEffect(() => {
    const savedTheme = LS.getItem(LSKeys.Theme, null);

    if (savedTheme) {
      themeAtom.set(savedTheme);
    }
  }, []);

  const mqListener = useCallback((e: MediaQueryListEvent) => {
    const savedTheme = LS.getItem(LSKeys.Theme, null);
    if (!savedTheme) {
      themeAtom.set(e.matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  const toggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    themeAtom.set(newTheme);

    LS.setItem(LSKeys.Theme, newTheme);
  }, [theme]);

  return {
    toggle,
    theme,
  };
};
