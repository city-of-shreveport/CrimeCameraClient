
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NodeManager from './NodeManager/settingsNodeManager';
import React, { useContext, useEffect } from 'react';
import SystemManager from './SystemSettings/settingsSystemManager';
import { GlobalContext } from '../contexts/globalContext';
import { IconContext } from 'react-icons';
import { IoCameraOutline } from 'react-icons/io5';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);

  function navigate(screen) {
    switch (screen) {
      
      case 'nodes':
        dispatch({
          type: 'setState',
          payload: {
            showHome: false,
            showNodeManager: true,
            showRecordingViewer: false,
            showSystemManager: false,
            videoPlayerActive: false,
          },
        });
        break;
      case 'system':
        dispatch({
          type: 'setState',
          payload: {
            showHome: false,
            showNodeManager: false,
            showRecordingViewer: false,
            showSystemManager: true,
            videoPlayerActive: false,
          },
        });
        break;
      default:

        break;
    }
    
  }
  function getServers(){
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      dispatch({
        type: 'setState',
        payload: { servers: json },
      });
   
    });
    


  }
  function getNodes(){
    fetch('http://rtcc-server.shreveport-it.org:3000/api/nodes')
    .then((response) => response.json())
    .then((json) => {
      
      dispatch({
        type: 'setState',
        payload: { nodes: json },
      });
      console.log(state.nodes)
    });



  }
  

  useEffect(() => {
    setInterval(() => {
      getServers();
      getNodes();
    }, 15000);
    // eslint-disable-next-line
    getServers();
    getNodes();
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <IconContext.Provider value={{ size: 42 }}>
            <IoCameraOutline />
          </IconContext.Provider>{' '}
          Shreveport Crime Cameras
        </Navbar.Brand>
        <Nav className="mr-auto">

          <Nav.Link onClick={() => navigate('nodes')}>Nodes</Nav.Link>
          <Nav.Link onClick={() => navigate('system')}>System</Nav.Link>
        </Nav>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end marginLogidIn">
          <Navbar.Text></Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      

      {state.showNodeManager && <NodeManager />}
      {state.showSystemManager && <SystemManager />}
    </>
  );
}
