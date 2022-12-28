import { clsx } from '@/lib/utils';
import Image from 'next/image';
import { mnrp } from '../theme/fonts';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const PlusPlusCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small' })}>
      <div>
        <Image src="/plus_plus.png" width={56} height={56} alt="Plus plus logo" />
        <div>
          <div>
            <p className={clsx(tp({ variant: 'head2' }), mnrp.className)}>Plus-Plus</p>
            <div className={homeStyle.plusLabel}>new</div>
          </div>
          <p className={tp({ variant: 'shadow' })}>Прокачайте знания математики</p>
        </div>
      </div>
    </div>
  );
};
