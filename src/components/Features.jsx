import { FiHome, FiMap, FiCoffee, FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "Hotels & Stays",
      description: "From luxury palaces to boutique heritage hotels and homestays",
      link: "/budget-travel" // Redirects to Budget Travel Guide
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: "Local Cuisine",
      description: "Explore authentic Indian dishes and regional specialties"
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: "Tour Guides",
      description: "Expert local guides for cultural and historical tours"
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Transport",
      description: "Book cabs, trains, or find local transport options"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience India Your Way</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.link || "#"} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
