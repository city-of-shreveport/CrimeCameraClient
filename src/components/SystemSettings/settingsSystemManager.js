import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import SystemSettingsNewServerFormModal from './systemSettingsNewServerModal';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'semantic-ui-react';
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
      <Card className="text-center " bg="dark" text="light">
        <ButtonGroup aria-label="Basic example" className="me-2">
          <Button variant="secondary" onClick={handleAddServer}>
            Add Server
          </Button>
          <Button variant="secondary">Cluster Manager</Button>
          <Button variant="secondary">Server Manager</Button>
        </ButtonGroup>
        <Row className="justify-content-md-center">
          <Card className="text-center " bg="dark" text="light">
            <Tabs defaultActiveKey="ReStreamers" id="uncontrolled-tab-example">
              <Tab eventKey="ReStreamers" title="ReStreamers">
                <Table striped bordered hover variant="dark" size="sm">
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
                    <tr></tr>
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
              </Tab>

              <Tab eventKey="Servers" title="Servers">
                <Table striped bordered hover variant="dark" size="sm">
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
              </Tab>

              <Tab eventKey="MongoDBs" title="MongoDBs">
                <Table striped bordered hover variant="dark" size="sm">
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
              </Tab>

              <Tab eventKey="Clients" title="Clients">
                <Table striped bordered hover variant="dark" size="sm">
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
              </Tab>
            </Tabs>
          </Card>
        </Row>
        <SystemSettingsNewServerFormModal />
      </Card>
    </Container>
  );
}
