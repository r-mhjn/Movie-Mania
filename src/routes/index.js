import MoviesList from "../pages/ui-elements/movies/MoviesList";

const moviesList = {
  path: "/",
  name: "Movie List",
  component: MoviesList,
};

export const unprotectedDashboardRoutes = {
  moviesList,
};

export default {
  moviesList
};
