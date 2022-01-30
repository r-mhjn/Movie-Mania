import React from "react";
import Card from "../card/Card";
import "./card-list.scss";

const CardList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies.map(movie => (
        <Card key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default CardList;
