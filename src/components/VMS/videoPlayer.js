import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import { FaFastForward } from 'react-icons/fa';
import { FaFastBackward } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Calendar from 'react-calendar';
import { Player } from 'video-react';
import Map from '../Home/map';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.test,
      modalOpen: false,
      modalCameraOpen: false,
      cameras: [],
      videos: [],
      camButtonSelected: '',
      selectedCam1: '',
      selectedCam2: '',
      selectedCam3: '',
      selectedVMSTimeMin: '00',
      selectedVMSTimeHour: '12',
      vmsTimePM: false,
      selectedVMSDate: new Date(),
    };

    fetch('http://10.10.200.10:3001/api/nodes')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ nodes: json });
        this.setState({ nodesReceived: true });
      });

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.player1.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player2.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player3.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player4.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player5.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player6.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player7.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player8.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player9.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  async fetchVideos() {
    console.log('Fetching videos...');
    fetch('http://10.10.200.10:3001/api/videos')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ videos: json });
      });
  }

  setMuted(muted) {
    return () => {
      this.player1.muted = muted;
    };
  }

  handleStateChange(state) {
    this.setState({
      player1: state,
      player2: state,
      player3: state,
      player4: state,
      player5: state,
      player6: state,
      player7: state,
      player8: state,
      player9: state,
    });
  }

  play() {
    this.player1.play();
    this.player2.play();
    this.player3.play();
    this.player4.play();
    this.player5.play();
    this.player6.play();
    this.player7.play();
    this.player8.play();
    this.player9.play();
  }

  pause() {
    this.player1.pause();
    this.player2.pause();
    this.player3.pause();
    this.player4.pause();
    this.player5.pause();
    this.player6.pause();
    this.player7.pause();
    this.player8.pause();
    this.player9.pause();
  }

  load() {
    this.player1.load();
    this.player2.load();
    this.player3.load();
    this.player4.load();
    this.player5.load();
    this.player6.load();
    this.player7.load();
    this.player8.load();
    this.player9.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player1.getState();
      this.player1.seek(player.currentTime + seconds);
      this.player2.seek(player.currentTime + seconds);
      this.player3.seek(player.currentTime + seconds);
      this.player4.seek(player.currentTime + seconds);
      this.player5.seek(player.currentTime + seconds);
      this.player6.seek(player.currentTime + seconds);
      this.player7.seek(player.currentTime + seconds);
      this.player8.seek(player.currentTime + seconds);
      this.player9.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player1.seek(seconds);
      this.player2.seek(seconds);
      this.player3.seek(seconds);
      this.player4.seek(seconds);
      this.player5.seek(seconds);
      this.player6.seek(seconds);
      this.player7.seek(seconds);
      this.player8.seek(seconds);
      this.player9.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player1 } = this.player1.getState();
      this.player1.playbackRate = player1.playbackRate + steps;
      this.player2.playbackRate = player1.playbackRate + steps;
      this.player3.playbackRate = player1.playbackRate + steps;
      this.player4.playbackRate = player1.playbackRate + steps;
      this.player5.playbackRate = player1.playbackRate + steps;
      this.player6.playbackRate = player1.playbackRate + steps;
      this.player7.playbackRate = player1.playbackRate + steps;
      this.player8.playbackRate = player1.playbackRate + steps;
      this.player9.playbackRate = player1.playbackRate + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source1: sources[name],
        source2: sources[name],
        source3: sources[name],
      });

      this.player1.load();
      this.player2.load();
      this.player3.load();
      this.player4.load();
      this.player5.load();
      this.player6.load();
      this.player7.load();
      this.player8.load();
      this.player9.load();
    };
  }

  render() {
    const upDateSelectedCam = (param) => {
      let buttonSelected = this.state.camButtonSelected;
      switch (buttonSelected) {
        case 'selectedCam1':
          this.setState({ selectedCam1: param });
          break;
        case 'selectedCam2':
          this.setState({ selectedCam2: param });
          break;
        case 'selectedCam3':
          this.setState({ selectedCam3: param });
          break;
        default:
          break;
      }
    };

    return (
      <div className="videoPlayerDIV">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <Card className="text-center">
                <Card.Header as="h5">Video Player</Card.Header>
                <Card.Body>
                  <br />
                  <Row>
                    <Col xs={2}>
                      <br />
                      <br />
                      <Card.Header>Camera</Card.Header>
                      <Card.Title>{this.state.selectedCam1}</Card.Title>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => this.setState({ modalCameraOpen: true, camButtonSelected: 'selectedCam1' })}
                      >
                        Change
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player1) => {
                          this.player1 = player1;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player2) => {
                          this.player2 = player2;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player3) => {
                          this.player3 = player3;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={2}>
                      <br />
                      <br />
                      <Card.Header>Camera</Card.Header>
                      <Card.Title>{this.state.selectedCam2}</Card.Title>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => this.setState({ modalCameraOpen: true, camButtonSelected: 'selectedCam2' })}
                      >
                        Camera
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player4) => {
                          this.player4 = player4;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>

                    <Col xs={3}>
                      <Player
                        ref={(player5) => {
                          this.player5 = player5;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player6) => {
                          this.player6 = player6;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={2}>
                      <br />
                      <br />
                      <Card.Header>Camera</Card.Header>
                      <Card.Title>{this.state.selectedCam3}</Card.Title>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => this.setState({ modalCameraOpen: true, camButtonSelected: 'selectedCam3' })}
                      >
                        Camera
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Player
                        ref={(player7) => {
                          this.player7 = player7;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>

                    <Col xs={3}>
                      <Player
                        ref={(player8) => {
                          this.player8 = player8;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>

                    <Col xs={3}>
                      <Player
                        ref={(player9) => {
                          this.player9 = player9;
                        }}
                      >
                        <source src={this.state.source} />
                      </Player>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">
                      Video Time: {this.state.videoTime >= 0 && this.state.videoTime}
                    </Navbar.Brand>
                    <FaFastBackward size="28" className="amber-text pr-3" onClick={this.changeCurrentTime(-10)} />{' '}
                    <FaPlay size="28" className="amber-text pr-3" onClick={this.play} />{' '}
                    <FaStop size="28" className="amber-text pr-3" onClick={this.pause} />{' '}
                    <FaFastForward size="28" className="amber-text pr-3" onClick={this.changeCurrentTime(10)} />{' '}
                    <Navbar.Collapse className="justify-content-end marginLogidIn">
                      <Button variant="secondary" size="sm" onClick={() => this.setState({ modalOpen: true })}>
                        Select Date Time
                      </Button>{' '}
                      <>
                        Selected Time: {this.state.selectedVMSDate.toDateString()} {this.state.selectedVMSTimeHour}:
                        {this.state.selectedVMSTimeMin} {this.state.vmsTimePM ? 'PM' : 'AM'}{' '}
                      </>
                    </Navbar.Collapse>
                  </Navbar>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Modal
            show={this.state.modalOpen}
            onHide={() => {
              this.fetchVideos();
              this.setState({ modalOpen: false });
            }}
            centered
            size="lg"
          >
            <Card className="text-center">
              <Card.Header as="h5">{this.state.selectedVMSDate.toDateString()}</Card.Header>
              <Card>
                <Card.Header as="h6"> </Card.Header>
                <Card.Body>
                  <Calendar
                    onClickDay={(e) => this.setState({ selectedVMSDate: e })}
                    value={this.state.selectedVMSDate}
                  />
                </Card.Body>
              </Card>
              <CardGroup>
                <Card>
                  <Card.Header as="h6">{this.state.selectedVMSTimeHour}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '1' })}>
                          1
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '2' })}>
                          2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '3' })}>
                          3
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '4' })}>
                          4
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '5' })}>
                          5
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '6' })}>
                          6
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '7' })}>
                          7
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '8' })}>
                          4
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '9' })}>
                          5
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '10' })}>
                          6
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '11' })}>
                          7
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.setState({ selectedVMSTimeHour: '12' })}>
                          12
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header as="h6">{this.state.selectedVMSTimeMin}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item onClick={() => this.setState({ selectedVMSTimeMin: '00' })}>00</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.setState({ selectedVMSTimeMin: '15' })}>15</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.setState({ selectedVMSTimeMin: '30' })}>30</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.setState({ selectedVMSTimeMin: '45' })}>45</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header as="h6">AM/PM</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      {this.state.vmsTimePM ? 'PM' : 'AM'}
                      <ListGroup>
                        <ListGroup.Item onClick={() => this.setState({ vmsTimePM: false })}>AM</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.setState({ vmsTimePM: true })}>PM</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Card>

            <Card.Footer className="text-muted"></Card.Footer>
          </Modal>
          <Modal
            show={this.state.modalCameraOpen}
            onHide={() => this.setState({ modalCameraOpen: false })}
            centered
            size="lg"
          >
            <Card className="text-center">
              <Card.Header as="h5">Selecet Node</Card.Header>
              <CardGroup>
                <Card>
                  <Map isMarkerShown />
                </Card>
                <Card>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                  </Form>
                  {this.state.nodesReceived &&
                    this.state.nodes.map((node) => (
                      <ListGroup.Item onClick={() => upDateSelectedCam(node.name)}>{node.name}</ListGroup.Item>
                    ))}
                </Card>
              </CardGroup>
            </Card>

            <Card.Footer className="text-muted"></Card.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}
