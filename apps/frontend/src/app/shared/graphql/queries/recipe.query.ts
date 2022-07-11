import { gql } from '@apollo/client';

export const GetRecipeQuery = gql`
  query ($id: ID!) {
    recipe(id: $id) {
      id
    }
  }
`;
