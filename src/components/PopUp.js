import React from "react";
import { Link } from "react-router-dom";

import Dealer from "./Dealer";
import Player from "./Player";

class PopUp extends React.Component {
  render() {
    return (
      <div className="popupBox">
        <div>
          <h1>The Winner is !! {this.props.winner}</h1>

          <div>
            <h1>Dealer:{this.props.dealerSum}</h1>{" "}
            <h1>Player:{this.props.playerSum}</h1>
          </div>
        </div>

        <div className="tableBox">
          <div>
            <Dealer
              dealerCards={this.props.dealerCards}
              dealerSum={this.props.dealerSum}
              playerFinish={this.props.playerFinish}
            />
          </div>
          <div>
            <Player
              playerCards={this.props.playerCards}
              playerSum={this.props.playerSum}
            />
          </div>
        </div>
        <Link to="/">
          <div>
            <button className="optionButton">Replay</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default PopUp;
