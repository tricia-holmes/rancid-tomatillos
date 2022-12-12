import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__circle"></div>
      <span className="loader__text">LOADING...</span>
    </div>
  );
}
