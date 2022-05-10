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
    //TODO: Switch to this when service is stable
    //var receiverUrl = ;

    //TODO: Remove this from pi services
    var receiverUrl = "http://" + selectedNode.config.ip + ":8888/stream/receiver/Camera" + cameraNumber;

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
      console.log(e);
    });
  }
}

export default function StreamingRow(props) {
  const [state, dispatch] = useContext(GlobalContext);

  function closeNode(nodeName) {
    var currentList = state.streamingNodes;
    delete currentList[nodeName];

    dispatch({
      type: 'setState',
      payload: {
        streamingNodes: currentList
      }
    });
  }

  props.selectedNode.videoPlayerOneRef = React.createRef();
  props.selectedNode.videoPlayerTwoRef = React.createRef();
  props.selectedNode.videoPlayerThreeRef = React.createRef();


  useEffect( () => { 
    webRTCSetup(1, props.selectedNode.videoPlayerOneRef, props.selectedNode)
    webRTCSetup(2, props.selectedNode.videoPlayerTwoRef, props.selectedNode)
    webRTCSetup(3, props.selectedNode.videoPlayerThreeRef, props.selectedNode)
  } );


  return (
    <Container>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <h3 style={{textAlign: "center"}} >{props.selectedNode.name}</h3>
            <Button style={{width: "150px"}} variant="primary" onClick={() => {closeNode(props.selectedNode.name)}}>Close Node</Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={props.selectedNode.videoPlayerOneRef} controls autoPlay></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={props.selectedNode.videoPlayerTwoRef} controls autoPlay></video>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light">
            <video width="100%" ref={props.selectedNode.videoPlayerThreeRef} controls autoPlay></video>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
