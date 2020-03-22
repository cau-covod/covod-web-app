import React from 'react';
import { useAuth } from '../provider/authentication-provider';
import LoginCard from '../components/login/loginCard';
import styled from 'styled-components';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();

  const CenterFlex = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <CenterFlex>
      <div style={{ width: '60%', maxWidth: '650px', height: '60%' }}>
        <LoginCard onConfirm={login} />
      </div>
    </CenterFlex>
  );
};

export default LoginScreen;
