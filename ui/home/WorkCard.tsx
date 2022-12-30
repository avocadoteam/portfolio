import { clsx } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { MailIcon } from '../svgs/MailIcon';
import { btn, mr20, mr9 } from '../theme/buttons.css';
import { mnrp } from '../theme/fonts';
import { linkInsertion } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const WorkCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small' })} style={{ height: 'max-content' }}>
      <div className={homeStyle.lineStart}>
        <Image src="/cloud.png" width={60} height={60} alt="Cloud" className={clsx(mr20, homeStyle.hideImg)} quality={100} />
        <div>
          <p className={clsx(tp({ variant: 'head2' }), mnrp.className)}>Хотите поработать с нами?</p>

          <p className={tp({ variant: 'shadow', m: 't1' })}>
            Спустя годы работы над собственными идеями, мы выходим на рынок и готовы воплотить ваши.
          </p>
          <p className={tp({ variant: 'shadow', m: 't1' })}>Наша студия открыта к любым предложениям.</p>
          <Link href="mailto:avocado@vk.mail" target="_blank" className={linkInsertion}>
            <button className={btn({ variant: 'secondary', m: 't20' })}>
              <MailIcon className={mr9} />
              avocado@vk.mail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
