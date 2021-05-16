import CameraList from '../components/cameraList';
import Col from 'react-bootstrap/Col';
import Map from './map';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
  <><br/>
<Container fluid className='homeContainer'>
      <Row className="justify-content-md-center">
      
        <Col xs={3}>
          <Card>
  <Card.Body><CameraList /></Card.Body>
</Card>
          
        </Col>
        
        <Col >
         <Card className="text-center gmapsCard"><Card.Body>
          <Map isMarkerShown />
          </Card.Body></Card>
        </Col>

      </Row>
     </Container>
   </>
  );
}
