import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext, useState } from 'react';

export default function SettingsRestreamerStats() {
  return (
    <>
<CardGroup>
                
            <Card style={{ width: '7em' }} bg='secondary' text='light' className="text-center" border="dark">
              <Card.Body>
                <Card.Header >Active </Card.Header>
                <Card.Text>
                  <Card.Title >20</Card.Title>
                </Card.Text>
              </Card.Body>
            </Card>
        
                <Card style={{ width: '7em' }} bg='secondary' text='light' className="text-center" border="dark">
              <Card.Body>
                <Card.Header >Idle </Card.Header>
                <Card.Text>
                  <Card.Title>2</Card.Title>
                </Card.Text>
              </Card.Body>
            </Card>

              <Card style={{ width: '7em' }} bg='secondary' text='light' className="text-center" border="dark">
              <Card.Body>
                <Card.Header >RTMP </Card.Header>
                <Card.Text>
                  <Card.Title >6</Card.Title>
                </Card.Text>
              </Card.Body>
            </Card>
                <Card style={{ width: '7em' }} bg='secondary' text='light' className="text-center" border="dark">
              <Card.Body>
                <Card.Header >WS</Card.Header>
                <Card.Text>
                  <Card.Title >12</Card.Title>
                </Card.Text>
              </Card.Body>
              
            </Card>

            </CardGroup>
    </>
  );
}