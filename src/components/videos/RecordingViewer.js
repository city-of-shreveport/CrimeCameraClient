import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import moment from 'moment';
import { Carousel } from 'react-responsive-carousel';
import { FaPlay, FaPause } from 'react-icons/fa';
import { GlobalContext } from '../../contexts/globalContext';

export default function RecordingViewer() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'setState',
      payload: newState,
    });
  };

  const handleSelectNodes = () => {
    setState({ RecordingViewerFormIsLoading: true });
    fetch('http://rtcc-server.shreveport-it.org/api/videos/')
      .then((response) => response.json())
      .then((json) => {
        var dates = json.map((video) => video.dateTime);
        var dateStrings = dates.map((date) => {
          return moment(date).format('L');
        });
        var uniqueDateStrings = [...new Set(dateStrings)];

        setState({
          RecordingViewerCurrentSlide: 0,
          RecordingViewerFormIsLoading: false,
          RecordingViewerModalOpen: true,
          RecordingViewerNode1Camera1URL: '/camera.mp4',
          RecordingViewerNode1Camera2URL: '/camera.mp4',
          RecordingViewerNode1Camera3URL: '/camera.mp4',
          RecordingViewerNode1Selected: '',
          RecordingViewerNode2Camera1URL: '/camera.mp4',
          RecordingViewerNode2Camera2URL: '/camera.mp4',
          RecordingViewerNode2Camera3URL: '/camera.mp4',
          RecordingViewerNode2Selected: '',
          RecordingViewerNode3Camera1URL: '/camera.mp4',
          RecordingViewerNode3Camera2URL: '/camera.mp4',
          RecordingViewerNode3Camera3URL: '/camera.mp4',
          RecordingViewerNode3Selected: '',
          RecordingViewerVideoUniqueDates: uniqueDateStrings,
          RecordingViewerVideos: json,
        });
      });
  };

  const handleSelectDate = (date) => {
    var selectedDate = moment(date).format('L');
    var availableTimes = state.RecordingViewerVideos.map((video) => {
      var videoDate = moment(video.dateTime).format('L');
      if (videoDate === selectedDate) {
        return moment(video.dateTime).format('LT');
      } else {
        return undefined;
      }
    });
    var filteredAvailableTimes = availableTimes.filter((time) => time !== undefined);
    var uniqueAvailableTimes = [...new Set(filteredAvailableTimes)];

    setState({
      RecordingViewerAvailableTimes: uniqueAvailableTimes,
      RecordingViewerCurrentSlide: 1,
      RecordingViewerDateSelected: date,
      RecordingViewerNode1Camera1URL: '/camera.mp4',
      RecordingViewerNode1Camera2URL: '/camera.mp4',
      RecordingViewerNode1Camera3URL: '/camera.mp4',
      RecordingViewerNode1Selected: '',
      RecordingViewerNode2Camera1URL: '/camera.mp4',
      RecordingViewerNode2Camera2URL: '/camera.mp4',
      RecordingViewerNode2Camera3URL: '/camera.mp4',
      RecordingViewerNode2Selected: '',
      RecordingViewerNode3Camera1URL: '/camera.mp4',
      RecordingViewerNode3Camera2URL: '/camera.mp4',
      RecordingViewerNode3Camera3URL: '/camera.mp4',
      RecordingViewerNode3Selected: '',
      RecordingViewerTimeSelected: '',
    });
  };

  const handleSelectTime = (time) => {
    var selectedDate = moment(state.RecordingViewerDateSelected).format('L');
    var selectedTime = time.value;
    var availableNodes = state.RecordingViewerVideos.map((video) => {
      var videoDate = moment(video.dateTime).format('L');
      var videoTime = moment(video.dateTime).format('LT');
      if (videoDate === selectedDate && videoTime === selectedTime) {
        return video.node;
      } else {
        return undefined;
      }
    });
    var filteredAvailableNodes = availableNodes.filter((node) => node !== undefined);
    var uniqueAvailableNodes = [...new Set(filteredAvailableNodes)];

    setState({
      RecordingViewerAvailableNodes: uniqueAvailableNodes,
      RecordingViewerCurrentSlide: 2,
      RecordingViewerNode1Camera1URL: '/camera.mp4',
      RecordingViewerNode1Camera2URL: '/camera.mp4',
      RecordingViewerNode1Camera3URL: '/camera.mp4',
      RecordingViewerNode1Selected: '',
      RecordingViewerNode2Camera1URL: '/camera.mp4',
      RecordingViewerNode2Camera2URL: '/camera.mp4',
      RecordingViewerNode2Camera3URL: '/camera.mp4',
      RecordingViewerNode2Selected: '',
      RecordingViewerNode3Camera1URL: '/camera.mp4',
      RecordingViewerNode3Camera2URL: '/camera.mp4',
      RecordingViewerNode3Camera3URL: '/camera.mp4',
      RecordingViewerNode3Selected: '',
      RecordingViewerTimeSelected: time,
    });
  };

  const handleSelectNode1 = (node) => {
    var date = moment(state.RecordingViewerDateSelected).format('YYYY-MM-DD');
    var time = state.RecordingViewerTimeSelected.value;
    var hours = new Date(`${date} ${time}`).getHours();
    hours = ('0' + hours).slice(-2);
    var minutes = new Date(`${date} ${time}`).getMinutes();
    minutes = ('0' + minutes).slice(-2);
    var file = `${date}-${hours}-${minutes}.mp4`;

    setState({
      RecordingViewerNode1Camera1URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera1/${file}`,
      RecordingViewerNode1Camera2URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera2/${file}`,
      RecordingViewerNode1Camera3URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera3/${file}`,
      RecordingViewerNode1Selected: node,
    });
  };

  const handleSelectNode2 = (node) => {
    var date = moment(state.RecordingViewerDateSelected).format('YYYY-MM-DD');
    var time = state.RecordingViewerTimeSelected.value;
    var hours = new Date(`${date} ${time}`).getHours();
    hours = ('0' + hours).slice(-2);
    var minutes = new Date(`${date} ${time}`).getMinutes();
    minutes = ('0' + minutes).slice(-2);
    var file = `${date}-${hours}-${minutes}.mp4`;

    setState({
      RecordingViewerNode2Camera1URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera1/${file}`,
      RecordingViewerNode2Camera2URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera2/${file}`,
      RecordingViewerNode2Camera3URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera3/${file}`,
      RecordingViewerNode2Selected: node,
    });
  };

  const handleSelectNode3 = (node) => {
    var date = moment(state.RecordingViewerDateSelected).format('YYYY-MM-DD');
    var time = state.RecordingViewerTimeSelected.value;
    var hours = new Date(`${date} ${time}`).getHours();
    hours = ('0' + hours).slice(-2);
    var minutes = new Date(`${date} ${time}`).getMinutes();
    minutes = ('0' + minutes).slice(-2);
    var file = `${date}-${hours}-${minutes}.mp4`;

    setState({
      RecordingViewerNode3Camera1URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera1/${file}`,
      RecordingViewerNode3Camera2URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera2/${file}`,
      RecordingViewerNode3Camera3URL: `http://rtcc-server.shreveport-it.org/api/videos/stream/${node.value}/camera3/${file}`,
      RecordingViewerNode3Selected: node,
    });
  };

  const dateHasNoVideos = (date) => {
    return state.RecordingViewerVideoUniqueDates.includes(moment(date).format('L')) ? false : true;
  };

  const prevSlide = () => {
    setState({
      RecordingViewerCurrentSlide: state.RecordingViewerCurrentSlide - 1,
    });
  };

  const renderTimeOptions = () => {
    if (state.RecordingViewerAvailableTimes.length > 0) {
      return (
        <Select
          value={state.RecordingViewerTimeSelected}
          options={state.RecordingViewerAvailableTimes.map((item) => {
            return { value: item, label: item };
          })}
          onChange={(value) => handleSelectTime(value)}
        />
      );
    } else {
      return null;
    }
  };

  const renderNode1Options = () => {
    if (state.RecordingViewerAvailableNodes.length > 0) {
      return (
        <Select
          value={state.RecordingViewerNode1Selected}
          options={state.RecordingViewerAvailableNodes.map((item) => {
            return { value: item, label: item };
          })}
          onChange={(value) => handleSelectNode1(value)}
        />
      );
    } else {
      return null;
    }
  };

  const renderNode2Options = () => {
    if (state.RecordingViewerAvailableNodes.length > 0) {
      return (
        <Select
          value={state.RecordingViewerNode2Selected}
          options={state.RecordingViewerAvailableNodes.map((item) => {
            return { value: item, label: item };
          })}
          onChange={(value) => handleSelectNode2(value)}
        />
      );
    } else {
      return null;
    }
  };

  const renderNode3Options = () => {
    if (state.RecordingViewerAvailableNodes.length > 0) {
      return (
        <Select
          value={state.RecordingViewerNode3Selected}
          options={state.RecordingViewerAvailableNodes.map((item) => {
            return { value: item, label: item };
          })}
          onChange={(value) => handleSelectNode3(value)}
        />
      );
    } else {
      return null;
    }
  };

  const renderPlayPauseControl = () => {
    if (state.RecordingViewerIsPlaying === true) {
      return (
        <FaPause
          size="3em"
          className="amber-text pr-3"
          onClick={() => {
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
            setState({ RecordingViewerIsPlaying: true });
          }}
        />
      );
    }
  };

  const player1Reference = (ref) => {
    state.RecordingViewerPlayer1Reference = ref;
  };

  const player2Reference = (ref) => {
    state.RecordingViewerPlayer2Reference = ref;
  };

  const player3Reference = (ref) => {
    state.RecordingViewerPlayer3Reference = ref;
  };

  const player4Reference = (ref) => {
    state.RecordingViewerPlayer4Reference = ref;
  };

  const player5Reference = (ref) => {
    state.RecordingViewerPlayer5Reference = ref;
  };

  const player6Reference = (ref) => {
    state.RecordingViewerPlayer6Reference = ref;
  };

  const player7Reference = (ref) => {
    state.RecordingViewerPlayer7Reference = ref;
  };

  const player8Reference = (ref) => {
    state.RecordingViewerPlayer8Reference = ref;
  };

  const player9Reference = (ref) => {
    state.RecordingViewerPlayer9Reference = ref;
  };

  const handleSeekMouseDown = (e) => {
    setState({ RecordingViewerIsSeeking: true });
  };

  const handleSeekChange = (e) => {
    setState({ RecordingViewerDurationPlayed: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setState({ RecordingViewerIsSeeking: false });
    state.RecordingViewerPlayer1Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer2Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer3Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer4Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer5Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer6Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer7Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer8Reference.seekTo(parseFloat(e.target.value));
    state.RecordingViewerPlayer9Reference.seekTo(parseFloat(e.target.value));
  };

  return (
    <Container fluid className="bg-dark">
      <Row key="key1">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={3}>
                {state.RecordingViewerFormIsLoading ? (
                  <Button disabled>Loading Videos...</Button>
                ) : (
                  <Button onClick={() => handleSelectNodes()}>Select Nodes</Button>
                )}
              </Col>

              <Col xs={3}>
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode1Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player1Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode1Camera1URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode1Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player2Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode1Camera2URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode1Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player3Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode1Camera3URL}
                  controls={false}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row key="key2">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={3}>{renderPlayPauseControl()}</Col>

              <Col xs={3}>
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode2Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player4Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode2Camera1URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode2Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player5Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode2Camera2URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode2Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player6Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode2Camera3URL}
                  controls={false}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row key="key3">
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={3}>
                <input
                  type="range"
                  min={0}
                  max={0.999999}
                  step="any"
                  value={state.RecordingViewerDurationPlayed}
                  onMouseUp={handleSeekMouseUp}
                  onMouseDown={handleSeekMouseDown}
                  onChange={handleSeekChange}
                />
              </Col>

              <Col xs={3}>
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode3Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player7Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode3Camera1URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode3Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player8Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode3Camera2URL}
                  controls={false}
                />
              </Col>
              <Col xs={3}>
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode3Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'-'}</p>
                )}
                <ReactPlayer
                  ref={player9Reference}
                  playing={state.RecordingViewerIsPlaying}
                  width="100%"
                  height="100%"
                  url={state.RecordingViewerNode3Camera3URL}
                  controls={false}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Modal
        show={state.RecordingViewerModalOpen}
        onHide={() => setState({ RecordingViewerModalOpen: false })}
        size="lg"
        centered
        style={{ maxHeight: '90%', minWidth: '100%' }}
      >
        <Card className="text-center" bg="dark" text="light">
          <CardGroup>
            <Card
              className="text-center"
              text="dark"
              style={{ minHeight: '500px', maxHeight: '50vh', overflow: 'scroll' }}
            >
              <Carousel
                autoPlay={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                useKeyboardArrows={false}
                selectedItem={state.RecordingViewerCurrentSlide}
              >
                <div style={{ minHeight: '500px', maxHeight: '50vh' }}>
                  <h4>Select Date</h4>
                  <Calendar
                    onChange={(date) => handleSelectDate(date)}
                    value={state.RecordingViewerDateSelected}
                    tileDisabled={({ date }) => dateHasNoVideos(date)}
                  />
                </div>
                <div style={{ minHeight: '500px', maxHeight: '50vh' }}>
                  <h4>Select Time</h4>
                  <button style={{ marginBottom: '10px' }} onClick={prevSlide}>
                    Previous
                  </button>
                  <div style={{ width: '50%', margin: 'auto' }}>{renderTimeOptions()}</div>
                </div>
                <div style={{ minHeight: '500px', maxHeight: '50vh' }}>
                  <h4>Select Nodes</h4>
                  <button style={{ marginBottom: '10px' }} onClick={prevSlide}>
                    Previous
                  </button>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '33%', display: 'inline-block' }}>
                      <h5>Node 1</h5>
                      {renderNode1Options()}
                    </div>
                    <div style={{ width: '33%', display: 'inline-block' }}>
                      <h5>Node 2</h5>
                      {renderNode2Options()}
                    </div>
                    <div style={{ width: '33%', display: 'inline-block' }}>
                      <h5>Node 3</h5>
                      {renderNode3Options()}
                    </div>
                  </div>
                </div>
              </Carousel>
            </Card>
          </CardGroup>
        </Card>
      </Modal>
    </Container>
  );
}
