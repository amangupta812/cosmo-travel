import { useParams } from "react-router-dom";

const placeData = {
  "taj-mahal": {
    name: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India. It is one of the New 7 Wonders of the World.",
    topPlaces: [
      { name: "Agra Fort", location: "https://www.google.com/maps?q=Agra+Fort" },
      { name: "Mehtab Bagh", location: "https://www.google.com/maps?q=Mehtab+Bagh" },
      { name: "Fatehpur Sikri", location: "https://www.google.com/maps?q=Fatehpur+Sikri" }
    ],
    topFoods: ["Petha", "Mughlai Cuisine", "Dalmoth"]
  },
  "varanasi": {
    name: "Varanasi",
    image: "https://images.lonelyplanetitalia.it/uploads/gettyrf-827065008?q=80&p=slider&s=5595667a6e1e401506daa05413bd405b",
    description: "Varanasi, the spiritual capital of India, is famous for its ancient ghats, temples, and rich cultural heritage.",
    topPlaces: [
      { name: "Kashi Vishwanath Temple", location: "https://www.google.com/maps?q=Kashi+Vishwanath+Temple" },
      { name: "Dashashwamedh Ghat", location: "https://www.google.com/maps?q=Dashashwamedh+Ghat" },
      { name: "Sarnath", location: "https://www.google.com/maps?q=Sarnath" }
    ],
    topFoods: ["Kachori Sabzi", "Banarasi Paan", "Malaiyo"]
  },
  "jaipur": {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Jaipur, the Pink City, is known for its historic palaces, vibrant markets, and rich Rajput culture.",
    topPlaces: [
      { name: "Amber Fort", location: "https://www.google.com/maps?q=Amber+Fort" },
      { name: "Hawa Mahal", location: "https://www.google.com/maps?q=Hawa+Mahal" },
      { name: "City Palace", location: "https://www.google.com/maps?q=City+Palace+Jaipur" }
    ],
    topFoods: ["Dal Baati Churma", "Ghewar", "Laal Maas"]
  },
  "kerala-backwaters": {
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Kerala Backwaters are a network of serene lakes, canals, and rivers offering scenic houseboat experiences.",
    topPlaces: [
      { name: "Alleppey", location: "https://www.google.com/maps?q=Alleppey" },
      { name: "Kumarakom", location: "https://www.google.com/maps?q=Kumarakom" },
      { name: "Vembanad Lake", location: "https://www.google.com/maps?q=Vembanad+Lake" }
    ],
    topFoods: ["Appam", "Puttu", "Fish Curry"]
  },
  "goa-beaches": {
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Goa is a tropical paradise known for its beautiful beaches, nightlife, and delicious seafood.",
    topPlaces: [
      { name: "Baga Beach", location: "https://www.google.com/maps?q=Baga+Beach" },
      { name: "Anjuna Beach", location: "https://www.google.com/maps?q=Anjuna+Beach" },
      { name: "Dudhsagar Waterfalls", location: "https://www.google.com/maps?q=Dudhsagar+Waterfalls" }
    ],
    topFoods: ["Goan Fish Curry", "Pork Vindaloo", "Bebinca"]
  },
  "ladakh": {
    name: "Ladakh",
    image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=",
    description: "Ladakh, the Land of High Passes, is famous for its rugged mountains, monasteries, and adventure sports.",
    topPlaces: [
      { name: "Pangong Lake", location: "https://www.google.com/maps?q=Pangong+Lake" },
      { name: "Nubra Valley", location: "https://www.google.com/maps?q=Nubra+Valley" },
      { name: "Magnetic Hill", location: "https://www.google.com/maps?q=Magnetic+Hill" }
    ],
    topFoods: ["Momos", "Thukpa", "Butter Tea"]
  }
};

export default function PlacePage() {
  const { placeName } = useParams();
  const place = placeData[placeName];

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

      {/* Top Visiting Places */}
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

      {/* Top Foods */}
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
