import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/destinations?search=${search}`);
      setSearch('');
    }
  };
  

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu on mobile
    setIsToursOpen(false); // Close dropdown on navigation
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToursOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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

            {/* Tours Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsToursOpen(!isToursOpen)}
                className="text-gray-700 hover:text-primary cursor-pointer flex items-center"
              >
                Tours <FiChevronDown className="ml-1" />
              </button>
              {isToursOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a
                    onClick={() => handleNavigation('/tours/adventure')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Adventure Tours
                  </a>
                  <a
                    onClick={() => handleNavigation('/tours/cultural')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Cultural Tours
                  </a>
                  <a
                    onClick={() => handleNavigation('/tours/historical')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Historical Places
                  </a>
                  <a
                    onClick={() => handleNavigation('/tours/religious')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Religious Places
                  </a>
                </div>
              )}
            </div>

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

              {/* Tours Dropdown in Mobile Menu */}
              <div>
                <button
                  onClick={() => setIsToursOpen(!isToursOpen)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary cursor-pointer flex items-center justify-between"
                >
                  Tours <FiChevronDown className="ml-1" />
                </button>
                {isToursOpen && (
                  <div className="pl-4">
                    <a
                      onClick={() => handleNavigation('/tours/adventure')}
                      className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      Adventure Tours
                    </a>
                    <a
                      onClick={() => handleNavigation('/tours/cultural')}
                      className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      Cultural Tours
                    </a>
                    <a
                      onClick={() => handleNavigation('/tours/historical')}
                      className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      Historical Places
                    </a>
                    <a
                      onClick={() => handleNavigation('/tours/religious')}
                      className="block px-3 py-2 text-gray-700 hover:text-primary cursor-pointer"
                    >
                      Religious Places
                    </a>
                  </div>
                )}
              </div>

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
