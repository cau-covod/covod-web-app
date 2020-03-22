import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';

const UnAuthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Always render a login screen after login a token will be present and
        this component will unmount. */}
        <Route>
          <LoginScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default UnAuthenticatedApp;
