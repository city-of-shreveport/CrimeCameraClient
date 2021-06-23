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

  const stopStream = (node) => {
    let nodeNameRaw = node.split('-');
    let nodeName = nodeNameRaw[0];

    fetch('http://10.10.10.10:3001/api/streams/stop/' + nodeName)
      .then((response) => response.json())
      .then((json) => {
        console.log('stopped');
      });
  };

  const handleAddServer = () =>
    dispatch({
      type: 'updateState',
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
            <Card.Title>Rec Center 1</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col sm={5}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsServerCard">
            <ServerLineChart />
          </Card>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsServerCard">
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
                {state.restreamerStreamsStats.map((stream) => (
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
                    <td>
                      <Button onClick={() => stopStream(stream.streamName)}></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col sm>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsServerCard">
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
                      return state.restreamerserverstatistics[19].cpu.load;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return (state.restreamerserverstatistics[19].net.inbytes * 0.000001).toFixed(2);
                    })}
                    /
                    {tryValue(() => {
                      return (state.restreamerserverstatistics[19].net.outbytes * 0.000001).toFixed(2);
                    })}
                  </td>

                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].nodejs.uptime;
                    })}
                  </td>

                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].clients.active;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].clients.idle;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].clients.rtmp;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].clients.http;
                    })}
                  </td>
                  <td>
                    {tryValue(() => {
                      return state.restreamerserverstatistics[19].clients.ws;
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
        <Col sm={3}>
          <Card bg="dark" text="light" border="light" className="text-center systemSettingsStreamsCard">
            <Card.Title>General Stats</Card.Title>
            <Table striped bordered hover variant="dark" size="sm">
              <tbody>
                <tr>
                  <td>Connected Users</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Server CPU</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>Server Memory</td>
                  <td>78%</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <NewServerModal />
    </Container>
  );
}
