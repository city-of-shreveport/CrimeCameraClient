import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';

import GoogleMap from '../Home/googleMap';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
import StreamingPlayer from '../Home/streamingPlayer.js';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);

  function switchToStreaming() {
    dispatch({
      type: 'setState',
      payload: {
        videoPlayerStreamingActive: false,
      },
    });
  }

  function handleClose() {
   
 
      dispatch({
        type: 'setState',
        payload: {
          previousNode: tryValue(() => {
            return state.modalChooseVideoBoxShow.name;
          }),

          modalChooseVideoBoxShow: false,
          rowOneNodeIP: '',
          rowTwoNodeIP: '',
          rowThreeNodeIP: '',
          
          Recordingcamera1File1: ``,
          Recordingcamera1file1Name: '',
          Recordingcamera1File2: ``,
          Recordingcamera1file2Name: '',
          Recordingcamera1File3: ``,
          Recordingcamera1file3Name: '',
          Recordingcamera1File4: ``,
          Recordingcamera1file4Name: '',

          Recordingcamera2File1: ``,
          Recordingcamera2file1Name: '',
          Recordingcamera2File2: ``,
          Recordingcamera2file2Name: '',
          Recordingcamera2File3: ``,
          Recordingcamera2file3Name: '',
          Recordingcamera2File4: ``,
          Recordingcamera2file4Name: '',

          Recordingcamera3File1: ``,
          Recordingcamera3file1Name: '',
          Recordingcamera3File2: ``,
          Recordingcamera3file2Name: '',
          Recordingcamera3File3: ``,
          Recordingcamera3file3Name: '',
          Recordingcamera3File4: ``,
          Recordingcamera3file4Name: '',
        },
  });
}

const handleSelect=(e)=>{

}



function handleShow() {
  dispatch({
    type: 'setState',
    payload: {
      previousNode: tryValue(() => {
        return state.modalChooseVideoBoxShow.name;
      }),

      modalChooseVideoBoxShow: true,
     
    },
  });
}

function addRow() {
  var currentStreamingNodes = state.streamingNodes;

  currentStreamingNodes[state.selectedNodeObj.name] = state.selectedNodeObj;

  dispatch({
    type: 'setState',
    payload: {
      streamingNodes: currentStreamingNodes,
      modalChooseVideoBoxShow: false
    },
  });
}

return (
    <>
      <Container fluid className="homeContainer bg-dark">
        <Row className="justify-content-md-center">
          <Col>
              <StreamingPlayer />
          </Col>
        </Row>
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
        </Row>

        <Modal show={state.modalChooseVideoBoxShow} onHide={handleClose} dialogClassName="modal-45w">
        <Modal.Header>
        <Modal.Title>{state.selectedNodeObj ? state.selectedNodeObj.name : ""} </Modal.Title>
       
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={addRow}> Begin Streaming </Button>
        </ButtonGroup>
          </Modal.Header>
        <Modal.Body>

          <Card.Title>Download Videos</Card.Title>
<CardGroup>
  <Card className="text-center">
  
    <Card.Body>
      <Card.Title>Camera 1</Card.Title>
      
      <ListGroup>
  <ListGroup.Item><a href={state.Recordingcamera1File1}>{state.Recordingcamera1file1Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File2}>{state.Recordingcamera1file2Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File3}>{state.Recordingcamera1file3Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File4}>{state.Recordingcamera1file4Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File5}>{state.Recordingcamera1file5Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File6}>{state.Recordingcamera1file6Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera1File7}>{state.Recordingcamera1file7Name}</a></ListGroup.Item>
</ListGroup>
    </Card.Body>
   
  </Card>



  <Card className="text-center">
    
    <Card.Body>
    <Card.Title>Camera 2</Card.Title>
    
      <ListGroup>
  <ListGroup.Item><a href={state.Recordingcamera2File1}>{state.Recordingcamera2file1Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File2}>{state.Recordingcamera2file2Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File3}>{state.Recordingcamera2file3Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File4}>{state.Recordingcamera2file4Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File5}>{state.Recordingcamera2file5Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File6}>{state.Recordingcamera2file6Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera2File7}>{state.Recordingcamera2file7Name}</a></ListGroup.Item>
</ListGroup>
    </Card.Body>

  </Card>


  <Card className="text-center">
   
    <Card.Body>
      <Card.Title>Camera 3</Card.Title>
      
      <ListGroup>
  <ListGroup.Item><a href={state.Recordingcamera3File1}>{state.Recordingcamera3file1Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File2}>{state.Recordingcamera3file2Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File3}>{state.Recordingcamera3file3Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File4}>{state.Recordingcamera3file4Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File5}>{state.Recordingcamera3file5Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File6}>{state.Recordingcamera3file6Name}</a></ListGroup.Item>
  <ListGroup.Item><a href={state.Recordingcamera3File7}>{state.Recordingcamera3file7Name}</a></ListGroup.Item>
</ListGroup>
    </Card.Body>
 
  </Card>



</CardGroup>


          </Modal.Body>
      </Modal>
      </Container>
    </>
  );
}
