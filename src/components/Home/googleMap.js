import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import React, { useRef, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
import GoogleMapReact from 'google-map-react';
import ReactPlayer from 'react-player';
import isEmpty from 'lodash.isempty';
let nodes = [];
var nodeStatus = false;

export default function GoogleMap() {
  const [state, dispatch] = useContext(GlobalContext);



  const handleApiLoaded = (map, maps) => {
    const markers = [];
    const infowindows = [];
    let nodeIcon = ''
    var prev_infowindow =false; 
    var current_infowindow = false;
    const startStreaming =() => {
    
prev_infowindow.setContent("asdfasdfasdfasdf");
          


}
    nodes.map((node) => {
      var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());

      if (difference < 15) {nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png'}
        if (difference > 15) {nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png'}
        markers.push(
          new maps.Marker({
            node: node.name,
            position: {
              lat: node.config.locationLat,
              lng: node.config.locationLong,
              
            },
            map,
            icon: {url: nodeIcon,
            labelOrigin: { x: 33, y: 17}
          },
            label: {
              text: node.name.substr(node.name.length - 3),
              
              color: 'black',

              
            },
          })
        );




        infowindows.push(
          new maps.InfoWindow({
            content: '',
          })
        );
      
    });

    markers.forEach((marker, i) => {
      function helloAlert(){
alert('hello')

}
              const infoWindoContent = "<button id='helloAlert'>Start Streaming</button>"+
                                "<div class='grid-container'>"+
                                  "<div class='grid-item'>"+
                                    "Camera 1"+
                                  "</div>"+
                                  "<div class='grid-item'>"+
                                    "Camera 2"+
                                  "</div>"+
                                
                                  "<div class='grid-item'>"+
                                    "Camera 3"+
                                  "</div>"+
                                  "<div class='grid-item'>"+
                                    "<img id='imgCamera1' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/" + marker.node +
                                      "/camera1' alt='Logo' />"+
                                  "</div>"+
                                  "<div class='grid-item'>"+
                                    "<img id='imgCamera1' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/" + marker.node +
                                      "/camera2' alt='Logo' />"+
                                  "</div>"+
                                
                                  "<div class='grid-item'>"+
                                    "<img id='imgCamera1' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/" + marker.node +
                                      "/camera3' alt='Logo' />"+
                                  "</div>"+
                                
                            "</div>"
      marker.addListener('click', () => {
        if( prev_infowindow ) {
           prev_infowindow.close();
        }

        prev_infowindow = infowindows[i];
          infowindows[i].setContent(infoWindoContent);

        infowindows[i].open(map, marker);
        current_infowindow = infowindows[i]
      });
    });
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  fetch('http://10.10.30.10:3001/api/nodes')
    .then((response) => response.json())
    .then((json) => {
      nodes = json;
    });
  const handleCloseHomeMapVideoStreamerModal = (node) => {
    dispatch({
      type: 'setState',
      payload: { homeMapModalVideoStreamer: false },
    });
  };

  const handleOpenVideoStreamer = (node) => {
    console.log(node['node']);
    fetch('http://10.10.30.10:3001/api/nodes/' + node['node'])
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
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card></div>
  );
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
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
       
        </GoogleMapReact>
      )}
    </div>
  );
}
