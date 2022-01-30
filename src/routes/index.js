import MoviesList from "../pages/ui-elements/movies/MoviesList";
import MovieDetails from "../pages/ui-elements/movies/MovieDetails";

const moviesList = {
  path: "/",
  name: "Movie List",
  component: MoviesList,
};

const movieDetails = {
  path: "/movie/:title",
  name: "Movie Details",
  component: MovieDetails,
};

export const unprotectedDashboardRoutes = {
  moviesList,
  movieDetails
};
