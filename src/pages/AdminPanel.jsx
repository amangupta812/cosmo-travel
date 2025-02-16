// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    coordinates: {
      lat: '',
      lng: ''
    },
    rating: '',
    topFood:'',
    topPlaces:'',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          image: formData.image,
          location: {
            type: 'Point',
            coordinates: [parseFloat(formData.coordinates.lng), parseFloat(formData.coordinates.lat)]
          },
          rating: parseFloat(formData.rating),
          topFood:formData.topFood,
          topPlaces:formData.topPlaces,
        }),
      });

      if (response.ok) {
        alert('Place added successfully!');
        setFormData({
          name: '',
          description: '',
          image: '',
          coordinates: { lat: '', lng: '' },
          rating: '',
          topFood:'',
          topPlaces:'',
        });
      } else {
        throw new Error('Failed to add place');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add place');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'lat' || name === 'lng') {
      setFormData(prev => ({
        ...prev,
        coordinates: {
          ...prev.coordinates,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Panel - Add New Place</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">Place-Name</label>
            <input
              type="text"
              name="name"
              placeholder='Enter place Name'
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 ">topPlaces</label>
            <input
              type="text"
              name="topPlaces"
              placeholder='Enter Top-place Name'
              value={formData.topPlaces}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">topFood</label>
            <input
              type="text"
              name="topFood"
              placeholder='Enter topfood'
              value={formData.topFood}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              placeholder='Description'
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              placeholder='Image Url'
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Latitude</label>
              <input
                type="number"
                placeholder='Latitude'
                name="lat"
                value={formData.coordinates.lat}
                onChange={handleChange}
                step="any"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Longitude</label>
              <input
                type="number"
                placeholder='Longitude'
                name="lng"
                value={formData.coordinates.lng}
                onChange={handleChange}
                step="any"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
            <input
              type="number"
              placeholder='Rating'
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
}