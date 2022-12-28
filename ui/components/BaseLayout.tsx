import { useThemeDetector } from '@/lib/useThemeDetector';
import { clsx } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { intr } from '../theme/fonts';
import { darkTheme, lightTheme } from '../theme/theme.css';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const isDark = useThemeDetector();

  return (
    <main
      style={{
        userSelect: 'none',
      }}
      className={clsx(isDark ? darkTheme : lightTheme, intr.className)}
    >
      {children}
    </main>
  );
};
