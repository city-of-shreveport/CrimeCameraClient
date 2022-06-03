import CardGroup from 'react-bootstrap/CardGroup';
import NodeManagerSystemInfoModal from './nodeManagerSystemInfoModal';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
export default function SettingsSysInfoCard() {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <>
      <div>
        <CardGroup>
          <Table striped bordered hover size="sm" variant="dark">
            <tbody>
              <tr>
                <td>Host Name</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.name;
                  })}
                </td>
              </tr>
              <tr>
                <td>IP</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.ip;
                  })}
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.locationLat;
                  })}
                  {tryValue(() => {
                    return state.currentNodeInfo.config.locationLong;
                  })}
                </td>
              </tr>
              <tr>
                <td>Video Drive</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.videoDriveDevicePath;
                  })}
                </td>
              </tr>
              <tr>
                <td>Buddy Drive</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.buddyDriveDevicePath;
                  })}
                </td>
              </tr>
              <tr>
                <td>OS </td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.sysInfo.osInfo.distro;
                  })}
                </td>
              </tr>
              <tr>
                <td>CodeName</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.sysInfo.osInfo.codename;
                  })}
                </td>
              </tr>
              <tr>
                <td>Kernel</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.sysInfo.osInfo.kernel;
                  })}
                </td>
              </tr>
              <tr>
                <td>Arch</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.sysInfo.osInfo.arch;
                  })}
                </td>
              </tr>
              <tr>
                <td>Current Buddy</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.currentBuddy;
                  })}
                </td>
              </tr>
              <tr>
                <td>Buddy 1</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.buddyDrives.buddy1.hostName;
                  })}
                </td>
              </tr>
              <tr>
                <td>Buddy 2</td>
                <td>
                  {tryValue(() => {
                    return state.currentNodeInfo.config.buddyDrives.buddy2.hostName;
                  })}
                </td>
              </tr>
            </tbody>
          </Table>

          <NodeManagerSystemInfoModal />
        </CardGroup>{' '}
      </div>
    </>
  );
}
