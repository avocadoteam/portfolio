import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import { intr, mnrp } from './fonts';

const root = createGlobalTheme('body', {
  space: {
    small: '.25rem',
    medium: '.5rem',
    normal: '1rem',
  },
  fonts: {
    familyMan: `${mnrp.style.fontFamily}`,
    familyInter: `${intr.style.fontFamily}`,
  },
  palette: {
    white: '#ffffff',
    black: '#000000',
    redCapt: '#EB3040',
    bluePlus: '#459BFF',
    yellowHot: '#FF8400',
  },
});

const colorsContract = createThemeContract({
  bg: null,
  bgCard: null,
  btnPrimary: null,
  btnSecondary: null,

  text: {
    head: null,
    shadow: null,
    dark: null,
    copy: null,
    btnPrimary: null,
    btnSecondary: null,
  },
});

export const lightTheme = createTheme(colorsContract, {
  bg: '#F3F4F7',
  bgCard: '#FFFFFF',
  btnPrimary: '#459BFF',
  btnSecondary: '#F6F6F6',

  text: {
    head: '#000000',
    shadow: '#959595',
    dark: '#757575',
    copy: '#DBDBDB',
    btnPrimary: '#FFFFFF',
    btnSecondary: '#818181',
  },
});
export const darkTheme = createTheme(colorsContract, {
  bg: '#303235',
  bgCard: '#3B3C3F',
  btnPrimary: '#FFFFFF',
  btnSecondary: 'rgba(255, 255, 255, 0.1)',

  text: {
    head: '#FFFFFF',
    shadow: '#BABABA',
    dark: '#D8D8D8',
    copy: '#6B6B6B',
    btnPrimary: '#3B3C3F',
    btnSecondary: '#BDBDBD',
  },
});

export const vars = { ...root, colors: colorsContract };

globalStyle('body', {
  boxSizing: 'border-box',
  fontSize: '16px',
  fontStyle: 'normal',
  backgroundColor: vars.colors.bg,
});
