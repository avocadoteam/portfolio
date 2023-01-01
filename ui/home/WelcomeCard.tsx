import { useMQuery } from '@/lib/useMQuery';
import { clsx } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { HoverWrap } from '../components/hover-wrap/HoverWrap';
import { CheckIcon } from '../svgs/CheckIcon';
import { ChevronRight } from '../svgs/ChevronRight';
import { MailIcon } from '../svgs/MailIcon';
import { VKLogo } from '../svgs/VKLogo';
import { btn, mr12, mr9 } from '../theme/buttons.css';
import { mnrp } from '../theme/fonts';
import { linkInsertion, textBlue } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

const apps = [
  'plus_plus',
  'hotornot',
  'capt',
  'dict',
  'deliv',
  'friendship',
  'stuff',
  'city',
  'med_card',
  'hinter',
  'purify',
  'clicker',
];

export const WelcomeCard = () => {
  const lessThan350px = useMQuery('screen and (max-width: 359px)');
  const size = lessThan350px ? 56 : 72;

  return (
    <div className={clsx(homeStyle.card({ padding: 'big' }), homeStyle.cardContent)}>
      <div>
        <p className={clsx(tp({ variant: 'head' }), mnrp.className)}>
          Создаём <span className={textBlue}>уникальные</span> мини-приложения и не только
        </p>
        <p className={tp({ variant: 'shadow', m: 't1' })}>
          Наша студия создаёт мини-приложения, сайты, чат-ботов и не только.
        </p>
        <p className={tp({ variant: 'shadow', m: 't2' })}>
          Мы имеем огромный опыт в запуске продуктов — наши приложения пробовали 10+ миллиона пользователей, мы неоднократно
          выигрывали VK Fresh Code и привносили новые идеи сообществу разработчиков.
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
      <div className={homeStyle.appsWrap}>
        <div className={homeStyle.appGrid}>
          {apps.map(app => (
            <HoverWrap borderRadius={25} height={size} width={size} key={app} scale={10}>
              <Image src={`/${app}.svg`} fill alt="App logo" quality={100} />
            </HoverWrap>
          ))}
        </div>
      </div>
    </div>
  );
};
