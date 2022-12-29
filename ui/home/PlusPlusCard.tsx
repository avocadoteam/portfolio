import { clsx } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppIcon } from '../svgs/AppIcon';
import { btn, mr20, mr9 } from '../theme/buttons.css';
import { mnrp } from '../theme/fonts';
import { linkInsertion } from '../theme/theme.css';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';
import { swStls } from './swiper.css';

const screens = ['/plus/p1.png', '/plus/p2.png', '/plus/p3.png', '/plus/p4.png'];

export const PlusPlusCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small' })}>
      <div className={homeStyle.line}>
        <Image src="/plus_plus.png" width={56} height={56} alt="Plus plus logo" className={mr20} />
        <div>
          <div className={homeStyle.line}>
            <p className={clsx(tp({ variant: 'head2', m: 'r.25' }), mnrp.className)}>Plus-Plus</p>
            <div className={homeStyle.plusLabel}>new</div>
          </div>
          <p className={tp({ variant: 'shadow' })}>Прокачайте знания математики</p>
        </div>
      </div>
      <Link href="https://vk.com/plusmath" target="_blank" className={linkInsertion}>
        <button className={btn({ variant: 'plusplus', m: 't32' })}>
          <AppIcon className={mr9} />
          Открыть
        </button>
      </Link>
      <Swiper
        freeMode
        navigation
        slidesPerView="auto"
        spaceBetween={10}
        modules={[FreeMode, Navigation]}
        className={swStls.swiperContainer}
      >
        {screens.map(l => (
          <SwiperSlide key={l} className={swStls.swiperSlider}>
            <Image src={l} width={235} height={413} alt={l.split('/').pop()?.replace('.png', '') ?? ''} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};