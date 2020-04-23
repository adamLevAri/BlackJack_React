import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import Menu from "./components/Menu";

//components

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/board" exact component={Board} />
      </Switch>
    );
  }
}
export default Routes;
