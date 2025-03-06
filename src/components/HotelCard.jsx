/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{hotel.name}</h3>
      <p className="text-gray-600">Hotel ID: {hotel.hotelId}</p>
      {hotel.address && <p>{hotel.address.cityName}, {hotel.address.countryCode}</p>}
      {hotel.rating && <p>⭐ {hotel.rating} Stars</p>}
      {hotel.media && hotel.media.length > 0 && (
        <img src={hotel.media[0].uri} alt={hotel.name} className="w-full h-32 object-cover rounded" />
      )}
    </div>
  );
};

export default HotelCard;
