import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';

const UnAuthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <LoginScreen redirectUri="/" />
        </Route>
        <Route>
          <LoginScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default UnAuthenticatedApp;
