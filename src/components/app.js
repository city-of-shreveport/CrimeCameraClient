
import React, { useContext, useEffect } from 'react';
import { ContactContext } from '../contexts/contactContext';
import Home from './home'
import VMS from './vms'
import Settings from './settings'
import { Container } from 'semantic-ui-react';
//BOOTSTRAP THINGS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {IconContext} from "react-icons";
import { IoCameraOutline } from "react-icons/io5";
import "../videoplayer.css";

import '../index.css';
export default function App() {
    const [state, dispatch] = useContext(ContactContext);

  const showHome = () => {
    dispatch({
      type: 'showHideHome',
      payload: true,
    });
    console.log(state)
  };
const showVMS = () => {
    dispatch({
      type: 'showHideVMS',
      payload: true,
    });
    console.log(state)
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
         <IconContext.Provider value={{ size:42}}>
      <IoCameraOutline />
    </IconContext.Provider>
        {' '}
        Shreveport Crime Cameras
        </Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link onClick={() => showHome()}>Home</Nav.Link>
      <Nav.Link onClick={() => showVMS()} >VMS</Nav.Link>
      <Nav.Link onClick={() => showSettings()}>Setting</Nav.Link>
    </Nav>
        <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Jack Swayze</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
  <ContactContext.Provider>
    {state.showHome && <Home/>}
    {state.showVMS && <VMS/>}
</ContactContext.Provider>

    </Container>
  );
}