import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>Oops, we couldn't find this page</h2>
      <Link to="/">
        <button>Return to home page</button>
      </Link>
    </div>
  );
}
