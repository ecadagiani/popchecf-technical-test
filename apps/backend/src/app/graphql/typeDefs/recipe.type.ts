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
  type Mutation {
    createRecipe(title: String, content: String): Recipe
    updateRecipe(id: ID, title: String, content: String): Recipe
    addIngredient(id: ID, ingredientId: ID, quantity: Int, peopleNumber: Int): Recipe
    removeIngredient(id: ID, ingredientId: ID, quantity: Int, peopleNumber: Int): Recipe
  }
`;
