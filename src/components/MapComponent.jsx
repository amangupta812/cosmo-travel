import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.6139, // Delhi Latitude
  lng: 77.2090, // Delhi Longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* New Advanced Marker */}
        <div
          id="marker"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
