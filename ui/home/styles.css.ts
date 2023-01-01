import { hex2rgba } from '@/lib/utils';
import { ComplexStyleRule, keyframes, style } from '@vanilla-extract/css';
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
  '@media': {
    'screen and (max-width: 825px)': {
      padding: '2rem 1rem',
      width: 'calc(100% - 2rem)',
    },
  },
});

const contentGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '20px',
  marginTop: '1rem',
  '@media': {
    'screen and (max-width: 825px)': {
      gridTemplateColumns: '1fr',
      rowGap: '12px',
      marginTop: '12px',
    },
  },
});
const contentGridRows = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '20px',
  '@media': {
    'screen and (max-width: 825px)': {
      rowGap: '12px',
    },
  },
});

const img = style({
  marginBottom: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 825px)': {
      marginBottom: '37px',
      marginLeft: '13px',
    },
  },
});

const card = recipe({
  base: {
    background: 'paint(squircle)',
    '--squircle-fill': vars.colors.bgCard,
    '--squircle-radius': '40px',
    '--squircle-smooth': '1',
  } as any,
  variants: {
    padding: {
      big: {
        padding: '48px 44px',
        '@media': {
          'screen and (max-width: 825px)': {
            padding: '24px',
          },
        },
      },
      small: {
        padding: '24px',
      },
    },
    height: {
      max: {
        height: 'max-content',
      },
    },
  },
});

const cardContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '56px',
  '@media': {
    'screen and (max-width: 825px)': {
      gridTemplateColumns: '1fr',
      rowGap: '28px',
    },
  },
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
  '@media': {
    'screen and (max-width: 825px)': {
      gridTemplateRows: 'auto',
      marginTop: '0',
    },
    'screen and (max-width: 359px)': {
      gridTemplateColumns: 'repeat(3, 56px)',
    },
  },
});
const appsWrap = style({
  '@media': {
    'screen and (max-width: 825px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridRowStart: 1,
    },
  },
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
const lineStart = style({
  display: 'flex',
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
  '@media': {
    'screen and (max-width: 400px)': {
      lineHeight: '18px',
      fontSize: '15px',
      height: '23px',
      padding: '8px',
    },
  },
});

const numbs = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  columnGap: '8px',
  margin: '1rem 0',
  '@media': {
    'screen and (max-width: 400px)': {
      columnGap: '4px',
    },
  },
});

const counterWrap = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem 0',
  textAlign: 'center',
});
const copyWrap = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem 0',
  color: vars.colors.text.copy,
  height: 'max-content',
});

const ckw = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const rotation = style({
  animation: `${ckw} 3s infinite linear`,
});
const hideImg = style({
  '@media': {
    'screen and (max-width: 400px)': {
      display: 'none',
    },
  },
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
  lineStart,
  copyWrap,
  rotation,
  hideImg,
  contentGridRows,
  appsWrap,
};
