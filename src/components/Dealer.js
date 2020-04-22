import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      DealerSum: null,
      dealerCards: []
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({
      DealerSum: this.props.dealerSum,
      dealerCards: [...this.props.dealerCards, ...this.state.dealerCards]
    });
  }

  DealerCards = () => {
    let cards = this.props.dealerCards.map((item, i) => {
      return <Cardview key={i} cardURL={item.image} />;
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
          <h3>{this.props.dealerSum}</h3>
        </div>
      </div>
    );
  }
}
export default Player;
