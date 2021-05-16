import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext, useState } from 'react';
import Row from 'react-bootstrap/Row';
import SettingsModal from './settingsModal'
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';
import SettingsCameraList from './settingsCameraList'
import SettingsRestreaming from './settingsRestreaming'
import SettingsServerStats from './settingsServerStats'
import SettingsRestreamerStats from './settingsRestreamerStats'

export default function Settings() {

  const [state, dispatch] = useContext(GlobalContext);

  return (
    <Container fluid className='settingsDIV'>
      <br/>
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <SettingsCameraList/>
        </Col>

        <Col xs={3} >
        </Col>

        <Col xs={4} >
          <SettingsServerStats/>
          <br/>
          <Card >
            <Card.Header as='h4' className="text-center">Restreamers</Card.Header>
            <SettingsRestreamerStats/>
            <Card.Body>
              <SettingsRestreaming/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <SettingsModal />
    </Container>
  );
}
