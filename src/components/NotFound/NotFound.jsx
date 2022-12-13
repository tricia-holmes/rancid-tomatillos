import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <h2 className="NotFound__text">Oops, we couldn't find this page!</h2>
      <Link to="/">
        <button className="NotFound__btn">Return to home page</button>
      </Link>
    </div>
  );
}
