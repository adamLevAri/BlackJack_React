import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Menu />
      // </div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
