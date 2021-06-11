import Home from './Home/home';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Map from './Home/map';
import Modal from 'react-bootstrap/Modal';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import FormControl from 'react-bootstrap/FormControl';
import React, { useContext, useEffect } from 'react';
import NodeManager from './NodeManager/settingsNodeManager';
import SystemManager from './SystemSettings/settingsSystemManager';
import VMS from './VMS/vms';
import { GlobalContext } from '../contexts/globalContext';
import { IconContext } from 'react-icons';
import { IoCameraOutline } from 'react-icons/io5';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);

  const updateSelectedNodeVMS = (e) =>
    dispatch({
      type: 'UPDATESELECTEDNODEVMS',
      payload: e,
    });

  const updateSelectedNodeModalVMS = (e) =>
    dispatch({
      type: 'UPDATESELECTEDNODEMODALVMS',
      payload: e,
    });
  const updateHomeVideoDate = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEODATE',
      payload: e,
    });
  const updateHomeTimeHour = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEHOUR',
      payload: e,
    });

  const updateHomeTimeMin = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEMIN',
      payload: e,
    });

  const updateHomeTimeAMPM = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEPM',
      payload: e,
    });

  function navigate(screen) {
    dispatch({
      type: screen,
      payload: true,
    });
  }
  const upDateSelectedCam = (param) => {
    let buttonSelected = state.selectedNodeModalVMS.camButtonSelected;
    switch (buttonSelected) {
      case 'selectedNode1':
        updateSelectedNodeVMS({ selectedNode1VMS: param });
        break;
      case 'selectedNode2':
        updateSelectedNodeVMS({ selectedNode2VMS: param });
        break;
      case 'selectedNode3':
        updateSelectedNodeVMS({ selectedNode3VMS: param });
        break;
      default:
        break;
    }
  };
  function fetchCurrentPerfMonData(nodedata) {
    var nodeArray = [];
    for (let i = 0; i < nodedata.length; i++) {
      fetch('http://10.10.200.10:3001/api/perfmons/' + nodedata[i].name)
        .then((response) => response.json())
        .then((json) => {
          let nodeDataPerfMon = nodedata[i];
          nodeDataPerfMon.perfmon = json[0];
          nodeArray.push(nodeDataPerfMon);
        })
        .then(() => {
          dispatch({
            type: 'UPDATENODES',
            payload: nodeArray,
          });
        });
    }
  }
  useEffect(() => {
    function refreshData() {
      fetch('http://10.10.200.10:3001/api/servers')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATESERVERS',
            payload: json,
          });
        });
      fetch('http://10.10.200.10:3001/api/nodes')
        .then((response) => response.json())
        .then((json) => {
          fetchCurrentPerfMonData(json);
        });

      fetch('http://10.10.200.10:8000/api/server')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_STREAMINGSTATS',
            payload: json,
          });
        });

      fetch('http://10.10.200.10:8000/api/streams')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_STREAMS',
            payload: json,
          });
        });
    }

    refreshData();

    setInterval(() => {
      refreshData();
    }, 365000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <IconContext.Provider value={{ size: 42 }}>
            <IoCameraOutline />
          </IconContext.Provider>{' '}
          Shreveport Crime Cameras
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('showHome')}>Nodes</Nav.Link>
          <Nav.Link onClick={() => navigate('showVMS')}>Videos</Nav.Link>
          <Nav.Link onClick={() => navigate('showNodeManager')}>Node Manager</Nav.Link>
          <Nav.Link onClick={() => navigate('showSystemManager')}>System Manager</Nav.Link>

          {state.videoPlayerActive ? (
            <NavDropdown title="Date Time" id="nav-dropdown">
              <Card className="text-center">
                <h4>Select Date and Time</h4>
                <Calendar onClickDay={(e) => updateHomeVideoDate(e)} value={state.homeVideoDate} />
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Hour</Form.Label>
                      <Form.Control as="select" onChange={(e) => updateHomeTimeHour(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      {' '}
                      <Form.Label>Minutes</Form.Label>
                      <Form.Control as="select" onChange={(e) => updateHomeTimeMin(e.target.value)}>
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      {' '}
                      <Form.Label>AM/PM</Form.Label>
                      <Form.Control as="select" onChange={(e) => updateHomeTimeAMPM(e.target.value)}>
                        <option>AM</option>
                        <option>PM</option>
                      </Form.Control>
                    </Col>
                  </Row>
                  <br />
                </Form>
                <NavDropdown.Divider />
                <Button>Fetch Videos</Button>
              </Card>
            </NavDropdown>
          ) : (
            <></>
          )}
          {state.showVMS && (
            <NavDropdown title="Select Nodes" id="nav-dropdown">
              {state.selectedNodeVMS.selectedNode1}

              {state.selectedNodeVMS.selectedNode2}

              {state.selectedNodeVMS.selectedNode3}

              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      updateSelectedNodeModalVMS({ modalCameraOpen: true, camButtonSelected: 'selectedNode1' })
                    }
                  >
                    Camera 1
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      updateSelectedNodeModalVMS({ modalCameraOpen: true, camButtonSelected: 'selectedNode2' })
                    }
                  >
                    Camera 2
                  </Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      updateSelectedNodeModalVMS({ modalCameraOpen: true, camButtonSelected: 'selectedNode2' })
                    }
                  >
                    Camera 3
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </NavDropdown>
          )}
        </Nav>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end marginLogidIn">
          <Navbar.Text>Signed in as: Jack Swayze </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {state.showHome && <Home />}
      {state.showVMS && <VMS />}
      {state.showNodeManager && <NodeManager />}
      {state.showSystemManager && <SystemManager />}
      <Modal
        show={state.selectedNodeModalVMS.modalCameraOpen}
        onHide={() => updateSelectedNodeModalVMS({ modalCameraOpen: false })}
        centered
        size="lg"
      >
        <Card className="text-center" bg="dark" text="light">
          <Card.Header as="h5">Selecet Node</Card.Header>
          <CardGroup>
            <Card>
              <Map isMarkerShown />
            </Card>
            <Card>
              <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
              </Form>
              {state.nodes.map((node) => (
                <ListGroup.Item onClick={() => upDateSelectedCam(node.name)}>{node.name}</ListGroup.Item>
              ))}
            </Card>
          </CardGroup>
        </Card>

        <Card.Footer className="text-muted"></Card.Footer>
      </Modal>
    </>
  );
}
