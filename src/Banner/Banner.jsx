import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: props.movies[Math.floor(Math.random() * props.movies.length)]
    };
  }

  render() {
    return (
      <img
        className="banner"
        src={`${this.state.banner['backdrop_path']}`}
        alt={`image from ${this.state.banner.title}`}
      />
    );
  }
}

export default Banner;
