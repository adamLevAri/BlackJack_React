import React from "react";
import Cardview from "./Cardview";
//tomoorow
class Player extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     playerSum:this.props.playerSum,
  //     playerCards:this.props.playerCards
  //   };
  // }

  // state = {
  //   playerSum: this.props.playerSum,
  //   playerCards: this.props.playerCards
  // };

  // componentDidUpdate() {
  //   this.seTstate = {
  //     playerSum: this.props.playerSum,
  //     playerCards: this.props.playerCards
  //   };

  // }

  showCards = () => {
    let cards = this.props.playerCards.map((item, i) => {
      return <Cardview type="Player" key={i} cardURL={item.image} />;
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
          <div className="sumCircle">{this.props.playerSum}</div>
          <div>{this.showCards()}</div>
        </div>
      </div>
    );
  }
}
export default Player;
