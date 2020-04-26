import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="tableBox">
          <h1>BlackJack</h1>
          <Link to="/Board">
            <div>
              <button className="optionButton">Play</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
