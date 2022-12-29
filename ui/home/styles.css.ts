import { hex2rgba } from '@/lib/utils';
import { ComplexStyleRule, style } from '@vanilla-extract/css';
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

const contentGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '20px',
  marginTop: '1rem',
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

const baseLabel: ComplexStyleRule = {
  padding: '4px 6px',
  borderRadius: '12px',
  fontWeight: 800,
  fontSize: '12px',
  lineHeight: '15px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
  width: '30px',
  textAlign: 'center',
};

const plusLabel = style({
  ...baseLabel,
  background: hex2rgba('#459BFF', 0.1),
  color: vars.palette.bluePlus,
});
const hotLabel = style({
  ...baseLabel,
  background: hex2rgba('#FF8400', 0.1),
  color: vars.palette.yellowHot,
});
const captLabel = style({
  ...baseLabel,
  background: hex2rgba('#EB3040', 0.1),
  color: vars.palette.redCapt,
});

const line = style({
  display: 'flex',
  alignItems: 'center',
});

const numWrap = style({
  backgroundColor: vars.colors.btnSecondary,
  color: vars.colors.text.head,
  padding: '12px',
  width: '13px',
  height: '33px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '27px',
  lineHeight: '33px',
});

const numbs = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  columnGap: '8px',
  margin: '1rem 0',
});

const counterWrap = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem 0',
});

export const homeStyle = {
  content,
  contentGrid,
  img,
  card,
  linkLine,
  cardContent,
  appGrid,
  plusLabel,
  line,
  hotLabel,
  captLabel,
  numWrap,
  numbs,
  counterWrap,
};
