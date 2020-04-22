import React from "react";

import Cardview from "./Cardview";
import Options from "./Options";
import Dealer from "./Dealer";
import Player from "./Player";

class GameAlgo extends React.Component {
  constructor() {
    super();
    this.state = {
      DealerSum: null,
      playerSum: null,
      playerCards: [],
      dealerCards: []
    };
  }

  async componentDidMount() {
    this.fetchCards("player", this.props.amount);
    this.fetchCards("dealer", this.props.amount);
  }

  fetchCards(type, cardsAmount) {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${cardsAmount}`)
      .then(response => response.json())
      .then(data => {
        if (type === "player") {
          this.playerDeck(data);
        } else {
          //dealer
          this.dealerDeck(data);
        }
      });
  }
  dealerDeck(NewCards) {
    this.setState({
      dealerCards: [...this.state.dealerCards, ...NewCards.cards]
    });
    this.countSum("dealer");
  }
  playerDeck(NewCards) {
    this.setState({
      playerCards: [...this.state.playerCards, ...NewCards.cards]
    });
    this.countSum("player");
  }

  countSum(type) {
    let sum = 0;
    if (type === "player") {
      for (let item in this.state.playerCards) {
        let stVal = this.state.playerCards[item].value;
        let val = this.cardValue(stVal);
        sum += val;
      }
    } else {
      for (let item in this.state.dealerCards) {
        let stVal = this.state.dealerCards[item].value;
        let val = this.cardValue(stVal);
        sum += val;
      }
    }

    if (type === "player") {
      this.setState({
        playerSum: sum
      });
    } else {
      this.setState({
        DealerSum: sum
      });
    }
  }

  cardValue(string) {
    let val = parseInt(string, 10);
    if (val < 11) return val;
    //need to check the ACE value
    return 10;
  }
  viewPlayer = () => {
    console.log(this.props);
    let cards = this.state.playerCards.map((item, i) => {
      return <Cardview key={i} cardURL={item.image} />;
    });

    return (
      <div>
        <div>{cards}</div>
        <h3>{this.state.playerSum}</h3>
      </div>
    );
  };

  DealerCards = () => {
    let cards = this.state.dealerCards.map((item, i) => {
      return <Cardview key={i} cardURL={item.image} />;
    });

    return (
      <div>
        <div>{cards}</div>
        <h3>{this.state.DealerSum}</h3>
      </div>
    );
  };

  getOptions = () => {
    return <Options />;
  };

  render() {
    return (
      <div className="tableBox">
        <div>
          <Dealer
            dealerCards={this.state.dealerCards}
            DealerSum={this.state.DealerSum}
          />
        </div>
        <div>
          <Player
            playerCards={this.state.playerCards}
            playerSum={this.state.playerSum}
          />
        </div>
        <div>
          <Options />
        </div>
      </div>
    );
  }
}

export default GameAlgo;
