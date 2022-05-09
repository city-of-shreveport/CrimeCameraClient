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
            <SavedGrid  />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
