import { QueryResolvers } from '../generated/graphql';

// Resolvers define the technique for fetching the types in the schema.
export const IngredientResolver: {
  Query: Pick<QueryResolvers, 'ingredient' | 'ingredients'>;
  Mutation: Pick<QueryResolvers, 'createIngredient' | 'updateIngredient' | 'removeIngredient'>;
} = {
  Query: {
    ingredient: (_, args, ctx) => ctx.dataSources.ingredients.getIngredient(args),
    ingredients: (_, __, ctx) => ctx.dataSources.ingredients.getIngredients(),
  },
  Mutation: {
    createIngredient: (_, args, ctx) => ctx.dataSources.ingredients.createIngredient(args),
    updateIngredient: (_, args, ctx) => ctx.dataSources.ingredients.updateIngredient(args),
    removeIngredient: (_, args, ctx) => ctx.dataSources.ingredients.removeIngredient(args),
  },
};
