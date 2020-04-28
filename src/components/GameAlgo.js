import React from "react";
import Options from "./Options";
import Dealer from "./Dealer";
import Player from "./Player";
import Loading from "./Loading";

class GameAlgo extends React.Component {
  constructor() {
    super();
    this.state = {
      LoadAPI: false,
      playerFinish: false,
      dealerSum: 0,
      playerSum: 0,
      playerCards: [],
      dealerCards: []
    };
  }

  componentDidMount() {
    console.log("didmount");
    this.fetchCards("player", this.props.amount);
    this.fetchCards("dealer", this.props.amount);
  }

  fetchCards(cardHolder, cardsAmount) {
    fetch(
      `https://deckofcardsapi.com/api/deck/${
        this.props.id
      }/draw/?count=${cardsAmount}`
    )
      .then(response => response.json())
      .then(data => {
        if (cardHolder === "player") {
          //initialize playerCards
          this.playerDeck(data);
          this.countSum("player");
        } else {
          //dealer
          this.dealerDeck(data);
          this.countSum("dealer");
          this.setState({ LoadAPI: true });
        }
      });
  }
  //Loads dealer card deck
  dealerDeck(NewCards) {
    this.setState({
      dealerCards: [...this.state.dealerCards, ...NewCards.cards]
    });
  }
  //Loads player card deck
  playerDeck(NewCards) {
    this.setState({
      playerCards: [...this.state.playerCards, ...NewCards.cards]
    });
  }

  countSum(type) {
    let sum = 0;
    if (type === "player") {
      for (let item in this.state.playerCards) {
        let stVal = this.state.playerCards[item].value;
        let val = this.cardValue(stVal);
        sum += val;
      }
      this.setState({ playerSum: sum });
    } else if (type === "dealer") {
      for (let item in this.state.dealerCards) {
        let stVal = this.state.dealerCards[item].value;
        let val = this.cardValue(stVal);
        sum += val;
      }
      this.setState({ dealerSum: sum });
    }
  }

  cardValue(string) {
    console.log(string);
    let val = parseInt(string, 10);
    if (val < 11) return val;
    //need to check the ACE value
    return 10;
  }
  //Toggles
  playerFinishToggle() {
    this.setState({
      playerFinish: true
    });
  }
  win_loseToggle() {
    let playerSum = this.state.playerSum;

    if (playerSum > 21) {
      this.playerFinishToggle();
      console.log("no more cards!");
    } else if (playerSum === 21) {
      this.playerFinishToggle();
      console.log("Winner!");
    }
  }
  // click-Action
  hitCard() {
    console.log("player requested hit");
    if (this.state.playerSum < 21) this.fetchCards("player", 1);
  }
  stand() {
    console.log("player stand");
    this.playerFinishToggle();
  }
  split() {}

  render() {
    if (this.state.LoadAPI) {
      return (
        <div className="tableBox">
          <div>
            <Dealer
              dealerCards={this.state.dealerCards}
              dealerSum={this.state.dealerSum}
              playerFinish={this.state.playerFinish}
            />
          </div>
          <div>
            <Player
              playerCards={this.state.playerCards}
              playerSum={this.state.playerSum}
            />
          </div>
          <div>
            <Options
              stand={() => this.stand()}
              hit={() => this.hitCard()}
              playerFinish={this.state.playerFinish}
            />
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default GameAlgo;
