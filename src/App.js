import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/productList">
            <ProductList></ProductList>
          </Route>
          <Route path="/productDetails/:name">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;