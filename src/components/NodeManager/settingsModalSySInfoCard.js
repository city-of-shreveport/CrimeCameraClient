import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NodeManagerSystemInfoModal from './nodeManagerSystemInfoModal';

import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../../contexts/globalContext';
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
    });
  return (
    <>
      <div>
        <CardGroup>
          <Table striped bordered hover size="sm" variant="dark">
            <tbody>
              <tr>
                <td>Host Name</td>
                <td>{state.currentNodeInfo.name}</td>
              </tr>
              <tr>
                <td>IP</td>
                <td>{state.currentNodeInfo.config.ip}</td>
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
              <tr>
                <td>OS </td>
                <td>{state.currentNodeInfo.sysInfo.osInfo.distro}</td>
              </tr>
              <tr>
                <td>CodeName</td>
                <td>{state.currentNodeInfo.sysInfo.osInfo.codename}</td>
              </tr>
              <tr>
                <td>Kernel</td>
                <td>{state.currentNodeInfo.sysInfo.osInfo.kernel}</td>
              </tr>
              <tr>
                <td>Arch</td>
                <td>{state.currentNodeInfo.sysInfo.osInfo.arch}</td>
              </tr>
              <tr>
                <td>Buddy 1</td>
                <td>{state.currentNodeInfo.config.buddyDriveDevicePath}</td>
              </tr>
              <tr>
                <td>Buddy 2</td>
                <td>{state.currentNodeInfo.config.buddyDriveDevicePath}</td>
              </tr>
            </tbody>
          </Table>

          <NodeManagerSystemInfoModal />
        </CardGroup>{' '}
      </div>
    </>
  );
}
