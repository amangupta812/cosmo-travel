import { Link } from "react-router-dom";

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Taj Mahal, Agra",
      slug: "taj-mahal",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Symbol of eternal love"
    },
    {
      name: "Jaipur",
      slug: "jaipur",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "The Pink City of Rajasthan"
    },
    {
      name: "Kerala Backwaters",
      slug: "kerala-backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "God's own country"
    },
    {
      name: "Varanasi",
      slug: "varanasi",
      image: "https://images.lonelyplanetitalia.it/uploads/gettyrf-827065008?q=80&p=slider&s=5595667a6e1e401506daa05413bd405b",
      description: "The spiritual capital of India"
    },
    {
      name: "Goa Beaches",
      slug: "goa-beaches",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Paradise for beach lovers"
    },
    {
      name: "Ladakh",
      slug: "ladakh",
      image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=",
      description: "Land of high passes"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Indian Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link key={index} to={`/places/${destination.slug}`}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/90">{destination.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
