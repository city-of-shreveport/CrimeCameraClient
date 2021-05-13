import CameraList1 from '../components/cameraList1';
import Col from 'react-bootstrap/Col';
import Map from './map';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { ContactContextProvider } from '../contexts/contactContext';
import { Container } from 'semantic-ui-react';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ContactContextProvider>
            <CameraList1 />
          </ContactContextProvider>
        </Col>
        <Col xs={8}>
          <ContactContextProvider>
            <Map isMarkerShown />
          </ContactContextProvider>
        </Col>
      </Row>
    </Container>
  );
}
