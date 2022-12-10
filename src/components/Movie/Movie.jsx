import React from "react";
import "./Movie.css";
import { number, shape, string } from "prop-types";

const Movie = ({ singleMovie, getAllMovies }) => {
  return (
    <img
      id={singleMovie.id}
      className="movieThumbnail"
      src={`${singleMovie.poster_path}`}
      alt={`image of ${singleMovie.title}`}
      onChange={getAllMovies(
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
        singleMovie.id
      )}
    ></img>
  );
};

export default Movie;

Movie.propTypes = {
  singleMovie: shape({
    id: number.isRequired,
    poster_path: string.isRequired,
    backdrop_path: string.isRequired,
    title: string.isRequired,
    average_rating: number.isRequired,
    release_date: string.isRequired,
  }).isRequired,
};
