import React from "react";
import AddRemoveSimple from "../AddRemoveSimple";
import "./OnlineYesAddCamerasNo.sass";

class OnlineYesAddCamerasNo extends React.Component {
  componentDidMount() {
    this.props.addStream(this.props.name);

    this.props.wireUpStream(this.props.name, 1, this.props.cameraReferenceOne);
    this.props.wireUpStream(this.props.name, 2, this.props.cameraReferenceTwo);
    this.props.wireUpStream(this.props.name, 3, this.props.cameraReferenceThree);
  }

  render() {
    return (
      <div>
        <div style={{textAlign: "center", color: "white", width: "100%", fontSize: "30px", backgroundColor: "rgb(30, 31, 35)"}}>
          {this.props.nvrEnabled && <a style={{color:"white"}} href={this.props.nvrAddress} target="_blank">
            View Historical Footage
          </a>}
        </div>
        <div className="x3-column-box-simple">
          <div className="flex-col">
            <div className="x52-common-street opensans-normal-lochmara-10px">{this.props.address}</div>

            <div className="overlap-group1">
                <video ref={this.props.cameraReferenceOne} controls autoPlay />
            </div>

            <div className="x57-camera opensans-bold-white-13px">{this.props.name} | Camera 1</div>
          </div>

          <div className="flex-row">
            <div className="flex-col-1">
              <div className="overlap-group2">
                <video ref={this.props.cameraReferenceTwo} controls autoPlay />
              </div>
              <div className="x57-camera-2 opensans-bold-white-13px">{this.props.name} | Camera 2</div>
            </div>

            <div className="flex-col-2">

              <AddRemoveSimple handleClose={this.props.handleClose} nodeName={this.props.name} />

              <div className="overlap-group3">
                <video ref={this.props.cameraReferenceThree} controls autoPlay />
              </div>

              <div className="x57-camera opensans-bold-white-13px">{this.props.name} | Camera 3</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineYesAddCamerasNo;
