import React, { useEffect, useState } from 'react';
import { useAuth } from '../provider/authentication-provider';
import { Redirect } from 'react-router-dom';

interface LoginScreenProps {
  redirectUri?: string;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ redirectUri }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    login('test', 'passwort').then(ok => setIsLoggedIn(ok));
  }, [login]);

  if (isLoggedIn) return <Redirect to={redirectUri ? redirectUri : '/'} />;

  return <h1>Login</h1>;
};

export default LoginScreen;
