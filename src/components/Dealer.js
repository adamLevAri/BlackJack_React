import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {
  DealerCards = props => {
    let cards = "Undefined";
    if (this.props.playerFinish) {
      cards = this.props.dealerCards.map((item, i) => {
        return <Cardview key={i ^ 2} cardURL={item.image} />;
      });
    } else {
      cards = <Cardview key={0} cardURL={this.props.dealerCards[0].image} />;
      let backCard = (
        <img
          key={1}
          className="cardBox"
          src="img/backCardImg.jpg"
          alt="back_card"
        />
      );
      return [cards, backCard];
    }

    return (
      <div>
        <div> {this.backCard} </div>
        <div> {this.cards} </div>
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
