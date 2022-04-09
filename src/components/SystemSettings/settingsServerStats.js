import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';


export default function SettingsServerStats() {
  return (
    <>
      <CardGroup>
        <Card style={{ width: '7em' }} bg="secondary" text="light" className="text-center" border="dark">
          <Card.Body>
            <Card.Header>Users</Card.Header>
            <Card.Text>
              <Card.Title>30</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '7em' }} bg="secondary" text="light" className="text-center" border="dark">
          <Card.Body>
            <Card.Header>Streams</Card.Header>
            <Card.Text>
              <Card.Title>12</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '7em' }} bg="secondary" text="light" className="text-center" border="dark">
          <Card.Body>
            <Card.Header>Servers</Card.Header>
            <Card.Text>
              <Card.Title>11/11</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '7em' }} bg="secondary" text="light" className="text-center" border="dark">
          <Card.Body>
            <Card.Header>Cameras</Card.Header>
            <Card.Text>
              <Card.Title>59/64</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
