import { useThemeDetector } from '@/lib/useThemeDetector';
import { PropsWithChildren } from 'react';
import { darkTheme, lightTheme } from '../theme/theme.css';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const isDark = useThemeDetector();

  return <main className={isDark ? darkTheme : lightTheme}>{children}</main>;
};
