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
              <Col xs={2}>
                {state.RecordingViewerDateButtonEnabled ? (
                  <Button onClick={() => setState({ RecordingViewerDateModalOpen: true })}>Select Date</Button>
                ) : (
                  <Button onClick={() => setState({ RecordingViewerDateModalOpen: true })} disabled>
                    Select Date
                  </Button>
                )}
              </Col>
              <Col xs={2}>
                {state.RecordingViewerTimeButtonEnabled ? (
                  <Button onClick={() => setState({ RecordingViewerTimeModalOpen: true })}>Select Time</Button>
                ) : (
                  <Button onClick={() => setState({ RecordingViewerTimeModalOpen: true })} disabled>
                    Select Time
                  </Button>
                )}
              </Col>
              <Col xs={1}>
                {state.RecordingViewerNode1ButtonEnabled ? (
                  <Button onClick={() => setState({ RecordingViewerNode1ModalOpen: true })}>Select Node</Button>
                ) : (
                  <Button onClick={() => setState({ RecordingViewerNode1ModalOpen: true })} disabled>
                    Select Node
                  </Button>
                )}
              </Col>
              <Col xs={1}>
                {state.RecordingViewerNode2ButtonEnabled ? (
                  <Button onClick={() => setState({ RecordingViewerNode2ModalOpen: true })}>Select Node</Button>
                ) : (
                  <Button onClick={() => setState({ RecordingViewerNode2ModalOpen: true })} disabled>
                    Select Node
                  </Button>
                )}
              </Col>
              <Col xs={1}>
                {state.RecordingViewerNode3ButtonEnabled ? (
                  <Button onClick={() => setState({ RecordingViewerNode3ModalOpen: true })}>Select Node</Button>
                ) : (
                  <Button onClick={() => setState({ RecordingViewerNode3ModalOpen: true })} disabled>
                    Select Node
                  </Button>
                )}
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
                <p>CrimeCamera001/camera1</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera001/camera2</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera001/camera3</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
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
                <p>CrimeCamera002/camera1</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera002/camera2</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera002/camera3</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
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
                <p>CrimeCamera003/camera1</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera003/camera2</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
              <Col xs={4}>
                <p>CrimeCamera003/camera3</p>
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                ></video>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Modal
        show={state.RecordingViewerDateModalOpen}
        onHide={() => setState({ RecordingViewerDateModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Date</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>
      </Modal>

      <Modal
        show={state.RecordingViewerTimeModalOpen}
        onHide={() => setState({ RecordingViewerTimeModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Time</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>
      </Modal>

      <Modal
        show={state.RecordingViewerNode1ModalOpen}
        onHide={() => setState({ RecordingViewerNode1ModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Node</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>
      </Modal>

      <Modal
        show={state.RecordingViewerNode2ModalOpen}
        onHide={() => setState({ RecordingViewerNode2ModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Node</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>
      </Modal>

      <Modal
        show={state.RecordingViewerNode3ModalOpen}
        onHide={() => setState({ RecordingViewerNode3ModalOpen: false })}
        size="md"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Select Node</Card.Header>

          <CardGroup>
            <Card
              style={{ minHeight: '60vh', maxHeight: '50vh', overflow: 'scroll' }}
              className="text-center"
              text="dark"
            ></Card>
          </CardGroup>
        </Card>
      </Modal>
    </Container>
  );
}
