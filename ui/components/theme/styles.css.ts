import { vars } from '@/ui/theme/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const wrapper = style({
  position: 'relative',
  height: '40px',
  width: '54px',
  borderRadius: '100px',
  cursor: 'pointer',
  backgroundColor: vars.colors.bgCard,
});

const sun = recipe({
  base: {
    pointerEvents: 'none',
    position: 'absolute',
    top: '7px',
    left: '21px',
    width: '26px',
    height: '26px',
    backgroundImage: 'url("/sun-icon.webp")',
    backgroundSize: 'cover',
    transition: 'left 0.1s ease, opacity 0.1s ease',
  },
  variants: {
    theme: {
      dark: {
        opacity: 0,
        left: '7px',
      },
      light: {},
    },
  },
});

const moon = recipe({
  base: {
    pointerEvents: 'none',
    position: 'absolute',
    top: '7px',
    left: '7px',
    width: '26px',
    height: '26px',
    backgroundImage: 'url("/moon-icon.webp")',
    backgroundSize: 'cover',
    transform: 'translateX(15px)',
    opacity: 0,
    transition: 'left 0.1s ease, opacity 0.1s ease',
  },
  variants: {
    theme: {
      dark: {
        opacity: 1,
        left: '-8px',
      },
      light: {},
    },
  },
});

export const thStyles = {
  wrapper,
  sun,
  moon,
};
