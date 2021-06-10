import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
import { Player } from 'video-react';

let formDataObject = {};

export default function SettingsNodesSettingsCard() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleSysConfigCameraModal = () =>
    dispatch({
      type: 'UPDATE_NODESYSCAMERACOMPONENT',
      payload: false,
    });

  const handleSubmit = (event) => {
    let objectKey = Object.keys(event);
    let objectVal = Object.values(event);
    formDataObject[objectKey[0]] = objectVal[0];
  };

  const UpDateFormState = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataObject),
    };

    fetch('http://10.10.200.10:3001/api/nodes/' + state.currentNodeInfo.name, requestOptions)
      .then((response) => response.json())
      .then((data) => {});
  };

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
          <Form.Control
            size="sm"
            type="number"
            onChange={(e) => handleSubmit({ 'config.cameras.camera1.direction': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera1.direction;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera1.username': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera1.username;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera1.password': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera1.password;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera1.foldername': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera1.foldername;
            })}
          />
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
          <Form.Control
            size="sm"
            type="number"
            onChange={(e) => handleSubmit({ 'config.cameras.camera2.direction': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera2.direction;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera2.username': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera2.username;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera2.password': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera2.password;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera2.foldername': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera2.foldername;
            })}
          />
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
          <Form.Control
            size="sm"
            type="number"
            onChange={(e) => handleSubmit({ 'config.cameras.camera3.direction': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera3.direction;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera3.username': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera3.username;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera3.password': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera3.password;
            })}
          />
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => handleSubmit({ 'config.cameras.camera3.foldername': e.target.value })}
            placeholder={tryValue(() => {
              return state.currentNodeInfo.config.cameras.camera3.foldername;
            })}
          />

          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
      <Button variant="primary" size="sm" onClick={() => UpDateFormState()}>
        Update
      </Button>
    </>
  );
}
