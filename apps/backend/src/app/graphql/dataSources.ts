import { RecipesProvider, IngredientProvider } from './providers';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    recipes: RecipesProvider;
    ingredients: IngredientProvider;
  };
}

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
export default function (): Context['dataSources'] {
  return {
    recipes: new RecipesProvider(),
    ingredients: new IngredientProvider(),
  };
}
