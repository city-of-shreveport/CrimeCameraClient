import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';

export default function NodeManagerSystemInfoModal() {

    const [state, dispatch] = useContext(GlobalContext);

    

          const handleSystemInfoNodeModalClose = () =>
          dispatch({
            type: 'SETTINGS_SYSTEMINFO_NODE_MODAL',
            payload: false,
          });
              
    return (
        <Modal  dialogClassName="custom-modal-sysInfo" show={state.systemInfoModal} onHide={() => handleSystemInfoNodeModalClose()} centered size="lg" >
            {state.currentNodeInfo.name === ' ' ? <div>SELECT A CAMERA FIRST</div>:
            
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>CPU</Card.Title>
                                    <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                            <td>brand</td>
                                            <td>{state.currentNodeInfo.sysInfo.cpu.brand}</td>
                                            </tr>
                                            <tr>
                                            <td>cores</td>
                                            <td>{state.currentNodeInfo.sysInfo.cpu.cores}</td>
                                            </tr>
                                            <tr>
                                            <td>family</td>
                                            <td>{state.currentNodeInfo.sysInfo.cpu.family}</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    </Card.Text>
                                </Card.Body>

                          
                                <Card.Body>
                                    <Card.Title>Disk Layout</Card.Title>
                                    <Card.Text>
                                        <Table striped bordered hover variant="dark">
                                            
                                            <thead>
                                             <tr>
                                                    <th>Drive</th>
                                                <th>device</th>
                                                <th>size</th>
                                                <th>vendor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {state.currentNodeInfo.sysInfo.diskLayout.map((disk, index) => (
                                                <tr>
                                                <td>{index + 1}</td>
                                                <td>{disk.device}</td>
                                                
                                                <td>{parseFloat((disk.size/1024)/1024/1024/1024).toFixed(2) } TB</td>
                                                
                                                <td>{disk.vendor}</td>
                                                </tr>
                                            ))}
                                                
                                                
                                            </tbody>
                                        </Table>
                                    </Card.Text>
                                </Card.Body>


                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Memory Layout</Card.Title>
                                    <Card.Text>
                                        <Table striped bordered hover variant="dark">
                                            <tbody>
                                                <tr>
                                                <td>clockSpeed</td>
                                                <td>{state.currentNodeInfo.sysInfo.memLayout[0].clockSpeed}</td>
                                                </tr>
                                                <tr>
                                                <td>size</td>
                                                <td>{parseFloat((state.currentNodeInfo.sysInfo.memLayout[0].size)/1024/1024/1024).toFixed(2)} MB</td>
                                                </tr>
                                                <tr>
                                                <td>type</td>
                                                <td>{state.currentNodeInfo.sysInfo.memLayout[0].type}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Text>
                                </Card.Body>
                           
                                <Card.Body>
                                    <Card.Title>OS Info</Card.Title>
                                    <Card.Text>
                                        <Table striped bordered hover variant="dark">
                                            <tbody>
                                                <tr>
                                                <td>arch</td>
                                                <td>{state.currentNodeInfo.sysInfo.osInfo.arch}</td>
                                                </tr>
                                                <tr>
                                                <td>codename</td>
                                                <td>{state.currentNodeInfo.sysInfo.osInfo.codename}</td>
                                                </tr>
                                                <tr>
                                                <td>kernel</td>
                                                <td>{state.currentNodeInfo.sysInfo.osInfo.kernel}</td>
                                                </tr>
                                                <tr>
                                                <td>release</td>
                                                <td>{state.currentNodeInfo.sysInfo.osInfo.release}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            }
        </Modal>
    )
}