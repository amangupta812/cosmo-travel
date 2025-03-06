import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!destination || !date) {
      alert('Please select a destination and date.');
      return;
    }
    setIsLoading(true);
    // Simulate an API call or navigation
    setTimeout(() => {
      setIsLoading(false);
      alert(`Searching for ${destination} on ${date}`);
    }, 1000);
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Incredible India</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the rich culture, heritage, and diversity of India</p>
          
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                  aria-label="Select Destination"
                  required
                >
                  
                  <option value="">Select Destination</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Goa">Goa</option>
                  <option value="Kerala">Kerala</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md text-black"
                  aria-label="Select Date"
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-2 rounded-md hover:bg-opacity-90 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-spin">🌀</span>
                ) : (
                  <>
                    <FiSearch className="mr-2" />
                    Search
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}