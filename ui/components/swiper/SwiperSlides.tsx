import Image from 'next/image';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swStls } from './swiper.css';

export const SwiperSlides = ({ screens }: { screens: string[] }) => {
  return (
    <div className={swStls.swiperContainer}>
      <AutoSizer>
        {({ width }) => (
          <Swiper
            freeMode
            navigation
            slidesPerView="auto"
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            style={{
              width,
            }}
          >
            {screens.map(l => (
              <SwiperSlide key={l} className={swStls.swiperSlider}>
                <Image src={l} quality={100} width={235} height={413} alt={l.split('/').pop()?.replace('.png', '') ?? ''} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </AutoSizer>
    </div>
  );
};
