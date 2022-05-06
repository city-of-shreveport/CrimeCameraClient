import React from "react";
import "./Navigation.sass";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <img
          className="rtcc-logo-transparent-image-1-1-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62743ddc4a70dc875cbf7976/img/rtcc-logo-transparent-image--1---1--1@2x.png"
        />
        <div className="real-time-crime-tracker worksans-bold-white-20px">RTCC - Analyst</div>
      </div>
    );
  }
}

export default Navigation;
