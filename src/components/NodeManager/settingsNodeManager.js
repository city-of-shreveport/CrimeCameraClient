import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NodeManagerEditNodeModal from './nodeManagerEditNodeModal';
import NodeManagerNewNodeModal from './nodeManagerNewNodeModal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import SettingsNodeCard from './settingsModalNodeCard';
import SettingsNodesSettingsCard from './settingsModalNodesSettingsCard';
import SettingsSysInfoCard from './settingsModalSySInfoCard';
import SettingsSysInfoEditCard from './settingsModalSySInfoEditCard';
import Table from 'react-bootstrap/Table';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../../contexts/globalContext';

export default function Settings() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleEditNodeModal = (node) =>
    dispatch({
      type: 'SETTINGS_EDIT_NODE_MODAL',
      payload: true,
    });

  const handleSystemInfoNodeModal = () =>
    dispatch({
      type: 'SETTINGS_SYSTEMINFO_NODE_MODAL',
      payload: true,
    });

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

  const getNodeInfo = (node) => {
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
    getNodeInfo(param);
    clearInterval(perfMonTimerJob);
    dispatch({
      type: 'UPDATE_SELECTEDNODE',
      payload: param,
    });
    dispatch({
      type: 'UPDATE_NODESYSCAMERACOMPONENT',
      payload: false,
    });
  };

  // eslint-disable-next-line
  const cameraInformation = () => {
    return (
      <Card bg="dark" text="light">
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
    );
  };
  return (
    <Container fluid className="settingsDIV bg-dark">
      <br />
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleNewNodeModalOpen()}>Add Node</Nav.Link>
            <Nav.Link>UpDate Nodes</Nav.Link>
            <Nav.Link>Reboot Nodes</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Table striped bordered hover variant="dark" responsive>
              <tbody>
                <tr>
                  <td>Nodes: 45/50</td>
                  <td>Live Feeds: 6</td>
                  <td>More Info: 6</td>
                </tr>
              </tbody>
            </Table>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="justify-content-md-center">
        <Col>
          <Card bg="dark" text="light">
            <div className="nodeTableOverflow">
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Node Name</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Temp</th>
                    <th>Cameras</th>
                    <tr>Drives</tr>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.nodes.map((node, i) => (
                    <tr>
                      <td onClick={() => upDateSelectedNode(node.name)}>{node.name}</td>
                      <td onClick={() => console.log(node.perfmon.cpuTemperature.main)}></td>
                      <td>
                        <ProgressBar variant="danger" now={65} label={`65%`} />
                      </td>
                      <td>145</td>
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
                        <Button variant="outline-warning" size="sm">
                          Root 45%
                        </Button>{' '}
                        <Button variant="outline-warning" size="sm">
                          Video 95%
                        </Button>{' '}
                        <Button variant="outline-warning" size="sm">
                          Buddy 90%
                        </Button>{' '}
                      </td>
                      <td>
                        <Button variant="outline-primary" size="sm" onClick={() => handleEditNodeModal(node.name)}>
                          Configure
                        </Button>{' '}
                        <Button variant="outline-primary" size="sm" onClick={() => handleSystemInfoNodeModal()}>
                          Information
                        </Button>{' '}
                        <Button variant="outline-primary" size="sm">
                          Reboot
                        </Button>{' '}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
        {state.currentNodeInfo.name === ' ' ? (
          <div></div>
        ) : (
          <Col xs={2}>
            <systemInformation />
            <Card bg="dark" text="light">
              <Card.Header>System Information</Card.Header>
              <Card.Text></Card.Text>
              <Card.Body>
                {state.cameraSettingsComponent ? <SettingsSysInfoEditCard /> : <SettingsSysInfoCard />}
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      <NodeManagerNewNodeModal />
      <NodeManagerEditNodeModal />
    </Container>
  );
}
