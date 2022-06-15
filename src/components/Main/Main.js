/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import './main.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwZXJpc3RpYyIsImEiOiJjazZiNjBqNGcwNXVwM2ZwYXVjbXYxcjN1In0.LOlEd0VqKmMkO9qWIPd5jA';

const Main = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(18);
  const [lat, setLat] = useState(59.31);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    // if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <h1>Main page</h1>
      <div>
        <div ref={mapContainer} className="map-container" />
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
};

export default Main;

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken =
// 'pk.eyJ1IjoibWFwZXJpc3RpYyIsImEiOiJjazZiNjBqNGcwNXVwM2ZwYXVjbXYxcjN1In0.LOlEd0VqKmMkO9qWIPd5jA';

// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11',
// });

// mapbox://styles/maperistic/ckzd4gzfs003g14l9gob7bdk3

// static tiles
// https://api.mapbox.com/styles/v1/{maperistic}/{ckzd4gzfs003g14l9gob7bdk3}/tiles/{256}/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFwZXJpc3RpYyIsImEiOiJjazZiNjBqNGcwNXVwM2ZwYXVjbXYxcjN1In0.LOlEd0VqKmMkO9qWIPd5jA
