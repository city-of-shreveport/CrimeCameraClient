import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';
import HorizontalBarChart from './barChart2';
import Dynamic from './barChart';
import LineChart from './lineChart';
import SettingsNodeCard from './settingsModalNodeCard';
import SettingsSysInfoCard from './settingsModalSySInfoCard';
import SettingsSysInfoEditCard from './settingsModalSySInfoEditCard';
import SettingsNodesSettingsCard from './settingsModalNodesSettingsCard';
import NodeManagerNewNodeModal from './nodeManagerNewNodeModal';
import NodeManagerEditNodeModal from './nodeManagerEditNodeModal';

export default function Settings() {
  const [state, dispatch] = useContext(GlobalContext);
  let perfMonTimerJob = null;
  const getPerfmonData = (node) =>
    fetch('http://10.10.200.10:3001/api/perfmons/' + node)
      .then((response) => response.json())
      .then((json) => {
        const rowLen = json.length;
        json.map((perfmon, i) =>
          rowLen === i + 2
            ? dispatch({
                type: 'UPDATE_CURRENT_NODE_PERFMON',
                payload: perfmon,
              })
            : ''
        );
      });

  const getCameraInfo = (node) => {
    fetch('http://10.10.200.10:3001/api/nodes/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'UPDATE_CURRENT_NODE_INFO',
          payload: json,
        });
      });
    getPerfmonData(node);
    perfMonTimerJob = setInterval(() => {
      getPerfmonData(node);
    }, 60000);
  };

  const handleNewNodeModalOpen = () =>
    dispatch({
      type: 'SETTINGS_NEW_NODE_MODAL',
      payload: true,
    });
  const upDateSelectedNode = (param) => {
    getCameraInfo(param);
    clearInterval(perfMonTimerJob);
    dispatch({
      type: 'UPDATE_SELECTEDNODE',
      payload: param,
    });
  };
  return (
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <Button onClick={() => handleNewNodeModalOpen()}>Add Node</Button>
          <Card>
            <Card.Header as="h3">
              Nodes
              <Card.Text as="h6">45 Online / 2 Problems</Card.Text>
            </Card.Header>
            <ListGroup>
              {state.nodes.map((node) => (
                <ListGroup.Item onClick={() => upDateSelectedNode(node.name)}>{node.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card.Header as="h4">{state.selectedCamera}</Card.Header>
          <CardGroup>
            <Card>
              <Card.Header>System Information</Card.Header>
              <Card.Text></Card.Text>
              <Card.Body>
                {state.cameraSettingsComponent ? <SettingsSysInfoEditCard /> : <SettingsSysInfoCard />}
              </Card.Body>
            </Card>
            <Card>
              <CardGroup>
                <Card>
                  <Card.Header>System</Card.Header>
                  {state.currentNodeInfo.name === ' ' ? <div>SELECT A NODE FIRST</div> : <HorizontalBarChart />}
                </Card>
                <Card>
                  <Card.Header>Drives</Card.Header>
                  <Dynamic />
                </Card>
              </CardGroup>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Header>Cameras</Card.Header>
              <Card.Header></Card.Header>
              <Card.Body>
                {state.currentNodeInfo.name === ' ' ? (
                  <div></div>
                ) : state.nodeSettingsCameraComponent ? (
                  <SettingsNodesSettingsCard />
                ) : (
                  <SettingsNodeCard />
                )}
              </Card.Body>
            </Card>
            <Card>
              <LineChart />
            </Card>
          </CardGroup>
          <Card.Footer className="text-muted"></Card.Footer>
        </Col>
      </Row>
      <NodeManagerNewNodeModal />
      <NodeManagerEditNodeModal />
    </Container>
  );
}
