import Calendar from 'react-calendar';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Map from '../Home/map';
import NodeList from '../Home/nodeList';
import React, { useContext } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';
import { Player } from 'video-react';
import Alert from 'react-bootstrap/Alert';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);

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

  const setShowDateTime = (e) => {
    if (state.showNodesList) {
      dispatch({
        type: 'UPDATESHOWNODESLIST',
        payload: false,
      });
    }

    dispatch({
      type: 'UPDATESHOWDATETIME',
      payload: e,
    });
  };

  const setShowNodesList = (e) => {
    if (state.showDateTime) {
      dispatch({
        type: 'UPDATESHOWDATETIME',
        payload: false,
      });
    }

    dispatch({
      type: 'UPDATESHOWNODESLIST',
      payload: e,
    });
  };
  let rtmpURL1 = 'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera1/index.m3u8';
  let rtmpURL2 = 'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera2/index.m3u8';
  let rtmpURL3 = 'http://10.10.10.10:8000/streams/' + state.currentNodeInfo.name + '-camera3/index.m3u8';
  return (
    <>
      <Container fluid className="homeContainer bg-dark">
        <Row className="justify-content-md-center">
          {state.showNodesList ? <NodeList /> : <></>}

          <Col>
            <CardGroup>
              <Card className="text-center gmapsCard" bg="dark" text="light">
                <Card.Body>
                  <Map isMarkerShown />
                  <Navbar bg="dark" variant="dark">
                    <Button onClick={() => (state.showNodesList ? setShowNodesList(false) : setShowNodesList(true))}>
                      Nodes
                    </Button>
                  </Navbar>
                  <br />
                  {state.videoPlayerActive && (
                    <CardGroup>
                      <Card bg="dark" text="light">
                        <ReactHlsPlayer
                          src={rtmpURL1}
                          hlsConfig={{
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            lowLatencyMode: true,
                          }}
                          autoPlay={true}
                          controls={true}
                          width="85%"
                          height="auto"
                        />
                      </Card>
                      <Card bg="dark" text="light">
                        <ReactHlsPlayer
                          src={rtmpURL2}
                          hlsConfig={{
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            lowLatencyMode: true,
                          }}
                          autoPlay={true}
                          controls={true}
                          width="85%"
                          height="auto"
                        />
                      </Card>
                      <Card bg="dark" text="light">
                        <ReactHlsPlayer
                          src={rtmpURL3}
                          hlsConfig={{
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            lowLatencyMode: true,
                          }}
                          autoPlay={true}
                          controls={true}
                          width="85%"
                          height="auto"
                        />
                      </Card>
                    </CardGroup>
                  )}
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
