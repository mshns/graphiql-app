import type { IGraphQLConfig } from 'graphql-config';

const config: IGraphQLConfig = {
  schema: import.meta.env.VITE_GRAPH_API
};

export default config;
