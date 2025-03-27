/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from './components/Navbar';
import Tours from "./pages/tours"; // Import the Tours pageS
import TourDetails from './pages/TourDetails';
import MyBookings from './pages/MyBookings';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularDestinations from './components/PopularDestinations';
import AdminPanel from './pages/AdminPanel';
import PlacePage from './pages/PlacePage';
import MapComponent from './components/MapComponent';
import About from './pages/About'; // Import the About page
import Contact from './pages/Contact'; // Import the Contact page
import DestinationPage from './pages/DestinationPage'; // Import DestinationPage
import DestinationList from './pages/DestinationList'; // Import DestinationList
import Hotels from "./pages/Hotels";
import Hotel from "./components/Hotel";
import BudgetTravel from "./components/BudgetTravel/BudgetTravel";

import BudgetResults from "./components/BudgetTravel/BudgetResults";



function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <PopularDestinations />
                <MapComponent />
                <BudgetTravel />
                {/* <Tours /> */}
              </>
            }
          />
          
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} /> {/* ✅ New Route */}
          <Route path="/budget-travel" element={<BudgetTravel />} />
          <Route path="/budget-results" element={<BudgetResults />} />

          <Route path="/places/:placeName" element={<DestinationPage />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/popular-destinations" element={<PopularDestinations />} />
          <Route path="/hotels" element={<Hotels />} />


          
          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Admin Panel */}
          <Route path="/admin" element={<AdminPanel />} />

          {/* Dynamic Place Page */}
          <Route path="/places/:placeName" element={<PlacePage />} />
          
        </Routes>

        <footer className="bg-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">CosmoTravel</h3>
                <p className="text-gray-300">Explore the world with us</p>
              </div>  
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link to="/hotels" className="text-gray-300 hover:text-white">Hotels</Link></li>
                  <li><Link to="/restaurants" className="text-gray-300 hover:text-white">Restaurants</Link></li>
                  <li><Link to="/transport" className="text-gray-300 hover:text-white">Transport</Link></li>
                </ul>
              </div>
              <div>
               <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-600 text-3xl transition-all    duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 text-3xl transition-all duration-300">
                   <FaFacebook />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700 text-3xl transition-all duration-300">
                  <FaInstagram />
                </a>
               </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; 2025 CosmoTravel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
