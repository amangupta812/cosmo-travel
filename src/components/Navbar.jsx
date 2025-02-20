import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg auto w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hotels" className="text-gray-700 hover:text-primary">Hotels</a>
            <a href="#food" className="text-gray-700 hover:text-primary">Food</a>
            <a href="#tours" className="text-gray-700 hover:text-primary">Tours</a>
            <a href="#transport" className="text-gray-700 hover:text-primary">Transport</a>
            <select className="text-gray-700 hover:text-primary bg-transparent border-none focus:outline-none">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#hotels" className="block px-3 py-2 text-gray-700 hover:text-primary">Hotels</a>
              <a href="#food" className="block px-3 py-2 text-gray-700 hover:text-primary">Food</a>
              <a href="#tours" className="block px-3 py-2 text-gray-700 hover:text-primary">Tours</a>
              <a href="#transport" className="block px-3 py-2 text-gray-700 hover:text-primary">Transport</a>
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