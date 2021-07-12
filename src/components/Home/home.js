import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Map from '../Home/map';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function Home() {
  const [state] = useContext(GlobalContext);

  return (
    <>
      <Container fluid className="homeContainer bg-dark">
        <Row className="justify-content-md-center">
          <Col>
            <CardGroup>
              <Card className="text-center gmapsCard" bg="dark" text="light">
                <Card.Body>
                  <Map isMarkerShown />
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          {state.videoPlayerActive ? (
            <Col xs={2}>
              <h4 style={{ color: 'white' }}>{state.currentNodeInfo.name}</h4>

              <Card bg="dark" text="light">
                {tryValue(() => {
                  return state.currentNodeInfo.perfmon.cameraStatus.camera1 ? (
                    <Nav.Link>
                      <h5 style={{ color: 'green' }}>Camera 1: OK </h5>
                    </Nav.Link>
                  ) : (
                    <Nav.Link>
                      <h5 style={{ color: 'red' }}>Camera 1: Bad </h5>
                    </Nav.Link>
                  );
                })}

                {state.videoPlayerActive ? (
                  <ReactPlayer
                    url={'http://10.10.30.10:8001/' + state.currentNodeInfo.name + '/camera1.flv'}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="auto"
                    fileConfig={{ attributes: { poster: '../../../public/logo512.png' } }}
                  />
                ) : (
                  <></>
                )}
              </Card>
              <Card bg="dark" text="light">
                {tryValue(() => {
                  return state.currentNodeInfo.perfmon.cameraStatus.camera2 ? (
                    <Nav.Link>
                      <h5 style={{ color: 'green' }}>Camera 2: OK </h5>
                    </Nav.Link>
                  ) : (
                    <Nav.Link>
                      <h5 style={{ color: 'red' }}>Camera 2: Bad </h5>
                    </Nav.Link>
                  );
                })}
                {'  '}
                {state.videoPlayerActive ? (
                  <ReactPlayer
                    url={'http://10.10.30.10:8001/' + state.currentNodeInfo.name + '/camera2.flv'}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <></>
                )}
              </Card>
              <Card bg="dark" text="light">
                {tryValue(() => {
                  return state.currentNodeInfo.perfmon.cameraStatus.camera3 ? (
                    <Nav.Link>
                      <h5 style={{ color: 'green' }}>Camera 3: OK </h5>
                    </Nav.Link>
                  ) : (
                    tryValue(() => {
                      return state.currentNodeInfo.perfmon.cameraStatus.camera3 ? (
                        <Nav.Link>
                          <h5 style={{ color: 'green' }}>Camera 3: OK </h5>
                        </Nav.Link>
                      ) : (
                        <Nav.Link>
                          <h5 style={{ color: 'red' }}>Camera 3: Bad </h5>
                        </Nav.Link>
                      );
                    })
                  );
                })}
                {state.videoPlayerActive ? (
                  <ReactPlayer
                    url={'http://10.10.30.10:8001/' + state.currentNodeInfo.name + '/camera3.flv'}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <></>
                )}
              </Card>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  );
}
