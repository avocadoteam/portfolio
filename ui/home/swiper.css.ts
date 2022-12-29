import { globalStyle, GlobalStyleRule, style } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

const baseArrow: GlobalStyleRule = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: vars.colors.bgCard,
  width: '24px',
  height: '24px',
  boxShadow: '0px 8px 64px rgba(0, 0, 0, 0.5)',
  borderRadius: '24px',
};
globalStyle('.swiper-button-next', {
  backgroundImage: 'url(/chevron_right.svg)',
  right: '20px',
  ...baseArrow,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '24px',
      height: '24px',
      top: '55%',
      right: '0',
    },
  },
});
globalStyle('.swiper-button-prev', {
  backgroundImage: 'url(/chevron_left.svg)',
  left: '20px',
  ...baseArrow,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '24px',
      height: '24px',
      top: '55%',
      left: '0',
    },
  },
});
globalStyle('.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled', {
  display: 'none',
});
globalStyle('.swiper-button-next:after, .swiper-button-prev:after', {
  content: '""',
});

const swiperSlider = style({
  borderRadius: '20px',
  overflow: 'hidden',
  width: '235px',
  height: '413px',
});

const swiperContainer = style({
  width: '342px',
  marginTop: '39px',
});

export const swStls = {
  swiperSlider,
  swiperContainer,
};
