import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import ReactHlsPlayer from 'react-hls-player';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function StreamingPlayer() {
  const [state, dispatch] = useContext(GlobalContext);
  const url = "ws://192.168.1.251:8083/stream/Node052/channel/0/mse?uuid=Node052&channel=0"

  return (
    <Container>

  <Row>
    <Col>
   
        <Card bg="dark" text="light">
        <h3>{state.videoStreamingCamera1Name}</h3>
            
        <video id="player" />
        
      </Card>
      <Card bg="dark" text="light">
          
            <video
            width="300"
            height="200"
              alt="stream2"
              src={state.videoStreamingURLS.camera2}
            />
        
      </Card>
      <Card bg="dark" text="light">
            <video
                width="300"
                height="200"
              alt="stream3"
              src={state.videoStreamingURLS.camera3}
            />
      </Card>
    
    </Col>
    <Col>
    
      <Card bg="dark" text="light">
      <h3>{state.videoStreamingCamera2Name}</h3>
              <video
              width="300"
              height="200"
                alt="stream4"
                src={state.videoStreamingURLS.camera4}
              />
        
        </Card>
        <Card bg="dark" text="light">
          
              <video
              width="300"
              height="200"
                alt="stream5"
                src={state.videoStreamingURLS.camera5}
              />
        
        </Card>
        <Card bg="dark" text="light">
              <video
                width="300"
                height="200"
                alt="stream6"
                src={state.videoStreamingURLS.camera6}
              />
        </Card>
    
    </Col>
    <Col>
    
      <Card bg="dark" text="light">
      <h3>{state.videoStreamingCamera3Name}</h3>
          <video
            width="300"
            height="200"
            alt="stream7"
            src={state.videoStreamingURLS.camera7}
          />
      
    </Card>
    <Card bg="dark" text="light">
        
          <video
          width="300"
          height="200"
            alt="stream8"
            src={state.videoStreamingURLS.camera8}
          />
      
    </Card>
    <Card bg="dark" text="light">
          <video
              width="300"
              height="200"
            alt="stream9"
            src={state.videoStreamingURLS.camera9}
          />
    </Card>
   </Col>
  </Row>
      
    </Container>
  );
}
