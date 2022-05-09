import React from "react";
import AddRemoveSimple from "../AddRemoveSimple";
import "./OnlineYesAddCamerasNo.sass";

class OnlineYesAddCamerasNo extends React.Component {
  render() {
    return (
      <div className="x3-column-box-simple">
        <div className="flex-col">
          <div className="x57-camera-system valign-text-middle opensans-bold-white-13px">{this.props.name}</div>
          <div className="x52-common-street opensans-normal-lochmara-10px">{this.props.address}</div>

          <div className="overlap-group1">
              <video />
          </div>
          <div className="x57-camera opensans-bold-white-13px">{this.props.name} | Camera 1</div>
        </div>

        <div className="flex-row">
          <div className="flex-col-1">
            <div className="overlap-group2">
              <video />
            </div>
            <div className="x57-camera-2 opensans-bold-white-13px">{this.props.name} | Camera 2</div>
          </div>
          <div className="flex-col-2">
            <AddRemoveSimple overlapGroup={this.props.addRemoveSimpleProps.overlapGroup} vector={this.props.addRemoveSimpleProps.vector} />
            <div className="overlap-group3">
              <video />
            </div>
            <div className="x57-camera opensans-bold-white-13px">{this.props.name} | Camera 3</div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default OnlineYesAddCamerasNo;
