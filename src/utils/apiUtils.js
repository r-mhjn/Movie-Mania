import { gql } from "@apollo/client";

// query to fetch a list of movies
export const MOVIES_LIST = gql`
 
query Query {
  allFilms {
    films {
      title
      director
      releaseDate,
      openingCrawl
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}
`;