import { QueryResolvers } from '../generated/graphql';

// Resolvers define the technique for fetching the types in the schema.
export const RecipeResolver: {
  Query: Pick<QueryResolvers, 'recipe' | 'recipes'>;
} = {
  Query: {
    recipe: (_, args, ctx) => ctx.dataSources.recipes.getRecipe(args),
    recipes: (_, __, ctx) => ctx.dataSources.recipes.getRecipes(),
  },
  // Mutation: {},
};
