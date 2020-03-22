import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    shadows: Shadows;
    fontSizes: FontSizes;
    fontFamily: string;
  }
}

interface Shadows {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
}

interface Colors {
  primary: {
    300: string;
    500: string;
    700: string;
    900: string;
  };
  secondary: {
    300: string;
    500: string;
    700: string;
  };
  grays: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  white: string;
  black: string;
  appBackground: string;
}

interface FontSizes {
  12: string;
  14: string;
  16: string;
  18: string;
  20: string;
  24: string;
  30: string;
  36: string;
  48: string;
  60: string;
  72: string;
}
