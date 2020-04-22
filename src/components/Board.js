import React from "react";
import GameAlgo from "./GameAlgo";

class Board extends React.Component {
  render() {
    return (
      <div>
        <GameAlgo amount={2} />
      </div>
    );
  }
}

export default Board;
