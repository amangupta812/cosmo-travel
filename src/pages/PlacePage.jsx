// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from 'react-map-gl';

export default function PlacePage() {
  const { placeName } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/places/${placeName}`);
        if (!response.ok) {
          throw new Error('Place not found');
        }
        const data = await response.json();
        setPlace(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlace();
  }, [placeName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!place) return null;

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-2">{place.name}</h1>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white">{place.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-600">{place.description}</p>
              </div>
              
              <div className="h-64">
                <Map
                  initialViewState={{
                    longitude: place.location.coordinates[0],
                    latitude: place.location.coordinates[1],
                    zoom: 11
                  }}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken="YOUR_MAPBOX_TOKEN"
                >
                  {/* Add markers or other map features here */}
                </Map>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              {place.reviews && place.reviews.length > 0 ? (
                <div className="space-y-4">
                  {place.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.user}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <span className="text-sm text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}