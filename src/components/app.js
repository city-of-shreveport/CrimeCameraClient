import Home from './Home/home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NodeManager from './NodeManager/settingsNodeManager';
import React, { useContext, useEffect } from 'react';
import SystemManager from './SystemSettings/settingsSystemManager';
import VMS from './VMS/vms';
import { GlobalContext } from '../contexts/globalContext';
import { IconContext } from 'react-icons';
import { IoCameraOutline } from 'react-icons/io5';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);

  function navigate(screen) {
    switch (screen) {
      case 'streams':
        dispatch({
          type: 'setState',
          payload: {
            showHome: true,
            showNodeManager: false,
            showVMS: false,
            showSystemManager: false,
            videoPlayerActive: false,
          },
        });
        break;
      case 'videos':
        dispatch({
          type: 'setState',
          payload: {
            showHome: false,
            showNodeManager: false,
            showVMS: true,
            showSystemManager: false,
            videoPlayerActive: false,
          },
        });
        break;
      case 'nodes':
        dispatch({
          type: 'setState',
          payload: {
            showHome: false,
            showNodeManager: true,
            showVMS: false,
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
            showVMS: false,
            showSystemManager: true,
            videoPlayerActive: false,
          },
        });
        break;
      default:
        break;
    }
  }

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
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

          if (difference > 15) {
            nodeDataPerfMon.nodeStatus = false;
          } else {
            nodeDataPerfMon.nodeStatus = true;
          }

          nodeArray.push(nodeDataPerfMon);
        })
        .then(() => {
          dispatch({
            type: 'setState',
            payload: { nodes: nodeArray },
          });
        });
    }
  }

  useEffect(() => {
    function refreshStreamerStats() {
      fetch('http://10.10.10.10:3001/api/perfMons/CrimeCameraSystem')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { serverstatistics: json },
          });
        });

      let currentStreams = [];

      fetch('http://10.10.10.10:3001/api/streams/streamingserverstats')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { restreamerserverstatistics: json },
          });
        });

      fetch('http://10.10.10.10:3001/api/streams/streamstatistics/10.10.10.10')
        .then((response) => response.json())
        .then((json) => {
          try {
            Object.keys(json.streams).forEach(function (key) {
              currentStreams.push({
                streamName: key,
                streamInfo: json.streams[key],
              });

              dispatch({
                type: 'setState',
                payload: { restreamerStreamsStats: currentStreams },
              });
            });
          } catch (e) {
            dispatch({
              type: 'setState',
              payload: { restreamerStreamsStats: currentStreams },
            });
          }
        });

      fetch('http://10.10.10.10:8000/api/streams')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { streams: json },
          });
        });
    }

    function refreshData() {
      fetch('http://10.10.10.10:3001/api/servers')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { servers: json },
          });
        });

      fetch('http://10.10.10.10:3001/api/nodes')
        .then((response) => response.json())
        .then((json) => {
          fetchCurrentPerfMonData(json);
        });
    }

    refreshData();
    refreshStreamerStats();

    setInterval(() => {
      refreshData();
    }, 365000);

    setInterval(() => {
      refreshStreamerStats();
    }, 1000);
    // eslint-disable-next-line
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
          <Nav.Link onClick={() => navigate('streams')}>Streams</Nav.Link>
          <Nav.Link onClick={() => navigate('videos')}>Videos</Nav.Link>
          <Nav.Link onClick={() => navigate('nodes')}>Nodes</Nav.Link>
          <Nav.Link onClick={() => navigate('system')}>System</Nav.Link>
        </Nav>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end marginLogidIn">
          <Navbar.Text></Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {state.showHome && <Home />}
      {state.showVMS && <VMS />}
      {state.showNodeManager && <NodeManager />}
      {state.showSystemManager && <SystemManager />}
    </>
  );
}
