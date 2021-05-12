import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ContactContext } from "./context/contact-context";


export default function CameraList1()  {
const [state, dispatch] = useContext(ContactContext);


    fetch('http://10.10.10.55:3001/cameras/cameraList')
      .then((response) => response.json())
      .then((json) => onSubmit(json));
 
const onSubmit = (data) => {
    dispatch({
      type: "ADD_CAM",
      payload: {data }
    });
    // Reset Form
 
  };

    return (
      <div>
        <Accordion defaultActiveKey="0">
          
           {this.state.cameras.map((camera) => (  
            <Card >
              <Accordion.Toggle as={Card.Header} eventKey={camera.nodeName} variant="dark">
                {camera.nodeName}
              </Accordion.Toggle>
              <Accordion.Collapse  eventKey={camera.nodeName}>
                <Card.Body > 
                  <ListGroup >
                    <ListGroup.Item variant="dark">Camera Name:</ListGroup.Item>
                    <ListGroup.Item variant="dark">Status:</ListGroup.Item>
                    <ListGroup.Item variant="dark">Cam 1: </ListGroup.Item>
                    <ListGroup.Item variant="dark">Cam 2: </ListGroup.Item>
                    <ListGroup.Item variant="dark">Cam 3:</ListGroup.Item>
                  </ListGroup>
              
 


  <ButtonGroup size="sm">
    <Button>Stream</Button>
    <Button>Settings</Button>
    <Button>VMS</Button>
  </ButtonGroup>
</Card.Body>
              </Accordion.Collapse>
              
            </Card>
           ))}

        </Accordion>


        </div >
    );
  }


