/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { budgetPlaces } from "../../data/budgetData";



const BudgetTravel = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("both"); // "hotels" | "restaurants" | "both"

  const cities = [...new Set([...budgetPlaces.restaurants, ...budgetPlaces.hotels].map((place) => place.city))];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Budget Travel Guide</h2>

      {/* Selection Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        {/* Category Selection */}
        <div>
          <label className="text-lg font-semibold mr-2">Choose Category:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="both">Hotels & Restaurants</option>
            <option value="hotels">Only Hotels</option>
            <option value="restaurants">Only Restaurants</option>
          </select>
        </div>

        {/* City Selection */}
        
        <div>
          <label className="text-lg font-semibold mr-2">Choose a City:</label>
          <select
            onChange={(e) => setSelectedCity(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">All Cities</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Budget Input */}
        <div>
          <label className="text-lg font-semibold mr-2">Enter Budget (₹):</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Display Hotels (if selected) */}
      {category !== "restaurants" && (
        <>
          <h3 className="text-xl font-semibold mt-6 mb-3">🏨 Budget Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPlaces.hotels
              .filter((place) => (!selectedCity || place.city === selectedCity) && (!budget || place.price <= budget))
              .map((hotel, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg border">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-gray-600">📍 {hotel.location}, {hotel.city}</p>
                  <p className="text-gray-700">💰 Price: ₹{hotel.price}</p>
                </div>
              ))}
          </div>
        </>
      )}

      {/* Display Restaurants (if selected) */}
      {category !== "hotels" && (
        <>
          <h3 className="text-xl font-semibold mt-6 mb-3">🍽️ Budget Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetPlaces.restaurants
              .filter((place) => (!selectedCity || place.city === selectedCity) && (!budget || place.price <= budget))
              .map((restaurant, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg border">
                  <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                  <p className="text-gray-600">📍 {restaurant.location}, {restaurant.city}</p>
                  <p className="text-gray-700">💰 Price: ₹{restaurant.price}</p>
                  <a href={restaurant.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    📍 View on Google Maps
                  </a>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetTravel;
