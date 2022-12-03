import React from "react";
import Movie from "../Movie/Movie";

const Movies = ({ movies, handleClick }) => {
  const displayMovies = movies.map((item) => {
    return <Movie key={item.id} singleMovie={item} />;
  });
  return (
    <div
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {displayMovies}
    </div>
  );
};

export default Movies;
