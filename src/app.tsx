import React, { FC } from 'react';
import { LayoutUI } from 'Containers/layout';
import { Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'routes';
import { history } from 'Util/history';
import { Login } from 'Containers/Login';

export const App: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <LayoutUI>
          <Routes />
        </LayoutUI>
      </Switch>
    </Router>
  );
};
