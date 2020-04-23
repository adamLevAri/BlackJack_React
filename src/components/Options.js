import React from "react";

class Options extends React.Component {
  render() {
    return (
      <div className="playerOptionBox">
        <button onClick={this.props.hit} className="optionButton">
          {" "}
          Hit{" "}
        </button>
        <button onClick={this.props.stand} className="optionButton">
          {" "}
          Stand{" "}
        </button>
      </div>
    );
  }
}

export default Options;
