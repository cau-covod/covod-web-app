import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import AuthenticatedApp from './authenticated-app';
import { defaultTheme } from './theme/default-theme';

const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  background-color: ${({ theme }) => theme.colors.appBackground};;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: ${({ theme }) => theme.colors.secondary[500]};;
  color: ${({ theme }) => theme.colors.white};;
}

::-moz-selection {
  background-color: ${({ theme }) => theme.colors.secondary[500]};;
  color: ${({ theme }) => theme.colors.white};;
}
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <AuthenticatedApp />
      </>
    </ThemeProvider>
  );
}

export default App;
