import React, { FC } from 'react';
import reactotron from 'Util/Config/Reactotron';
import Layout from 'Containers/Layout';
import { Router } from 'react-router-dom';
import Routes from 'Routes';
import history from 'Util/History';
import 'tailwind.css';

const App: FC = () => {
  reactotron.log!('test');
  return (
    <Layout>
      <Router history={history}>
        <Routes />
      </Router>
    </Layout>
  );
};

export default App;
