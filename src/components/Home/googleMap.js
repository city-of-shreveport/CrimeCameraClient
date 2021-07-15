import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line
import React, { useRef, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
import GoogleMapReact from 'google-map-react';
// eslint-disable-next-line
import ReactPlayer from 'react-player';
import isEmpty from 'lodash.isempty';
let nodes = [];
var nodeStatus = false;

export default function GoogleMap() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleApiLoaded = (map, maps) => {
    var bounds = new maps.LatLngBounds();
    const markers = [];
    const infowindows = [];
    let nodeIcon = '';
    var prev_infowindow = false;
    // eslint-disable-next-line
    var current_infowindow = false;

    // eslint-disable-next-line
    nodes.map((node) => {
      var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());

      if (difference < 15) {
        nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png';
      }
      if (difference > 15) {
        nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png';
      }
      var myLatLng = new maps.LatLng(node.config.locationLat, node.config.locationLong);
      markers.push(
        new maps.Marker({
          node: node.name,
          position: {
            lat: node.config.locationLat,
            lng: node.config.locationLong,
          },
          map,
          icon: { url: nodeIcon, labelOrigin: { x: 33, y: 17 } },
          label: {
            text: node.name.substr(node.name.length - 3),

            color: 'black',
          },
        })
      );
      bounds.extend(myLatLng);
      map.fitBounds(bounds);

      infowindows.push(
        new maps.InfoWindow({
          content: '',
        })
      );
    });
    const startStream = (json) => {
      dispatch({
        type: 'setState',
        payload: {
          previousNode: tryValue(() => {
            return state.currentNodeInfo.name;
          }),
          currentNodeInfo: json,
          videoPlayerActive: true,
          videoStreamingURLS: {
            camera1: 'http://rtcc-server.shreveport-it.org:8000/' + json.name + '/camera1.flv',
            camera2: 'http://rtcc-server.shreveport-it.org:8000/' + json.name + '/camera2.flv',
            camera3: 'http://rtcc-server.shreveport-it.org:8000/' + json.name+ '/camera3.flv',
          },
          VideoSnapShotURLS: {
            camera1: "http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/" + json.name +"/camera1",
            camera2: "http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/" + json.name +"/camera2",
            camera3: "http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/" + json.name +"/camera3",
          },
        },
      });
    };

    const stopStream = () => {
      
    };

  function fetchCurrentPerfMonData(nodedata) {
    fetch('http://rtcc-server.shreveport-it.org/api/perfmons/' + nodedata.name)
      .then((response) => response.json())
      .then((json) => {
        nodedata.perfmon = json[0];
      dispatch({
        type: 'setState',
        payload: {
          currentNodeInfo: json
        },
      });
        startStream(nodedata);
      })

  }


    const getNodeInfo = (node) => {
      fetch('http://rtcc-server.shreveport-it.org/api/nodes/' + node)
        .then((response) => response.json())
        .then((json) => {
       
     
          fetchCurrentPerfMonData(json)
        });
    };


    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        dispatch({
        type: 'setState',
        payload: {
          videoStreamingplayerPlaying: false,
          videoPlayerStreamingActive: false,
        },
      });

        getNodeInfo(marker.node);
      });

    });
  };

  // eslint-disable-next-line
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  fetch('http://rtcc-server.shreveport-it.org/api/nodes')
    .then((response) => response.json())
    .then((json) => {
      nodes = json;
    });

  // eslint-disable-next-line

  // eslint-disable-next-line
  const handleOpenVideoStreamer = (node) => {
    console.log(node['node']);
    fetch('http://rtcc-server.shreveport-it.org/api/nodes/' + node['node'])
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        dispatch({
          type: 'setState',
          payload: {
            previousNode: tryValue(() => {
              return state.currentNodeInfo.name;
            }),
            currentNodeInfo: json,
            videoPlayerActive: true,
          },
        });
      });
  };
  const AnyReactComponent = ({ text, status, node }) => (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );

  // eslint-disable-next-line
  const displayMarkers = () => {
    return state.nodes.map((node, index) => {
      return (
        <AnyReactComponent
          lat={node.config.locationLat}
          lng={node.config.locationLong}
          text={node.name.substr(node.name.length - 3)}
          node={node.name}
          status={nodeStatus}
        />
      );
    });
  };

  return (
    <div id="googleMapDIV" style={{ height: '90vh', width: '100%' }}>
      {!isEmpty(state.nodes) && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI' }}
          defaultCenter={{ lat: 32.46, lng: -93.7550222 }}
          defaultZoom={12}
          layerTypes={['TrafficLayer', 'TransitLayer']}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMapReact>
      )}
    </div>
  );
}
