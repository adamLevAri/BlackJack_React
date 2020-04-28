import React from "react";
import Options from "./Options";
import Dealer from "./Dealer";
import Player from "./Player";
import Board from "./Board";

class GameAlgo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoad: true,
      playerFinish: false,
      DealerSum: null,
      playerSum: 0,
      playerCards: [],
      dealerCards: []
    };
    this.restartGame = this.restartGame.bind(this);
  }

  componentDidMount() {
    // this.setState({ isLoad: true });
    this.fetchCards("player", this.props.amount);
    this.fetchCards("dealer", this.props.amount);
  }

  fetchCards(cardHolder, cardsAmount) {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${cardsAmount}`)
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
          this.setState({ isLoad: false });
        }
      });
  }
  dealerDeck(NewCards) {
    //return: dealer API obj
    this.setState({
      dealerCards: [...this.state.dealerCards, ...NewCards.cards]
    });
  }
  playerDeck(NewCards) {
    //return: player API obj
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
    } else {
      for (let item in this.state.dealerCards) {
        let stVal = this.state.dealerCards[item].value;
        let val = this.cardValue(stVal);
        sum += val;
      }
    }

    if (type === "player") {
      this.setState(
        {
          playerSum: sum
        },
        () => {
          console.log(this.state.playerSum);
          if (this.state.playerSum > 21) {
            this.restartGame();
          } else if (this.state.playerSum === 21) {
          } else {
            console.log("keep playing");
          }
        }
      );
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

  hitCard() {
    console.log("player requested hit");
    this.fetchCards("player", 1);
  }

  stand() {
    console.log("player stand");
    this.setState({
      playerFinish: true
    });
  }

  restartGame() {
    console.log("restart game");
    //TODO: display the loosing last card before restarting game
    return <Board />;
  }

  render() {
    if (!this.state.isLoad) {
      return (
        <div className="tableBox">
          <div>
            <Dealer
              dealerCards={this.state.dealerCards}
              DealerSum={this.state.DealerSum}
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
              render={() => this.restartGame}
              playerFinish={this.state.playerFinish}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <img className="loading" src="img/loadingGif.gif" alt="loading..." />
        </div>
      );
    }
  }
}

export default GameAlgo;
