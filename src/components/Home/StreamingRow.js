import React, { useContext, useEffect } from 'react';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function webRTCSetup(cameraNumber, refObj, selectedNode) {
  let stream = new MediaStream();

  let config = {
    iceServers: [{
      urls: ["stun:stun.l.google.com:19302"]
    }]
  };

  let pc = new RTCPeerConnection(config);

  pc.onnegotiationneeded = handleNegotiationNeededEvent;

  async function handleNegotiationNeededEvent() {
    let offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    getRemoteSdp();
  }


  let log = msg => {
    console.log(msg);
  }

  pc.ontrack = function(event) {
    stream.addTrack(event.track);
    if(refObj.current) {
      refObj.current.srcObject = stream;
      log(event.streams.length + ' track is delivered')
    }
  }

  pc.oniceconnectionstatechange = e => log(pc.iceConnectionState)

  pc.addTransceiver('video', { 'direction': 'sendrecv' })

  let sendChannel = null;

  function getRemoteSdp() {
    var receiverUrl = "http://" + selectedNode.config.ip + ":8888/stream/receiver/Camera" + cameraNumber;
    console.log("Fetching " + receiverUrl);

    fetch(receiverUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        suuid: "Camera" + cameraNumber, 
        data: btoa(pc.localDescription.sdp)
      })
    })
    .then( (data) => {
      
      data.text().then(function(blob) {
        console.log("BLOB");
        console.log(blob);

        try {
          pc.setRemoteDescription(new RTCSessionDescription({
            type: 'answer',
            sdp: atob(blob)
          }))
        } catch (e) {
          console.warn(e);
        }

      });

    })
    .catch(function(e) {
      //Work?
      console.log(e);
    });
  }
}

export default function StreamingRow(props) {
  const [state, dispatch] = useContext(GlobalContext);

  state.videoPlayerOneRef = React.createRef();
  state.videoPlayerTwoRef = React.createRef();
  state.videoPlayerThreeRef = React.createRef();


  useEffect( () => { 
    webRTCSetup(1, state.videoPlayerOneRef, props.selectedNode)
    webRTCSetup(2, state.videoPlayerTwoRef, props.selectedNode)
    webRTCSetup(3, state.videoPlayerThreeRef, props.selectedNode)
  } );

  console.log(props.selectedNode)

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <h3 style={{textAlign: "center"}} >{props.selectedNode.name}</h3>
            <Button style={{width: "150px"}} variant="primary" onClick={null}>Close Node</Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={state.videoPlayerOneRef} controls autoplay></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={state.videoPlayerTwoRef} controls autoplay></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={state.videoPlayerThreeRef} controls autoplay></video>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

