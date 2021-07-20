import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD
import Image from 'react-bootstrap/Image';
import ReactDOM from 'react-dom'
// eslint-disable-next-line
=======
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
import GoogleMap from '../Home/googleMap';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);
<<<<<<< HEAD
  

  // eslint-disable-next-line
  function onBufferHandler(i) {
    console.log('onBufferHandler');
=======

  function onEnded(i) {
    console.log('onEnded');
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
    console.log(i);
  }
  function onProgressHandler(i, player) {
    console.log(i.loadedSeconds);
    console.log(player);
  }

<<<<<<< HEAD

function onEnded(i){
 console.log('onEnded');
    console.log(i);



}
  function onProgressHandler(i, player) {
    console.log(i.loadedSeconds)
console.log(player)
    

    
  }

  // eslint-disable-next-line
=======
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
  function onDurationHandler(i) {
    console.log('onDurationHandler');
    console.log(i);
  }

  function onReady(i) {
    console.log('onReady');
    console.log(i.props.name);

<<<<<<< HEAD


    if(state.videoStreamingplayerPlaying===false){
    switch(i.props.name) {
        case 'player1':
           dispatch({
              type: 'setState',
              payload: {
                videStremingPlayers:{
                videoStreamerPlayer1Buffer: true,
                videoStreamerPlayer2Buffer: state.videStremingPlayers.videoStreamerPlayer2Buffer,
                videoStreamerPlayer3Buffer: state.videStremingPlayers.videoStreamerPlayer3Buffer,
                }
              },
            });
          break;
        case 'player2':
          dispatch({
              type: 'setState',
              payload: {
                videStremingPlayers:{
                videoStreamerPlayer1Buffer: state.videStremingPlayers.videoStreamerPlayer1Buffer,
                videoStreamerPlayer2Buffer: true,
                videoStreamerPlayer3Buffer: state.videStremingPlayers.videoStreamerPlayer3Buffer,
                }
              },
            });
          break;
          case 'player3':
          dispatch({
              type: 'setState',
              payload: {
                videStremingPlayers:{
                videoStreamerPlayer1Buffer: state.videStremingPlayers.videoStreamerPlayer1Buffer,
                videoStreamerPlayer2Buffer: state.videStremingPlayers.videoStreamerPlayer2Buffer,
                videoStreamerPlayer3Buffer: true,
                }
              },
            });
          break;
        default:
          // code block
      } 
      if(state.videStremingPlayers.videoStreamerPlayer2Buffer===true && state.videStremingPlayers.videoStreamerPlayer2Buffer===true && state.videStremingPlayers.videoStreamerPlayer3Buffer===true){
      dispatch({
        type: 'setState',
        payload: {
          videoStreamingplayerPlaying: true,
        },
      });

    }  
    }
  }

  // eslint-disable-next-line
  function onBufferEnd(i) {
    console.log('onBufferEnd');
    console.log(i);
  }

  // eslint-disable-next-line
  function onStart(i) {
    console.log('onStart');
    console.log(i);
  }

  // eslint-disable-next-line
  function onDuration(i) {
    console.log('onDuration');
    console.log(i);
=======
    if (state.videoStreamingplayerPlaying === false) {
      switch (i.props.name) {
        case 'player1':
          dispatch({
            type: 'setState',
            payload: {
              videStremingPlayers: {
                videoStreamerPlayer1Buffer: true,
                videoStreamerPlayer2Buffer: state.videStremingPlayers.videoStreamerPlayer2Buffer,
                videoStreamerPlayer3Buffer: state.videStremingPlayers.videoStreamerPlayer3Buffer,
              },
            },
          });
          break;
        case 'player2':
          dispatch({
            type: 'setState',
            payload: {
              videStremingPlayers: {
                videoStreamerPlayer1Buffer: state.videStremingPlayers.videoStreamerPlayer1Buffer,
                videoStreamerPlayer2Buffer: true,
                videoStreamerPlayer3Buffer: state.videStremingPlayers.videoStreamerPlayer3Buffer,
              },
            },
          });
          break;
        case 'player3':
          dispatch({
            type: 'setState',
            payload: {
              videStremingPlayers: {
                videoStreamerPlayer1Buffer: state.videStremingPlayers.videoStreamerPlayer1Buffer,
                videoStreamerPlayer2Buffer: state.videStremingPlayers.videoStreamerPlayer2Buffer,
                videoStreamerPlayer3Buffer: true,
              },
            },
          });
          break;
        default:
      }
      if (
        state.videStremingPlayers.videoStreamerPlayer2Buffer === true &&
        state.videStremingPlayers.videoStreamerPlayer2Buffer === true &&
        state.videStremingPlayers.videoStreamerPlayer3Buffer === true
      ) {
        dispatch({
          type: 'setState',
          payload: {
            videoStreamingplayerPlaying: true,
          },
        });
      }
    }
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
  }

  function switchToStreaming() {
    dispatch({
      type: 'setState',
      payload: {
        videoPlayerStreamingActive: true,
      },
    });
  }

<<<<<<< HEAD
  function switchToStreaming() {
    dispatch({
      type: 'setState',
      payload: {
        videoPlayerStreamingActive: true,
      },
    });
  }
  // eslint-disable-next-line
  let camera1VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera1';

  // eslint-disable-next-line
  let camera2VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera2';

  // eslint-disable-next-line
  let camera3VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera3';
=======
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
  return (
    <>
      <Container fluid className="homeContainer bg-dark">
        <Row className="justify-content-md-center">
          <Col>
            <CardGroup>
              <Card className="text-center gmapsCard" bg="dark" text="light">
                <Card.Body>
                  <GoogleMap />
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          {state.videoPlayerActive ? (
            <Col xs={2}>
              <Button onClick={() => switchToStreaming()}>Start Streaming</Button>
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
                {state.videoPlayerStreamingActive ? (
                  <div className="snapashotImage">
                    <ReactPlayer
                      url={state.videoStreamingURLS.camera1}
                      playing={state.videoStreamingplayerPlaying}
                      controls={false}
                      name="player1"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player1')}
                      onReady={(i) => onReady(i)}
                      onEnded={(i) => onEnded(i)}
<<<<<<< HEAD
                      onDuration= {(i) => onDurationHandler(i)}
=======
                      onDuration={(i) => onDurationHandler(i)}
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
                    />
                  </div>
                ) : (
                  <div className="snapashotImage">
                    <Image className="snapashotImage" src={state.VideoSnapShotURLS.camera1} rounded />
                  </div>
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
                {state.videoPlayerStreamingActive ? (
                  <div className="snapashotImage">
                    <ReactPlayer
                      url={state.videoStreamingURLS.camera2}
<<<<<<< HEAD

=======
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
                      playing={state.videoStreamingplayerPlaying}
                      controls={false}
                      name="player2"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player2')}
                      onReady={(i) => onReady(i)}
                      onEnded={(i) => onEnded(i)}
<<<<<<< HEAD
                      onDuration= {(i) => onDurationHandler(i)}
=======
                      onDuration={(i) => onDurationHandler(i)}
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
                    />
                  </div>
                ) : (
                  <div className="snapashotImage">
                    <Image className="snapashotImage" src={state.VideoSnapShotURLS.camera1} rounded />
                  </div>
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
                {state.videoPlayerStreamingActive ? (
                  <div className="snapashotImage">
                    <ReactPlayer
                      url={state.videoStreamingURLS.camera3}
                      playing={state.videoStreamingplayerPlaying}
                      controls={false}
                      name="player3"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player3')}
                      onReady={(i) => onReady(i)}
                      onEnded={(i) => onEnded(i)}
<<<<<<< HEAD
                      onDuration= {(i) => onDurationHandler(i)}
=======
                      onDuration={(i) => onDurationHandler(i)}
>>>>>>> 090e412112711dc7fdff3275b77e7a67e798ecd1
                    />
                  </div>
                ) : (
                  <div className="snapashotImage">
                    <Image className="snapashotImage" src={state.VideoSnapShotURLS.camera1} rounded />
                  </div>
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
