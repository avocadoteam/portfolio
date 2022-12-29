import { hex2rgba } from '@/lib/utils';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const btn = recipe({
  base: {
    outline: 'none',
    border: 'none',
    borderRadius: '36px',
    padding: '12px 20px 12px 16px',
    fontWeight: '600',
    lineHeight: '19px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontStyle: 'inherit',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.btnPrimary,
        color: vars.colors.text.btnPrimary,
      },
      secondary: {
        backgroundColor: vars.colors.btnSecondary,
        color: vars.colors.text.btnSecondary,
      },
      plusplus: {
        background: hex2rgba('#459BFF', 0.1),
        color: vars.palette.bluePlus,
        lineHeight: '18px',
        fontSize: '15px',
      },
      hotornot: {
        background: hex2rgba('#FF8400', 0.1),
        color: vars.palette.yellowHot,
        lineHeight: '18px',
        fontSize: '15px',
      },
      capt: {
        background: hex2rgba('#EB3040', 0.1),
        color: vars.palette.redCapt,
        lineHeight: '18px',
        fontSize: '15px',
      },
    },
    m: {
      t12: {
        marginTop: '12px',
      },
      t34: {
        marginTop: '34px',
      },
      t32: {
        marginTop: '32px',
      },
    },
  },
});

export const mr12 = style({
  marginRight: '12px',
});
export const mr20 = style({
  marginRight: '20px',
});
export const mr9 = style({
  marginRight: '9px',
});
