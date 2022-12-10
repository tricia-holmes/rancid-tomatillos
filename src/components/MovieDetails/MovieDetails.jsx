import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { number, shape, string } from "prop-types";

const MovieDetails = ({ selectedMovie }) => {
  console.log(selectedMovie);
  const genres = selectedMovie.genres.map((item) => {
    return `${item}, `;
  });
  return (
    <div
      className="movieDetailsModal"
      style={{
        backgroundImage: `url(${selectedMovie["backdrop_path"]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="movieDetailsContent">
        <div className="movieDetailsBtnContainer">
          <Link to="/">
            <button className="movieDetailsCloseBtn">Back</button>
          </Link>
        </div>
        <img
          className="movieDetailsPoster"
          src={`${selectedMovie["poster_path"]}`}
          alt=""
        />
        <h1 className="movieDetailsTitle">{selectedMovie.title}</h1>
        <h2>{selectedMovie.tagline}</h2>
        <div className="movieDetailsInfo">
          <p>
            Average Rating:{" "}
            {Math.round(selectedMovie["average_rating"] * 10) / 10}
          </p>
          <p>Release Date: {selectedMovie["release_date"]}</p>
          <p>Revenue: {selectedMovie.revenue}</p>
          <p>Genres: {genres}</p>
          <p>Overview: {selectedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  selectedMovie: shape({
    id: number.isRequired,
    poster_path: string.isRequired,
    backdrop_path: string.isRequired,
    title: string.isRequired,
    average_rating: number.isRequired,
    release_date: string.isRequired,
  }).isRequired,
};
