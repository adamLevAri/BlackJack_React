import React from "react";
import Cardview from "./Cardview";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      playerSum: null,
      playerCards: []
    };
  }
  componentDidMount() {
    this.setState({
      playerSum: this.props.dealerSum,
      playerCards: [...this.props.playerCards, ...this.state.playerCards]
    });
  }

  viewPlayer = () => {
    let cards = this.props.playerCards.map((item, i) => {
      return <Cardview key={i} cardURL={item.image} />;
    });

    return (
      <div>
        <div>{cards}</div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1> Player </h1>
        <div className="deckBox">
          <div className="fullCards">
            <div>{this.viewPlayer()}</div>
          </div>
          <h3>{this.props.playerSum}</h3>
        </div>
      </div>
    );
  }
}
export default Player;
