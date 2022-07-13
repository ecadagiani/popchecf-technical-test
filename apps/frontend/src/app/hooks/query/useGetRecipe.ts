import { useQuery } from '@apollo/client';
import { GetRecipeQuery } from 'app/shared/graphql/queries/recipe.query';
import { RecipesType } from 'app/types';

interface QueryGetRecipeTypes {
    data: {recipe: RecipesType} | undefined
    loading: boolean
}

export function useGetRecipe(id?: string){
  const { data, loading } : QueryGetRecipeTypes = useQuery(GetRecipeQuery, {
    variables: {id},
    fetchPolicy: 'no-cache',
  });

  return { data, loading }
}