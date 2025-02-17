import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [28.6139, 77.2090]; // Default center (Delhi, India)

  return (
    <MapContainer center={position} zoom={10} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Welcome to Cosmo Travel!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
