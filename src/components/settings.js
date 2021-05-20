import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import SettingsModal from './settingsModal';
import { Container } from 'semantic-ui-react';
import SettingsCameraList from './settingsCameraList';
import SettingsServerStats from './settingsServerStats';
import SettingsRestreamerStats from './settingsRestreamerStats';
import SettingsBackEndServers from './settingsBackEndServers';
import SettingsFrontEndServers from './settingsFrontEndServers';
import SettingsRestreaming from './settingsRestreaming';

export default function SysMngr() {
  return (
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
        <Col xs={3}></Col>

        <Col xs={5}></Col>

        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}
