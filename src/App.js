import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ThreeMusketeers from "./ThreeMusketeers";
import Peanuts from "./Peanuts";
import Milk from "./Milk";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/3musketeers">
          <ThreeMusketeers />
        </Route>

        <Route path="/peanuts">
          <Peanuts />
        </Route>

        <Route path="/milk">
          <Milk />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
