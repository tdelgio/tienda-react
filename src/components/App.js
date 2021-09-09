import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { CartContext } from "../context/ cartContext";
import Cart from "./Cart";

console.log([CartContext]);

const App = () => {
  return (
    <CartContext.Provider>
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
            </Switch>
          </div>
        </Layout>
      </Router>{" "}
    </CartContext.Provider>
  );
};

export default App;
