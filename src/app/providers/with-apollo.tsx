import { ApolloProvider } from '@apollo/client';
import { client } from '../api/apollo';

export const withApollo = (component: () => React.ReactNode) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>;
