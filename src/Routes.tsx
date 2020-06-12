import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from 'Components/Profile';
import MainPage from 'Containers/MainPage';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
