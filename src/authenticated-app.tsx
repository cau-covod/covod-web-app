import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LectureScreen from './screen/LectureScreen';
import FeedScreen from './screen/FeedScreen';

const AuthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <FeedScreen />
        </Route>
        <Route
          path="/lecture/:id"
          render={props => <LectureScreen lectureId={props.match.params.id} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
