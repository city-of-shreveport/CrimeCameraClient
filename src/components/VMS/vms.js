import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { FaFastBackward, FaFastForward, FaPlay, FaStop } from 'react-icons/fa';

export default function VMS() {
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
                  <Col xs={3}>
                    <FaPlay
                      size="64"
                      className="amber-text pr-3"
                      onClick={() => [...document.getElementsByTagName('video')].map((video) => video.play())}
                    />
                  </Col>
                  <Col xs={3}>
                    <FaStop
                      size="64"
                      className="amber-text pr-3"
                      onClick={() => [...document.getElementsByTagName('video')].map((video) => video.pause())}
                    />
                  </Col>
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
                  <Col xs={3}>
                    <video controls="true" src="http://media.w3.org/2010/05/video/movie_300.webm"></video>
                  </Col>

                  <Col xs={3}>
                    <video controls="true" src="http://media.w3.org/2010/05/video/movie_300.webm"></video>
                  </Col>

                  <Col xs={3}>
                    <video controls="true" src="http://media.w3.org/2010/05/video/movie_300.webm"></video>
                  </Col>

                  <Col xs={3}>
                    <video controls="true" src="http://media.w3.org/2010/05/video/movie_300.webm"></video>
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
