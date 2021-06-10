import Home from './Home/home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useEffect } from 'react';
import NodeManager from './NodeManager/settingsNodeManager';
import SystemManager from './SystemSettings/settingsSystemManager';
import VMS from './VMS/vms';
import { GlobalContext } from '../contexts/globalContext';
import { IconContext } from 'react-icons';
import { IoCameraOutline } from 'react-icons/io5';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);

  function navigate(screen) {
    dispatch({
      type: screen,
      payload: true,
    });
  }
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
          <Nav.Link onClick={() => navigate('showHome')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('showVMS')}>VMS</Nav.Link>
          <Nav.Link onClick={() => navigate('showNodeManager')}>Node Manager</Nav.Link>
          <Nav.Link onClick={() => navigate('showSystemManager')}>System Manager</Nav.Link>
        </Nav>
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
