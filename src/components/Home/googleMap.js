
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
import GoogleMapReact from 'google-map-react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
let nodes = []
var nodeStatus = false


const infoWindoContent = "<div className='chartBox'>"+
  "<img id='imgCamera1' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/CrimeCamera001/camera1' alt='Logo' />"+
  "<img id='imgCamera2' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/CrimeCamera001/camera2' alt='Logo' />"+
  "<img id='imgCamera3' width='200' height='150' src='http://10.10.30.10:3001/api/cameraConfig/snapshot/CrimeCamera001/camera3' alt='Logo' />"+
  
"</div>"
const handleApiLoaded = (map, maps) => {

const markers = [];
  const infowindows = [];

 nodes.map((node) => {

  var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());
   
            if (difference < 15) {
           
              
            
    markers.push(new maps.Marker({
      position: {
        lat: node.config.locationLat,
        lng: node.config.locationLong,

      },
      map,
      icon:"http://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
      label: {text: node.name.substr(node.name.length - 3),
        fontFamily: "Material Icons",
      color: "black",
      
      fontSize: "18px",
    }
    }));

    infowindows.push(new maps.InfoWindow({
      content: infoWindoContent,
    }));
  }
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
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


export default function GoogleMap(){
    const [state, dispatch] = useContext(GlobalContext);
    fetch('http://10.10.30.10:3001/api/nodes')
        .then((response) => response.json())
        .then((json) => {nodes=json});
    const handleCloseHomeMapVideoStreamerModal = (node) => {
   
    dispatch({
      type: 'setState',
      payload: { homeMapModalVideoStreamer: false },
    });
  };

const handleOpenVideoStreamer = (node) => {
  console.log(node['node'])
    fetch('http://10.10.30.10:3001/api/nodes/' + node['node'])
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
       
      dispatch({
      type: 'setState',
      payload: { previousNode: tryValue(() => {
                  return state.currentNodeInfo.name
                }), currentNodeInfo: json, videoPlayerActive: true },
    });
     })
    
  };
const AnyReactComponent = ({ text, status, node }) => 
 
  <Button  id={text} key={text} variant={status} onClick={() => handleOpenVideoStreamer({node})}>{text}</Button>;
  const displayMarkers = () => {
    return state.nodes.map((node, index) => {

      
      return <AnyReactComponent
            lat={node.config.locationLat}
            lng={node.config.locationLong}
            text={node.name.substr(node.name.length - 3)}
            node={node.name}
            status={nodeStatus}
          />
    })
  }

  return (
        <div id="googleMapDIV" style={{ height: '90vh', width: '100%' }}>
        {!isEmpty(state.nodes) && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI' }}
            defaultCenter={{lat: 32.4368622, lng: -93.7550222 }}
            defaultZoom={13}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />


          )}
          
          
        </div>
    );

    

}

