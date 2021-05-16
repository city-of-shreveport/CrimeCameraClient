import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { GlobalContext } from '../contexts/globalContext';

export default function SettingsRestreaming() {
    const [state] = useContext(GlobalContext);
  return (
  <>
    <Accordion >
          <Card className='text-right'>
            <Accordion.Toggle as='Restreamer001' eventKey="Restreamer001">
              <Card.Header as='h5' className="text-center">Restreamer001 </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="Restreamer001">
              <CardGroup>
                <Card>
                  <Card.Header>Server</Card.Header>
                  <Card.Body>
                    <li>Arch: {state.streamingstats.restreamer01.os.arch }</li>
                    <li>Platform: {state.streamingstats.restreamer01.os.platform }</li>
                    <li>CPUs: {state.streamingstats.restreamer01.cpu.num }</li>
                    <li>UpTime: {parseInt((state.streamingstats.restreamer01.nodejs.uptime)/60) } min</li>
                    <li>Node: {state.streamingstats.restreamer01.nodejs.version}</li>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Perf</Card.Header>
                  <Card.Body>
                  <li>CPU Load: {state.streamingstats.restreamer01.cpu.load }</li>
                  <li>memory: {parseFloat((state.streamingstats.restreamer01.mem.free/state.streamingstats.restreamer01.mem.totle)).toFixed(2)*100 }%</li>
                  <li>Net In: {state.streamingstats.restreamer01.net.inbytes }</li>
                    <li>Net Out: {state.streamingstats.restreamer01.net.outbytes }</li>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Clients</Card.Header>
                  <Card.Body>
                    <li>Accepted: {state.streamingstats.restreamer01.clients.accepted }</li>
                    <li>Active: {state.streamingstats.restreamer01.clients.active }</li>
                    <li>Idle: {state.streamingstats.restreamer01.clients.idle }</li>
                    <li>RTMP: {state.streamingstats.restreamer01.clients.rtmp }</li>
                    <li>HTTP: {state.streamingstats.restreamer01.clients.http }</li>
                    <li>WS: {state.streamingstats.restreamer01.clients.ws}</li>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Collapse>
          </Card>
          <Card className='text-right'>
            <Accordion.Toggle as='Restreamer002' eventKey="Restreamer002">
              <Card.Header as='h5' className="text-center">Restreamer002 </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="Restreamer002">
              <CardGroup>
                <Card >
                  <Card.Header>Server</Card.Header>
                  <Card.Body >
                    <li>Arch: {state.streamingstats.restreamer01.os.arch }</li>
                    <li>Platform: {state.streamingstats.restreamer01.os.platform }</li>
                    <li>CPUs: {state.streamingstats.restreamer01.cpu.num }</li>
                    <li>UpTime: {parseInt((state.streamingstats.restreamer01.nodejs.uptime)/60) } min</li>
                    <li>Node: {state.streamingstats.restreamer01.nodejs.version}</li>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Perf</Card.Header>
                  <Card.Body>
                  <li>CPU Load: {state.streamingstats.restreamer01.cpu.load }</li>
                  <li>memory: {parseFloat((state.streamingstats.restreamer01.mem.free/state.streamingstats.restreamer01.mem.totle)).toFixed(2)*100 }%</li>
                  <li>Net In: {state.streamingstats.restreamer01.net.inbytes }</li>
                    <li>Net Out: {state.streamingstats.restreamer01.net.outbytes }</li>
                  </Card.Body>
                </Card>
                <Card> 
                  <Card.Header>Clients</Card.Header>
                  <Card.Body>
                    <li>Accepted: {state.streamingstats.restreamer01.clients.accepted }</li>
                    <li>Active: {state.streamingstats.restreamer01.clients.active }</li>
                    <li>Idle: {state.streamingstats.restreamer01.clients.idle }</li>
                    <li>RTMP: {state.streamingstats.restreamer01.clients.rtmp }</li>
                    <li>HTTP: {state.streamingstats.restreamer01.clients.http }</li>
                    <li>WS: {state.streamingstats.restreamer01.clients.ws}</li>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Collapse>
          </Card>
          <Card className='text-right'>
            <Accordion.Toggle as='Restreamer003' eventKey="Restreamer003">
              <Card.Header as='h5' className="text-center">Restreamer003</Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="Restreamer003">
              <CardGroup>
                <Card>
                  <Card.Header>Server</Card.Header>
                    <Card.Body >
                      <li>Arch: {state.streamingstats.restreamer01.os.arch }</li>
                      <li>Platform: {state.streamingstats.restreamer01.os.platform }</li>
                      <li>CPUs: {state.streamingstats.restreamer01.cpu.num }</li>
                      <li>UpTime: {parseInt((state.streamingstats.restreamer01.nodejs.uptime)/60) } min</li>
                      <li>Node: {state.streamingstats.restreamer01.nodejs.version}</li>
                    </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Perf</Card.Header>
                  <Card.Body>
                    <li>CPU Load: {state.streamingstats.restreamer01.cpu.load }</li>
                    <li>memory: {parseFloat((state.streamingstats.restreamer01.mem.free/state.streamingstats.restreamer01.mem.totle)).toFixed(2)*100 }%</li>
                    <li>Net In: {state.streamingstats.restreamer01.net.inbytes }</li>
                    <li>Net Out: {state.streamingstats.restreamer01.net.outbytes }</li>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Clients</Card.Header>
                  <Card.Body>
                    <li>Accepted: {state.streamingstats.restreamer01.clients.accepted }</li>
                    <li>Active: {state.streamingstats.restreamer01.clients.active }</li>
                    <li>Idle: {state.streamingstats.restreamer01.clients.idle }</li>
                    <li>RTMP: {state.streamingstats.restreamer01.clients.rtmp }</li>
                    <li>HTTP: {state.streamingstats.restreamer01.clients.http }</li>
                    <li>WS: {state.streamingstats.restreamer01.clients.ws}</li>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Collapse>
            <Card.Footer>Updated: {state.streamingstats.updated}</Card.Footer>
          </Card>
        </Accordion>
      </>
    );
}