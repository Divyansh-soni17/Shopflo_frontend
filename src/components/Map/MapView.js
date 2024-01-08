import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";

const TOKEN =
  "pk.eyJ1Ijoic2hvYmhpdGthbyIsImEiOiJjbHI0dGUyZXgwbXRlMmtyMTEyMmJqMDUxIn0.-c5KVVZyg1Xi1PrruVfOxg";

const MapView = ({ places }) => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <>
      <div className="h-screen">
        <Map
          mapboxAccessToken={TOKEN}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/shobhitkao/clr4u772m01fv01qw9ts6acoz"
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              longitude={place.longitude}
              latitude={place.latitude}
            >
              <div>
                <span className="bg-yellow-500 p-1 text-lg font-semibold">
                  ${place.price}
                </span>
              </div>
            </Marker>
          ))}
        </Map>
      </div>
    </>
  );
};

export default MapView;
