import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { GlobalContext } from '../../contexts/globalContext';

export default function SettingsBackEndServers() {
  const [state] = useContext(GlobalContext);
  return (
    <>
      <Accordion>
        <Card className="text-right">
          <Accordion.Toggle as="BackEnd001" eventKey="BackEnd001">
            <Card.Header as="h5" className="text-center">
              BackEnd001{' '}
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="BackEnd001">
            <CardGroup>
              <Card>
                <Card.Header>Server</Card.Header>
                <Card.Body>
                  <li>Arch: {state.streamingstats.restreamer01.os.arch}</li>
                  <li>Platform: {state.streamingstats.restreamer01.os.platform}</li>
                  <li>CPUs: {state.streamingstats.restreamer01.cpu.num}</li>
                  <li>UpTime: {parseInt(state.streamingstats.restreamer01.nodejs.uptime / 60)} min</li>
                  <li>Node: {state.streamingstats.restreamer01.nodejs.version}</li>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Perf</Card.Header>
                <Card.Body>
                  <li>CPU Load: {state.streamingstats.restreamer01.cpu.load}</li>
                  <li>
                    memory:{' '}
                    {parseFloat(
                      state.streamingstats.restreamer01.mem.free / state.streamingstats.restreamer01.mem.totle
                    ).toFixed(2) * 100}
                    %
                  </li>
                  <li>Net In: {state.streamingstats.restreamer01.net.inbytes}</li>
                  <li>Net Out: {state.streamingstats.restreamer01.net.outbytes}</li>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Actions</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </CardGroup>
          </Accordion.Collapse>
        </Card>
        <Card className="text-right">
          <Accordion.Toggle as="BackEnd002" eventKey="BackEnd002">
            <Card.Header as="h5" className="text-center">
              BackEnd002{' '}
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="BackEnd002">
            <CardGroup>
              <Card>
                <Card.Header>Server</Card.Header>
                <Card.Body>
                  <li>Arch: {state.streamingstats.restreamer01.os.arch}</li>
                  <li>Platform: {state.streamingstats.restreamer01.os.platform}</li>
                  <li>CPUs: {state.streamingstats.restreamer01.cpu.num}</li>
                  <li>UpTime: {parseInt(state.streamingstats.restreamer01.nodejs.uptime / 60)} min</li>
                  <li>Node: {state.streamingstats.restreamer01.nodejs.version}</li>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Perf</Card.Header>
                <Card.Body>
                  <li>CPU Load: {state.streamingstats.restreamer01.cpu.load}</li>
                  <li>
                    memory:{' '}
                    {parseFloat(
                      state.streamingstats.restreamer01.mem.free / state.streamingstats.restreamer01.mem.totle
                    ).toFixed(2) * 100}
                    %
                  </li>
                  <li>Net In: {state.streamingstats.restreamer01.net.inbytes}</li>
                  <li>Net Out: {state.streamingstats.restreamer01.net.outbytes}</li>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Actions</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </CardGroup>
          </Accordion.Collapse>
        </Card>
        <Card className="text-right">
          <Accordion.Toggle as="BackEnd003" eventKey="BackEnd003">
            <Card.Header as="h5" className="text-center">
              BackEnd003
            </Card.Header>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="BackEnd003">
            <CardGroup>
              <Card>
                <Card.Header>Actions</Card.Header>
                <Card.Body></Card.Body>
              </Card>
              <Card>
                <Card.Header>Perf</Card.Header>
                <Card.Body>
                  <li>CPU Load: {state.streamingstats.restreamer01.cpu.load}</li>
                  <li>
                    memory:{' '}
                    {parseFloat(
                      state.streamingstats.restreamer01.mem.free / state.streamingstats.restreamer01.mem.totle
                    ).toFixed(2) * 100}
                    %
                  </li>
                  <li>Net In: {state.streamingstats.restreamer01.net.inbytes}</li>
                  <li>Net Out: {state.streamingstats.restreamer01.net.outbytes}</li>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Actions</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </CardGroup>
          </Accordion.Collapse>
          <Card.Footer> </Card.Footer>
        </Card>
      </Accordion>
    </>
  );
}
