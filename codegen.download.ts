import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  // documents: 'src/**/*.tsx',
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: false
      }
    }
  }
};

export default config;
