import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProductListView } from 'Containers/ProductList/table-container';
import { OrderListView } from 'Containers/OrderList/table-container';
import { Dashboard } from 'Containers/dashboard';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/products">
        <ProductListView />
      </Route>
      <Route exact path="/orders">
        <OrderListView />
      </Route>
    </Switch>
  );
};
