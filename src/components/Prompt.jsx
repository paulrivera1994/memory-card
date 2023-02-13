import React, { Component } from "react";

class Prompt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return (
      <div className="d-flex justify-content-around align-items-center">
        <p>Have you seen this letter?</p>
        <button onClick={(e) => handleAnswer(e, item, index, true)}>Yes</button>
        <button onClick={(e) => handleAnswer(e, item, index, false)}>No</button>
      </div>
    );
  }
}
export default Prompt;
