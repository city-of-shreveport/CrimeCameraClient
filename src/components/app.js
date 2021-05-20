import Home from './home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useEffect } from 'react';
import CamMngr from './settingsCamMngr.js';
import SysMngr from './settingsSysMngr.js';
import VMS from './vms';
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
  useEffect(() => {
    function refreshData() {
      fetch('http://localhost:3001/nodes/list')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_NODES',
            payload: json,
          });
        });
      fetch('http://cc-restreamer.shreveport-it.org/api/server')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_STREAMINGSTATS',
            payload: json,
          });
        });
      fetch('http://cc-restreamer.shreveport-it.org/api/streams')
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
    }, 10000);

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
          <Nav.Link onClick={() => navigate('showCamMngr')}>Camera Manager</Nav.Link>
          <Nav.Link onClick={() => navigate('showSysMngr')}>System Manager</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end marginLogidIn">
          <Navbar.Text>Signed in as: Jack Swayze </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {state.showHome && <Home />}
      {state.showVMS && <VMS />}
      {state.showCamMngr && <CamMngr />}
      {state.showSysMngr && <SysMngr />}
    </>
  );
}
