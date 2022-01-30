import React from "react";
import "./App.css";
import WebsiteRoutes from "./routes/Routes";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <WebsiteRoutes />   
      </div>
    </ApolloProvider>
  );

}

export default App;
