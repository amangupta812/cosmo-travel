import { useState, useEffect } from "react";

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHotels = async () => {
    try {
      const response = await fetch(
        `https://test.api.amadeus.com/v1/shopping/hotel-offers?cityCode=NYC`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AMADEUS_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Hotels</h2>
      
      {loading && <p>Loading hotels...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.hotel.id} className="border p-4 shadow-md rounded-md">
            <h3 className="font-bold text-lg">{hotel.hotel.name}</h3>
            <p>{hotel.hotel.address.cityName}, {hotel.hotel.address.countryCode}</p>
            <p>Rating: {hotel.hotel.rating || "N/A"}</p>
            <p>Price: {hotel.offers[0]?.price?.total || "N/A"} {hotel.offers[0]?.price?.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
