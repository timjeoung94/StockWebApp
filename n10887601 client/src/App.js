import './App.css';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Stocks from "./pages/Stocks";
import Quote from "./pages/Quote"
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Stocks">
            <Stocks/>
          </Route>
          <Route path="/Quote">
            <Quote/>
            </Route>
          <Route path="/Charts">
            <Charts/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
export default App;
