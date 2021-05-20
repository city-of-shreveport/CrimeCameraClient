import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Player } from 'video-react';

export default function SettingsNodesSettingsCard() {
  const [, dispatch] = useContext(GlobalContext);
  const handleSysConfigCameraModal = () =>
    dispatch({
      type: 'UPDATE_CAMERASYSCAMERACOMPONENT',
      payload: false,
    });
  return (
    <>
      <Button variant="primary" size="sm" onClick={() => handleSysConfigCameraModal()}>
        Configure
      </Button>
      <CardGroup>
        <Card className="text-center">
          <Card.Header>Camera 1</Card.Header>
          <Player>
            <source src="" />
          </Player>
          <Form.Group controlId="ChooseCam1" size="sm">
            <Form.Label>Select Camera</Form.Label>
            <Form.Control as="select">
              <option>Camera 1</option>
              <option>Camera 2</option>
              <option>Camera 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Control size="sm" type="text" placeholder="Direction" />

          <Card.Footer></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Camera 2</Card.Header>
          <Player>
            <source src="" />
          </Player>
          <Form.Group controlId="ChooseCam2" size="sm">
            <Form.Label>Select Camera</Form.Label>
            <Form.Control as="select">
              <option>Camera 2</option>
              <option>Camera 1</option>
              <option>Camera 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Control size="sm" type="text" placeholder="Direction" />
          <Card.Footer></Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Camera 3</Card.Header>
          <Player>
            <source src="" />
          </Player>
          <Form.Group controlId="ChooseCam3" size="sm">
            <Form.Label>Select Camera</Form.Label>
            <Form.Control as="select">
              <option>Camera 3</option>
              <option>Camera 1</option>
              <option>Camera 2</option>
            </Form.Control>
          </Form.Group>
          <Form.Control size="sm" type="text" placeholder="Direction" />

          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
