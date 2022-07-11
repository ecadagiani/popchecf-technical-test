import { gql } from 'apollo-server';

import { RecipeTypeDefs } from './recipe.type';
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    recipe(id: ID!): Recipe
    recipes: [Recipe!]
  }
`;

const typeDefinitions = [typeDefs, RecipeTypeDefs];

export default typeDefinitions;
