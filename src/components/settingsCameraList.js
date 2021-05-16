import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/globalContext';

export default function SettingsCameraList() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleClose = () =>  
    dispatch({
      type: 'UPDATE_SETTINGSMODAL',
      payload: false,
    });
  const handleShow = () => 
    dispatch({
      type: 'UPDATE_SETTINGSMODAL',
      payload: true,
    });

  const upDateSelectedCam = (param) => 
      dispatch({
      type: 'UPDATE_SELECTEDCAMERA',
      payload: param
    })
  return (
    <>
      <br/>
      <CardGroup>
        <Card className="text-center">
          <Card.Header as='h4'>Configured Cameras</Card.Header>
          <Card.Body>
            <ListGroup>
              {state.cams.map((cam) => (
                <ListGroup.Item onClick={() => upDateSelectedCam(cam.nodeName)}>{cam.nodeName}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">42 Cameras</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header as='h4'>Problem Cameras</Card.Header>
          <Card.Body>
            <Card.Text>
              <ListGroup >
                {state.cams.map((cam) => (
                  <ListGroup.Item onClick={handleClose}>{cam.nodeName}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header as='h4'>New Cameras</Card.Header>
          <Card.Body>
            <Card.Text>
              <ListGroup >
                {state.cams.map((cam) => (
                  <ListGroup.Item onClick={() => handleClose(cam.nodeName)}>{cam.nodeName}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}