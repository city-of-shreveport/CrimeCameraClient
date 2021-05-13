import CameraList from '../components/cameraList';
import Col from 'react-bootstrap/Col';
import Map from './map';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'semantic-ui-react';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <CameraList />
        </Col>
        <Col xs={8}>
          <Map isMarkerShown />
        </Col>
      </Row>
    </Container>
  );
}
