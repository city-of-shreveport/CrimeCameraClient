import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { FaFastBackward, FaFastForward, FaPlay, FaPause } from 'react-icons/fa';
import { GlobalContext } from '../../contexts/globalContext';

export default function VMS() {
  const [state, dispatch] = useContext(GlobalContext);

  const updateState = (newState) => {
    dispatch({
      type: 'updateState',
      payload: newState,
    });
  };

  const isPlaying = () => {
    if (state.isPlayingVMS === true) {
      return (
        <FaPause
          size="64"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.pause());
            updateState({ isPlayingVMS: false });
          }}
        />
      );
    } else {
      return (
        <FaPlay
          size="64"
          className="amber-text pr-3"
          onClick={() => {
            [...document.getElementsByTagName('video')].map((video) => video.play());
            updateState({ isPlayingVMS: true });
          }}
        />
      );
    }
  };

  return (
    <Container fluid className="homeContainer bg-dark">
      <Row>
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={3}>
                <Button>Select DateTime</Button>
              </Col>
              <Col xs={9}>
                <Row className="justify-content-center">
                  <Col xs={3}>
                    <FaFastBackward
                      size="64"
                      className="amber-text pr-3"
                      onClick={() =>
                        [...document.getElementsByTagName('video')].map(
                          (video) => (video.currentTime = video.currentTime - 10)
                        )
                      }
                    />
                  </Col>
                  <Col xs={3}>{isPlaying()}</Col>
                  <Col xs={3}>
                    <FaFastForward
                      size="64"
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
                <Row className="align-items-center">
                  <Col xs={6}>
                    <video
                      width="400px"
                      controls="true"
                      src="http://10.10.10.10:3001/nodes/CrimeCamera018/camera1/1624311902.mp4"
                    ></video>
                  </Col>

                  <Col xs={6}>
                    <video
                      width="400px"
                      controls="true"
                      src="http://10.10.10.10:3001/nodes/CrimeCamera018/camera1/1624311902.mp4"
                    ></video>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
}
