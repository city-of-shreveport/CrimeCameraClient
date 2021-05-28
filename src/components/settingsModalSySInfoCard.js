import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NodeManagerSystemInfoModal from "./nodeManagerSystemInfoModal"

import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';
export default function SettingsSysInfoCard() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleEditNodeModal = () =>
    dispatch({
      type: 'SETTINGS_EDIT_NODE_MODAL',
      payload: true,
    });
  const handleSystemInfoNodeModal = () =>
    dispatch({
      type: 'SETTINGS_SYSTEMINFO_NODE_MODAL',
      payload: true,
    });  return (
    <>
    <ButtonGroup className="mb-2">
    <Button variant="primary" size="sm"  onClick={() => handleEditNodeModal()}>Configure</Button>
    <Button variant="primary" size="sm" onClick={() => handleSystemInfoNodeModal()}>System Info</Button>
    <Button variant="primary" size="sm" >Update</Button>
    <Button variant="primary" size="sm" >Reboot</Button>
    <Button variant="primary" size="sm" >Change Keys</Button>
  </ButtonGroup>
      
      <CardGroup>
        <Card border="light">
          <Card.Text>
           
              <Table striped bordered hover size="sm" variant="dark">
              {state.currentNodeInfo.name == ' ' ? <div>select a camera</div>:
                <tbody>
                  <tr>
                    <td>Host Name</td>
                    <td>{state.currentNodeInfo.name}</td>
                  </tr>
                  <tr>
                    <td>IP</td>
                    <td>{state.currentNodeInfo.config.zeroTierIP}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                    {state.currentNodeInfo.config.locationLat}, {state.currentNodeInfo.config.locationLong} 
                    </td>
                  </tr>
                  <tr>
                    <td>Video Drive</td>
                    <td>{state.currentNodeInfo.config.videoDriveDevicePath}</td>
                  </tr>
                  <tr>
                    <td>Buddy Drive</td>
                    <td>{state.currentNodeInfo.config.buddyDriveDevicePath}</td>
                  </tr>
                </tbody> }
              </Table>
            
          </Card.Text>
        </Card>
        <Card border="light">
          <Card.Text>
            <Table striped bordered hover size="sm" variant="dark">
            {state.currentNodeInfo.name == ' ' ? <div>select a camera</div>:
              <tbody>
                <tr>
                  <td>OS </td>
                  <td></td>
                </tr>
                <tr>
                  <td>CodeName</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Kernel</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Arch</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Buddy 1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Buddy 2</td>
                  <td></td>
                </tr>
              </tbody>
}
            </Table>
          </Card.Text>
        </Card>
        <NodeManagerSystemInfoModal/>

      </CardGroup>
    </>
  );
}
