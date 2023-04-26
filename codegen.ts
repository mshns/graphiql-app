import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/*.tsx', 'src/**/*.graphql'],
  generates: {
    'src/shared/__generated__/index.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.tsx',
        baseTypesPath: '__generated__/types.ts',
        folder: '__generated__'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
