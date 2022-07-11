import { FC } from 'react';
import { useQuery } from '@apollo/client';

import { GetRecipeQuery } from 'app/shared/graphql/queries/recipe.query';
import UISpinner from 'app/components/UI/UISpinner';

const Home: FC = () => {
  // This an example of how to execute query GraphQL API
  const { data, loading } = useQuery(GetRecipeQuery, {
    variables: {
      id: '1',
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <div id="Home">
      <br />
      {loading && <UISpinner />}
      {!loading && data?.recipe && <div>Recipe {data.recipe.id}</div>}
    </div>
  );
};

export default Home;
