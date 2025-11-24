import React, { useState } from "react";
import { searchProducts } from "../services/productService";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (value) => {
    setTerm(value);
    if (value.length > 1) {
      const data = await searchProducts(value);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        placeholder="Search products..."
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {results.map((r) => (
        <p key={r._id}>{r.name}</p>
      ))}
    </div>
  );
};

export default SearchBar;
