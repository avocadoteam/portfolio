import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const tp = recipe({
  base: {
    padding: 0,
    margin: 0,
  },
  variants: {
    variant: {
      head: {
        fontSize: '30px',
        lineHeight: '123.6%',
        color: vars.colors.text.head,
      },
      shadow: {
        fontWeight: '400 !important',
        lineHeight: '136.02%',
        fontSize: '17px',
        color: vars.colors.text.shadow,
      },
      dark: {
        fontWeight: '700 !important',
        lineHeight: '19px',
        fontSize: '16px',

        color: vars.colors.text.dark,
      },
    },
    m: {
      'x.5': {
        margin: '0 .5rem',
      },
      t1: {
        marginTop: '1rem',
      },
      t2: {
        marginTop: '2rem',
      },
    },
  },
});
