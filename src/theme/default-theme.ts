import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  // Shadows taken from Refactoring UI Page 166
  shadows: {
    100: '0  1px  3px rgba(0, 0, 0, .12), 0 1px  2px rgba(0, 0, 0, .24)',
    200: '0  3px  6px rgba(0, 0, 0, .15), 0 2px  4px rgba(0, 0, 0, .12)',
    300: '0 10px 20px rgba(0, 0, 0, .15), 0 3px  6px rgba(0, 0, 0, .10)',
    400: '0 15px 25px rgba(0, 0, 0, .15), 0 5px 10px rgba(0, 0, 0, .05)',
    500: '0 20px 40px rgba(0, 0, 0, .20)'
  },
  colors: {
    primary: {
      300: '#62B0E8',
      500: '#2680C2',
      700: '#0F609B'
    },
    secondary: {
      300: '#9FB3C8',
      500: '#627D98',
      700: '#334E68'
    },
    // Grays taken from Refactoring UI Color Swatch
    grays: {
      50: '#f7f7f7',
      100: '#e1e1e1',
      200: '#cfcfcf',
      300: '#b1b1b1',
      400: '#9e9e9e',
      500: '#7e7e7e',
      600: '#626262',
      700: '#515151',
      800: '#3b3b3b',
      900: '#222222'
    },
    white: '#fff',
    black: '#000',
    appBackground: '#ededed'
  },
  fontFamily: "'Roboto', sans-serif",
  // Sized taken from Refactoring UI Page 91
  fontSizes: {
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
    30: '30px',
    36: '36px',
    48: '48px',
    60: '60px',
    72: '72px'
  }
};

export { defaultTheme };
