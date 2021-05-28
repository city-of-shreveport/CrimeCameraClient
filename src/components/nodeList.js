import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import ListGroup from 'react-bootstrap/ListGroup';
import NodeListVideoPlayerModal from './nodeListVideoPlayModal';
import NodeListStreamCameraModal from './nodeListStreamCameraModal';
export default function NodeList() {
  const [state, dispatch] = useContext(GlobalContext);

  // eslint-disable-next-lineclear
  const getNodeInfo = (node) => {
    fetch('http://10.105.44.56:3001/api/nodes/' + node)
      .then((response) => response.json())
      .then((json) => {
        console.log(state);
        dispatch({
          type: 'UPDATE_CURRENT_NODE_INFO',
          payload: json,
        });
      });
  };
  return (
    <div>
      <Card className="text-center ">
        <Card.Header>
          <h2>Nodes</h2>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Header>
        <Card.Body className="nodeListHomePage">
          <ListGroup>
            {state.nodes.map((node) => (
              <ListGroup.Item key={node.name} onClick={() => getNodeInfo(node.name)}>
                {node.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
      </Card>
      <NodeListVideoPlayerModal />
      <NodeListStreamCameraModal />
    </div>
  );
}
