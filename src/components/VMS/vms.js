import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { FaFastBackward, FaFastForward, FaPlay, FaPause } from 'react-icons/fa';
import { GlobalContext } from '../../contexts/globalContext';

export default function VMS() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'updateState',
      payload: newState,
    });
  };

  const isPlaying = () => {
    if (state.isPlayingVMS === true) {
      return (
        <FaPause
          size="3em"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.pause());
            setState({ isPlayingVMS: false });
          }}
        />
      );
    } else {
      return (
        <FaPlay
          size="3em"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.play());
            setState({ isPlayingVMS: true });
          }}
        />
      );
    }
  };

  const removeSelectedNodes = (param) => {
    const index = state.selectedNodesArray.indexOf(param);

    if (index > -1) {
      state.selectedNodesArray.splice(index, 1);
      setState({ selectedNodes: state.selectedNodesArray });
    }
  };

  const upDateSelectedNodes = (param) => {
    if (state.selectedNodesArray.length <= 2) {
      state.selectedNodesArray.push(param);
      setState({ selectedNodes: state.selectedNodesArray });
    }
  };

  const updateHomeVideoDate = (e) => {
    setState({ selectedVMSDate: e });
  };

  const updateHomeTimeHour = (e) => {
    setState({ selectedVMSTimeHour: e });
  };

  const updateHomeTimeMin = (e) => {
    setState({ selectedVMSTimeMin: e });
  };

  const updateHomeTimeAMPM = (e) => {
    setState({ selectedVMSAMPM: e });
  };

  const renderCurrentNodeList = () => {
    return state.selectedNodesArray.map((value, index) => {
      return (
        <ListGroup.Item onClick={() => removeSelectedNodes(state.selectedNodes[index])}>
          {state.selectedNodes[index]}
        </ListGroup.Item>
      );
    });
  };

  return (
    <Container fluid className="homeContainer bg-dark">
      <Row>
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={3}>
                <Button onClick={() => setState({ modalCameraOpen: true })}>Select Nodes</Button>
              </Col>
              <Col xs={6}>
                <Row className="justify-content-center">
                  <Col xs={4}>
                    <FaFastBackward
                      size="3em"
                      className="amber-text pr-3"
                      onClick={() =>
                        [...document.getElementsByTagName('video')].map(
                          (video) => (video.currentTime = video.currentTime - 10)
                        )
                      }
                    />
                  </Col>
                  <Col xs={4}>{isPlaying()}</Col>
                  <Col xs={4}>
                    <FaFastForward
                      size="3em"
                      className="amber-text pr-3"
                      onClick={() =>
                        [...document.getElementsByTagName('video')].map(
                          (video) => (video.currentTime = video.currentTime + 10)
                        )
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      {[1, 2, 3].map((value, index) => {
        return (
          <Row>
            <Card className="text-center" bg="dark" text="light">
              <Card.Body>
                <Row className="justify-content-center align-items-center">
                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls="true"
                      src="http://media.w3.org/2010/05/video/movie_300.webm"
                    ></video>
                  </Col>

                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls="true"
                      src="http://media.w3.org/2010/05/video/movie_300.webm"
                    ></video>
                  </Col>

                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls="true"
                      src="http://media.w3.org/2010/05/video/movie_300.webm"
                    ></video>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        );
      })}

      <Modal
        show={state.modalCameraOpen}
        onHide={() => setState({ modalCameraOpen: false })}
        centered
        size="lg"
        className="vms-node-modal"
      >
        <Card className="text-center custom-modal" bg="dark" text="light">
          <Card.Header as="h5">Select Nodes</Card.Header>

          <CardGroup>
            <Card>
              <Card className="text-center" text="dark">
                <h4>DateTime</h4>
                <Calendar onClickDay={(e) => updateHomeVideoDate(e)} />

                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Hour</Form.Label>
                      <Form.Control as="select" onChange={(e) => updateHomeTimeHour(e.target.value)}>
                        <option></option>
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
                      <Form.Label>Minute</Form.Label>
                      <Form.Control as="select" onChange={(e) => updateHomeTimeMin(e.target.value)}>
                        <option></option>
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
                        <option></option>
                        <option>AM</option>
                        <option>PM</option>
                      </Form.Control>
                    </Col>
                  </Row>
                  <br />
                </Form>
              </Card>
            </Card>

            <Card className="text-center nodesListVMSModal" text="dark">
              <h4>Nodes</h4>
              {state.nodes.map((node) => (
                <ListGroup.Item onClick={() => upDateSelectedNodes(node.name)}>{node.name}</ListGroup.Item>
              ))}
            </Card>

            <Card className="text-center nodesListVMSModal" text="dark">
              <h4>Selected</h4>
              {renderCurrentNodeList()}
            </Card>
          </CardGroup>
        </Card>

        <Form inline className="text-center">
          <Button type="submit">Submit</Button>
        </Form>
        <Card.Footer className="text-muted"></Card.Footer>
      </Modal>
    </Container>
  );
}
