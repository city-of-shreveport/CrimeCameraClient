import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function StreamingPlayer() {
  const [state, dispatch] = useContext(GlobalContext);


  return (
    <Container>

  <Row>
    <Col>
   
        <Card bg="dark" text="light">
        <h3>{state.videoStreamingCamera1Name}</h3>
            
            <img
              width="300"
              height="200"
              alt="stream"
              src={state.videoStreamingURLS.camera1}
            />
        
      </Card>
      <Card bg="dark" text="light">
          
            <img
            width="300"
            height="200"
              alt="stream"
              src={state.videoStreamingURLS.camera2}
            />
        
      </Card>
      <Card bg="dark" text="light">
            <img
                width="300"
                height="200"
              alt="stream"
              src={state.videoStreamingURLS.camera3}
            />
      </Card>
    
    </Col>
    <Col>
    
      <Card bg="dark" text="light">
      <h3>{state.videoStreamingCamera2Name}</h3>
              <img
              width="300"
              height="200"
                alt="stream"
                src={state.videoStreamingURLS.camera4}
              />
        
        </Card>
        <Card bg="dark" text="light">
          
              <img
              width="300"
              height="200"
                alt="stream"
                src={state.videoStreamingURLS.camera5}
              />
        
        </Card>
        <Card bg="dark" text="light">
              <img
                width="300"
                height="200"
                alt="stream"
                src={state.videoStreamingURLS.camera6}
              />
        </Card>
    
    </Col>
    <Col>
    
      <Card bg="dark" text="light">
      <h3>{state.videoStreamingCamera3Name}</h3>
          <img
            width="300"
            height="200"
            alt="stream"
            src={state.videoStreamingURLS.camera7}
          />
      
    </Card>
    <Card bg="dark" text="light">
        
          <img
          width="300"
          height="200"
            alt="stream"
            src={state.videoStreamingURLS.camera8}
          />
      
    </Card>
    <Card bg="dark" text="light">
          <img
              width="300"
              height="200"
            alt="stream"
            src={state.videoStreamingURLS.camera9}
          />
    </Card>
   </Col>
  </Row>
      
    </Container>
  );
}
