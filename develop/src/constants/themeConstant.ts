import { createTheme } from '@material-ui/core';

const defaultTheme = createTheme();
export const theme = {
  ...defaultTheme,
  animation: {
    fadeIn: {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
  fontFamily: {
    base: 'Sawarabi Mincho, sans-serif',
    english: "Times New Roman",
  },
  color: {
    navy: '#061b94',
    yellow: '#c8b432',
    rightGray: '#f3f3f3',
    gray: '#d7d7d7',
  },
  marginHeader: '5rem',
};

export type Theme = typeof theme;