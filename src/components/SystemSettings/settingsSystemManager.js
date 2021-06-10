import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'semantic-ui-react';
import SystemSettingsNewServerFormModal from './systemSettingsNewServerModal';
import LineChart from './SystemLineChart';
import LineChart2 from './SystemServersLineChart';
import LineChart3 from './SystemServers2LineChart';
import { GlobalContext } from '../../contexts/globalContext';

export default function SystemManager() {
  const [state, dispatch] = useContext(GlobalContext);
  let Mongos = [];
  let Restreamers = [];
  let Clients = [];
  let Servers = [];

  // eslint-disable-next-line
  {
    state.servers.map(
      (server) => (
        // eslint-disable-next-line
        server.service === 'MongoDB' && Mongos.push(server),
        server.service === 'Restreamer' && Restreamers.push(server),
        server.service === 'Client' && Clients.push(server),
        server.service === 'Server' && Servers.push(server)
      )
    );
  }

  const handleAddServer = () =>
    dispatch({
      type: 'UPDATE_SYSTEMSETTINGSSERVERFORM',
      payload: true,
    });
  return (
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
        <ButtonGroup aria-label="Basic example" className="me-2">
          <Button variant="secondary" onClick={handleAddServer}>
            Add Server
          </Button>
          <Button variant="secondary">Cluster Manager</Button>
          <Button variant="secondary">Server Manager</Button>
        </ButtonGroup>

        <Card className="text-center " bg="dark" text="light">
          <Card.Title>Server Cluster</Card.Title>

          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>ZeroTier ID</td>
                  <td>Zero Tier IP</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5">
                    <h4>ReStreamers</h4>
                  </td>
                </tr>
                {Restreamers.map((restreamer) => (
                  <tr>
                    <td>{restreamer.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>{restreamer.zeroTierNetworkID}</td>
                    <td>{restreamer.zeroTierIP}</td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td colSpan="5">
                    <h4>Server</h4>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>ZeroTier ID</td>
                  <td>Zero Tier IP</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Servers.map((server) => (
                  <tr>
                    <td>{server.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>{server.zeroTierNetworkID}</td>
                    <td>{server.zeroTierIP}</td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td colSpan="5" variant="danger">
                    <h4>MongoDBs</h4>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>ZeroTier ID</td>
                  <td>Zero Tier IP</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Mongos.map((mongo) => (
                  <tr>
                    <td>{mongo.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>{mongo.zeroTierNetworkID}</td>
                    <td>{mongo.zeroTierIP}</td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td colSpan="5">
                    <h4>Client</h4>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>ZeroTier ID</td>
                  <td>Zero Tier IP</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Clients.map((client) => (
                  <tr>
                    <td>{client.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>{client.zeroTierNetworkID}</td>
                    <td>{client.zeroTierIP}</td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>
      <SystemSettingsNewServerFormModal />
    </Container>
  );
}
