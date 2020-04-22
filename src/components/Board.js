import React from "react";
import GameAlgo from "./GameAlgo";

class Board extends React.Component {
  render() {
    return (
      <div>
        <GameAlgo amount={2} />
      </div>
    );
    // return (
    //   <div className="tableBox">
    //     <div>
    //       <Dealer />
    //     </div>
    //     <div>
    //       <Player />
    //     </div>
    //     <div>
    //       <Options />
    //     </div>
    //   </div>
    // );
  }
}

export default Board;
