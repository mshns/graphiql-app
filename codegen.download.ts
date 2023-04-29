import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_GRAPH_API,
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
        commentDescriptions: true,
        includeIntrospectionTypes: true
      }
    },
    './introspection.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
