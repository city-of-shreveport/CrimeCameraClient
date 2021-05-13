import '../css/index.css';
import '../css/videoplayer.css';
import Home from './home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react';
import Settings from './settings';
import VMS from './vms';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';
import { IconContext } from 'react-icons';
import { IoCameraOutline } from 'react-icons/io5';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);

  const showHome = () => {
    dispatch({
      type: 'showHideHome',
      payload: true,
    });
  };

  const showVMS = () => {
    dispatch({
      type: 'showHideVMS',
      payload: true,
    });
  };

  const showSettings = () => {
    dispatch({
      type: 'showHideSettings',
      payload: true,
    });
  };

  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <IconContext.Provider value={{ size: 42 }}>
            <IoCameraOutline />
          </IconContext.Provider>{' '}
          Shreveport Crime Cameras
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link onClick={() => showHome()}>Home</Nav.Link>
          <Nav.Link onClick={() => showVMS()}>VMS</Nav.Link>
          <Nav.Link onClick={() => showSettings()}>Setting</Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Jack Swayze</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      {state.showHome && <Home />}
      {state.showVMS && <VMS />}
      {state.showSettings && <Settings />}
    </Container>
  );
}
