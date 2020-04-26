import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {

  DealerCards = () => {
    let cards = this.props.dealerCards.map((item, i) => {
      return <Cardview key={i ^ 2} cardURL={item.image} />;
    });
    return (
      <div>
        <div>
        {cards}
        <img
              className="cardBox"
              src="img/backCardImg.jpg"
              alt="back_card"
            />
            </div>
            </div>
      );
  };

  render() {
    return (
      <div>
        <h1> Dealer </h1>
        <div className="deckBox">
          <div>
            <div>{this.DealerCards()}</div>
            <h3>{this.props.DealerSum}</h3>
            
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
