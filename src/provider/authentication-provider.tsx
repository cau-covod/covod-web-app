import React, { useState, useEffect, useCallback } from 'react';
import { oauth, config } from '../services/covod-api';
import { TokenInfo } from '../typings/token';

interface AuthenticationContext {
  token: string | null;
  username: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthenticationContext = React.createContext<
  AuthenticationContext | undefined
>(undefined);

const PERSISTENCE_KEY = 'token-info';

function usePersistenceToken(): [
  TokenInfo | null | undefined,
  (info: TokenInfo | null) => void
] {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null | undefined>(
    undefined
  );

  useEffect(() => {
    const data = localStorage.getItem(PERSISTENCE_KEY);

    if (data === null) {
      console.info('[Auth] No token found in storage.');
      setTokenInfo(null);
      return;
    }

    /* The token info contains a expires_in information which is a relative
     * date in seconds. We should check if the persisted token is still valid.
     * However in order to do that we would also have to save the date it was saved
     * or convert it to an absolute date. It is valid for 10 days. Who knows if
     * we will still develop this in 10 days...
     */
    console.info('[Auth] Token found in storage.');
    setTokenInfo(JSON.parse(data));
  }, []);

  const setInfo = useCallback((info: TokenInfo | null) => {
    setTokenInfo(info);
    if (info !== null) {
      console.info('[Auth] Saving token to storage.');
      localStorage.setItem(PERSISTENCE_KEY, JSON.stringify(info));
    } else {
      console.info('[Auth] Removing token from storage.');
      localStorage.removeItem(PERSISTENCE_KEY);
    }
  }, []);

  return [tokenInfo, setInfo];
}

const AuthenticationProvider: React.FC = ({ children }) => {
  const [tokenInfo, setToken] = usePersistenceToken();
  const [username, setUsername] = React.useState<string>('');

  async function login(username: string, password: string): Promise<void> {
    const tokenInfo = await oauth.getToken(username, password);

    config.token = tokenInfo.access_token;
    setToken(tokenInfo);
    setUsername(username);
  }

  function logout() {
    setToken(null);
  }

  if (typeof tokenInfo === 'undefined') return null;

  return (
    <AuthenticationContext.Provider
      value={{
        token: tokenInfo ? tokenInfo.access_token : null,
        username,
        login,
        logout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuth(): {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
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
