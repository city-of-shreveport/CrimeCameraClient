import React from "react";
import "./NextButton.sass";

class NextButton extends React.Component {
  render() {
    return (
      <div className="next-button">
        <div className="frame-8-1">
          <div className="next valign-text-middle opensans-bold-white-13px">Next</div>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/6274666a445ac996d137f386/img/vector-2@2x.svg"
          />
        </div>
      </div>
    );
  }
}

export default NextButton;
