import React from "react";
import "./Movie.css";

const Movie = ({ singleMovie }) => {
  return (
    <img
      id={singleMovie.id}
      className="movieThumbnail"
      src={`${singleMovie.poster_path}`}
      alt={`image of ${singleMovie.title}`}
    ></img>
  );
};

export default Movie;
