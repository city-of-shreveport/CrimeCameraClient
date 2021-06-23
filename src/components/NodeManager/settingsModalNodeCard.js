import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function SettingsNodeCard() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleSysConfigNodeModal = () =>
    dispatch({
      type: 'updateState',
      payload: { nodeSettingsCameraComponent: true },
    });

  return (
    <>
      {' '}
      <div>
        <Button variant="primary" size="sm" onClick={() => handleSysConfigNodeModal()}>
          Configure
        </Button>
        <CardGroup>
          <Card className="text-center">
            <Card.Header>Camera 1</Card.Header>
            <Card.Text>
              <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera1.onlineStatus;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Direction </td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera1.direction;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera1.type;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>IP</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera1.ip;
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <Card.Footer></Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header>Camera 2</Card.Header>
            <Card.Text>
              <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera2.onlineStatus;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Direction </td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera2.direction;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera2.type;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>IP</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera2.ip;
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <Card.Footer></Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header>Camera 3</Card.Header>
            <Card.Text>
              <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera3.onlineStatus ? 'UP' : 'DOWN';
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Direction </td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera3.direction;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera3.type;
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>IP</td>
                    <td>
                      {tryValue(() => {
                        return state.currentNodeInfo.config.cameras.camera3.ip;
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <Card.Footer></Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}
