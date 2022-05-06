import React from "react";
import "./AddRemoveSimple.sass";

class AddRemoveSimple extends React.Component {
  render() {
    const { overlapGroup, vector } = this.props;

    return (
      <div className="all-cameras">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="icon-close" src={vector} />
        </div>
      </div>
    );
  }
}

export default AddRemoveSimple;
