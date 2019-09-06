import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import ProductDisplayPage from './containers/ProductDisplayPage/ProductDisplayPage';
import Logout from './containers/Logout/Logout';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {

  render() {
    let routes =
      <Switch>
        <Route path="/shop/men" component={ProductDisplayPage}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/cart/checkout" component={Checkout}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={ProductDisplayPage}></Route>
      </Switch>
      ;
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
