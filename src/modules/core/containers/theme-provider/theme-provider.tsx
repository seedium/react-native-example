import React, { FC } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import { theme } from 'styles/theme';

const ThemeProvider: FC = ({ children }) => (
  <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
);

export { ThemeProvider };
