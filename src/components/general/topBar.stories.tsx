import React from 'react';
import TopBar from './topBar';
import { HashRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'General/TopBar',
  component: TopBar
};

export const Default = () => (
  <HashRouter>
    <TopBar location="home" logout={action('Logout clicked')} />
  </HashRouter>
);
