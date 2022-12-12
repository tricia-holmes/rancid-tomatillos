import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import "./Home.css";

const Home = ({ movies, filteredMovies }) => {
  return (
    <div className="bannerImages">
      <Banner movies={movies} />
      <Movies movies={filteredMovies} />
    </div>
  );
};

export default Home;
