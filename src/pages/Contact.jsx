import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Have any questions? Feel free to reach out to us by filling the form below or contacting us directly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
          <p className="text-gray-700 mt-2">
            📍 Address: 123 Travel Street, Wanderlust City, World
          </p>
          <p className="text-gray-700">📞 Phone: +1 234 567 890</p>
          <p className="text-gray-700">📧 Email: support@cosmotravel.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
