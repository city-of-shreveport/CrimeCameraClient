import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
export default function SettingsNodeCard() {
const [state, dispatch] = useContext(GlobalContext);


let camera1IMG = "http://10.10.30.10:3001/api/cameraConfig/snapshot/" +
tryValue(() => {return state.currentNodeInfo.name;}) +
"/camera1"

let camera2IMG = "http://10.10.30.10:3001/api/cameraConfig/snapshot/" +
tryValue(() => {return state.currentNodeInfo.name;}) +
"/camera2"

let camera3IMG = "http://10.10.30.10:3001/api/cameraConfig/snapshot/" +
tryValue(() => {return state.currentNodeInfo.name;})+
"/camera3"

const handleCloseNodeCameraConfigModal = () =>{
    dispatch({
      type: 'setState',
      payload: {
        nodeCameraSettingsoModal: false,
      },
    });

}

               

  return (
    
          <Modal
      dialogClassName="customModalEditNode"
      show={state.nodeCameraSettingsoModal}
      onHide={() => handleCloseNodeCameraConfigModal()}
      centered
      size="lg"
    >
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={camera1IMG} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        {state.currentNodeCameraConfig}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={camera2IMG} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={camera3IMG} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </Modal>
  );
}
