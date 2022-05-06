import React from "react";
import "./PreviousButton.sass";

class PreviousButton extends React.Component {
  render() {
    return (
      <div className="previous-button">
        <div className="frame-8">
          <img
            className="vector"
            src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/6274666a445ac996d137f386/img/vector-1@2x.svg"
          />
          <div className="previous valign-text-middle opensans-bold-white-13px">Previous</div>
        </div>
      </div>
    );
  }
}

export default PreviousButton;
