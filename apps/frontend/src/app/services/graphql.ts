import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const API_PORT = process.env['API_PORT'] || 3333;

const httpLink = createHttpLink({
  uri: `http://localhost:${API_PORT}/graphql`,
  credentials: 'same-origin',
});

export const apolloClient = () =>
  new ApolloClient({
    connectToDevTools: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
    link: httpLink,
    cache: new InMemoryCache(),
  });
