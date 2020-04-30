import React from "react";
import Options from "./Options";
import Dealer from "./Dealer";
import Player from "./Player";
import Loading from "./Loading";
import PopUp from "./PopUp";

class GameAlgo extends React.Component {
  constructor() {
    super();
    this.state = {
      LoadAPI: false,
      playerFinish: false,
      restartGame: false,
      winner: "",
      dealerSum: 0,
      playerSum: 0,
      playerCards: [],
      dealerCards: []
    };
  }

  componentDidMount() {
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
      this.setState({ playerSum: sum }, () => {
        this.playerToggleController();
      });
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
    let val = parseInt(string, 10);
    if (val < 11) return val;
    //need to check the ACE value
    return 10;
  }
  //Toggles
  playerFinishToggle() {
    this.setState(
      {
        playerFinish: true
      },
      () => {
        this.dealerTurn();
        this.dealerToggleController();
      }
    );
  }
  dealerTurn() {
    let dealerSum = this.state.dealerSum;
    let playerSum = this.state.playerSum;

    if (playerSum > 21 || dealerSum > playerSum) {
      //player lost restart game
      this.setState({
        restartGame: true,
        winner: "House"
      });
    }
    //else if (dealerSum <= 17) this.fetchCards("dealer", 1);
    else if (dealerSum <= 17) this.fetchCards("dealer", 1);
  }

  dealerToggleController() {
    let dealerSum = this.state.dealerSum;
    let playerSum = this.state.playerSum;

    if (playerSum > 21) {
      console.log("Dealer win!!");
      this.setState({
        restartGame: true,
        winner: "House"
      });
    } else if (dealerSum > playerSum) {
      console.log("Dealer win!!");
      this.setState({
        restartGame: true,
        winner: "House"
      });
    } else if (dealerSum === playerSum) {
      console.log("no Winners!");
      this.setState({
        restartGame: true,
        winner: "No winners!!"
      });
    } else {
      console.log("House Lose!");
      this.setState({
        restartGame: true,
        winner: "Player"
      });
    }
  }
  playerToggleController() {
    let playerSum = this.state.playerSum;

    if (playerSum > 21) {
      this.playerFinishToggle();
      console.log("Player Lost!");
    } else if (playerSum === 21) {
      this.playerFinishToggle();
      console.log("Player Winner!");
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
    console.log(this.state.restartGame);
    if (!this.state.restartGame) {
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
    } else {
      return (
        <PopUp
          winner={this.state.winner}
          dealerSum={this.state.dealerSum}
          dealerCards={this.state.dealerCards}
          playerSum={this.state.playerSum}
          playerCards={this.state.playerCards}
        />
      );
    }
  }
}

export default GameAlgo;
