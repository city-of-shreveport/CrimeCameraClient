import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import Image from 'react-bootstrap/Image';
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import GoogleMap from '../Home/googleMap';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);

const player1Reference = (ref) => {
    state.RecordingViewerPlayer1Reference = ref;
  };

  const player2Reference = (ref) => {
    state.RecordingViewerPlayer2Reference = ref;
  };

  const player3Reference = (ref) => {
    state.RecordingViewerPlayer3Reference = ref;
  };

    //state.RecordingViewerPlayer2Reference.seekTo(parseFloat(e.target.value));
    //state.RecordingViewerPlayer3Reference.seekTo(parseFloat(e.target.value));
  

  // eslint-disable-next-line





  function onProgressHandler(i, player) {

    if(state.videoStreamingplayerPlaying===false){
      if (i.loadedSeconds > 5) {
        if (state.videoStreamingplayerPlaying === false) {
         switch (player) {
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
       
          // code block
        } 
           
      if(state.videStremingPlayers.videoStreamerPlayer2Buffer===true && state.videStremingPlayers.videoStreamerPlayer2Buffer===true && state.videStremingPlayers.videoStreamerPlayer3Buffer===true){
        
setTimeout(() => {
      state.RecordingViewerPlayer1Reference.getInternalPlayer('flv').destroy() 
      state.RecordingViewerPlayer2Reference.getInternalPlayer('flv').destroy() 
      state.RecordingViewerPlayer3Reference.getInternalPlayer('flv').destroy() 
    }, 6000);

        dispatch({
          type: 'setState',
          payload: {
            videoStreamingplayerPlaying: true,
          },
        });

      }  
      }
      }
  }

}





  function switchToStreaming() {
   
          {tryValue(() => {state.RecordingViewerPlayer2Reference.getInternalPlayer('flv').destroy()})}
         {tryValue(() => {state.RecordingViewerPlayer3Reference.getInternalPlayer('flv').destroy()})}
    dispatch({
      type: 'setState',
      payload: {
        videoPlayerStreamingActive: true,
      },
    });

  }

let camera1VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera1';
  // eslint-disable-next-line
  let camera2VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera2';

  // eslint-disable-next-line
  let camera3VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera3';




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
                    ref={player1Reference}
                      url={state.videoStreamingURLS.camera1}
                      playing={state.videoStreamingplayerPlaying}
                      controls={true}
                      name="player1"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player1')}

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
                    ref={player2Reference}
                      url={state.videoStreamingURLS.camera2}
                      playing={state.videoStreamingplayerPlaying}
                      controls={true}
                      name="player2"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player2')}
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
                    ref={player3Reference}
                      url={state.videoStreamingURLS.camera3}
                      playing={state.videoStreamingplayerPlaying}
                      controls={true}
                      name="player3"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player3')}
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
