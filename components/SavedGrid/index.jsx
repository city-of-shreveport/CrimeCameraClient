import React from "react";
import Navigation from "../Navigation";
import GridContent from "../GridContent";
import "./SavedGrid.sass";

class SavedGrid extends React.Component {
  render() {
    const { gridContentProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="saved-grid screen">
          <Navigation />
          <GridContent  />
        </div>
      </div>
    );
  }
}

export default SavedGrid;
