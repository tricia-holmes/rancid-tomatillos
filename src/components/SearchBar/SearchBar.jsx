import React from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
