import { FC } from 'react';

import UISpinner from 'app/components/UI/UISpinner';
import Recipe from 'app/components/Recipe/Recipe';
import Container from 'app/components/Container/Container';
import { useGetRecipe } from 'app/hooks/query/useGetRecipe';
import { Navigate, useParams } from 'react-router-dom';

const RecipePage: FC = () => {
  const { id } = useParams();
  // This an example of how to execute query GraphQL API
  const { data, loading } = useGetRecipe(id);
  
  if(!id){
    return <Navigate replace to={"/"} />
  }


  return (
    <main id="Home">
      {loading && <UISpinner />}
      {!loading && data?.recipe && (
        <Container>
            <Recipe
              title={data.recipe.title}
              content={data.recipe.content}
              ingredients={data.recipe.ingredients.map((recipeIngredient) => ({
                quantity: recipeIngredient.quantity,
                peopleNumber: recipeIngredient.peopleNumber,
                name: recipeIngredient.ingredient.name,
              }))}
            />
        </Container>
      )}
    </main>
  );
};

export default RecipePage;
