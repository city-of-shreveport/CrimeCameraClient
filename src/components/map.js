import GMap from './gmap';
import React, { useState, useEffect } from 'react';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const Map = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return <div className="App">{!loadMap ? <div>Loading...</div> : <GMap />}</div>;
};

export default Map;
