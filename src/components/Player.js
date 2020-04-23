import React from "react";
import Cardview from "./Cardview";
//tomoorow
class Player extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.seTstate = {
  //     // playerSum: this.props.playerSum,
  //     // playerCards: this.props.playerCards
  //     playerSum:this.props.playerSum,
  //     playerCards:this.props.playerCards
  //   };
  // }

  state = {
    playerSum: this.props.playerSum,
    playerCards: this.props.playerCards
  };

  componentDidUpdate() {
    this.seTstate = {
      playerSum: this.props.playerSum,
      playerCards: this.props.playerCards
    };
  }

  viewPlayer = () => {
    //  console.log(this.state.playerCards);
    let cards = this.state.playerCards.map((item, i) => {
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
          <h3>{this.state.playerSum}</h3>
        </div>
      </div>
    );
  }
}
export default Player;
