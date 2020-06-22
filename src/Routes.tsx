import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from 'Containers/ProductList/ProductListView';
import OrderList from 'Containers/OrderList/OrderListView';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/products">
        <ProductList />
      </Route>
      <Route exact path="/orders">
        <OrderList />
      </Route>
    </Switch>
  );
};

export default Routes;
