import React from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

const MovieDetails = ({ selectedMovie }) => {
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
        <div className="movieDetailsInfo">
          <p>
            Average Rating:{" "}
            {Math.round(selectedMovie["average_rating"] * 10) / 10}
          </p>
          <p>Release Date: {selectedMovie["release_date"]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
