import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch, search }) => {
  return (
    <nav className="navigation">
      <input
        onChange={(event) => handleSearch(event)}
        type="text"
        placeholder="Search by title or genre..."
        value={search}
      />
    </nav>
  );
};

export default SearchBar;
