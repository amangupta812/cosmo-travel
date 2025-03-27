import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/destinations?search=${search}`);
      setSearch('');
    }
  };

  // Handle navigation and close menu (for mobile)
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center border border-gray-300 rounded-md px-2">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 outline-none bg-transparent w-full"
            />
            <button type="submit" className="p-2 text-gray-600 hover:text-primary">
              <FiSearch size={20} />
            </button>
          </form>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => handleNavigation('/hotels')} className="text-gray-700 hover:text-primary cursor-pointer">Hotels</a>
            <a onClick={() => handleNavigation('/food')} className="text-gray-700 hover:text-primary cursor-pointer">Food</a>
            <a onClick={() => handleNavigation('/tours')} className="text-gray-700 hover:text-primary cursor-pointer font-bold">Tours</a> 
            <a onClick={() => handleNavigation('/transport')} className="text-gray-700 hover:text-primary cursor-pointer">Transport</a>
            <select className="text-gray-700 hover:text-primary bg-transparent border-none focus:outline-none">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Search Bar in Mobile Menu */}
              <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-md px-2 w-full">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="p-2 outline-none bg-transparent w-full"
                />
                <button type="submit" className="p-2 text-gray-600 hover:text-primary">
                  <FiSearch size={20} />
                </button>
              </form>

              <a onClick={() => handleNavigation('/hotels')} className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer">Hotels</a>
              <a onClick={() => handleNavigation('/food')} className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer">Food</a>
              <a onClick={() => handleNavigation('/tours')} className="text-gray-700 hover:text-primary cursor-pointer font-bold">Tours</a>
              <a onClick={() => handleNavigation('/my-bookings')} className="text-gray-700 hover:text-primary cursor-pointer">My Bookings</a>

              <a onClick={() => handleNavigation('/transport')} className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer">Transport</a>
              <select className="block w-full px-3 py-2 text-gray-700 bg-transparent">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
              <button className="w-full text-left px-3 py-2 bg-primary text-white rounded-md hover:bg-opacity-90">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
