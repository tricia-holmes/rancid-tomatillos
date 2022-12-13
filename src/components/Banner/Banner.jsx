import React from "react";
import "./Banner.css";
import PropTypes from "prop-types";

class Banner extends React.Component {
  constructor({ movies }) {
    super();
    this.state = {
      banner: movies[Math.floor(Math.random() * movies.length)],
    };
  }

  render() {
    return (
      <img
        className="banner"
        src={`${this.state.banner["backdrop_path"]}`}
        alt={`image from ${this.state.banner.title}`}
      />
    );
  }
}

export default Banner;

Banner.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Banner.defaultProps = {
  movies: [
    {
      id: 508439,
      poster_path:
        "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      title: "Onward",
      average_rating: 6.4,
      release_date: "2020-02-29",
    },
  ],
};
