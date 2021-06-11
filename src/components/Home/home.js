import Calendar from 'react-calendar';
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

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);
  let rtmpURL1 = 'http://10.10.200.10:8000/streams/' + state.currentNodeInfo.name + '-camera1/index.m3u8';
  let rtmpURL2 = 'http://10.10.200.10:8000/streams/' + state.currentNodeInfo.name + '-camera2/index.m3u8';
  let rtmpURL3 = 'http://10.10.200.10:8000/streams/' + state.currentNodeInfo.name + '-camera3/index.m3u8';

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

  return (
    <>
      <Container fluid className="homeContainer bg-dark">
        <Row className="justify-content-md-center">
          <Col>
            <Card className="text-center gmapsCard" bg="dark" text="light">
              <Card.Body>
                <Map isMarkerShown />
                <br />
                {state.videoPlayerActive ? (
                  <CardGroup>
                    <Card bg="dark" text="light">
                      <Player
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        autoPlay={true}
                        controls={false}
                        width="85%"
                        height="auto"
                      />
                    </Card>
                    <Card bg="dark" text="light">
                      <Player
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        autoPlay={true}
                        controls={false}
                        width="85%"
                        height="auto"
                      />
                    </Card>
                    <Card bg="dark" text="light">
                      <Player
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        autoPlay={true}
                        controls={false}
                        width="85%"
                        height="auto"
                      />
                    </Card>
                  </CardGroup>
                ) : (
                  <div></div>
                )}
                {state.liveStreamingActive ? (
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
                ) : (
                  <div></div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <NodeList />
      </Container>
    </>
  );
}
