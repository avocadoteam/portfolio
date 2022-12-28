import { hex2rgba } from '@/lib/utils';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/theme.css';

const content = style({
  maxWidth: '800px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '86px 0 96px',
});

const img = style({
  marginBottom: '56px',
});

const card = recipe({
  base: {
    backgroundColor: vars.colors.bgCard,
    position: 'relative',
    maskImage: 'paint(squircle)',
    '--squircle-fill': vars.colors.bgCard,
    '--squircle-radius': '40px',
    '--squircle-smooth': '1',
  } as any,
  variants: {
    padding: {
      big: {
        padding: '48px 44px',
      },
      small: {
        padding: '24px',
      },
    },
  },
});

const cardContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '56px',
});

const linkLine = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '18px',
  color: vars.colors.text.dark,
  ':hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

const appGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 72px)',
  gridTemplateRows: 'repeat(5, 72px)',
  columnGap: '28px',
  rowGap: '28px',
  marginTop: '12px',
});

const plusLabel = style({
  padding: '4px 6px',
  borderRadius: '12px',
  background: hex2rgba('#459BFF', 0.1),
  color: vars.palette.bluePlus,
  fontWeight: 800,
  fontSize: '12px',
  lineHeight: '15px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
  width: '30px',
  textAlign: 'center',
});

export const homeStyle = {
  content,
  img,
  card,
  linkLine,
  cardContent,
  appGrid,
  plusLabel,
};
