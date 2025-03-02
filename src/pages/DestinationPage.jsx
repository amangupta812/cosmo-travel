import { useParams } from "react-router-dom";
import placeData from "../data/placesData";



// Function to format the place name (remove spaces & lowercase)
const formatPlaceName = (name) => {
  return name?.toLowerCase().replace(/\s+/g, "-");
};

export default function PlacePage() {
  const { placeName } = useParams();
  const formattedPlaceName = formatPlaceName(placeName);

  console.log("URL Place Name:", placeName);
  console.log("Formatted Place Name:", formattedPlaceName);
  console.log("Available Places:", Object.keys(placeData));

  const place = placeData[formattedPlaceName];

  if (!place) {
    return <h2 className="text-center text-2xl font-bold">Place Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-800">{place.name}</h1>
  
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-auto max-h-[450px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-lg text-gray-700 mt-6 text-center">{place.description}</p>

      <h3 className="text-3xl font-semibold mt-8 text-gray-900">📍 Top Visiting Places</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {place.topPlaces.map((spot, index) => (
          <a
            key={index}
            href={spot.location}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md p-5 hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              {spot.name}
              <span className="ml-2 text-blue-500 text-sm">(View on Map)</span>
            </h4>
          </a>
        ))}
      </div>

      <h3 className="text-3xl font-semibold mt-8 text-gray-900">🍽️ Top-Rated Foods</h3>
      <div className="flex flex-wrap gap-3 mt-4">
        {place.topFoods.map((food, index) => (
          <span key={index} className="bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-lg font-medium">
            {food}
          </span>
        ))}
      </div>
    </div>
  );
}