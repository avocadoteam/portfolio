import { useSwitchTheme } from '@/lib/useSwitchTheme';
import { clsx } from '@/lib/utils';
import { PropsWithChildren, useEffect } from 'react';
import { intr } from '../theme/fonts';
import { darkTheme, lightTheme } from '../theme/theme.css';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const { theme } = useSwitchTheme();

  useEffect(() => {
    (async function () {
      if (!('paintWorklet' in CSS)) {
        await import('css-paint-polyfill');
      }

      (CSS as any).paintWorklet.addModule('https://www.unpkg.com/css-houdini-squircle/squircle.min.js');
    })();
  }, []);

  return (
    <main
      style={{
        userSelect: 'none',
      }}
      className={clsx(theme === 'dark' ? darkTheme : lightTheme, intr.className)}
    >
      {children}
    </main>
  );
};
