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

const screens = ['/hot/h1.png', '/hot/h2.png', '/hot/h3.png', '/hot/h4.png'];

export const HotCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small' })}>
      <div className={homeStyle.line}>
        <Image src="/hotornot.svg" width={56} height={56} alt="Hot or not logo" className={mr20} quality={100} />
        <div>
          <div className={homeStyle.line}>
            <p className={clsx(tp({ variant: 'head2', m: 'r.25' }), mnrp.className)}>Hot or Not</p>
            <div className={homeStyle.hotLabel}>new</div>
          </div>
          <p className={tp({ variant: 'shadow' })}>Узнайте рейтинг вашего профиля ВКонтакте и оценивайте чужие</p>
        </div>
      </div>
      <Link href="https://vk.com/hotprofile" target="_blank" className={linkInsertion}>
        <button className={btn({ variant: 'hotornot', m: 't32' })}>
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
            <Image src={l} quality={100} width={235} height={413} alt={l.split('/').pop()?.replace('.png', '') ?? ''} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
