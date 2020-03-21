import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';

const UnAuthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default UnAuthenticatedApp;
