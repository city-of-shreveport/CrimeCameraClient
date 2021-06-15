import Home from './Home/home';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Moment from 'react-moment';
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

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  function getDifferenceInHours(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60);
  }

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  function getDifferenceInSeconds(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / 1000;
  }
  function fetchCurrentPerfMonData(nodedata) {
    var nodeArray = [];
    for (let i = 0; i < nodedata.length; i++) {
      fetch('http://10.10.10.10:3001/api/perfmons/' + nodedata[i].name)
        .then((response) => response.json())
        .then((json) => {
          let nodeDataPerfMon = nodedata[i];
          nodeDataPerfMon.perfmon = json[0];
          var difference = getDifferenceInMinutes(new Date(nodedata[i].lastCheckIn), new Date());

          console.log(difference);
          if (difference > 15) {
            nodeDataPerfMon.nodeStatus = false;
          } else {
            nodeDataPerfMon.nodeStatus = true;
          }
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
      fetch('http://10.10.10.10:3001/api/servers')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATESERVERS',
            payload: json,
          });
        });
      fetch('http://10.10.10.10:3001/api/nodes')
        .then((response) => response.json())
        .then((json) => {
          fetchCurrentPerfMonData(json);
        });

      fetch('http://10.10.10.10:8000/api/server')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_STREAMINGSTATS',
            payload: json,
          });
        });

      fetch('http://10.10.10.10:8000/api/streams')
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
          <Nav.Link onClick={() => navigate('showHome')}>Live</Nav.Link>
          <Nav.Link onClick={() => navigate('showVMS')}>Videos</Nav.Link>
          <Nav.Link onClick={() => navigate('showNodeManager')}>Node Manager</Nav.Link>
          <Nav.Link onClick={() => navigate('showSystemManager')}>System Manager</Nav.Link>
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
    </>
  );
}
