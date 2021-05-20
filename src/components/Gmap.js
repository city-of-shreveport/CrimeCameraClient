import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
const GMap = () => {
  const [, dispatch] = useContext(GlobalContext);
  const getCameraInfo = (node) => {
    fetch('http://10.10.10.55:3001/cameras/getCameraInfo/' + node)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'UPDATECURRENTCAMINFO',
          payload: json,
        });
      });
  };
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
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

  // eslint-disable-next-line
  let markerList = [];
  //YA
  // list of the marker object along with icon

  useEffect(() => {
    // eslint-disable-next-line
    googleMap = initGoogleMap();
    function getCams() {
      fetch('http://3.136.163.132:3001/cameras/nodeList')
        .then((response) => response.json())
        .then((json) => {
          // eslint-disable-next-line
          markerList = json;

          // eslint-disable-next-line

          //var bounds = new window.google.maps.LatLngBounds();
          // eslint-disable-next-line
          json.map((cam) => {
            const marker = createMarker(
              {
                lat: cam.location.lat,
                lng: cam.location.lng,
                icon: cam.systemOK ? iconList.pinGreen : iconList.pinRed,
              },
              cam
            );
            //bounds.extend(marker.position);
            marker.addListener('click', () => {
              getCameraInfo(cam.nodeName);
              console.log(marker.nodeName);
            });
          });
        });
    }
    getCams();
    setInterval(() => {
      getCams();
    }, 30000);
    //googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);

  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 32.4918622, lng: -93.7550222 },
      zoom: 12,
    });
  };

  // create marker on google map
  const createMarker = (markerObj, cam) =>
    new window.google.maps.Marker({
      position: { lat: markerObj.lat, lng: markerObj.lng },
      map: googleMap,
      nodeName: cam.nodeName,
      icon: {
        url: markerObj.icon,
        // set marker width and height
        scaledSize: new window.google.maps.Size(50, 50),
      },
    });

  return <div ref={googleMapRef} style={{ width: '100%', height: 600 }} />;
};

export default GMap;
