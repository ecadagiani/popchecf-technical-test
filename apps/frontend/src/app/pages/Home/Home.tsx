import { FC } from 'react';

import UISpinner from 'app/components/UI/UISpinner';
import Recipe from 'app/components/Recipe/Recipe';
import Container from 'app/components/Container/Container';
import { useGetRecipes } from 'app/hooks/query/useGetRecipes';

const Home: FC = () => {
  // This an example of how to execute query GraphQL API
  const { data, loading } = useGetRecipes();

  return (
    <main id="Home">
      {loading && <UISpinner />}
      {!loading && data?.recipes && (
      <Container>
        {data.recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            content={recipe.content}
            ingredients={recipe.ingredients.map((recipeIngredient) => ({
              quantity: recipeIngredient.quantity,
              peopleNumber: recipeIngredient.peopleNumber,
              name: recipeIngredient.ingredient.name,
            }))}
          />
        ))}
      </Container>
      )}
    </main>
  );
};

export default Home;
