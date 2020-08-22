import React from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";

import Todo from "./todo/Todo";
import About from "./about/About";

const Routes = () => {
  return (
    <HashRouter>
      <Route component={Todo} path="/todos" />
      <Route component={About} path="/about" />
      <Redirect from="*" to="/todos" />
    </HashRouter>
  );
};

export default Routes;
