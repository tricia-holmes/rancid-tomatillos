import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  return (
    <nav className="navigation">
      <input
        onChange={(event) => handleSearch(event)}
        type="text"
        placeholder="Search by title or genre..."
      />
    </nav>
  );
};

export default SearchBar;
