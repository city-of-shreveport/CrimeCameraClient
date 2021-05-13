import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';

export default function Settings() {
  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Configured Cameras</Card.Header>
              <Card.Body></Card.Body>
              <Card.Footer className="text-muted">42 Cameras</Card.Footer>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
