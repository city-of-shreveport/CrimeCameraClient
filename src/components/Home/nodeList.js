import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { GlobalContext } from '../../contexts/globalContext';

export default function NodeList() {
  const [state, dispatch] = useContext(GlobalContext);

  const startStream = (json) => {
    fetch('http://10.10.10.10:3001/api/streams/start/' + json.name + '/' + json.config.ip).then((response) => {});
  };

  const stopStream = () => {
    fetch('http://10.10.10.10:3001/api/streams/stop/' + state.currentNodeInfo.name).then((response) => {});
  };

  const handleViewVideosComponent = () => {
    stopStream();
  };

  let perfMonTimerJob = null;

  const getNodeInfo = (node) => {
    fetch('http://10.10.10.10:3001/api/nodes/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'updateState',
          payload: { previousNode: state.currentNodeInfo.name, currentNodeInfo: json, videoPlayerActive: true },
        });
      });
  };

  const upDateSelectedNode = (param) => {
    stopStream();
    getNodeInfo(param);
    clearInterval(perfMonTimerJob);

    dispatch({
      type: 'updateState',
      payload: {
        selectedNode: param,
        nodeSelected: true,
        videoPlayerActive: false,
        liveStreamingActive: true,
        nodeSettingsCameraComponent: false,
      },
    });
  };

  return (
    <Col xs={3}>
      <Card className="text-center " bg="dark" text="light">
        <Card.Title>On Line Nodes</Card.Title>
        <Card.Body className="nodeListHomePage">
          <Card bg="dark" text="light">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Node</th>
                  <th>Last Seen</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {state.nodes.map((node) =>
                  node.nodeStatus === true ? (
                    <tr>
                      {' '}
                      <td>{node.name}</td>
                      <td>
                        <Moment fromNow>{node.lastCheckIn}</Moment>
                      </td>
                      <td onClick={() => upDateSelectedNode(node.name)}>Start Stream</td>
                    </tr>
                  ) : (
                    <></>
                  )
                )}
              </tbody>
            </Table>
          </Card>
        </Card.Body>
      </Card>
      <br />
      <Card className="text-center " bg="dark" text="light">
        <Card.Title>Off Line Nodes</Card.Title>
        <Card.Body className="nodeListOffLineHomePage">
          <Card bg="dark" text="light">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Node</th>
                  <th>Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {state.nodes.map((node) =>
                  node.nodeStatus === true ? (
                    <></>
                  ) : (
                    <tr>
                      {' '}
                      <td>{node.name}</td>
                      <td>
                        <Moment fromNow>{node.lastCheckIn}</Moment>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Card>
        </Card.Body>
      </Card>
    </Col>
  );
}
