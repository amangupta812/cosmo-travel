import React, { useEffect, useState } from "react";
import axios from "axios";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tours");
        setTours(response.data);
        setFilteredTours(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Filter function
  useEffect(() => {
    let filtered = tours;

    if (location) {
      filtered = filtered.filter(tour => tour.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter(tour => tour.price >= min && tour.price <= max);
    }

    if (duration) {
      filtered = filtered.filter(tour => tour.duration.toLowerCase().includes(duration.toLowerCase()));
    }

    setFilteredTours(filtered);
  }, [location, priceRange, duration, tours]);

  if (loading) return <p className="text-center">Loading tours...</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Available Tours</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <input 
          type="text" 
          placeholder="Search by location..." 
          className="border p-2 rounded-md" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        />
        <select className="border p-2 rounded-md" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">Select Price Range</option>
          <option value="0-5000">Under $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-20000">$10,000 - $20,000</option>
          <option value="20000-50000">Above $20,000</option>
        </select>
        <select className="border p-2 rounded-md" value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">Select Duration</option>
          <option value="1 day">1 Day</option>
          <option value="2 days">2 Days</option>
          <option value="3 days">3 Days</option>
          <option value="4 days">4+ Days</option>
        </select>
      </div>

      {filteredTours.length === 0 ? (
        <p className="text-center text-gray-500">No tours available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <div key={tour._id} className="border rounded-lg shadow-lg p-4">
              <img
                src={tour.images[0] || "https://via.placeholder.com/300"}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-3">{tour.title}</h2>
              <p className="text-gray-600">{tour.description}</p>
              <p className="text-blue-500 font-bold mt-2">${tour.price}</p>
              <p className="text-sm text-gray-500">{tour.duration}</p>
              <button 
                onClick={() => window.location.href=`/tours/${tour._id}`} 
                className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tours;
