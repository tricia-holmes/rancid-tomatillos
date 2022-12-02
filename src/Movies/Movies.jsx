import React from "react";
import Movie from "../Movie/Movie";

const Movies = ({ movies }) => {
  const displayMovies = movies.movies.map((item) => {
    return <Movie key={item.id} singleMovie={item} />;
  });
  return <div>{displayMovies}</div>;
};

export default Movies;
