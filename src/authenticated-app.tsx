import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LectureScreen from './screen/LectureScreen';
import FeedScreen from './screen/FeedScreen';

const AuthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FeedScreen />
        </Route>
        <Route
          path="/lecture/:id"
          exact
          render={props => <LectureScreen lectureId={props.match.params.id} />}
        />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
