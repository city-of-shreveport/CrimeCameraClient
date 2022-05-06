import React from "react";
import PreviousButton from "../PreviousButton";
import NextButton from "../NextButton";
import "./FirstPageYes.sass";

class FirstPageYes extends React.Component {
  render() {
    return (
      <div className="pagination-buttons">
        <PreviousButton />
        <NextButton />
      </div>
    );
  }
}

export default FirstPageYes;
