
import React from 'react';

import Home from './home'
import { Container } from 'semantic-ui-react';
//BOOTSTRAP THINGS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {IconContext} from "react-icons";
import { IoCameraOutline } from "react-icons/io5";


import '../index.css';
export default function App() {
    
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
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">VMS</Nav.Link>
      <Nav.Link href="#pricing">Setting</Nav.Link>
    </Nav>
        <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
    
<Home/>


    </Container>
  );
}