import { useParams } from "react-router-dom";

const placeData = {
  "taj-mahal": {
    name: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India. It is one of the New 7 Wonders of the World.",
    topPlaces: ["Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"],
    topFoods: ["Petha", "Mughlai Cuisine", "Dalmoth"]
  },
  "jaipur": {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Jaipur, the Pink City, is famous for its royal heritage and vibrant culture.",
    topPlaces: ["Amber Fort", "Hawa Mahal", "City Palace"],
    topFoods: ["Dal Baati Churma", "Ghewar", "Laal Maas"]
  },
  "kerala-backwaters": {
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Kerala Backwaters offer scenic houseboat cruises through lush green waterways.",
    topPlaces: ["Alleppey", "Kumarakom", "Vembanad Lake"],
    topFoods: ["Appam", "Puttu", "Fish Curry"]
  },
  "varanasi": {
    name: "Varanasi",
    image: "https://images.lonelyplanetitalia.it/uploads/gettyrf-827065008?q=80&p=slider&s=5595667a6e1e401506daa05413bd405b",
    description: "Varanasi, the spiritual capital of India, is famous for its ancient ghats, temples, and rich cultural heritage.",
    topPlaces: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath", "Manikarnika Ghat", "Ramnagar Fort"],
    topFoods: ["Kachori Sabzi", "Banarasi Paan", "Malaiyo", "Lassi", "Baati Chokha"]
  },
  "goa-beaches": {
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Goa is a tropical paradise known for its beautiful beaches, nightlife, and delicious seafood.",
    topPlaces: ["Baga Beach", "Anjuna Beach", "Dudhsagar Waterfalls", "Fort Aguada", "Basilica of Bom Jesus"],
    topFoods: ["Goan Fish Curry", "Pork Vindaloo", "Bebinca", "Feni", "Prawn Balchão"]
  },
  "ladakh": {
    name: "Ladakh",
    image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=",
    description: "Ladakh, the Land of High Passes, is famous for its rugged mountains, monasteries, and adventure sports.",
    topPlaces: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Leh Palace", "Thiksey Monastery"],
    topFoods: ["Momos", "Thukpa", "Skyu", "Butter Tea (Gur Gur Chai)", "Chhang"]
  }
  
  // Add more places here...
};

export default function PlacePage() {
  const { placeName } = useParams();
  const place = placeData[placeName];

  if (!place) {
    return <h2 className="text-center text-2xl font-bold">Place Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{place.name}</h1>
      <img src={place.image} alt={place.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <p className="text-lg mb-4">{place.description}</p>

      <h3 className="text-2xl font-semibold mt-6">Top Visiting Places:</h3>
      <ul className="list-disc list-inside">
        {place.topPlaces.map((spot, index) => (
          <li key={index} className="text-lg">{spot}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Top-Rated Foods:</h3>
      <ul className="list-disc list-inside">
        {place.topFoods.map((food, index) => (
          <li key={index} className="text-lg">{food}</li>
        ))}
      </ul>
    </div>
  );
}
