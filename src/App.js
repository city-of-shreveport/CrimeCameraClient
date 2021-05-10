import React, { Component } from 'react';
import CameraList1 from './CameraList1';
import CameraList2 from './CameraList2';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <CameraList1 />
        <CameraList2 />
      </React.Fragment>
    );
  }
}

export default App;
