import React from 'react';
import { oauth, config } from '../services/covod-api';

interface AuthenticationContext {
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthenticationContext = React.createContext<
  AuthenticationContext | undefined
>(undefined);

const AuthenticationProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(null);

  async function login(username: string, password: string) {
    const tokenInfo = await oauth.getToken(username, password);

    config.token = tokenInfo.access_token;
    setToken(tokenInfo.access_token);
  }

  function logout() {
    setToken(null);
  }

  return (
    <AuthenticationContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuth(): {
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
} {
  const context = React.useContext(AuthenticationContext);

  if (typeof context === 'undefined')
    throw new Error('useAuth must be used inside a AuthenticationProvider.');

  return context;
}

export { AuthenticationProvider, useAuth };
