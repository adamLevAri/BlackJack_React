import React from "react";
import GameAlgo from "./GameAlgo";
import Loading from "./Loading";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      deckOfCards: {}
    };
  }
  //Fetch a decl of 6 cards with unique deck_id
  componentDidMount() {
    console.log("didfirst");
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
      .then(response => response.json())
      .then(deckAPI => {
        this.setState({ deckOfCards: deckAPI });
      });
  }

  render() {
    if (this.state.deckOfCards.success) {
      return (
        <div className="App">
          <GameAlgo id={this.state.deckOfCards.deck_id} amount={2} />;
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Board;
