import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Map from '../Home/map';
import GoogleMap from '../Home/googleMap';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);
  var playing = false
function onBufferHandler(i) {
            console.log('onBufferHandler');
            console.log(i);
            
          }
          function onPlayHander(i){
            console.log('onPlayHander');
             console.log(i);
          }
           function onProgressHandler(i){
            console.log('onProgressHandler');
            if(i.loaded){
              setTimeout(() => {
                dispatch({
                type: 'setState',
                payload: {
                  videoStreamingplayerPlaying: true,
                
                  
                },
              })
              }, 2000);
               
             console.log(i.loaded);
            }
          }
    function onDurationHandler(i){
            console.log('onDurationHandler');
             console.log(i);
          }

    function onReady(i) {
            console.log('onReady');
             console.log(i);
          }
     function onBufferEnd(i) {
            console.log('onBufferEnd');
             console.log(i);
          }
    function  onStart(i) {
            console.log('onStart');
             console.log(i);
          }
    function onDuration(i) {
            console.log('onDuration');
             console.log(i);
          }
            function getSecondsLoaded  (i) {
            console.log('getSecondsLoaded');
             console.log(i);
          }   
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
                    url={state.videoStreamingURLS.camera1}
                    playing={true}
                    controls={true}
                    muted={true}
                    width="100%"
                    height="auto"
                     
            onProgress={(i) => onProgressHandler(i)}
            

            
           
            
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
                    url={state.videoStreamingURLS.camera2}
                    playing={true}
                    controls={true}
                    muted={true}
                    width="100%"
                    height="auto"
                    onProgress={(i) => onProgressHandler(i)}

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
                    url={state.videoStreamingURLS.camera3}
                    playing={true}
                    controls={true}
                    muted={true}
                    width="100%"
                    height="auto"
                    onProgress={(i) => onProgressHandler(i)}
            

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
