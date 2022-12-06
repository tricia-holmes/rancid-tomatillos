import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ singleMovie }) => {
  return (
    <Link to={`/movies/${singleMovie.id}`}>
      <img
        id={singleMovie.id}
        className="movieThumbnail"
        src={`${singleMovie.poster_path}`}
        alt={`image of ${singleMovie.title}`}
      />
    </Link>
  );
};

export default Movie;
