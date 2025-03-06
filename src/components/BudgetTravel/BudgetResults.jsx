/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { budgetPlaces } from "../../data/budgetData"; // Import budget data


const BudgetResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const budget = parseInt(params.get("budget"), 10);
  const category = params.get("category");
  const city = params.get("city");

  // Filter places within the budget and selected city
  const results = budgetPlaces[category].filter(
    (place) => place.price <= budget && place.city === city
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Budget-Friendly {category.charAt(0).toUpperCase() + category.slice(1)} in {city}
      </h2>

      {results.length === 0 ? (
        <p>No results found within your budget in {city}.</p>
      ) : (
        <ul>
          {results.map((place, index) => (
            <li key={index} className="p-2 border-b">
              <strong>{place.name}</strong> - ₹{place.price} ({place.location})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BudgetResults;
