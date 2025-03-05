const CLIENT_ID = import.meta.env.VITE_AMADEUS_API_KEY;
const CLIENT_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET;
const BASE_URL = "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city";

// Function to get an access token
const getAccessToken = async () => {
  try {
    const response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    if (!response.ok) throw new Error("Failed to fetch access token");

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

// Fetch hotels using the access token
export const fetchHotels = async (cityCode) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) throw new Error("No access token available");

    const response = await fetch(`${BASE_URL}?cityCode=${cityCode}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) throw new Error("Failed to fetch hotels");

    const data = await response.json();
    return data.data; // Returns an array of hotels
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};
