import React from "react";
import { Link } from "react-router-dom";

class Board extends React.Component {
  render() {
    return (
      <div
        className="tableBox"
        style={{
          width: `100%`,
          height: `100%`
        }}
      >
        <div className="App">
          <h1>BlackJack</h1>
          <Link to="/board">
            <div>
              <h1>Press to play</h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Board;
