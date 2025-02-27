import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const placeData = {
  "taj-mahal": { name: "Taj Mahal", category: "Historical" },
  "varanasi": { name: "Varanasi", category: "Religious" },
  "jaipur": { name: "Jaipur", category: "Historical" },
  "kerala-backwaters": { name: "Kerala Backwaters", category: "Nature" },
  "goa-beaches": { name: "Goa Beaches", category: "Beach" },
  "ladakh": { name: "Ladakh", category: "Adventure" },
  "vrindavan": { name: "Vrindavan", category: "Religious" },
  "ayodhya": { name: "Ayodhya", category: "Religious" },
  "tirupati-balaji": { name: "Tirupati Balaji", category: "Religious" },
  "badrinath": { name: "Badrinath", category: "Religious" },
  "golden-temple": { name: "Golden Temple", category: "Religious" },
  "shirdi": { name: "Shirdi", category: "Religious" }
};

export default function DestinationList() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchQuery);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  const filteredPlaces = Object.keys(placeData)
    .filter(key =>
      placeData[key].name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? placeData[key].category === filterCategory : true)
    )
    .sort((a, b) => (sortOrder === "asc" ? placeData[a].name.localeCompare(placeData[b].name) : placeData[b].name.localeCompare(placeData[a].name))
    );

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-md mb-4"
      />

      {/* View Popular Destinations Button */}
      <div className="flex justify-end mb-4">
        <Link to="/popular-destinations" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View Popular Destinations
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {filteredPlaces.map((key) => (
          <Link key={key} to={`/destination/${key}`} className="p-4 border rounded-md hover:bg-gray-100">
            {placeData[key].name}
          </Link>
        ))}
      </div>
    </div>
  );
}
