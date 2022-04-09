import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
        videoPlayerStreamingActive: true,
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
     console.log(e);
      
      var selected = e;
      selected = selected.split("-")
      var camera =selected[0]
      var time = selected[1]
    
     fetch('http://rtcc-server.shreveport-it.org:3000/api/videos/getlatestVideo/' +  state.currentNodeInfo.name +"/" +  camera  +"/" + time)
     .then((response) => response.json())
     // eslint-disable-next-line
     .then((json) => {
       console.log(json)
       
    
        if(camera==="camera1"){
          if(json.length===1){
          dispatch({
            type: 'setState',
            payload: {
              
              
              Recordingcamera1File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[0].fileLocation}/download`,
              Recordingcamera1file1Name: json[0].fileLocation,
              
             
            },
          });
          }
            if(json.length===2){
          dispatch({
            type: 'setState',
            payload: {
              
              Recordingcamera1File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[0].fileLocation}/download`,
              Recordingcamera1file1Name: json[0].fileLocation,
              Recordingcamera1File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[1].fileLocation}/download`,
              Recordingcamera1file2Name: json[1].fileLocation,
              
             
            },
          });
        }
        if(json.length===3){
          dispatch({
            type: 'setState',
            payload: {
              Recordingcamera1File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[0].fileLocation}/download`,
              Recordingcamera1file1Name: json[0].fileLocation,
              Recordingcamera1File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[1].fileLocation}/download`,
              Recordingcamera1file2Name: json[1].fileLocation,
              Recordingcamera1File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[2].fileLocation}/download`,
              Recordingcamera1file3Name: json[2].fileLocation,
              
            
             
            },
          });
        }
        if(json.length===4){
          dispatch({
            type: 'setState',
            payload: {
              Recordingcamera1File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[0].fileLocation}/download`,
              Recordingcamera1file1Name: json[0].fileLocation,
              Recordingcamera1File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[1].fileLocation}/download`,
              Recordingcamera1file2Name: json[1].fileLocation,
              Recordingcamera1File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[2].fileLocation}/download`,
              Recordingcamera1file3Name: json[2].fileLocation,
              Recordingcamera1File4: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera1/${json[3].fileLocation}/download`,
              Recordingcamera1file4Name: json[3].fileLocation,
              
              
             
            },
          });
        }
      }
      if(camera==="camera2"){
        if(json.length===1){
        dispatch({
          type: 'setState',
          payload: {
            
            
            
            Recordingcamera2File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[0].fileLocation}/download`,
            Recordingcamera2file1Name: json[0].fileLocation,
           
          },
        });
        }
          if(json.length===2){
        dispatch({
          type: 'setState',
          payload: {
            
           
            Recordingcamera2File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[0].fileLocation}/download`,
            Recordingcamera2file1Name: json[0].fileLocation,
            Recordingcamera2File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[1].fileLocation}/download`,
            Recordingcamera2file2Name: json[1].fileLocation,
           
          },
        });
      }
      if(json.length===3){
        dispatch({
          type: 'setState',
          payload: {
           
            
            Recordingcamera2File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[0].fileLocation}/download`,
            Recordingcamera2file1Name: json[0].fileLocation,
            Recordingcamera2File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[1].fileLocation}/download`,
            Recordingcamera2file2Name: json[1].fileLocation,
            Recordingcamera2File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[2].fileLocation}/download`,
            Recordingcamera2file3Name: json[2].fileLocation,
           
          },
        });
      }
      if(json.length===4){
        dispatch({
          type: 'setState',
          payload: {
           
            
            ecordingcamera2File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[0].fileLocation}/download`,
            Recordingcamera2file1Name: json[0].fileLocation,
            Recordingcamera2File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[1].fileLocation}/download`,
            Recordingcamera2file2Name: json[1].fileLocation,
            Recordingcamera2File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[2].fileLocation}/download`,
            Recordingcamera2file3Name: json[2].fileLocation,
            Recordingcamera2File4: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera2/${json[3].fileLocation}/download`,
            Recordingcamera2file4Name: json[3].fileLocation
           
          },
        });
      }
    }
    if(camera==="camera3"){
      if(json.length===1){
      dispatch({
        type: 'setState',
        payload: {
          
          
          
          Recordingcamera3File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[0].fileLocation}/download`,
          Recordingcamera3file1Name: json[0].fileLocation,
         
        },
      });
      }
        if(json.length===2){
      dispatch({
        type: 'setState',
        payload: {
          
         
          Recordingcamera3File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[0].fileLocation}/download`,
          Recordingcamera3file1Name: json[0].fileLocation,
          Recordingcamera3File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[1].fileLocation}/download`,
          Recordingcamera3file2Name: json[1].fileLocation,
         
        },
      });
    }
    if(json.length===3){
      dispatch({
        type: 'setState',
        payload: {
         
          
          Recordingcamera3File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[0].fileLocation}/download`,
          Recordingcamera3file1Name: json[0].fileLocation,
          Recordingcamera3File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[1].fileLocation}/download`,
          Recordingcamera3file2Name: json[1].fileLocation,
          Recordingcamera3File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[2].fileLocation}/download`,
          Recordingcamera3file3Name: json[2].fileLocation,
         
        },
      });
    }
    if(json.length===4){
      dispatch({
        type: 'setState',
        payload: {
         
          
          ecordingcamera3File1: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[0].fileLocation}/download`,
          Recordingcamera3file1Name: json[0].fileLocation,
          Recordingcamera3File2: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[1].fileLocation}/download`,
          Recordingcamera3file2Name: json[1].fileLocation,
          Recordingcamera3File3: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[2].fileLocation}/download`,
          Recordingcamera3file3Name: json[2].fileLocation,
          Recordingcamera3File4: `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${state.currentNodeInfo.name}/camera3/${json[3].fileLocation}/download`,
          Recordingcamera3file4Name: json[3].fileLocation
         
        },
      });
    }
  }
    
      
      })
     //Recordingcamera1File1
     //Recordingcamera1file1Name
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

function chooseRowOne() {
  dispatch({
    type: 'setState',
    payload: {
      videoStreamingCamera1Name: state.currentNodeInfo.name,
      videoStreamingURLS: {
      camera1: 'http://'+ state.currentNodeInfo.ip +':8090/camera1.mjpeg',
      camera2: 'http://'+ state.currentNodeInfo.ip+':8090/camera2.mjpeg',
      camera3: 'http://'+ state.currentNodeInfo.ip +':8090/camera3.mjpeg',
      camera4: state.videoStreamingURLS.camera4,
      camera5: state.videoStreamingURLS.camera5,
      camera6: state.videoStreamingURLS.camera6,
      camera7: state.videoStreamingURLS.camera7,
      camera8: state.videoStreamingURLS.camera8,
      camera9: state.videoStreamingURLS.camera9,
    },          
                   
                   
      videoPlayerActive: true,
      modalChooseVideoBoxShow: false,
     
    },
  });
} 
function chooseRowTwo() {
  dispatch({
    type: 'setState',
    payload: {
      videoStreamingCamera2Name: state.currentNodeInfo.name,
videoStreamingURLS: {
      camera1: state.videoStreamingURLS.camera1,
      camera2: state.videoStreamingURLS.camera2,
      camera3: state.videoStreamingURLS.camera3,
      camera4: 'http://'+ state.currentNodeInfo.ip +':8090/camera1.mjpeg',
      camera5: 'http://'+state.currentNodeInfo.ip +':8090/camera2.mjpeg',
      camera6: 'http://'+ state.currentNodeInfo.ip +':8090/camera3.mjpeg',
      camera7: state.videoStreamingURLS.camera7,
      camera8: state.videoStreamingURLS.camera8,
      camera9: state.videoStreamingURLS.camera9,
},
      videoPlayerActive: true,
      modalChooseVideoBoxShow: false,
     
    },
  });
} 


function chooseRowThree() {
  dispatch({
    type: 'setState',
    payload: {
      videoStreamingCamera3Name: state.currentNodeInfo.name,
      videoStreamingURLS: {
        camera1: state.videoStreamingURLS.camera1,
      camera2: state.videoStreamingURLS.camera2,
      camera3: state.videoStreamingURLS.camera3,
      camera4: state.videoStreamingURLS.camera4,
      camera5: state.videoStreamingURLS.camera5,
      camera6: state.videoStreamingURLS.camera6,
      camera7: 'http://'+ state.currentNodeInfo.ip +':8090/camera1.mjpeg',
      camera8: 'http://'+ state.currentNodeInfo.ip +':8090/camera2.mjpeg',
      camera9: 'http://'+ state.currentNodeInfo.ip +':8090/camera3.mjpeg',
    },
      videoPlayerActive: true,
      modalChooseVideoBoxShow: false,
     
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
           
            <Col xs={8}>
             
              

              <StreamingPlayer />
  
            </Col>
          
       
          ) : (
            <></>
          )}
        </Row>
        <Modal show={state.modalChooseVideoBoxShow} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Stream To</Modal.Title>
       
        <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={chooseRowOne}>
            Row 1
          </Button>
          <Button variant="light" >
            
          </Button>
          <Button variant="primary" onClick={chooseRowTwo}>
          Row 2
          </Button>
          <Button variant="light" >
            
            </Button>
          <Button variant="primary" onClick={chooseRowThree}>
          Row 3
          </Button>
          </ButtonGroup>
          </Modal.Header>
        <Modal.Body>
          <Card.Title>Download Videos</Card.Title>
<CardGroup>
  <Card>
  <Card.Img variant="top" src={state.clickedcamera1} />
    <Card.Body>
      <Card.Title>Camera 1</Card.Title>
      <DropdownButton title="Choose Time" id="dropdown-menu-align-right" onSelect={handleSelect}>
              <Dropdown.Item eventKey="camera1-15">15 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera1-30">30 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera1-45">45 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera1-60">60 Min</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="custom">Custom</Dropdown.Item>
      </DropdownButton>
     <a href={state.Recordingcamera1File1}>{state.Recordingcamera1file1Name}</a><br></br>
     <a href={state.Recordingcamera1File2}>{state.Recordingcamera1file2Name}</a><br></br>
     <a href={state.Recordingcamera1File3}>{state.Recordingcamera1file3Name}</a><br></br>
     <a href={state.Recordingcamera1File4}>{state.Recordingcamera1file4Name}</a>
    </Card.Body>
   
  </Card>



  <Card>
    <Card.Img variant="top" src={state.clickedcamera2} />
    <Card.Body>
    <Card.Title>Camera 2</Card.Title>
    <DropdownButton title="Choose Time" id="dropdown-menu-align-right" onSelect={handleSelect}>
              <Dropdown.Item eventKey="camera2-15">15 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera2-30">30 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera2-45">45 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera2-60">60 Min</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="custom">Custom</Dropdown.Item>
      </DropdownButton>
      <a href={state.Recordingcamera2File1}>{state.Recordingcamera2file1Name}</a><br></br>
     <a href={state.Recordingcamera2File2}>{state.Recordingcamera2file2Name}</a><br></br>
     <a href={state.Recordingcamera2File3}>{state.Recordingcamera2file3Name}</a><br></br>
     <a href={state.Recordingcamera2File4}>{state.Recordingcamera2file4Name}</a>
    </Card.Body>

  </Card>


  <Card>
    <Card.Img variant="top" src={state.clickedcamera3} />
    <Card.Body>
      <Card.Title>Camera 3</Card.Title>
      <DropdownButton title="Choose Time" id="dropdown-menu-align-right" onSelect={handleSelect}>
              <Dropdown.Item eventKey="camera3-15">15 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera3-30">30 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera3-45">45 Min</Dropdown.Item>
              <Dropdown.Item eventKey="camera3-60">60 Min</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="custom">Custom</Dropdown.Item>
      </DropdownButton>
      <a href={state.Recordingcamera3File1}>{state.Recordingcamera3file1Name}</a><br></br>
     <a href={state.Recordingcamera3File2}>{state.Recordingcamera3file2Name}</a><br></br>
     <a href={state.Recordingcamera3File3}>{state.Recordingcamera3file3Name}</a><br></br>
     <a href={state.Recordingcamera3File4}>{state.Recordingcamera3file4Name}</a>
    </Card.Body>
 
  </Card>



</CardGroup>


          </Modal.Body>
      </Modal>
      </Container>
    </>
  );
}
