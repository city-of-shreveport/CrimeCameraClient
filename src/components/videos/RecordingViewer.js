import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DateTimePicker from 'react-datetime-picker';
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
    if (state.RecordingViewerSelectedNodes.includes(node)) {
      var newNodeList = state.RecordingViewerSelectedNodes.filter((n) => {
        return n !== node;
      });

      setState({ RecordingViewerSelectedNodes: newNodeList });
    } else {
      if (state.RecordingViewerSelectedNodes.length <= 2) {
        state.RecordingViewerSelectedNodes.push(node);
        setState({ RecordingViewerSelectedNodes: state.RecordingViewerSelectedNodes });
      }
    }
  };

  const submitForm = () => {
    fetch(`http://10.10.10.10:3001/api/videos/recordings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dateTime: state.RecordingViewerSelectedDateTime,
        nodes: state.RecordingViewerSelectedNodes,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setState({ RecordingViewerFileURLLists: data, RecordingViewerModalOpen: false });
      });
  };

  const renderPlayPauseControl = () => {
    if (state.RecordingViewerIsPlaying === true) {
      return (
        <FaPause
          size="3em"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.pause());
            setState({ RecordingViewerIsPlaying: false });
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
            setState({ RecordingViewerIsPlaying: true });
          }}
        />
      );
    }
  };

  const renderNodeList = () => {
    return state.nodes.map((node) => {
      if (state.RecordingViewerSelectedNodes.includes(node.name)) {
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
                <Button onClick={() => setState({ RecordingViewerModalOpen: true })}>Select Nodes</Button>
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

      {Object.keys(state.RecordingViewerFileURLLists).map((key) => {
        return (
          <Row key={key}>
            <Card className="text-center" bg="dark" text="light">
              <Card.Body>
                <Row className="justify-content-center align-items-center">
                  {state.RecordingViewerFileURLLists[key].map((recording) => {
                    return (
                      <Col xs={4}>
                        <video
                          style={{ maxWidth: '30vw', maxHeight: '45vh' }}
                          controls
                          src={`http://10.10.10.10:3001/nodes/${key}/${recording.fileLocation}`}
                        ></video>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
            </Card>
          </Row>
        );
      })}

      <Modal
        show={state.RecordingViewerModalOpen}
        onHide={() => setState({ RecordingViewerModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Nodes</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            >
              <h4>DateTime</h4>
              <DateTimePicker
                style={{}}
                onChange={(value) => setState({ RecordingViewerSelectedDateTime: value })}
                value={state.RecordingViewerSelectedDateTime}
              />
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
