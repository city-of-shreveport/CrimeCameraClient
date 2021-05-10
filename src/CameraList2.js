import React, { Component } from 'react';

class CameraList2 extends Component {
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
            <li key={camera.nodeName}>
              {camera.lat} {camera.lng} {camera.camsOnlineStatus.cam1.toString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CameraList2;
