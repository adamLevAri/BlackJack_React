import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import Menu from "./components/Menu";
import Header from "./components/Header";

//components

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/board" exact component={Board} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
