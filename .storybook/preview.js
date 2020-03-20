import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { defaultTheme } from '../src/theme/default-theme';

addDecorator(
  withThemesProvider([
    { name: 'Default', backgroundColor: '#ededed', ...defaultTheme }
  ])
);
