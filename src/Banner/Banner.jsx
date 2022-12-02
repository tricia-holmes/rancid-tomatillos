import React from "react";

const Banner = ({ banner }) => {
  return (
    <img src={`${banner.backdrop_path}`} alt={`image from ${banner.title}`} />
  );
};

export default Banner;
