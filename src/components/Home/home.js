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
import StreamingPlayer from '../Home/streamingPlayer.js'
export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);






  function switchToStreaming() {
   
          
    dispatch({
      type: 'setState',
      payload: {
        videoPlayerStreamingActive: true,
      },
    });

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
              <Button onClick={() => switchToStreaming()}>Start Streaming</Button>
              <h4 style={{ color: 'white' }}>{state.currentNodeInfo.name}</h4>
              
              <StreamingPlayer/>
              
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  );
}
