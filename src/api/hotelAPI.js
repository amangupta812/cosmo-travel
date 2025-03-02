const API_KEY = import.meta.env.VITE_AMADEUS_API_KEY;
const API_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET;
const AUTH_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";
const BASE_URL = "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city";

// Function to get an access token
const getAccessToken = async () => {
  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: API_KEY,
        client_secret: API_SECRET,
      }),
    });

    if (!response.ok) throw new Error("Failed to get access token");

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

// Function to fetch hotels by city
export const fetchHotels = async (cityCode) => {
  try {
    const token = await getAccessToken();
    if (!token) throw new Error("No access token available");

    const response = await fetch(`${BASE_URL}?cityCode=${cityCode}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Failed to fetch hotels");

    const data = await response.json();
    return data.data || []; // Ensure it returns an array
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};
