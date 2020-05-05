import React from "react";

class DrawCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("this.props");
    fetch(
      `https://deckofcardsapi.com/api/deck/${this.props.id}/draw/?count=${
        this.props.cardAmount
      }`
    )
      .then(response => response.json())
      .then(data => {
        if (this.props.cardHolder === "player") {
          //initialize playerCards
          this.props.playerDeck(data);
          this.props.countSum("player");
        } else {
          //dealer
          this.props.dealerDeck(data);
          this.props.countSum("dealer");
        }
      });
  }

  render() {
    return <div />;
  }
}

export default DrawCard;
