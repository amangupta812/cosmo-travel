import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PopularDestinations() {
  const [showAll, setShowAll] = useState(false);

  const destinations = [
    { name: "Taj Mahal, Agra", slug: "taj-mahal", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", description: "Symbol of eternal love" },
    { name: "Jaipur", slug: "jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", description: "The Pink City of Rajasthan" },
    { name: "Kerala Backwaters", slug: "kerala-backwaters", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", description: "God's own country" },
    { name: "Varanasi", slug: "varanasi", image: "https://images.lonelyplanetitalia.it/uploads/gettyrf-827065008?q=80&p=slider&s=5595667a6e1e401506daa05413bd405b", description: "The spiritual capital of India" },
    { name: "Goa Beaches", slug: "goa-beaches", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", description: "Paradise for beach lovers" },
    { name: "Ladakh", slug: "ladakh", image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=", description: "Land of high passes" },
    { name: "Vrindavan", slug: "vrindavan", image: "https://wallpaperaccess.com/full/9386523.jpg", description: "The land of Lord Krishna, known for its temples and spiritual charm." },
    { name: "Ayodhya", slug: "ayodhya", image: "/images/ayodhya.jpg", description: "The birthplace of Lord Rama, rich in history and religious significance." },
    { name: "Tirupati Balaji", slug: "tirupati-balaji", image: "https://wallpaperaccess.com/full/2991971.jpg", description: "One of the richest temples in India, dedicated to Lord Venkateswara." },
    { name: "Rishikesh", slug: "rishikesh", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Trayambakeshwar_Temple_VK.jpg", description: "The yoga capital of the world, nestled in the Himalayas along the Ganges." },
    { name: "Haridwar", slug: "haridwar", image: "https://media.istockphoto.com/id/596042540/photo/har-ki-pauri.jpg?s=612x612&w=0&k=20&c=igkOecfeSd5ktZ3mFkiw8Ya0tIN0mjdgOAWecBB7SuA=", description: "A sacred city known for the Kumbh Mela and the holy Ganges River." },
    { name: "Kedarnath", slug: "kedarnath", image: "https://wallpaperaccess.com/full/6883014.jpg", description: "A revered pilgrimage site, home to one of the 12 Jyotirlingas of Shiva." },
    {
      name: "Badrinath",
      slug: "badrinath",
      image: "https://wallpaperaccess.com/full/13366327.jpg",
      description: "A key Hindu pilgrimage destination dedicated to Lord Vishnu.",
    },
    {
      name: "Shirdi",
      slug: "shirdi",
      image: "https://rukminim2.flixcart.com/image/850/1000/k2arbm80/poster/7/j/a/medium-shirdi-sai-baba-wall-poster-wall-paper-wall-sticker-original-imafhnsp3gzq7emb.jpeg?q=90&crop=false",
      description: "The home of Sai Baba, attracting millions of devotees every year.",
    },
    {
      name: "Golden Temple",
      slug: "golden-temple",
      image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww",
      description: "A stunning Sikh pilgrimage site in Amritsar, Punjab.",
    }
    
  ];

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 6);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Indian Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDestinations.map((destination, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/places/${destination.slug}`}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                      <p className="text-white/90">{destination.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
