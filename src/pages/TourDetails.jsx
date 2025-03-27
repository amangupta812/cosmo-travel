import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false); // ✅ Prevent duplicate submissions
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    numberOfPeople: 1,
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        console.log("Fetching tour details...");
        const response = await axios.get(`http://localhost:5000/api/tours/${id}`);
        setTour(response.data);
        console.log("Tour details loaded:", response.data);
      } catch (error) {
        console.error("Error fetching tour details:", error);
        setMessage({ text: "Failed to load tour details.", type: "error" });
      } finally {
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // Reset previous messages
    setIsBooking(true); // ✅ Disable button while processing

    // Basic validation
    if (!formData.userName.trim() || !formData.userEmail.trim() || formData.numberOfPeople < 1) {
      setMessage({ text: "Please fill in all fields correctly.", type: "error" });
      setIsBooking(false);
      return;
    }

    try {
      console.log("Sending booking request...", formData);
      const response = await axios.post("http://localhost:5000/api/bookings", {
        tourId: id,
        userName: formData.userName,
        userEmail: formData.userEmail,
        numberOfPeople: formData.numberOfPeople,
      });

      console.log("Booking successful:", response.data);
      setMessage({ text: "Booking successful! 🎉", type: "success" });
      setFormData({ userName: "", userEmail: "", numberOfPeople: 1 }); // Reset form
    } catch (error) {
      console.error("Booking error:", error);
      const errorMsg = error.response?.data?.message || "Error booking tour. Try again.";
      setMessage({ text: errorMsg, type: "error" });
    } finally {
      setIsBooking(false);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading tour details...</p>;

  return (
    <div className="p-5">
      {tour ? (
        <>
          <h1 className="text-3xl font-bold">{tour.title}</h1>
          <img
            src={tour.images?.[0] || "https://via.placeholder.com/500"}
            alt={tour.title}
            className="w-full h-96 object-cover mt-3 rounded-md"
          />
          <p className="mt-3 text-gray-700">{tour.description}</p>
          <p className="mt-2 text-blue-500 font-bold">${tour.price} per person</p>
          <p className="text-gray-500">{tour.duration}</p>

          {/* Booking Form */}
          <div className="mt-5 p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Book This Tour</h2>
            <form onSubmit={handleBooking} className="space-y-3">
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                className="border p-2 w-full rounded-md"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Your Email"
                className="border p-2 w-full rounded-md"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="numberOfPeople"
                min="1"
                placeholder="Number of People"
                className="border p-2 w-full rounded-md"
                value={formData.numberOfPeople}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-md w-full transition-all ${
                  isBooking
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
                disabled={isBooking}
              >
                {isBooking ? "Booking..." : "Confirm Booking"}
              </button>
            </form>

            {/* Success/Error Message */}
            {message.text && (
              <p className={`mt-2 text-center ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
                {message.text}
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Tour not found</p>
      )}
    </div>
  );
};

export default TourDetails;
