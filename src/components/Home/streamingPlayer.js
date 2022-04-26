import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function StreamingPlayer() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <h3>{state.Node1}</h3>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video1"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video2"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video3"></video>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <h3>{state.Node2}</h3>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video1"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video2"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video3"></video>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <h3>{state.Node3}</h3>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video1"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video2"></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="300" id="video3"></video>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
