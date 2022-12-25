import { useThemeDetector } from '@/lib/useThemeDetector';
import { clsx } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { intr, mnrp } from '../theme/fonts';
import { darkTheme, lightTheme } from '../theme/theme.css';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const isDark = useThemeDetector();

  return <main className={clsx(mnrp.className, intr.className, isDark ? darkTheme : lightTheme)}>{children}</main>;
};
