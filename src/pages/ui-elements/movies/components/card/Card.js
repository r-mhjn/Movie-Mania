import React from "react";
import { Link } from "react-router-dom";
import { PosterUrl } from "../../../../../utils/commonUtils";
import "./card.scss";


const Card = ({ movie }) => {
  return (

    //  target="_blank" rel="noopener noreferrer"
    <Link to={`/movie/${movie.title}`} state={movie} style={{ textDecoration: "none" }}>
      {/* <div> */}
      <div className="card-container">
        <img
          src={PosterUrl}
          alt="movie"
        />

      </div>
      <p className="movie-title">{movie.title}</p>
    </Link>

  );
};

export default Card;
