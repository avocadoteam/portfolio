import { useSwitchTheme } from '@/lib/useSwitchTheme';
import { clsx } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { intr } from '../theme/fonts';
import { darkTheme, lightTheme } from '../theme/theme.css';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const { theme } = useSwitchTheme();

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
