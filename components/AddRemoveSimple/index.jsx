import React from "react";
import "./AddRemoveSimple.sass";

class AddRemoveSimple extends React.Component {
  render() {
    return (
      <div className="all-cameras">
        <div className="overlap-group" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62746166564af6b79d7c2927/img/rectangle-11@2x.svg')` }}>
          <img data-name={this.props.nodeName} onClick={this.props.handleClose} className="icon-close" src="https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62746166564af6b79d7c2927/img/vector@2x.svg" />
        </div>
      </div>
    );
  }
}

export default AddRemoveSimple;
