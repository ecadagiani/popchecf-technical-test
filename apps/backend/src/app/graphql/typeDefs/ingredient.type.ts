import { gql } from 'apollo-server';

export const IngredientTypeDefs = gql`
  type Ingredient {
    id: ID
    name: String
  }
  type RemoveIngredientPayload {
    result: String
  }
  type Mutation {
    createIngredient(name: String!): Ingredient
    updateIngredient(id: ID!, name: String): Ingredient
    removeIngredient(id: ID!): RemoveIngredientPayload
  }
`;
