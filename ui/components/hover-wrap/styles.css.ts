import { style } from '@vanilla-extract/css';

const wrapper = style({
  transformStyle: 'preserve-3d',
  transform: 'perspective(1000px)',
});
const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const shadow = style({
  position: 'absolute',
  width: '95%',
  height: '95%',
  top: '2.55%',
  left: '2.55%',
  background: 'none',
});

const layer = style({
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const light = style([
  layer,
  {
    opacity: 0,
  },
]);

export const hwStyles = {
  wrapper,
  container,
  shadow,
  layer,
  light,
};
