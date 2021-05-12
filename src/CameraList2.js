import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
          {this.state.cameras.map((camera) => (
            <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" >
              {camera.nodeName}
            </Dropdown.Toggle>

              <Dropdown.Menu>
                <Card border="primary" style={{ width: '18rem' }}>
                  <Card.Title> {camera.nodeName}</Card.Title>
                  <Card.Body>
                    
                    <Card.Text>
                       <p>IP: {camera.ip}</p>
                       <p>Location:</p>
                       <p>Notes:</p>

                    </Card.Text>
                    
                  </Card.Body>
                </Card>
                </Dropdown.Menu>
          </Dropdown>
          ))}
        </div >
    );
  }
}

export default CameraList2;
