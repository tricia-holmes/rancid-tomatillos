import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner:
        "https://image.tmdb.org/t/p/original//qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
    };
  }

  render() {
    return (
      <img
        className="banner"
        src={this.state.banner}
        alt={`image from ${this.state.banner.title}`}
      />
    );
  }
}

export default Banner;
