import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
var infowindow;

const GMap = () => {
  const [state, dispatch] = useContext(GlobalContext);

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  const startStream = (json) => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/streams/start/' + json.name + '/' + json.config.ip).then(
      (response) => {}
    );
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
  };

  const stopStream = () => {
    fetch(
      'http://rtcc-server.shreveport-it.org:3000/api/streams/stop/' +
        tryValue(() => {
          return state.currentNodeInfo.name;
        })
    ).then((response) => {});
  };

  function fetchCurrentPerfMonData(nodedata) {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/perfmons/' + nodedata.name)
      .then((response) => response.json())
      .then((json) => {
        nodedata.perfmon = json[0];
      })
      .then(() => {
        startStream(nodedata);
      });
  }

  const getNodeInfo = (node) => {
    stopStream();

    fetch('http://rtcc-server.shreveport-it.org:3000/api/nodes/' + node)
      .then((response) => response.json())
      .then((json) => {
        fetchCurrentPerfMonData(json);
      });
  };

  const googleMapRef = useRef(null);
  let googleMap = null;

  const iconList = {
    pinGreen: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png',
    pinYellow: 'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png',
    pinRed: 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png',
    track0: 'http://earth.google.com/images/kml-icons/track-directional/track-0.png',
    track1: 'http://earth.google.com/images/kml-icons/track-directional/track-1.png',
    track2: 'http://earth.google.com/images/kml-icons/track-directional/track-2.png',
    track3: 'http://earth.google.com/images/kml-icons/track-directional/track-3.png',
    track4: 'http://earth.google.com/images/kml-icons/track-directional/track-4.png',
    track5: 'http://earth.google.com/images/kml-icons/track-directional/track-5.png',
    track6: 'http://earth.google.com/images/kml-icons/track-directional/track-6.png',
    track7: 'http://earth.google.com/images/kml-icons/track-directional/track-7.png',
    track8: 'http://earth.google.com/images/kml-icons/track-directional/track-8.png',
    track9: 'http://earth.google.com/images/kml-icons/track-directional/track-9.png',
    track10: 'http://earth.google.com/images/kml-icons/track-directional/track-10.png',
    track11: 'http://earth.google.com/images/kml-icons/track-directional/track-11.png',
    track12: 'http://earth.google.com/images/kml-icons/track-directional/track-12.png',
    track13: 'http://earth.google.com/images/kml-icons/track-directional/track-13.png',
    track14: 'http://earth.google.com/images/kml-icons/track-directional/track-14.png',
    track15: 'http://earth.google.com/images/kml-icons/track-directional/track-15.png',
  };

  useEffect(() => {
    // eslint-disable-next-line
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    var cameraSnapShot = null;
    var nodeStatus = false;
    function getCams() {
      fetch('http://rtcc-server.shreveport-it.org:3000/api/nodes')
        .then((response) => response.json())
        .then((json) => {
          // eslint-disable-next-line

          // eslint-disable-next-line
          json.map((node) => {
            var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());

            if (difference > 15) {
              nodeStatus = false;
            } else {
              nodeStatus = true;
            }

            const marker = createMarker(
              {
                lat: node.config.locationLat,
                lng: node.config.locationLong,
                icon: nodeStatus ? iconList.pinGreen : iconList.pinRed,
              },
              node
            );

            bounds.extend(marker.position);

            marker.addListener('mouseover', function () {
              infowindow.setContent(
                "<img id='imgCamera1' width='200' height='150' src='http://"+ marker.nodeIP +":8090/camera1.jpg' alt='Logo'"  +
                 
            
                  "<img id='imgCamera2' width='200' height='150' src='http://"+ marker.nodeIP +":8090/camera2.jpg' alt='Logo'"  +
           
                
                  "<img id='imgCamera3' width='200' height='150' src='http://"+ marker.nodeIP +":8090/camera3.jpg' alt='Logo'" 
                  
              );
              infowindow.open(initGoogleMap, marker);
            });

            marker.addListener('mouseout', function () {
              infowindow.close();
            });

            marker.addListener('click', () => {
              clearInterval(cameraSnapShot);
              getNodeInfo(marker.nodeName);
            });
          });
        });
    }

    infowindow = new window.google.maps.InfoWindow();
  }, []);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 32.4368622, lng: -93.7550222 },
      zoom: 12,
    })
   

  };
  setInterval(() => {
    getCams();
  }, 360000);
  getCams();
  const createMarker = (markerObj, node) =>
    new window.google.maps.Marker({
      position: { lat: markerObj.lat, lng: markerObj.lng },
      map: googleMap,
      nodeName: node.name,
      icon: {
        url: markerObj.icon,
        scaledSize: new window.google.maps.Size(50, 50),
      },
      nodeIP: node.config.ip,
    });

  return <div id="googleMapDIV" ref={googleMapRef} style={{ width: '100%', height: '1024px' }} />;
};

export default GMap;
