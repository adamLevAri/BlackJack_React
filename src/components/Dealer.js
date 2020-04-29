import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {
  /*
  DealerCards = props => {
    let firstCard = "Undefined";
    let backCard ="Undefined";
    
    if (this.props.playerFinish) {
      console.log(this.props.dealerCards)
      firstCard = this.props.dealerCards.map((item, i) => {
        return <Cardview key={i ^ 2} cardURL={item.image} />;
      });
    } else {
      firstCard = <Cardview key={0} cardURL={this.props.dealerCards[0].image} />;
      backCard = (
        <img
          key={1}
          className="cardBox"
          src="img/backCardImg.jpg"
          alt="back_card"
        />
      );
      return [firstCard, backCard];
    }

    return (
      <div>
        <div> {this.firstCard} </div>
        <div> {this.backCard} </div>
      </div>
    );
  };
*/

  showCards(props) {
    let backCard = "Undefined";
    let firstCard = (
      <Cardview key={0} cardURL={this.props.dealerCards[0].image} />
    );

    if (!this.props.playerFinish) {
      backCard = <Cardview key={1} cardURL="img/backCardImg.jpg" />;
    } else {
      firstCard = "";
      backCard = this.props.dealerCards.map((item, i) => {
        return <Cardview key={i} cardURL={item.image} />;
      });
    }

    return [firstCard, backCard];
  }

  render() {
    return (
      <div>
        <h1> Dealer </h1>
        <div className="deckBox">
          <div className="sumCircle">{this.props.dealerSum}</div>
          {this.showCards()}
        </div>
      </div>
    );
  }
}
export default Player;
