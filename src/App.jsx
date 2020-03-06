import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import ViewProducts from './containers/ViewProducts';
import Cart from './containers/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ViewProducts />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="*">
            <Redirect from="*" to="/" />
            <Route path="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;