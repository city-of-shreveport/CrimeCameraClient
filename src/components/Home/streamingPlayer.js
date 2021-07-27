
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

export default function StreamingPlayer() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'setState',
      payload: newState,
    });
  };











  const player1Reference = (ref) => {

    state.StreamingViewerPlayer1Reference = ref;
  };

  const player2Reference = (ref) => {
    state.StreamingViewerPlayer2Reference = ref;
  };

  const player3Reference = (ref) => {
    state.StreamingViewerPlayer3Reference = ref;
  };




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
      if(state.videStremingPlayers.videoStreamerPlayer1Buffer===true){


        dispatch({
          type: 'setState',
          payload: {
            videoStreamingplayer1Playing: true,
          },
        });



      } 
       if(state.videStremingPlayers.videoStreamerPlayer2Buffer===true){

 

        dispatch({
          type: 'setState',
          payload: {
            videoStreamingplayer2Playing: true,
          },
        });


       } 
        if(state.videStremingPlayers.videoStreamerPlayer3Buffer===true){
      

        dispatch({
          type: 'setState',
          payload: {
            videoStreamingplayer3Playing: true,
          },
        });

      }  
      }
      }
  }

}




let camera1VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera1';
  // eslint-disable-next-line
  let camera2VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera2';

  // eslint-disable-next-line
  let camera3VideoUrl =
    'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + state.currentNodeInfo.name + '/camera3';





   

const onEndedHandler = (i,player)=> {

console.log("ENDED")


}
  return ( 
    <Container>
}
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
                      playing={state.videoStreamingplayer1Playing}
                      controls={true}
                      name="player2"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player1')}
                      onPause={(i) => onEndedHandler(i, player1Reference)}
                      onEnded={(i) => onEndedHandler(i, player1Reference)}
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
                      playing={state.videoStreamingplayer2Playing}
                      controls={true}
                      name="player2"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player2')}
                      onPause={(i) => onEndedHandler(i, player1Reference)}
                      onEnded={(i) => onEndedHandler(i, player1Reference)}
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
                      playing={state.videoStreamingplayer3Playing}
                      controls={true}
                      name="player3"
                      muted={true}
                      width="100%"
                      height="auto"
                      onProgress={(i) => onProgressHandler(i, 'player3')}
                      onPause={(i) => onEndedHandler(i, player1Reference)}
                      onEnded={(i) => onEndedHandler(i, player1Reference)}
                    />
                  </div>
                ) : (
                  <div className="snapashotImage">
                    <Image className="snapashotImage" src={state.VideoSnapShotURLS.camera1} rounded />
                  </div>
                )}
              </Card>
              </Container>
              )
}

