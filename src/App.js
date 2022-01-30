import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesList from "./pages/ui-elements/movies/MoviesList";
import MovieDetails from "./pages/ui-elements/movies/MovieDetails";
import Navbar from "./components/navbar/Navbar";
// import DashboardLayout from "./layouts/DashboardLayout"
// import WebsiteRoutes from "./routes/Routes";
// import { unprotectedDashboardRoutes } from "./routes/index";

import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router >
          <Navbar />
          <Routes>
            <Route path="/" exact element={<MoviesList />} />
            <Route path="movie/:title" exact element={<MovieDetails />} />
          </Routes>
        </Router>

        {/* <WebsiteRoutes /> */}
        {/* <Router>
          <Routes>                   */}
        {/* </Routes> */}
        {/* </Router> */}
      </div>
    </ApolloProvider>
  );

}

export default App;
