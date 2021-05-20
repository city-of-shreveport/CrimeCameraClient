import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';

import Button from 'react-bootstrap/Button';

export default function SettingsNodeCard() {
  const [, dispatch] = useContext(GlobalContext);
  const handleSysConfigCameraModal = () =>
    dispatch({
      type: 'UPDATE_CAMERASYSCAMERACOMPONENT',
      payload: true,
    });

  return (
    <>
      {' '}
      <Button variant="primary" size="sm" onClick={() => handleSysConfigCameraModal()}>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Direction </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td></td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td></td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Direction </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td></td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td></td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Direction </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td></td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
