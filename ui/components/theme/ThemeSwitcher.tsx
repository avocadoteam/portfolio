import { useSwitchTheme } from '@/lib/useSwitchTheme';
import { thStyles } from './styles.css';

export const ThemeSwitcher = () => {
  const { toggle, theme } = useSwitchTheme();

  return (
    <div className={thStyles.wrapper} onClick={toggle}>
      <div className={thStyles.sun({ theme })} />
      <div className={thStyles.moon({ theme })} />
    </div>
  );
};
