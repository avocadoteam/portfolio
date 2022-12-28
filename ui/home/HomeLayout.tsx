import { clsx } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '../svgs/CheckIcon';
import { ChevronRight } from '../svgs/ChevronRight';
import { MailIcon } from '../svgs/MailIcon';
import { VKLogo } from '../svgs/VKLogo';
import { btn, mr12, mr9 } from '../theme/buttons.css';
import { mnrp } from '../theme/fonts';
import { linkInsertion, textBlue } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const HomeLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" />
      </div>

      <div className={clsx(homeStyle.card, homeStyle.cardContent)}>
        <div>
          <p className={clsx(tp({ variant: 'head' }), mnrp.className)}>
            Создаём <span className={textBlue}>уникальные</span> мини-приложения и не только
          </p>
          <p className={tp({ variant: 'shadow', m: 't1' })}>
            Наша студия создаёт мини-приложения, сайты, чат-ботов и не только.
          </p>
          <p className={tp({ variant: 'shadow', m: 't2' })}>
            Мы имеем огромный опыт в запуске продуктов — наши приложения пробовали 10+ миллиона пользователей, мы
            неоднократно выигрывали VK Fresh Code и привносили новые идеи сообществу разработчиков.
          </p>

          <Link href="https://vk.com/mini-apps" target="_blank" className={clsx(homeStyle.linkLine, linkInsertion)}>
            <CheckIcon />
            <p className={tp({ variant: 'dark', m: 'x.5' })}>Мы — подрядчики ВКонтакте</p>
            <ChevronRight />
          </Link>

          <Link href="https://vk.com/avocadoteam" target="_blank" className={linkInsertion}>
            <button className={btn({ variant: 'primary', m: 't34' })}>
              <VKLogo className={mr12} />
              Сообщество ВКонтакте
            </button>
          </Link>
          <Link href="mailto:avocado@vk.mail" target="_blank" className={linkInsertion}>
            <button className={btn({ variant: 'secondary', m: 't12' })}>
              <MailIcon className={mr9} />
              Связаться
            </button>
          </Link>
        </div>
        <div>
          <Image src="/plus_plus.png" width={72} height={72} alt="Plus plus logo" />
        </div>
      </div>
    </div>
  );
};
