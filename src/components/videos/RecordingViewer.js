import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import moment from 'moment';
import { Carousel } from 'react-responsive-carousel';
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
          RecordingViewerVideos: json,
          RecordingViewerVideoUniqueDates: uniqueDateStrings,
          RecordingViewerModalOpen: true,
          RecordingViewerFormIsLoading: false,
          RecordingViewerCurrentSlide: 0,
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
      RecordingViewerDateSelected: date,
      RecordingViewerTimeSelected: null,
      RecordingViewerAvailableTimes: uniqueAvailableTimes,
      RecordingViewerCurrentSlide: 1,
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
      RecordingViewerNode1Selected: null,
      RecordingViewerNode2Selected: null,
      RecordingViewerNode3Selected: null,
      RecordingViewerTimeSelected: time,
      RecordingViewerAvailableNodes: uniqueAvailableNodes,
      RecordingViewerCurrentSlide: 2,
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

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Card className="text-center" bg="dark" text="light">
          <Card.Body>
            <Row className="justify-content-center align-items-center">
              <Col xs={12}>
                {state.RecordingViewerFormIsLoading ? (
                  <Button disabled>Loading Videos...</Button>
                ) : (
                  <Button onClick={() => handleSelectNodes()}>Select Nodes</Button>
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
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode1Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 1 / Camera 1'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode1Camera1URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode1Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 1 / Camera 2'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode1Camera2URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode1Selected ? (
                  <p>
                    {state.RecordingViewerNode1Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode1Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 1 / Camera 3'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode1Camera3URL}
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
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode2Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 2 / Camera 1'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode2Camera1URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode2Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 2 / Camera 2'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode2Camera2URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode2Selected ? (
                  <p>
                    {state.RecordingViewerNode2Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode2Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 2 / Camera 3'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode2Camera3URL}
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
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 1{' '}
                    <a href={`${state.RecordingViewerNode3Camera1URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 3 / Camera 1'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode3Camera1URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 2{' '}
                    <a href={`${state.RecordingViewerNode3Camera2URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 3 / Camera 2'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode3Camera2URL}
                ></video>
              </Col>
              <Col xs={4}>
                {state.RecordingViewerNode3Selected ? (
                  <p>
                    {state.RecordingViewerNode3Selected.value} / Camera 3{' '}
                    <a href={`${state.RecordingViewerNode3Camera3URL}/download`} download>
                      📥
                    </a>
                  </p>
                ) : (
                  <p>{'Node 3 / Camera 3'}</p>
                )}
                <video
                  style={{ maxWidth: '30vw', maxHeight: '20vh', minHeight: '20vh' }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  src={state.RecordingViewerNode3Camera3URL}
                ></video>
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
