import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import { FaFastForward } from 'react-icons/fa';
import { FaFastBackward } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component, useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/globalContext';

import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Calendar from 'react-calendar';
import { Player } from 'video-react';
import Map from './videoPlayerMap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default function PlayerControlExample() {
  const [state, dispatch] = useContext(GlobalContext);

  const upDateSelectedCam = (param) => {
    let buttonSelected = this.state.camButtonSelected;
    switch (buttonSelected) {
      case 'node1':
        dispatch({
          type: 'UPDATESELECTEDNODE1VMS',
          payload: param,
        });
        break;
      case 'node2':
        dispatch({
          type: 'UPDATESELECTEDNODE2VMS',
          payload: param,
        });
        break;
      case 'node3':
        dispatch({
          type: 'UPDATESELECTEDNODE3VMS',
          payload: param,
        });
        break;
      case 'node4':
        dispatch({
          type: 'UPDATESELECTEDNODE4VMS',
          payload: param,
        });
        break;
      default:
        break;
    }
  };

  const updateModalSelectNodeVMS = (e) =>
    dispatch({
      type: 'UPDATEMODALSELECTNNODEVMS ',
      payload: e,
    });
  const updateHomeVideoDate = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEODATE',
      payload: e,
    });
  const updateHomeTimeHour = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEHOUR',
      payload: e,
    });

  const updateHomeTimeMin = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEMIN',
      payload: e,
    });

  const updateHomeTimeAMPM = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEPM',
      payload: e,
    });
  const selecetNodeButton = (e) => {
    dispatch({
      type: 'UPDATEMODALSELECTNNODEVMS ',
      payload: true,
    });
    dispatch({
      type: 'UPDATENODEBUTTONSELECTED ',
      payload: e,
    });
  };
  return (
    <Container fluid className="homeContainer bg-dark">
      <Card className="text-center" bg="dark" text="light">
        <Nav className="justify-content-center" activeKey="/home"></Nav>
        <Nav className="justify-content-center" activeKey="/home">
          <NavDropdown title="Select Date Time" id="nav-dropdown">
            <Card className="text-center">
              <h4>Select Date and Time</h4>
              <Calendar onClickDay={(e) => updateHomeVideoDate(e)} />
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Hour</Form.Label>
                    <Form.Control as="select" onChange={(e) => updateHomeTimeHour(e.target.value)}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    {' '}
                    <Form.Label>Minutes</Form.Label>
                    <Form.Control as="select" onChange={(e) => updateHomeTimeMin(e.target.value)}>
                      <option>00</option>
                      <option>15</option>
                      <option>30</option>
                      <option>45</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    {' '}
                    <Form.Label>AM/PM</Form.Label>
                    <Form.Control as="select" onChange={(e) => updateHomeTimeAMPM(e.target.value)}>
                      <option>AM</option>
                      <option>PM</option>
                    </Form.Control>
                  </Col>
                </Row>
                <br />
              </Form>
              <NavDropdown.Divider />
              <Button>Set Date & Time</Button>
            </Card>
          </NavDropdown>
        </Nav>
      </Card>
      <Row className="justify-content-md-center">
        <Col sm={14}>
          <Card className="text-center" bg="dark" text="light">
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => selecetNodeButton({ nodeButtonSelected: 'node4' })}
                  >
                    Node 1
                  </Button>
                  <Player
                    ref={(player1) => {
                      this.player1 = player1;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => selecetNodeButton({ nodeButtonSelected: 'node4' })}
                  >
                    Node 2
                  </Button>
                  <Player
                    ref={(player2) => {
                      this.player2 = player2;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => selecetNodeButton({ nodeButtonSelected: 'node4' })}
                  >
                    Node 3
                  </Button>
                  <Player
                    ref={(player3) => {
                      this.player3 = player3;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => selecetNodeButton({ nodeButtonSelected: 'node4' })}
                  >
                    Node 4
                  </Button>
                  <Player
                    ref={(player12) => {
                      this.player12 = player12;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={3}>
                  <Player
                    ref={(player4) => {
                      this.player4 = player4;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>

                <Col xs={3}>
                  <Player
                    ref={(player5) => {
                      this.player5 = player5;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Player
                    ref={(player6) => {
                      this.player6 = player6;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Player
                    ref={(player11) => {
                      this.player11 = player11;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={3}>
                  <Player
                    ref={(player7) => {
                      this.player7 = player7;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>

                <Col xs={3}>
                  <Player
                    ref={(player8) => {
                      this.player8 = player8;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>

                <Col xs={3}>
                  <Player
                    ref={(player9) => {
                      this.player9 = player9;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
                <Col xs={3}>
                  <Player
                    ref={(player10) => {
                      this.player10 = player10;
                    }}
                  >
                    <source src={sources.test} />
                  </Player>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
      </Row>
      <Modal show={state.modalSelectNodeVMS} onHide={() => updateModalSelectNodeVMS(false)} centered size="lg">
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Selecet Node</Card.Header>
          <CardGroup>
            <Card>
              <Map isMarkerShown />
            </Card>
            <Card>
              <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
              </Form>
              {state.nodes.map((node) => (
                <ListGroup.Item onClick={() => upDateSelectedCam(node.name)}>{node.name}</ListGroup.Item>
              ))}
            </Card>
          </CardGroup>
        </Card>

        <Card.Footer className="text-muted"></Card.Footer>
      </Modal>
    </Container>
  );
}
