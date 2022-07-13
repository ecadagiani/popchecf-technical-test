import { useQuery } from '@apollo/client';
import { GetRecipesQuery } from 'app/shared/graphql/queries/recipe.query';
import { RecipesType } from 'app/types';

interface QueryGetRecipesTypes {
    data: {recipes: [RecipesType]} | undefined
    loading: boolean
}

export function useGetRecipes(){
  const { data, loading } : QueryGetRecipesTypes = useQuery(GetRecipesQuery, {
    variables: {},
    fetchPolicy: 'no-cache',
  });

  return { data, loading }
}