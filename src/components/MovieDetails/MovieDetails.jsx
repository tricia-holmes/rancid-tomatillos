import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { number, shape, string } from "prop-types";
import oneStar from "../../assets/images/1star.png";
import twoStar from "../../assets/images/2stars.png";
import threeStar from "../../assets/images/3stars.png";
import fourStar from "../../assets/images/4stars.png";
import fiveStar from "../../assets/images/5stars.png";

const MovieDetails = ({ selectedMovie }) => {
  const title = selectedMovie.title.toUpperCase();
  const genres = selectedMovie.genres.join(" / ");
  const tagline = !selectedMovie.tagline ? null : `"${selectedMovie.tagline}"`;
  const revenue = selectedMovie.revenue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  let stars;
  if (selectedMovie["average_rating"] === 5) {
    stars = (
      <img
        className="starImage"
        src={fiveStar}
        alt={`${selectedMovie.title} has a rating of ${selectedMovie["average_rating"]}`}
      />
    );
  } else if (selectedMovie["average_rating"] >= 4) {
    stars = (
      <img
        className="starImage"
        src={fourStar}
        alt={`${selectedMovie.title} has a rating of ${selectedMovie["average_rating"]}`}
      />
    );
  } else if (selectedMovie["average_rating"] >= 3) {
    stars = (
      <img
        className="starImage"
        src={threeStar}
        alt={`${selectedMovie.title} has a rating of ${selectedMovie["average_rating"]}`}
      />
    );
  } else if (selectedMovie["average_rating"] >= 2) {
    stars = (
      <img
        className="starImage"
        src={twoStar}
        alt={`${selectedMovie.title} has a rating of ${selectedMovie["average_rating"]}`}
      />
    );
  } else {
    stars = (
      <img
        className="starImage"
        src={oneStar}
        alt={`${selectedMovie.title} has a rating of ${selectedMovie["average_rating"]}`}
      />
    );
  }

  return (
    <div
      className="movieDetails__modal"
      style={{
        backgroundImage: `url(${selectedMovie["backdrop_path"]})`,
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
              <h1 className="movieDetails__title">{title}</h1>
              <h2 className="movieDetails__tagline">{tagline}</h2>
              {stars}
            </div>
          </div>
          <h3 className="movieDetails__overview">{selectedMovie.overview}</h3>
          <div className="movieDetails__info">
            <p>- Release Date: {selectedMovie["release_date"]}</p>
            <p>- Revenue: {revenue}</p>
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
