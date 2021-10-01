import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme();
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
  },
  color: {
    navy: '#061b94',
    yellow: '#c8b432',
    rightGray: '#f3f3f3',
  },
  marginHeader: '5rem',
};

export type Theme = typeof theme;
