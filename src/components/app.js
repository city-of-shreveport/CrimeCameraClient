import Home from './home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useEffect } from 'react';
import Settings from './settings';
import VMS from './vms';
import { Container } from 'semantic-ui-react';
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
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_USERS',
            payload: json,
          });
        });

      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'UPDATE_TODOS',
            payload: json,
          });
        });
    }

    refreshData();

    setInterval(() => {
      refreshData();
    }, 3000);

    // eslint-disable-next-line
  }, []);

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
          <Nav.Link onClick={() => navigate('showHome')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('showVMS')}>VMS</Nav.Link>
          <Nav.Link onClick={() => navigate('showSettings')}>Setting</Nav.Link>
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
