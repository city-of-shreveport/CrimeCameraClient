import GoogleMapReact from 'google-map-react';
import React, { useContext } from 'react';
import isEmpty from 'lodash.isempty';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';

export default function GoogleMap() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleApiLoaded = (map, maps) => {
    var bounds = new maps.LatLngBounds();
    const markers = [];
    let nodeIcon = '';
    var timesRunGetNodes = 0;
    var intervalGetNodes = setInterval(() => {
      timesRunGetNodes += 1;
      if (timesRunGetNodes === 10) {
        clearInterval(intervalGetNodes);
      }

      // eslint-disable-next-line
      state.nodes.map((node) => {
        var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());
        if (difference < 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png';
        }
        if (difference > 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png';
        }
        var myLatLng = new maps.LatLng(node.config.locationLat, node.config.locationLong);
        if (markers.indexOf({ node: node.name }) === -1) {
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
        }
        map.fitBounds(bounds);
      });

      markers.forEach((marker, i) => {
        marker.addListener('click', () => {
          dispatch({
            type: 'setState',
            payload: {
              previousNode: tryValue(() => {
                return state.currentNodeInfo.name;
              }),
              videoStreamingplayerPlaying: false,
              videoPlayerStreamingActive: false,
              currentNodeInfo: { name: marker.node },
              videoPlayerActive: true,
              videoStreamingURLS: {
                camera1: 'http://rtcc-server.shreveport-it.org:8000/' + marker.node + '/camera1.flv',
                camera2: 'http://rtcc-server.shreveport-it.org:8000/' + marker.node + '/camera2.flv',
                camera3: 'http://rtcc-server.shreveport-it.org:8000/' + marker.node + '/camera3.flv',
              },
              VideoSnapShotURLS: {
                camera1: 'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + marker.node + '/camera1',
                camera2: 'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + marker.node + '/camera2',
                camera3: 'http://rtcc-server.shreveport-it.org/api/cameraConfig/snapshot/' + marker.node + '/camera3',
              },
              videStremingPlayers: {
                videoStreamerPlayer1Buffer: false,
                videoStreamerPlayer2Buffer: false,
                videoStreamerPlayer3Buffer: false,
              },
            },
          });
          console.log(marker.node);
        });
      });
    }, 1000);
  };

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

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
