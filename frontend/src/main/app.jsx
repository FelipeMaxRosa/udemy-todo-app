import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Todo from "../todo/todo";
import About from "../about/About";
import Menu from "../template/Menu";

export default function app(props) {
  return (
    <div className="container">
      <Menu />
      <Todo />
      <About />
    </div>
  );
}
