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

export default function RecordingViewer() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'setState',
      payload: newState,
    });
  };

  const toggleNode = (node) => {
    if (state.selectedNodes.includes(node)) {
      var newNodeList = state.selectedNodes.filter((n) => {
        return n !== node;
      });
      setState({ selectedNodes: newNodeList });
    } else {
      if (state.selectedNodes.length <= 2) {
        state.selectedNodes.push(node);
        setState({ selectedNodes: state.selectedNodes });
      }
    }
  };

  const submitForm = () => {
    console.log({
      date: state.selectedDate,
      hour: state.selectedTimeHour,
      minute: state.selectedTimeMinute,
      meridiem: state.selectedTimeMeridiem,
      nodes: state.selectedNodes,
    });
  };

  const renderPlayPauseControl = () => {
    if (state.isPlayingRecordingViewer === true) {
      return (
        <FaPause
          size="3em"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.pause());
            setState({ isPlayingRecordingViewer: false });
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
            setState({ isPlayingRecordingViewer: true });
          }}
        />
      );
    }
  };

  const renderNodeList = () => {
    return state.nodes.map((node) => {
      if (state.selectedNodes.includes(node.name)) {
        return (
          <ListGroup.Item
            key={node.name}
            style={{ backgroundColor: 'lightblue' }}
            onClick={() => toggleNode(node.name)}
          >
            {node.name}
          </ListGroup.Item>
        );
      } else {
        return (
          <ListGroup.Item key={node.name} style={{ backgroundColor: 'white' }} onClick={() => toggleNode(node.name)}>
            {node.name}
          </ListGroup.Item>
        );
      }
    });
  };

  return (
    <Container fluid className="bg-dark">
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
                  <Col xs={4}>{renderPlayPauseControl()}</Col>
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
          <Row key={index}>
            <Card className="text-center" bg="dark" text="light">
              <Card.Body>
                <Row className="justify-content-center align-items-center">
                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls
                      src="http://media.w3.org/2010/05/video/movie_300.webm"
                    ></video>
                  </Col>

                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls
                      src="http://media.w3.org/2010/05/video/movie_300.webm"
                    ></video>
                  </Col>

                  <Col xs={4}>
                    <video
                      style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                      controls
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
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Nodes</Card.Header>

          <CardGroup>
            <Card>
              <Card style={{ maxHeight: '50vh', overflow: 'scroll' }} className="text-center" text="dark">
                <h4>DateTime</h4>
                <Calendar onClickDay={(value) => setState({ selectedDate: value })} />

                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Hour</Form.Label>
                      <Form.Control as="select" onChange={(e) => setState({ selectedTimeHour: e.target.value })}>
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
                      <Form.Control as="select" onChange={(e) => setState({ selectedTimeMinute: e.target.value })}>
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
                      <Form.Control as="select" onChange={(e) => setState({ selectedTimeMeridiem: e.target.value })}>
                        <option></option>
                        <option>AM</option>
                        <option>PM</option>
                      </Form.Control>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Card>

            <Card style={{ maxHeight: '50vh', overflow: 'scroll' }} className="text-center" text="dark">
              <h4>Nodes</h4>
              {renderNodeList()}
            </Card>
          </CardGroup>
        </Card>

        <Button onClick={submitForm}>Submit</Button>
      </Modal>
    </Container>
  );
}
