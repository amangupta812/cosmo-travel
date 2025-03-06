/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchHotels } from "../api/fetchHotels";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [cityCode, setCityCode] = useState("DEL"); // Default city (Delhi)

  useEffect(() => {
    fetchHotels(cityCode).then(setHotels);
  }, [cityCode]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hotels in {cityCode}</h2>

      {/* City Search Input */}
      <input
        type="text"
        placeholder="Enter city code (e.g., NYC, LON, DEL)"
        value={cityCode}
        onChange={(e) => setCityCode(e.target.value.toUpperCase())}
        className="border p-2 mb-4"
      />

      {/* Hotel List */}
      <div className="grid grid-cols-3 gap-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.hotelId} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p>Hotel ID: {hotel.hotelId}</p>
              <p>Rating: ⭐⭐⭐⭐ (Sample Rating)</p>
            </div>
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
