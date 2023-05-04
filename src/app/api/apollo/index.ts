import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPH_API,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          __schema: {
            read(_, { toReference }) {
              return toReference({
                __typename: '__Schema'
              });
            }
          }
        }
      }
    }
  })
});
