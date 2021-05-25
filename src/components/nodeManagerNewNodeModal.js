import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
let formDataObject = {}

export default function NodeManagerNewNodeModal() {

    const [state, dispatch] = useContext(GlobalContext);

    const handleSubmit = event => {
        let objectKey = Object.keys(event)
       let objectVal = Object.values(event)
       formDataObject[objectKey[0]] = objectVal[0]
       console.log(formDataObject)
       }
       const UpDateFormState = () =>{
        //SEND FORM TO SERVER
        
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataObject)
            };
            fetch('https://crime-camera-system-API.shreveport-it.org/api/newNode?token=IgyJtHFsZbQdLY5Cy26HRkn7HOqcJx5', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        
        
        
        
        
        
          }
          const handleNewNodeModalClose = () =>
          dispatch({
            type: 'SETTINGS_NEW_NODE_MODAL',
            payload: false,
          });
              
    return (
        <Modal  dialogClassName="customModalNewNode" show={state.newNodeModal} onHide={() => handleNewNodeModalClose()} centered size="lg" >
            <Card className="text-center">
              <Card.Header as="h5">New Node</Card.Header>
              <CardGroup>
                <Card>
                  <Form >
                  <CardGroup>
                    <Card >
                      <CardGroup>
                        <Card  className="text-left">
                          <Card.Title>Node Information</Card.Title>
                          <Card.Body>
                            <Row>
                              <Form.Group as={Col} controlId="formGridHostName">
                                <Form.Label>Host Name</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'hostName': e.target.value })}/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridNodeName">
                                <Form.Label>Node Name</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'name': e.target.value })}/>
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridZeroTierID">
                                <Form.Label>ZeroTier ID</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'zeroTierNetworkID': e.target.value })}/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridZeroTierIP">
                                <Form.Label>ZeroTier IP</Form.Label>
                                <Form.Control type="text" onChange={e => handleSubmit({ 'zeroTierIP': e.target.value })}/>
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Server URL</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'serverURL': e.target.value })}/>
                              </Form.Group>                        
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridNodeLat">
                                <Form.Label>Lat</Form.Label>
                                <Form.Control type="number"  onChange={e => handleSubmit({ 'locationLat': e.target.value })} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridNodeLng">
                                <Form.Label>Lng</Form.Label>
                                <Form.Control type="number"   onChange={e => handleSubmit({ 'locationLong': e.target.value })}/>
                              </Form.Group>
                            </Row>
                          </Card.Body>
                        </Card>
                      </CardGroup>
                      <br/>
                      <CardGroup>
                          <Card  className="text-left">
                              <Card.Title>Buddy Configuration</Card.Title>
                            <Card.Body>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDriveDevicePath">
                                  <Form.Label>Drive Device Path</Form.Label>
                                  <Form.Control type="text" onChange={e => handleSubmit({ 'buddyDriveDevicePath': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDriveMountPath">
                                  <Form.Label>Mount Path</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'buddyDriveMountPath': e.target.value })}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDriveEncrytption">
                                  <Form.Label>Drive Encrytption</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'buddyDriveEncryptionKey': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDrive1HostName">
                                  <Form.Label>Buddy 1 Host Name</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'BuddyDrive1HostName': e.target.value })} size="sm"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDrive1MountPath">
                                  <Form.Label>Buddy 1 Mount Path</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'BuddyDrive1MountPath': e.target.value })} size="sm"/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDrive2HostName">
                                  <Form.Label>Buddy 2 Host Name</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'BuddyDrive2HostName': e.target.value })} size="sm"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDrive2MountPath">
                                  <Form.Label>Buddy 2 Mount Path</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'BuddyDrive2MountPath': e.target.value })} size="sm"/>
                                </Form.Group>
                              </Row>
                            </Card.Body>
                          </Card>
                          <Card  className="text-left">
                            <Card.Title>Video Drive</Card.Title>
                            <Card.Body>
                              <Row>
                                <Form.Group as={Col} controlId="formGridVideoDriveDevicePath">
                                  <Form.Label>Video Drive Device Path</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'videoDriveDevicePath': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridVideoDriveMountPath">
                                  <Form.Label>Video Drive Mount Path</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'videoDriveMountPath': e.target.value })} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridVideoDriveEncrytption">
                                  <Form.Label>Video Drive Encrytption</Form.Label>
                                  <Form.Control type="text"  onChange={e => handleSubmit({ 'videoDriveEncryptionKey': e.target.value })}/>
                                </Form.Group>
                              </Row>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                      <Card  className="text-left">
                        <Card.Title>Camera 1</Card.Title>
                        <Card.Body>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>Ip</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1IP': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Type': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>direction</Form.Label>
                              <Form.Control type="number"  onChange={e => handleSubmit({ 'camera1Direction': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>username</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Username': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>password</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Password': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>folderName</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1FolderName': e.target.value })} size="sm"/>
                          </Form.Group>
                        </Card.Body>
                      </Card>
                      <Card  className="text-left">
                        <Card.Title>Camera 2</Card.Title>
                        <Card.Body>
                          <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Ip</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1IP': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Type': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>direction</Form.Label>
                                <Form.Control type="number"  onChange={e => handleSubmit({ 'camera1Direction': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>username</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Username': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>password</Form.Label>
                              <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Password': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>folderName</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1FolderName': e.target.value })} size="sm"/>
                            </Form.Group>
                          </Card.Body>
                        </Card>
                        <Card  className="text-left">
                          <Card.Title>Camera 3</Card.Title>
                            <Card.Body>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Ip</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1IP': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Type': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>direction</Form.Label>
                                <Form.Control type="number"  onChange={e => handleSubmit({ 'camera1Direction': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>username</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Username': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>password</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1Password': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>folderName</Form.Label>
                                <Form.Control type="text"  onChange={e => handleSubmit({ 'camera1FolderName': e.target.value })} size="sm"/>
                              </Form.Group>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </Form>
                      <Button onClick={UpDateFormState}>Save</Button>
                    </Card>
                  </CardGroup>
                </Card>
              </Modal>
    )
}