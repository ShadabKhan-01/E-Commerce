"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import products from "../data/products.json";
import Link from "next/link";

// Sample data for search suggestions
const sampleData = products.map(item=>item.name);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchId, setsearchId] = useState()

  // Update suggestions as user types
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = sampleData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  }, [query]);

  // Highlight matched text
  const highlightText = (text) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      (match) => `<span class="bg-yellow-200">${match}</span>`
    );
  };

  // Handle search selection
  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    setsearchId(products.filter(item=>item.name == suggestion).map(item=>item.id)[0])
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          className="w-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link href={`/product/${searchId}`}><MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mx-3" /></Link>
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(item)}
              dangerouslySetInnerHTML={{ __html: highlightText(item) }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
