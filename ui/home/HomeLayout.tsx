import { clsx } from '@/lib/utils';
import Image from 'next/image';
import { intr, mnrp } from '../theme/fonts';
import { textBlue } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const HomeLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" />
      </div>

      <div className={homeStyle.card}>
        <p className={clsx(tp({ variant: 'head' }), mnrp.className)}>
          Создаём <span className={textBlue}>уникальные</span> мини-приложения и не только
        </p>
        <p className={clsx(tp({ variant: 'shadow' }), intr.className)}>
          Наша студия создаёт мини-приложения, сайты, чат-ботов и не только.
        </p>
        <p className={clsx(tp({ variant: 'shadow' }), intr.className)}>
          Мы имеем огромный опыт в запуске продуктов — наши приложения пробовали 10+ миллиона пользователей, мы неоднократно
          выигрывали VK Fresh Code и привносили новые идеи сообществу разработчиков.
        </p>

        <div>
          <Image src="/check_icon.svg" width={24} height={24} alt="Check" />
          <p className={clsx(tp({ variant: 'dark' }), intr.className)}>Мы — подрядчики ВКонтакте</p>
          <Image src="/chevron_16.svg" width={12} height={16} alt="Chevron" />
        </div>
      </div>
    </div>
  );
};
