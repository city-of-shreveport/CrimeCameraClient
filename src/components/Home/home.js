// import Calendar from 'react-calendar';
// import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Moment from 'react-moment';
import tryValue from '../../helperFunctions';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Table from 'react-bootstrap/Table';
import Map from '../Home/map';
// import NodeList from '../Home/nodeList';
import React, { useContext } from 'react';
// import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';
// import { Player } from 'video-react';
// import Alert from 'react-bootstrap/Alert';

export default function Home() {
  const [state] = useContext(GlobalContext);

  // const startStream = (json) => {
  //   fetch('http://10.10.10.10:3001/api/streams/start/' + json.name + '/' + json.config.ip).then((response) => {});

  //   dispatch({
  //     type: 'UPDATE_LIVESTREAMINGACTIVE',
  //     payload: true,
  //   });
  // };

  // const openPlayer = () => {
  //   dispatch({
  //     type: 'UPDATE_LIVESTREAMINGACTIVE',
  //     payload: true,
  //   });
  //   dispatch({
  //     type: 'UPDATE_VIDEOPLAYERACTIVE',
  //     payload: true,
  //   });
  // };

  // const stopStream = () => {
  //   fetch('http://10.10.10.10:3001/api/streams/stop/' + state.currentNodeInfo.name).then((response) => {});
  //   dispatch({
  //     type: 'UPDATE_LIVESTREAMINGACTIVE',
  //     payload: false,
  //   });
  //   dispatch({
  //     type: 'UPDATE_VIDEOPLAYERACTIVE',
  //     payload: false,
  //   });
  // };

  // let perfMonTimerJob = null;

  // const getPerfmonData = (node) =>
  //   fetch('http://10.10.10.10:3001/api/perfmons/' + node)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const rowLen = json.length;
  //       json.map((perfmon, i) => {
  //         if (i === 0) {
  //           dispatch({
  //             type: 'UPDATE_CURRENT_NODE_PERFMON',
  //             payload: perfmon,
  //           });
  //           console.log(state);
  //         }
  //       });
  //     });

  // const getNodeInfo = (node) => {
  //   stopStream();
  //   console.log();
  //   getPerfmonData(node);
  //   fetch('http://10.10.10.10:3001/api/nodes/' + node)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       dispatch({
  //         type: 'UPDATE_CURRENT_NODE_INFO',
  //         payload: json,
  //       });

  //       startStream(json);
  //     });
  // };

  // const upDateSelectedNode = (param) => {
  //   stopStream();
  //   getNodeInfo(param);
  //   clearInterval(perfMonTimerJob);
  //   dispatch({
  //     type: 'UPDATE_VIDEOPLAYERACTIVE',
  //     payload: false,
  //   });
  //   dispatch({
  //     type: 'UPDATE_LIVESTREAMINGACTIVE',
  //     payload: true,
  //   });
  //   dispatch({
  //     type: 'UPDATE_SELECTEDNODE',
  //     payload: param,
  //   });
  //   dispatch({
  //     type: 'UPDATE_NODESYSCAMERACOMPONENT',
  //     payload: false,
  //   });
  // };

  // const updateHomeVideoDate = (e) =>
  //   dispatch({
  //     type: 'UPDATEHOMEVIDEODATE',
  //     payload: e,
  //   });

  // const updateHomeTimeHour = (e) =>
  //   dispatch({
  //     type: 'UPDATEHOMEVIDEOTIMEHOUR',
  //     payload: e,
  //   });

  // const updateHomeTimeMin = (e) =>
  //   dispatch({
  //     type: 'UPDATEHOMEVIDEOTIMEMIN',
  //     payload: e,
  //   });

  // const updateHomeTimeAMPM = (e) =>
  //   dispatch({
  //     type: 'UPDATEHOMEVIDEOTIMEPM',
  //     payload: e,
  //   });

  // const setShowDateTime = (e) => {
  //   if (state.showNodesList) {
  //     dispatch({
  //       type: 'UPDATESHOWNODESLIST',
  //       payload: false,
  //     });
  //   }

  //   dispatch({
  //     type: 'UPDATESHOWDATETIME',
  //     payload: e,
  //   });
  // };

  // const setShowNodesList = (e) => {
  //   if (state.showDateTime) {
  //     dispatch({
  //       type: 'UPDATESHOWDATETIME',
  //       payload: false,
  //     });
  //   }

  //   dispatch({
  //     type: 'UPDATESHOWNODESLIST',
  //     payload: e,
  //   });
  // };

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
                    url={'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera1.flv'}
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
                    url={'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera2.flv'}
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
                    url={'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera3.flv'}
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
