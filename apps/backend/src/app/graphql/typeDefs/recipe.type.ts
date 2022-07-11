import { gql } from 'apollo-server';

export const RecipeTypeDefs = gql`
  type Recipe {
    id: ID
  }
`;
