import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary mb-6">About Cosmo Travel</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-semibold text-primary">Cosmo Travel</span>, your ultimate travel companion.
          Our platform is designed to make trip planning seamless and enjoyable by providing you with the best destinations, travel tips, and essential resources.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
          <li>Discover the most popular travel destinations.</li>
          <li>Get real-time information about hotels, restaurants, and transport.</li>
          <li>Interactive maps to explore places with ease.</li>
          <li>User-friendly interface for a smooth experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          At Cosmo Travel, our mission is to **make travel planning easier** by offering an all-in-one solution for tourists and travelers. Whether you're looking for exotic locations, travel guides, or the best places to stay, we’ve got you covered.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">Contact Us</h2>
        <p className="text-gray-700 mt-2">
          Have any questions? Feel free to reach out to us at <span className="text-primary font-semibold">support@cosmotravel.com</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
