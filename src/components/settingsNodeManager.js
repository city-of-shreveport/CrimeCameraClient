import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';
import HorizontalBarChart from './barChart2';
import HorizontalBarChart2 from './barChart';
import LineChart from './lineChart';
import SettingsNodeCard from './settingsModalNodeCard';
import SettingsSysInfoCard from './settingsModalSySInfoCard';
import SettingsSysInfoEditCard from './settingsModalSySInfoEditCard';
import SettingsNodesSettingsCard from './settingsModalNodesSettingsCard';

export default function Settings() {
  const [state, dispatch] = useContext(GlobalContext);
  
  
  const handleSubmit = event => {
   event.preventDefault();
{state.nodes.map((cam) => (
              <ListGroup.Item onClick={() => upDateSelectedCam(cam.nodeName)}>{cam.nodeName}</ListGroup.Item>
            ))}
   event.target.form.map((field)  => (
   console.log(field.name + " : " + field.value)
  
   
   ))
   
 }
  const getCameraInfo = (node) => {
    fetch('https://crime-camera-system-API.shreveport-it.org/nodes/getNodeInfo/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'UPDATE_CURRENT_NODE_INFO',
          payload: json,
        });
      });
  };
 const UpDateFormState = (formData) =>{

    let name = formData.target.name
    let value = formData.target.value
    const formPayLoad = {[name]:value}
   // dispatch({
    //  type: 'UPDATE_NEW_NODE_FORM',
   ////  payload: formData,
   // });
/*                     
*/



  }
   const UpDateFormState2 = (formData) =>{
   console.log(formData.target.value)
;
/*                     
*/



  }
  const handleNewNodeModalClose = () =>
    dispatch({
      type: 'SETTINGS_NEW_NODE_MODAL',
      payload: false,
    });
  const handleNewNodeModalOpen = () =>
    dispatch({
      type: 'SETTINGS_NEW_NODE_MODAL',
      payload: true,
    });
  const upDateSelectedCam = (param) => {
    getCameraInfo(param);

    dispatch({
      type: 'UPDATE_SELECTEDCAMERA',
      payload: param,
    });
  };
  return (
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <Button onClick={() => handleNewNodeModalOpen()}>Add  Node</Button>
          <Card>
            <Card.Header as="h3">
              Nodes
              <Card.Text as="h6">45 Online / 2 Problems</Card.Text>
            </Card.Header>
            <ListGroup>
              {state.nodes &&
              state.nodes.map((cam) => (
                <ListGroup.Item onClick={() => upDateSelectedCam(cam.nodeName)}>{cam.nodeName}</ListGroup.Item>
              ))
              }
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card.Header as="h4">{state.selectedCamera && state.selectedCamera}</Card.Header>
          <CardGroup>
            <Card>
              <Card.Header>System Information</Card.Header>
              <Card.Text></Card.Text>
              <Card.Body>
                {state.cameraSettingsComponent ? <SettingsSysInfoEditCard /> : <SettingsSysInfoCard />}
              </Card.Body>
            </Card>
            <Card>
              <CardGroup>
                <Card>
                  <Card.Header>System</Card.Header>
                  <HorizontalBarChart />
                </Card>
                <Card>
                  <Card.Header>Drives</Card.Header>
                  <HorizontalBarChart2 />
                </Card>
              </CardGroup>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Header>Cameras</Card.Header>
              <Card.Header></Card.Header>
              <Card.Body>
                {state.cameraSettingsCameraComponent ? <SettingsNodesSettingsCard /> : <SettingsNodeCard />}
              </Card.Body>
            </Card>
            <Card>
              <LineChart />
            </Card>
          </CardGroup>
          <Card.Footer className="text-muted"></Card.Footer>
        </Col>
      </Row>
                <Modal
            show={state.newNodeModal}
            onHide={() => handleNewNodeModalClose()}
            centered
            size="lg"
          >
            <Card className="text-center">
              <Card.Header as="h5">New Node</Card.Header>
              <CardGroup>
                <Card>
                  <form onChange={handleSubmit}>
                    
                  <label>
                      Name:<input
                      type='text'
                      name='name' onChange={UpDateFormState}></input></label>
                    <label>
                      Host Name:<input
                      type='text'
                      name='hostName'  onChange={UpDateFormState}></input></label>
                    <label>
                      Lattitude:<input
                      type='text'
                      name='locationLat'  onChange={UpDateFormState}></input></label>
                    <label>
                      Longitude:<input
                      type='text'
                      name='locationLong'  onChange={UpDateFormState}></input></label>
                    <label>
                      ZeroTier Network ID:<input 
                      type='text'
                      name='zeroTierNetworkID'  onChange={UpDateFormState}></input></label>
                     
                   <label>
                      ZeroTier IP: <input
                      type='text'
                      name='zeroTierIP'  onChange={UpDateFormState}></input></label>
                   <label>
                      Video Drive Device Path: <input
                      type='text'
                      name='videoDriveDevicePath'  onChange={UpDateFormState}></input></label>
                  <label>
                      Video Drive Mount Path: <input
                      type='text'
                      name='videoDriveMountPath' onChange={UpDateFormState}></input></label>
                   
                   <label> 
                      Video Drive Encrytption: <input
                      type='text'
                      name='videoDriveEncryptionKey' onChange={UpDateFormState}></input></label>
                   <label>
                      Buddy Drive Device Path: <input
                      type='text'
                      name=' buddyDriveDevicePath' onChange={UpDateFormState}></input></label>
                   <label>
                      VBuddy Drive Device Path: <input
                      type='text'
                      name='buddyDriveMountPath' onChange={UpDateFormState}></input></label>
                   <label>
                      Buddy Drive Device Path: <input
                      type='text'
                      name='buddyDriveEncryptionKey' onChange={UpDateFormState}></input></label>
                   <label>
                      Server URL: <input
                      type='text'
                      name='serverURL' onChange={UpDateFormState}></input></label>
                   <label>
                      Buddy Drive 1 Host Name: <input
                      type='text'
                      name='buddyDrive1hostName' onChange={UpDateFormState}></input></label>
                  <label>
                      Buddy Drive 1 Mount Path:  <input
                      type='text'
                      name='buddyDrive1sshfsMountPath' onChange={UpDateFormState}></input>
                      </label>
     







                    <input  type="submit" />
                  </form>
                </Card>
               
              </CardGroup>
            </Card>

          </Modal>
    </Container>
    
  );
}
