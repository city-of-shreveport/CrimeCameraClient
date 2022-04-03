import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/globalContext';

export default function SettingsRestreaming() {
  const [state, dispatch] = useContext(GlobalContext);

  let Mongos = [];
  let Restreamers = [];
  let Clients = [];
  let Servers = [];

  {
    state.servers.map(
      (server) => (
        server.service === 'MongoDB' && Mongos.push(server),
        server.service === 'Restreamer' && Restreamers.push(server),
        server.service === 'Client' && Clients.push(server),
        server.service === 'Server' && Servers.push(server)
      )
    );
  }

  return (
    <>
      <Card.Title>MongoDBs</Card.Title>
      <ListGroup>
        {Mongos.map((mongo) => (
          <ListGroup.Item key={mongo.name} variant="dark">
            {mongo.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Title>ReStreamers</Card.Title>

      <ListGroup>
        {Restreamers.map((restreamer) => (
          <ListGroup.Item key={restreamer.name} variant="dark">
            {restreamer.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Title>Clients</Card.Title>

      <ListGroup>
        {Clients.map((client) => (
          <ListGroup.Item key={client.name} variant="dark">
            {client.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Title>Servers</Card.Title>

      <ListGroup>
        {Servers.map((server) => (
          <ListGroup.Item key={server.name} variant="dark">
            {server.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
