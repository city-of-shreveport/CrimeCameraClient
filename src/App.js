import React, { Component,useState, useContext,useEffect  } from 'react';

import ContactView from "./views/contact-view";
import { Container } from "semantic-ui-react";
//BOOTSTRAP THINGS
import CameraList1 from './CameraList1'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css'; // import css
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {  }
  render() {
    return (
      <Container>
      <h1>React Hooks Context Demo</h1>
    <ContactView />
    <CameraList1/>
    </Container>
    );
  }
}

export default App;
