import React, { FC, useEffect } from 'react';
import Layout from 'Containers/Layout';
import { Router, Switch, Route } from 'react-router-dom';
import Routes from 'Routes';
import history from 'Util/History';
import Login from 'Containers/Login';

const App: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Layout>
          <Routes />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
