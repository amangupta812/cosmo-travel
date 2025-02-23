import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.310696, // vadodara Latitude
  lng: 73.192635, // vadodara Longitude
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />;
};

export default MapComponent;
