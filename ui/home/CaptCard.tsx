import { clsx } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { AppIcon } from '../svgs/AppIcon';
import { btn, mr20, mr9 } from '../theme/buttons.css';
import { mnrp } from '../theme/fonts';
import { linkInsertion } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const CaptCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small' })}>
      <div className={homeStyle.line}>
        <Image src="/capt.svg" width={56} height={56} alt="Capt logo" className={mr20} quality={100} />
        <div>
          <div className={homeStyle.line}>
            <p className={clsx(tp({ variant: 'head2', m: 'r.25' }), mnrp.className)}>Капт</p>
            <div className={homeStyle.captLabel}>new</div>
          </div>
          <p className={tp({ variant: 'shadow' })}>Захватывайте территорию противника</p>
        </div>
      </div>
      <Link href="https://vk.com/capture" target="_blank" className={linkInsertion}>
        <button className={btn({ variant: 'capt', m: 't32' })}>
          <AppIcon className={mr9} />
          Открыть
        </button>
      </Link>
    </div>
  );
};
