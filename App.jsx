import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SavedGrid from "./components/SavedGrid";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|saved-grid)">
            <SavedGrid gridContentProps={savedGridData.gridContentProps} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const mapData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62745d2c6dbad9dd2f34b63a/img/map@1x.png",
};

const addRemoveSimpleData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62746166564af6b79d7c2927/img/rectangle-11@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/62740a351203600aeca6fcdf/releases/62746166564af6b79d7c2927/img/vector@2x.svg",
};

const onlineYesAddCamerasNoData = {
    addRemoveSimpleProps: addRemoveSimpleData,
};

const gridContentData = {
    mapProps: mapData,
    mapProps2: onlineYesAddCamerasNoData,
};

const savedGridData = {
    gridContentProps: gridContentData,
};

