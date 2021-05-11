import React, { Component } from 'react';
import CameraList1 from './CameraList1';
import CameraList2 from './CameraList2';


import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('http://10.10.10.55:3001/cameras/cameraList')
      .then((response) => response.json())
      .then((json) => this.setState({ cameras: json }));
      
         

  }

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
