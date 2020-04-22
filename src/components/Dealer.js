import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DealerSum: this.props.DealerSum,
      dealerCards: this.props.dealerCards
    };
  }

  DealerCards = () => {
    let cards = this.state.dealerCards.map((item, i) => {
      return <Cardview key={i ^ 2} cardURL={item.image} />;
    });
    return <div>{cards}</div>;
  };

  render() {
    return (
      <div>
        <h1> Dealer </h1>
        <div className="deckBox">
          <div className="fullCards">
            <div>{this.DealerCards()}</div>
            <img
              className="cardBox"
              src="img/backCardImg.jpg"
              alt="back card"
            />
          </div>
          <h3>{this.state.DealerSum}</h3>
        </div>
      </div>
    );
  }
}
export default Player;
