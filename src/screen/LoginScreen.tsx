import React, { useEffect } from 'react';
import { useAuth } from '../provider/authentication-provider';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  useEffect(() => {
    login('test', 'passwort');
  }, [login]);

  return <h1>Login</h1>;
};

export default LoginScreen;
