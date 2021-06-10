import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import NodeListVideoPlayerModal from './nodeListVideoPlayModal';
import NodeListStreamCameraModal from './nodeListStreamCameraModal';
import Table from 'react-bootstrap/Table';

export default function NodeList() {
  const [state, dispatch] = useContext(GlobalContext);
  const startStream = (json) => {
    fetch('http://10.10.200.10:3001/api/streams/start/' + json.name + '/' + json.ip).then((response) =>
      console.log(response)
    );
  };
  const stopStream = () => {
    fetch('http://10.10.200.10:3001/api/streams/stop/' + state.currentNodeInfo.name).then((response) =>
      console.log(response)
    );
  };

  const handleViewVideosComponent = () => {
    stopStream();
    dispatch({
      type: 'UPDATE_VIDEOPLAYERACTIVE',
      payload: true,
    });
    dispatch({
      type: 'UPDATE_LIVESTREAMINGACTIVE',
      payload: false,
    });
  };

  let perfMonTimerJob = null;

  // eslint-disable-next-lineclear
  const getNodeInfo = (node) => {
    stopStream();
    fetch('http://10.10.200.10:3001/api/nodes/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'UPDATE_CURRENT_NODE_INFO',
          payload: json,
        });
        startStream(json);
      });
  };
  const upDateSelectedNode = (param) => {
    stopStream();
    getNodeInfo(param);
    clearInterval(perfMonTimerJob);
    dispatch({
      type: 'UPDATE_VIDEOPLAYERACTIVE',
      payload: false,
    });
    dispatch({
      type: 'UPDATE_LIVESTREAMINGACTIVE',
      payload: true,
    });
    dispatch({
      type: 'UPDATE_SELECTEDNODE',
      payload: param,
    });
    dispatch({
      type: 'UPDATE_NODESYSCAMERACOMPONENT',
      payload: false,
    });
  };
  return (
    <div>
      <Card className="text-center " bg="dark" text="light">
        <Card.Header>
          <h2>Nodes</h2>
        </Card.Header>
        <Card.Body className="nodeListHomePage">
          <Card bg="dark" text="light">
            <div className="nodeTableOverflow">
              <Table striped bordered hover variant="dark" responsive size="sm">
                <thead>
                  <tr>
                    <th>Node Name</th>
                    <th>Last Check In</th>
                    <th>Cameras</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.nodes.map((node) => (
                    <tr>
                      <td>{node.name}</td>

                      <td>30 Seconds Ago</td>

                      <td>
                        <Button variant="outline-success" size="sm">
                          Camera 1
                        </Button>{' '}
                        <Button variant="outline-success" size="sm">
                          Camera 2
                        </Button>{' '}
                        <Button variant="outline-success" size="sm">
                          Camera 3
                        </Button>{' '}
                      </td>

                      <td>
                        <td>
                          <Button variant="outline-primary" onClick={() => upDateSelectedNode(node.name)}>
                            Live Feeds
                          </Button>
                        </td>
                        <td>
                          <Button variant="outline-primary" onClick={() => handleViewVideosComponent(node.name)}>
                            Videos
                          </Button>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Card.Body>
        <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
      </Card>
    </div>
  );
}
