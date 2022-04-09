import GoogleMapReact from 'google-map-react';
import React, { useContext } from 'react';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function GoogleMap() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleApiLoaded = (map, maps) => {
    var bounds = new maps.LatLngBounds();
    const markers = [];
    let nodeIcon = '';

    // eslint-disable-next-line
    var prev_infowindow = false;
    // eslint-disable-next-line
    var current_infowindow = false;

    // eslint-disable-next-line
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    var status = '';
    var timesRunGetNodes = 0;
    var intervalGetNodes = setInterval(() => {
      timesRunGetNodes += 1;
      if (timesRunGetNodes === 10) {
        clearInterval(intervalGetNodes);
      }

      // eslint-disable-next-line
      state.nodes.map((node) => {
        var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());
        if (difference < 7200) {
        if (difference < 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png';
          status = 'up';
        }
        if (difference > 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png';
          status = 'down';
        }
        var myLatLng = new maps.LatLng(node.config.locationLat, node.config.locationLong);
        if (markers.indexOf({ node: node.name }) === -1) {
          markers.push(
            new maps.Marker({
              node: node.name,
              nodeIP: node.config.ip,
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
              status: status,
            })
          );
          bounds.extend(myLatLng);
        }
        map.fitBounds(bounds);
      }
      });

      markers.forEach((marker, i) => {
        if (marker.status === 'up') {
          marker.addListener('click', () => {
            dispatch({
              type: 'setState',
              payload: {
                
                currentNodeInfo: { 
                  name: marker.node,
                  ip: marker.nodeIP 
                },
                modalChooseVideoBoxShow: true,
                clickedcamera1: "http://"+ marker.nodeIP  +":8090/camera1.mjpeg",
                clickedcamera2: "http://"+ marker.nodeIP  +":8090/camera2.mjpeg",
                clickedcamera3: "http://"+ marker.nodeIP  +":8090/camera3.mjpeg",
              },
            });

        
         
            
     
          
            console.log(marker.node);
       
          });
        }
      });
    }, 500);
  };

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  return (
    <div id="googleMapDIV" style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI' }}
        defaultCenter={{ lat: 32.46, lng: -93.7550222 }}
        defaultZoom={11}
        layerTypes={['TrafficLayer', 'TransitLayer']}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
