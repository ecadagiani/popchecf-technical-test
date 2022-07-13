import { gql } from 'apollo-server';

export const RecipeTypeDefs = gql`
  type RecipeIngredient {
    ingredient: Ingredient
    quantity: Int
    peopleNumber: Int
  }
  type Recipe {
    id: ID
    title: String
    content: String
    ingredients: [RecipeIngredient]
  }
  input CreateRecipeIngredient {
    id: ID!
    quantity: Int
    peopleNumber: Int
  }
  type Mutation {
    createRecipe(
      title: String!
      content: String!
      ingredients: [CreateRecipeIngredient]
    ): Recipe
    updateRecipe(id: ID!, title: String, content: String): Recipe
    addIngredientToRecipe(
      id: ID!
      ingredientId: ID!
      quantity: Int
      peopleNumber: Int
    ): Recipe
    removeIngredientToRecipe(id: ID!, ingredientId: ID!): Recipe
  }
`;
