import { FiSearch } from 'react-icons/fi';

export default function Hero() {
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
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                >
                  <option value="">Select Destination</option>
                  <option value="Goa">Vadodara</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="goa">Goa</option>
                  <option value="kerala">Kerala</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
              <button className="bg-primary text-white px-8 py-2 rounded-md hover:bg-opacity-90 flex items-center justify-center">
                <FiSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}