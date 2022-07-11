import { gql } from 'apollo-server';

export const RecipeTypeDefs = gql`
  type Recipe {
    id: ID
    title: String
    content: String
  }
  type Mutation {
    createRecipe(title: String, content: String): Recipe
    updateRecipe(id: ID, title: String, content: String): Recipe
  }
`;
