import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';

import Button from 'react-bootstrap/Button';

export default function SettingsNodeCard() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleSysConfigNodeModal = () =>
    dispatch({
      type: 'UPDATE_NODESYSCAMERACOMPONENT',
      payload: true,
    });

  return (
    <>
      {' '}
      

      
      {state.currentNodeInfo.name == ' ' ? <div></div>:<div>
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
                  <td>{state.currentNodeInfo.config.cameras[0].onlineStatus}</td>
                </tr>
                <tr>
                  <td>Direction </td>
                  <td>{state.currentNodeInfo.config.cameras[0].direction}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{state.currentNodeInfo.config.cameras[0].type}</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>{state.currentNodeInfo.config.cameras[0].ip}</td>
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
                <td>{state.currentNodeInfo.config.cameras[1].onlineStatus}</td>
                </tr>
                <tr>
                <td>Direction </td>
                <td>{state.currentNodeInfo.config.cameras[1].direction}</td>
                </tr>
                <tr>
                <td>Type</td>
                <td>{state.currentNodeInfo.config.cameras[1].type}</td>
                </tr>
                <tr>
                <td>IP</td>
                <td>{state.currentNodeInfo.config.cameras[1].ip}</td>
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
                <td>{state.currentNodeInfo.config.cameras[2].onlineStatus}</td>
                </tr>
                <tr>
                <td>Direction </td>
                <td>{state.currentNodeInfo.config.cameras[2].direction}</td>
                </tr>
                <tr>
                <td>Type</td>
                <td>{state.currentNodeInfo.config.cameras[2].type}</td>
                </tr>
                <tr>
                <td>IP</td>
                <td>{state.currentNodeInfo.config.cameras[2].ip}</td>
                </tr>
                </tbody>
                 
            </Table>
          </Card.Text>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
      </div>
      }
    </>
  );
}
