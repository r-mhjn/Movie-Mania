import React, { useState } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "../../../components/search-box/SearchBox";
import LoaderComponent from "../../../components/loader/Loader";
import Error from "../../../components/error/Error";
import { useQuery } from "@apollo/client";
import { MOVIES_LIST } from "../../../utils/apiUtils";
import "../../styles/movie-list.scss";

const MoviesList = () => {
  const [searchField, setSearchField] = useState("");

  let { data, loading, error } = useQuery(MOVIES_LIST);

  const onSearchChange = e => {
    setSearchField(e.target.value)
  };

  const getFilteredMovies = () => {
    return data ? data.allFilms.films.filter(movie =>
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    ) : []
  }

  return (
    <div className="movie-list-container">
      <SearchBox
        placeholder="Search your favourite movies ..."
        onSearchChange={e => {
          onSearchChange(e);
        }}
      />

      {
        error ? <Error message={"Sorry the content is not available right now, please try again later..."} /> : null
      }

      {loading ?
        <LoaderComponent className={"d-block m-auto"} variant="light" /> :
        <CardList movies={getFilteredMovies()} />}
    </div>
  );

}

export default MoviesList;
