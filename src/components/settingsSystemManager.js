import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
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
import { GlobalContext } from '../contexts/globalContext';

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

        <Col>
          <CardGroup>
            <Card className="text-center ">
              <Card.Title>ReStreamers</Card.Title>

              <Card.Body>
                <LineChart />

                {Restreamers.map((restreamer) => (
                  <ListGroup.Item key={restreamer.name} variant="dark">
                    {restreamer.name}
                    <Badge variant="danger">Danger</Badge>{' '}
                  </ListGroup.Item>
                ))}
              </Card.Body>
            </Card>

            <Card className="text-center ">
              <Card.Title>Servers</Card.Title>

              <Card.Body>
                <LineChart2 />

                {Servers.map((server) => (
                  <ListGroup.Item key={server.name} variant="dark">
                    {server.name}
                  </ListGroup.Item>
                ))}
              </Card.Body>
            </Card>

            <Card className="text-center ">
              <Card.Title>MongoDBs</Card.Title>

              <Card.Body>
                <LineChart3 />

                {Mongos.map((mongo) => (
                  <ListGroup.Item key={mongo.name} variant="dark">
                    {mongo.name}
                  </ListGroup.Item>
                ))}
              </Card.Body>
            </Card>

            <Card className="text-center ">
              <Card.Title>Clients</Card.Title>

              <Card.Body>
                <LineChart2 />

                {Clients.map((client) => (
                  <ListGroup.Item key={client.name} variant="dark">
                    {client.name}
                  </ListGroup.Item>
                ))}
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <SystemSettingsNewServerFormModal />
    </Container>
  );
}
