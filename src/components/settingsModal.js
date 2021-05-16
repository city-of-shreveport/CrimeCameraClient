import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import LineChart from './lineChart'
import { GlobalContext } from '../contexts/globalContext';
  const jsonConfig = {
    "hostName" : "CrimeCamera010",
    "locationLat" : 31.4613255,
    "locationLong" : -92.8137284,
    "zeroTierNetworkID" : "d3ecf5726d0c2d85",
    "zeroTierIP" : "10.10.10.99",
    "videoDriveDevicePath" : "/dev/sda1",
    "videoDriveMountPath" : "/home/pi/videos",
    "videoDriveEncryptionKey" : "pAVQn3IHEFIOcQEqBs6yXy7NK10OWAG",
    "buddyDriveDevicePath" : "/dev/sda1",
    "buddyDriveMountPath" : "/home/pi/remote_backups",
    "buddyDriveEncryptionKey" : "AnlmETjP8lRQ7Z7noJQEbi4yvOYMGNU",
    "serverURL" : "https://crime-cameras.shreveport-it.org",
    "buddyDrives" : [ 
        {
            "hostname" : "CrimeCameraBuddy1",
            "sshfsMountPath" : "/home/pi/remote_backups/CrimeCameraTest"
        }, 
        {
            "hostname" : "CrimeCameraBuddy2",
            "sshfsMountPath" : "/home/pi/remote_backups/CrimeCameraTest"
        }
    ],
    "cameras" : [ 
        {
            "iPAddress" : "10.10.5.2",
            "type" : "standard",
            "direction" : 360,
            "username" : "admin",
            "password" : "UUnv9njxg",
            "cameraFolderName" : "camera1"
        }, 
        {
            "iPAddress" : "10.10.5.3",
            "type" : "standard",
            "direction" : 360,
            "username" : "admin",
            "password" : "UUnv9njxg",
            "cameraFolderName" : "camera2"
        }, 
        {
            "iPAddress" : "10.10.5.4",
            "type" : "standard",
            "direction" : 360,
            "username" : "admin",
            "password" : "UUnv9njxg",
            "cameraFolderName" : "camera3"
        }
    ]
}
export default function SettingsModal() {
    const [state, dispatch] = useContext(GlobalContext);

     const handleClose = () =>  dispatch({
            type: 'UPDATE_SETTINGSMODAL',
            payload: false,
          });;
    return (
        <>
            <Modal show={state.settingsModal} onHide={handleClose} dialogClassName="custom-modal">
                
                    <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Card.Header as='h3'>{state.selectedCamera}</Card.Header>
                                <CardGroup>
                                    <Card border="light">
                                        <Card.Body>
                                            <Card.Header>System OS</Card.Header>
                                            <Card.Text>
                                                <li>lastCheckIn</li>
                                                <li>sysInfo.osInfo.hostname</li>
                                                <li>sysInfo.osInfo.fqdn</li> 
                                                <li>ip</li>
                                                
                                                <li>id </li>

                                            </Card.Text>
                                        </Card.Body>    
                                    </Card>
                                    <Card border="light">
                                        <Card.Body>
                                            <Card.Header>System OS</Card.Header>
                                            <Card.Text>
                                                <li>sysInfo.osInfo.distro</li> 
                                                <li>sysInfo.osInfo.release </li>
                                                <li>sysInfo.osInfo.codename </li>
                                                <li>sysInfo.osInfo.kernel</li>
                                                <li>sysInfo.osInfo.arch </li>

                                            </Card.Text>
                                        </Card.Body>    
                                    </Card>
                                    <Card border="light">
                                        <Card.Body>
                                            <Card.Header>Location</Card.Header>
                                            <Card.Text>
                                                <li>lat: location.lat</li> 
                                                <li>lon: location.lng </li>

                                            </Card.Text>
                                        </Card.Body>    
                                    </Card>
                                </CardGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  
                    <Card >
                        <LineChart/>

                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card >
                        <Card.Header>Cameras</Card.Header>
                        <Card.Body>
                            <CardGroup>
                                <Card className="text-center"><Card.Body>
                                    <Card.Header ><Button variant="success">Cam 1</Button></Card.Header>
                                    
                                    <Card.Text>
                                        
                                    <p>Direction: 242</p>
                                    <p>Type: Stationary</p>
                                    <p>IP: 10.10.5.2</p>
                                    </Card.Text>
                                    <Button variant="primary">Configure</Button>{' '}
                                </Card.Body>
                               
                                </Card>
                            
                                <Card className="text-center"><Card.Body>
                                    <Card.Header ><Button variant="success">Cam 2</Button></Card.Header>
                                    
                                    <Card.Text>
                                        
                                    <p>Direction: 165</p>
                                    <p>Type: Stationary</p>
                                    <p>IP: 10.10.5.3</p>
                                    </Card.Text>
                                    <Button variant="primary">Configure</Button>{' '}
                                </Card.Body>
                               
                                </Card>
                            
                                <Card className="text-center"><Card.Body>
                                    <Card.Header ><Button variant="success">Cam 3</Button></Card.Header>
                                    
                                    <Card.Text>
                                        
                                    <p>Direction: 26</p>
                                    <p>Type: Stationary</p>
                                    <p>IP: 10.10.5.4</p>
                                    </Card.Text>
                                    <Button variant="primary">Configure</Button>{' '}
                                </Card.Body>
                               
                                </Card>
                            </CardGroup>


                        </Card.Body>
                    </Card>
                    <Card>
                      


                    </Card>
             </CardGroup>
             <CardGroup>
                    <Card >
                        <Card.Header>Disks</Card.Header>
                        <Card.Body>
                            <CardGroup>
                                <Card >
                                    <Card.Body>
                                        <Card.Header>Disk 1</Card.Header>
                                        <Card.Text>
                                            <CardGroup>
                                                <Card>
                                                    <li>Device: /dev/sda</li>
                                                    <li>Type: External_USB_3.0</li>
                                                    <li>Size: 2TB</li> 
                                                    
                                                
                                                </Card>
                                                <Card className="text-center">
                                                    <Card.Body>
                                                       
                                                        <Card.Text>
                                                            <Card.Title as='h5'>Used Space</Card.Title>
                                                            <Card.Title as='h4'>89%</Card.Title>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </CardGroup>
                                            
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    
                                    <Card.Body>
                                        <Card.Header>Disk 2</Card.Header>
                                        <Card.Text>
                                            <CardGroup>
                                                <Card>
                                                    <Card.Text className="text-muted">Device: /dev/sdb</Card.Text>
                                                    <Card.Text className="text-muted">Type: External_USB_3.0</Card.Text>
                                                    <Card.Text className="text-muted">Size: 4TB</Card.Text>
                                                    
                                                
                                                </Card>
                                                <Card className="text-center">
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <Card.Title as='h5'>Used Space</Card.Title>
                                                            <Card.Title as='h4'>64%</Card.Title>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </CardGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            
                        </Card.Body>
                    </Card>
                    <Card></Card>
                </CardGroup>
                    
              
                                    
                                    
                             
                        
                <Card.Footer className="text-muted">
                    <Button variant="secondary" >Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Card.Footer>
            </Modal>
        </>
    );
}