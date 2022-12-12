import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { number, shape, string } from "prop-types";

const MovieDetails = ({ selectedMovie }) => {
  console.log(!!selectedMovie.tagline);
  const genres = selectedMovie.genres.map((item) => {
    return `${item}, `;
  });
  return (
    <div
      className="movieDetails__modal"
      style={{
        backgroundImage: `url(${selectedMovie["backdrop_path"]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.2)",
      }}
    >
      <div className="movieDetails__overlay">
        <div className="movieDetails__content">
          <div className="movieDetails__btnContainer">
            <Link to="/">
              <button className="movieDetails__btn">Back to Home</button>
            </Link>
          </div>
          <div className="movieDetails__header">
            <img
              className="movieDetails__poster"
              src={`${selectedMovie["poster_path"]}`}
              alt=""
            />
            <div className="movieDetails__headlines">
              <h1 className="movieDetails__title">
                {selectedMovie.title.toUpperCase()}
              </h1>
              <h2 className="movieDetails__tagline">
                {!selectedMovie.tagline ? null : selectedMovie.tagline}
              </h2>
            </div>
          </div>
          <h3 className="movieDetails__overview">
            {selectedMovie.overview}
          </h3>
          <div className="movieDetails__info">
            <p>
              - Average Rating:{" "}
              {Math.round(selectedMovie["average_rating"] * 10) / 10}
            </p>
            <p>- Release Date: {selectedMovie["release_date"]}</p>
            <p>- Revenue: {selectedMovie.revenue}</p>
            <p>- Genres: {genres}</p>
          </div>
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
