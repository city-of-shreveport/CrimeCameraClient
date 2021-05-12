import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext } from 'react';
import { ContactContext } from '../contexts/contactContext';

export default function CameraList1() {
  const [state, dispatch] = useContext(ContactContext);

  fetch('http://10.10.10.55:3001/cameras/cameraList')
    .then((response) => response.json())
    .then((json) => onSubmit(json));

  const onSubmit = (data) => {
    dispatch({
      type: 'ADD_CAM',
      payload: { data },
    });
  };

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {this.state.cameras.map((camera) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={camera.nodeName} variant="dark">
              {camera.nodeName}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={camera.nodeName}>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark">Camera Name:</ListGroup.Item>
                  <ListGroup.Item variant="dark">Status:</ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 1: </ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 2: </ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 3:</ListGroup.Item>
                </ListGroup>

                <ButtonGroup size="sm">
                  <Button>Stream</Button>
                  <Button>Settings</Button>
                  <Button>VMS</Button>
                </ButtonGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
