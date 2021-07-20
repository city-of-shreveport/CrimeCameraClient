import Home from './Home/home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NodeManager from './NodeManager/settingsNodeManager';
import React, { useContext, useEffect } from 'react';
import RecordingViewer from './videos/RecordingViewer';
import SystemManager from './SystemSettings/settingsSystemManager';
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
            showRecordingViewer: false,
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
            showRecordingViewer: true,
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

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  function fetchCurrentPerfMonData(nodedata) {
    var nodeArray = [];
    var numberOfNodesUp = 0;
    var totalNumberOfNodes = nodedata.length;

      nodedata.map((nodedataitem) => {

        setTimeout(() => {
      fetch('http://rtcc-server.shreveport-it.org/api/perfmons/' + nodedataitem.name)
        .then((response) => response.json())
        // eslint-disable-next-line
        .then((json) => {
          let nodeDataPerfMon = nodedataitem;
          nodeDataPerfMon.perfmon = json[0];
          var difference = getDifferenceInMinutes(new Date(nodedataitem.lastCheckIn), new Date());

          if (difference > 15) {
            nodeDataPerfMon.nodeStatus = false;
          } else {
            nodeDataPerfMon.nodeStatus = true;
            numberOfNodesUp++;
          }

          nodeArray.push(nodeDataPerfMon);
        })
        // eslint-disable-next-line
        .then(() => {
          dispatch({
            type: 'setState',
            payload: { nodes: nodeArray, numberOfNodes: totalNumberOfNodes, numberOfNodesUp: numberOfNodesUp },
          });
        });
         },3000)
    })
       
  }

  useEffect(() => {
    // eslint-disable-next-line
    function refreshStreamerStats() {
      fetch('http://rtcc-server.shreveport-it.org/api/perfMons/CrimeCameraSystem')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { serverstatistics: json },
          });
        });

      let currentStreams = [];

      fetch('http://rtcc-server.shreveport-it.org/api/streams/streamingserverstats')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { restreamerserverstatistics: json },
          });
        });

      fetch('http://rtcc-server.shreveport-it.org/api/streams/streamstatistics/10.10.30.12')
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

      fetch('http://10.10.30.12:8000/api/streams')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { streams: json },
          });
        });
    }

    function refreshData() {
      fetch('http://rtcc-server.shreveport-it.org/api/servers')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'setState',
            payload: { servers: json },
          });
        });

      fetch('http://rtcc-server.shreveport-it.org/api/nodes')
        .then((response) => response.json())
        .then((json) => {
          fetchCurrentPerfMonData(json);
        });
    }

    refreshData();
    //refreshStreamerStats();

    setInterval(() => {
      refreshData();
    }, 365000);

    setInterval(() => {
      //refreshStreamerStats();
    }, 10000);
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
      {state.showRecordingViewer && <RecordingViewer />}
      {state.showNodeManager && <NodeManager />}
      {state.showSystemManager && <SystemManager />}
    </>
  );
}
