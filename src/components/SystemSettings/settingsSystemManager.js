import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LineChart from './SystemLineChart';
import Moment from 'react-moment';
import NewServerModal from './systemSettingsNewServerModal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import ServerLineChart from './SystemServerLineChart';
import Table from 'react-bootstrap/Table';
import tryValue from '../../helperFunctions';
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
      type: 'setState',
      payload: { systemSettingsNewServerFormModal: true },
    });

  return (
    <Container className="settingsDIV">
      <br />
      <Row>
        <Col sm={3}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>Main Servers</Card.Title>
            <Button onClick={() => handleAddServer()}>Add Server</Button>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
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
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col sm={3}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>Client Servers</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Clients.map((server) => (
                  <tr>
                    <td>{server.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col sm={3}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>Mongo Servers</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Mongos.map((server) => (
                  <tr>
                    <td>{server.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
<Col sm={3}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>ReStreamers</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {Restreamers.map((server) => (
                  <tr>
                    <td>{server.name}</td>
                    <td>
                      <Badge variant="danger">Danger</Badge>{' '}
                    </td>
                    <td>Configure</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsServerCard">
            <ServerLineChart />
          </Card>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>Streams</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>App</td>
                  <td>Client ID</td>
                  <td>Bytes</td>
                  <td>Ip</td>
                  <td>Connected</td>
                </tr>
              </thead>
              <tbody>
                {tryValue(() => {state.restreamerStreams.map((stream) => (
                  <tr>
                    <td>
                      {tryValue(() => {
                        return stream.streamName;
                      })}
                    </td>
                    <td>
                      {tryValue(() => {
                        return stream.streamInfo.publisher.app;
                      })}
                    </td>

                    <td>
                      {tryValue(() => {
                        return stream.streamInfo.publisher.clientId;
                      })}
                    </td>

                    <td>
                      {tryValue(() => {
                        return stream.streamInfo.publisher.bytes;
                      })}
                    </td>
                    <td>
                      {tryValue(() => {
                        return stream.streamInfo.publisher.ip;
                      })}
                    </td>
                    <td>
                      <Moment fromNow>
                        {tryValue(() => {
                          return stream.streamInfo.publisher.connectCreated;
                        })}
                      </Moment>
                    </td>
                   
                  </tr>
                ))})}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col sm>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>Restream Status</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>CPU Load</td>
                  <td>Net In/Out</td>

                  <td>Up Time</td>
                  <td>Active Connections</td>
                  <td>Idle Connections</td>
                  <td>RTMP Connections</td>
                  <td>HTTP Connections</td>
                  <td>Web Sockets</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.cpu.load;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return (state.restreamerServerStats.net.inbytes * 0.000001).toFixed(2);
                    })}
                    /
                    {tryValue(() => {
                      return (state.restreamerServerStats.net.outbytes * 0.000001).toFixed(2);
                    })}
                  </td>

                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.nodejs.uptime;
                    })}
                  </td>

                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.clients.active;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.clients.idle;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.clients.rtmp;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.clients.http;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerServerStats.clients.ws;
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col>
                <LineChart />
              </Col>
            </Row>
          </Card>
        </Col>
        
      </Row>
      <NewServerModal />
    </Container>
  );
}
