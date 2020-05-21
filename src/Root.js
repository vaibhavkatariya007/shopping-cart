import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {Loading} from './core';

import {ProductList, Cart} from './containers';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  </Provider>
);

export default Root;
