import React from 'react';
import { oauth, config } from '../services/covod-api';

interface AuthenticationContext {
  token: string | null;
  username: string;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthenticationContext = React.createContext<
  AuthenticationContext | undefined
>(undefined);

const AuthenticationProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(null);
  const [username, setUsername] = React.useState<string>('');

  async function login(username: string, password: string): Promise<boolean> {
    try {
      const tokenInfo = await oauth.getToken(username, password);

      config.token = tokenInfo.access_token;
      setToken(tokenInfo.access_token);
      setUsername(username);
      return true;
    } catch (e) {
      return false;
    }
  }

  function logout() {
    setToken(null);
  }

  return (
    <AuthenticationContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuth(): {
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
} {
  const context = React.useContext(AuthenticationContext);

  if (typeof context === 'undefined')
    throw new Error('useAuth must be used inside a AuthenticationProvider.');

  //Strip username from the return data
  const { username, ...rest } = context;

  return rest;
}

function useUserInfo(): {
  username: string;
} {
  const context = React.useContext(AuthenticationContext);

  if (typeof context === 'undefined')
    throw new Error('useAuth must be used inside a AuthenticationProvider.');

  const { username } = context;

  return { username };
}

export { AuthenticationProvider, useAuth, useUserInfo };
