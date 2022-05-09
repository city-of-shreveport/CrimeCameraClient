import React from "react";
import AddRemoveSimple from "../AddRemoveSimple";
import "./OnlineYesAddCamerasNo.sass";

class OnlineYesAddCamerasNo extends React.Component {
  render() {
    console.log("Rendered Camera " + this.props.name);

    return (
      <div className="x3-column-box-simple">
        <div className="flex-col">
          <div className="x57-camera-system valign-text-middle opensans-bold-white-13px">90 Camera System</div>
          <div className="x52-common-street opensans-normal-lochmara-10px">90 Olive Street</div>
          <div className="overlap-group1">
            <img
              className="arrows-fullscreen"
              src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/627461d7c7ce4d18f0479a8c/img/arrowsfullscreen-3@2x.svg"
            />
          </div>
          <div className="x57-camera opensans-bold-white-13px">90 | Camera 1</div>
        </div>
        <div className="flex-row">
          <div className="flex-col-1">
            <div className="overlap-group2">
              <img
                className="arrows-fullscreen"
                src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/627461d7c7ce4d18f0479a8c/img/arrowsfullscreen-4@2x.svg"
              />
            </div>
            <div className="x57-camera-2 opensans-bold-white-13px">90 | Camera 2</div>
          </div>
          <div className="flex-col-2">
            <AddRemoveSimple  />
            <div className="overlap-group3">
              <img
                className="arrows-fullscreen"
                src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/627461d7c7ce4d18f0479a8c/img/arrowsfullscreen-5@2x.svg"
              />
            </div>
            <div className="x57-camera opensans-bold-white-13px">90 | Camera 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineYesAddCamerasNo;
