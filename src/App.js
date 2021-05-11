import React, { Component } from 'react';
import CameraList1 from './CameraList1';
import CameraList2 from './CameraList2';

//BOOTSTRAP THINGS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Container var>
          <Row>
            <Col>
              <Card className="text-center" style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Header as="h5">Cameras</Card.Header>
                </Card.Body>
                  <CameraList1 />
              </Card>
            </Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
        <CameraList2 />
      </React.Fragment>
    );
  }
}

export default App;
