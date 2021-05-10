import React, { Component } from 'react';
import Moment from 'react-moment';

class CameraList1 extends Component {
  constructor() {
    super();
    this.state = { cameras: [] };
  }

  componentDidMount() {
    fetch('http://10.10.10.55:3001/cameras/cameraList')
      .then((response) => response.json())
      .then((json) => this.setState({ cameras: json }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.cameras.map((camera) => (
            <li key={camera.nodeName}>{<Moment format="MM/DD/YYYY @ HH:MM">{camera.lastCheckIn}</Moment>}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CameraList1;
