import { gql } from '@apollo/client';

export const GetRecipeQuery = gql`
  query ($id: ID!) {
    recipe(id: $id) {
      id
      title
      content
      ingredients {
          quantity
          peopleNumber
          ingredient {
              id
              name
          }
      }
    }
  }
`;

export const GetRecipesQuery = gql`
  query {
    recipes {
        id
        title
        content
        ingredients {
            quantity
            peopleNumber
            ingredient {
                id
                name
            }
        }
    }
  }
`;
