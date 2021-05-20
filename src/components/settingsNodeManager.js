import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';
import HorizontalBarChart from './barChart2';
import HorizontalBarChart2 from './barChart';
import LineChart from './lineChart';
import SettingsCamerasCard from './settingsModalCamerasCard';
import SettingsSysInfoCard from './settingsModalSySInfoCard';
import SettingsSysInfoEditCard from './settingsModalSySInfoEditCard';
import SettingsCamerasSettingsCard from './settingsModalCameraSettingsCard';

export default function Settings() {
  const [state, dispatch] = useContext(GlobalContext);
  const getCameraInfo = (node) => {
    fetch('http://10.10.10.55:3001/cameras/getCameraInfo/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'UPDATECURRENTCAMINFO',
          payload: json,
        });
      });
  };
  const upDateSelectedCam = (param) => {
    getCameraInfo(param);

    dispatch({
      type: 'UPDATE_SELECTEDCAMERA',
      payload: param,
    });
  };
  return (
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <Card>
            <Card.Header as="h3">
              Cameras
              <Card.Text as="h6">45 Online / 2 Problems</Card.Text>
            </Card.Header>
            <ListGroup>
              {state.cams.map((cam) => (
                <ListGroup.Item onClick={() => upDateSelectedCam(cam.nodeName)}>{cam.nodeName}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card.Header as="h4">{state.selectedCamera}</Card.Header>
          <CardGroup>
            <Card>
              <Card.Header>System Information</Card.Header>
              <Card.Text></Card.Text>
              <Card.Body>
                {state.cameraSettingsComponent ? <SettingsSysInfoEditCard /> : <SettingsSysInfoCard />}
              </Card.Body>
            </Card>
            <Card>
              <CardGroup>
                <Card>
                  <Card.Header>System</Card.Header>
                  <HorizontalBarChart />
                </Card>
                <Card>
                  <Card.Header>Drives</Card.Header>
                  <HorizontalBarChart2 />
                </Card>
              </CardGroup>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Header>Cameras</Card.Header>
              <Card.Header></Card.Header>
              <Card.Body>
                {state.cameraSettingsCameraComponent ? <SettingsCamerasSettingsCard /> : <SettingsCamerasCard />}
              </Card.Body>
            </Card>
            <Card>
              <LineChart />
            </Card>
          </CardGroup>
          <Card.Footer className="text-muted"></Card.Footer>
        </Col>
      </Row>
    </Container>
  );
}
