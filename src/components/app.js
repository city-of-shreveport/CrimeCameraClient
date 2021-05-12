import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import CameraList1 from './cameraList1';
import ContactView from './contactView';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <h1>React Hooks Context Demo</h1>
        <ContactView />
        <CameraList1 />
      </Container>
    );
  }
}

export default App;
