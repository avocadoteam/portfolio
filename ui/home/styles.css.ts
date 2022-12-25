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
export const homeStyle = {
  content,
  img,
  card,
};
