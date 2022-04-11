
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import React, { useContext } from 'react';


import { GlobalContext } from '../contexts/globalContext';
var dots = "*"

export default function Loading() {
  const [state, dispatch] = useContext(GlobalContext);
  
    var nodes = state.nodes
    var nodeCount = nodes.length












return (
    <>
<Card className="text-center">
  <Card.Header>SHREVEPORT CRIME CAMERA RTCC SYSTEM</Card.Header>
  <Card.Body>
    <Card.Title>PLEASE WAIT WHILE I GATHER ALL THE NODES</Card.Title>
    <Card.Text>
      This should only take a min. The map will load once all the nodes are loaded.
      </Card.Text>
      <Card.Footer className="text-muted">
      Number of Nodes Loaded: {nodeCount}
      </Card.Footer>
  </Card.Body>
 
</Card>
    </>
  );
}
