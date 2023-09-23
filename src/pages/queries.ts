// src/queries.js

import { gql } from '@apollo/client';


const limit = 10;

export const GET_LAUNCHES = gql`
query Ships($limit: Int, $find: ShipsFind) {
    ships(limit: $limit, find: $find) {
      image
      name
    }
  }
`;
