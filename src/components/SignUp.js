/* eslint-disable */
import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwZXJpc3RpYyIsImEiOiJjazZiNjBqNGcwNXVwM2ZwYXVjbXYxcjN1In0.LOlEd0VqKmMkO9qWIPd5jA';

const SignUp = () => {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [-2.81361, 36.77271], // starting position [lng, lat]
    zoom: 13, // starting zoom
  });
  const layerList = document.getElementById('menu');
  const inputs = layerList.getElementsByTagName('input');

  for (const input of inputs) {
    input.onclick = (layer) => {
      const layerId = layer.target.id;
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
  }
  return (
    <div>
      <h1>Sign up</h1>
      <div id="map"></div>

      <div id="menu">
        <input
          id="satellite-v9"
          type="radio"
          name="rtoggle"
          value="satellite"
          checked="checked"
        />
        <label for="satellite-v9">satellite</label>
        <input id="light-v10" type="radio" name="rtoggle" value="light" />
        <label for="light-v10">light</label>
        <input id="dark-v10" type="radio" name="rtoggle" value="dark" />
        <label for="dark-v10">dark</label>
        <input id="streets-v11" type="radio" name="rtoggle" value="streets" />
        <label for="streets-v11">streets</label>
        <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" />
        <label for="outdoors-v11">outdoors</label>
      </div>
    </div>
  );
};

export default SignUp;
