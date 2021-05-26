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

export default function NodeManagerEditNodeModal() {

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
            fetch('https://crime-camera-system-API.shreveport-it.org/api/editNodeInfo/' + state.currentNodeInfo.name + '?token=IgyJtHFsZbQdLY5Cy26HRkn7HOqcJx5', requestOptions)
                .then(response => response.json())
                .then(data => handleEditNodeModalClose());
        
        
        
        
        
        
          }
          const handleEditNodeModalClose = () =>
          dispatch({
            type: 'SETTINGS_EDIT_NODE_MODAL',
            payload: false,
          });
              
    return (
        <Modal  dialogClassName="customModalEditNode" show={state.editNodeModal} onHide={() => handleEditNodeModalClose()} centered size="lg" >
            <Card className="text-center">
              <Card.Header as="h5">Edit Node</Card.Header>
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
                                <Form.Control placeholder={state.currentNodeInfo.config.hostName} type="text"  onChange={e => handleSubmit({ 'config.hostName': e.target.value })}/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridNodeName">
                                <Form.Label>Node Name</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.name} type="text"  onChange={e => handleSubmit({ 'name': e.target.value })}/>
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridZeroTierID">
                                <Form.Label>ZeroTier ID</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.zeroTierNetworkID} type="text"  onChange={e => handleSubmit({ 'config.zeroTierNetworkID': e.target.value })}/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridZeroTierIP">
                                <Form.Label>ZeroTier IP</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.zeroTierIP} type="text" onChange={e => handleSubmit({ 'config.zeroTierIP': e.target.value })}/>
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Server URL</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.serverURL} type="text"  onChange={e => handleSubmit({ 'config.serverURL': e.target.value })}/>
                              </Form.Group>                        
                            </Row>
                            <Row>
                              <Form.Group as={Col} controlId="formGridNodeLat">
                                <Form.Label>Lat</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.locationLat} type="number"  onChange={e => handleSubmit({ 'config.locationLat': e.target.value })} />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridNodeLng">
                                <Form.Label>Lng</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.locationLong} type="number"   onChange={e => handleSubmit({ 'config.locationLong': e.target.value })}/>
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
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDriveDevicePath} type="text" onChange={e => handleSubmit({ 'config.buddyDriveDevicePath': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDriveMountPath">
                                  <Form.Label>Mount Path</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDriveMountPath} type="text"  onChange={e => handleSubmit({ 'config.buddyDriveMountPath': e.target.value })}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDriveEncrytption">
                                  <Form.Label>Drive Encrytption</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDriveEncryptionKey} type="text"  onChange={e => handleSubmit({ 'config.buddyDriveEncryptionKey': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDrive1HostName">
                                  <Form.Label>Buddy 1 Host Name</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDrives[0].hostName} type="text"  onChange={e => handleSubmit({ 'config.BuddyDrive[0].HostName': e.target.value })} size="sm"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDrive1MountPath">
                                  <Form.Label>Buddy 1 Mount Path</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDrives[0].sshfsMountPath} type="text"  onChange={e => handleSubmit({ 'config.BuddyDrive[0].MountPath': e.target.value })} size="sm"/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridBuddyDrive2HostName">
                                  <Form.Label>Buddy 2 Host Name</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDrives[1].hostName} type="text"  onChange={e => handleSubmit({ 'config.BuddyDrive[1].HostName': e.target.value })} size="sm"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBuddyDrive2MountPath">
                                  <Form.Label>Buddy 2 Mount Path</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.buddyDrives[1].sshfsMountPath} type="text"  onChange={e => handleSubmit({ 'config.BuddyDrive[1].MountPath': e.target.value })} size="sm"/>
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
                                  <Form.Control placeholder={state.currentNodeInfo.config.videoDriveDevicePath} type="text"  onChange={e => handleSubmit({ 'config.videoDriveDevicePath': e.target.value })}/>
                                </Form.Group>
                              </Row>
                              <Row>
                                <Form.Group as={Col} controlId="formGridVideoDriveMountPath">
                                  <Form.Label>Video Drive Mount Path</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.videoDriveMountPath} type="text"  onChange={e => handleSubmit({ 'config.videoDriveMountPath': e.target.value })} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridVideoDriveEncrytption">
                                  <Form.Label>Video Drive Encrytption</Form.Label>
                                  <Form.Control placeholder={state.currentNodeInfo.config.videoDriveEncryptionKey} type="text"  onChange={e => handleSubmit({ 'config.videoDriveEncryptionKey': e.target.value })}/>
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
                              <Form.Control placeholder='10.10.5.2' type="text"  onChange={e => handleSubmit({ 'config.cameras[0].IP': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[0].type} type="text"  onChange={e => handleSubmit({ 'config.cameras[0].camera1Type': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>direction</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[0].direction} type="number"  onChange={e => handleSubmit({ 'config.cameras[0].Direction': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>username</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[0].username} type="text"  onChange={e => handleSubmit({ 'config.cameras[0].Username': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>password</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[0].password} type="text"  onChange={e => handleSubmit({ 'config.cameras[0].Password': e.target.value })} size="sm"/>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>folderName</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[0].folderName} type="text"  onChange={e => handleSubmit({ 'config.cameras[0].FolderName': e.target.value })} size="sm"/>
                          </Form.Group>
                        </Card.Body>
                      </Card>
                      <Card  className="text-left">
                        <Card.Title>Camera 2</Card.Title>
                        <Card.Body>
                          <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Ip</Form.Label>
                                <Form.Control placeholder='10.10.5.3' type="text"  onChange={e => handleSubmit({ 'config.cameras[1].1IP': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[1].type} type="text"  onChange={e => handleSubmit({ 'config.cameras[1].Type': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>direction</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[1].direction} type="number"  onChange={e => handleSubmit({ 'config.cameras[1].Direction': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>username</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[1].username} type="text"  onChange={e => handleSubmit({ 'config.cameras[1].Username': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                              <Form.Label>password</Form.Label>
                              <Form.Control placeholder={state.currentNodeInfo.config.cameras[1].password} type="text"  onChange={e => handleSubmit({ 'config.cameras[1].Password': e.target.value })} size="sm"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>folderName</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[1].folderName} type="text"  onChange={e => handleSubmit({ 'config.cameras[1].FolderName': e.target.value })} size="sm"/>
                            </Form.Group>
                          </Card.Body>
                        </Card>
                        <Card  className="text-left">
                          <Card.Title>Camera 3</Card.Title>
                            <Card.Body>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>Ip</Form.Label>
                                <Form.Control placeholder='10.10.5.4' type="text"  onChange={e => handleSubmit({ 'config.cameras[2].IP': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>type</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[2].type} type="text"  onChange={e => handleSubmit({ 'config.cameras[2].Type': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>direction</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[2].direction} type="number"  onChange={e => handleSubmit({ 'config.cameras[2].Direction': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>username</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[2].username} type="text"  onChange={e => handleSubmit({ 'config.cameras[2].Username': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>password</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[2].password} type="text"  onChange={e => handleSubmit({ 'config.cameras[2].Password': e.target.value })} size="sm"/>
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridServerURL">
                                <Form.Label>folderName</Form.Label>
                                <Form.Control placeholder={state.currentNodeInfo.config.cameras[2].folderName} type="text"  onChange={e => handleSubmit({ 'config.cameras[2].FolderName': e.target.value })} size="sm"/>
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