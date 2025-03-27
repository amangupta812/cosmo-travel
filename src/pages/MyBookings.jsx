import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userEmail = "aman@example.com"; // Replace with logged-in user's email

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log("Fetching bookings...");
        const response = await axios.get(`http://localhost:5000/api/bookings/user/${userEmail}`);
        setBookings(response.data);
        console.log("Bookings fetched:", response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        const errorMsg = error.response?.status === 404 ? "No bookings found." : "Failed to fetch bookings.";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userEmail]);

  if (loading) return <p className="text-center text-gray-500">Loading bookings...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-lg shadow-lg p-4">
              <img
                src={booking.tourId?.images[0] || "https://via.placeholder.com/300"}
                alt={booking.tourId?.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-3">{booking.tourId?.title}</h2>
              <p className="text-gray-600">Booked for {booking.numberOfPeople} people</p>
              <p className="text-blue-500 font-bold mt-2">Total: ${booking.totalPrice}</p>
              <p className="text-sm text-gray-500">Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
