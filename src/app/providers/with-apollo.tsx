import { ApolloProvider } from '@apollo/client';
import { client } from 'app/apollo';

export const withApollo = (component: () => React.ReactNode) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>;
