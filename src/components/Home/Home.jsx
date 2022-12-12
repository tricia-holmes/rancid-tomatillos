import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

const Home = ({ movies, filteredMovies, handleSearch, search, hasError }) => {
  if (!hasError) {
    return (
      <div className="bannerImages">
        <h1 className="title">Rancid Tomatillos</h1>
        <SearchBar handleSearch={handleSearch} search={search} />
        <Banner movies={movies} />
        <Movies movies={filteredMovies} />
      </div>
    );
  }
};

export default Home;
