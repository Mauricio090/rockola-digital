import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔎 Buscar canciones..."
      />
      <button>Buscar</button>
    </div>
  );
};

export default SearchBar;
