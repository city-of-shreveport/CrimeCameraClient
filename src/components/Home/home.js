import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
                      <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                      </Player>
                    </Card>
                    <Card bg="dark" text="light">
                      <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                      </Player>
                    </Card>
                    <Card bg="dark" text="light">
                      <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                      </Player>
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
                        width="100%"
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
                        width="100%"
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
                        width="100%"
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
          {state.videoPlayerActive ? (
            <Col xs={4} bg="dark" text="light">
              <Card className="text-center" bg="dark" text="light">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Calendar onClickDay={(e) => updateHomeVideoDate(e)} value={state.homeVideoDate} />
                  <Form>
                    <Row>
                      <Col>
                        <Form.Label>Hour</Form.Label>
                        <Form.Control as="select" onChange={(e) => updateHomeTimeHour(e.target.value)}>
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
                        <Form.Label>Minutes</Form.Label>
                        <Form.Control as="select" onChange={(e) => updateHomeTimeMin(e.target.value)}>
                          <option>00</option>
                          <option>15</option>
                          <option>30</option>
                          <option>45</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        {' '}
                        <Form.Label>AM/PM</Form.Label>
                        <Form.Control as="select" onChange={(e) => updateHomeTimeAMPM(e.target.value)}>
                          <option>AM</option>
                          <option>PM</option>
                        </Form.Control>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
          ) : (
            <div></div>
          )}
        </Row>
        <NodeList />
      </Container>
    </>
  );
}
