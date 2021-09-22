import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { CartContextProvider } from "../context/CartContext";
import Cart from "./Cart";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Layout>
          <div className="block z-0 h-full bg-gray-100">
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route path="/details/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/confirmation">
                <div>gracias!</div>
              </Route>
            </Switch>
          </div>
        </Layout>
      </Router>{" "}
    </CartContextProvider>
  );
};

export default App;
