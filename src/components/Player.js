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
        </div>
        <h3>{this.props.playerSum}</h3>
      </div>
    );
  }
}
export default Player;
