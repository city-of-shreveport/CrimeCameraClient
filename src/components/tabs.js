import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

class Tabs extends Component {
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
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>asdfasdfasdfasdfasdf asdf asd asd as dfasdfasd asd sad</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>asdfasdfasdfasdfasdf asdf asd asd as dfasdfasd asd sad</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Tabs;
