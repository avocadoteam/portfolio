import { style } from '@vanilla-extract/css';
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

const card = style({
  backgroundColor: vars.colors.bgCard,
  padding: '48px 44px',
  position: 'relative',
  maskImage: 'paint(squircle)',
  '--squircle-fill': vars.colors.bgCard,
  '--squircle-radius': '40px',
  '--squircle-smooth': '1',
} as any);

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

export const homeStyle = {
  content,
  img,
  card,
  linkLine,
  cardContent,
  appGrid,
};
