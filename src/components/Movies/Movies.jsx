import React from "react";
import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movies = ({ movies }) => {
  const displayMovies = movies.map((item) => {
    return (
      <Link key={item.id} to={`/${item.id}`}>
        <Movie singleMovie={item} />
      </Link>
    );
  });
  return <div>{displayMovies}</div>;
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
