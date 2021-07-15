import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';

export default function RecordingViewer() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'setState',
      payload: newState,
    });
  };

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={3}>
                <Button onClick={() => setState({ RecordingViewerModalOpen: true })}>Select Videos</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row key="key1">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row key="key2">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row key="key3">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '24vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Modal
        show={state.RecordingViewerModalOpen}
        onHide={() => setState({ RecordingViewerModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Videos</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>

        <Button onClick={``}>Submit</Button>
      </Modal>
    </Container>
  );
}
