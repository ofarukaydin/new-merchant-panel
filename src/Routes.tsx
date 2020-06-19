import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from 'Containers/ProductList/ProductListView';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/products">
        <ProductList />
      </Route>
    </Switch>
  );
};

export default Routes;
