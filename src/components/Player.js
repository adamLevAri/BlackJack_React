import React from "react";
import Cardview from "./Cardview";
//tomoorow
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSum: this.props.playerSum,
      playerCards: this.props.playerCards
    };
  }

  viewPlayer = () => {
    let cards = this.state.playerCards.map((item, i) => {
      return <Cardview key={i} cardURL={item.image} />;
    });

    return (
      <div>
        <div>{cards}</div>
      </div>
    );
  };
  render() {
    console.log(this.state.playerSum);
    return (
      <div>
        <h1> Player </h1>
        <div className="deckBox">
          <div className="fullCards">
            <div>{this.viewPlayer()}</div>
          </div>
          <h3>{this.state.playerSum}</h3>
        </div>
      </div>
    );
  }
}
export default Player;
