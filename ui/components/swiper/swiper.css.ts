import { globalStyle, GlobalStyleRule, style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';

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
      display: 'none',
    },
  },
});
globalStyle('.swiper-button-prev', {
  backgroundImage: 'url(/chevron_left.svg)',
  left: '20px',
  ...baseArrow,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
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
  width: '220px',
  height: '413px',
  '@media': {
    'screen and (max-width: 400px)': {
      width: '220px',
    },
  },
});

const swiperContainer = style({
  marginTop: '39px',
  height: '413px',

  '@media': {
    'screen and (max-width: 825px)': {
      marginLeft: 0,
      marginTop: '24px',
    },
  },
});

export const swStls = {
  swiperSlider,
  swiperContainer,
};
