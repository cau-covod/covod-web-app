import React from 'react';
import LoginCard from './loginCard';

export default {
  title: 'Login/LoginCard',
  component: LoginCard
};

export const Default = () => (
  <LoginCard
    onConfirm={async (u, p) =>
      void alert('Confirm clicked with: ' + u + ' ' + p)
    }
  />
);

export const ConfirmFail = () => (
  <LoginCard
    onConfirm={async () => {
      throw new Error('Something');
    }}
  />
);
